'use client';
import React from "react";
//import { useEffect } from "react";
//import { usePathname } from "next/navigation";
import ColorBody from "@/app/component/ColorBody";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
export default function IndividualColor(){
    // const [selectedColor,setSelectedColor]=useState<string | null>(null);
    // const [Product,setProduct]=useState<string | null>(null);
    // const pathname = usePathname();
    //  useEffect(()=>{
    //    setSelectedColor(pathname.includes('-')?pathname.split('-')[1]:null);
    //    const parts = pathname.split('/');
    //   if(parts.length>1){
    //     setProduct(parts[1]);
    //   }
      
    // },[pathname]);
    return(
       <div className="container-fluid">
        <Navigate pageSettings="light"/>
        <ColorBody/>
        <Footer pageSetUp="light"/>
        

       </div>
    )
}