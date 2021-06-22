import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router';

const ItemListContainer = ({heading}) => {

    const [products, setProducts] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    const getProductList = () => {
        fetch('../productList.json')
            .then(response => response.json())
            .then(data => {
                if (categoryId !== undefined) {
                    const filteredData = data.filter(prod => prod.categoryId === categoryId);
                    return setProducts(filteredData);
                } else {
                    return setProducts(data);
                }
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        setTimeout(() => {
            getProductList();
        }, 2000);
    }, [categoryId]);


    return(
        <>
            <h1 className="display-5 text-center primary-heading">{heading}</h1>
            <ItemList products={products} loading={loading} />
        </>
    );
}

export default ItemListContainer;