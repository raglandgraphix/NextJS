//Face brick Colors Page
'use client';
import Navigate from "../component/navigate"
import React from "react";
import { useState } from "react";
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
    projects: any[]; // You might want to define a more specific type for projects if possible
  }
 
export default function facebrick(){
    const [data, setData] = React.useState<DataItem[] | null>(null); // Correct type

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
      <div className="container-fluid">
        <Navigate pageSettings="light"/>
       
       <div className="row">
        
            {
                data.map((item)=>(
<div key={item.id} className="col-4">

<div className="Card ">
                <Image className="card-img-top img-fluid" width={500} height={500} alt={item.altTag} src={item.mainImage}  />
                    <div className="card-body">
                        <div className="card-title">
                            {item.fullName}
                        </div>

                    </div>

            </div>


            </div>
                ))
            }
            
       

       </div>
        
      </div>
    )
}
