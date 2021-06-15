import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ImagePlaceholder from '../../assets/images/wheel-placeholder-800x800.png';

const ItemList = () => {

    const productList = [
        { id: 1, title: 'RFG17', description: 'Llanta deportiva 17"', price: 790, pictureUrl: ImagePlaceholder },
        { id: 2, title: 'RFG15', description: 'Llanta deportiva 15"', price: 520, pictureUrl: ImagePlaceholder },
        { id: 3, title: 'RFG18', description: 'Llanta deportiva 18"', price: 1070, pictureUrl: ImagePlaceholder }
    ];

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(productList), 2000);
    });

    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        promise.then(data => {
            console.log(data);
            setProducts(data);
        });
    }, []);

    return (
        <div>
            {products.map(product => {
                return (
                    <Item id={product.id} name={product.name} description={product.description} price={product.price} pictureUrl={product.pictureUrl} />
                )
            })}
        </div>
    )
}

export default ItemList;
