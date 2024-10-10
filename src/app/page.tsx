'use client';
import Navigate from "./component/navigate";
import { useState } from "react";

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
      <Navigate />      
        <div className="row fixed-top z-n1">
          <div className="col p-0">
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-touch="true" data-bs-interval="false" aria-label="Carousel of Endicott project videos">
              <div className="carousel-indicators z-n2 d-flex justify-content-start ps-5" aria-label="group of buttons that when selected take you to another video on the current page">
                <div>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide button that takes you to the video for The Monumental Journey"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide button that takes you to the video for Boys Town"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide button for the Invisi-Lug paver"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide button for the Paul and Linda DeBruce Hall"></button>
            
                </div>
              </div>
              <div className="carousel-inner ">
              <div className="carousel-item  active">
              <div className="d-flex justify-content-center vidHold  " >
            {/* The following code will be used in all the carousel items. the basic theory is that it say if videoError1 and videoError2 are both false(this is what the are initially)run the first set of code. however if it fails it will run the andleVideoError1 function which makes videoError1 true (which means that it failed) but videoError2 is still true so it will run the next bit of code. if that video fails(which is pulling from the endicott server) it will run the andleVideoError2 which make both videoError1 and videoError2 true(they both failed) then the next bit of code is run that says if they are both true(which they are) put the image in. */}
            {!videoError1 && !videoError2 &&( // Conditionally render video or image
              <video aria-label="video of East Prairie Elementary School" muted autoPlay loop playsInline className="videoSize "  onError={handleVideoError1} >
                <source   src="https://endicottfiles.com/East_Prarie_2024_Montage_V1_Compressed.mp4" type="video/mp4" ></source>
              </video>
            )}
            {videoError1 && !videoError2 &&(
              <video aria-label="video of East Prairie Elementary School"   muted autoPlay loop playsInline className="videoSize "  onError={handleVideoError2} >
                <source src="assets/HomePage_EastPrairie.mp4" type="video/mp4" ></source>
              </video>
            )}
            {videoError1 && videoError2 && (
              <img src='assets/FaceBrick/East_Prairie/eastPrairie1.jpg' alt='Back Up image of East Prairie' />
            )}
          </div> 
            <div className="carousel-caption d-flex align-items-left ">
              <div className='text-start'>
                <h1 className="d-inline-block text-start univers-45-light m-0 fs-2 " aria-label="Header for the East Prairie Elementary School">East Prairie Elementary School</h1>
                <a className="d-inline-block ms-2" href="#"><img aria-label='Information Icon. Users can click here for more information' className="d-block text-start svgWhite" src="assets/info-square.svg"/></a>
                <h4 className="d-block text-start museo-light ">Skokie, Illinois</h4>
                <h4 className="d-block text-start museo-light d-none d-md-block">Colors: Desert Ironspot Light, Medium Ironspot #77 </h4>
                <h4 className="d-block text-start museo-light">Architect: STR Partners LLC</h4>
                
                
              </div>
            </div>
          </div>
   
          <div className="carousel-item">
            <div className="d-flex justify-content-center vidHold " >
              <video muted autoPlay loop playsInline className="videoSize "  aria-label="home page video of The Monunumental Journey" >
                <source   src="https://endicottfiles.com/HomePage_Placeholder.mp4" type="video/mp4" ></source>
              </video>
            </div> 
            <div className="carousel-caption d-flex align-items-left ">
              <div>
                <h1 className="d-inline-block text-start univers-45-light m-0 fs-2 ">The Monumental Journey</h1>
                <a className="d-inline-block ms-2" href="#"><img aria-label='Information Icon. Users can click here for more information' className="d-block text-start svgWhite" src="assets/info-square.svg"/></a>
                <h4 className="d-block text-start museo-light">Des Moines, IA</h4>
                <h4 className="d-block text-start museo-light">Artist: Kerry James Marshall</h4>
                <h4 className="d-block text-start museo-light">Videography: Digital Sky</h4>
              </div>
            </div>
          </div>
          <div className="carousel-item   ">
          <div className="d-flex justify-content-center vidHold " >
              <video muted autoPlay loop playsInline className="videoSize "  >
                <source  src="https://endicottfiles.com/HomePage_Moody.mp4" type="video/mp4" ></source>
              </video>
            </div> 
            <div className="carousel-caption d-flex align-items-left">
              <div>
                <h1 className="d-inline-block text-start univers-45-light">Moody Center For The Arts</h1>
                <a className="d-inline-block ms-2" href="#"><img aria-label='Information Icon. Users can click here for more information' className="d-block text-start svgWhite" src="assets/info-square.svg"/></a>
                <h4 className="d-block text-start museo-light">Houston, Texas</h4>
                <h4 className="d-block text-start museo-light">Architect: Michael Maltzan Architects, Inc.</h4>
                <h4 className="d-block text-start museo-light">Videographer:Digital Sky</h4>
              </div>
            </div>
          </div>
          <div className="carousel-item  ">
            <div className="d-flex justify-content-center imgHold " >
              <img src="assets/invisilug-sandbed.jpg" className=" imgSize" alt="..."/>
            </div>
            <div className="carousel-caption d-flex align-items-left">
              <div>
                <h1 className="d-inline-block text-start  univers-45-light">INVISI-LUG®</h1>
                <a className="d-inline-block ms-2" href="#"><img aria-label='Information Icon. Users can click here for more information' className="d-block text-start svgWhite" src="assets/info-square.svg"/></a>
                <h4 className="d-block text-start">CLAY PAVERS</h4>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" aria-label="Button that slides the screen to the previous view">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" aria-label="Button that slides the screen to the next view">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  {/* <div id="slick" className="row p-0 bg-news " aria-label="A portion of the page that is below the fold and will scroll up over the main view" >
    <div id="holdme" className="col">
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

     
    </div>
  </div>  */}
</div>

   
 
  );
}
