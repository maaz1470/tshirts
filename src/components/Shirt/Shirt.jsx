import React from 'react';
import './Shirt.css'
const Shirt = ({shirt, handleCart}) => {
    return (
        <div className='single-shirt'>
            <img src={shirt.picture} alt="" />
            <h4>{shirt.name}</h4>
            <p>{shirt.price}</p>
            <button onClick={() => handleCart(shirt)}>Buy Now</button>
        </div>
    );
};

export default Shirt;