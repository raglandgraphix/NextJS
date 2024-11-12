import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DataItem} from "../../../Types/ProductTypes";//this is part of the fetch
import { FetchProduct } from "../../../Utilities/FetchProduct";//This is part of the fetch
import { Job } from "../../../Types/ProjectTypes";
import { FetchProjects } from "../../../Utilities/FetchProjects";


export default function ColorProjects(){
    const [Product,setProduct]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
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

          //if (result) { // Only fetch ProjectData if Data is available
           // const projectResult = await FetchProjects(Product);
            //setProjectData(projectResult);
          //}
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
           
           {/* <div className="row">
           <div className="col-2 ">
                <div className="card border ">
                 <Image className="d-inline-block me-2 w-100" src="https://endicottfiles.com/EastPrairieBox.jpg" width={200} height={200} alt="Image of East Prairie School"/>
                <div className="card-body">
                    <h5 className="card-title fs-6">
                        East Prairie Elementary School
                    </h5>

                </div>
                </div>
                </div>
                <div className="col-2 ">
                <div className="card border ">
                <Image className="d-inline-block me-2 w-100" src="https://endicottfiles.com/FortMeyersSquare.jpg" width={200} height={200} alt="Image of East Prairie School"/>
                <div className="card-body">
                    <h5 className="card-title fs-6 d-inline me-1">
                        Fort Meyer Public Library
                    </h5>
                    <Image className="d-inline" src="/assets/MiscImages/Images.png" alt="Image that lets people know that the card is a link to images of Fort Meyer" width={25} height={25}/>

                </div>
                </div>
                </div>
                <div className="col-2 ">
                <div className="card border ">
                <Image className="d-inline-block me-2 w-100" src="https://endicottfiles.com/GothamBox.jpg" width={200} height={200} alt="Image of East Prairie School"/>
                <div className="card-body">
                    <h5 className="card-title fs-6">
                        Gotham West Apartments
                    </h5>

                </div>
                </div>
                </div>
                
                
                
            
           </div> */}
           <div className="row">
            {
                Data.map((item,index)=>(
                    item.fullName===Color?
                    
                     item.projects?.map((projects)=>(
                       
                         ProjectData?.map((items,index2)=>(
                             items.jobTitle===projects?
                             <div key={index2} className="col-2">
                                <div className="card border ">
                             <Image src={items.jobThumb} alt="" height={500} width={500}/>
                             <div className="card-body">
                                <h5 className="card-title fs-6">{items.jobName}</h5>

                            </div>
</div>
                             </div>:''
                         ))
                        
                     ))
                    :''
                ))
            }
            
           </div>
            
           
            </div>
        </div>
    )
}