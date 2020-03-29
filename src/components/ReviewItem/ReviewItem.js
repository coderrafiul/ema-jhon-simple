import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, key, price}= props.product
    return (
        <div className="review-item">
            <h1 className="product-name">{name}</h1>
            <p>Quantity: {quantity}</p>
            <p><small>Price: {price}</small></p>
            <br/>
            <button 
            onClick= {()=>props.removeProduct(key)}
            className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;