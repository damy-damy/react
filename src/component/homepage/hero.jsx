import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (

        <section
            id="home"
            className="min-h-[85vh] flex items-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 px-6 py-20 text-white"
        >
            <div className="mx-auto max-w-6xl w-full">
                <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-purple-300">
                    Welcome to my world
                </p>

                <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
                    Hi, I'm <span className="text-purple-400">Princess Dammy.</span>
                </h1>

                <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
                    Creative mind. Big dreams. Bright future.
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-slate-300">
                    I'm passionate about learning, creating beautiful
                    digital experiences and turning my ideas into reality.
                    This is my space to share my journey with the world.
                </p>

                <Link to="/about"
                    href="#my-story"
                    className="mt-9 inline-block rounded-xl bg-purple-500 px-7 py-4 font-bold hover:bg-purple-600"
                >
                    Discover My Story →
                </Link>
            </div>
        </section>
    );
}



export default Hero