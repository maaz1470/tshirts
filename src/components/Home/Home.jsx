import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const shirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handleCart = (product) => {
        const exists = cart.find(shirt => shirt._id == product._id);
        if(!exists){
            const newCart = [...cart, product]
            setCart(newCart)
            console.log(cart)
        }
    }

    const handleDeleteCart = (id) => {
        const remaining = cart.filter(product => product._id !== id)
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className="shirt-container">
                {
                    shirts.map(shirt => <Shirt key={shirt._id} shirt={shirt} handleCart={handleCart} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleDeleteCart={handleDeleteCart} />
            </div>
        </div>
    );
};

export default Home;