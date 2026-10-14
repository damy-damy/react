import React from 'react'

const ServiceHero = () => {
    return (
        <section className="relative bg-black text-white py-24 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Text */}
                <div className="relative z-10">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
                        Our Expertise
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Services That <br />
                        <span className="text-gray-400">Drive Real Growth</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                        We provide premium business solutions designed for professionals who want results, not just designs.
                    </p>

                    <div className="flex gap-4">
                        <a href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition">
                            Start Project
                        </a>
                        <a href="/about" className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition">
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Sharp Image */}
                <div className="relative z-10">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Professional Team"
                        className="w-full h-[520px] object-cover rounded-3xl"
                    />

                    {/* Floating Card */}
                    <div className="absolute -bottom-8 -left-8 bg-white text-black p-6 rounded-2xl shadow-2xl w-[280px]">
                        <div className="flex items-center gap-4 mb-2">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
                                alt="client"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-bold text-sm">Trusted by 500+</h4>
                                <p className="text-xs text-gray-500">Business Leaders</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">"Professional service, sharp delivery."</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ServiceHero