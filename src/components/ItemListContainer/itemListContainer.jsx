import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {

    function onAdd(count){
        console.log(`Se seleccionaron ${count} productos`)
    }

    return (
        <div>
            <ItemCount stock = {15} onAdd = {onAdd}/>
        </div>
    );
}

export default ItemListContainer;
