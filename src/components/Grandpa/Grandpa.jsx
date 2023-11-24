import React, { createContext, useContext, useState } from 'react';
import Father from '../Father/Father';
import Uncale from '../Uncale/Uncale';
import Anty from '../Anty/Anty';
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0)
const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncale></Uncale>
                        <Anty ring={ring}></Anty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;