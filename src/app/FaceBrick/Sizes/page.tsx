'use client'
import React from "react";
import { useEffect,useState } from "react";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";
import { FetchSizes } from "../../../../Utilities/FetchSizes";
import { DataItem } from "../../../../Types/SizesTypes";
import Image from "next/image";
import { SplitPathname } from "../../../../Utilities/SplitPathname";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Sizes(){
    const {Product}=SplitPathname();
    const [Data,setData]=useState<DataItem[] | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getData = async () => {
            if (Product) { // Only fetch data if Product is not null
              const result = await FetchSizes(Product);
              setData(result);
              console.log(result);
            }
          };
        
          getData();
        
      }, [Product]);
      const handleClose = () => setShowModal(false);
  const handleShow = () => {
    //setTexture(texture);
    setShowModal(true);   
  }

    return(
        <div className="container-fluid">
            <Navigate pageSettings="light" />
            <div className="row">
                <ProductBox setDescription='' productHeadLine='Endicott Brick Sizes: Find the Perfect Fit for Your Project' ProductDescription='Endicott offers a wide range of brick sizes to suit any architectural style and design vision. From classic modular dimensions to the elongated Roman size. Explore our selection to find the perfect fit for your next project.'/>
            </div>
            <div className="row ps-3 pe-3  ">
                
                {
                    Data?.map((item,index)=>(
                        <div className="col-3 mb-5 " key={index}>
                            
                            <div className="card ">
                                <Image src={item.image} width={500} height={500} alt={item.alt}/>
                                <h3 className="text-center">{item.Name.replace(/_/g,' ')} Brick</h3>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header className="" closeButton>
            {/* {
                Data?.map((item,index)=>(
                    item.texture===Texture? */}
<Modal.Title className="text-uppercase text-center fs-2 univers-55-Oblique "> Texture</Modal.Title>:''
                {/* ))
            } */}
          
        </Modal.Header>   

        <Modal.Body>
            {
              
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