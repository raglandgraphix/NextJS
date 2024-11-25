//Home Page
'use client';
import Navigate from "./component/navigate";
import { useState } from "react";
import Footer from "./component/footer";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  const [videoError1, setVideoError1] = useState(false);
const [videoError2, setVideoError2] = useState(false);
 
const handleVideoError1 = ()=>{
  
  setVideoError1(true);

};  
const handleVideoError2 =()=>{
  setVideoError2(true);
}
  return (
    <div className="container-fluid">
      <Navigate pageSettings="gradient" />      
        <div className="row fixed-top " style={{ zIndex: 1 }} >
          <div className="col p-0" >




            

<Carousel className=" p-0  " variant="light" fade interval={null}  >
      
       
                    <Carousel.Item className="   d-flex justify-content-center " >
                    <div className="d-flex justify-content-center   " >
            
            
              <video className="object-fit-cover w-100" aria-label="video of East Prairie Elementary School" muted autoPlay loop playsInline  >
                <source   src="https://endicottfiles.com/East_Prarie_2024_Montage_V1_Compressed.mp4" type="video/mp4" ></source>
              </video>
           
          </div> 
                    
                    {/* <Image  className="object-fit-cover" priority  src='x'  alt='info' width={1600} height={800}/> */}
            
                    <Carousel.Caption className=" text-black h-100 d-flex justify-content-start" style={{ position: 'absolute', left: 0,  }}>
                    
                    
                        
                    </Carousel.Caption>
                    
                    </Carousel.Item>
                    <Carousel.Item className="   d-flex justify-content-center " >
                    <div className="d-flex justify-content-center vidHold  " >
            
           
              <video className="object-fit-cover w-100"  aria-label="Vidoe of the project called Monumental Journey" muted autoPlay loop playsInline    >
                <source   src="https://endicottfiles.com/BoysTown-Compressed.mp4" type="video/mp4" ></source>
              </video>
           
          </div> 
                    
                    {/* <Image  className="object-fit-cover" priority  src='x'  alt='info' width={1600} height={800}/> */}
            
                    <Carousel.Caption className=" text-black w-100 d-flex justify-content-start" style={{ position: 'absolute', left: 0,  }}>
                    
                    
                        
                    </Carousel.Caption>
                    
                    </Carousel.Item>
                
       



        
       
    </Carousel>

    </div>
  </div>
   <div style={{zIndex:3, marginTop:'100vh'}} className="row  p-0 "  aria-label="A portion of the page that is below the fold and will scroll up over the main view" >
    <div className=" col bg bg-dark z-3" style={{height:600}}>
<div className="row border-top  mt-5">
      </div>
      <div className="row mt-5 ">
        <div className="col-lg-3 col-md-6 ">
          <div className="card border border-black rounded-lg shadow h-100 " aria-label="a card that is about the ACE HOTEL winning the Best in Class for the Brick in Architecture awards">
            <img className="card-img-top d-flex" src="assets/ace1.jpg" aria-label="Image of the Ace Hotel in Toronto Canada"/>
            <div className="card-body">
              <h2 className="card-title text-start univers-45-light fs-3 ">Ace Hotel - Best in Class</h2>
              <p className="card-text text-start univers-45-light fs-6">The Ace Hotel - Toronto, won Best in Class - Commercial and Craftsmanship. Endicott thin brick and pavers were use through out the project. See the project here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="card border border-black rounded-lg shadow h-100" aria-label="a card that is about the Boys Town in Boys Town Nebraska winning Silver in the Brick in Architecture awards">
            <img className="card-img-top d-flex" src="assets/boystown1.jpg" aria-label="An Image of the Boys Town Project"/>
            <div className="card-body">
              <h2 className="card-title text-start univers-45-light fs-3 ">Boys Town - BIA Silver Winner</h2>
              <p className="card-text text-start univers-45-light fs-6">Boys Town, won silver in the BIA Brick in Architecture Awards. Endicott thin brick and pavers were use through out the project. See the project here.</p>
            </div>
          </div>
        </div>
      </div>

    
    
    {/* <div id="holdme" className="col">
      <div className="row border-top  mt-5">
      </div>
      <div className="row mt-5 ">
        <div className="col-lg-3 col-md-6 ">
          <div className="card border border-black rounded-lg shadow h-100 " aria-label="a card that is about the ACE HOTEL winning the Best in Class for the Brick in Architecture awards">
            <img className="card-img-top d-flex" src="assets/ace1.jpg" aria-label="Image of the Ace Hotel in Toronto Canada"/>
            <div className="card-body">
              <h2 className="card-title text-start univers-45-light fs-3 ">Ace Hotel - Best in Class</h2>
              <p className="card-text text-start univers-45-light fs-6">The Ace Hotel - Toronto, won Best in Class - Commercial and Craftsmanship. Endicott thin brick and pavers were use through out the project. See the project here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="card border border-black rounded-lg shadow h-100" aria-label="a card that is about the Boys Town in Boys Town Nebraska winning Silver in the Brick in Architecture awards">
            <img className="card-img-top d-flex" src="assets/boystown1.jpg" aria-label="An Image of the Boys Town Project"/>
            <div className="card-body">
              <h2 className="card-title text-start univers-45-light fs-3 ">Boys Town - BIA Silver Winner</h2>
              <p className="card-text text-start univers-45-light fs-6">Boys Town, won silver in the BIA Brick in Architecture Awards. Endicott thin brick and pavers were use through out the project. See the project here.</p>
            </div>
          </div>
        </div>
      </div>

     
    </div> */}
    <Footer pageSetUp="gradient"/>
    </div>
  </div>  
  
</div>

   
 
  );
}
