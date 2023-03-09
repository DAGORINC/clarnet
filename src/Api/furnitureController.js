import axios from 'axios';
import { getShowroomUrl } from '../services/getShowroomUrl';

const BASE_URL = `${getShowroomUrl()}api`;

const getAllFurniture = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/furniture`);
        const furniture = res.data;
        return furniture;
    } catch (error) {
        return error;
    }
}

const getPieceOfFurniture = async (_id) => {
    try {
        const res = await axios.get(`${BASE_URL}/furniture/${_id}`);
        const partOfFurniture = res.data;
        return partOfFurniture;
    } catch (error) {
        return error;
    }
}

const addFurniture = async (furniture) => {
    const newFurniture = new FormData()
    newFurniture.append('name', furniture.name);
    newFurniture.append('description', furniture.description);
    newFurniture.append('producer', furniture.producer);
    newFurniture.append('collection', furniture.collection);
    newFurniture.append('price', furniture.price);
    newFurniture.append('width', furniture.width);
    newFurniture.append('height', furniture.height);
    newFurniture.append('depth', furniture.depth);
    newFurniture.append('crossed', furniture.crossedPrice);
    newFurniture.append('designedForTheLivingRoom', furniture.designedForTheLivingRoom);
    newFurniture.append('designedForTheKitchen', furniture.designedForTheKitchen);
    newFurniture.append('designedForTheBedroom', furniture.designedForTheBedroom);
    newFurniture.append('designedForTheOffice', furniture.designedForTheOffice);
    newFurniture.append('designedForTheYouthRoom', furniture.designedForTheYouthRoom);
    newFurniture.append('designedForTheHallway', furniture.designedForTheHallway);
    newFurniture.append('designedForTheChildrensRoom', furniture.designedForTheChildrensRoom);
    newFurniture.append('designedForTheBathroom', furniture.designedForTheBathroom);
    newFurniture.append('categories', furniture.categories);
    newFurniture.append('isPriceVissible', furniture.isPriceVissible);
    newFurniture.append('image', furniture.image)

    const response = await axios.post(`${BASE_URL}/furniture`, newFurniture);
    return response;
}

const editFurniture = async (furniture) => {
    const furnitureEdit = new FormData()
    furnitureEdit.append('name', furniture.name);
    furnitureEdit.append('description', furniture.description);
    furnitureEdit.append('producer', furniture.producer);
    furnitureEdit.append('collection', furniture.collection);
    furnitureEdit.append('price', furniture.price);
    furnitureEdit.append('width', furniture.width);
    furnitureEdit.append('height', furniture.height);
    furnitureEdit.append('depth', furniture.depth);
    furnitureEdit.append('crossed', furniture.crossed);
    furnitureEdit.append('designedForTheLivingRoom', furniture.designedForTheLivingRoom);
    furnitureEdit.append('designedForTheKitchen', furniture.designedForTheKitchen);
    furnitureEdit.append('designedForTheBedroom', furniture.designedForTheBedroom);
    furnitureEdit.append('designedForTheOffice', furniture.designedForTheOffice);
    furnitureEdit.append('designedForTheYouthRoom', furniture.designedForTheYouthRoom);
    furnitureEdit.append('designedForTheHallway', furniture.designedForTheHallway);
    furnitureEdit.append('designedForTheChildrensRoom', furniture.designedForTheChildrensRoom);
    furnitureEdit.append('designedForTheBathroom', furniture.designedForTheBathroom);
    furnitureEdit.append('categories', furniture.categories);
    furnitureEdit.append('isPriceVissible', furniture.isPriceVissible);
    furnitureEdit.append('image', furniture.image)

    const response = await axios.put(`${BASE_URL}/furniture/${furniture._id}`, furnitureEdit);
    return response;
}

const deleteFurniture = async (_id) => {
    await axios.delete(`${BASE_URL}/furniture/${_id}`);
}

const furnitureController = {
    getAllFurniture,
    getPieceOfFurniture,
    addFurniture,
    editFurniture,
    deleteFurniture,
}

export default furnitureController;