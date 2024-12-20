import React from "react";
import ProductBox from "./ProductBox";
import ProductSelection from "./ProductSelection";


export default function SizeHead(){
    const HeaderCopy='Endicott Textures: Elevate Your Design with Brick';
    const BodyCopy='Endicott offers a wide range of brick sizes to suit any architectural style and design vision. From classic modular dimensions to the elongated Roman size. Explore our selection to find the perfect fit for your next project.'
    return(
        <div className="row">
            <ProductBox setDescription="Textures" ProductDescription={BodyCopy} productHeadLine={HeaderCopy} />
            <ProductSelection/>
        </div>
    )
}