'use client';
import React from "react";
import { useState, useEffect } from "react";
import {usePathname} from 'next/navigation';
import Link from 'next/link'
// import Image from "next/image";

export default function ColorCatalog(){
  const [selectedColor,setSelectedColor]=useState<string | null>(null);
    const [rangeCallout,setRangeCallout]=useState<string | null>(null);
    const [Product,setProduct]=useState<string | null>(null);
    const [ProductRange,setProductRange]=useState<string[] | null>(null);
    const [ProductHL,setProductHL]=useState<string | null>(null);
    const [ProductDesc,setProductDesc]=useState<string | null>(null);
    const FaceBrickRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    const FaceBrickHL = "Endicott face brick: Durable and aesthetically versatile for timeless architectural design.";
    const FaceBrickDesc = "Endicott face brick elevates architecture with its rich palette of colors, from classic red and black to contemporary gray and tan.  Complementing the diverse color selection are unique textures like velour, smooth, and artisan, offering endless design possibilities for stunning and enduring facades.";
    const ThinBrickRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    const ThinBrickHL ='Endicott thin brick: Durable and versatile for exterior applications, meeting PCI standards.';
    const ThinBrickDesc = 'Endicott thin brick expands design possibilities with its lightweight versatility, offering a wide range of colors and textures to achieve stunning and unique exterior applications. From modern commercial buildings to traditional homes, Endicott thin brick provides enduring beauty and lasting value.';
    const PaverRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    const PaverHL ='Endicott pavers provide enduring beauty and functionality for a wide range of paving applications.';
    const PaverDesc = 'Endicott pavers, provide enduring beauty and functionality for a wide range of paving applications.  Crafted for lasting performance, these pavers are available in a variety of colors to complement any design aesthetic.  Create stunning streetscapes, walkways, and driveways with the timeless elegance of Endicott pavers.';
    const pathname = usePathname();
    useEffect(()=>{
      const parts = pathname.split('/');
      if(parts.length>1){
        setProduct(parts[1]);
      }
     
      setSelectedColor(pathname.includes('-')?pathname.split('-')[1]:null);
      
      
    },[pathname]);
    useEffect(()=>{
      if(Product==='FaceBrick'){
        setProductRange(FaceBrickRange);
        setProductDesc(FaceBrickDesc);
        setProductHL(FaceBrickHL);
      }else if(Product==='ThinBrick'){
        setProductRange(ThinBrickRange);
        setProductDesc(ThinBrickDesc);
        setProductHL(ThinBrickHL);
      }else if(Product==='Paver'){
        setProductRange(PaverRange);
        setProductDesc(PaverDesc);
        setProductHL(PaverHL);
      }else{
        setProductRange(null);
      }
    },[Product,FaceBrickRange,ThinBrickRange,PaverRange]);
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
        setRangeCallout(null); // Or a default value for other cases
      }
    },[selectedColor]);
    return(
<div className="row d-flex justify-content-between ">
          <div className={`col-12 col-xl-6 ${Product==='FaceBrick'?'faceBrickBox':(Product==='ThinBrick'?'thinBrickBox':(Product==='Paver'?'paverBox':'')) } ms-0 m-xl-3 text-white ps-3 pt-2 pb-2 `}>
            <div className="row">
              <div className="col-6">
              <h1 className="univers-55-Oblique d-inline-block ">{Product? Product.replace(/([a-z])([A-Z])/g, '$1 $2'):''}</h1>
              </div>
              <div className="col-6 d-flex justify-content-end">
              <h2 className="museo-light d-inline  fs-6 fst-italic ">{rangeCallout}</h2>
              </div>

            </div>
            
            
            <h2 className="museo-light ">{ProductHL}</h2>
            <span className="univers-55-Roman">{ProductDesc}</span>
          </div>
          <div className="col-12 col-xl-5 pb-2 pt-2 ms-xl-3  ">
            

            <div className="row univers-55-Roman text-rock h-100  w-100  d-flex justify-content-xl-end justify-content-center ">
              <div className="col-4 col-md-5 col-xl-3 border-end  text-center   ">
                <div className="row border-bottom ">
                  <div className="col ">
                    <h2 className="fs-5 ">Product</h2>
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-nowrap ">
                    {/* <span className="d-block text-uppercase  mt-2  pt-2 pb-2 text-rock ">ALL</span> */}
                    <span className="d-block text-uppercase   pt-2 pb-2 bg bg-black text-stone rounded-2">Face Brick</span>
                    <span className="d-block text-uppercase   pt-2 pb- text-rock">Thin Brick</span>
                    <span className="d-block text-uppercase   pt-2 pb-2 text-rock">Pavers</span>
                  </div>
                </div>
                
              </div>
              <div className="col-7 col-md-5 col-xl-6 text-center">
                <div className="row">
                  <div className="col border-bottom">
                    <h2 className="fs-5 ">Color Range</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    {
                      ProductRange?.map((ranger,index)=>(
                        <Link key={index}  className="text-decoration-none text-rock" href={`/${Product}/Colors-${ranger.split("/")[0]}`}><span className={`d-block text-uppercase   pt-2 pb-2 ${index===0 && (selectedColor===null || selectedColor===ranger.split('/')[0])?'mt-2 bg bg-black text-stone rounded-2':selectedColor === ranger.split('/')[0] ? 'bg-black text-stone rounded-2' : ''}  `}>{ranger}</span></Link>
                      ))}
                    {/* <Link className="text-decoration-none text-rock" href="/FaceBrick/Colors-ALL"><span className={`d-block text-uppercase  mt-2 pt-2 pb-2  ${selectedColor===null || selectedColor==='ALL'?'bg bg-black text-stone rounded-2':''} `}>All</span></Link>
                    <Link className="text-decoration-none text-rock" href="/FaceBrick/Colors-Red"> <span className={`d-block text-uppercase   pt-2 pb-2  ${selectedColor==='Red' || selectedColor==='Burgundy'?'bg bg-black text-stone rounded-2':''} `}>Red/Burgundy</span></Link>
                    <Link className="text-decoration-none text-rock " href='/FaceBrick/Colors-Black'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Black' || selectedColor==='Plum'?'bg bg-black text-stone rounded-2':''}`} >Black/Plum</span></Link>
                    <Link className="text-decoration-none text-rock" href='/FaceBrick/Colors-Gray'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Gray' || selectedColor==='White'|| selectedColor==='Cream' || selectedColor==='Buff'?'bg bg-black text-stone rounded-2':''}`}>Gray/White/Cream/Buff</span></Link>
                    <Link className="text-decoration-none text-rock" href='/FaceBrick/Colors-Tan'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Tan' || selectedColor==='Brown' || selectedColor==='Orange'?'bg bg-black text-stone rounded-2':''}`}>Tan/Brown/Orange</span></Link> */}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    )
}