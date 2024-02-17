import React from "react";
import ImageCardsComponent from "./ImageCardsComponent";


const ImageCollection = ({images}) => {

    return (
        <div className="container  text-center d-flex my-lg-5 py-lg-5" >
                <ImageCardsComponent images={images} />
        </div>
    );
};

export default ImageCollection;
