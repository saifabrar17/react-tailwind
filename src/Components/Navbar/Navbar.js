import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Shop', link: '/shop'},
        {id: 3, name: 'Coupons', link: '/coupons'}
    ]
    
    return (
       <nav>
           <ul>
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