import React from 'react'

const Myskils = () => {
    return (

        <section className="bg-gray-50 px-6 py-16">
            <div className="mx-auto max-w-5xl">

                <h2 className="mb-4 text-center text-3xl font-bold text-blue-600">
                    My Skills
                </h2>

                <p className="mb-10 text-center text-gray-600">
                    Technologies I am learning and using to build websites.
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


                    <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">

                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            HTML
                        </h3>
                        <p className="leading-7 text-gray-600">
                            I use HTML to create the structure and content of websites.
                        </p>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            Tailwind CSS
                        </h3>
                        <p className="leading-7 text-gray-600">
                            I use Tailwind CSS to style websites and create responsive layouts.
                        </p>
                    </div>

                    {/* JavaScript */}
                    <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            JavaScript
                        </h3>
                        <p className="leading-7 text-gray-600">
                            I am learning JavaScript to make websites interactive.
                        </p>
                    </div>

                    {/* React */}
                    <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            React
                        </h3>
                        <p className="leading-7 text-gray-600">
                            I use React components to organise and build user interfaces.
                        </p>
                    </div>

                    {/* Responsive Design */}
                    <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            Responsive Design
                        </h3>
                        <p className="leading-7 text-gray-600">
                            I create layouts that adapt to different screen sizes.
                        </p>
                    </div>

                    {/* Problem Solving */}
                    <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                            Problem Solving
                        </h3>
                        <p className="leading-7 text-gray-600">
                            I practise debugging errors and finding solutions while coding.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}


export default Myskils