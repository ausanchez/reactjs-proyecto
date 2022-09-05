import { React, useEffect } from 'react';
import { productos } from '../data/data';
import { getArray } from '../helpers/getArray';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './itemList';

const ItemListContainer = () => {    

    const [elemProd, setelemProd] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        getArray(productos)
        .then(res=> setelemProd(res))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

    }, [])




    function onAdd(count){
        console.log(`Se seleccionaron ${count} productos`)
    }

    return (
        <div>
          {<ItemCount stock = {15} onAdd = {onAdd}/>}
          {loading ?
          <div>"Cargando..."</div>
          :
          <ItemList items = {elemProd}/>}
        </div>
    );
}

export default ItemListContainer;
