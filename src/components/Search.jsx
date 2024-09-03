import { useState, useEffect, useContext, useRef } from 'react';
import { ThemeContext } from '../helpers/DarkMode';
import { references } from "../helpers/MyData";
import { Link, useNavigate } from 'react-router-dom';

export function Search() {
    const { isDark } = useContext(ThemeContext);
    const search_ref = useRef(null);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredReferences, setFilteredReferences] = useState(references);
    const [recentSearches, setRecentSearches] = useState(() => {
        return JSON.parse(localStorage.getItem('recentSearches')) || [];
    });

    useEffect(() => {
        if (searchTerm) {
            const filtered = references.filter(reference =>
                reference.refName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredReferences(filtered);
        } else {
            setFilteredReferences([]);
        }
    }, [searchTerm]);

    const handleSaveRecentSearch = (term) => {
        setRecentSearches(prev => {
            const updatedSearches = [...new Set([term, ...prev])].slice(0, 5);
            localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
            return updatedSearches;
        });
    };
    
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            helperFunction();
        }
    };
    
    const handleSearch = () => {
        return references.find(ref => ref.refName.toLowerCase().includes(searchTerm.toLowerCase())) || null;
    };
    
    // Scroll to section 
    const scrollToSection = (id) => {
        const sectionElement = document.getElementById(id);
        
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

    const helperFunction = () => {
        const searchResult = handleSearch();
            
            if (searchResult) {
                handleSaveRecentSearch(searchTerm);
                handleNavigation(searchResult.url, searchResult.id);
                
                if (search_ref.current) {
                    search_ref.current.style.display = 'none';
                }
            } else {
                alert('No matching found for the search term.');
            }
    };
    
    const handleSearchBtn = () => {
        helperFunction();
    };

    const middleFunction = (name) => {
        if (name) {
            const findContent = references.find(ref => ref.refName.includes(name))
            handleNavigation(findContent.url, findContent.id);
            
            if (search_ref.current) {
                search_ref.current.style.display = 'none';
            }
        } else {
            alert('No matching found for the search term.');
        }
    };

    const handleClearRecent = () => {
        localStorage.removeItem('recentSearches');
        setRecentSearches([]);
    };

    const handleClear = (value) => {
        setRecentSearches((prevSearches) => {
            const updatedSearches = prevSearches.filter((search) => search !== value);
            localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
            return updatedSearches;
        });
        setSearchTerm('');
    };

    return (
        <div ref={search_ref} id="search-container" className={`w-full min-h-screen hidden absolute top-0 left-0 right-0 bottom-0 p-5 ${isDark ? 'bg-gray-900' : 'bg-white'} overflow-y-auto`}>
            <div className="absolute top-3 left-3 flex justify-start items-center gap-3 w-[500px] max-md:w-fit max-md:justify-center">
                <span className="bg-violet-400 w-[25px] h-[25px] grapple text-white text-center">C</span>
                <h1 className={`text-[1.5rem] grapple ${isDark ? 'text-white' : 'text-black'}`}>CopyShare</h1>
            </div>
            <button id="cancelBtn" className="bg-violet-200 py-2 px-4 rounded-full absolute top-3 right-2">Cancel</button>
            <div className="flex justify-center items-center gap-5 mt-12 bg-slate-200 border w-full min-h-[30px] p-2 rounded-xl">
                <span className="fa-solid fa-magnifying-glass cursor-pointer text-[#aaa] ml-3 tex-[1.5rem]"></span>
                <input
                    className="w-full bg-transparent min-h-[20px] p-2 outline-none"
                    type="search"
                    id="search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}  
                />
                <button onClick={handleSearchBtn} className='p-2 bg-gray-900 border-2 rounded-full text-slate-100'>Search</button>
            </div>

            {recentSearches.length > 0 && (
                <div className="mt-5">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>Recent Searches</h2>
                        <button onClick={handleClearRecent} className="text-sm text-red-500">Clear Recent</button>
                    </div>
                    <div>
                        {recentSearches.map((term, index) => (
                            <div
                                key={index}
                                className={`p-3 flex justify-between items-center rounded-xl ${isDark ? 'bg-slate-700 text-white' : 'bg-blue-100 text-black'} mt-2 cursor-pointer`}
                                onClick={() => {
                                    setSearchTerm(term);
                                    middleFunction(term);
                                }}
                            >
                                <div className='flex items-center gap-5'>
                                    <span className="fa-solid fa-rotate-right"></span>
                                    <p>{term}</p>
                                </div>
                                <span onClick={() => handleClear(term)} className={`fa-solid fa-x z-[99999] p-3 ${isDark ? 'text-white' : 'text-black'}`}></span> 
                            </div>
                        ))}
                    </div>
                </div>
            )}

                {filteredReferences.map((reference, index) => (
                    <div key={index} onClick={() => middleFunction(reference.refName)} className="w-full mt-5">
                            <Link 
                                to={reference.url}
                                className={`p-5 cursor-pointer w-full flex justify-between items-center mt-5 gap-5 rounded-xl text-blue-400 font-bold ${isDark ? 'bg-white' : 'bg-slate-900'}`}
                                onClick={() => handleSaveRecentSearch(reference.refName)}
                            >
                                <div className='w-full flex items-center gap-5'>
                                    <span className="fa-solid fa-hand-point-right text-[1.2rem]"></span>
                                    <p>{reference.refName}</p>
                                </div>
                            </Link>
                    </div>
                ))}
        </div>
    );
}
