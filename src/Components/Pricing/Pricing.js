import { dblClick } from '@testing-library/user-event/dist/click';
import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const pricingOptions = [
        { id: 1, name: 'free', price: 0 },
        { id: 2, name: 'Regular', price: 9.99 },
        { id: 3, name: 'Premium', price: 19.99 }
    ]

    return (
        <div>
            <div className='bg-indigo-300 p-4 mt-8'>
                <h1 className='text-6xl font-mono text-white'>Best Deal of the TOWN</h1>
                <div className='grid md:grid-cols-3  gap-6 mt-5'>
                    {
                        pricingOptions.map(option => <PricingOption
                            key={option.id}
                            option={option}
                        ></PricingOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;