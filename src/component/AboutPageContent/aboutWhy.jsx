import React from 'react'

const AboutWhy = () => {
    return (
        <section className="py-20 px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left - Images Collage */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                        alt="Professional Team Meeting"
                        className="rounded-2xl w-full h-[350px] object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                        alt="Business Discussion"
                        className="rounded-2xl w-[65%] h-[250px] object-cover absolute -bottom-10 -right-6 border-8 border-gray-50 shadow-xl"
                    />
                </div>

                {/* Right Content */}
                <div className="md:pl-8">
                    <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-3">Why Choose Us</h2>
                    <h3 className="text-4xl font-bold mb-6 leading-tight">
                        We Don't Just Deliver <br /> Services, We Deliver Results
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Our approach is built on professionalism, precision and partnership. We work as an extension of your team to ensure real business growth.
                    </p>

                    <div className="space-y-6">

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full font-bold">✓</div>
                            <div>
                                <h4 className="font-bold">Proven Expertise</h4>
                                <p className="text-sm text-gray-500">Over 5 years working with startups and established brands.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full font-bold">✓</div>
                            <div>
                                <h4 className="font-bold">Client-Focused Approach</h4>
                                <p className="text-sm text-gray-500">We listen, understand your goals, and build solutions tailored to you.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full font-bold">✓</div>
                            <div>
                                <h4 className="font-bold">Results Driven</h4>
                                <p className="text-sm text-gray-500">Every design and strategy is measured by growth and ROI.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutWhy