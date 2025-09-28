
'use client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeHeader = document.getElementById('home-header');
            const homeHeaderHeight = homeHeader ? homeHeader.offsetHeight : 0;

            setIsScrolled(window.scrollY > homeHeaderHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/kanvashram' },
        { label: 'Archaeology', href: '/archaeology' },
        { label: 'Events', href: '/events' },
        { label: 'How to Reach', href: '/howtoreach' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Contact', href: '#contact' }
    ];


    return (
        <>
            <nav className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-500
                ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
                    : 'bg-transparent py-4'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-between lg:justify-center">

                        <div className="flex-shrink-0 lg:absolute lg:left-8">
                            <div className={`w-16 h-16 rounded-full border-2 shadow-lg overflow-hidden bg-white p-1 transition-all duration-300
                                ${isScrolled ? 'border-amber-200' : 'border-white/30'}`}>
                                <img
                                    src="/ashram.jpg"
                                    alt="Ashram Logo"
                                    className="w-full h-full rounded-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMzIiIGZpbGw9IiNGREQ3OUEiLz4KPHBhdGggZD0iTTMyIDE2QzM2LjQxODMgMTYgNDAgMTkuNTgxNyA0MCAyNEM0MCAyOC40MTgzIDM2LjQxODMgMzIgMzIgMzJDMjcuNTgxNyAzMiAyNCAyOC40MTgzIDI0IDI0QzI0IDE5LjU4MTcgMjcuNTgxNyAxNiAzMiAxNloiIGZpbGw9IiDmnaXnoLTlgLQiLz4KPHBhdGggZD0iTTQwIDQ4QzQwIDQxLjM3MjYgMzQuNjI3NCAzNiAyOCAzNkMyMS4zNzI2IDM2IDE2IDQxLjM3MjYgMTYgNDgiIGZpbGw9IiDmnaXnoLTlgLQiLz4KPC9zdmc+';
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-center lg:flex-grow">
                            <h1 className={`text-3xl lg:text-4xl font-bold tracking-wide transition-colors duration-300 font-serif
                                ${isScrolled ? 'text-amber-900' : 'text-white'}`}>
                                कण्वाश्रम
                            </h1>
                            <p className={`text-sm lg:text-base italic font-serif mt-1 transition-colors duration-300
                                ${isScrolled ? 'text-amber-600 animate-pulse-slow' : 'text-amber-400'}`}>
                                " Birth Place of Emperor Bharat "
                            </p>
                        </div>

                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`p-2 rounded-md transition-colors duration-300
                                    ${isScrolled ? 'text-amber-900 hover:bg-amber-200' : 'text-white hover:bg-white/20'}`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`mt-4 lg:mt-2 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
                        <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0 lg:space-x-8 py-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={`${link.href}`}
                                    className={`font-serif transition-all duration-300 relative group text-lg lg:text-base
                                        ${isScrolled
                                            ? 'text-amber-800 hover:text-amber-600'
                                            : 'text-white hover:text-amber-200'
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300
                                        ${isScrolled ? 'bg-amber-500' : 'bg-amber-200'} 
                                        group-hover:w-full`}></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="h-24 lg:h-28"></div>
        </>
    );
};

export default Navbar;