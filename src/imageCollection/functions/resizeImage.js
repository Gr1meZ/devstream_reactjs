

const ResizeImage = (img) => {
    const MAX_WIDTH = 300;
    const MAX_HEIGHT = 300;

    let weight = img.width;
    let height = img.height;

    if (weight > height && weight > MAX_WIDTH) {
        height = height * (MAX_WIDTH / weight);
        weight = MAX_WIDTH;
    } else if (height > MAX_HEIGHT) {
        weight = weight * (MAX_HEIGHT / height);
        height = MAX_HEIGHT;
    }

    return {weight, height}
}

export default ResizeImage;