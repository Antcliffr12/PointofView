import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

 
const Layout: React.FC = () => {
    return (
        
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Outlet />
            </nav>

    );
};
 

export default Layout;