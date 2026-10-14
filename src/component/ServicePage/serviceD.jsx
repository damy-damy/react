import React from 'react';
import { services } from '../../data/data';

function ServiceD() {
    return (
        <div className="min-h-screen bg-[#020617] p-8 lg:p-12">
            <h1 className="text-white text-4xl font-bold mb-2">Our Services</h1>
            <p className="text-white/50 mb-10">Solutions tailored to your business needs</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((item) => (
                    <div key={item.id} className="bg-pink-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between">
                        <img src={item.image} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <div>
                            <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceD;
