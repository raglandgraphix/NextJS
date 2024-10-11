'use client';
import Image from "next/image";
import { useState } from "react";
import "/public/css/navigate.css";

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
interface NavigateProps {
    pageSettings: string;
  }
export default function Navigate({pageSettings}:NavigateProps){
    const pageSetup = pageSettings;
    const [activeKey,setActiveKey]=useState<LinkDataKey | null>(null);
    const [subShown,setSubShown]=useState(false);
    const openSub = (key:LinkDataKey)=>{ //the :string is need to tell it what type it is. This i believe is due to type script.
        setActiveKey(key);
        if(!activeKey){
            setSubShown(true); 
        }else if(activeKey===key){
            setSubShown(false);
            setActiveKey(null)
        }
    }
    console.log(pageSetup);

    return(
        <div className={`row ${pageSetup==='gradient'? 'gradient':''}  holdNav`}>
            <div className="col-12 p-0 ">
                <div className="row pt-2  d-flex justify-content-center justify-content-lg-start ">
                    <div className="col-7  col-md-5  col-xl-3 ">
                        <div className="row  ">
                            <div className="col-7 col-md-12 d-flex justify-content-center ms-3 ms-md-0  pt-2 ">
                                <Image  src={pageSetup==='gradient' || pageSetup==='dark' ?'/assets/logoWhite.png':'/assets/logoBlack.png'} width={200} height={75} alt='Endicott logos'/>
                            </div>
                        </div>
                        <div className="row d-none d-md-flex text-center ">
                            <div className="col ">
                                <span className="fs-6 ">Endicott Clay Products Company</span>
                            </div>
                        </div>                
                    </div>
                    <div className="col d-flex d-xl-none justify-content-end me-4  ">
                        <Image className="hamburger" src={`${pageSetup==='gradient' || pageSetup==='dark'?'/assets/Navigation_Menu_Icon-Stone.png':'/assets/Navigation_Menu_Icon_Black.png'}`} width={30} height={30} alt="Hamburger menu button. Click to see options" />
                    </div>
                    <div className="col-12 col-xl-9 d-none d-xl-flex align-items-end justify-content-end text-end "> 
                        {
                            Object.keys(linkData).map((key)=>(
                                <div key={key} className="row d-flex justify-content-end ">
                                    <div className="col-10 col-md-5 col-xl-auto  ">
                                    <button role="button"  className=" p-2 pb-0 me-2  bg-stone  w-button " onClick={()=>openSub(key as LinkDataKey)}> {key}</button>
                                    </div>
                                    
                                </div>
                                          
                            ))
                        }
                    </div>
                </div>
                <div className={`row bg-black text-white p-0 m-auto d-flex justify-content-end   ${subShown?'subMenuOpen':'subMenu'}   `}>
                    <div className="col p-0  m-auto d-inline-flex justify-content-end ">
                        
                        {
                            activeKey &&(
                                linkData[activeKey].map((link,index)=>(
                                    <button role="button" key={index} className={`m-0 pt-2 pb-1 me-4`}>{link}</button>
                                ))
                            )                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}