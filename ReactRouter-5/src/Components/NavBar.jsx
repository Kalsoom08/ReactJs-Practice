import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/user', label: 'User' },
        // { path: '/detail/1', label: 'User Detail' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4 justify-center">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink 
                            to={item.path} 
                            className={({ isActive }) => 
                                isActive ? 'text-yellow-300' : 'text-white'
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
