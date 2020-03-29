import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10= fakeData.slice(0,10);
    const [products, setProducts]= useState(first10);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        const savedCart= getDatabaseCart();
        const productkeys= Object.keys(savedCart);
        const previousCart= productkeys.map(existingProductKey=>{
            const cartProducts= fakeData.find(pd=> pd.key ===existingProductKey);
            cartProducts.quantity= savedCart[existingProductKey];
            return (cartProducts);
        })
        setCart(previousCart);
    },[])

    const handleAddProduct= (product) =>{
        let toBeAdded= product.key;
        const sameItem= cart.find(element => element.key === toBeAdded);
        let count= 1;
        let newCart;
        if(sameItem){
            count= sameItem.quantity + 1;
            sameItem.quantity= count;
            const others= cart.filter(element=> element.key !== toBeAdded);
            newCart= [...others, sameItem];
        }
        else{
            product.quantity=1;
            newCart= [...cart, product]
        }
        
        setCart(newCart); 
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
           <div className="product-container">
         
                {
                    products.map(pd=><Products
                        key= {pd.key}
                         showAddToCart={true}
                         handleAddProduct={handleAddProduct}
                         product={pd}></Products>)
                }

           </div>
           <div className="cart-container">
               <Cart cart={cart}>
               <Link to="/order"><button className="main-button">Review Order</button></Link>
               </Cart>
           </div>
            
        </div>
    );
};

export default Shop;