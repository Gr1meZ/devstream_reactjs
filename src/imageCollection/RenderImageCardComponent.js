import React, {useEffect, useState} from "react";
import {getNormalizedImageSize} from "./functions/getNormalizedImageSize";

const RenderImageCardComponent = ({ imageUrl }) => {
    const [image, setImage] = useState(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [blob, setBlob] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.crossOrigin = "anonymous";

        img.onload = () => {
            setImage(img);

            const properties = getNormalizedImageSize(img);
            setWidth(properties.weight);
            setHeight(properties.height);
        };

        img.onerror = () => {
            console.log("failed to load image");
        };
    }, [imageUrl]);

    useEffect(() => {
        fetch(imageUrl)
            .then((response) => response.blob())
            .then((myBlob) => {

                setBlob(myBlob);
            });
    }, [imageUrl]);

    const downloadImage = () => {

        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
        downloadLink.click();
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <canvas
                className="card-img-top"
                width={width}
                height={height}
                ref={(canvas) => {

                    if (canvas && image) {
                        const ctx = canvas.getContext("2d");
                        ctx.drawImage(image, 0, 0, width, height);
                    }
                }}
            />
            <div className="card-body">
                <button className="btn btn-success" onClick={downloadImage}>
                    Download
                </button>
            </div>
        </div>
    );
};

export default RenderImageCardComponent;