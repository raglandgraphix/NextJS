//Face brick Colors Page
'use client';
import Navigate from "../../component/navigate";
import Footer from "../../component/footer";
import React from "react";
import { useState, useEffect } from "react";
import {usePathname} from 'next/navigation';
import Link from 'next/link'
import Image from "next/image";
import Head from "next/head";
interface Texture {
    texture: string;
    textureDescription?: string; // Optional property
    image: string;
    fallbackImage?: string; // Optional property
    fallbackLargeImage?: string; // Optional property
    largeImage?: string; // Optional property
    sizes: string[];
  }
  
  interface DataItem {
    id: number;
    fullName: string;
    descriptionTitle: string;
    description: string;
    mainImage: string;
    colorGroup: string[];
    altTag: string;
    textures: Texture[];
    productLine: string;
    productCall: string;
    projects: unknown[]; // You might want to define a more specific type for projects if possible
  }
 
export default function Facebrick(){
  useEffect(() => {
    document.title = "Endicott Face Brick Colors ";
  }, []);
    const [data, setData] = useState<DataItem[] | null>(null); // Correct type
    const [selectedColor,setSelectedColor]=useState<string | null>(null);
    const [rangeCallout,setRangeCallout]=useState<string | null>(null);
    const pathname = usePathname();
    useEffect(()=>{
      setSelectedColor(pathname.includes('-')?pathname.split('-')[1]:null);
      
      //selectedColor==='Red' || selectedColor==='Burgundy'?setRangeCallout('RED/BURGUNDY'):(selectedColor==='Black' || selectedColor==='Plum'?setRangeCallout('BLACK/PLUM'):(selectedColor==='Gray' || selectedColor==='White' || selectedColor==='Cream' || selectedColor==='Buff'?setRangeCallout('GRAY/WHITE/CREAM/BUFF'):(selectedColor==='Tan' || selectedColor==='Brown' || selectedColor==='Orange'?setRangeCallout('TAN/BROWN/ORANGE'):null)));
    },[pathname]);

    useEffect(()=>{
      if (selectedColor === 'Red' || selectedColor === 'Burgundy') {
        setRangeCallout('RED/BURGUNDY');
      } else if (selectedColor === 'Black' || selectedColor === 'Plum') {
        setRangeCallout('BLACK/PLUM');
      } else if (selectedColor === 'Gray' || selectedColor === 'White' || selectedColor === 'Cream' || selectedColor === 'Buff') {
        setRangeCallout('GRAY/WHITE/CREAM/BUFF');
      } else if (selectedColor === 'Tan' || selectedColor === 'Brown' || selectedColor === 'Orange') {
        setRangeCallout('TAN/BROWN/ORANGE');
      } else if (selectedColor === null || selectedColor === 'ALL') { 
        setRangeCallout(''); 
      } else {
        setRangeCallout(null); // Or a default value for other cases
      }
    }),[selectedColor];
    
    
    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/JSON/FacebrickColors.json');
            const jsonData: DataItem[] = await response.json(); // Correct type
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      if (!data) {
        return <div>Loading...</div>;  
      }
    return(
      <div className="container-fluid">
        <Head>
            <title>{document.title}</title>
            <meta
            name = "Endicott Face Brick Colors"
            content = "Explore the diverse colors of Endicott Face Brick. Find the perfect brick for your residential or commercial project with our wide range of classic and contemporary hues."
            />
        </Head>
        <Navigate pageSettings="light"/>
        <div className="row ">
          <div className="col-6 faceBrickBox m-3 text-white ps-3 pt-2 pb-2 ">
            <div className="row">
              <div className="col-6">
              <h1 className="univers-55-Oblique d-inline-block ">Face Brick</h1>
              </div>
              <div className="col-6 d-flex justify-content-end">
              <h2 className="museo-light d-inline  fs-6 fst-italic ">{rangeCallout}</h2>
              </div>

            </div>
            
            
            <h2 className="museo-light ">Endicott face brick: Durable and aesthetically versatile for timeless architectural design.</h2>
            <span className="univers-55-Roman">Endicott face brick elevates architecture with its rich palette of colors, from classic red and black to contemporary gray and tan.  Complementing the diverse color selection are unique textures like velour, smooth, and artisan, offering endless design possibilities for stunning and enduring facades.</span>
          </div>
          <div className="col-12 col-xl-5 pb-2 pt-2 m-3   ">
            

            <div className="row univers-55-Roman h-100  w-100  d-flex justify-content-xl-end">
              <div className="col-3 border-end  text-center   ">
                <div className="row border-bottom ">
                  <div className="col ">
                    <h2 className="fs-5">Product</h2>
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-nowrap ">
                    <span className="d-block text-uppercase  mt-2  pt-2 pb-2 ">ALL</span>
                    <span className="d-block text-uppercase   pt-2 pb-2 bg bg-black text-stone rounded-2">Face Brick</span>
                    <span className="d-block text-uppercase   pt-2 pb-2">Thin Brick</span>
                    <span className="d-block text-uppercase   pt-2 pb-2">Pavers</span>
                  </div>
                </div>
                
              </div>
              <div className="col-5 text-center">
                <div className="row">
                  <div className="col border-bottom">
                    <h2 className="fs-5 ">Color Range</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Link className="text-decoration-none text-black" href="/FaceBrick/Colors-ALL"><span className={`d-block text-uppercase  mt-2 pt-2 pb-2  ${selectedColor===null || selectedColor==='ALL'?'bg bg-black text-stone rounded-2':''} `}>All</span></Link>
                    <Link className="text-decoration-none text-black" href="/FaceBrick/Colors-Red"> <span className={`d-block text-uppercase   pt-2 pb-2  ${selectedColor==='Red' || selectedColor==='Burgundy'?'bg bg-black text-stone rounded-2':''} `}>Red/Burgundy</span></Link>
                    <Link className="text-decoration-none text-black" href='/FaceBrick/Colors-Black'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Black' || selectedColor==='Plum'?'bg bg-black text-stone rounded-2':''}`} >Black/Plum</span></Link>
                    <Link className="text-decoration-none text-black" href='/FaceBrick/Colors-Gray'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Gray' || selectedColor==='White'|| selectedColor==='Cream' || selectedColor==='Buff'?'bg bg-black text-stone rounded-2':''}`}>Gray/White/Cream/Buff</span></Link>
                    <Link className="text-decoration-none text-black" href='/FaceBrick/Colors-Tan'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Tan' || selectedColor==='Brown' || selectedColor==='Orange'?'bg bg-black text-stone rounded-2':''}`}>Tan/Brown/Orange</span></Link>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            data.map((item)=>(
              selectedColor === 'ALL' || selectedColor === null || item.colorGroup.some(color => (selectedColor ?? '').includes(color)) ? (
                
              <div key={item.id} className="col-4">
                <div className="Card border rounded-bottom rounded-3 m-1  ">
                  <Image className="card-img-top img-fluid" width={500} height={500} alt={item.altTag} src={item.mainImage}  />
                    <div className="card-body">
                      <div className="card-title text-center">
                        <h2 className="text-uppercase univers-45-light fs-5 mt-2">{item.fullName.replace(/_/g, ' ')}</h2>
                      </div>
                    </div>
                </div>
              </div>
              ):null
            ))
          }
        </div>
        <Footer pageSetUp="light"/>
      </div>
    )
}
