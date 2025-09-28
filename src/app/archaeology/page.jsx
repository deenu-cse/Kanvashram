'use client';
import React, { useEffect, useState } from 'react';

const ArchaeologicalFinds = () => {
    const [expandedCards, setExpandedCards] = useState({});

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const toggleReadMore = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const discoveries = [
        {
            year: '1992',
            title: 'Initial Discovery',
            shortDescription: 'The ferocity of the Monsoon rain in 1992 brought extremely heavy torrent of water down hill sweeping away the surface top soil around Kanvashram, revealing remains of an ancient civilization...',
            fullDescription: `The ferocity of the Monsoon rain in the year 1992 brought extremely heavy torrent of water down hill sweeping away the surface top soil in an area around Kanvashram to reveal the remains of an ancient civilization buried there in. The relics of the ancient monument lay scattered all over. The temple or the building may have come down due to its age but in most probability have been brought down by foreign invaders bent upon destroying the cultural heritage of this ancient nation.`,
            image: '/murti.jpg',
        },
        {
            year: '1992',
            title: 'Primary Studies',
            shortDescription: 'Primary studies were conducted by the staff of Srinagar Garhwal University who took some of the relics with them for study...',
            fullDescription: `Primary studies were conducted by the staff of Srinagar Garhwal University who took some of the relics with them to Srinagar(Garhwal) for study. In a letter to ASI, India the university's concerned department has concluded that these stone relics belong to 10 to 12 century AD. No further effort was made by anyone to do excavation thereafter.`,
            image: '/murti.jpg',
        },
        {
            year: '2012',
            title: 'Second Discovery',
            shortDescription: 'Fortunately in Jul 2012 heavy monsoon rains once again eroded the soil uncovering ancient structure. Kanavashram Vikas Samiti took prompt action...',
            fullDescription: `Fortunately in Jul 2012 about two decades later heavy monsoon rains once again eroded the soil uncovering of ancient structure. On this instant the Kanavashram Vikas Samiti took prompt action and forwarded all the photos of the site and the relics to the Director General, Archeological Survey of India, New Delhi . DG, ASI, took positive view of the situation and a team headed by Superintending Archeologist Dehradun circle, Mr Atul Bhargawa and Mr Pandey and Mr Verma came down to Kanavashram to investigate. A report prepared by the team was submitted to DG, ASI, New Delhi. The age of the relics or structure found was approximately dated from 9 to 12th century AD. No further excavation was done at the site by ASI.`,
            image: '/murti.jpg',
        },
        {
            year: '2016',
            title: 'Carved Relic Found',
            shortDescription: 'In Feb 2016 a finely carved piece of relic was found in the area and forwarded to DG, ASI, New Delhi. Further investigation by ASI is awaited.',
            fullDescription: `In Feb 2016 a finely carved piece of relic was found in the area and this information was again forwarded to DG, ASI, New Delhi by the Kanvashram Vikas Samiti. This time also another team headed by Superintending Archeologist Dehradun circle Dr Nauriyal came and did further investigation. The report and further investigation by ASI is awaited.`,
            image: '/murti.jpg',
        },
    ];

    return (
        <div className="min-h-screen bg-amber-50">
            <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(2rem);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .filter-sepia {
          filter: sepia(0.8);
        }
        .filter-sepia:hover {
          filter: none;
        }
        .content-transition {
          transition: all 0.5s ease-in-out;
        }
      `}</style>

            <section
                id="home-header"
                className="relative h-[90vh] bg-cover bg-center flex items-center justify-center -mt-28"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/chapter_image/ashram.jpg")',
                }}
            >
                <div className="text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-serif mb-4 scroll-animate">
                        Archaeological Finds at Kanvashram
                    </h1>
                    <p className="text-xl md:text-2xl font-serif italic scroll-animate delay-200">
                        Uncovering Ancient Heritage
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 py-12">
                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1 h-full w-1 bg-amber-800/30"></div>

                    {discoveries.map((discovery, index) => (
                        <div
                            key={index}
                            className={`mb-12 scroll-animate ${index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'
                                }`}
                        >
                            <div
                                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-amber-900 text-amber-50 rounded-full shadow-lg mb-4 md:mb-0">
                                    <span className="text-xl font-serif font-bold">{discovery.year}</span>
                                </div>

                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div className={`bg-white rounded-lg shadow-lg border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl transform ${expandedCards[index] ? 'h-auto' : 'h-auto'} content-transition`}>
                                        <div className="p-6">
                                            <div className="flex flex-col md:flex-row items-center gap-6">
                                                <div className="w-full md:w-48 flex-shrink-0">
                                                    <div className="relative overflow-hidden rounded border-2 border-amber-300">
                                                        <img
                                                            src={discovery.image}
                                                            alt={discovery.title}
                                                            className="w-full h-48 object-cover filter-sepia hover:filter-none transition-all duration-500"
                                                            onError={(e) => {
                                                                console.error(`Failed to load image: ${discovery.image}`);
                                                            }}
                                                        />
                                                        <div className="absolute inset-0 border border-white/20 pointer-events-none"></div>
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-serif text-amber-900 mb-2 border-b border-amber-200 pb-2">
                                                        {discovery.title}
                                                    </h3>
                                                    <div className="content-transition overflow-hidden">
                                                        <p className="text-amber-800 leading-relaxed font-serif">
                                                            {expandedCards[index] ? discovery.fullDescription : discovery.shortDescription}
                                                        </p>
                                                        {expandedCards[index] && (
                                                            <div className="mt-4 p-4 bg-amber-100 rounded-lg border border-amber-200">
                                                                <p className="text-amber-700 text-sm italic">
                                                                    * Detailed archaeological findings and reports are preserved with Kanvashram Vikas Samiti
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <button
                                                        onClick={() => toggleReadMore(index)}
                                                        className="mt-4 px-6 py-2 bg-amber-700 text-amber-50 font-serif rounded border border-amber-800 hover:bg-amber-800 transition-colors duration-300 transform hover:scale-105"
                                                    >
                                                        {expandedCards[index] ? 'Read Less' : 'Read More'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="mt-16 scroll-animate">
                    <h2 className="text-4xl font-serif text-amber-900 text-center mb-8 border-b-2 border-amber-300 pb-4">
                        Gallery of Relics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="group relative overflow-hidden rounded-lg shadow-lg border-2 border-amber-200"
                            >
                                <img
                                    src="/murti.jpg"
                                    alt={`Relic ${item}`}
                                    className="w-full h-64 object-cover filter-sepia group-hover:filter-none transition-all duration-500 transform group-hover:scale-105"
                                    onError={(e) => {
                                        console.error(`Failed to load gallery image: /murti.jpg`);
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <span className="text-white font-serif text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        View Details
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-amber-900/90 text-amber-50 p-2 text-center font-serif">
                                    Ancient Relic #{item}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <div className="py-8 px-4 max-w-6xl mx-auto">
                <div className="flex items-center justify-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    <div className="mx-4 text-amber-500 text-2xl">ॐ</div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                </div>
            </div>
            <footer className="bg-amber-900 text-amber-50 py-8 mt-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="font-serif text-lg">Kanvashram Archaeological Research Center</p>
                    <p className="text-amber-200 mt-2">Preserving Heritage Since 1992</p>
                </div>
            </footer>
        </div>
    );
};

export default ArchaeologicalFinds;