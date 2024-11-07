'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DataItem} from "../../../Types/SizesTypes";//this is part of the fetch
import { FetchSizes } from "../../../Utilities/FetchSizes";//This is part of the fetch
interface SizeBodyProps {
    selectedSize: string | null;
  }
export default function SizeBody({ selectedSize }: SizeBodyProps){
    const pathname = usePathname();
    const [Product,setProduct]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    useEffect(()=>{
        const parts = pathname.split('/');
        
       
        if(parts.length>1){
          
          setProduct(parts[1]);
          
          
        }
       
        

        
        
      },[pathname]);
    useEffect(() => {
        const getData = async () => {
          const result = await FetchSizes(Product);
          setData(result);
        };
    
        getData();
      }, [Product]);
    
     
      
        // if (!Data) {
        //   return <div></div>;  
        // }


const [DisplaySize,setDisplaySize]=useState<string>('Modular');
useEffect(()=>{
    if (selectedSize) {
        setDisplaySize(selectedSize);
      } else {
        setDisplaySize('Modular');
      }
}) 
    return(

<div className="col-5 ms-0 ps-2">
    <div className="row border">
        <div className="col-9">
            {
                Data?.map((size,index)=>(
                    size.Name===DisplaySize?<Image key={index} className="card-img-top img-fluid" src={size.image} width={100} height={100} alt="size drawing"/> :''
                ))
            }
        
   <div className="card-body">
                                <div className="card-title text-center">
                                  <h2 className="text-uppercase univers-45-light fs-5 mt-2">Size Drawing</h2>
                                </div>
                              </div>
        </div>
        <div className="col-3 pe-2">
            <p className="museo-light  fs-4 fst-italic">{DisplaySize}&nbsp;Brick</p>
            <p>Endicott {DisplaySize} Size Brick, Reimagines classic proportions with its elongated form to create striking horizontal lines and a modern aesthetic.</p>
            {
                Data?.map((PDF)=>(
                    PDF.Name===DisplaySize?<a role="button" className="btn btn-dark" href={PDF.pdf} target='_blank'>Download PDF</a>:''
                ))
            }
            
        </div>
        <div className="row">
        <div className=" col">
            <p>Not all products are available in all colors, sizes, and/or texures. Please contact Endicott for availability.</p>
        </div>

    </div>
    </div>
    
   
</div>
    )

}