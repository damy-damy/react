import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section className="min-h-screen bg-[#f9f9f8]  flex items-center justify-center px-6 py-20">

            <div className="w-full  max-w-[420px]">

                <div className="text-center mb-10">
                    <div className="w-10 h-10 bg-black rounded-full mx-auto mb-6"></div>
                    <h1 className="text-[38px] font-bold leading-none tracking-tight">Sign in</h1>
                    <p className="text-[14px] text-zinc-500 mt-4">Welcome back, please enter your details</p>
                </div>

                <div className="bg-white rounded-[32px] p-10 border border-black/5 shadow-sm">

                    <form className="space-y-5">
                        <div>
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 ml-1">Email</label>
                            <input type="email" placeholder="name@company.com" className="w-full mt-3 h-[56px] px-6 rounded-full bg-zinc-50 border border-zinc-100 text-[14px] font-medium focus:bg-white focus:border-black focus:outline-none transition-all" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">Password</label>
                                <Link to="/forgot-password" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:underline">Forgot</Link>
                            </div>
                            <input type="password" placeholder="••••••••" className="w-full mt-3 h-[56px] px-6 rounded-full bg-zinc-50 border border-zinc-100 text-[14px] font-medium focus:bg-white focus:border-black focus:outline-none transition-all" />
                        </div>

                        <button className="w-full h-[56px] bg-black text-white rounded-full font-bold text-[14px] hover:bg-zinc-800 active:scale-[0.98] transition-all mt-2">
                            Continue →
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-[13px] text-zinc-500">
                            Don't have an account? <Link to="/register" className="font-bold text-black underline underline-offset-4">Sign up</Link>
                        </p>
                    </div>

                </div>

                <p className="text-center text-[10px] tracking-widest uppercase text-zinc-400 mt-10">
                    Secure • Encrypted • Privacy First
                </p>

            </div>

        </section>
    )
}

export default Login