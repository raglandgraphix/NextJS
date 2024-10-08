'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import logoBlack from '/public/assets/logoBlack.png';
import logoWhite from '/public/assets/logoWhite.png';
interface NavigationProps {
  logoPath: string;
}
//import "../css/Navigation.css";
//import "../css/StandardSite.css";
//import logoWhite from "../assets/logoWhite.png";
//import logoBlack from "../assets/logoBlack.png";
//import navHBwhite from "../assets/Navigation_Menu_Icon_White.png";
//import { Outlet, Link,useNavigation,useNavigate } from "react-router-dom";



export default function Navigation({ logoPath }: NavigationProps){
  
console.log('logoPath in Navigation.tsx:', logoPath);
 
  
  const [activeSection, setActiveSection] = useState(null);
  const [showElement,setShowElement]=useState(false);
  //const navigate = useNavigate();
  
  
  

  const hamburgerClick = ()=>{
   
    setShowElement(prevShowElement => !prevShowElement);
    
    if(showElement===true){
      
      //subSelectionRef.current.style.height = '0px';
      //subSelectionRef.current.style.border = 'none';
      setActiveSection(null );
    }
    
  }
  const subSelectionRef = useRef(null);
  
  
  
  const subSectionLists = {
    "Face Brick": ["Colors", "Textures", "Sizes"],
    'Projects':['All Projects','Face Brick','Thin Brick','Pavers'],
    "Thin Brick": ["Colors", "Textures", "Sizes"],
    "Pavers": ["Colors","Sizes"],
    // "Pathway Aggregate":[''],
    "Resources": ["Literature", "BIM", "Specifications",'Technical Notes','Brick Briefs'],
    'Who We Are':['Profile','Videos'],
    'Careers/Carrera':['Current Openings','Application','Solicitud','Apply Online/Aplica Online']
    // Add other sub-section lists as needed
  };
  const handleClick = () => {
    // if(sectionName==='Pathway Aggregate'){
    //   alert('aggregate');
    // }
   
    if(sectionName===activeSection){
     // subSelectionRef.current.style.height = '0px';
     // subSelectionRef.current.style.border = 'none';
      

      setActiveSection(null );
    }else if(sectionName==='Pathway Aggregate'){
      
      //navigate('/PathwayAggregate-Colors');
    }else{
     // subSelectionRef.current.style.height = 'auto';
     // subSelectionRef.current.style.borderTop = 'solid thin white';
      if(window.innerWidth>961){
       // subSelectionRef.current.style.borderBottom = 'solid thin white';
      }
      
      
      
      setActiveSection(sectionName );

      
      
    }
    
    
    
    

    

    

  };
  
const onLinkClick = ()=>{
  //subSelectionRef.current.style.height = '0px';
  //subSelectionRef.current.style.border = 'none';
  setActiveSection(null );
  hamburgerClick();
}


    return (
     
      <div className="container-fluid">       
        <div className="row ">
          <div className="col">
            <div className={`row  `}>
            <div className="col-3 col-md-4  col-lg-9 d-flex justify-content-start mt-2 d-lg-none " onClick={hamburgerClick}>
                
                
              </div>
              <div className="col-9 col-md-8 col-lg-2 col-lg-2 pt-2 pb-2">
                <Link key='Home' href="/">
                  <Image id="logo" className="  d-flex justify-content-end ms-2  " src={logoPath} width={1450} height={330} alt="$" />                  
                </Link>                
              </div>
              
              
             
             
              <div className={`col-5 col-md-3 col-lg-10 text-center text-lg-start E_Nav     ${showElement ? 'd-block ' : 'd-none d-lg-block'} `}>
                {
                  ['Projects','Face Brick','Thin Brick','Pavers','Pathway Aggregate','Resources','Who We Are','Careers/Carrera'].map(section => 
                    <p key={section} className={`E_Nav_Format  d-lg-inline-block ${activeSection ===section ? "active":""} `} onClick={()=>{ handleClick(section); }}>{section}</p>
                  
                  
                  
                  
                    )
                    
                }
                
                
                
              </div>
              <div className="col-5 col-md-3 E_Sub_Selections ps-4 " ref={subSelectionRef}>
              <div className="row  " >
              <div className="col-2 d-none d-lg-inline-block"></div>
              <div className="col mt-2">
              {activeSection &&
              subSectionLists[activeSection]?.map((list) => (
                <Link key={list} href={`${activeSection}${list.replace(/\s+/g,'-')}`} className="d-block d-lg-inline-block E_Sub_Choices ms-2 text-decoration-none mt-3 mt-lg-0 pb-2" onClick={onLinkClick} >
                {list}
                </Link>
               
                // <p key={list} className="d-lg-inline-block E_Sub_Choices ms-2">
                //   {list}
                // </p>
                
                
              ))}
              
              </div>
             
            
            </div>
              
              </div>
              
              
            </div>







            {/* <div className="row E_Sub_Selections " ref={subSelectionRef}>
              <div className="col-2 d-none d-md-inline-block"></div>
              <div className="col">
              {activeSection &&
              subSectionLists[activeSection]?.map((list) => (
               
                <p key={list} className="d-md-inline-block E_Sub_Choices">
                  {list}
                </p>
                
                
              ))}
              
              </div>
             
            
            </div> */}









          </div>

        </div>
       

      </div>
      
    )
}