import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Products.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>


            <div>
                <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
                <br></br>
                <p><small>By-{seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock</small></p>
                {props.showAddToCart && <button onClick={()=>props.handleAddProduct(props.product)} className="main-button"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>


        </div>
    );
};

export default Products;