import React from "react";
import Image from "next/image";

export default function ColorProjects(){
    return(
        <div className="row">
            <div className="col">

           <div className="row mt-2 mb-2">
            <div className="col-12">
                <h2 className="text-center">Projects & Videos</h2>

            </div>
           </div>
           <div className="row">
           <div className="col-2 ">
                <div className="card border ">
                 <Image className="d-inline-block me-2 w-100" src="https://endicottfiles.com/EastPrairieBox.jpg" width={200} height={200} alt="Image of East Prairie School"/>
                <div className="card-body">
                    <h5 className="card-title fs-6">
                        East Prairie Elementary School
                    </h5>

                </div>
                </div>
                </div>
                <div className="col-2 ">
                <div className="card border ">
                <Image className="d-inline-block me-2 w-100" src="https://endicottfiles.com/FortMeyersSquare.jpg" width={200} height={200} alt="Image of East Prairie School"/>
                <div className="card-body">
                    <h5 className="card-title fs-6 d-inline me-1">
                        Fort Meyer Public Library
                    </h5>
                    <Image className="d-inline" src="/assets/MiscImages/Images.png" alt="Image that lets people know that the card is a link to images of Fort Meyer" width={25} height={25}/>

                </div>
                </div>
                </div>
                <div className="col-2 ">
                <div className="card border ">
                <Image className="d-inline-block me-2 w-100" src="https://endicottfiles.com/GothamBox.jpg" width={200} height={200} alt="Image of East Prairie School"/>
                <div className="card-body">
                    <h5 className="card-title fs-6">
                        Gotham West Apartments
                    </h5>

                </div>
                </div>
                </div>
                
                
                
            
           </div>
            
           
            </div>
        </div>
    )
}