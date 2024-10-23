'use client';
import React from "react";
import { useState, useEffect } from "react";
import {usePathname} from 'next/navigation';
import Link from 'next/link'
import Image from "next/image";

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
  
 
export default function CatalogBody(){
  
    //console.log(productType);
    const [data, setData] = useState<DataItem[] | null>(null); // Correct type
    const [selectedColor,setSelectedColor]=useState<string | null>(null);
    const [Product,setProduct]= useState<string | null>(null);
    //const [JSONData,setJSONData]=useState<string | null>(null);
     
   
     const pathname = usePathname();
     useEffect(()=>{
       setSelectedColor(pathname.includes('-')?pathname.split('-')[1]:null);
       const parts = pathname.split('/');
      if(parts.length>1){
        setProduct(parts[1]);
      }
      
    },[pathname]);

   
   // let myVariable = JSONData;
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
    
      if (!data) {
        return <div></div>;  
      }
      return(
        <div className="row d-flex justify-content-center justify-content-md-start">
          {
            data.map((item)=>(
              selectedColor === 'ALL' || selectedColor === null || item.colorGroup.some(color => (selectedColor ?? '').includes(color)) ? (
                
              <div key={item.id} className=" col-11 col-md-6 col-xl-4 mb-5">
                <Link className="text-decoration-none" href={`/${Product}/Colors/${item.fullName}`} >
                <div className="Card border rounded-bottom-4 m-1 shadow text-rock">
                  <Image className="card-img-top img-fluid" loader={() => (item.mainImage)} width={500} height={500} alt={item.altTag} src={item.mainImage}  />
                    <div className="card-body">
                      <div className="card-title text-center">
                        <h2 className="text-uppercase univers-45-light fs-5 mt-2">{item.fullName.replace(/_/g, ' ')}</h2>
                      </div>
                    </div>
                </div>
                </Link>
              </div>
              ):null
            ))
          }
        </div>
      )
    }