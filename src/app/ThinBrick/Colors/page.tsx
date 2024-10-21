//Face brick Colors Page
'use client';
import { useEffect } from "react";
import Navigate from "../../component/navigate";
import Catalog from "../../component/CatalogHead";
import CatalogBody from "@/app/component/CatalogBody";
import Footer from "../../component/footer";
import React from "react";
import Head from "next/head";

 
export default function Thinbrick(){
  useEffect(() => {
    document.title = "Endicott Thin Brick Colors ";
  }, []);
  
    return(
      <div className="container-fluid">
        <Head>
            <title>{document.title}</title>
            <meta
            name = "Endicott Thin Brick Colors"
            content = "Explore the diverse colors of Endicott Thin Brick. Find the perfect brick for your residential or commercial project with our wide range of classic and contemporary hues."
            />
        </Head>
        <Navigate pageSettings="light"/>
        <Catalog/>
        <CatalogBody productType='ThinBrick'/>
        <Footer pageSetUp="light"/>
      </div>
    )
}
