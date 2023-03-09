import { useEffect, useState } from 'react';
import styles from './partOfFurniture.module.scss';
import { categoryData } from './categoryData';

export default function PartOfFurniture(props) {

    const [producersData, setProducersData] = useState(props.producersData);
    const [collectionsData, setCollectionsData] = useState(props.collectionsData);


    const [nameAddForm, setNameAddForm] = useState('');
    const [descriptionAddForm, setDescriptionAddForm] = useState('');
    const [producerAddForm, setProducerAddForm] = useState('');
    const [collectionAddForm, setCollectionAddForm] = useState('');
    const [priceAddForm, setPriceAddForm] = useState(0);
    const [crossedPriceAddForm, setCrossedPriceAddForm] = useState(0);
    const [widthAddForm, setWidthAddForm] = useState(0);
    const [heightAddForm, setHeightAddForm] = useState(0);
    const [depthAddForm, setDepthAddForm] = useState(0);
    const [designedForTheLivingRoomAddForm, setDesignedForTheLivingRoomAddForm] = useState(false);
    const [designedForTheKitchenAddForm, setDesignedForTheKitchenAddForm] = useState(false);
    const [designedForTheBedroomAddForm, setDesignedForTheBedroomAddForm] = useState(false);
    const [designedForTheOfficeAddForm, setDesignedForTheOfficeAddForm] = useState(false);
    const [designedForTheYouthRoomAddForm, setDesignedForTheYouthRoomAddForm] = useState(false);
    const [designedForTheHallwayAddForm, setDesignedForTheHallwayAddForm] = useState(false);
    const [designedForTheChildrensRoomAddForm, setDesignedForTheChildrensRoomAddForm] = useState(false);
    const [designedForTheBathroomAddForm, setDesignedForTheBathroomAddForm] = useState(false);
    const [isPriceVissibleAddForm, setIsPriceVissibleAddForm] = useState(false);
    const [categoryAddForm, setCategoryAddForm] = useState('c ');

    useEffect(() => {
        onChangeFurnitureData();
    }, [nameAddForm, descriptionAddForm, producerAddForm, collectionAddForm, priceAddForm, crossedPriceAddForm, widthAddForm, heightAddForm, depthAddForm, designedForTheLivingRoomAddForm,
        designedForTheKitchenAddForm, designedForTheBedroomAddForm, designedForTheOfficeAddForm, designedForTheYouthRoomAddForm, designedForTheHallwayAddForm, designedForTheChildrensRoomAddForm,
        designedForTheBathroomAddForm, isPriceVissibleAddForm, categoryAddForm])


    const onChangeFurnitureData = () => {


        const furniturep = {
            id: props.id,
            name: nameAddForm,
            description: descriptionAddForm,
            producer: producerAddForm,
            collection: collectionAddForm,
            price: priceAddForm,
            crossedPrice: crossedPriceAddForm,
            isPriceVissible: isPriceVissibleAddForm,
            width: widthAddForm,
            height: heightAddForm,
            depth: depthAddForm,
            designedForTheLivingRoom: designedForTheLivingRoomAddForm,
            designedForTheKitchen: designedForTheKitchenAddForm,
            designedForTheBedroom: designedForTheBedroomAddForm,
            designedForTheOffice: designedForTheOfficeAddForm,
            designedForTheYouthRoom: designedForTheYouthRoomAddForm,
            designedForTheHallway: designedForTheHallwayAddForm,
            designedForTheChildrensRoom: designedForTheChildrensRoomAddForm,
            designedForTheBathroom: designedForTheBathroomAddForm,
            image: props.image,
            categories: categoryAddForm,
        }

        props.onChangeFurniture(furniturep)
    }


    const setCategoryAddFormHandler = (checked, name) => {

        if (checked) {
            setCategoryAddForm(categoryAddForm + `%&${name}&%`);
        } else {
            setCategoryAddForm(categoryAddForm.replace(`%&${name}&%`, ''));
        }

        onChangeFurnitureData();
    }

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (props.image) {
            setImageUrl(URL.createObjectURL(props.image));
        }
    }, [props.image]);


    return (
        <div className={styles.general}>
            
            <img
                className={styles.image}
                src={imageUrl}
                alt="Furniture"
            />

            <div className={styles.form}>


                <div>
                    Nazwa mebla
                    <input type='text' className={styles.input} value={nameAddForm} onChange={(event) => setNameAddForm(event.target.value)} />
                </div>


                <div>
                    Producent

                    <select className={styles.input} value={producerAddForm} onChange={(event) => setProducerAddForm(event.target.value)}>


                        <option value=''>
                            brak
                        </option>

                        {
                            producersData.length === 0 || !Array.isArray(producersData) ? (
                                <option>
                                    No producers data!
                                </option>
                            ) : (
                                producersData.map((producer, index) => {
                                    return (
                                        <option key={index} value={producer._id}>
                                            {producer.name}
                                        </option>
                                    )
                                })
                            )
                        }

                    </select>

                </div>


                <div>
                    Kolekcja

                    <select className={styles.input} value={collectionAddForm} onChange={(event) => setCollectionAddForm(event.target.value)}>

                        <option value=''>
                            brak
                        </option>

                        {
                            collectionsData.length === 0 || !Array.isArray(collectionsData) ? (
                                <option>No Collections Data!</option>
                            ) : (
                                collectionsData.map((collection, index) => {
                                    return (
                                        <option key={index} value={collection._id}>
                                            {collection.name}
                                        </option>
                                    )
                                })
                            )
                        }

                    </select>

                </div>


                <div>
                    Cena
                    <input type='number' className={styles.input} value={priceAddForm} onChange={(event) => setPriceAddForm(event.target.value)} />
                </div>


                <div>
                    Cena skreślona
                    <input type='number' className={styles.input} value={crossedPriceAddForm} onChange={(event) => setCrossedPriceAddForm(event.target.value)} />
                </div>


                <div>
                    Wyświetl cenę
                    <button style={{ marginLeft: '5px' }} onClick={() => setIsPriceVissibleAddForm(!isPriceVissibleAddForm)}>{isPriceVissibleAddForm ? 'Tak' : 'Nie'}</button>
                </div>


                <div>
                    Szerokość
                    <input type='number' className={styles.input} value={widthAddForm} onChange={(event) => setWidthAddForm(event.target.value)} />
                </div>


                <div>
                    Wysokość
                    <input type='number' className={styles.input} value={heightAddForm} onChange={(event) => setHeightAddForm(event.target.value)} />
                </div>


                <div>
                    Głębokość
                    <input type='number' className={styles.input} value={depthAddForm} onChange={(event) => setDepthAddForm(event.target.value)} />
                </div>

                <div onClick={() => setDesignedForTheLivingRoomAddForm(!designedForTheLivingRoomAddForm)} className={styles.divPremisesCheckbox}>
                    <input className={styles.premisesCheckbox} type="checkbox" checked={designedForTheLivingRoomAddForm} onClick={() => setDesignedForTheLivingRoomAddForm(!designedForTheLivingRoomAddForm)} />
                    Salon
                </div>

                <div onClick={() => setDesignedForTheKitchenAddForm(!designedForTheKitchenAddForm)} className={styles.divPremisesCheckbox}>
                    <input className={styles.premisesCheckbox} type="checkbox" checked={designedForTheKitchenAddForm} onClick={() => setDesignedForTheKitchenAddForm(!designedForTheKitchenAddForm)} />
                    Kuchnia
                </div>

                <div onClick={() => setDesignedForTheBedroomAddForm(!designedForTheBedroomAddForm)} className={styles.divPremisesCheckbox}>
                    <input className={styles.premisesCheckbox} type="checkbox" checked={designedForTheBedroomAddForm} onClick={() => setDesignedForTheBedroomAddForm(!designedForTheBedroomAddForm)} />
                    Sypialnia
                </div>

                <div onClick={() => setDesignedForTheOfficeAddForm(!designedForTheOfficeAddForm)} className={styles.divPremisesCheckbox}>
                    <input className={styles.premisesCheckbox} type="checkbox" checked={designedForTheOfficeAddForm} onClick={() => setDesignedForTheOfficeAddForm(!designedForTheOfficeAddForm)} />
                    Biuro
                </div>

                <div onClick={() => setDesignedForTheYouthRoomAddForm(!designedForTheYouthRoomAddForm)} className={styles.divPremisesCheckbox}>
                    <input className={styles.premisesCheckbox} type="checkbox" checked={designedForTheYouthRoomAddForm} onClick={() => setDesignedForTheYouthRoomAddForm(!designedForTheYouthRoomAddForm)} />
                    Pokój młodzieżowy
                </div>

                <div onClick={() => setDesignedForTheHallwayAddForm(!designedForTheHallwayAddForm)} className={styles.divPremisesCheckbox}>
                    <input className={styles.premisesCheckbox} type="checkbox" checked={designedForTheHallwayAddForm} onClick={() => setDesignedForTheHallwayAddForm(!designedForTheHallwayAddForm)} />
                    Przedpokój
                </div>

                <div onClick={() => setDesignedForTheChildrensRoomAddForm(!designedForTheChildrensRoomAddForm)} className={styles.divPremisesCheckbox}>
                    <input className={styles.premisesCheckbox} type="checkbox" checked={designedForTheChildrensRoomAddForm} onClick={() => setDesignedForTheChildrensRoomAddForm(!designedForTheChildrensRoomAddForm)} />
                    Pokój dziecięcy
                </div>

                <div onClick={() => setDesignedForTheBathroomAddForm(!designedForTheBathroomAddForm)} className={styles.divPremisesCheckbox}>
                    <input className={styles.premisesCheckbox} type="checkbox" checked={designedForTheBathroomAddForm} onClick={() => setDesignedForTheBathroomAddForm(!designedForTheBathroomAddForm)} />
                    Łazienka
                </div>


                <div className={styles.categoryContainer}>

                    {
                        categoryData.length === 0 || !Array.isArray(categoryData) ? (

                            <div>
                                No category data!
                            </div>

                        ) : (
                            categoryData.map((partOfCategory, index) => {
                                return (
                                    <div>

                                        <div className={styles.category} key={index}>
                                            <input type='checkbox' onClick={(event) => { setCategoryAddFormHandler(event.target.checked, partOfCategory.name) }} checked={categoryAddForm.includes(`%&${partOfCategory.name}&%`) ? true : false} />
                                            {partOfCategory.name}
                                        </div>


                                        {

                                            partOfCategory.hasArrow === true && categoryAddForm.includes(partOfCategory.name) ? (
                                                partOfCategory.opened.map((part, index) => {
                                                    return (
                                                        <div>
                                                            <input key={index} className={styles.smallCategory} checked={categoryAddForm.includes(`%&${part.name}&%`) ? true : false} type='checkbox' onClick={(event) => { setCategoryAddFormHandler(event.target.checked, part.name) }} />{part.name}
                                                        </div>
                                                    )
                                                })
                                            ) : (
                                                <></>
                                            )

                                        }


                                    </div>
                                )
                            }
                            )

                        )
                    }
                </div>

            </div>


            <div>
                Opis mebla
                <textarea name='descriptionArea' value={descriptionAddForm} className={styles.descriptionInput} onChange={(event) => setDescriptionAddForm(event.target.value)} />
            </div>

        </div>
    )
}