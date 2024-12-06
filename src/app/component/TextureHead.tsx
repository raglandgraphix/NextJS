import React from "react";
import ProductBox from "./ProductBox";
import ProductSelection from "./ProductSelection";


export default function TextureHead(){
    const HeaderCopy='Endicott Textures: Elevate Your Design with Brick';
    const BodyCopy='Explore the diverse textures of Endicott brick, from smooth and classic to rugged and rustic.  Our unique finishes, like Velour,  Artisan, and Vertical Score, add depth, character, and visual interest to any brick facade.'
    return(
        <div className="row">
            <ProductBox setDescription="Textures" ProductDescription={BodyCopy} productHeadLine={HeaderCopy} />
            <ProductSelection/>
        </div>
    )
}