import { useEffect, useState, useRef, useContext } from "react";
import { Search } from "./Search";
import { ThemeContext } from "../helpers/DarkMode";
import { Link } from "react-router-dom";

export function Nav() {
   // Handling theme
    const { isDark, setIsDark } = useContext(ThemeContext);
    
    const toggleDarkMode = () => {
        setIsDark(prev => !prev);
    };

    // Root theme
    useEffect(() => {
        const root = document.getElementById('root');
        if(root) {
            root.style.backgroundColor = `${isDark ? '#0f172a' : '#fff'}`
        }
    }, [isDark])
    
    // Handle searching container
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    
    useEffect(() => {
        const cancleBtn = document.getElementById("cancelBtn");
        const searchContainer = document.getElementById('search-container');
        const handleClose = () => {
            if(searchContainer && cancleBtn) {
                searchContainer.style.display = "none";
            }
        };

        if(searchContainer && cancleBtn) {
            cancleBtn.addEventListener("click", handleClose);
        };

        return () => {
            if(cancleBtn) {
                cancleBtn.removeEventListener("click", handleClose)
            }
        }
    }, [])

    useEffect(() => {
        const searchContainer = document.getElementById('search-container');
        const searchInput = document.getElementById("search-input");
        // Handle displaying search container
        const handleShow = () => {
            if(searchContainer && searchRef.current) {
                searchContainer.style.display = "block";
                if (searchInput) {
                    searchInput.focus();
                }
            }
        };
        

        if(searchContainer && searchRef.current) {
            searchRef.current.addEventListener("click", handleShow);
            inputRef.current.addEventListener("focus", handleShow);
        };
        
        return () => {
            if(searchRef.current && inputRef.current) {
                searchRef.current.removeEventListener("click", handleShow);
                inputRef.current.removeEventListener("focus", handleShow);
            }
        }
        
    }, [])


    
    return(
        <header
            className={`${isDark ? 'bg-slate-900' : 'bg-white'} z-50 fixed top-0 left-0 right-0 mb-10 w-full min-h-[60px] p-2 shadow-md flex justify-center items-center gap-5`}
        >
            {/* Menu icon */}
            {location.pathname === '/' ? 
                <p className={`ml-2 hidden py-2 px-3 text-violet-400 font-bold ${isDark ? 'bg-gray-800' : 'bg-violet-100'} rounded-lg cursor-pointer max-lg:block`}>Docs</p> :
                <span id='menu-bar' className={`fa-solid fa-bars cursor-pointer hidden text-[1.5rem] ${isDark ? 'text-white' : 'text-black'}  ml-2  p-4 rounded-full max-lg:block`}></span>
            }
            <nav 
                className="w-full min-h-[60px] flex gap-5 justify-around items-center"
            >
                {/* Logo */}
                <div className="flex justify-start items-center  extra-sm:hidden gap-3 w-[500px] max-md:w-fit max-md:justify-center">
                    <span className="bg-violet-400 w-[25px] h-[25px] grapple  text-white text-center">C</span>
                    <h1 className={`text-[1.5rem] grapple  max-sm:text-[1rem] ${isDark ? 'text-white' : 'text-black'}`}><Link to={'/'}>CopyShare</Link></h1>
                </div>
                {/* Search bar */}
                <div className={`flex justify-center  items-center gap-5 ${isDark ? 'bg-slate-800 border-none' : 'bg-slate-100 border' }  w-[500px] min-h-[30px] p-2 rounded-xl  max-lg:bg-transparent max-lg:w-fit`}>
                    <span 
                        ref={searchRef}
                        className="fa-solid fa-magnifying-glass cursor-pointer text-[#aaa] ml-3 tex-[1.5rem] max-lg:ml-0">
                    </span>
                    <input
                    ref={inputRef}
                        className="w-full bg-transparent min-h-[20px] p-2 outline-none max-lg:hidden"
                        type="search"  
                        id="search-input"
                        placeholder="Search..."
                    />
                </div>
                {/* Theme */}   
                    <div className="flex gap-8 justify-center items-center">
                        <span
                            onClick={toggleDarkMode}
                            className={`fa-solid ${isDark ? 'fa-moon' : 'fa-sun'} ${isDark ? 'text-blue-400' : 'text-yellow-400'}  border-r-2 pr-5 text-[1rem] ${isDark ? 'border-slate-700' : 'border-gray-200'} cursor-pointer`}>
                            </span>
                            <a href="https://github.com/Adam-Elmi" target="_blank">
                                <span 
                                    className={`fa-brands fa-github text-[1.5rem] ${isDark ? 'text-white' : 'text-black'} cursor-pointer`}>
                                </span>
                            </a>
                    </div>
            </nav>
            <Search/>
        </header>
    )
};