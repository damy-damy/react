import React from "react"
import { Link } from 'react-router-dom'

const StartProject = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white p-10">
            <h1 className="text-[42px] font-bold">Start A Project</h1>
            <p className="text-white/60 mt-2 max-w-[600px]">
                Have an idea? Tell me about it. I will reply in 24 hours.
            </p>


            <form className="mt-10 max-w-[600px] space-y-5">
                <div>
                    <label className="text-[12px] text-white/40">YOUR NAME</label>
                    <input type="text" placeholder="oyeniyi nike" className="w-full mt-2 bg-white/5 border border-white/10 p-4 rounded-xl text-[14px]" />
                </div>

                <div>
                    <label className="text-[12px] text-white/40">WHAT DO YOU NEED?</label>
                    <select className="w-full mt-2 bg-white/5 border border-white/10 p-4 rounded-xl text-[14px] text-white/60">
                        <option>Website Design</option>
                        <option>UI/UX Design</option>
                        <option>Branding</option>
                        <option>E-commerce Store</option>
                    </select>
                </div>

                <div>
                    <label className="text-[12px] text-white/40">BUDGET</label>
                    <select className="w-full mt-2 bg-white/5 border border-white/10 p-4 rounded-xl text-[14px] text-white/60">
                        <option>$100 - $300</option>
                        <option>$300 - $800</option>
                        <option>$800 - $2000</option>
                        <option>$2000+</option>
                    </select>
                </div>

                <div>
                    <label className="text-[12px] text-white/40">TELL ME ABOUT YOUR PROJECT</label>
                    <textarea rows="5" placeholder="I need a website for my cosmetics business..." className="w-full mt-2 bg-white/5 border border-white/10 p-4 rounded-xl text-[14px]"></textarea>
                </div>

                <button type="submit" className="w-full bg-white text-[#0f172a] py-4 rounded-full font-bold mt-4">
                    Send Project Request
                </button>
            </form>

            <div className="mt-10 flex gap-3">
                <Link to="/serve" className="border border-white/20 px-8 py-3 rounded-full text-[13px]">View Our Services</Link>
            </div>
        </div>
    )
}
export default StartProject