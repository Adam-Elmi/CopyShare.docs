import { useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../helpers/DarkMode";
import { sections } from "../helpers/MyData";
import { Link, useNavigate } from "react-router-dom";

export function SideBar() {
    const { isDark } = useContext(ThemeContext);
    const sideRef = useRef(null);
    const navigate = useNavigate();

    // Scroll to section when a content item is clicked
    const scrollToSection = (content) => {
        const sectionElement = document.getElementById(content) || document.querySelector(`.${content}`);
        if (sectionElement) {
            const offset = 80;
            const elementPosition = sectionElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    
    const handleNavigation = (content, path) => {
        navigate(`/${path}#${content}`, { state: { section: content } });
        setTimeout(() => scrollToSection(content), 0);
    };
    

    useEffect(() => {
        const menuBar = document.getElementById("menu-bar");
        const handleMenu = () => {
            if (sideRef.current) {
                sideRef.current.style.opacity = 1;
                sideRef.current.style.display = 'block';
            }
        };
        if (menuBar) {
            menuBar.addEventListener("click", handleMenu);
        }

        return () => {
            if (menuBar) {
                menuBar.removeEventListener("click", handleMenu);
            }
        };
    }, []);

    const handleClose = () => {
        if (sideRef.current) {
            sideRef.current.style.opacity = 0;
            sideRef.current.style.display = 'none';
        }
    };

    useEffect(() => {
        const closeBtn = document.getElementById("close-btn");
        if (closeBtn) {
            closeBtn.addEventListener("click", handleClose);
        }

        return () => {
            if (closeBtn) {
                closeBtn.removeEventListener("click", handleClose);
            }
        };
    }, []);

    const handleCloseOnsize = () => {
        if (window.innerWidth <= 1160) {
            if (sideRef.current) {
                sideRef.current.style.opacity = 0;
                sideRef.current.style.display = 'none';
            }
        }
    };

    useEffect(() => {
        const contents = document.querySelectorAll('.content-item');
        contents.forEach(content => {
            content.addEventListener("click", handleCloseOnsize);
        });

        return () => {
            contents.forEach(content => {
                content.removeEventListener("click", handleCloseOnsize);
            });
        };
    }, []);

    const handleResize = () => {
        if (window.innerWidth >= 1160 && sideRef.current) {
            sideRef.current.style.opacity = 1;
            sideRef.current.style.display = 'block';
        } else {
            sideRef.current.style.opacity = 0;
            sideRef.current.style.display = 'none';
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <aside 
                ref={sideRef}
                className={`fixed top-[76px] bottom-0 left-0 w-[30%] h-[calc(100vh-64px)] border-r border-r-[#eee] overflow-y-auto ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                } max-lg:hidden max-lg:w-full max-lg:z-[9999]`}>
                <button id="close-btn" className={`py-2 px-4 hidden max-lg:block absolute top-2 right-5 ${isDark ? 'bg-violet-300' : 'bg-violet-100'} text-gray-800 font-bold rounded-lg `}>Close</button>
                <div className="overflow-y-auto h-full w-full pt-12 px-7 max-lg:h-screen">
                {sections.map((section, index) => (
                    <div key={index}>
                        <ul className="my-5 min-w-[100px] text-violet-400 roboto-regular">
                            <span className={`${section.icon} mr-3 text-gray-400`}></span>
                            <span onClick={() => handleNavigation(section.class, section.path)} className="font-bold content-item cursor-pointer"><Link to={section.path}>{section.header}</Link></span>
                            {section.contents.map((content, idx) => (
                                <li 
                                    key={idx} 
                                    onClick={() => handleNavigation(content, section.path)} 
                                    className={`content-item ml-7 mb-2 mt-2 font-bold cursor-pointer text-gray-400 ${isDark ? 'hover:text-white' : 'hover:text-gray-600'}`}>
                                    {content}
                                </li>
                            ))}
                        </ul>
                        <hr className={`${isDark ? 'border-gray-800' : "border-slate-200"}`} />
                    </div>
                ))}
                </div>
            </aside>
        </>
    );
}
