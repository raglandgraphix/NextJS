'use client'
import React from "react";
import { useState,useEffect } from "react";
import { FetchProjects } from "../../../../../Utilities/FetchProjects";
import { Job } from "../../../../../Types/ProjectTypes";
import { SplitPathname } from "../../../../../Utilities/SplitPathname";
import Image from "next/image";
import Navigate from "@/app/component/navigate";
import { Carousel } from "react-bootstrap";
import Footer from "@/app/component/footer";


export default function IndividualProject(){
    const { Product,Project } = SplitPathname();
    const ProjectName = Project;//This will become a variable that is passed in by the Parameter list    
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    //const [ProdColors,setProdColors]=useState<string[] | null>(null)
    
    
   
useEffect(() => {
    const getProjectData = async () => {
      const result = await FetchProjects(Product);
      setProjectData(result);
    };

    getProjectData();
    console.log(ProjectData)
  }, [Product]);

  
  return(
<div className="container-fluid ">    
{/* <div className="row border border-danger  m-auto    "> */}
<Navigate pageSettings="light" />
<div className="row  ">
<Carousel className="border border-danger p-0 w-100 ">
      
        {
            ProjectData?.map((item)=>(
                item.jobTitle===ProjectName?
                
                item.photoAlbum.map((photo,index)=>(
                   
                    <Carousel.Item key={index}>
                    
                    <Image key={index} className="" priority  src={photo}  alt={item.altTag} width={1200} height={600}style={{ 
              width: '100%',
              height: '90vh', // Set height to 100vh
              objectFit: 'cover' // Use objectFit to cover the area
            }}/>
            
                    <Carousel.Caption className="bg-stone-50 rounded-3 text-black d-flex justify-content-center">
                    <div className="text-start">
                    <h3>{item.jobName}</h3>
                    
                    <p><span className="univers-45-light fst-italic">Color: </span>
                    {
                        Array.from(new Set(item.products?.map(product => product.color))).map((color, index, arr) => (
                        <span key={index}>
                        {color}{index < arr.length - 1 ? ", " : ""}
                        </span>
                        ))
                    }
                    
                    </p>
                    <p><span className="univers-45-light fst-italic">Size: </span>
                    {
                       Array.from(new Set(item.products.map(product => product.size))).map((size, index, arr) => (
                        <span key={index}>
                          {size}{index < arr.length - 1 ? ", " : ""}
                        </span>
                      ))
                    }
                    </p>
                    <p><span className="univers-45-light fst-italic">Location: </span><span>{item.city}, {item.stateShort}</span></p>
                    
                    </div>    
                    </Carousel.Caption>
                    
                    </Carousel.Item>
                ))
               
                
                :''
                
            ))
        }



        
       
    </Carousel>

</div>

        
<Footer pageSetUp="light"/>
    </div>
    // </div>
  )
    
}