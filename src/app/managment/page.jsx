'use client';
import React, { useEffect } from 'react';

const KanvashramManagment = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-heritage-fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.heritage-animate').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const members = [
        { sno: 1, name: "Swami Vishwapa Jayant Saraswati", status: "Chief Preceptor / Founder" },
        { sno: 2, name: "Swami Chidanand Saraswati", status: "President / Patron" },
        { sno: 3, name: "Bhaktawar Singh", status: "Vice President" },
        { sno: 4, name: "Dr. Dharmendra Kumar Balyan", status: "Secretary" },
        { sno: 5, name: "Rajpal Singh", status: "Joint Secretary" },
        { sno: 6, name: "Nancy Vashistha Tripathi", status: "Treasurer" },
        { sno: 7, name: "Sadhvi Bhagwati Saraswati", status: "Member" },
        { sno: 8, name: "Vimal Wadhawan (Yogacharya)", status: "Member" },
        { sno: 9, name: "Dheer Singh", status: "Member" },
        { sno: 10, name: "Deepak Kumar Sharma", status: "Member" },
        { sno: 11, name: "Gurmeet Singh Oberai", status: "Member" },
        { sno: 12, name: "Rajeev Balyan", status: "Member" },
        { sno: 13, name: "Acharya (Ex-officio)", status: "Member" },
    ];

    return (
        <div className="min-h-screen bg-amber-50 bg-opacity-100 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%221%22%20/%3E%3C/filter%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20filter%3D%22url%28%23noise%29%22%20opacity%3D%220.1%22%20/%3E%3C/svg%3E')]">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:wght@400;500;600&display=swap');
                
                .heritage-animate {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s ease-out;
                }
                
                .animate-heritage-fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .parchment-effect {
                    background: linear-gradient(to bottom, #fef9e7 0%, #f9e8c9 100%);
                    position: relative;
                }
                
                .parchment-effect::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%221%22%20/%3E%3C/filter%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20filter%3D%22url%28%23noise%29%22%20opacity%3D%220.3%22%20/%3E%3C/svg%3E');
                    opacity: 0.1;
                    pointer-events: none;
                }
                
                .vintage-border {
                    border: 8px solid transparent;
                    border-image: url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%2C0%20L100%2C0%20L100%2C100%20L0%2C100%20Z%22%20fill%3D%22none%22%20stroke%3D%22%23a16207%22%20stroke-width%3D%222%22%20stroke-dasharray%3D%225%2C5%22%20/%3E%3C/svg%3E') 30 round;
                }
                
                .heritage-shadow {
                    box-shadow: 
                        0 4px 20px rgba(139, 69, 19, 0.15),
                        0 1px 5px rgba(139, 69, 19, 0.1),
                        inset 0 0 30px rgba(244, 164, 96, 0.1);
                }
            `}</style>

            <section className="relative h-screen md:h-screen bg-cover bg-center flex items-center justify-center heritage-animate">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(90, 70, 50, 0.4), rgba(70, 50, 30, 0.6)), url("/samiti.jpg")'
                    }}
                >
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto bg-transparent">
                    <p className="text-lg md:text-xl font-playfair text-white italic">
                        KANVASHRAM VIKAS SAMITI
                    </p>
                    <img src="/underline.png" className='w-96' />
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <div className="heritage-animate parchment-effect rounded-2xl heritage-shadow border-4 border-amber-200 border-opacity-50 p-6 md:p-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-400 border-opacity-50"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-400 border-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-400 border-opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-400 border-opacity-50"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-amber-900 text-center mb-8 border-b-2 border-amber-300 pb-4">
                            Historical Foundation
                        </h2>

                        <div className="text-lg md:text-xl leading-relaxed font-playfair text-amber-800 space-y-6">
                            <p className="first-letter:text-5xl first-letter:font-cinzel first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-amber-900">
                                Consequent to the inauguration of the symbolic monument authenticating the existence of Kanvashram
                                by the then Hon'ble Chief Minister of Uttar Pradesh, Shri Nityanand Swami on 25th Dec 1991,
                                the local intelligentsia and social workers felt the need to form a society for the development
                                of this ancient heritage site.
                            </p>

                            <p>
                                Thus, the <span className="font-semibold text-amber-900">Kanvashram Vikas Samiti</span> was formed
                                and registered under the Societies Registration Act of 1860. The primary objective was to preserve,
                                protect, and promote the rich cultural heritage associated with the great sage Rishi Kanva,
                                who established his Ashram here centuries ago.
                            </p>

                            <p className="bg-amber-100 bg-opacity-50 p-4 rounded-lg border-l-4 border-amber-500 italic">
                                This sacred land where Rishi Kanva mentored the legendary King Bharat, after whom our nation
                                BHARAT VARSH was named, deserves utmost reverence and conservation for future generations.
                            </p>

                            <p>
                                The Samiti has been actively working with archaeological departments, historical researchers,
                                and government authorities to ensure that this significant piece of Indian history remains
                                protected and accessible to scholars, devotees, and visitors from around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Members Table Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="heritage-animate">
                    <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-amber-900 text-center mb-8 border-b-2 border-amber-300 pb-4">
                        Executive Members
                    </h2>

                    <div className="parchment-effect rounded-xl heritage-shadow border-4 border-amber-200 border-opacity-50 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full font-playfair">
                                <thead>
                                    <tr className="bg-amber-900 bg-opacity-90 text-amber-50">
                                        <th className="p-4 text-left font-cinzel font-semibold border-r border-amber-700">S.NO.</th>
                                        <th className="p-4 text-left font-cinzel font-semibold border-r border-amber-700">NAME</th>
                                        <th className="p-4 text-left font-cinzel font-semibold border-r border-amber-700">STATUS</th>
                                        <th className="p-4 text-left font-cinzel font-semibold">REMARK</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.map((member, index) => (
                                        <tr
                                            key={member.sno}
                                            className={`border-b border-amber-200 transition-colors duration-200 hover:bg-amber-100 hover:bg-opacity-50 ${index % 2 === 0 ? 'bg-amber-50 bg-opacity-30' : 'bg-white bg-opacity-20'
                                                }`}
                                        >
                                            <td className="p-4 border-r border-amber-200 font-semibold text-amber-900">{member.sno}</td>
                                            <td className="p-4 border-r border-amber-200 text-amber-800">{member.name}</td>
                                            <td className="p-4 border-r border-amber-200">
                                                <span className={`px-3 py-1 rounded-full text-sm ${member.status.includes('President') || member.status.includes('Secretary')
                                                    ? 'bg-amber-200 text-amber-900'
                                                    : member.status.includes('Member')
                                                        ? 'bg-amber-100 text-amber-800'
                                                        : 'bg-amber-150 text-amber-700'
                                                    }`}>
                                                    {member.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-amber-700 italic">{member.remark}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="font-playfair text-amber-700 italic text-sm">
                            * The Samiti comprises dedicated individuals committed to preserving Kanvashram's heritage
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-amber-900 bg-opacity-95 text-amber-50 py-8 mt-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="font-cinzel text-2xl mb-4">Kanvashram Vikas Samiti</div>
                    <p className="font-playfair text-amber-200 mb-2">
                        Registered under Societies Registration Act, 1860
                    </p>
                    <p className="font-playfair text-amber-300 text-sm">
                        Dedicated to the preservation of ancient Indian heritage and culture
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default KanvashramManagment;