"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  BookOpen,
  Mountain,
  Heart,
  Users,
  Leaf,
  Globe,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  School,
  Sprout,
  HeartHandshake,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, Variants } from "framer-motion"
import Link from "next/link"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0.1, // Reduced from 0.3
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 15, opacity: 0 }, // Reduced y from 20
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }, // Reduced from 0.6
    },
  }

  const objectives = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Spiritual Preservation",
      description: "Protecting and promoting the ancient heritage of Kanvashram and the legacy of Sage Kanva's hermitage. Reviving the Rishi tradition and Vedic culture.",
      position: "left",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Yoga & Ayurveda",
      description: "Spreading health and balanced living through yoga, pranayama, meditation, and Ayurvedic lifestyle. Organizing national and international yoga programs.",
      position: "left",
    },
    {
      icon: <School className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Education & Research",
      description: "Encouraging study and research on Vedic education, Sanskrit, Vedanta, Yoga, and Ayurveda. Connecting students with ancient Indian knowledge traditions.",
      position: "left",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Environmental Protection",
      description: "Protecting forests and natural resources around the ashram. Promoting organic farming, plantation drives, and Ganga conservation activities.",
      position: "right",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Cultural Tourism",
      description: "Developing Kanvashram as a major spiritual destination. Offering immersive experiences of local traditions, folk art, and natural beauty.",
      position: "right",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Community Development",
      description: "Supporting education, health, and sanitation in nearby villages. Empowering rural youth through yoga, sports, and skill development programs.",
      position: "right",
    },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-4 px-4 bg-gradient-to-b from-[#F2F2EB] to-[#F8F8F2] text-[#202e44] overflow-hidden relative"
    >
      {/* Optimized background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#88734C]/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#A9BBC8]/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      {/* Reduced floating animation complexity */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#88734C]/30"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2, // Reduced from 3
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#A9BBC8]/30"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2.5, // Reduced from 4
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">About Kanvashram</h2>
          <motion.div
            className="w-24 h-1 bg-[#88734C]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Reduced from 1s and 0.5 delay
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-12 text-[#202e44]/80" variants={itemVariants}>
          Nestled 15 km from Kotdwar in Uttarakhand&apos;s dense forests, Kanvashram stands on the sacred ground of Sage Kanva&apos;s hermitage,
          where King Dushyant and Shakuntala&apos;s son Bharat was born. Founded by Swami Vishwapal Saraswati in 1972, we continue the
          ancient tradition of spiritual practice, yoga, and Vedic education in this historic setting.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"> {/* Reduced gap from 8 to 6 */}
          <div className="space-y-12"> {/* Reduced from 16 */}
            {objectives
              .filter((objective) => objective.position === "left")
              .map((objective, index) => (
                <ObjectiveItem
                  key={`left-${index}`}
                  icon={objective.icon}
                  secondaryIcon={objective.secondaryIcon}
                  title={objective.title}
                  description={objective.description}
                  variants={itemVariants}
                  delay={index * 0.1} // Reduced from 0.2
                  direction="left"
                />
              ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-6 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }} // Reduced from 0.8 and 0.3
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} // Reduced scale effect
              >
                <img
                  src="/smark.jpg"
                  alt="Modern House"
                  className="w-full h-full object-cover min-h-screen"
                  loading="eager" // Added eager loading
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#202e44]/50 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }} // Reduced from 0.8 and 0.9
                >
                  <Link href="/kanvashram">
                    <motion.button
                      className="bg-white text-[#202e44] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Our Heritage <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-[#A9BBC8] rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }} // Reduced from 0.8 and 0.6
              ></motion.div>

              {/* Simplified floating elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[#88734C]/10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }} // Reduced from 1s and 0.9
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#A9BBC8]/15"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }} // Reduced from 1s and 1.1
                style={{ y: y2 }}
              ></motion.div>

              {/* Simplified dots animation */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#88734C]"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          </div>

          <div className="space-y-12"> {/* Reduced from 16 */}
            {objectives
              .filter((objective) => objective.position === "right")
              .map((objective, index) => (
                <ObjectiveItem
                  key={`right-${index}`}
                  icon={objective.icon}
                  secondaryIcon={objective.secondaryIcon}
                  title={objective.title}
                  description={objective.description}
                  variants={itemVariants}
                  delay={index * 0.1} // Reduced from 0.2
                  direction="right"
                />
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

interface ObjectiveItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: Variants
  delay: number
  direction: "left" | "right"
}

function ObjectiveItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ObjectiveItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }} // Reduced effect
    >
      <motion.div
        className="flex items-center gap-3 mb-2" // Reduced margin
        initial={{ x: direction === "left" ? -15 : 15, opacity: 0 }} // Reduced from 20
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.1 }} // Reduced from 0.6 and 0.2
      >
        <motion.div
          className="text-[#88734C] bg-[#88734C]/10 p-2 rounded-lg transition-colors duration-200 group-hover:bg-[#88734C]/20 relative" // Reduced padding and duration
          whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }} // Simplified animation
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-lg font-medium text-[#202e44] group-hover:text-[#88734C] transition-colors duration-200"> {/* Reduced text size */}
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-[#202e44]/80 leading-relaxed pl-10" // Reduced padding
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }} // Reduced from 0.6 and 0.4
      >
        {description}
      </motion.p>
    </motion.div>
  )
}