import React from 'react'
import { Link } from 'react-router-dom'

const AboutCta = () => {
    return (
        <section className="py-20 px-8 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Let's Build Something <br /> Great Together
                </h2>

                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                    Have an idea? We are ready to turn it into a powerful brand, website, and business growth story.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href="/start-project"
                        className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition"
                    >
                        Start A Project
                    </a>

                    <Link to="/serve"

                        className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition"
                    >
                        View Our Services
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default AboutCta