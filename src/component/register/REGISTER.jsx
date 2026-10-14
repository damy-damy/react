import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <section className="min-h-screen bg-[#f9f9f8] flex items-center justify-center px-6 py-20 overflow-hidden">

            <div className="w-full max-w-[440px] animate-[fadeIn_0.8s_ease-out]">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="w-10 h-10 bg-black rounded-full mx-auto mb-6 animate-[scaleIn_0.5s_ease-out] shadow-lg"></div>
                    <h1 className="text-[38px] font-bold leading-none tracking-tight animate-[slideUp_0.6s_ease-out]">Create account</h1>
                    <p className="text-[14px] text-zinc-500 mt-4 animate-[slideUp_0.6s_ease-out_0.1s_both]">Start your premium experience today</p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-[32px] p-10 border border-black/5 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:border-black/10 animate-[slideUp_0.7s_ease-out_0.2s_both]">

                    <form className="space-y-5">

                        <div className="grid grid-cols-2 gap-4">
                            <div className="group">
                                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 ml-1 group-focus-within:text-black transition-colors duration-300">First Name</label>
                                <input type="text" placeholder="John" className="w-full mt-3 h-[54px] px-6 rounded-full bg-zinc-50 border border-zinc-100 text-[14px] font-medium focus:bg-white focus:border-black focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-300" />
                            </div>
                            <div className="group">
                                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 ml-1 group-focus-within:text-black transition-colors duration-300">Last Name</label>
                                <input type="text" placeholder="Doe" className="w-full mt-3 h-[54px] px-6 rounded-full bg-zinc-50 border border-zinc-100 text-[14px] font-medium focus:bg-white focus:border-black focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-300" />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 ml-1 group-focus-within:text-black transition-colors duration-300">Email</label>
                            <input type="email" placeholder="name@company.com" className="w-full mt-3 h-[54px] px-6 rounded-full bg-zinc-50 border border-zinc-100 text-[14px] font-medium focus:bg-white focus:border-black focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-300" />
                        </div>

                        <div className="group">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 ml-1 group-focus-within:text-black transition-colors duration-300">Password</label>
                            <input type="password" placeholder="Minimum 8 characters" className="w-full mt-3 h-[54px] px-6 rounded-full bg-zinc-50 border border-zinc-100 text-[14px] font-medium focus:bg-white focus:border-black focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-300" />
                        </div>

                        <button className="group w-full h-[56px] bg-black text-white rounded-full font-bold text-[14px] relative overflow-hidden transition-all duration-300 hover:bg-zinc-800 hover:scale-[0.99] active:scale-[0.97] mt-3">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Create Account
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                            <div className="absolute inset-0 bg-zinc-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        </button>

                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-[13px] text-zinc-500">
                            Already have an account? <Link to="/log" className="font-bold text-black underline underline-offset-4 hover:decoration-2 transition-all">Sign in</Link>
                        </p>
                    </div>

                </div>

                <p className="text-center text-[10px] tracking-widest uppercase text-zinc-400 mt-10 animate-[fadeIn_1s_ease-out_0.6s_both]">
                    Secure • Encrypted • Privacy First
                </p>

            </div>

            {/* Custom Keyframes */}
            <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform: translateY(20px) } to { opacity:1; transform: translateY(0) } }
        @keyframes scaleIn { from { opacity:0; transform: scale(0.8) } to { opacity:1; transform: scale(1) } }
      `}</style>

        </section>
    )
}

export default Register