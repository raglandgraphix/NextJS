'use client'
import React from "react";
import { useState,useEffect } from "react";
import { FetchProjects } from "../../../../../Utilities/FetchProjects";
import { Job } from "../../../../../Types/ProjectTypes";
//import { usePathname } from "next/navigation";
import { SplitPathname } from "../../../../../Utilities/SplitPathname";

export default function IndividualProject(){
    const { Product } = SplitPathname();
    //const [Product,setProduct]=useState<string | null>(null);
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    //const [RangeColors,setRangeColors]=useState<string | null>(null);
    // const pathname=usePathname();
    // useEffect(()=>{
    //     const parts = pathname.split('/');
    //     if(parts.length>1){
    //         setProduct(parts[1]);
    //         setRangeColors( parts[2].includes('-')?pathname.split('-')[1]:null);
    //     }
    //     console.log(ProjectData);
    //     console.log(RangeColors);

    // })
    
   
useEffect(() => {
    const getProjectData = async () => {
      const result = await FetchProjects(Product);
      setProjectData(result);
    };

    getProjectData();
    console.log(ProjectData)
  }, [Product]);

  
    <div>

    </div>
}