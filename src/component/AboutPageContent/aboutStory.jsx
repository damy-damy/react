import React from 'react'

const AboutStory = () => {
    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left - Text */}
                <div>
                    <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-3">Our Story</h2>
                    <h3 className="text-4xl font-bold mb-6 leading-tight">
                        Building Brands That <br /> Inspire & Deliver
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        We started with a simple idea — to help businesses grow through
                        creative design and powerful digital solutions. Over the years,
                        we’ve grown into a team of passionate designers, developers, and strategists.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Every project we take is a new story. We listen, we create, and we
                        deliver results that matter for our clients and their customers.
                    </p>

                    <div className="grid grid-cols-3 gap-6 mt-8">
                        <div>
                            <h4 className="text-3xl font-bold">50+</h4>
                            <p className="text-sm text-gray-500">Projects Done</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold">5+</h4>
                            <p className="text-sm text-gray-500">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold">30+</h4>
                            <p className="text-sm text-gray-500">Happy Clients</p>
                        </div>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                        alt="Our Story"
                        className="rounded-2xl w-full h-[450px] object-cover"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-xl">
                        <p className="text-sm">Trusted by top brands</p>
                        <p className="font-bold">Since 2020</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutStory