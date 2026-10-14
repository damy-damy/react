import React from 'react'

const ContactMap = () => {
    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Map Image */}
                <div className="relative h-[400px] rounded-3xl overflow-hidden mb-16 group">
                    <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
                        alt="Office Location Map"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 hover:scale-105 transition duration-300">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">📍</div>
                            <div>
                                <p className="font-bold">New York Headquarters</p>
                                <p className="text-sm text-gray-500">123 Business Ave, NY 10001</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Bar */}
                <div className="bg-black rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Trusted by founders worldwide</h3>
                        <p className="text-gray-400 text-sm">Join 500+ businesses scaling with us</p>
                    </div>
                    <div className="flex items-center gap-8 text-white">
                        <div className="text-center">
                            <p className="text-3xl font-bold">500+</p>
                            <p className="text-xs text-gray-400">Clients</p>
                        </div>
                        <div className="w-px h-10 bg-zinc-800"></div>
                        <div className="text-center">
                            <p className="text-3xl font-bold">4.9/5</p>
                            <p className="text-xs text-gray-400">Rating</p>
                        </div>
                        <div className="w-px h-10 bg-zinc-800"></div>
                        <div className="text-center">
                            <p className="text-3xl font-bold">24h</p>
                            <p className="text-xs text-gray-400">Response</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactMap