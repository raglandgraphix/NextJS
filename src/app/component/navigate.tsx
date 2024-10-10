'use client';
import Image from "next/image";
import { useState } from "react";

const linkData = {
    'Projects':['All Projects','Face Brick','Thin Brick','Pavers'],
    'Face Brick':['Colors','Textures','Sizes'],
    'Thin Brick':['Colors','Textures','Sizes'],
    'Pavers':['Colors','Sizes'],
    'Pathway Aggregate':[],
    'Resources':['Literature','BIM','Specifications','Technical Notes','Brick Briefs'],
    'Who We Are':['Profile','Videos'],
    'Careers':['Current Openings','Application','Solicitud','Apply Online'] 
};
type LinkDataKey = keyof typeof linkData;
export default function Navigate(){

    
    const [activeKey,setActiveKey]=useState<LinkDataKey | null>(null);
    const openSub = (key:LinkDataKey)=>{ //the :string is need to tell it what type it is. This i believe is due to type script.
        setActiveKey(key);
    }


    return(
        <div className="row">
            <div className="col-12">
                <div className="row pt-2 border d-flex justify-content-center justify-content-lg-start">
                    <div className="col-7 col-md-5  col-xl-3 ">
                        <div className="row ">
                            <div className="col  d-flex justify-content-center">
                                <Image  src="/assets/logoBlack.png" width={200} height={75} alt='Endicott logos'/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col ">
                                <span className="fs-6 ">Endicott Clay Products Company</span>
                            </div>
                        </div>                
                    </div>
                    <div className="col-19 d-flex align-items-end justify-content-end  "> 
                        {
                            Object.keys(linkData).map((key)=>(
                                <button key={key} className=" p-2 pb-0 me-2" onClick={()=>openSub(key as LinkDataKey)}> {key}</button>          
                            ))
                        }
                    </div>
                </div>
                <div className="row bg-black text-white p-0 m-0 d-flex justify-content-end">
                    <div className="col m-0  ">
                        
                        {
                            activeKey &&(
                                linkData[activeKey].map((link,index)=>(
                                    <p key={index} className="text-end m-0 pt-2 pb-1">{link}</p>
                                ))
                            )                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}