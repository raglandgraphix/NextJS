import React from "react";
import { useEffect, useState } from "react";
//import Image from "next/image";
import { usePathname } from "next/navigation";
import { DataItem} from "../../../Types/ProductTypes";//this is part of the fetch
import { FetchProduct } from "../../../Utilities/FetchProduct";//This is part of the fetch
//import { Job } from "../../../Types/ProjectTypes";
import { FetchProjects } from "../../../Utilities/FetchProjects";


export default function ColorProjects(){
    const [Product,setProduct]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    //const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    const [Color,setColor]=useState<string | null>(null);
    const pathname = usePathname();
   
    useEffect(()=>{
        const parts = pathname.split('/');
        
       
        if(parts.length>1){
          
          setProduct(parts[1]);
          const getTexture = parts[parts.length-1].split('-');
          setColor( getTexture[0]);
        
          
        }
       
        

        
        
      },[pathname]);

    useEffect(() => {
        const getData = async () => {
          const result = await FetchProduct(Product);
          setData(result);

        
        };
    
        getData();
      }, [Product]);
    
      useEffect(() => {
        const getProjectData = async () => {
          const result = await FetchProjects(Product);
          setProjectData(result);
        };
    
        getProjectData();
      }, [Product]);
      
        if (!Data) {
          return <div></div>;  
        }
       
    return(
        <div className="row">
            <div className="col">
        {
            Data.map((item)=>(
                item.fullName===Color?
                item.projects && (
<div className="row mt-2 mb-2">
            <div className="col-12">
                <h2 className="text-center">Projects & Videos</h2>

            </div>
           </div>
                )
                :''
            ))
        }
           
         
           <div className="row">
            {
                Data.map((item,index)=>(
                    item.fullName===Color?
                    <p key={index}>Color</p>:'did not work'
//                      item.projects?.map((projects)=>(
                       
//                          ProjectData?.map((items,index2)=>(
//                              items.jobTitle===projects?
//                              <div key={index2} className="col-2">
//                                 <div className="card border ">
//                              <Image src={items.jobThumb} alt="" height={500} width={500}/>
//                              <div className="card-body">
//                                 <h5 className="card-title fs-6">{items.jobName}</h5>

//                             </div>
// </div>
//                              </div>:''
//                          ))
                        
//                      ))
                    //:''
                ))
            }
            
           </div>
            
           
            </div>
        </div>
    )
}