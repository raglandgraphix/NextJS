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
    
  }, [Product]);

  
  return(
<div className="container-fluid ">    
{/* <div className="row border border-danger  m-auto    "> */}
<Navigate pageSettings="light" />
<div className="row  ">
<Carousel className=" p-0  " variant="light" fade  >
      
        {
            ProjectData?.map((item)=>(
                item.jobTitle===ProjectName?
                
                item.photoAlbum.map((photo,index)=>(
                   
                    <Carousel.Item className="  carousel-height d-flex justify-content-center " key={index}>
                    
                    <Image key={index} className="object-fit-cover" priority  src={photo}  alt={item.altTag} width={1600} height={800}style={{ 
              // width: '100%',
              height: '100vh', // Set height to 100vh
              //objectFit: 'cover' // Use objectFit to cover the area
            }}/>
            
                    <Carousel.Caption className=" text-black w-100 d-flex justify-content-start" style={{ position: 'absolute', left: 0,  }}>
                    <div className="text-start ms-2 bg-white-75 shadow p-4 rounded-3" style = {{display:'inline-block'}}>
                    <h3 className="">{item.jobName}</h3>
                    
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