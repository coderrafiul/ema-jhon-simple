import React from 'react';


const Cart = (props) => {
    const cart= props.cart;
    // const total= cart.reduce((total, element)=> total + element.price,0)
    let total= 0;
    for(let i= 0; i<cart.length; i++){
        const product= cart[i];
        total= total + product.price * product.quantity;
    
    }

    let shipping= 0;
    if(total>35){
        shipping=0
    }
    else if(total>15){
        shipping=4.99
    }
    else if(total>0){
        shipping=12.99}


    const tax= total/10;


    const formateNumber= num=>{
        const precision= num.toFixed(2);
        return Number(precision)
    }

    const grandTotal=(total + shipping + tax).toFixed(2);
        
    return (
        <div>
            <h2 className="text-primary bg-danger" >Order Summary</h2>
            <h4>Items Ordered: {cart.length} </h4>
            <h4>Product Price: {formateNumber(total)}</h4>
            <h4>Tax + VAT={formateNumber(tax)}</h4>
            <h4><small>Shipping Cost= {shipping}</small></h4>
            <h4>Total Price: {grandTotal}</h4>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;