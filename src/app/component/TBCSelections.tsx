import React,{useEffect, useState} from "react";
import { FetchProductThin } from "../../../Utilities/FetchProductThin";
import { DataItemThin } from "../../../Types/ProductTypesThinbrick";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import Link from "next/link";
interface TBCSelectionProps {
  
  setSelectedSize: (newSize: string) => void; // Define the type of the callback prop
}

export default function TBCSelections (){
  const {Product,Color,Texture}=SplitPathname();//SplitPathname is a function that I created to always split the url and get the values from it
  
  const [Data,setData]=useState<DataItemThin[] | null>(null);
  const [DefaultTexture,setDefaultTexture]=useState<string | null>(null)
  //const Thickness = "5/8\" Thick";
  const [Thickness,setThickness]=useState<string | null>(null)
  //const [DefaultThickness,setDefaultThickness]=useState<string | null>("1/2\" Thick");
  const [Size,setSize]=useState<string | null>(null)
  
  

  useEffect(() => {
    const getData = async () => {
      const result = await FetchProductThin(Product);
      setData(result);
      if(result){
        result.map((items)=>{   
            
          items.fullName===Color? 
          
              items.thick.map((thickness)=>{   
                setThickness(items.thick[0].size);
                const thisThickness:string = items.thick[0].size;
                setThickness(items.thick[0].size);
                if(Thickness){
                  
                  if(thickness.size===Thickness){
                    
                    setDefaultTexture(thickness.textures[0].texture)
                    thickness.textures.map((texture)=>{
                      
                      setSize(texture.sizes[0]);
                    })                  
                }
              }else{
               
                if(thickness.size===thisThickness){
                  
                  setDefaultTexture(thickness.textures[0].texture)
                  thickness.textures.map((texture)=>{
                    
                    setSize(texture.sizes[0]);
                  })                  
              }
              }
            
            })
          :null// belongs to items.fullName===Color?
        
        })


      }
    };

    getData();
    
  }, [Product]);
  const ThicknessClick = ((newThickness:string)=>{
    
    setThickness(newThickness);
    Data?.map((items)=>{
      items.thick.map((thickness)=>{
        if(thickness.size===newThickness){
          
          setDefaultTexture(thickness.textures[0].texture)
        }
      })
    })
  })


    return(
        <div className="row univers-55-Roman text-rock d-flex justify-content-end  w-100   m-auto    ">
              <div className="col-2 col-md-2 col-xl-2 border-end  text-center   ">
                <div className="row border-bottom ">
                  <div className="col ">
                    <h2 className="fs-5">Thickness</h2>
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-nowrap ">
                    {/* <span className="d-block text-uppercase  mt-2  pt-2 pb-2 text-rock ">ALL</span> */}
                    <Link  className="text-decoration-none" href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); ThicknessClick(`1/2\" Thick`);}}>
                        <span className={`d-block text-uppercase text-black fs-6  pt-2 pb-2 bg ${Thickness === "1/2\" Thick"?"bg bg-black text-white rounded-2" :''}`}>1/2" Thick</span>
                    </Link>
                    <Link  className="text-decoration-none" href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); ThicknessClick(`5/8\" Thick`);}}>
                    <span className={`d-block text-uppercase text-black fs-6  pt-2 pb-2 bg ${Thickness === "5/8\" Thick"?"bg bg-black text-white rounded-2" :''}`}>5/8" Thick</span>
                    </Link>
                    <Link  className="text-decoration-none" href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); ThicknessClick(`1\" Thick`);}}>
                    <span className={`d-block text-uppercase text-black fs-6  pt-2 pb-2 bg ${Thickness === "1\" Thick"?"bg bg-black text-white rounded-2" :''}`}>1" Thick</span>
                    </Link>
                    
                  </div>
                </div>
                
              </div>
              <div className="col-2  text-center border-end">
                <div className="row">
                  <div className="col border-bottom ">
                    <h2 className="fs-5 ">Texture</h2>
                  </div>
                </div>
                <div className="row  ">
                  <div className="col p-0">
                    {
                      Data?.map((item)=>(
                        item.fullName===Color?
                          item.thick.map((thickness)=>(
                            thickness.size===Thickness?
                            
                              thickness.textures.map((texture,id)=>(
                                <span className={`d-block text-uppercase p-0 fs-6  pt-2 pb-2 text-rock ${texture.texture===Texture || texture.texture===DefaultTexture?"bg bg-black rounded-2 text-white":""}`} key={id}>{texture.texture.replace(/_/g, ' ')}</span>
                              ))
                            :null
                          ))
                        :null
                        
                      ))
                    }
                     </div>
                </div>
                
              </div>
              <div className="col-7 text-center ">
                <div className="row">
                  <div className="col border-bottom">
                    <h2 className="fs-5">Size</h2>
                  </div>

                </div>
                <div className="row ">
                  <div className="col ">
                    <table className="w-100 ">
              <tbody className="  "> 
                {
                  Data?.map((item)=>(
                    item.fullName===Color?
                      item.thick.map((thickness)=>(
                        thickness.size===Thickness?
                          thickness.textures.map((texture)=>{
                            
                            if (!Texture) {
                             
                              if (texture.texture === DefaultTexture) {
                                const columnNumb = Math.ceil(texture.sizes.length/3);
                                
                                const row = []
                                for (let x = 0; x < columnNumb; x++) { // Assuming you want to loop through sizes
                                  const column = []
                                  for(let j = 0;j<3;j++){
                                    const dataIndex = x*3+j;
                                    if(dataIndex<texture.sizes.length){
                                      column.push(<td className={`col-2 pt-2 fs-6  text-uppercase  text-nowrap  pb-2 text-rock ${texture.sizes[dataIndex]===Size?"bg bg-black rounded-2 text-white":null}`} key={dataIndex}>{texture.sizes[dataIndex].replace(/_/g,' ')}</td>);
                                    }else {
                                      column.push(<td className="col-2  text-uppercase   pt-2  text-rock " key={dataIndex}></td>); // Add empty cells if needed
                                    }
                                    
                                  }
                                  row.push(<tr className=" " key={x}>{column}</tr>);
                                 
                                }
                                return(
                                  <span className=" ">{row}</span>
                                )
                              }
                            }else{

                              console.log(Texture)

                              
                            }

                            
                            
                          
                          
                            })
                        :null///////here
                        
                      ))
                    :null



                  ))
                }
              </tbody>
            </table>
              
                  </div>

                </div>

              </div>
              </div>
            
    )
}