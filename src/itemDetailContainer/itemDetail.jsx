import React from 'react';

const ItemDetail = ({nombre, descripcion, precio, pictureUrl}) => {
    return (
        <div id="itemDetail">
            <div id="imagenProducto">
                <img src={pictureUrl} alt={nombre}/>
            </div>
            <div id="infoProducto">
                <h1>{nombre}</h1>
                <h2>{descripcion}</h2>
                <h4>$ {precio}</h4>
            </div>
        </div>
    );
}

export default ItemDetail;
