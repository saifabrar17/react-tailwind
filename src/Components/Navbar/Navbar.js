import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'Coupons', link: '/coupons' },
        { id: 3, name: 'Contact', link: '/contact' }
    ]

    return (
        <nav className='bg-indigo-200'>
            <div className='w-6 bg-indigo-200 h-6 md:hidden' onClick={() => setOpen(!open)}>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center w-full bg-indigo-200 md:static absolute duration-500 ease-in ${open ? 'top-6' :'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;