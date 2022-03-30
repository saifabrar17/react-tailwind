import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {

    const { name, price, benefits } = props.option;

    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>${price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <p className='text-xl text-left'>Benefits:</p>
                {
                    benefits.map(benefit => <Benefit
                    benefit={benefit}
                    ></Benefit>)
                }
                <button className='bg-green-500 font-bold co hover:text-white flex justify-center w-full py-2 rounded mt-6'>
                    Buy Now <ArrowRightIcon className='w-5 h-5'></ArrowRightIcon>
                </button>
            </div>
        </div>
    );
};

export default PricingOption;