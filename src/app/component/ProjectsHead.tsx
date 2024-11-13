'use client'
import React from "react";
import ProductBox from "./ProductBox";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ProjectHeadProps {
    setSharedValue: (newValue: string) => void;
  }

export default function ProjectsHead({ setSharedValue }: ProjectHeadProps){
   
    const [ProductRange,setProductRange]=useState<string[] | null>(null);
    const [Color,setColor]=useState<string | null>(null);
    const [Header,setHeader]=useState<string | null>(null);
    const [Description,setDescription]=useState<string | null>(null);
    const [Product,setProduct]=useState<string | null>(null);
    const FaceBrickRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    const ThinBrickRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    const PaverRange = ["ALL","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"];
    
    const pathname = usePathname();
    useEffect(()=>{
        const parts = pathname.split('/');
        setProduct(parts[1]);
      if(parts.length>1){
        const PathColor = parts[2].includes('-')?pathname.split('-')[1]:null;
        setSharedValue(PathColor as string);
          if(PathColor==='Red' || PathColor==='Burgundy'){
            setColor('Red/Burgundy ');
            setHeader("Get Inspired by Red and Burgundy Brick Projects");
            setDescription("Endicott's red and burgundy brick selection offers a rich palette of warm hues, from the deep tones of Bordeaux Blend and Burgundy Blend to the vibrant accents of Ruby Red and Rose Blend.  These versatile colors create stunning facades for a variety of architectural styles, whether you seek a traditional or contemporary aesthetic.");
          
        }else if(PathColor==='Black' || PathColor==='Plum'){
            setColor('Black/Plum');
            setHeader("Bold & Dramatic: Endicott Black & Plum Brick Projects");
            setDescription("Experience the dramatic impact of Endicott's black and plum brick in a range of architectural settings. These projects showcase the versatility of these bold colors, from creating striking modern facades to adding a touch of timeless sophistication.");
          }else if(PathColor==='Gray' || PathColor==='White' || PathColor==='Cream' || PathColor==='Buff'){
            setColor('Gray/White/Cream/Buff');
            setHeader("Endicott's Subtle Sophistication: Gray, White, Cream & Buff Brick");
            setDescription("Discover the subtle elegance of Endicott's gray, white, cream, and buff brick in a variety of architectural applications.  These projects showcase the versatility of these colors, from creating bright and airy facades to adding a touch of understated sophistication.");
          }else if(PathColor==='Tan' || PathColor==='Brown' || PathColor==='Orange'){
            setColor('Tan/Brown/Orange');
            setHeader("Earthy Elegance: Endicott Tan, Brown & Orange Brick Projects");
            setDescription("Explore the warmth and versatility of Endicott's tan, brown, and orange brick in a diverse collection of projects. These earthy hues create inviting facades, adding a touch of natural beauty to both traditional and contemporary designs.");
          }else{
            setColor(null);
            setHeader("Endicott Face Brick: Inspiring Project Gallery");
            setDescription("Endicott face brick projects showcase the versatility and beauty of our brick across a diverse range of architectural styles, from modern museums to historic restorations and everything in between. Explore our project gallery to see how Endicott brick brings enduring elegance and character to buildings across the country.");
          }
        
        
      }
     
    //   setColor(pathname.includes('-')?pathname.split('-')[1]:null);
      
      
    },[pathname]);
    useEffect(()=>{
        if(Product==='FaceBrick'){
          setProductRange(FaceBrickRange);
       
        }else if(Product==='ThinBrick'){
          setProductRange(ThinBrickRange);
      
        }else if(Product==='Paver'){
          setProductRange(PaverRange);
        
        }else{
          setProductRange(null);
        }
      },[Product]);
    
    

    
return(
    <div className="row">
<ProductBox setDescription={Color} productHeadLine={Header} ProductDescription={Description}/>
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
                        <Link key={index}  className="text-decoration-none text-rock" href={`/${Product}/Projects-${ranger.split("/")[0]}`}><span className={`d-block text-uppercase   pt-2 pb-2 ${index===0 && (Color===null || Color===ranger.split('/')[0])?'mt-2 bg bg-black text-stone rounded-2':Color === ranger.split('/')[0] ? 'bg-black text-stone rounded-2' : ''}  `}>{ranger}</span></Link>
                      ))}
                   
                  </div>
                </div>
                
              </div>
            </div>
          </div>
    </div>

)   

}