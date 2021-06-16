import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import ImagePlaceholder from '../../assets/images/wheel-placeholder-800x800.png';
import './ItemList.css';

const ItemList = () => {

    const productList = [
        { id: 1, title: 'RFG17', description: 'Llanta deportiva 17"', price: 790, pictureUrl: ImagePlaceholder },
        { id: 2, title: 'RFG15', description: 'Llanta deportiva 15"', price: 520, pictureUrl: ImagePlaceholder },
        { id: 3, title: 'RFG18', description: 'Llanta deportiva 18"', price: 1070, pictureUrl: ImagePlaceholder },
        { id: 4, title: 'RFG15', description: 'Llanta deportiva 15"', price: 520, pictureUrl: ImagePlaceholder },
        { id: 5, title: 'RFG18', description: 'Llanta deportiva 18"', price: 1070, pictureUrl: ImagePlaceholder }
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
        <div className="container">
            <div className="row row-cols-3 product-list">
            {products.map((product, index) => {
                return (
                    <div className="col" key={index}>
                        <Item id={product.id} name={product.name} description={product.description} price={product.price} pictureUrl={product.pictureUrl} />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ItemList;
