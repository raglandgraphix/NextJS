'use client'
import React from "react";
import { useState,useEffect } from "react";
import { FetchProjects } from "../../../../../Utilities/FetchProjects";
import { Job } from "../../../../../Types/ProjectTypes";
//import { usePathname } from "next/navigation";
import { SplitPathname } from "../../../../../Utilities/SplitPathname";

export default function IndividualProject(){
    const { Product } = SplitPathname();
    
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    
    
   
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