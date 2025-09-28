'use client';
import React, { useEffect } from 'react';

const EventsContributions = () => {
    useEffect(() => {
        // Scroll animation setup
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-heritage-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.heritage-item').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const events = [
        {
            year: "1956",
            title: "Monument Inauguration",
            description:
                "Monument symbolizing the presence of Kanvashram inaugurated by Shri Jag Mohan Singh Negi, Forest Minister, Uttar Pradesh, in Chawkighat on the left bank of river Malini, 11 km from Kotdwara, Dist. Pauri Garhwal, Uttarakhand.",
            image: "/event.jpg",
        },
        {
            year: "1957",
            title: "First Annual Mela",
            description:
                "Yearly MELA or FAIR organised by Kanvashram Vikas Samiti on Basant Panchami day.",
            image: "/event1.jpg",
        },
        {
            year: "1964",
            title: "Mela Recognition",
            description:
                "MELA at Kanvashram given recognition by Zila Parishad, Dist. Pauri Garhwal.",
            image: "/event2.jpg",
        },
        {
            year: "1972",
            title: "Land Lease Granted",
            description:
                "The land around the monument measuring 0.364 hectare was given on lease to Kanvashram Vikas Samiti by the U.P. state government.",
            image: "/event4.jpg",
        },
        {
            year: "1992",
            title: "Samiti Registration & Relics Discovery",
            description:
                "Samiti registered with the government. Heavy rains uncovered artifacts and relics of a buried ancient monument near Kanvashram.",
            image: "/event.jpg",
        },
        {
            year: "1998",
            title: "Development Plan & Beautification",
            description:
                "Election held for Samiti office bearers, Lt. Cdr. V.S. Rawat (Retd) elected as President. An Integrated Development Plan for Kanvashram was submitted to U.P. government. Proposal for beautification of Bharat Samarak was approved and construction of road, stairs, and boundary wall completed.",
            image: "/event1.jpg",
        },
        {
            year: "2001",
            title: "Library Foundation",
            description:
                "Stone laying for construction of Library cum Museum done by Lt. Cdr. V.S. Rawat (Retd). Funds sanctioned by Maj. Gen. B.C. Khanduri, MP Lok Sabha, Pauri Garhwal.",
            image: "/event2.jpg",
        },
        {
            year: "2002",
            title: "Library Inauguration",
            description:
                "Library cum Museum inaugurated, marking a major step in Kanvashram’s documentation and heritage preservation.",
            image: "/event4.jpg",
        },
        {
            year: "2012",
            title: "ASI Investigation",
            description:
                "Heavy rains again uncovered relics. Archaeological Survey of India team headed by Mr. Atul Bhargava visited Kanvashram for investigation.",
            image: "/event.jpg",
        },
        {
            year: "2015",
            title: "Book Release",
            description:
                "Book 'कण्वाश्रम' written by Lt. Cdr. V.S. Rawat (Retd) was released on 24 Jan 2015 by Smt. Renu Bist, wife of Hon. Acting Chief Justice of Uttarakhand Shri Vijay Kumar Bist.",
            image: "/event1.jpg",
        },
        {
            year: "2016",
            title: "Latest Archaeological Activities",
            description:
                "New relics found at Kanvashram were studied by ASI officials. Annual Basant Panchami Mela inaugurated by Shri Harish Rawat, Chief Minister, Uttarakhand. Girder bridge across Malini inaugurated. Official Kanvashram website launched on 15 May 2016.",
            image: "/event2.jpg",
        },
    ];


    const contributions = [
        {
            name: "Shri Lalita Prasad Nathani",
            role: "Lawyer, Judge & Author",
            image: "/kar.jpg",
            description: `Shri Lalita Prasad Nathani (1900s–1980s), a retired Sessions Judge from Kanpur and President of Municipal Corporation, Kotdwara, was among the first modern researchers of Kanvashram. He visited the site in 1956, felt its spiritual aura, and wrote extensively on its heritage. His books remain a cornerstone of Kanvashram’s documentation.`,
            books: ["शकुन्तला की मालिनि (1958)", "मालिनि के खण्डर (1983)"],
            period: "1956–1970",
        },
        {
            name: "Shri Kuwar Singh Negi 'Karmat'",
            role: "Local Historian & Social Worker",
            image: "/old_book.jpg",
            description: `Shri Kuwar Singh Negi (1909–2012), lovingly called 'Karmat', was a writer, publisher, and social worker. He dedicated his life to Kanvashram’s cause, wrote numerous articles, and traveled across India to spread awareness. He remained an active member of Kanvashram Vikas Samiti until his passing at the age of 103.`,
            books: ["Oral History Articles", "Local Folklore Essays"],
            period: "1960–2012",
        },
        {
            name: "Lt. Cdr. Virendra Singh Rawat (Retd)",
            role: "Naval Officer & Heritage Activist",
            image: "/kk.jpg",
            description: `Lt. Cdr. V.S. Rawat (Retd), after serving the Indian Navy, took leadership of Kanvashram preservation. Since 1998, he has been President of Kanvashram Vikas Samiti, re-elected multiple times. He initiated the Integrated Development Plan, supervised the Library cum Museum construction, and authored the book 'कण्वाश्रम' (2015).`,
            books: ["कण्वाश्रम (2015)", "Heritage Conservation Reports"],
            period: "1998–present",
        },
    ];

    return (
        <div className="min-h-screen bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%221%22%20/%3E%3C/filter%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20filter%3D%22url%28%23noise%29%22%20opacity%3D%220.05%22%20/%3E%3C/svg%3E')]">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
                
                .heritage-item {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                
                .animate-heritage-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .parchment-bg {
                    background: linear-gradient(135deg, #fef9e7 0%, #f9e8c9 50%, #f5e1b5 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .parchment-bg::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        radial-gradient(circle at 20% 30%, rgba(180, 140, 80, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(160, 120, 60, 0.1) 0%, transparent 50%);
                    pointer-events: none;
                }
                
                .vintage-border {
                    border: 12px solid transparent;
                    border-image: url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M10%2C10%20L90%2C10%20L90%2C90%20L10%2C90%20Z%22%20fill%3D%22none%22%20stroke%3D%22%238B4513%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%228%2C8%22%20/%3E%3C/svg%3E') 25 round;
                }
                
                .heritage-shadow {
                    box-shadow: 
                        0 4px 20px rgba(139, 69, 19, 0.15),
                        0 1px 5px rgba(139, 69, 19, 0.1),
                        inset 0 0 30px rgba(244, 164, 96, 0.1);
                }
                
                .timeline-line::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 3px;
                    height: 100%;
                    background: linear-gradient(to bottom, #d4a574, #8B4513, #d4a574);
                    border-radius: 2px;
                }
                
                @media (max-width: 768px) {
                    .timeline-line::before {
                        left: 30px;
                    }
                }
                
                .sepia-filter {
                    filter: sepia(0.4) contrast(1.1) brightness(1.05);
                }
            `}</style>

            <section id="home-header" className="relative h-[90vh] -mt-28 bg-cover bg-center flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(90, 70, 50, 0.5), rgba(70, 50, 30, 0.7)), url("/event.jpeg")'
                    }}
                >
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto heritage-item bg-transparent">
                    <p className="text-lg md:text-2xl font-playfair text-white italic">
                        Events & Contributions
                    </p>
                    <img src="/underline.png" className='w-96' />
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="heritage-item">
                    <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-amber-900 text-center mb-12 border-b-2 border-amber-300 pb-4">
                        Historical Timeline
                    </h2>

                    <div className="relative timeline-line">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className={`heritage-item mb-12 relative ${index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-amber-900 text-amber-50 rounded-full shadow-lg mb-4 md:mb-0 mx-auto md:mx-0">
                                        <span className="text-2xl font-cinzel font-bold">{event.year}</span>
                                    </div>

                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <div className="parchment-bg rounded-xl heritage-shadow border-4 border-amber-200 transform hover:scale-105 transition-transform duration-300">
                                            <div className="p-6">
                                                <div className="flex flex-col lg:flex-row items-center gap-6">
                                                    <div className="w-full lg:w-64 flex-shrink-0">
                                                        <div className="relative overflow-hidden rounded-lg border-4 border-amber-300">
                                                            <img
                                                                src={event.image}
                                                                alt={event.title}
                                                                className="w-full h-48 object-cover sepia-filter hover:sepia-0 transition-all duration-500"
                                                            />
                                                            <div className="absolute inset-0 border-2 border-amber-100 pointer-events-none"></div>
                                                        </div>
                                                    </div>

                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-cinzel text-amber-900 mb-3 border-b border-amber-200 pb-2">
                                                            {event.title}
                                                        </h3>
                                                        <p className="text-amber-800 leading-relaxed font-playfair">
                                                            {event.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="parchment-bg py-16 mt-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="heritage-item">
                        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-amber-900 text-center mb-12 border-b-2 border-amber-300 pb-4">
                            Notable Contributions
                        </h2>

                        <div className="space-y-12">
                            {contributions.map((contributor, index) => (
                                <div
                                    key={index}
                                    className="heritage-item heritage-shadow rounded-2xl overflow-hidden border-4 border-amber-200"
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        <div className="lg:w-2/5 relative">
                                            <img
                                                src={contributor.image}
                                                alt={contributor.name}
                                                className="w-full h-64 lg:h-full object-cover sepia-filter hover:sepia-0 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-amber-900/90 text-amber-50 p-4">
                                                <h3 className="font-cinzel text-xl">{contributor.name}</h3>
                                                <p className="font-playfair text-amber-200 text-sm">{contributor.role}</p>
                                            </div>
                                        </div>

                                        <div className="lg:w-3/5 p-6 lg:p-8">
                                            <div className="mb-4">
                                                <span className="inline-block bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-cinzel">
                                                    {contributor.period}
                                                </span>
                                            </div>

                                            <p className="text-amber-800 leading-relaxed font-playfair text-lg mb-6">
                                                {contributor.description}
                                            </p>

                                            <div>
                                                <h4 className="font-cinzel text-amber-900 text-lg mb-2">Notable Works:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {contributor.books.map((book, bookIndex) => (
                                                        <span
                                                            key={bookIndex}
                                                            className="bg-amber-100 text-amber-800 px-3 py-1 rounded border border-amber-300 font-playfair text-sm"
                                                        >
                                                            {book}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-8 px-4 max-w-6xl mx-auto">
                <div className="flex items-center justify-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    <div className="mx-4 text-amber-500 text-2xl">ॐ</div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>
            </div>
            <footer className="bg-amber-900 text-amber-50 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="font-cinzel text-2xl mb-4">Kanvashram Heritage Archive</div>
                    <p className="font-playfair text-amber-200">
                        Preserving the legacy of those who dedicated their lives to Kanvashram's heritage
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default EventsContributions;