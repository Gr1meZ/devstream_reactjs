

const downloadImage = ({imageUrl, blob}) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
    downloadLink.click();
};

export default downloadImage;