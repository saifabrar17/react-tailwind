import React from 'react';
import { CheckCircleIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
const Benefit = (props) => {
    return (
        <div>
            <p className='flex items-center'>
                    <CheckCircleIcon className='w-5 h-5 text-green-500'></CheckCircleIcon>
                    {props.benefit}
                </p>
            
        </div>
    );
};

export default Benefit;