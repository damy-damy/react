import React from 'react'

const ContactForm = () => {
    return (
        <section className="py-24 px-8 bg-[#f8f8f7]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

                {/* Left - Info Cards */}
                <div className="space-y-6">

                    <div className="bg-white p-8 rounded-3xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">✉️</div>
                        <h4 className="font-bold mb-1">Email Us</h4>
                        <p className="text-sm text-gray-500 mb-2">Fast response team</p>
                        <a href="mailto:hello@company.com" className="font-bold">hello@company.com</a>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">📞</div>
                        <h4 className="font-bold mb-1">Call Us</h4>
                        <p className="text-sm text-gray-500 mb-2">Mon-Fri 9am-6pm</p>
                        <a href="tel:+1234567890" className="font-bold">+1 234 567 890</a>
                    </div>

                    <div className="bg-black text-white p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-4">📍</div>
                        <h4 className="font-bold mb-1">Visit Us</h4>
                        <p className="text-sm text-gray-400 mb-2">Premium office location</p>
                        <p className="font-bold">123 Business Ave, New York</p>
                    </div>

                </div>

                {/* Right - Form */}
                <div className="md:col-span-2 bg-white p-10 rounded-3xl border">
                    <h3 className="text-3xl font-bold mb-2">Send Us A Message</h3>
                    <p className="text-gray-500 mb-8 text-sm">We will respond within 1 hour during business hours.</p>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-bold">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full mt-2 px-5 py-4 rounded-full border bg-[#f8f8f7] focus:outline-none focus:border-black transition" />
                            </div>
                            <div>
                                <label className="text-sm font-bold">Email Address</label>
                                <input type="email" placeholder="john@company.com" className="w-full mt-2 px-5 py-4 rounded-full border bg-[#f8f8f7] focus:outline-none focus:border-black transition" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-bold">Service</label>
                                <select className="w-full mt-2 px-5 py-4 rounded-full border bg-[#f8f8f7] focus:outline-none focus:border-black transition">
                                    <option>Full Stack Development</option>
                                    <option>Cyber Security</option>
                                    <option>UI/UX Design</option>
                                    <option>Digital Marketing</option>
                                    <option>Business Consulting</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-bold">Budget</label>
                                <select className="w-full mt-2 px-5 py-4 rounded-full border bg-[#f8f8f7] focus:outline-none focus:border-black transition">
                                    <option>$500 - $1,000</option>
                                    <option>$1,000 - $5,000</option>
                                    <option>$5,000+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-bold">Message</label>
                            <textarea rows="5" placeholder="Tell us about your project..." className="w-full mt-2 px-5 py-4 rounded-3xl border bg-[#f8f8f7] focus:outline-none focus:border-black transition"></textarea>
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300">
                            Send Message →
                        </button>

                        <p className="text-xs text-gray-400 text-center">Your data is 100% secure and encrypted</p>
                    </form>

                </div>

            </div>
        </section>
    )
}

export default ContactForm