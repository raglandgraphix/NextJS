'use client'
import React  from "react";
import { useEffect, useState } from "react";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import { DataItemThin } from "../../../Types/ProductTypesThinbrick";
import { FetchProductThin } from "../../../Utilities/FetchProductThin";
import { TextureData } from "../../../Types/TextureTypes";
import { FetchTexture } from "../../../Utilities/FetchTextures";
import Image from "next/image";
interface ASThinBrickProps {
    ASthickness: string | null;
  }
export default function ASThinBrick({ ASthickness }: ASThinBrickProps){
    const {Product,Color,Texture}=SplitPathname();
    const [DefaultTexture,setDefaultTexture]=useState<string | null>(null);
    const [Data,setData]=useState<DataItemThin[]| null>(null);
    const [TextureData,setTextureData]=useState<TextureData[] | null>(null);
    useEffect(() => {
        const getData = async () => {
          const result = await FetchProductThin(Product);
          setData(result);          
            if(result  ){
                for(const x of result){
                    if(x.fullName===Color){
                        x.thick.map((thickness)=>{
                            if(ASthickness){
                                if(thickness.size===ASthickness){
                                    setDefaultTexture(thickness.textures[0].texture)
                                }
                            }else{
                                if(thickness.size==="1/2\" Thick"){
                                    setDefaultTexture(thickness.textures[0].texture)
                                }
                            }
                        })
                    }
                }
            }
        };    
        getData();
        
    }, [Product]);
    useEffect(() => {
        const getData = async () => {
            if (Product) { // Only fetch data if Product is not null
              const result = await FetchTexture(Product);
              setTextureData(result);
            }
        };
        getData();
    }, [Product]);
    return(
        <div>
            <div className="row">
                <div className="col">
                    {
                        Data?.map((item)=>(                       
                            item.fullName===Color?
                                ASthickness?
                                    item.thick.map((thickness)=>(
                                        thickness.size===ASthickness?
                                            thickness.textures.map((texture)=>(
                                                texture.image==='https://endicottfiles.com/NotAvailable.jpg'?'':(
                                                    Texture?
                                                        texture.texture===Texture?                        
                                                    // <a key={texture.texture} className="text-decoration-none" href={texture.fallbackLargeImage} download>
                                                            <div className="row mb-5 mt-2 ">
                                                                <div className="col-3">
                                                                    <Image  src='/assets/MiscImages/RenderableColors.png' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                                                                </div>
                                                                <div className="col-9">
                                                                    <p className="text-black">This Color is available in a seemless image for rendering.</p>
                                                                </div>
                                                                <div className="row d-flex  justify-content-end mb-2">
                                                                    <a className="text-end" href={texture.fallbackLargeImage} download>                                                        
                                                                        <button className="btn btn-dark  " role="button" key={texture.texture}>Seemless Image</button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                // </a>
                                                            :null
                                                        :(
                                                            //this is the else of Texture?
                                                        texture.texture===DefaultTexture?
                                                    //<a key={texture.texture} className="text-decoration-none" href={texture.fallbackLargeImage} download>
                                                            <div className="row mb-2 border-bottom border-primary ">
                                                                <div className="col-3">
                                                                    <Image  src='/assets/MiscImages/RenderableColors.png' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                                                            </div>
                                                            <div className="col-9">
                                                                <p className="text-black">This Color is available in a seemless image for rendering.</p>
                                                            </div>
                                                            <div className="row d-flex  justify-content-end mb-2">
                                                                <a className="text-end" href={texture.fallbackLargeImage} download>                                                        
                                                                    <button className="btn btn-dark  " role="button" key={texture.texture}>Seemless Image</button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                // </a>
                                                :null

                                                )
                                            )

                                            ))


                                        :null

                                        
                                        
                                    
                                    
                                        )):
                                        item.thick.map((thickness)=>(
                                            thickness.size==="1/2\" Thick"?
                                                thickness.textures.map((texture)=>(
                                                    Texture?
                                                    texture.texture===Texture?
                                                //<a key={texture.texture} className="text-decoration-none" href={texture.fallbackLargeImage} download>
                                                    <div className="row mb-2 ">
                                                        <div className="col-3">
                                                            <Image  src='/assets/MiscImages/RenderableColors.png' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="text-black">This Color is available in a seemless image for rendering.</p>
                                                        </div>
                                                            <div className="row d-flex  justify-content-end mb-2">
                                                                <a className="text-end" href={texture.fallbackLargeImage} download>                                                        
                                                                    <button className="btn btn-dark  " role="button" key={texture.texture}>Seemless Image</button>
                                                                </a>
                                                            </div>
                                                    </div>:""
                                                //</a>:""
                                                    :texture.texture===DefaultTexture?
                                                    //<a key={texture.texture} className="text-decoration-none" href={texture.fallbackLargeImage} download>
                                                    <div className="row mb-2 ">
                                                        <div className="col-3">
                                                            <Image  src='/assets/MiscImages/RenderableColors.png' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="text-black">Create stunning renderings with this color's seamless image.</p>
                                                        </div>
                                                        <div className="row d-flex  justify-content-end mb-2">
                                                            <a className="text-end" href={texture.fallbackLargeImage} download>                                                        
                                                                <button className="btn btn-dark  " role="button" key={texture.texture}>Seemless Image</button>
                                                            </a>
                                                        </div>
                                                    </div>:""
                                                //</a>:""
                                                ))
                                            :""
                                        ))
                                        :null
                        ))
                    }
                </div>
            </div>        
            <div className="row ">
                <div className="col">
                    {
                        
                        
                            Data?.map((item)=>(                       
                                item.fullName===Color?

                                    ASthickness?
                                    item.thick.map((thickness)=>(

                                        
                                        thickness.size===ASthickness?


                                            
                                            thickness.textures.map((texture)=>(
                                                texture.image==='https://endicottfiles.com/NotAvailable.jpg'?'':(
                                                Texture?
                                                texture.texture===Texture?                        
                                                //<a className="text-decoration-none" key={texture.texture} href={texture.artx} target="_blank" target="_blank">
                                                <div className="row ">
                                                    <div className="col-3">
                                                    
                                                        <Image className="" src='/assets/MiscImages/artx-logo.svg'  width={50} height={50} alt='image that works as a button. click to see renderable images of this color.'/>
                                                    </div>
                                                    <div className="col-9">
                                                        <p className="text-black">Design with ease: This color and texture are available in Architextures for seamless integration with Autodesk Revit.</p>
                                                    </div>
                                                    <div className="row d-flex justify-content-end mb-2">
                                                        <a className="text-end" href={texture.artx} target="_blank">                                                        
                                                            <button className="btn btn-dark  " role="button" key={texture.texture}>Architextures</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            //</a>
                                                :null
                                                :(
                                                    texture.texture===DefaultTexture?
                                                    //<a className="text-decoration-none" key={texture.texture} href={texture.artx} target="_blank" target="_blank">
                                                    <div className="row ">
                                                        <div className="col-3">
                                                            
                                                            <Image className="" src='/assets/MiscImages/artx-logo.svg'  width={50} height={50} alt='image that works as a button. click to see renderable images of this color.'/>
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="text-black">Design with ease: This color and texture are available in Architextures for seamless integration with Autodesk Revit.</p>
                                                        </div>
                                                        <div className="row d-flex justify-content-end mb-2">
                                                            <a className="text-end" href={texture.artx} target="_blank">                                                        
                                                                <button className="btn btn-dark  " role="button" key={texture.texture}>Architextures</button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                //</a>
                                                :null

                                                )
                                            )

                                            ))


                                        :null

                                        
                                        
                                    
                                    
                                        )):
                                        item.thick.map((thickness)=>(
                                            thickness.size==="1/2\" Thick"?
                                                thickness.textures.map((texture)=>(
                                                    Texture?
                                                    texture.texture===Texture?
                                                //<a className="text-decoration-none" key={texture.texture} href={texture.artx} target="_blank" target="_blank">
                                                    <div className="row ">
                                                        <div className="col-3">
                                                            
                                                            <Image className="" src='/assets/MiscImages/artx-logo.svg'  width={50} height={50} alt='image that works as a button. click to see renderable images of this color.'/>
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="text-black">Design with ease: This color and texture are available in Architextures for seamless integration with Autodesk Revit.</p>
                                                        </div>
                                                        <div className="row d-flex justify-content-end mb-2">
                                                            <a className="text-end" href={texture.artx} target="_blank" >                                                        
                                                                <button className="btn btn-dark  " role="button" key={texture.texture}>Architextures</button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                //</a>
                                                :""
                                                    :texture.texture===DefaultTexture?
                                                // <a className="text-decoration-none" key={texture.texture} href={texture.artx} target="_blank" target="_blank">
                                                    <div className="row ">
                                                        <div className="col-3">
                                                            
                                                            <Image className="" src='/assets/MiscImages/artx-logo.svg'  width={50} height={50} alt='image that works as a button. click to see renderable images of this color.'/>
                                                        </div>
                                                        <div className="col-9">
                                                            <p className="text-black">Design with ease: This color and texture are available in Architextures for seamless integration with Autodesk Revit.</p>
                                                        </div>
                                                        <div className="row d-flex justify-content-end mb-2">
                                                            <a className="text-end" href={texture.artx} target="_blank">                                                        
                                                                <button className="btn btn-dark  " role="button" key={texture.texture}>Architextures</button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                //</a>
                                                :""
                                                ))
                                            :""
                                        ))
                                        :null
                        ))
                    }
                </div>
            </div>        
            <div className="row  mt-2 pb-2">
                <div className="col">
                    <a href="">
                        <Image src='/assets/MiscImages/CADdetails-Logo-horizontal.svg' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                    </a>                
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">                
                <p className="museo-light fst-italic fs-4">{Texture?Texture.replace(/~/g,' '):DefaultTexture?.replace(/~/g,' ')} Texture</p>
                    {
                    
                    
                        Data?.map((item)=>(                       
                            item.fullName===Color?

                                ASthickness?
                                item.thick.map((thickness)=>(

                                    
                                    thickness.size===ASthickness?


                                        
                                        thickness.textures.map((texture)=>(
                                        //  texture.image==='https://endicottfiles.com/NotAvailable.jpg'?'':(
                                            Texture?
                                            texture.texture===Texture?   
                                            
                                            TextureData?.map((info,index)=>(

                                                info.texture===Texture.replace(/~/g,' ')?
                                                <p key={index}>{info.description}</p>:''
                                            ))
                                    
                                            :null
                                            :(
                                                texture.texture===DefaultTexture?
                                                TextureData?.map((info,index)=>(

                                                    info.texture===DefaultTexture.replace(/~/g,' ')?
                                                    <p key={index}>{info.description}</p>:''
                                                ))
                                            :null

                                            )
                                    // )

                                        ))


                                    :null

                                    
                                    
                                
                                
                                    )):
                                    item.thick.map((thickness)=>(
                                        thickness.size==="1/2\" Thick"?
                                            thickness.textures.map((texture)=>(
                                                Texture?
                                                texture.texture===Texture?
                                                TextureData?.map((info,index)=>(

                                                    info.texture===Texture.replace(/~/g,' ')?
                                                    <p key={index}>{info.description}</p>:''
                                                )):""
                                                :texture.texture===DefaultTexture?
                                                TextureData?.map((info,index)=>(

                                                    info.texture===DefaultTexture.replace(/~/g,' ')?
                                                    <p key={index}>{info.description}</p>:''
                                                )):""
                                            ))
                                        :""
                                    ))
                                    :null
                    ))
                    }
                </div>
            </div>
        </div>
    )



}