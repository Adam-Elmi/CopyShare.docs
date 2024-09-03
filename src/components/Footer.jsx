import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sections } from '../helpers/MyData';
import { ThemeContext } from '../helpers/DarkMode';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [style, setStyle] = useState('');
    const [bg, setBg] = useState('');
    const { isDark } = useContext(ThemeContext);

    useEffect(() => {
        function handleFooter() {
        if (location.pathname === '/') {
            setStyle('w-full ml-0');
            setBg('bg-white');
        } else {
            setStyle('w-[70%] ml-[30%]');
            setBg('bg-slate-50');
        }
    }
    handleFooter();
    }, [location.pathname]); 

    // Scroll to section 
    const scrollToSection = (id) => {
        const sectionElement = document.getElementById(id) || document.querySelector(`.${id}`);
        
        if (sectionElement) {
            const offset = 80;
            const elementPosition = sectionElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        } else {
            console.error(`Element with ID '${id}' not found.`);
        }
    };
    
    const handleNavigation = (url, id) => {
        navigate(`${url}#${id}`);
        // Increase timeout to ensure scrolling happens after navigation
        setTimeout(() => scrollToSection(id), 0);
    };

    return (
        <footer className={`${isDark ? 'bg-gray-800 text-white' : `${bg} text-gray-900`} py-8 ${style} max-lg:w-full max-lg:ml-0`}>
            <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 flex-wrap gap-5">
            <div className="mb-6 md:mb-0">
                {/* Logo */}
                <div className="flex justify-start items-center mb-5 gap-3 w-[500px] max-md:w-fit max-md:justify-center">
                    <span className="bg-violet-400 w-[25px] h-[25px] grapple  text-white text-center">C</span>
                    <h1 className={`text-[1.5rem] grapple  max-sm:text-[1rem] ${isDark ? 'text-white' : 'text-black'}`}><Link to={'/'}>CopyShare</Link></h1>
                </div>
                <p className="text-gray-400 pr-2">Make coding easier with our library. Find helpful tools and updates here.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div>
                <h3 className="text-lg font-semibold mb-2 min-w-[150px]">Quick Links</h3>
                <ul>
                    <li onClick={() => handleNavigation('getting-started', 'Quick Start')} className="mb-2"><Link to="/getting-started" className="hover:text-violet-400">Quick Start</Link></li>
                    <li onClick={() => handleNavigation('installation', 'How to install')} className="mb-2"><Link to="/installation" className="hover:text-violet-400">Installation</Link></li>
                    <li onClick={() => handleNavigation('api-references', 'api')} className="mb-2"><Link to="/api-references" className="hover:text-violet-400">API Reference</Link></li>
                    <li onClick={() => handleNavigation('help', 'FAQ')} className="mb-2"><Link to="/help" className="hover:text-violet-400">Help</Link></li>
                </ul>
                </div>
                <div>
                <h3 className="text-lg font-semibold mb-2 min-w-[100px]">Follow Us</h3>
                <ul className="flex space-x-4">
                    <li><a href="https://discord.com/users/750205351210778804" target="_blank"  className="text-gray-400 hover:text-blue-500"><i className="fab fa-discord"></i></a></li>
                    <li><a href="https://www.facebook.com/adam.elmieid/" target="_blank"  className="text-gray-400 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://github.com/Adam-Elmi" target="_blank" className="text-gray-400 hover:text-violet-300"><i className="fab fa-github"></i></a></li>
                </ul>
                </div>
            </div>
            </div>
            <div className="border-t border-gray-700 pt-4 text-center">
            <p>&copy; {new Date().getFullYear()} Adam-Elmi. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
