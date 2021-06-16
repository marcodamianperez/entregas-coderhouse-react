import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import pictureUrl from '../../assets/images/wheel-placeholder-800x800.png';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const getItem = () => {
        fetch('dummyJson/product.json')
            .then(response => response.json())
            .then(data => setProduct(data));
    }

    useEffect(() => {
        setTimeout(() => {
            getItem();
        }, 2000);
    }, []);

    return (
        <ItemDetail title={product.title} description={product.description} price={product.price} pictureUrl={pictureUrl} />
    )
};

export default ItemDetailContainer;