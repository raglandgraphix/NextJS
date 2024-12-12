'use client'
import React from "react";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";
//import Image from "next/image";
import { DataItem as FacebrickDataItem } from "../../../Types/ProductTypes";
import { DataItem as ThinbrickDataItem } from "../../../Types/ProductTypes";
import { FetchProduct } from "../../../Utilities/FetchProduct";//This is part of the fetch
import ArchitectSupport from "./ArchitectSupport";
import SizeBody from "./SizeBody";
import ColorProjects from "./ColorProjects";
import ColorDisplay from "./ColorDisplay";
import { SplitPathname } from "../../../Utilities/SplitPathname";
//add splitnamepath


interface ColorBodyProps {
  selectedSize: string | null;
}
export default function ColorBody({ selectedSize }: ColorBodyProps){
  
  const{Product}=SplitPathname();
    //const [selectedColor,setSelectedColor]=useState<string | null>(null);
   // const [Color,setColor]=useState<string | null>(null);
   // const [Product,setProduct]=useState<string | null>(null);
   const [Data, setData] = useState<FacebrickDataItem[] | ThinbrickDataItem[] | null>(null);
   // const [Texture,setTexture]=useState<string | null>('Smooth');
    //const pathname = usePathname();
   
    // useEffect(()=>{
    //     const parts = pathname.split('/');
        
       
    //     if(parts.length>1){
          
    //       setProduct(parts[1]);
    //       const getTexture = parts[parts.length-1].split('-');
    //       setColor( getTexture[0]);
    //       if(pathname.includes('-')){
    //         setTexture(getTexture[getTexture.length-1]);
    //        }else{
    //         setTexture(null);
    //        }
          
    //     }
       
        

        
        
    //   },[pathname]);
    useEffect(() => {
      const getData = async () => {
          if (Product) {
              const result = await FetchProduct(Product);
      
              // Type assertion based on Product
              if (Product === 'FaceBrick') {
                setData(result as FacebrickDataItem[]);
              } else if (Product === 'ThinBrick') {
                setData(result as ThinbrickDataItem[]);
              }
            }
      };
    
        getData();
      }, [Product]);
    
     
      
        if (!Data) {
          return <div></div>;  
        }
    return(
      <div className="row mt-5">

      
        <div className="col-12 col-md-6 ms-0 ms-md-3 me-3 ">
          
            <div className="row ">
          <ColorDisplay/>
                
<ArchitectSupport/>
              

            </div>

        </div>
       
        <SizeBody  selectedSize={selectedSize}/>
       
              
              <ColorProjects/>

        </div>
    )
}