'use client'
import React from "react";
import { useState,useEffect } from "react";
import { FetchProjects } from "../../../../../Utilities/FetchProjects";
import { Job } from "../../../../../Types/ProjectTypes";

export default function IndividualProject(){
    const [Product,setProduct]=useState<string | null>(null);
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
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