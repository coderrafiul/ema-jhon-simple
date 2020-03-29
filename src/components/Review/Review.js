import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart]= useState([]);
    const [orderPlaced, setPlaceOrder]= useState(false);

const handlePlaceOrder = ()=>{
    setCart([]);
    setPlaceOrder(true);
    processOrder();
}    

    const removeProduct= (productkey)=>{
        // console.log("remove clicked", productkey);
        const newCart= cart.filter(pd=> pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }

    useEffect(()=>{
            const savedCart= getDatabaseCart();
            const productkeys= Object.keys(savedCart);
            const cartProducts= productkeys.map(key => {
            const product= fakeData.find(pd=> pd.key === key);
            product.quantity= savedCart[key];
            return(product);
            })
            setCart(cartProducts);
        }, []);

        let thankYou;
        if(orderPlaced){
            thankYou= <img src={happyImage} alt=""/>
        }
        
  
    return (
        <div className="shop-container">
            <div className="product-container">
                    <h1>Ordered items: {cart.length}</h1>
                    {cart.map(pd=><ReviewItem
                    removeProduct={removeProduct}
                    key= {pd.key}
                    product={pd}></ReviewItem>)}

                    {thankYou}
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick= {handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;