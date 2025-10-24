'use client';

import { MapPin, BookOpen, ExternalLink } from 'lucide-react';
import { Separator } from '../ui/separator';
import Link from 'next/link';

const Footer = () => {
    const openGoogleMaps = () => {
        window.open(
            'https://www.google.com/maps/place/Kanvashram./@29.792678,78.459305,38762m/data=!3m1!1e3!4m6!3m5!1s0x390965271842b213:0x74ca34785f95fa60!8m2!3d29.7926781!4d78.4593047!16s%2Fg%2F1vk6xlhh?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D',
            '_blank'
        );
    };

    const books = [
        {
            title: "Ancient Historical Heritage of Bharat Varsh English",
            description: "The Wisdom of Kanvashram", 
            image: "/book-English.jpg",
            buyLink: "https://www.flipkart.com/kanvashram-birth-place-emperor-bharat-ancient-historical-heritage-varsh/p/itm06ece28556014?pid=9789334006216&marketplace=FLIPKART&cmpid=product.share.pp&_refId=PP.40452fcf-c8b1-4d85-92cf-cc8261f856ff.9789334006216&_appId=WA"
        },
        {
            title: "Kanvashram Chakravarti Samrat Bharat ki Janamsthali",
            description: "BharatVarsha ki ek Pauranik evam Etihasik Dharohar",
            image: "/book-Hindi.jpg", 
            buyLink: "https://www.flipkart.com/kanvashram-chakravarti-samrat-bharat-ki-janamsthali-tatha-bharatvarsha-ek-pauranik-evam-etihasik-dharohar/p/itm2413eaa930af6?pid=9789334012095&marketplace=FLIPKART&cmpid=product.share.pp&_refId=PP.b694a59a-927f-4b83-ab3b-9afd75ebe429.9789334012095&_appId=WA"
        }
    ];

    const quickLinks1 = [
        { name: "About Kanvashram Ashram", href: "/kanvashram" },
        { name: "Pay Kanvashram Yoga Ashram", href: "/donate" },
        // { name: "Our Privacy Policy", href: "/privacy-policy" },
        // { name: "Terms & Conditions", href: "/terms-conditions" }
    ];

    const quickLinks2 = [
        { name: "Archaeology", href: "/archaeology" },
        // { name: "Managment", href: "/managment" },
        { name: "Stay", href: "/stay" },
        { name: "Events", href: "/events" }
    ];


    return (
        <footer className="bg-[#836938] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Kanvashram Ashram</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Nestled in the sacred forests near Kotdwar, Kanvashram continues the ancient tradition
                            of spiritual practice, yoga, and Vedic education on the historic grounds of Sage Kanva's hermitage.
                        </p>

                        <div className="mb-6">
                            <div
                                className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors duration-300 group"
                                onClick={openGoogleMaps}
                            >
                                <div className="flex items-center mb-2">
                                    <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
                                    <span className="font-medium">Visit Us</span>
                                    <ExternalLink className="w-4 h-4 ml-2 text-gray-400 group-hover:text-yellow-400" />
                                </div>
                                <p className="text-sm text-gray-300 mb-3">
                                    Kanvashram Yoga Ashram Behind Laxman Jhulla Police Station, Rishikesh
                                </p>
                                <div className="bg-gray-700 rounded h-32 flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">Google Maps View</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Link</h4>
                        <ul className="space-y-2 text-white">
                            {quickLinks2.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
                        <ul className="space-y-2 mb-6 text-white">
                            {quickLinks1.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-yellow-400">Our Books</h4>
                        <div className="space-y-4">
                            {books.map((book, index) => (
                                <div key={index} className="bg-gray-800 rounded-lg p-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-12 h-16 bg-yellow-400/20 rounded flex items-center justify-center">
                                            <img src={book.image} />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-medium text-sm mb-1">{book.title}</h5>
                                            <p className="text-xs text-gray-400 mb-2">{book.description}</p>
                                            <a href={book.buyLink} target="_blank" rel="noopener noreferrer">
                                                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-xs px-3 py-1 rounded transition-colors duration-300 font-medium">
                                                    Buy Now
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
            <div>
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-white text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Kanvashram Ashram. All rights reserved.
                        </div>
                        {/* <div className="flex space-x-6 text-white">
                            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm">
                                Terms of Service
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm">
                                Contact
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;