import React from 'react';

const Cart = ({cart, handleDeleteCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    return (
        <div>
            <h1>Order Summary</h1>
            {message}
            {
                cart.map(shirt => <p key={Math.random()}>{shirt.name} <button onClick={() => handleDeleteCart(shirt._id)}>x</button></p>)
            }
        </div>
    );
};

export default Cart;