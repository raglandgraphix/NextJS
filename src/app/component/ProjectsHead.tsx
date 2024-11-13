'use client'
import React from "react";
import ProductBox from "./ProductBox";
import { useState,useEffect } from "react";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import ProductRangeSelection from "./ProductRangeSelection";
export default function ProjectsHead(){
    const { RangeColors } = SplitPathname();
    const [Color,setColor]=useState<string | null>(null);
    const [Header,setHeader]=useState<string | null>(null);
    const [Description,setDescription]=useState<string | null>(null);
    useEffect(()=>{
        if(RangeColors==='Red' || RangeColors==='Burgundy'){
            setColor('Red/Burgundy ');
            setHeader("Get Inspired by Red and Burgundy Brick Projects");
            setDescription("Endicott's red and burgundy brick selection offers a rich palette of warm hues, from the deep tones of Bordeaux Blend and Burgundy Blend to the vibrant accents of Ruby Red and Rose Blend.  These versatile colors create stunning facades for a variety of architectural styles, whether you seek a traditional or contemporary aesthetic.");
        }else if(RangeColors==='Black' || RangeColors==='Plum'){
            setColor('Black/Plum');
            setHeader("Bold & Dramatic: Endicott Black & Plum Brick Projects");
            setDescription("Experience the dramatic impact of Endicott's black and plum brick in a range of architectural settings. These projects showcase the versatility of these bold colors, from creating striking modern facades to adding a touch of timeless sophistication.");
        }else if(RangeColors==='Gray' || RangeColors==='White' || RangeColors==='Cream' || RangeColors==='Buff'){
            setColor('Gray/White/Cream/Buff');
            setHeader("Endicott's Subtle Sophistication: Gray, White, Cream & Buff Brick");
            setDescription("Discover the subtle elegance of Endicott's gray, white, cream, and buff brick in a variety of architectural applications.  These projects showcase the versatility of these colors, from creating bright and airy facades to adding a touch of understated sophistication.");
        }else if(RangeColors==='Tan' || RangeColors==='Brown' || RangeColors==='Orange'){
            setColor('Tan/Brown/Orange');
            setHeader("Earthy Elegance: Endicott Tan, Brown & Orange Brick Projects");
            setDescription("Explore the warmth and versatility of Endicott's tan, brown, and orange brick in a diverse collection of projects. These earthy hues create inviting facades, adding a touch of natural beauty to both traditional and contemporary designs.");
        }else{
            setColor(null);
            setHeader("Endicott Face Brick: Inspiring Project Gallery");
            setDescription("Endicott face brick projects showcase the versatility and beauty of our brick across a diverse range of architectural styles, from modern museums to historic restorations and everything in between. Explore our project gallery to see how Endicott brick brings enduring elegance and character to buildings across the country.");
        }
    },[RangeColors]);
    return(
        <div className="row  d-flex justify-content-between ">
            <ProductBox setDescription={Color} productHeadLine={Header} ProductDescription={Description}/>
            <ProductRangeSelection/>            
        </div>
    )   
}