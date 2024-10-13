import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles.js';  // Make sure this file exists and exports the styles
import { navLinks } from '../constants'; // Ensure this file exports navLinks
import { logo, menu, close } from '../assets'; // Ensure these assets are correctly imported

// Define the LiLink component
const LiLink = ({ children, className, onClick, to }) => (
    <li className={className} onClick={onClick}>
        <Link to={to}>{children}</Link>
    </li>
);

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Your scroll handling logic here (if needed)
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black bg-opacity-60`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Ritika Sharma &nbsp;
                        <span className='sm:block hidden'>| Software Enthusiast</span>
                    </p>
                </Link>

                {/* Desktop Menu */}
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <LiLink
                            key={nav.id}
                            to={`#${nav.id}`} // Pass the href as `to`
                            className={`${
                                active === nav.title ? 'text-white' : 'text-secondary'
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            {nav.title}
                        </LiLink>
                    ))}
                </ul>

                {/* Mobile Menu */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((link) => (
                                <LiLink
                                    key={link.id}
                                    to={`#${link.id}`} // Pass the href as `to`
                                    className={`${
                                        active === link.title ? 'text-white' : 'text-secondary'
                                    } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    {link.title}
                                </LiLink>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
