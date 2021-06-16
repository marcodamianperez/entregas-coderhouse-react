import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({title, description, price, pictureUrl}) => {

    const onAdd = (amount, stock) => {
        amount <= stock ? alert(`Compraste ${amount} producto(s)`) : alert('No hay stock disponible para este producto');
    }

    return (
        <div className="item-detail text-center">
            <h2 className='display-6'>Detalle del Producto</h2>
            <div className='container'>
                <img src={pictureUrl} alt="" />
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;
