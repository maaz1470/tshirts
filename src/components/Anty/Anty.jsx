import React from 'react';
import Cusin from '../Cusin/Cusin';

const Anty = ({ring}) => {
    return (
        <div>
            <h2>Anty</h2>
            <section className='flex'>
                <Cusin>Abir</Cusin>
                <Cusin hasFriend={true} ring={ring}>Nibir</Cusin>
            </section>
        </div>
    );
};

export default Anty;