import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <section className="min-h-screen bg-[#f9f9f8] flex items-center justify-center px-6 py-20">

            <div className="w-full max-w-[420px] animate-[fadeIn_0.8s_ease-out]">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="w-10 h-10 bg-black rounded-full mx-auto mb-6 animate-[scaleIn_0.5s_ease-out]"></div>
                    <h1 className="text-[36px] font-bold leading-none tracking-tight">Reset password</h1>
                    <p className="text-[14px] text-zinc-500 mt-4 leading-relaxed px-4">
                        Enter your email and we will send you a link to reset your password
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-[32px] p-10 border border-black/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-black/5 animate-[slideUp_0.7s_ease-out_0.2s_both]">

                    <form className="space-y-6">

                        <div className="group">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 ml-1 group-focus-within:text-black transition-colors duration-300">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full mt-3 h-[56px] px-6 rounded-full bg-zinc-50 border border-zinc-100 text-[14px] font-medium focus:bg-white focus:border-black focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-300"
                            />
                        </div>

                        <button className="w-full h-[56px] bg-black text-white rounded-full font-bold text-[14px] hover:bg-zinc-800 active:scale-[0.98] transition-all duration-300">
                            Send reset link →
                        </button>

                    </form>

                    <div className="mt-8 flex flex-col gap-3 text-center">
                        <Link to="/log" className="text-[13px] font-bold text-black hover:underline underline-offset-4 transition-all">
                            ← Back to Sign in
                        </Link>
                        <p className="text-[13px] text-zinc-500">
                            Don't have an account? <Link to="/register" className="font-bold text-black underline underline-offset-4">Sign up</Link>
                        </p>
                    </div>

                </div>

                <p className="text-center text-[10px] tracking-widest uppercase text-zinc-400 mt-10">
                    Check spam folder if not received
                </p>

            </div>

            <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform: translateY(16px) } to { opacity:1; transform: translateY(0) } }
        @keyframes scaleIn { from { opacity:0; transform: scale(0.8) } to { opacity:1; transform: scale(1) } }
      `}</style>

        </section>
    )
}

export default ForgotPassword