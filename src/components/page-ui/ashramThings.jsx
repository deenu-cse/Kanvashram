"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const tabs = [
    {
        title: "Spiritual & Cultural Preservation",
        content:
            "To protect and promote the ancient heritage of Kanvashram and Sage Kanva's legacy. To revive Rishi tradition, Vedic culture, and Indian philosophy through authentic practices and sacred rituals.",
        image:
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        icon: "🕉️",
    },
    {
        title: "Yoga & Ayurveda",
        content:
            "Spread health and balanced living through yoga, pranayama, meditation, and Ayurveda. Organize transformative yoga camps, healing workshops, and internationally recognized training programs.",
        image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        icon: "🧘",
    },
    {
        title: "Education & Research",
        content:
            "Encourage deep research on Vedic education, Sanskrit, Vedanta, Yoga, and Ayurveda. Connect students and researchers with ancient Indian knowledge traditions through scholarly programs.",
        image:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        icon: "📚",
    },
    {
        title: "Environmental Protection",
        content:
            "Protect forests, wildlife, sacred Ganga river, and natural resources around the Ashram. Promote sustainable organic farming, tree plantations, and eco-friendly initiatives.",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        icon: "🌿",
    },
    {
        title: "Tourism & Cultural Experience",
        content:
            "Develop Kanvashram as a premier spiritual and cultural destination. Provide immersive experiences of local traditions, ancient folk art, and pristine natural beauty.",
        image:
            "https://images.unsplash.com/photo-1539650116574-75c0c6d73330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        icon: "🏛️",
    },
    {
        title: "Community Development",
        content:
            "Support education, healthcare, and sanitation in nearby villages. Empower youth through yoga training, sports activities, and comprehensive skill development programs.",
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        icon: "🤝",
    },
];

export function AshramThings() {
    return (
        <section className="relative overflow-hidden rounded-[1.75rem] border border-[#e2d5c1]/70 bg-gradient-to-b from-[#F2F2EB] to-[#F8F8F2] p-1 md:p-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4"
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#88734C]">
                        Sacred Mission & Vision
                    </h2>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-[#e2d5c1]/70 overflow-hidden flex flex-col lg:flex-row"
                >
                    <Tabs
                        defaultValue="Spiritual & Cultural Preservation"
                        className="w-full flex flex-col lg:flex-row"
                    >
                        <TabsList className="flex flex-col w-full lg:w-[35%] bg-gradient-to-b from-orange-100/50 to-amber-100/50  space-y-2 h-full rounded-xl">
                            {tabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.title}
                                    value={tab.title}
                                    className="w-full flex items-center gap-3 p-3 bg-white/70 rounded-lg shadow-sm hover:bg-white hover:shadow-md transition-all duration-300 group border border-orange-100/50 hover:border-orange-200 focus:outline-none data-[state=active]:bg-white data-[state=active]:border-orange-300"
                                >
                                    <div className="w-12 h-13 rounded-md py-0 px-0 overflow-hidden shadow-sm flex-shrink-0">
                                        <Image
                                            src={tab.image}
                                            alt={tab.title}
                                            width={48}
                                            height={48}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <span className="font-semibold text-gray-800 text-sm truncate">
                                            {tab.title}
                                        </span>
                                    </div>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <div className="w-full lg:w-3/5 p-6 lg:p-10">
                            {tabs.map((tab) => (
                                <TabsContent key={tab.title} value={tab.title}>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <h3 className="font-serif text-2xl font-semibold text-[#88734C] border-b border-[#e2d5c1] pb-2">
                                                {tab.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            <p className="flex-1 text-[#4b4430] leading-relaxed text-lg">
                                                {tab.content}
                                            </p>

                                            <motion.div
                                                className="w-full md:w-80 h-[350px] rounded-xl overflow-hidden shadow-md border border-[#e2d5c1]/70 relative group"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Image
                                                    src={tab.image}
                                                    alt={tab.title}
                                                    width={400}
                                                    height={300}
                                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    );
}
