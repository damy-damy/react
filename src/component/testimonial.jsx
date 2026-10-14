import React from 'react';
import { testimonials } from '../data/data.js'

function Testimonial() {
    return (
        <div className="min-h-screen bg-[#020617] p-8 lg:p-12">
            <h1 className="text-white text-4xl font-bold mb-2">What Clients Say</h1>
            <p className="text-white/50 mb-10">Real feedback from real projects</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {testimonials.map((item) => (
                    <div key={item.id} className="bg-white/[0.05] border border-white/10 p-6 rounded-2xl">
                        <p className="text-white/80 font-bold mb-4">{item.role}</p>
                        <h3 className="text-white font-bold">{item.name}</h3>
                        <p className="text-white/40 text-sm">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial

