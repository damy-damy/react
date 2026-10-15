import React from 'react';

const AboutHero = () => {
    return (
        <section className="w-full bg-[#0f0a1e] text-white px-6 md:px-20 py-24">
            <div className="max-w-6xl mx-auto text-center space-y-6">
                <p className="text-purple-300 tracking-[0.3em] text-sm">WELCOME TO MY WORLD</p>
                <h1 className="text-4xl md:text-6xl font-bold">
                    More Than Just a <span className="text-[#c084fc]">Creative Mind</span>
                </h1>
                <p className="text-gray-400  max-w-2xl mx-auto text-lg">
                    I'm Princess Dammy — a learner, creator, and dreamer.
                    I turn ideas into beautiful digital experiences that inspire.
                </p>
            </div>
        </section>
    );
};
export default AboutHero;