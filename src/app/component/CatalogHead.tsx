'use client';
import React from "react";
import { useState, useEffect } from "react";
//import {usePathname} from 'next/navigation';
//import Link from 'next/link'
import ProductBox from "./ProductBox";
import ProductRangeSelection from "./ProductRangeSelection";
import { SplitPathname } from "../../../Utilities/SplitPathname";


export default function ColorCatalog(){
  const {Product}=SplitPathname();
  const [selectedColor,setSelectedColor]=useState<string | null>(null);
    const [rangeCallout,setRangeCallout]=useState<string | null >(null);
    //const [Product,setProduct]=useState<string | null>(null);
    //const [ProductRange,setProductRange]=useState<string[] | null>(null);
    const [ProductHL,setProductHL]=useState<string | null>(null);
    const [ProductDesc,setProductDesc]=useState<string | null>(null);
    //const FaceBrickRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    const FaceBrickHL = "Endicott face brick: Durable and aesthetically versatile for timeless architectural design.";
    const FaceBrickDesc = "Endicott face brick elevates architecture with its rich palette of colors, from classic red and black to contemporary gray and tan.  Complementing the diverse color selection are unique textures like velour, smooth, and artisan, offering endless design possibilities for stunning and enduring facades.";
    //const ThinBrickRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    const ThinBrickHL ='Endicott thin brick: Durable and versatile for exterior applications, meeting PCI standards.';
    const ThinBrickDesc = 'Endicott thin brick expands design possibilities with its lightweight versatility, offering a wide range of colors and textures to achieve stunning and unique exterior applications. From modern commercial buildings to traditional homes, Endicott thin brick provides enduring beauty and lasting value.';
    //const PaverRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    const PaverHL ='Endicott pavers provide enduring beauty and functionality for a wide range of paving applications.';
    const PaverDesc = 'Endicott pavers, provide enduring beauty and functionality for a wide range of paving applications.  Crafted for lasting performance, these pavers are available in a variety of colors to complement any design aesthetic.  Create stunning streetscapes, walkways, and driveways with the timeless elegance of Endicott pavers.';
    // const pathname = usePathname();
    // useEffect(()=>{
    //   const parts = pathname.split('/');
    //   if(parts.length>1){
    //     setProduct(parts[1]);
    //   }
     
    //   setSelectedColor(pathname.includes('-')?pathname.split('-')[1]:null);
      
      
    // },[pathname]);
    useEffect(()=>{
      if(Product==='FaceBrick'){
       // setProductRange(FaceBrickRange);
        setProductDesc(FaceBrickDesc);
        setProductHL(FaceBrickHL);
      }else if(Product==='ThinBrick'){
        //setProductRange(ThinBrickRange);
        setProductDesc(ThinBrickDesc);
        setProductHL(ThinBrickHL);
      }else if(Product==='Paver'){
       // setProductRange(PaverRange);
        setProductDesc(PaverDesc);
        setProductHL(PaverHL);
      }else{
        //setProductRange(null);
      }
    },[Product]);
    useEffect(()=>{
      if (selectedColor === 'Red' || selectedColor === 'Burgundy') {
        setRangeCallout('RED/BURGUNDY');
      } else if (selectedColor === 'Black' || selectedColor === 'Plum') {
        setRangeCallout('BLACK/PLUM');
      } else if (selectedColor === 'Gray' || selectedColor === 'White' || selectedColor === 'Cream' || selectedColor === 'Buff') {
        setRangeCallout('GRAY/WHITE/CREAM/BUFF');
      } else if (selectedColor === 'Tan' || selectedColor === 'Brown' || selectedColor === 'Orange') {
        setRangeCallout('TAN/BROWN/ORANGE');
      } else if (selectedColor === null || selectedColor === 'ALL') { 
        setRangeCallout(''); 
      } else {
        setRangeCallout('All'); // Or a default value for other cases
      }
    },[selectedColor]);
    return(
<div className="row d-flex justify-content-between ">
<ProductBox setDescription={rangeCallout} productHeadLine={ProductHL} ProductDescription={ProductDesc}/>
 <ProductRangeSelection/>       
          
        </div>
    )
}