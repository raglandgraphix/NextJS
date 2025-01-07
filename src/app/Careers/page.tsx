'use client'
import React from "react";
import { useState } from "react";
import Navigate from "../component/navigate";
import Footer from "../component/footer";
import ProductBox from "../component/ProductBox";
export default function Careers(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [PEChecked, setPEChecked] = useState<boolean | null>(null);
    const [CBChecked, setCBChecked] = useState<boolean | null>(null);
    const [AgeChecked, setAgeChecked] = useState<boolean |  null>(null);
    const [CitizenChecked, setCitizenChecked] = useState<boolean |  null>(null);

    const PECheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPEChecked(event.target.id === 'Yes'); 
      };
      const CBCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCBChecked(event.target.id === 'Yes'); 
      };
      const AgeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgeChecked(event.target.id === 'Yes'); 
      };
      const CitizenCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCitizenChecked(event.target.id === 'Yes'); 
      };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        setStatus('Sending...');
    
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
          });
    
          if (response.ok) {
            setStatus('Email sent!');
            setName('');
            setEmail('');
            setMessage('');
          } else {
            setStatus('Error sending email.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          setStatus('Error submitting form.');
        }
      };
      console.log(status);
return(


    <div className="container-fluid">

<Navigate pageSettings="light"/>
<ProductBox setDescription='Online Application' productHeadLine='Join the Endicott Team: Build Your Career with Us' ProductDescription='Become a part of the Endicott legacy. We offer rewarding career opportunities in a variety of fields. Explore our open positions and discover how you can contribute to our mission of building legacies from the ground up.'/>
    
    <form onSubmit={handleSubmit}>
    <div className="row p-2 ms-3 me-3 d-flex justify-content-center">
        <div className="col-8 border border-black rounded-2 p-3 ">
            <div className="row ">
                <h2 className="fs-6 text-center text-uppercase ">Position</h2>
            </div>
           
            <div className="row">
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2 " htmlFor="position" > Position applied for:</label>
                        <select id="position" className="form-select rounded-2" aria-label="Select position being applied for.">
                            <option selected >Select One</option>                        
                        </select>
                    </div>
                </div>
                <div className="col-4">
                    <div className=" input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="Start Date" >Date you can start:</label>
                        <input className="form-control rounded-2" type="date" id="inputDate" />
                    </div>
                </div>
                

            </div>
        </div>
    

    </div>
    <div className="row p-2 ms-3 me-3 d-flex justify-content-center">
        <div className="col-8 border border-black rounded-2 p-3 ">
            <div className="row  ">
                <h2 className="fs-6 text-center text-uppercase ">Personal Information</h2>
            </div>
            <div className="row mt-5 mb-2">
                <div>
                    <h3 className="fs-7  text-uppercase ">Name: </h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-4 ">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="firstName" >First Name:</label>
                        <input className="form-control rounded-2" type="text" id="firstName" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="middleName" >Middle Name:</label>
                        <input className="form-control rounded-2" type="text" id="middleName" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="lastName" >Last Name:</label>
                        <input className="form-control rounded-2" type="text" id="lastName" />
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-2">
                <div>
                    <h3 className="fs-7  text-uppercase ">Home Address</h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-10 mb-2">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="StreetAddress" >Street Address:</label>
                        <input className="form-control rounded-2" type="text" id="StreetAddress" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="City" >City</label>
                        <input className="form-control rounded-2" type="text" id="City" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="State" >State</label>
                        <select id="State" className="form-select rounded-2" aria-label="Select the state you are from.">
                            <option selected >Select State</option>                        
                        </select>                       
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="ZipCode" >Zip Code</label>
                        <input className="form-control rounded-2" type="text" id="ZipCode" />                     
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-2">
                <div>
                    <h3 className="fs-7  text-uppercase ">Contact Information</h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-4 mb-2">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="MainPhone" >Main Phone</label>
                        <input className="form-control rounded-2" type="tel" id="StreetAddress" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="OtherPhone" >Other Phone</label>
                        <input className="form-control rounded-2" type="tel" id="OtherPhone" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="Email" >Email</label>
                        <input className="form-control rounded-2" type="email" id="Email" />                      
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div className="row p-2 ms-3 me-3 d-flex justify-content-center">
        <div className="col-8 border border-black rounded-2 p-3 ">
            <div className="row  ">
                <h2 className="fs-6 text-center text-uppercase ">Application Information</h2>
            </div>
            <div className="row mt-5 mb-2">
                <div>
                    <h3 className="fs-6 font-bold text-uppercase ">Availability </h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-4">
                    <label className="me-5">Employment Type</label>
                </div>
                <div className="col-6">
                    <input className="me-2" type="checkbox" id="Fulltime"/><label htmlFor="Fulltime" className="me-5">Full Time</label>
                    <input className="me-2" type="checkbox" id="Parttime"/><label htmlFor="Parttime" className="me-5">Part Time</label>
                    <input className="me-2" type="checkbox" id="Temporary"/><label htmlFor="Temporary">Temporary</label>
                </div>
            </div>
            <div className="row mt-5 mb-2">
                <div className="col-4">
                <label className="">Prefered Shifts</label>
                </div>
                
                <div className="col-6">
                    <div>
                        <input className="me-2" type="checkbox" id="Fulltime"/><label htmlFor="Fulltime" className="me-5 ">First <span className="fs-7">(5:30AM to 3PM Monday - Friday)</span></label>
                    </div>
                    <div>
                        <input className="me-2" type="checkbox" id="Parttime"/><label htmlFor="Parttime" className="me-5">Second <span className="fs-7">(3:00PM to 12:30AM Monday - Friday)</span></label>
                    </div>
                    <div>
                        <input className="me-2" type="checkbox" id="Temporary"/><label htmlFor="Temporary">Third <span className="fs-7">(9:00PM to 6:30AM Monday - Friday)</span></label>
                    </div>
                </div>
            </div>
            <div className="row mt-5 ">
                <div className="col-4 mb-2">
                    <label className="">Have you worked for Endicott before?</label>
                </div>
                <div className="col-4">
                    <div>
                    <input className="me-2" type="checkbox" id="Yes" checked={PEChecked===true} onChange={PECheck}/><label htmlFor="Temporary">Yes</label>                    
                    </div>                    
                    <div>
                    <input className="me-2" type="checkbox" id="No" checked={PEChecked===false} onChange={PECheck}/><label htmlFor="Temporary">No</label>                    
                    </div> 
                </div>
                
            </div>
            <div className="row mt-5 ">
                <div className="col-4 mb-2">
                    <label className="">Are you at least 18 Years Old?</label>
                </div>
                <div className="col-4">
                    <div>
                    <input className="me-2" type="checkbox" id="Yes" checked={AgeChecked===true} onChange={AgeCheck}/><label htmlFor="Temporary">Yes</label>                    
                    </div>                    
                    <div>
                    <input className="me-2" type="checkbox" id="No" checked={AgeChecked===false} onChange={AgeCheck}/><label htmlFor="Temporary">No</label>                    
                    </div> 
                </div>
                
            </div>
            <div className="row mt-5 ">
                <div className="col-4 mb-2">
                    <label className="">Are you color blind?</label>
                </div>
                <div className="col-4">
                    <div>
                    <input className="me-2" type="checkbox" id="Yes" checked={CBChecked===true} onChange={CBCheck}/><label htmlFor="Temporary">Yes</label>                    
                    </div>                    
                    <div>
                    <input className="me-2" type="checkbox" id="No" checked={CBChecked===false} onChange={CBCheck}/><label htmlFor="Temporary">No</label>                    
                    </div> 
                </div>
                
            </div>
            <div className="row  mt-5">
                <h2 className="fs-6 text-center text-uppercase ">Citizenship</h2>
            </div>
            <div className="row mt-5 ">
                <div className="col-4 mb-2">
                    <label className="">Are you a citizen of the United States or have work autherization?</label>
                </div>
                <div className="col-4">
                    <div>
                    <input className="me-2" type="checkbox" id="Yes" checked={CitizenChecked===true} onChange={CitizenCheck}/><label htmlFor="Temporary">Yes</label>                    
                    </div>                    
                    <div>
                    <input className="me-2" type="checkbox" id="No" checked={CitizenChecked===false} onChange={CitizenCheck}/><label htmlFor="Temporary">No</label>                    
                    </div> 
                </div>
                
            </div>
            <div className="row mt-5">
                <p className="fs-7">Note: the law requires that you provide evidence and a sworn statement of your citizenship or work authorization if you are hired. Any offer of employment which you receive is contingent upon your providing the documentation and statement which we will request from you.</p>

            </div>
            
        </div>
    </div>

    <div className="row d-flex justify-content-center mt-5 ">
        <div className="col-8 border-top-dashed p-5" >
            <div className="row">
                <p>By signing below, I certify that the answers and information set out above are true, accurate and complete to the best of my knowledge. I acknowledge that if any answer or information is not true, accurate or complete, I may not be hired, or if hired, I may be discharged. I authorize Endicott Clay Products Co. to investigate all statements contained in this application for employment and to investigate my character and qualifications. I understand that this application is not a contract of employment. I also acknowledge that no oral representations have been made, and that no one within Endicott Clay Products Co. has the authority to make oral contracts of employment. If hired, my employment relationship with Endicott Clay Products Co. is terminable at-will, with or without cause, by either myself or Endicott Clay Products Co. I also understand that my employment will be conditioned upon successfully completing a drug/alcohol test. I understand and agree to all of the conditions and statements set forth above, and throughout this application. Attached to this job application is a job description of the duties of the job for which I am applying. I certify I have read the attached job description and can meet all of the essential duties of this job.</p>
            </div>
            <div className="row" >

                <h5 className="text-center">Signature</h5>
                <p className="text-center">Type Full Name</p>
                

            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <input className="form-control"  type="text" required id="Signature"/>
                </div>

            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-6">
                    <div className="input-group ">
                        <label className="me-3 " >I agree to the terms listed above.</label><input type="checkbox" id="Agree"/>
                    </div>
                </div>
                

            </div>
            <div className="row mt-5">
                <p>
                By electronically entering your name and selecting the terms of agreement, you are officially signing this application.
                </p>

            </div>
            
        </div>
    </div>
    <div className="row d-flex justify-content-center mt-5">
        <div className=" col-8 d-flex justify-content-center ">
        <button type="button" className="btn btn-secondary">Submit</button>
        </div>
    </div>
    
    
    
  </form>
  <Footer pageSetUp="light"/>
  </div>
)
}