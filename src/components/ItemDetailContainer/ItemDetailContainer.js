import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router';
import pictureUrl from '../../assets/images/wheel-placeholder-800x800.png';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getProduct = () => {
        fetch('../productList.json')
            .then(response => response.json())
            .then(data => {
                const prod = data.find(p => p.id === id);
                return setProduct(prod)
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 2000);
    }, []);

    return (
        loading ? (
            <Spinner />
        ) : (
            <ItemDetail title={product.title} description={product.description_long} price={product.price} pictureUrl={pictureUrl}/>
        )
    )
};

export default ItemDetailContainer;