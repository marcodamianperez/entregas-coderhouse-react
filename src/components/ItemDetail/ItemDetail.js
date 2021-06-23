import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({title, description, price, pictureUrl}) => {

    const [cant, setCant] = useState(0);
    const [hidden, setHidden] = useState(false);

    const onAdd = (amount, stock) => {
        if (amount <= stock) {
            alert(`Agregaste ${amount} producto(s) al carrito`)
            setCant(amount);
            setHidden(true);
        } else {
            alert('No hay stock disponible para este producto');
        }
    }

    return (
        <div className="item-detail text-center">
            <h2 className='display-6'>Detalle del Producto</h2>
            <div className='container'>
                <img src={pictureUrl} alt="" />
                <p>{title}</p>
                <p>{description}</p>
                <p>${price}</p>
                {
                    !hidden && <ItemCount stock={8} initial={1} onAdd={onAdd} />
                }
                {
                    cant > 0 && <Link to={"/cart"}><button type="button" className="btn btn-primary">Finalizar compra</button></Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;
