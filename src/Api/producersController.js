import { getShowroomUrl } from '../services/getShowroomUrl';
import axios from 'axios';

const BASE_URL = `${getShowroomUrl()}api`;

const getAllProducers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/producers`);
        const producers = res.data;
        return producers;

    } catch (err) {
        return err;
    }
}

const getOneProducer = async () => {

}

const addProducer = async (producer) => {
    const newProducer = new FormData()
    newProducer.append('name', producer.name);
    newProducer.append('link', producer.link);
    newProducer.append('logo', producer.logo);

    const response = await axios.post(`${BASE_URL}/producers`, newProducer)
    return response;
}

const editProducer = async (producer) => {
    const producerEdit = new FormData()
    producerEdit.append('name', producer.name)
    producerEdit.append('link', producer.link)
    producerEdit.append('logo', producer.logo)

    const response = await axios.put(`${BASE_URL}/producers/${producer._id}`, producerEdit);
    return response;
}

const deleteProducer = async (_id) => {
    await axios.delete(`${BASE_URL}/producers/${_id}`);
}

const producersController = {
    getAllProducers,
    getOneProducer,
    addProducer,
    editProducer,
    deleteProducer,
};

export default producersController;