//Home Page
'use client';
import Navigate from "./component/navigate";
import { useEffect, useState, useRef } from "react";
import Footer from "./component/footer";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
export default function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null); 
  const [isVideoLoaded,setIsVideoLoaded]=useState(false);
  const handleCarouselLoad = () => {
    if (divRef.current) {
      const height = divRef.current.clientHeight;
      setDivHeight(height);
    }
  };
  useEffect(() => {
    const checkVideoLoad = () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        handleCarouselLoad();
        setIsVideoLoaded(true);
      } else {
        setTimeout(checkVideoLoad, 100);
      }
    };
    checkVideoLoad(); // Start checking for video load
    const updateHeight = () => {
      if (divRef.current) {
        const height = divRef.current.clientHeight;
        setDivHeight(height);
      }
    };
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []); // Empty dependency array
  return (
    <div className="container-fluid">
      <Navigate pageSettings="gradient" /> 
      <main>     
        <div className="row fixed-top " style={{ zIndex: 1 }} ref={divRef} >
          <div className="col p-0" >
            <Carousel className=" p-0  " variant="light" fade interval={null}   >
              <Carousel.Item className="   d-flex justify-content-center " style={{minHeight:'90vh'}} >
                <div className="d-flex justify-content-center vidHold  " >
                  <video ref={videoRef}  className="object-fit-cover w-100" aria-label="video of East Prairie Elementary School" muted autoPlay loop playsInline  >
                    <source   src="https://endicottfiles.com/East_Prarie_2024_Montage_V1_Compressed.mp4" type="video/mp4" ></source>
                  </video>
                </div> 
                <Carousel.Caption className="text-white mb-5 text-start " >
                  <h2 className="museo-light d-block">East Prairie Elementary School</h2>
                  <p className="d-block" >Color: <span> Desert Ironspot Light, Medium Ironspot #77</span></p>
                  <p className="d-block">Size: <span> Utility</span></p>
                  <p className="d-block">Location: <span> Skokie,IL</span></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="   d-flex justify-content-center " style={{minHeight:'90vh'}} >
                <div className="d-flex justify-content-center vidHold  " >
                  <video ref={videoRef}  className="object-fit-cover w-100" aria-label="video of East Prairie Elementary School" muted autoPlay loop playsInline  >
                    <source   src="https://endicottfiles.com/BoysTown-Compressed.mp4" type="video/mp4" ></source>
                  </video>
                </div> 
                
                <Carousel.Caption className="text-white mb-5 text-start ">
                  <h2 className="museo-light d-block">Boys Town Education Center</h2>
                  <p className="d-block" >Color: <span> Ivory Blend, Desert Ironspot, Desert Sands</span></p>
                  <p className="d-block">Size: <span> Modular, Norman, Closure, Utility</span></p>
                  <p className="d-block">Location: <span> Boys Town, NE</span></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div style={{zIndex:3, marginTop:divHeight-125}} className={`row  p-0 ${isVideoLoaded ? '' : 'd-none'} `}  aria-label="A portion of the page that is below the fold and will scroll up over the main view" >
          <div className=" col bg bg-dark z-3" >
            <div className="row mt-5 border-top border-white pt-5">
              <div className="col-lg-3 col-md-6 ">
                <div className="card border border-black rounded-lg shadow h-100 " aria-label="a card that is about the ACE HOTEL winning the Best in Class for the Brick in Architecture awards">
                  <Image style={{height:260}}  className="w-100" src='https://endicottfiles.com/AceHotel1.jpg' height={300} width={300} alt="Image of the Ace Hotel in Toronto, with Endicott brick on it."  />
                  <div className="card-body">
                    <h2 className="card-title text-start univers-45-light fs-3 ">Ace Hotel - Best in Class</h2>
                    <p className="card-text text-start univers-45-light fs-6">The Ace Hotel - Toronto, won Best in Class - Commercial and Craftsmanship. Endicott thin brick and pavers were use through out the project. See the project here.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <div className="card border border-black rounded-lg shadow h-100" aria-label="a card that is about the Boys Town in Boys Town Nebraska winning Silver in the Brick in Architecture awards">
                  <Image style={{height:260}}  className="w-100 " src='https://endicottfiles.com/BoysTown1.jpg' width={300} height={300} alt="Image of Boys Town School using Endicott Thin Brick"/>
                  <div className="card-body">
                    <h2 className="card-title text-start univers-45-light fs-3 ">Boys Town - BIA Silver Winner</h2>
                    <p className="card-text text-start univers-45-light fs-6">Boys Town, won silver in the BIA Brick in Architecture Awards. Endicott thin brick and pavers were use through out the project. See the project here.</p>
                  </div>
                </div>
              </div>
            </div>
            <Footer pageSetUp="gradient"/>
          </div>
        </div>  
      </main>
    </div>
  );
}
export function generateMetadata() {
  return {
    title: 'Endicott Clay Products: High-Quality Brick Manufacturer', 
    description: 'Endicott Clay Products: Your trusted source for high-quality brick. We offer a wide selection of face brick, thin brick, and pavers for any project. Explore our products and find inspiration for your designs.',
    keywords: 'brick, black brick, red brick, brown brick, face brick, thin brick, pavers, clay products, brick manufacturer, North America', 
    openGraph: {
      title: 'Endicott Brick Projects',
      description: 'Build with the best. Endicott brick provides unmatched durability, beauty, and sustainability for your residential or commercial projects. Discover our range of colors, textures, and sizes.',
      url: 'https://www.endicott.com', 
      siteName: 'Endicott',
      images: [
        {
          url: 'https://endicottfiles.com/StanleyMuseumBox.jpg', 
          width: 800,
          height: 800,
        },
        {
          url: 'https://endicottfiles.com/EastPrairieBox.jpg',
          width: 800,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Endicott Brick ',
      description: 'Get inspired by these architectural designs featuring Endicott brick.',
      site: 'https://x.com/EndicottBrick', 
      images: [
        'https://endicottfiles.com/StanleyMuseumBox.jpg',
        'https://endicottfiles.com/EastPrairieBox.jpg',
      ],
    },
  };
}