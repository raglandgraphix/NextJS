'use client'
import React from "react";
import { useState,useEffect } from "react";
import { DataItem} from "../../../Types/ProductTypes";//this is part of the fetch
import { FetchProduct } from "../../../Utilities/FetchProduct";//This is part of the fetch
import { usePathname } from "next/navigation";
interface ProductBoxProps {
    setDescription: string | null;
    productHeadLine:string | null;
    ProductDescription:string | null;
  }



export default function ProductBox({ setDescription,productHeadLine,ProductDescription }: ProductBoxProps){
    const [Product,setProduct]=useState<string | null>(null);
    //const [Color,setColor]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    const pathname = usePathname();
    useEffect(()=>{
      const parts = pathname.split('/');
      if(parts.length>1){
        //const getTexture = parts[parts.length-1].split('-');
          //setColor( getTexture[0].replace(/_/g,' '));
        
        setProduct(parts[1]);
      } 
      
      
      
    },[pathname]);
    useEffect(() => {
        const getData = async () => {
          const result = await FetchProduct(Product);
          setData(result);
        };
    
        getData();
      }, [Product]);
    
     
      
        if (!Data) {
          return <div></div>;  
        }
return(
    <div className={`col-12 col-lg-5  col-xl-6 rounded-2 ${Product==='FaceBrick'?'faceBrickBox':(Product==='ThinBrick'?'thinBrickBox':(Product==='Paver'?'paverBox':'')) } ms-0 m-xl-3 text-white ps-3 pt-2 pb-2 `}>
            <div className="row">
              <div className="col-6">
              <h1 className="univers-55-Oblique d-inline-block ">{Product? Product.replace(/([a-z])([A-Z])/g, '$1 $2'):''}</h1>
              </div>
              {/* <div className="col-6 d-flex justify-content-end">
              <h2 className="museo-light d-inline  fs-6 fst-italic ">{Color?.replace(/_/g,' ').replace(/(Medium Ironspot )(\d+)/g, '$1#$2')}</h2>
              </div> */}
              
              <div className="col-6 d-flex justify-content-end">
              <h2 className="museo-light d-inline  fs-6 fst-italic me-2 ">{setDescription}</h2>
              </div>

            </div>
            <h2 className="museo-light ">{productHeadLine}</h2>
            <span className="univers-55-Roman">{ProductDescription}</span>
            {/* {
              Data.map((item)=>(
                item.fullName===Color?(
                  <div key={item.id}>
                 <h2 className="museo-light ">{item.descriptionTitle}</h2>
             <span className="univers-55-Roman">{item.description}</span>
            </div>
                ):''
              ))
            } */}
            
          </div>
)

}