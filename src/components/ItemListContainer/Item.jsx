import React from 'react';



const Item = ({nombre, descripcion, precio, pictureUrl}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <h6 className="card-title">$ {precio}</h6>
          <p className="card-text">{descripcion}</p>
          <a href="#" className="btn btn-primary">Ver Mas</a>
        </div>
      </div>      
)
    
}

export default Item;
