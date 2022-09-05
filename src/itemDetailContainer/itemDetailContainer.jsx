import { React, useEffect, useState } from 'react';
import { getArray } from '../components/helpers/getArray';
import { productos } from '../components/data/data';
import ItemDetail from './itemDetail';
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArray(productos)
        .then(res => {
            const mercancia = res.find((itemd) => itemd.id === 4 )
            setProduct(mercancia)
        })
        .catch(error => console.log(error))
        .finally (() => setLoading(false))
    }, []);


    return (
        <div id="itemDetail-container">
            {
                loading ?
                <div>Cargando...</div>
                :
                <ItemDetail {...product}/>
            }
        </div>
    );
}

export default ItemDetailContainer;
