import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import Link from "next/link";
import { FetchProduct } from "../../../Utilities/FetchProduct";
import { DataItem } from "../../../Types/ProductTypes";


export default function ArchitectSupport(){

    
    const [Data,setData]=useState<DataItem[] | null>(null);
    const [Product,setProduct]=useState<string | null>(null);
    const [Color,setColor]=useState<string | null>(null);
    const [Texture,setTexture]=useState<string | null>(null);
    const Pathname = usePathname();
    
    useEffect(()=>{
        const Parts = Pathname.split('/');
        if(Parts.length>1){
            let ColorTexture;
            setProduct(Parts[1]);
            if(Pathname.includes('-')){
                ColorTexture = Parts[Parts.length-1].split('-');
                setColor(ColorTexture[0]);
            setTexture(ColorTexture[ColorTexture.length-1]);
            }else{
                setColor(Parts[Parts.length-1]);
                setTexture('Smooth');
            }
            
            
        };
        

    });
    
    
    useEffect(() => {
        const getData = async () => {
          const result = await FetchProduct(Product);
          setData(result);
        };
    
        getData();
      }, [Product]);
    
    return(
        <div className="col-4" >
        <div className="row">
            
            <div className="col">
                {
                    Data?.map((item)=>(
                       
                       item.fullName===Color?item.textures.map((texture)=>(
                        texture.texture===Texture?
                        
                        <a key={texture.texture} className="text-decoration-none" href={texture.fallbackLargeImage} download>
                            <div className="row mb-2 border-bottom ">
                                <div className="col-3">
                                    <Image  src='/assets/MiscImages/RenderableColors.png' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                                </div>
                                <div className="col-9">
                                    <p className="text-black">This Color is available in a seemless image for rendering. Click to download.</p>
                                </div>

                            </div>
                            
                           
                        </a>
                       :''
                       )):''
                    ))
                }
                
                
            </div>

        </div>
        <div className="row ">
            <div className="col">
                {
                    Data?.map((item)=>(
                        item.fullName===Color?
                        item.textures.map((texture)=>(
                          texture.texture===Texture?
                          <a key={texture.texture} href={texture.artx}>
                          <Image className="h-75" src='/assets/MiscImages/artx-logo.svg' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                          </a>:'' 
                        )):''
                    ))
                }
                
                
            </div>

        </div>
        
        <div className="row">
            <div className="col">
                <a href="">
                <Image src='/assets/MiscImages/CADdetails-Logo-horizontal.svg' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                </a>
                
            </div>

        </div>
        </div>
    )
}