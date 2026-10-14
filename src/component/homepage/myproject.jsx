import React from 'react'

const Myproject = () => {
    return (

        <section className="bg-white px-6 py-16">
            <div className="mx-auto max-w-5xl">

                <h2 className="mb-4 text-center text-3xl font-bold text-blue-600">
                    My Projects
                </h2>

                <p className="mb-10 text-center text-gray-600">
                    Here are some projects I am working on as I grow as a developer.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    {/* Project One */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
                        <div className="flex h-40 items-center justify-center bg-blue-100">
                            <span className="text-5xl">🛍️</span>
                        </div>

                        <div className="p-6">
                            <h3 className="mb-3 text-xl font-bold text-gray-800">
                                Princess Cosmetics
                            </h3>

                            <p className="mb-5 leading-7 text-gray-600">
                                A cosmetics website concept designed to display beauty
                                products in an attractive and organised layout.
                            </p>

                            <div className="mb-5 flex flex-wrap gap-2">
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                                    HTML
                                </span>
                                <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-700">
                                    Tailwind CSS
                                </span>
                            </div>

                            <a
                                href="#contact"
                                className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                    {/* Project Two */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
                        <div className="flex h-40 items-center justify-center bg-purple-100">
                            <span className="text-5xl">🚗</span>
                        </div>

                        <div className="p-6">
                            <h3 className="mb-3 text-xl font-bold text-gray-800">
                                Car Finder
                            </h3>

                            <p className="mb-5 leading-7 text-gray-600">
                                A car search website concept for displaying vehicle
                                information and practising modern web development.
                            </p>

                            <div className="mb-5 flex flex-wrap gap-2">
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                                    React
                                </span>
                                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">
                                    Tailwind CSS
                                </span>
                            </div>

                            <a
                                href="#contact"
                                className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}



export default Myproject