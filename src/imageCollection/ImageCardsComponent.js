import React from "react";
import RenderImageCardComponent from "./RenderImageCardComponent";
import baseApi from "../baseApi";
import {useSelector} from "react-redux";
const ImageCardsComponent = () => {
    const images = useSelector(state => state.stateData.images);

    return (
        <div className="row align-self-center w-100">
            {images.map((image) => (
                <div className="col container-canvas" key={image.image_url}>
                    <RenderImageCardComponent imageUrl={`${baseApi}${image.image_url}`} />
                </div>
            ))}
        </div>
    );
};

export default ImageCardsComponent;