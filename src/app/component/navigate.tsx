import Image from "next/image";

export default function navigate(){

    const linkData = [
        'Face Brick','Thin Brick','Pavers','Pathway Aggregate','Resources', 'Who We Are', 'Careers'
    ];


    return(
        
        <div className="row pt-2 border d-flex justify-content-center justify-content-lg-start">
            <div className="col-7 col-md-5  col-xl-3 ">
                <div className="row ">
                    <div className="col  d-flex justify-content-center">
                        <Image  src="/assets/logoBlack.png" width={200} height={75} alt='Endicott logos'/>
                    </div>

                </div>
                <div className="row text-center">
                    <div className="col ">
                        <span className="fs-6 ">Endicott Clay Products Company</span>
                    </div>

                </div>
                
            </div>
            <div className="col-10 d-flex align-items-end justify-content-center  "> 
                {
                    linkData.map((link)=>(
                        <span className=" p-2 pb-0 me-2"> {link}</span>
                    ))
                }               
                {/* <span className=" p-2 pb-0 me-2 ">Projects</span><span className=" p-2 pb-0 me-2 ">Face Brick</span><span className=" p-2 pb-0 me-2 ">Thin Brick</span><span className=" p-2 pb-0 me-2 ">Pavers</span><span className=" p-2 pb-0 me-2 ">Pathway Aggregate</span><span className=" p-2 pb-0 me-2 ">Resources</span><span className=" p-2 pb-0 me-2 ">Who We Are</span><span className=" p-2 pb-0 me-2 ">Careers</span> */}
            </div>
            
            
        </div>
        
    )

}