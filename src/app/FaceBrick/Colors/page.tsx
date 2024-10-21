//Face brick Colors Page
//'use client';
//import { useEffect } from "react";
import Navigate from "../../component/navigate";
import Catalog from "../../component/CatalogHead";
import CatalogBody from "../../component/CatalogBody";
import Footer from "../../component/footer";
import React from "react";

//import Head from "next/head";

 
export default function Facebrick(){
  
  // useEffect(() => {
  //   document.title = "Endicott Face Brick Colors ";
  // }, []);
 
    return(
      <div className="container-fluid">
        {/* <Head>
            <title>{document.title}</title>
            <meta
            name = "Endicott Face Brick Colors"
            content = "Explore the diverse colors of Endicott Face Brick. Find the perfect brick for your residential or commercial project with our wide range of classic and contemporary hues."
            />
        </Head> */}
        <Navigate pageSettings="light"/>
        <Catalog/>
        <CatalogBody productType="FaceBrick"/>
        <Footer pageSetUp="light"/>
      </div>
    )
}
export function generateMetadata() { // Use generateMetadata to set the title
  return {
    title: "Endicott Thin Brick Colors",
   
  };
}