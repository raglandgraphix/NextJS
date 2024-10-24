import React from "react";
//import { DataItem,Texture } from "../../../Types/productTypes";
export default function FBCSelections (){
    return(
        <div className="row univers-55-Roman text-rock h-100  w-100  d-flex justify-content-xl-end justify-content-center ">
              <div className="col-4 col-md-5 col-xl-3 border-end  text-center   ">
                <div className="row border-bottom ">
                  <div className="col ">
                    <h2 className="fs-5 ">Wire Texture</h2>
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-nowrap ">
                    {/* <span className="d-block text-uppercase  mt-2  pt-2 pb-2 text-rock ">ALL</span> */}
                    <span className="d-block text-uppercase   pt-2 pb-2 bg bg-black text-stone rounded-2">Face Brick</span>
                    <span className="d-block text-uppercase   pt-2 pb- text-rock">Thin Brick</span>
                    <span className="d-block text-uppercase   pt-2 pb-2 text-rock">Pavers</span>
                  </div>
                </div>
                
              </div>
              <div className="col-7 col-md-5 col-xl-6 text-center">
                <div className="row">
                  <div className="col border-bottom">
                    <h2 className="fs-5 ">Color Range</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    {/* {
                      ProductRange?.map((ranger,index)=>(
                        <Link key={index}  className="text-decoration-none text-rock" href={`/${Product}/Colors-${ranger.split("/")[0]}`}><span className={`d-block text-uppercase   pt-2 pb-2 ${index===0 && (selectedColor===null || selectedColor===ranger.split('/')[0])?'mt-2 bg bg-black text-stone rounded-2':selectedColor === ranger.split('/')[0] ? 'bg-black text-stone rounded-2' : ''}  `}>{ranger}</span></Link>
                      ))} */}
                    {/* <Link className="text-decoration-none text-rock" href="/FaceBrick/Colors-ALL"><span className={`d-block text-uppercase  mt-2 pt-2 pb-2  ${selectedColor===null || selectedColor==='ALL'?'bg bg-black text-stone rounded-2':''} `}>All</span></Link>
                    <Link className="text-decoration-none text-rock" href="/FaceBrick/Colors-Red"> <span className={`d-block text-uppercase   pt-2 pb-2  ${selectedColor==='Red' || selectedColor==='Burgundy'?'bg bg-black text-stone rounded-2':''} `}>Red/Burgundy</span></Link>
                    <Link className="text-decoration-none text-rock " href='/FaceBrick/Colors-Black'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Black' || selectedColor==='Plum'?'bg bg-black text-stone rounded-2':''}`} >Black/Plum</span></Link>
                    <Link className="text-decoration-none text-rock" href='/FaceBrick/Colors-Gray'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Gray' || selectedColor==='White'|| selectedColor==='Cream' || selectedColor==='Buff'?'bg bg-black text-stone rounded-2':''}`}>Gray/White/Cream/Buff</span></Link>
                    <Link className="text-decoration-none text-rock" href='/FaceBrick/Colors-Tan'><span className={`d-block text-uppercase   pt-2 pb-2 ${selectedColor==='Tan' || selectedColor==='Brown' || selectedColor==='Orange'?'bg bg-black text-stone rounded-2':''}`}>Tan/Brown/Orange</span></Link> */}
                  </div>
                </div>
                
              </div>
            </div>
    )
}