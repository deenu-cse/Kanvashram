'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../../components/ui/button';
import { Navigation, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = {
    infrastructure: [
        {
            id: 1,
            src: "/gallery/infrastructure/in1.jpg",
            category: "infrastructure"
        },
        {
            id: 2,
            src: "/gallery/infrastructure/in2.jpg",
            category: "infrastructure"
        },
        {
            id: 3,
            src: "/gallery/infrastructure/in3.jpg",
            category: "infrastructure"
        },
        {
            id: 4,
            src: "/gallery/infrastructure/in4.jpg",
            category: "infrastructure"
        },
        {
            id: 5,
            src: "/gallery/infrastructure/in5.jpg",
            category: "infrastructure"
        },
        {
            id: 6,
            src: "/gallery/infrastructure/in6.jpg",
            category: "infrastructure"
        },
        {
            id: 7,
            src: "/gallery/infrastructure/in7.jpg",
            category: "infrastructure"
        },
        {
            id: 8,
            src: "/gallery/infrastructure/in8.jpg",
            category: "infrastructure"
        },
        {
            id: 9,
            src: "/gallery/infrastructure/in9.jpg",
            category: "infrastructure"
        },
        {
            id: 10,
            src: "/gallery/infrastructure/in10.jpg",
            category: "infrastructure"
        },
        {
            id: 11,
            src: "/gallery/infrastructure/in11.jpg",
            category: "infrastructure"
        },
        {
            id: 12,
            src: "/gallery/infrastructure/in12.jpg",
            category: "infrastructure"
        },
        {
            id: 13,
            src: "/gallery/infrastructure/in13.jpg",
            category: "infrastructure"
        },
        {
            id: 14,
            src: "/gallery/infrastructure/in14.jpg",
            category: "infrastructure"
        },
        {
            id: 15,
            src: "/gallery/infrastructure/in15.jpg",
            category: "infrastructure"
        },
    ],
    events: [
        {
            id: 16,
            src: "/gallery/events/e1.jpg",
            category: "events",
        },
        {
            id: 17,
            src: "/gallery/events/e2.jpg",
            category: "events",
        },
        {
            id: 18,
            src: "/gallery/events/e3.jpg",
            category: "events",
        },
        {
            id: 19,
            src: "/gallery/events/e4.jpg",
            category: "events",
        },
        {
            id: 20,
            src: "/gallery/events/e5.jpg",
            category: "events",
        },
        {
            id: 21,
            src: "/gallery/events/e6.jpg",
            category: "events",
        },
        {
            id: 22,
            src: "/gallery/events/e7.jpg",
            category: "events",
        },
        {
            id: 23,
            src: "/gallery/events/e8.jpg",
            category: "events",
        },
        {
            id: 24,
            src: "/gallery/events/e9.jpg",
            category: "events",
        },
        {
            id: 25,
            src: "/gallery/events/e10.jpg",
            category: "events",
        },
        {
            id: 26,
            src: "/gallery/events/e7.jpg",
            category: "events",
        },
        {
            id: 27,
            src: "/gallery/events/e8.jpg",
            category: "events",
        },
        {
            id: 28,
            src: "/gallery/events/e5.jpg",
            category: "events",
        },
        {
            id: 29,
            src: "/gallery/events/e6.jpg",
            category: "events",
        },
        {
            id: 30,
            src: "/gallery/events/e7.jpg",
            category: "events",
        },
        {
            id: 31,
            src: "/gallery/events/e8.jpg",
            category: "events",
        },
        {
            id: 32,
            src: "/gallery/events/e8.jpg",
            category: "events",
        }
    ],

    yoga: [
        {
            id: 33,
            src: "/gallery/yoga/y1.jpg",
            category: "yoga"
        },
        {
            id: 34,
            src: "/gallery/yoga/y2.jpg",
            category: "yoga"
        },
        {
            id: 35,
            src: "/gallery/yoga/y3.jpg",
            category: "yoga"
        },
        {
            id: 36,
            src: "/gallery/yoga/y4.jpg",
            category: "yoga"
        },
    ],
    havan: [
        {
            id: 37,
            src: "/gallery/havan/h1.jpg",
            category: "havan"
        },
        {
            id: 38,
            src: "/gallery/havan/h2.jpg",
            category: "havan"
        },
        {
            id: 39,
            src: "/gallery/havan/h3.jpg",
            category: "havan"
        },
        {
            id: 40,
            src: "/gallery/havan/h4.jpg",
            category: "havan"
        },
        {
            id: 41,
            src: "/gallery/havan/h5.jpg",
            category: "havan"
        },
        {
            id: 42,
            src: "/gallery/havan/h6.jpg",
            category: "havan"
        },
    ],
    history: [
        {
            id: 43,
            src: "/gallery/history/h1.jpg",
            category: "history",
        },
        {
            id: 44,
            src: "/gallery/history/h2.jpg",
            category: "history",
        },
        {
            id: 45,
            src: "/gallery/history/h4.jpg",
            category: "history",
        },
        {
            id: 46,
            src: "/gallery/history/h5.jpg",
            category: "history",
        },
        {
            id: 47,
            src: "/gallery/history/h10.jpg",
            category: "history",
        },
        {
            id: 48,
            src: "/gallery/history/h11.jpg",
            category: "history",
        }
    ],

    frame: [
        {
            id: 49,
            src: "/gallery/frames/f1.jpg",
            category: "frame",
        },
        {
            id: 50,
            src: "/gallery/frames/f2.jpg",
            category: "frame",
        },
        {
            id: 51,
            src: "/gallery/frames/f3.jpg",
            category: "frame",
        },
        {
            id: 52,
            src: "/gallery/frames/f4.jpg",
            category: "frame",
        },
        {
            id: 53,
            src: "/gallery/frames/f5.jpg",
            category: "frame",
        },
        {
            id: 54,
            src: "/gallery/frames/f6.jpg",
            category: "frame",
        },
        {
            id: 55,
            src: "/gallery/frames/f7.jpg",
            category: "frame",
        },
    ],
    swamiji: [
        {
            id: 56,
            src: "/gallery/swamiji/s1.jpg",
            category: "swami",
        },
        {
            id: 57,
            src: "/gallery/swamiji/s2.jpg",
            category: "swami",
        },
        {
            id: 58,
            src: "/gallery/swamiji/s3.jpg",
            category: "swami",
        },
        {
            id: 59,
            src: "/gallery/swamiji/s4.jpg",
            category: "swami",
        },
        {
            id: 60,
            src: "/gallery/swamiji/s5.jpg",
            category: "swami",
        },
        {
            id: 61,
            src: "/gallery/swamiji/s6.jpg",
            category: "swami",
        },
    ],
};

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sectionRefs = useRef([]);

    const allImages = Object.values(galleryImages).flat();

    const filteredImages = selectedCategory === 'all'
        ? allImages
        : allImages.filter(img => img.category === selectedCategory);

    const categories = [
        { id: 'all', name: 'All Photos', count: allImages.length },
        { id: 'infrastructure', name: 'Infrastructure', count: galleryImages.infrastructure.length },
        { id: 'events', name: 'Events', count: galleryImages.events.length },
        { id: 'yoga', name: 'Yoga', count: galleryImages.yoga.length },
        { id: 'havan', name: 'Havan', count: galleryImages.havan.length },
        { id: 'history', name: 'History', count: galleryImages.history.length },
        { id: 'frame', name: 'Frames', count: galleryImages.frame.length },
        { id: 'swami', name: 'Swami Ji', count: galleryImages.swamiji.length },
    ];

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(allImages.findIndex(img => img.id === image.id));
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentImageIndex + 1) % allImages.length;
        } else {
            newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        }
        setCurrentImageIndex(newIndex);
        setSelectedImage(allImages[newIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImage) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') navigateImage('next');
                if (e.key === 'ArrowLeft') navigateImage('prev');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentImageIndex]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRefs = sectionRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <div className="min-h-screen bg-[#fefaf0] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZlZmFmMCI+PC9yZWN0PgogIDxwYXRoIGQ9Ik0wIDUwSDEwME0xMDAgMEwwIDEwME0wIDBMMTAwIDEwME0wIDEwMEwxMDAgMCIgc3Ryb2tlPSIjZmZlYmNjIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')]">
            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(2.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
        
        .image-hover {
          transition: all 0.3s ease;
        }
        
        .image-hover:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
      `}</style>

            <section id="home-header" className="relative h-[90vh] bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 overflow-hidden -mt-28">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/gallery/himage.jpg")'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/30 to-amber-900/60"></div>
                <div className="relative z-10 flex items-center justify-center h-full mt-11">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wider">
                            Gallery
                        </h1>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
                        <p className="text-xl md:text-2xl font-serif italic text-amber-200 max-w-2xl mx-auto">
                            Discover the beauty and serenity of Kanvashram through our visual journey
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div ref={addToRefs} className="mb-12 opacity-0">
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                    ? 'bg-amber-600 text-white shadow-lg'
                                    : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
                                    }`}
                            >
                                <Filter className="w-4 h-4" />
                                {category.name}
                                <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded-full text-sm">
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div ref={addToRefs} className="opacity-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-2xl shadow-lg image-hover cursor-pointer bg-white"
                                onClick={() => openLightbox(image, index)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.category}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <span className="inline-block px-3 py-1 bg-amber-600 rounded-full text-sm mt-2 capitalize">
                                            {image.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div ref={addToRefs} className="text-center py-16 opacity-0">
                        <div className="bg-white/80 rounded-2xl p-12 shadow-lg">
                            <p className="text-2xl text-amber-800 font-serif">No images found for this category.</p>
                            <p className="text-amber-600 mt-2">Please select another category to view photos.</p>
                        </div>
                    </div>
                )}
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-amber-400 to-orange-400">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Experience the Serenity
                    </h2>
                    <p className="text-white/95 font-serif text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                        Visit Kanvashram and immerse yourself in the spiritual atmosphere captured in these images.
                    </p>
                    <Button
                        onClick={() => window.open('https://www.google.com/maps/place/Kanvashram./@29.792678,78.459305,38762m/data=!3m1!1e3!4m6!3m5!1s0x390965271842b213:0x74ca34785f95fa60!8m2!3d29.7926781!4d78.4593047!16s%2Fg%2F1vk6xlhh?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                        className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg font-semibold rounded-full shadow-lg"
                        size="lg"
                    >
                        <Navigation className="w-5 h-5 mr-2" />
                        Get Directions on Google Maps
                    </Button>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-4 text-white hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-4 text-white hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div className="relative max-w-6xl max-h-full">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                            <p className="text-amber-300 capitalize">{selectedImage.category}</p>
                            <p className="text-sm text-gray-300 mt-1">
                                {currentImageIndex + 1} of {allImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;