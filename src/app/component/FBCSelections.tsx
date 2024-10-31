//FBCSelections is the menu to the right of the product description box.
'use client';
import React from "react";
import { useState, useEffect } from "react";
import {usePathname} from 'next/navigation';
import { DataItem} from "../../../Types/ProductTypes";
import { useRouter } from "next/navigation";
export default function FBCSelections (){
  const [Product,setProduct]=useState<string | null>(null);
  const [Color,setColor]=useState<string | null>(null);
  const [Texture,setTexture]=useState<string | null>(null);
  const [Data,setData]=useState<DataItem[] | null>(null);
  const pathname = usePathname();

  useEffect(()=>{
    const parts = pathname.split('/');
    if(parts.length>1){
      const getTexture = parts[parts.length-1].split('-');
      setColor( getTexture[0]);
      setProduct(parts[1]);
      if(pathname.includes('-')){
        if(pathname.includes('~')){
          const CapTexture = getTexture[getTexture.length-1];
          setTexture(CapTexture);
        }else{
          const CapTexture = getTexture[getTexture.length-1];
          setTexture(CapTexture.toLowerCase().charAt(0).toUpperCase() + CapTexture.toLowerCase().slice(1));
        }
      }else{
        setTexture('Smooth');
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
  const router =useRouter();
  const TextureChange = (TextureValue:string)=>{
    const newUrl = `/FaceBrick/Colors/${Color}-${TextureValue}`; 
    router.replace(newUrl, undefined);
  }        
  return(
    <div className="row univers-55-Roman text-rock h-100  w-100  d-flex justify-content-xl-end justify-content-center   p-0 m-0 pe-1 ">
      <div className="col-12 col-sm-4 col-md-6 col-lg-3 col-xl-3 border-end  text-center   ">
        <div className="row border-bottom ">
          <div className="col  ">
            <h2 className="fs-5 ">Texture</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-nowrap">
            {
              Data?.map((item)=>(
                item.fullName===Color?
                  item.textures.map((texture,index)=>(
                    <span role="button" key={index} className={`d-block text-uppercase   mt-2  pt-2 pb-2 text-rock ${texture.texture===Texture?'bg bg-black rounded-3 text-white':''} `} onClick={()=>{TextureChange(texture.texture)}} >{texture.texture.replace(/~/g," ")}</span>
                  ))
                :''
              ))
            }
            </div>
        </div>
      </div>
      <div className="col-12 col-sm-8 col-md-6 col-lg-9  text-center  m-0 p-0">
        <div className="row">
          <div className="col border-bottom">
            <h2 className="fs-5 ">Sizes</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 ">
            <table className=" w-100">
              <tbody> 
                {Data?.map((item) => (
                  item.fullName === Color ? (
                    item.textures.map((mytexture) => {
                      if (mytexture.texture === Texture) {
                        const sizes = mytexture.sizes;
                        const rowsCount = Math.ceil(sizes.length / 3);
                        return Array.from({ length: rowsCount }, (_, rowIndex) => (
                          <tr key={rowIndex}>
                            {sizes.slice(rowIndex * 3, (rowIndex + 1) * 3).map((size, colIndex) => (
                              <td className="text-uppercase  mt-2  pt-2 pb-2  text-rock " key={colIndex}>{size}</td>
                            ))}
                          </tr>
                        ));
                      }
                        return "";
                    })
                  ) : ''
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}