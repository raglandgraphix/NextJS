'use client';
import React from "react";
import { useState, useEffect } from "react";
import {usePathname} from 'next/navigation';
import { DataItem } from "../../../Types/ProductTypes";
import { FetchProduct } from "../../../Utilities/FetchProduct";//This is part of the fetch
import FBCSelections from "./FBCSelections";
import TBCSelections from "./TBCSelections";
import PCSelections from "./PCSelections";
import ProductBox from "./ProductBox";
interface ColorHeadProps {
  setSelectedSize: (size: string | null) => void;
}

export default function ColorHead({ setSelectedSize }: ColorHeadProps){
 
    const [Product,setProduct]=useState<string | null>(null);
    const [Color,setColor]=useState<string | null>(null);
    const [CleanColor,setCleanColor]=useState<string | null>(null);
    const [Data, setData] = useState<DataItem[] | null>(null); 
    //const [Texture,setTexture]=useState<string | null>('Smooth');
    const [ProdHL,setProdHL]=useState<string | null>(null);
    const [ProdDesc,setProdDesc]=useState<string | null>(null);
    const pathname = usePathname();
    useEffect(()=>{
      const parts = pathname.split('/');
      if(parts.length>1){
        const getTexture = parts[parts.length-1].split('-');
        setColor( getTexture[0]);
        
        setCleanColor(getTexture[0].replace(/_/g,' ').replace(/(Medium Ironspot )(\d+)/g, '$1#$2'));
        //setTexture(getTexture[getTexture.length-1]);
        setProduct(parts[1]);
      }
    },[pathname]);
    useEffect(() => {
      const getData = async () => {
         
              const result = await FetchProduct(Product);
      
              // Type assertion based on Product
              
                setData(result);
             
            
      };
  
      getData();
    }, [Product]);
  
   useEffect(() => {
        if (Data) { // Check if Data is available
          for (const item of Data) {
            if (item.fullName === Color) {
              setProdHL(item.descriptionTitle);
              setProdDesc(item.description);
              
           }
          }
        }
     }, [Data, Color]); // Add Data and Color to the dependency array
    
      if (!Data) {
        return <div></div>;  
      }

    
    return(
      <div className="row d-flex justify-content-between ">
          <ProductBox setDescription={CleanColor} productHeadLine={ProdHL}ProductDescription={ProdDesc}/>
          <div className="col-12 col-md-12 col-lg-7 col-xl-5 p-0  ">
          {
            Product==='FaceBrick'?<FBCSelections setSelectedSize={setSelectedSize} />:(Product==='ThinBrick'?<TBCSelections/>:(Product==='Paver'?<PCSelections/>:'Error')) 
          }
          </div>
      </div>
    )
}