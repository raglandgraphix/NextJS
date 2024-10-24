'use client';
import React from "react";
import { useState, useEffect } from "react";
import {usePathname} from 'next/navigation';
import { DataItem } from "../../../Types/ProductTypes";
import FBCSelections from "./FBCSelections";
import TBCSelections from "./TBCSelections";
import PCSelections from "./PCSelections";


export default function ColorCatalog(){
 
    const [Product,setProduct]=useState<string | null>(null);
    const [Color,setColor]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    
    //const [Description,setDescription]=useState<string | null>(null);
    
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
        // Selection = FBCSelections;
      }else if(Product==='ThinBrick'){
        JSONData = '/JSON/ThinbrickColors.json';
        // Selection = TBCSelections;
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
          <div className={`col-12 col-lg-5  col-xl-6 ${Product==='FaceBrick'?'faceBrickBox':(Product==='ThinBrick'?'thinBrickBox':(Product==='Paver'?'paverBox':'')) } ms-0 m-xl-3 text-white ps-3 pt-2 pb-2 `}>
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
            
          </div>
          {/* i didnt create a component for the above because it alread is just one thought. I think it would be excessive */}
          <div className="col-12 col-md-12 col-lg-7 col-xl-5 p-0 ">

            {
              Product==='FaceBrick'?<FBCSelections/>:(Product==='ThinBrick'?<TBCSelections/>:(Product==='Paver'?<PCSelections/>:'Error'))            }
          
          </div>
          
          
        </div>
    )
}