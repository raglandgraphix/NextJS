import Image from "next/image"
export default function navigate(){



    return(
        
        <div className="row ">
            <div className="col-2 ">
                <Image className="img-fluid" src="/assets/logoBlack.png" width={200} height={100} alt='Endicott logos'/>
            </div>
            <div className="col-10 border border-danger">

            </div>
            
        </div>
        
    )

}