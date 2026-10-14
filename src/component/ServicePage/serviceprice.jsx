import React from 'react'

const ServicePricing = () => {
    return (
        <section className="py-24 px-8 bg-white">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">Transparent Pricing</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing For <br /> Premium Services</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">No hidden fees. Choose the service you need and scale as you grow.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* 1 - Full Stack */}
                    <div className="group border rounded-3xl p-8 hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80" alt="Full Stack" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 mb-6">Web & mobile apps built to scale</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$1,200</span>
                            <span className="text-sm text-gray-500 group-hover:text-gray-400"> / starting</span>
                        </div>
                        <ul className="text-sm space-y-3 mb-8 text-gray-600 group-hover:text-gray-300">
                            <li>✓ Frontend + Backend</li>
                            <li>✓ Database & API</li>
                            <li>✓ Deployment & Support</li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-black group-hover:bg-white group-hover:text-black font-bold transition duration-300">Choose Plan</button>
                    </div>

                    {/* 2 - Cyber Security */}
                    <div className="group border rounded-3xl p-8 bg-black text-white hover:bg-white hover:text-black transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative">
                        <span className="absolute top-6 right-6 bg-white text-black text-xs px-3 py-1 rounded-full font-bold group-hover:bg-black group-hover:text-white transition">Popular</span>
                        <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80" alt="Cyber Security" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Cyber Security</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-500 mb-6">Protect your business data</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$900</span>
                            <span className="text-sm text-gray-400 group-hover:text-gray-500"> / starting</span>
                        </div>
                        <ul className="text-sm space-y-3 mb-8 text-gray-300 group-hover:text-gray-600">
                            <li>✓ Vulnerability Audit</li>
                            <li>✓ Penetration Testing</li>
                            <li>✓ Security Patch & Report</li>
                        </ul>
                        <button className="w-full py-3 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white font-bold transition duration-300">Choose Plan</button>
                    </div>

                    {/* 3 - UI/UX */}
                    <div className="group border rounded-3xl p-8 hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80" alt="UI UX" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 mb-6">Premium user experience</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$600</span>
                            <span className="text-sm text-gray-500 group-hover:text-gray-400"> / starting</span>
                        </div>
                        <ul className="text-sm space-y-3 mb-8 text-gray-600 group-hover:text-gray-300">
                            <li>✓ Wireframes & Prototype</li>
                            <li>✓ Modern UI Design</li>
                            <li>✓ User Testing</li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-black group-hover:bg-white group-hover:text-black font-bold transition duration-300">Choose Plan</button>
                    </div>

                    {/* 4 - Digital Marketing */}
                    <div className="group border rounded-3xl p-8 hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80" alt="Marketing" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 mb-6">Grow audience & sales</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$500</span>
                            <span className="text-sm text-gray-500 group-hover:text-gray-400"> / month</span>
                        </div>
                        <ul className="text-sm space-y-3 mb-8 text-gray-600 group-hover:text-gray-300">
                            <li>✓ SEO & Ads Management</li>
                            <li>✓ Social Media Growth</li>
                            <li>✓ Monthly Report</li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-black group-hover:bg-white group-hover:text-black font-bold transition duration-300">Choose Plan</button>
                    </div>

                    {/* 5 - Business Consulting */}
                    <div className="group border rounded-3xl p-8 hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&q=80" alt="Consulting" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Business Consulting</h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 mb-6">Strategy to scale faster</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$700</span>
                            <span className="text-sm text-gray-500 group-hover:text-gray-400"> / session</span>
                        </div>
                        <ul className="text-sm space-y-3 mb-8 text-gray-600 group-hover:text-gray-300">
                            <li>✓ Business Audit</li>
                            <li>✓ Growth Roadmap</li>
                            <li>✓ 1:1 Strategy Call</li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-black group-hover:bg-white group-hover:text-black font-bold transition duration-300">Choose Plan</button>
                    </div>

                    {/* 6 - Content Creation */}
                    <div className="group border rounded-3xl p-8 hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6">
                            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=200&q=80" alt="Content" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 mb-6">Premium brand visuals</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$400</span>
                            <span className="text-sm text-gray-500 group-hover:text-gray-400"> / starting</span>
                        </div>
                        <ul className="text-sm space-y-3 mb-8 text-gray-600 group-hover:text-gray-300">
                            <li>✓ Photo & Video</li>
                            <li>✓ Brand Storytelling</li>
                            <li>✓ Social Content Pack</li>
                        </ul>
                        <button className="w-full py-3 rounded-full border border-black group-hover:bg-white group-hover:text-black font-bold transition duration-300">Choose Plan</button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ServicePricing