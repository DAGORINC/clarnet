import styles from './dropZone.module.scss';
import { useEffect, useState } from 'react';
import PartOfFurniture from '../PartOfFurniture/PartOfFurniture';
import furnitureController from '../../Api/furnitureController';
import producersController from '../../Api/producersController';
import collectionsController from '../../Api/collectionsController';
import logo from '../../assets/images/clr.PNG';

export default function DropZone() {
    const [furniture, setFurniture] = useState([]);


    useEffect(() => {
        getAllProducers();
        getAllCollections();
    }, [])

    const [producersData, setProducersData] = useState('');

    const getAllProducers = async () => {
        const producers = await producersController.getAllProducers();
        setProducersData(producers.data.producers);
    }

    const [collectionsData, setCollectionsData] = useState('');

    const getAllCollections = async () => {
        const collections = await collectionsController.getAllCollections();
        setCollectionsData(collections.data.collections);
    }

    const onChangeFurniture = (part) => {

        const furnitures = [...furniture];
        const index = part.id;

        if (index >= 0) {
            furnitures[index] = part;
            setFurniture(furnitures);
        }

    }

    const addAllFurniture = async (furniture) => {
        if (await Promise.all(furniture.map(async item => {
            await furnitureController.addFurniture(item);
        }))) {
            setFurniture([]);
        }
        console.log(furniture);


    }


    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        files.forEach((file, index) => {
            setFurniture((prevState) =>
                prevState.concat({ id: index, image: file })
            );
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.general}>

            <div className={styles.buttonsDiv}>
                <button className={styles.button} onClick={() => console.log(furniture)}>Pokaż w konsoli</button>
                <button className={styles.button} onClick={() => addAllFurniture(furniture)}>Dodaj do strony</button>
            </div>

            <img src={logo} className={styles.logo}/>

            <div className={styles.dropZone} onDrop={handleDrop} onDragOver={handleDragOver}>
                Przeciągnij zdjęcia tutaj
            </div>


            <div>

                {furniture.map((part, index) => (
                    <PartOfFurniture
                        {...part}
                        key={index}
                        collectionsData={collectionsData}
                        producersData={producersData}
                        id={index}
                        onChangeFurniture={(part) => onChangeFurniture(part)}
                    />
                ))}

            </div>

        </div>
    );
}