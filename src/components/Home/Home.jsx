import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirts = useLoaderData();
    console.log(shirts)
    return (
        <div>
            
        </div>
    );
};

export default Home;