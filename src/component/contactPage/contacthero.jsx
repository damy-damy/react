import React from 'react'

const ContactHero = () => {
    return (
        <section className="pt-32 pb-16 px-8 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Contact Us</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-6">
                        Let's Talk <br />
                        <span className="text-gray-400">Business</span>
                    </h1>
                    <p className="text-gray-500 leading-relaxed max-w-md">
                        Have a premium project in mind? Our senior team is ready to help you scale.
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="team" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="team" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="team" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Avg. Response 1 Hour</p>
                            <p className="text-xs text-gray-500">500+ clients trust us</p>
                        </div>
                    </div>
                </div>

                {/* Right - Mature Image */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                        alt="Contact Business Meeting"
                        className="w-full h-[500px] object-cover rounded-3xl"
                    />
                    <div className="absolute bottom-6 left-6 bg-black text-white px-6 py-4 rounded-2xl flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase">Status</p>
                            <p className="font-bold text-sm">Available for work</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactHero