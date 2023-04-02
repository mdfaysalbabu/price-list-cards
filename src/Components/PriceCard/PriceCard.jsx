import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({priceall}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className="text-center">
                <span className='text-5xl font-extrabold text-purple-700'>{priceall.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-purple-500 text-center my-6'>{priceall.name}</h5>
            <p className='underline font-bold text-white'>
                Features:</p>
                {
                    priceall.features. map((feature,index)=><Feature feature={feature} key={index}></Feature>)
                }
                <button className='w-full bg-green-500 py-4 text-white font-bold rounded-md mt-auto hover:bg-green-700 '>Buy Now</button>
            
        </div>
    );
};

export default PriceCard;