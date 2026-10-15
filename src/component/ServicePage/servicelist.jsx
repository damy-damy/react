import React from 'react'

const ServiceList = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">What We Offer</p>
                    <h2 className="text-3xl sm:text-4xl font-bold">Our Core Services</h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Service 1 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                            alt="Brand Strategy"
                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="p-7">
                            <h3 className="font-bold text-xl mb-3">Brand Strategy</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">We build powerful brands that stand out and connect with your customers.</p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80"
                            alt="Web Development"
                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="p-7">
                            <h3 className="font-bold text-xl mb-3">Web Development</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">High-performance websites that are fast, modern and built to convert.</p>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                            alt="Digital Marketing"
                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="p-7">
                            <h3 className="font-bold text-xl mb-3">Digital Marketing</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Data-driven marketing to grow your audience and increase sales.</p>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80"
                            alt="UI/UX Design"
                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="p-7">
                            <h3 className="font-bold text-xl mb-3">UI/UX Design</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Clean, professional interfaces designed for great user experience.</p>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                            alt="Business Consulting"
                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="p-7">
                            <h3 className="font-bold text-xl mb-3">Business Consulting</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Strategic advice to scale your business with confidence.</p>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80"
                            alt="Content Creation"
                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="p-7">
                            <h3 className="font-bold text-xl mb-3">Content Creation</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Premium visuals and content that tell your brand story.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ServiceList