import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Products.css';

const Products = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>


            <div>
                <h3 className="product-name">{name}</h3>
                <br></br>
                <p><small>By-{seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="main-button"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>


        </div>
    );
};

export default Products;