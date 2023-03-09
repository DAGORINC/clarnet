import axios from 'axios';
import { getShowroomUrl } from '../services/getShowroomUrl';

const BASE_URL = `${getShowroomUrl()}api`;

const getAllCollections = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/collections`);
        const collections = res.data;
        return collections;
        
    } catch (error) {
        return error;
    }
    
}

const getOneCollection = async () => {

}

const addCollection = async (collection) => {
    const newCollection = new FormData()
    newCollection.append('name', collection.name);
    newCollection.append('producer', collection.producer);
    newCollection.append('image', collection.image);

    const response = await axios.post(`${BASE_URL}/collections`, newCollection)
    return response;
}

const editCollection = async (collection) => {
    const collectionEdit = new FormData()
    collectionEdit.append('name', collection.name);
    collectionEdit.append('producer', collection.producer);
    collectionEdit.append('image', collection.image)

    const response = await axios.put(`${BASE_URL}/collections/${collection._id}`, collectionEdit);
    return response;
}

const deleteCollection = async (_id) => {
    await axios.delete(`${BASE_URL}/collections/${_id}`);
}

const collectionsController = {
    getAllCollections,
    getOneCollection,
    addCollection,
    editCollection,
    deleteCollection
};

export default collectionsController;