import React from 'react'

const ServiceCta = () => {
return (
<section className="py-24 px-8 bg-black relative overflow-hidden">

    {/* Background Mature Image */}
    <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80" alt="Team Background"
            className="w-full h-full object-cover" />
    </div>

    <div className="max-w-5xl mx-auto text-center relative z-10">

        <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs uppercase tracking-widest text-gray-300">Available For New Projects</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Let's Build Something <br />
            <span className="text-gray-400">Mature & Expensive</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to take your business to the next level? Our senior team is ready to deliver premium results.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/contact"
                className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                Start Your Project →
            </a>
            <a href="tel:+1234567890"
                className="border border-zinc-700 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
                Book A Call
            </a>
        </div>

        {/* Small Trust Images */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="client"
                    className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="client"
                    className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="client"
                    className="w-10 h-10 rounded-full border-2 border-black object-cover" />
                <div
                    className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-xs font-bold text-white">
                    +500</div>
            </div>
            <p className="text-sm text-gray-400">Trusted by 500+ business leaders worldwide</p>
        </div>

    </div>
</section>
)
}

export default ServiceCta