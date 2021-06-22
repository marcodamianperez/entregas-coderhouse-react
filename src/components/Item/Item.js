import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, title, description, price, pictureUrl}) => {
    return (
        <div className="product-card text-center" key={id}>
            <img src={pictureUrl} className="card-img-top product-img" alt="..." />
            <div className="">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary">Detalles</Link>
            </div>
        </div>
    )
}

export default Item;
