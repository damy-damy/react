import React from 'react'

const AboutTeam = () => {
    return (
        <section className="py-24 px-8 bg-white">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">Our Team</p>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Senior Experts <br /> Behind The Vision</h2>
                    </div>
                    <p className="text-gray-500 max-w-md text-sm leading-relaxed">
                        Not freelancers. Full-time senior experts with 10+ years experience delivering premium results.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Member 1 */}
                    <div className="group cursor-pointer">
                        <div className="h-[450px] rounded-3xl overflow-hidden relative mb-4">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" alt="Founder" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                <p className="text-sm">Expert in Full Stack & Scaling</p>
                                <div className="flex gap-2 mt-3">
                                    <span className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xs">in</span>
                                    <span className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xs">X</span>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold">Alex Morgan</h4>
                        <p className="text-sm text-gray-500">Founder & CEO</p>
                    </div>

                    {/* Member 2 */}
                    <div className="group cursor-pointer">
                        <div className="h-[450px] rounded-3xl overflow-hidden relative mb-4">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" alt="CTO" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                <p className="text-sm">Cyber Security Specialist</p>
                                <div className="flex gap-2 mt-3">
                                    <span className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xs">in</span>
                                    <span className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xs">X</span>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold">Sarah Chen</h4>
                        <p className="text-sm text-gray-500">Chief Technology Officer</p>
                    </div>

                    {/* Member 3 */}
                    <div className="group cursor-pointer">
                        <div className="h-[450px] rounded-3xl overflow-hidden relative mb-4">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" alt="Designer" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                <p className="text-sm">Award Winning Product Designer</p>
                                <div className="flex gap-2 mt-3">
                                    <span className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xs">in</span>
                                    <span className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-xs">X</span>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold">David Park</h4>
                        <p className="text-sm text-gray-500">Lead Product Designer</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutTeam