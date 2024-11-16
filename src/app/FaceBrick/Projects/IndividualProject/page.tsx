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
//   useEffect(()=>{
//     const ColorsWithDuplicates:string[] = [];
//     ProjectData?.map((item)=>{
//         item.jobTitle===ProjectName?
//         item.products.map((product)=>{
            
//             ColorsWithDuplicates.push(product.color);
//         }):''
//     })
//     const uniqueColors = Array.from(new Set(ColorsWithDuplicates)); 
//     setProdColors(uniqueColors);
//   },[ProjectData,ProjectName])

 //console.log(ProdColors);
  
  return(
    
<div className="row p-0 ">
<Navigate pageSettings="light" />
<div className="row d-flex">
<Carousel className="">
      
        {
            ProjectData?.map((item)=>(
                item.jobTitle===ProjectName?
                
                item.photoAlbum.map((photo,index)=>(
                   
                    <Carousel.Item key={index}>
                    
                    <Image key={index} className="" placeholder="blur"   src={photo} alt={item.altTag} width={1500} height={750}style={{ 
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
  )
    
}