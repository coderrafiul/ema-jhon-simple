import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Products'

const ProductDetail = () => {

    const {productKey}= useParams()
    const product= fakeData.find(element=> element.key === productKey);
    console.log(product)

    return (
        <div>
            <h1>{productKey} Details..</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;