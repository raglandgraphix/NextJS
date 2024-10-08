import Image from "next/image";

export default function navigate(){



    return(
        
        <div className="row pt-2">
            <div className="col-2  ">
                <div className="row ">
                    <div className="col d-flex justify-content-center">
                        <Image  src="/assets/logoBlack.png" width={200} height={75} alt='Endicott logos'/>
                    </div>

                </div>
                <div className="row text-center">
                    <div className="col ">
                        <span className="fs-6 ">Endicott Clay Products Company</span>
                    </div>

                </div>
                
            </div>
            <div className="col-10 border border-danger">

            </div>
            
        </div>
        
    )

}