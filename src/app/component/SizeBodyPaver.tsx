'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
//import { usePathname } from "next/navigation";
import { DataItem} from "../../../Types/SizesTypes";//this is part of the fetch

import { FetchSizesPaver } from "../../../Utilities/FetchSizesPaver";
//import { FetchSizesThin } from "../../../Utilities/FetchSizesThin";
import { SplitPathname } from "../../../Utilities/SplitPathname";
interface SizeBodyProps {
    selectedSize: string | null;
  }
export default function SizeBodyPaver({ selectedSize }: SizeBodyProps){
    const {Product}=SplitPathname();
    
    //const pathname = usePathname();
    //const [Product,setProduct]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    // useEffect(()=>{
    //     const parts = pathname.split('/');
        
       
    //     if(parts.length>1){
          
    //       setProduct(parts[1]);
          
          
    //     }
       
        

        
        
    //   },[pathname]);
    useEffect(() => {
      // if(Product==='FaceBrick'){
        const getData = async () => {
          const result = await FetchSizesPaver(Product);
          setData(result);
          if(result){

          }
        };
    
        getData();

      // }else if(Product==='ThinBrick'){
      //   const getData = async () => {
      //     const result = await FetchSizesThin(Product);
      //     setData(result);
      //     if(result){

      //     }
      //   };
    
      //   getData();

      // }
        
      }, [Product]);
    
     
      
        // if (!Data) {
        //   return <div></div>;  
        // }


const [DisplaySize,setDisplaySize]=useState<string | null>(null);
useEffect(()=>{
  if(selectedSize){
    console.log(`The Selected size is ${selectedSize}`);
  }
  
    if (selectedSize) {

        setDisplaySize(selectedSize);
      } else {
        setDisplaySize('Modular');
      }
}) 
    return(

<div className="col-12 col-md-5 mt-3 mt-md-0  ps-2 ms-auto me-4 ">
    <div className="row border d-flex justify-content-end h-100">
        <div className="col-8">
        
            {
                Data?.map((size,index)=>(
                    size.Name===DisplaySize?<Image key={index} className="card-img-top img-fluid "  src={size.image} width={500} height={500} alt="size drawing"/> :''
                ))
            }
        
   {/* <div className="card-body">
                                <div className="card-title text-center">
                                  <h2 className="text-uppercase univers-45-light fs-5 mt-2">Size Drawing</h2>
                                </div>
                              </div> */}
        </div>
        <div className="col-4 pe-2">
            
            <p>{DisplaySize?.replace(/_/g,' ')} Pavers, Reimagines classic proportions with its elongated form to create striking horizontal lines and a modern aesthetic.</p>
            {
                Data?.map((PDF,index)=>(
                  
                    PDF.Name===DisplaySize?<div key={index}>{Product}<a  role="button" className="btn btn-dark" href={PDF.pdf} target='_blank'>Download PDF</a></div>:''
                ))
            }
            
        </div>
        <div className="row">
        <p className="museo-light  fs-3 fst-italic">{DisplaySize?.replace(/_/g,"\u00A0")}</p>
        <div className=" col">
            <p>Not all products are available in all colors, sizes, and/or texures. Please contact Endicott for availability.</p>
        </div>

    </div>
    </div>
    
   
</div>
    )

}