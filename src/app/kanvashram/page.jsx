'use client';
import React, { useEffect, useRef } from 'react';
import { Button } from '../../components/ui/button'
import { Navigation } from 'lucide-react';

const AboutKanvashram = () => {
    const sectionRefs = useRef([]);

    const handleShowDirections = () => {
        window.open(
            'https://www.google.com/maps/place/Kanvashram./@29.792678,78.459305,38762m/data=!3m1!1e3!4m6!3m5!1s0x390965271842b213:0x74ca34785f95fa60!8m2!3d29.7926781!4d78.4593047!16s%2Fg%2F1vk6xlhh?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D',
            '_blank'
        );
    };

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
        <div className="bg-[#fefaf0] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZlZmFmMCI+PC9yZWN0PgogIDxwYXRoIGQ9Ik0wIDUwSDEwME0xMDAgMEwwIDEwME0wIDBMMTAwIDEwME0wIDEwMEwxMDAgMCIgc3Ryb2tlPSIjZmZlYmNjIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] -mt-28">
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
      `}</style>

            <section id="home-header" className="relative h-[90vh] bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 overflow-x-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                    }}
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wider">
                            KANVASHRAM
                        </h1>
                        <div className="w-32 h-1 bg-amber-400 mx-auto mb-4"></div>
                        <p className="text-2xl md:text-3xl font-serif italic text-amber-200">
                            A National Heritage
                        </p>
                    </div>
                </div>
            </section>

            <section ref={addToRefs} className="py-16 px-4 max-w-6xl mx-auto opacity-0">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-amber-200 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
                            Introduction
                        </h2>
                        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed">
                        <p className="text-amber-900 font-serif">
                            "KANVASHRAM is neither a religious nor a godly place but a place which represents the very spirit or soul of this mighty nation BHARAT. To bring such a place back to its pinnacle of glory should be the dream and ambition of every citizen of this nation."
                        </p>

                        <p className="text-amber-800">
                            Every nation has memorials which are symbol of its national unity and inspiration to its citizens. Dignitaries & people from far and wide visit such site and pay glowing tributes to the creator or architect of that nation. NO SUCH MEMORIAL EXISTS IN OUR NATION WHICH HONOURS THE CREATOR OF THIS ANCIENT CIVILISATION.
                        </p>

                        <p className="text-amber-800">
                            Though a considerable time has been lost, but to make amends at this late stage may still be sufficient motivation to the coming generation to hold this vast stretch of landmass together like Emperor Bharat did. So that it continues to be respectfully addressed to as "BHARAT VARSH".
                        </p>
                    </div>
                </div>
            </section>

            <section ref={addToRefs} className="py-12 px-4 max-w-6xl mx-auto opacity-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Himalayan Mountains"
                        className="w-full h-64 md:h-96 object-cover filter sepia-[0.3] brightness-110 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <p className="text-white font-serif italic text-lg md:text-xl">
                            "The magnanimous Himalayas and Shivalik ranges shelter the sacred river Malini."
                        </p>
                    </div>
                </div>
            </section>

            <section ref={addToRefs} className="py-16 px-4 max-w-6xl mx-auto opacity-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-white/90 rounded-lg p-6 shadow-xl border-l-4 border-amber-500">
                            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                                The Sacred Landscape
                            </h3>
                            <p className="text-amber-800 leading-relaxed">
                                South of the magnanimous Himalayan mountains and running parallel to it runs the Shivalik mountain range (meaning tresses of Lord Shiva). Shivalik mountain range is covered with dense forest of lush Sal trees. Doon valley and the world famous tiger reserve sanctuary, Jim Corbet park lie in these mountain range.
                            </p>
                            <p className="text-amber-800 leading-relaxed mt-4">
                                Also nestled in its dense forest and within its folds flows the pious river Malini. Some 4000 years ago on the bank of this river was situated the world famous ashram of sage Kanav. It was called Kanvashram. It was a centre of spiritual and academic studies, a university in today's terminology, where tens of thousands of students acquired knowledge under the guidance of chancellor sage Kanv.
                            </p>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="/about1.jpg"
                                alt="Ancient Ashram"
                                className="w-full h-64 md:h-80 object-cover filter sepia-[0.2]"
                            />
                            <div className="absolute inset-0 bg-amber-900/10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={addToRefs} className="py-16 px-4 max-w-6xl mx-auto opacity-0">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
                        Sacred Verses
                    </h2>
                    <div className="w-32 h-1 bg-amber-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-amber-50/80 border-2 border-amber-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-amber-900 mb-4">
                            <p className="font-serif text-lg leading-relaxed text-amber-800">
                                "ऐष चारस्मदगुरे कण्वपतेः सदधदैवय इवः।शाकुन्तलया अनुमालिनीतीर आश्रमो दश्यते ।।"
                            </p>
                            <p className="text-sm text-amber-600 mt-2">- अभिज्ञान शाकुन्तलम प्रथम अंक</p>
                        </div>
                        <div className="border-t border-amber-200 pt-4">
                            <p className="font-serif italic text-amber-700">
                                "The ashram of chancellor Kanv can be seen near the hills on the bank of river Malini. The caretaker of the ashram is presently Shakuntala."
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-50/80 border-2 border-amber-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-amber-900 mb-4">
                            <p className="font-serif text-lg leading-relaxed text-amber-800">
                                "निर्जने तु वने यश्माच्छकुन्तेःपरिपालिता।शकुन्तलेति नामाश्स्याः कतं चापि ततो मया ।।"
                            </p>
                            <p className="text-sm text-amber-600 mt-2">- अभिज्ञान शाकुन्तलम प्रथम अंक</p>
                        </div>
                        <div className="border-t border-amber-200 pt-4">
                            <p className="font-serif italic text-amber-700">
                                "As she was found by sage Kanv in the dense jungles protected by chirping birds she was named Shakuntala by the sage and was brought up by him."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={addToRefs} className="py-16 px-4 max-w-6xl mx-auto opacity-0">
                <div className="bg-white/80 rounded-2xl shadow-2xl border-2 border-amber-200 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
                            The Eternal Love Story
                        </h2>
                        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                    </div>

                    <div className="space-y-6 text-amber-800 leading-relaxed">
                        <p>
                            It was here on the banks of river Malini where King Dushyant out on a hunt saw Shakuntala, foster daughter of sage Kanv. King Dushyant fell in love with Shakuntala and married her. It was in this very Kanvashram, where Shakuntala-King Dushyant's son Bharat was born.
                        </p>

                        <div className="bg-amber-50/50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <p className="font-serif text-lg text-amber-800">
                                "प्रस्थे हिमतो रम्ये मालिनीममितो नदीम् । जातमुत्सज्यन्त गर्भ मेनका मलिनिमनुः।"
                            </p>
                            <p className="text-sm text-amber-600 mt-2">- Mahabharat Sambhav Parva 72</p>
                            <p className="font-serif italic text-amber-700 mt-2">
                                "At one end of the beautiful snow covered region on the banks of the pious river Malini, born out of the womb of Menaka, Shakuntala has given birth to a child."
                            </p>
                        </div>

                        <p>
                            It was in the jungles around Kanvashram on the bank of river Malini that this fearless brave boy spent his childhood playing with wild animals and lion cubs. It was this very child who later grew up to rule this vast stretch of land and came to be known as Emperor Bharat.
                        </p>
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
            <section className="py-16 bg-gradient-to-r from-amber-400 to-orange-400">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready for Your Spiritual Journey?
                    </h2>
                    <p className="text-white/95 font-serif text-lg md:text-xl leading-relaxed">
                        "Though the ferocity of time & invaders have destroyed every trace of the physical existence of Kanv Ashram on ground, the great poet Kalidas made Kanvashram and all those associated with it immortal in his world famous literary creation 'Abighyan Shakuntalam'."
                    </p>
                    <Button
                        onClick={handleShowDirections}
                        className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg font-semibold"
                        size="lg"
                    >
                        <Navigation className="w-5 h-5 mr-2" />
                        Get Directions on Google Maps
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default AboutKanvashram;