import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="w-full bg-[#1e2a5a] text-white  shadow-lg ">
            <div className="max-w-7xl mx-auto px-8 py-5  flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="text-2xl font-bold tracking-wide">
                    Nova<span className="text-indigo-400">Web</span>
                </a>

                {/* Navigation links */}
                <div className="flex items-center gap-8">

                    <Link to="/"
                        className="text-indigo-300 font-semibold hover:text-white transition">
                        Home
                    </Link>

                    <Link to="/About"
                        className="hover:text-indigo-300 transition">
                        About Us
                    </Link>

                    <Link to="/serve"
                        className="hover:text-indigo-300 transition">
                        Services
                    </Link>

                    <Link to="/contact"
                        className="hover:text-indigo-300 transition">
                        Contact
                    </Link>

                    <Link to="/log"
                        className="hover:text-indigo-300 transition">
                        Login
                    </Link>

                    <Link to="/register"
                        className="rounded-lg bg-indigo-500 px-5 py-2.5 font-semibold hover:bg-indigo-600 transition">
                        Register
                    </Link>

                </div>
            </div>
        </nav>
    );
}



export default Navbar
