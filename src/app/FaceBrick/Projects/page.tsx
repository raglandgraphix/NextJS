'use client'
import React from "react";
import Navigate from "../../component/navigate";
import ProjectsHead from "../../component/ProjectsHead";
import Footer from "@/app/component/footer";
import ProjectBody from "@/app/component/ProjectsBody";
//import { useState } from "react"; 



export default function Projects(){
    //const [sharedValue, setSharedValue] = useState('Initial value'); 
    //const [product, setProduct] = useState<string>('FaceBrick');
    return(
        <div className="container-fluid">           
           <Navigate pageSettings="light"/>
           <ProjectsHead  />
           <ProjectBody />
           <Footer pageSetUp="light"/>


        </div>
    )
}