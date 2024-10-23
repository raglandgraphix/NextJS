'use client';
import React from "react";
import { useState, useEffect } from "react";
import {usePathname} from 'next/navigation';
import Link from 'next/link'
// import Image from "next/image";
interface Texture {
  texture: string;
  textureDescription?: string; // Optional property
  image: string;
  fallbackImage?: string; // Optional property
  fallbackLargeImage?: string; // Optional property
  largeImage?: string; // Optional property
  sizes: string[];
}  
interface DataItem {
  id: number;
  fullName: string;
  descriptionTitle: string;
  description: string;
  mainImage: string;
  colorGroup: string[];
  altTag: string;
  textures: Texture[];
  productLine: string;
  productCall: string;
  projects: unknown[]; // You might want to define a more specific type for projects if possible
}

export default function ColorCatalog(){
 
    const [Product,setProduct]=useState<string | null>(null);
    const [Color,setColor]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    const [Description,setDescription]=useState<string | null>(null);
    
    const pathname = usePathname();
    useEffect(()=>{
      const parts = pathname.split('/');
      if(parts.length>1){
        setColor( parts[parts.length-1]);
        setProduct(parts[1]);
        //setColor(color.replace(/_/g," "));
      }
     
      
      
      
    },[pathname]);
    
    React.useEffect(() => {
      let JSONData =  '/JSON/FacebrickColors.json';
      if(Product==='FaceBrick'){
        JSONData = '/JSON/FacebrickColors.json';
      }else if(Product==='ThinBrick'){
        JSONData = '/JSON/ThinbrickColors.json';
      }else if(Product==='Paver'){
        JSONData= '/JSON/PaverColors.json';
      }
      
        const fetchData = async () => {
          
          try {
            const response = await fetch(JSONData);
            const jsonData: DataItem[] = await response.json(); // Correct type
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [Product]);
    
      if (!Data) {
        return <div></div>;  
      }
      
    
    return(
<div className="row d-flex justify-content-between ">
          <div className={`col-12 col-xl-6 ${Product==='FaceBrick'?'faceBrickBox':(Product==='ThinBrick'?'thinBrickBox':(Product==='Paver'?'paverBox':'')) } ms-0 m-xl-3 text-white ps-3 pt-2 pb-2 `}>
            <div className="row">
              <div className="col-6">
              <h1 className="univers-55-Oblique d-inline-block ">{Product? Product.replace(/([a-z])([A-Z])/g, '$1 $2'):''}</h1>
              </div>
              <div className="col-6 d-flex justify-content-end">
              <h2 className="museo-light d-inline  fs-6 fst-italic ">{Color?.replace(/_/g," ")}</h2>
              </div>

            </div>
            
            {
              Data.map((item)=>(
                item.fullName===Color?(
                  <div key={item.id}>
                 <h2 className="museo-light ">{item.descriptionTitle}</h2>
             <span className="univers-55-Roman">{item.description}</span>
            </div>
                ):''
              ))
            }
            {/* <h2 className="museo-light ">{Product}</h2>
            <span className="univers-55-Roman">{Product}</span> */}
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
                    {/* {
                      ProductRange?.map((ranger,index)=>(
                        <Link key={index}  className="text-decoration-none text-rock" href={`/${Product}/Colors-${ranger.split("/")[0]}`}><span className={`d-block text-uppercase   pt-2 pb-2 ${index===0 && (selectedColor===null || selectedColor===ranger.split('/')[0])?'mt-2 bg bg-black text-stone rounded-2':selectedColor === ranger.split('/')[0] ? 'bg-black text-stone rounded-2' : ''}  `}>{ranger}</span></Link>
                      ))}
                    */}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    )
}