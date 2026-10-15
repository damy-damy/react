import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative z-50 w-full bg-[#1e2a5a] text-white shadow-lg">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wide">
                    Nova<span className="text-indigo-400">Web</span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">

                    <Link to="/" className="text-indigo-300 font-semibold hover:text-white transition">
                        Home
                    </Link>

                    <Link to="/About" className="hover:text-indigo-300 transition">
                        About Us
                    </Link>

                    <Link to="/serve" className="hover:text-indigo-300 transition">
                        Services
                    </Link>

                    <Link to="/contact" className="hover:text-indigo-300 transition">
                        Contact
                    </Link>

                    <Link to="/log" className="hover:text-indigo-300 transition">
                        Login
                    </Link>

                    <Link to="/register" className="rounded-lg bg-indigo-500 px-5 py-2.5 font-semibold hover:bg-indigo-600 transition">
                        Register
                    </Link>

                </div>

                {/* Mobile Hamburger Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-3xl text-white px-2"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

            </div>


            {menuOpen && (
                <div className="md:hidden flex flex-col gap-1 px-4 pb-4">

                    <Link to="/" onClick={() => setMenuOpen(false)}
                        className="p-3 rounded hover:bg-indigo-900">
                        Home
                    </Link>

                    <Link to="/About" onClick={() => setMenuOpen(false)}
                        className="p-3 rounded hover:bg-indigo-900">
                        About Us
                    </Link>

                    <Link to="/serve" onClick={() => setMenuOpen(false)}
                        className="p-3 rounded hover:bg-indigo-900">
                        Services
                    </Link>

                    <Link to="/contact" onClick={() => setMenuOpen(false)}
                        className="p-3 rounded hover:bg-indigo-900">
                        Contact
                    </Link>

                    <Link to="/log" onClick={() => setMenuOpen(false)}
                        className="p-3 rounded hover:bg-indigo-900">
                        Login
                    </Link>

                    <Link to="/register" onClick={() => setMenuOpen(false)}
                        className="p-3 rounded bg-indigo-500 text-center font-semibold hover:bg-indigo-600">
                        Register
                    </Link>

                </div>
            )}

        </nav>
    );
};

export default Navbar;