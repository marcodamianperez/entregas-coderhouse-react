import React from 'react';
import Item from '../Item/Item';
import ImagePlaceholder from '../../assets/images/wheel-placeholder-800x800.png';
import './ItemList.css';

const ItemList = ({products, loading}) => {
    return (
        <div className="container">
            <div className="row row-cols-3 product-list">
            {products.map((product, index) => {
                return (
                    <div className="col" key={index}>
                        <Item id={product.id} title={product.name} description={product.description_short} price={product.price} pictureUrl={ImagePlaceholder} loading={loading} />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ItemList;
