'use client';

import { useState } from "react";
import React from "react";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);


    const faqs = [
        {
            question: "Is yoga practice conducted in the Ashram?",
            answer:
                "Yes, the Ashram offers daily yoga sessions including Hatha Yoga, Pranayama, and Yoga Nidra for all residents and visitors.",
            image: "https://images.unsplash.com/photo-1594737625785-38fa83c5113b?auto=format&fit=crop&w=600&q=80", // yoga image
        },
        {
            question: "Is accommodation available in the Ashram?",
            answer:
                "Yes, the Ashram provides stay facilities for students and visitors in a peaceful, eco-friendly environment with clean and comfortable rooms.",
            image: "https://images.unsplash.com/photo-1600185365235-3b9d30e1b1c7?auto=format&fit=crop&w=600&q=80", // stay image
        },
        {
            question: "What is the daily routine in the Ashram?",
            answer:
                "The daily schedule includes meditation, yoga practices, Ayurvedic therapies, study, meals, and community activities to balance body, mind, and spirit.",
            image: "https://images.unsplash.com/photo-1559336191-73a8df1cfcad?auto=format&fit=crop&w=600&q=80", // routine image
        },
        {
            question: "Does the Ashram provide Ayurvedic treatments?",
            answer:
                "Yes, the Ashram offers Ayurveda classes, therapies, and consultations as part of the holistic wellness approach.",
            image: "https://images.unsplash.com/photo-1588776814546-bc784345d1b3?auto=format&fit=crop&w=600&q=80", // ayurveda image
        },
        {
            question: "What are the objectives of the Ashram?",
            answer:
                "The Ashram aims to preserve spiritual and cultural heritage, promote yoga and Ayurveda, encourage research, protect the environment, and support community development.",
            image: "https://images.unsplash.com/photo-1606326552078-1e1785a1d6b4?auto=format&fit=crop&w=600&q=80", // goals image
        },
        {
            question: "Can visitors participate in cultural activities?",
            answer:
                "Yes, visitors can join meditation sessions, folk performances, spiritual discourses, and workshops conducted at the Ashram.",
            image: "https://images.unsplash.com/photo-1542736667-069246bdbc9d?auto=format&fit=crop&w=600&q=80", // cultural activities image
        },
        {
            question: "Where is Kanva Ashram located?",
            answer:
                "Kanva Ashram is located near Kotdwar, Uttarakhand, in a serene forested area along the sacred Malini River, about 50 km from Haridwar.",
            image: "https://images.unsplash.com/photo-1601758173929-1c6b5dc5c9a1?auto=format&fit=crop&w=600&q=80", // location image
        },
        {
            question: "What makes the Ashram unique?",
            answer:
                "The Ashram combines Vedic traditions, yoga, Ayurveda, and modern education in a peaceful natural environment, fostering spiritual growth and personal development.",
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80", // unique image
        },
    ];

    const defaultImage =
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80"; // default image

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8 px-4 md:px-0 my-7">
                <img
                    className="max-w-sm w-full rounded-xl h-auto object-cover hidden md:block"
                    src={openIndex !== null ? faqs[openIndex].image : defaultImage}
                    alt="Ashram"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-semibold">Looking for answers?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-4">
                        Explore the frequently asked questions about Gurukul Kanvashram, its activities, and facilities.
                    </p>

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-slate-200 py-4 cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">{faq.question}</h3>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                                >
                                    <path
                                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                                        stroke="#1D293D"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <p
                                className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index
                                        ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                                        : "opacity-0 max-h-0 -translate-y-2"
                                    }`}
                            >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Faqs;