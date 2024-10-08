'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from "react";
//import Container from 'react-bootstrap/Container';
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
  



    return (
     
      <div className="container-fluid">       
        <div className="row ">
          <div className="col">
            <div className={`row  `}>
            <div className="col-3 col-md-4  col-lg-9 d-flex justify-content-start mt-2 d-lg-none " >
                
                
              </div>
              <div className="col-9 col-md-8 col-lg-2 col-lg-2 pt-2 pb-2">
                <Link key='Home' href="/">
                  <Image id="logo" className="  d-flex justify-content-end ms-2  " src={logoPath} width={1450} height={330} alt="$" />                  
                </Link>                
              </div>
              
              
             
             
              
              <div className="col-5 col-md-3 E_Sub_Selections ps-4 " >
              <div className="row  " >
              <div className="col-2 d-none d-lg-inline-block"></div>
              
             
            
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