import React from "react";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { DataItem,Texture } from "../../../Types/ProductTypes";



export default function ColorBody(){
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
      
        if (!Data) {
          return <div></div>;  
        }
    return(
        <div className="col-7">
            <div className="row border boder-primary">
                <div className="col-8 border border-danger" >
                    <div className="card ">

                    
                   
                   {
                    Data.map((item) => (
                      item.fullName === Color ? (
                        <div key={item.id}>
                          {Texture ? ( // Check if Texture has a value
                            item.textures.map((texture) => (
                              texture.texture === Texture ? (
                                <div>
                                <Image className="card-img-top img-fluid" loader={() => (texture.image)} width={500} height={500} alt={item.altTag} src={texture.image}  />
                                <div className="card-body">
                                <div className="card-title text-center">
                                  <h2 className="text-uppercase univers-45-light fs-5 mt-2">{texture.texture}</h2>
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
                <div className="col-4 border border-success" style={{height:'300px'}}>

                </div>

            </div>

        </div>
    )
}