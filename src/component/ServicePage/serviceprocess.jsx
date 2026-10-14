import React from 'react'

const ServiceProcess = () => {
    return (
        <section className="py-24 px-8 bg-black text-white">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">Our Process</p>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            A Process Built For <br />
                            <span className="text-gray-400">Premium Results</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                        Every project follows a structured, expensive workflow that guarantees quality and professionalism.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Step 01 */}
                    <div className="group relative bg-zinc-900 rounded-3xl p-10 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(255,255,255,0.15)]">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-6xl font-bold text-zinc-700 group-hover:text-gray-200 transition duration-500">01</span>
                            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition duration-500">
                                →
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Discovery & Strategy</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-600 leading-relaxed transition duration-500">
                            We deeply understand your brand, audience and business goals before we start.
                        </p>
                        <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-black transition-all duration-700"></div>
                    </div>

                    {/* Step 02 */}
                    <div className="group relative bg-zinc-900 rounded-3xl p-10 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(255,255,255,0.15)]">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-6xl font-bold text-zinc-700 group-hover:text-gray-200 transition duration-500">02</span>
                            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition duration-500">
                                →
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Design & Build</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-600 leading-relaxed transition duration-500">
                            Premium design and development crafted by senior experts with precision.
                        </p>
                        <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-black transition-all duration-700"></div>
                    </div>

                    {/* Step 03 */}
                    <div className="group relative bg-zinc-900 rounded-3xl p-10 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(255,255,255,0.15)]">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-6xl font-bold text-zinc-700 group-hover:text-gray-200 transition duration-500">03</span>
                            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition duration-500">
                                →
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Launch & Growth</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-600 leading-relaxed transition duration-500">
                            We launch, test and optimize to ensure continuous growth and ROI.
                        </p>
                        <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-black transition-all duration-700"></div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ServiceProcess