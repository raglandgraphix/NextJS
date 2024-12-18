'use client';
import React from "react";
//import { useState } from "react";
import ColorHead from "@/app/component/ColorHead";
//import ColorBody from "@/app/component/ColorBody";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
export default function IndividualColor(){
    //const [selectedSize, setSelectedSize] = useState<string | null>(null); 
    
   
    return(
       <div className="container-fluid">

        <Navigate pageSettings="light"/>
        {/* <ColorHead setSelectedSize={setSelectedSize} />  */}
      {/* <ColorBody selectedSize={selectedSize} /> Pass the selected size */}
        <Footer pageSetUp="light"/>
        

       </div>
    )
}