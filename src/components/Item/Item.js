import React from 'react';
import './Item.css';

const Item = ({id, title, description, price, pictureUrl}) => {
    return (
        <div className="card" key={id}>
            <img src={pictureUrl} className="card-img-top product-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <a href="#" className="btn btn-primary">Detalles</a>
            </div>
        </div>
    )
}

export default Item;
