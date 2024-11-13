'use client'
import React from "react";
import { useState,useEffect } from "react";
import { Job } from "../../../Types/ProjectTypes";
import { FetchProjects } from "../../../Utilities/FetchProjects";
import Image from "next/image";

interface ProjectBodyProps {
    sharedValue: string;
    product:string;
  }
export default function ProjectBody( { sharedValue,product }: ProjectBodyProps){
    //const [Product,setProduct]=useState<string | null>(null);
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    
    useEffect(() => {
        const getProjectData = async () => {
          const result = await FetchProjects(product);
          setProjectData(result);
        };
    
        getProjectData();
      }, [product]);

    return(
        <div className="row">
            {
                ProjectData?.map((item, index)=>(
                    sharedValue ? (
                        item.colorRange.map((items)=>(
                            items===sharedValue?
                            <div key={index} className="col-3 mb-3 position-relative d-flex justify-content-center project-container ">
                            <Image className="rounded-3" src={item.jobThumb} alt="some description" width={500} height={500}/>
                            <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                                <h2 className="fs-6 text-center">{item.jobName}</h2>
                                <h3 className="univers-45-light fs-6 text-center">{item.city},{item.stateShort}</h3>
                            </div>
                        </div> 
                            :''
                        ))
                           
                    ):
                    <div key={index} className="col-3 mb-3 position-relative d-flex justify-content-center project-container ">
                    <Image className="rounded-3" src={item.jobThumb} alt="some description" width={500} height={500}/>
                    <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                        <h2 className="fs-6 text-center">{item.jobName}</h2>
                        <h3 className="univers-45-light fs-6 text-center">{item.city},{item.stateShort}</h3>
                    </div>
                </div> 
                    )


                    )
                    
            }
        </div>
    )
}