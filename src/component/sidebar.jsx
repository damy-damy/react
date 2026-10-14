import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="w-56 h-screen fixed top-0 left-0 bg-[#1e2a5a] text-white p-6 ">
            <h1 className="text-2xl font-bold mb-10">MyDashboard</h1>

            <div className="space-y-6">

                <Link to="/" className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
                    <span>🏠</span>
                    <span>Dashboard</span>
                </Link>

                {/* Services - OPEN */}
                <div>
                    <Link to="/serve" className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span>🛠️</span>
                            <span>Services</span>
                        </div>
                        <span className="text-xs">∧</span>
                    </Link>

                    {/* Dropdown Items */}
                    <div className="ml-8 mt-3 pl-4 border-l-2 border-blue-500/30 space-y-4 text-sm text-gray-400">
                        <p className="hover:text-white cursor-pointer">Web Design</p>
                        <p className="hover:text-white cursor-pointer">Development</p>
                        <p className="hover:text-white cursor-pointer">Marketing</p>
                    </div>
                </div>


                <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
                    <div className="flex items-center gap-3">
                        <span>💳</span>
                        <span>Transactions</span>
                    </div>
                    <span className="text-xs">∨</span>
                </div>

                {/* Settings - CLOSED */}
                <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
                    <div className="flex items-center gap-3">
                        <span>⚙️</span>
                        <span>Settings</span>
                    </div>
                    <span className="text-xs">∨</span>
                </div>

                {/* Contact */}

                <Link to="/contact" className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
                    <span>📞</span>
                    <span>Contact</span>
                </Link>
            </div>
        </div>
    )
}



export default Sidebar