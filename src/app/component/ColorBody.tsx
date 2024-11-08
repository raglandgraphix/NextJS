import React from "react";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { DataItem} from "../../../Types/ProductTypes";//this is part of the fetch
import { FetchProduct } from "../../../Utilities/FetchProduct";//This is part of the fetch
import ArchitectSupport from "./ArchitectSupport";
import SizeBody from "./SizeBody";
import ColorProjects from "./ColorProjects";


interface ColorBodyProps {
  selectedSize: string | null;
}
export default function ColorBody({ selectedSize }: ColorBodyProps){
    //const [selectedColor,setSelectedColor]=useState<string | null>(null);
    const [Color,setColor]=useState<string | null>(null);
    const [Product,setProduct]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    const [Texture,setTexture]=useState<string | null>('Smooth');
    const pathname = usePathname();
   
    useEffect(()=>{
        const parts = pathname.split('/');
        
       
        if(parts.length>1){
          
          setProduct(parts[1]);
          const getTexture = parts[parts.length-1].split('-');
          setColor( getTexture[0]);
          if(pathname.includes('-')){
            setTexture(getTexture[getTexture.length-1]);
           }else{
            setTexture(null);
           }
          
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
      <div className="row mt-5">

      
        <div className="col-6 ms-3 me-3 border">
          
            <div className="row ">
                <div className="col-8 " >
                    <div className="card  border-0 ">

                    
                   
                   {
                    Data.map((item) => (
                      item.fullName === Color ? (
                        <div key={item.id}>
                          {Texture ? ( // Check if Texture has a value
                            item.textures.map((texture,index) => (
                              texture.texture === Texture ? (
                                <div key={index}>
                                <Image className="card-img-top img-fluid" loader={() => (texture.image)} width={500} height={500} alt={item.altTag} src={texture.image}  />
                                <div className="card-body">
                                <div className="card-title text-center">
                                {/* <h2 className="text-uppercase univers-45-light fs-5 mt-2">{texture.texture.replace(/~/g, ' ')}</h2> */}
                                </div>
                              </div>
                              </div>
                                ) : null
                            ))
                          ) : (
                            

                               //<h1>{item.textures[0].sizes}</h1>
                               <div>
                                <Image  className="card-img-top img-fluid" loader={() => (item.textures[0].image)} width={500} height={500} alt={item.altTag} src={item.textures[0].image}  />
                                <div className="card-body">
                                <div className="card-title text-center">
                                  <h2 className="text-uppercase univers-45-light fs-5 mt-2">{item.textures[0].texture}</h2>
                                </div>
                              </div>
                                </div>
                           
                          )}
                        
                        </div>
                      ) : null
                    ))
                  }
</div>

                </div>
                
<ArchitectSupport/>
              

            </div>

        </div>
       
        <SizeBody  selectedSize={selectedSize}/>
       
              
              <ColorProjects/>

        </div>
    )
}