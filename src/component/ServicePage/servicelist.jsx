import React from 'react';

const services = [
    {
        id: 1,
        title: 'Brand Strategy',
        description:
            'We build powerful brands that stand out and connect with your customers.',
        image:
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
    },
    {
        id: 2,
        title: 'Web Development',
        description:
            'High-performance websites that are fast, modern and built to convert.',
        image:
            'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    },
    {
        id: 3,
        title: 'Digital Marketing',
        description:
            'Data-driven marketing to grow your audience and increase sales.',
        image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    },
    {
        id: 4,
        title: 'UI/UX Design',
        description:
            'Clean, professional interfaces designed for great user experience.',
        image:
            'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80',
    },
    {
        id: 5,
        title: 'Business Consulting',
        description:
            'Strategic advice to scale your business with confidence.',
        image:
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    },
    {
        id: 6,
        title: 'Content Creation',
        description:
            'Premium visuals and content that tell your brand story.',
        image:
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    },
];

const ServiceList = () => {
    return (
        <section className="bg-white px-4 py-12 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-6xl">

                <div className="mb-8 text-center sm:mb-14">
                    <p className="mb-3 text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                        What We Offer
                    </p>

                    <h2 className="text-2xl font-bold sm:text-4xl">
                        Our Core Services
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">

                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group overflow-hidden rounded-2xl border bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="h-28 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40 md:h-48"
                            />

                            <div className="p-3 sm:p-5 md:p-7">
                                <h3 className="mb-2 text-sm font-bold sm:text-lg md:text-xl">
                                    {service.title}
                                </h3>

                                <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServiceList;