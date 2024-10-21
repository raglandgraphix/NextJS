import React from "react";
import { useState, useEffect } from "react";
import {usePathname} from 'next/navigation';
//import Link from 'next/link'
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
//   interface CatalogBodyProps {
//     productType: string;
//   }
 
export default function CatalogBody(){
  
    
    const [data, setData] = useState<DataItem[] | null>(null); // Correct type
     const [selectedColor,setSelectedColor]=useState<string | null>(null);
     
   
     const pathname = usePathname();
     useEffect(()=>{
       setSelectedColor(pathname.includes('-')?pathname.split('-')[1]:null);
      
    },[pathname]);

    
    
    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/JSON/FacebrickColors.json');
            const jsonData: DataItem[] = await response.json(); // Correct type
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      if (!data) {
        return <div>Loading...</div>;  
      }
      return(
        <div className="row d-flex justify-content-center justify-content-md-start">
          {
            data.map((item)=>(
              selectedColor === 'ALL' || selectedColor === null || item.colorGroup.some(color => (selectedColor ?? '').includes(color)) ? (
                
              <div key={item.id} className=" col-11 col-md-6 col-xl-4 mb-5">
                <div className="Card border rounded-bottom-4 m-1 shadow text-rock">
                  <Image className="card-img-top img-fluid" width={500} height={500} alt={item.altTag} src={item.mainImage}  />
                    <div className="card-body">
                      <div className="card-title text-center">
                        <h2 className="text-uppercase univers-45-light fs-5 mt-2">{item.fullName.replace(/_/g, ' ')}</h2>
                      </div>
                    </div>
                </div>
              </div>
              ):null
            ))
          }
        </div>
      )
    }