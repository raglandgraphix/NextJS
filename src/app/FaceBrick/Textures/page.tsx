'use client'
import React from "react";
import { useEffect,useState } from "react";
import { FetchTexture } from "../../../../Utilities/FetchTextures"
import { TextureData } from "../../../../Types/TextureTypes"
import { SplitPathname } from "../../../../Utilities/SplitPathname";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { StaticImport } from "next/dist/shared/lib/get-img-props";



export default function Textures(){
    const {Product}=SplitPathname();
    const [Data,setData]=useState<TextureData[] | null>(null);
    const [Texture,setTexture]=useState<string | StaticImport| null>(null);
    const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = (texture:string) => {
    setTexture(texture);
    setShowModal(true);   
  }
    
        useEffect(() => {
            const getData = async () => {
                if (Product) { // Only fetch data if Product is not null
                  const result = await FetchTexture(Product);
                  setData(result);
                }
              };
            
              getData();
            
          }, [Product]);
      
      

    return(
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            <div className="row">
                <ProductBox setDescription="" productHeadLine="Headline about how awesome texture is" ProductDescription="product description"/>
            </div>
            <div className="row">
                {
                    Data?.map((item,index)=>(
                        <div key={index} className="col-3" >
                            <div className="card mt-3 mb-2" role="button" onClick={()=>{handleShow(item.texture)}} >
                                <Image className="card-img-top" src={item.image} alt={item.altTag} width={500} height={500}/>
                                <div className="card-body">
                                    <h2 className="card-title">{item.texture}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            
                           </div> 
                        
                    ))
                }

            </div>
            {/* <Button variant="primary" onClick={handleShow}>   

        Launch Modal
      </Button> */}

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header className="" closeButton>
            {
                Data?.map((item,index)=>(
                    item.texture===Texture?
<Modal.Title key={index} className="text-uppercase text-center fs-2 ">{item.texture} Texture</Modal.Title>:''
                ))
            }
          
        </Modal.Header>   

        <Modal.Body>
            {
                Data?.map((item, index)=>(
                    item.texture===Texture?(
                        <div key={index}>

                            <Image src={item.image} alt="alt text" width={1000} height={1000}/>
                            <p className="d-inline" >Conforms to ASTM C216 Type: </p>
                            {
                                item.astm216.map((value, index, arr)=>(
                                    <p className="d-inline" key={index}>{value}{index < arr.length -1?',':''} </p>
                                ))
                            }
                         </div>
                         
                    ):null
                ))
            }
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
            <Footer pageSetUp="light"/>

        </div>
    )
}