import React from "react";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ColorBody(){
    const [selectedColor,setSelectedColor]=useState<string | null>(null);
    const [Product,setProduct]=useState<string | null>(null);
    const pathname = usePathname();
     useEffect(()=>{
       //setSelectedColor(pathname.includes('-')?pathname.split('-')[1]:null);
       const parts = pathname.split('/');
      if(parts.length>1){
        setProduct(parts[1]);
        setSelectedColor(parts[parts.length-1]);
      }
      
    },[pathname]);
    return(
        <div className="col-7">
            <div className="row border boder-primary">
                <div className="col-8 border border-danger" style={{height:'300px'}}>
                    <p>{Product}~{selectedColor}</p>

                </div>
                <div className="col-4 border border-success" style={{height:'300px'}}>

                </div>

            </div>

        </div>
    )
}