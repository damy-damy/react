import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-12 pb-6 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-bold">Princess Dammy</h2>
                    <p className="text-slate-400 mt-2 text-sm">
                        Web Developer & Designer. Building beautiful and functional web experiences.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Projects</a></li>
                        <li><a href="#" className="hover:text-white">Skills</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Follow Me</h3>
                    <div className="flex gap-3">
                        <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600">f</a>
                        <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600">in</a>
                        <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600">ig</a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
                © 2025 Princess Dammy. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer