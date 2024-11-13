'use client'
import React from "react";
import { useState,useEffect } from "react";
import { FetchProjects } from "../../../../../Utilities/FetchProjects";
import { Job } from "../../../../../Types/ProjectTypes";
import { usePathname } from "next/navigation";

export default function IndividualProject(){
    const [Product,setProduct]=useState<string | null>(null);
    // eslint-disable-next-line no-unused-vars
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    // eslint-disable-next-line no-unused-vars
    const [RangeColors,setRangeColors]=useState<string | null>(null);
    const pathname=usePathname();
    useEffect(()=>{
        const parts = pathname.split('/');
        if(parts.length>1){
            setProduct(parts[1]);
            setRangeColors( parts[2].includes('-')?pathname.split('-')[1]:null);
        }


    })
    
   
useEffect(() => {
    const getProjectData = async () => {
      const result = await FetchProjects(Product);
      setProjectData(result);
    };

    getProjectData();
  }, [Product]);
    <div>

    </div>
}