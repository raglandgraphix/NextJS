//Face brick Colors Page
'use client';
import Navigate from "../../component/navigate"
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
    projects: unknown[]; // You might want to define a more specific type for projects if possible
  }
 
export default function Facebrick(){
    const [data, setData] = useState<DataItem[] | null>(null); // Correct type

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
          <div className="col-6 faceBrickBox m-3 text-white ps-3 pt-2 pb-2">
            <h1 className="univers-55-Oblique">Face Brick</h1>
            <h2 className="museo-light">Endicott face brick: Durable and aesthetically versatile for timeless architectural design.</h2>
            <span className="univers-55-Roman">Endicott face brick elevates architecture with its rich palette of colors, from classic reds and browns to contemporary grays and tans.  Complementing the diverse color selection are unique textures like Velour, Smooth, and Artisan, offering endless design possibilities for stunning and enduring facades.</span>
          </div>
          <div className="col-5">
            <div className="row univers-55-Roman">
              <div className="col-4">
                <h2 className="fs-5">Product</h2>
              </div>
              <div className="col-8">
                <h2 className="fs-5">Color Range</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            data.map((item)=>(
              <div key={item.id} className="col-4">
                <div className="Card border rounded-bottom rounded-3 m-1  ">
                  <Image className="card-img-top img-fluid" width={500} height={500} alt={item.altTag} src={item.mainImage}  />
                    <div className="card-body">
                      <div className="card-title text-center">
                        <h2 className="text-uppercase univers-45-light fs-5 mt-2">{item.fullName.replace(/_/g, ' ')}</h2>
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
