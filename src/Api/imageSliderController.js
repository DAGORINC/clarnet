import { getShowroomUrl } from '../services/getShowroomUrl';
import axios from 'axios';

const BASE_URL = `${getShowroomUrl()}api`;

const getAllImages = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/imageSlider`);
        const images = res.data;
        return images;

    } catch (error) {
        return error;
    }
}

const addImage = async (image) => {
    const newImage = new FormData()
    newImage.append('image', image.image);
    newImage.append('link', image.link);
    newImage.append('isVissible', image.isVissible);

    const response = await axios.post(`${BASE_URL}/imageSlider`, newImage)
    return response;
}

// const editImage = async (image) => {
//     const imageEdit = new FormData()
//     imageEdit.append('image', image.image);
//     imageEdit.append('link', image.link);
//     imageEdit.append('isVissible', image.isVissible);

//     const response = await axios.put(`${BASE_URL}/imageSlider/${image._id}`, imageEdit);
//     return response;
// }

const deleteImage = async (_id) => {
    await axios.delete(`${BASE_URL}/imageSlider/${_id}`);
}

const imageSliderController = {
    getAllImages,
    addImage,
    // editImage,
    deleteImage,
};

export default imageSliderController;