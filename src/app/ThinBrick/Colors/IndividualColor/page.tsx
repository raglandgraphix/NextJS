'use client';
import React from "react";
//import { useEffect } from "react";
//import { usePathname } from "next/navigation";
import ColorHead from "@/app/component/ColorHead";
import ColorBody from "@/app/component/ColorBody";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
export default function IndividualColor(){
    
    return(
       <div className="container-fluid">

        <Navigate pageSettings="light"/>
        <ColorHead/>
        <ColorBody/>
        <Footer pageSetUp="light"/>
        

       </div>
    )
}