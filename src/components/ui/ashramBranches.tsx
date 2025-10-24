"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Building, Leaf, FlaskRound, Sprout, BookOpen, HeartPulse, GraduationCap, Microscope, Mountain, Users} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const AshramBranches = () => {
  const branches = [
    {
      href: "/branches/kanvashram",
      imgSrc: "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Kanvashram Main Ashram",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      text: "Spiritual & Cultural Center",
      title: "Kanvashram",
      icon: <Leaf className="w-5 h-5" />,
      titleColor: "text-amber-800",
      borderColor: "border-amber-200",
      gradient: "from-amber-400 to-orange-500",
      description: "The heart of our spiritual journey, where ancient wisdom meets modern seekers",
      features: ["Meditation", "Yoga", "Spiritual Discourses"],
      symbol: "🕉️"
    },
    {
      href: "/branches/parmarth-ashram",
      imgSrc: "/smarknew.jpg",
      alt: "Parmarth Ashram",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      text: "Peace & Spiritual Harmony",
      title: "Parmarth Ashram",
      icon: <Leaf className="w-5 h-5" />,
      titleColor: "text-emerald-800",
      borderColor: "border-emerald-200",
      gradient: "from-emerald-400 to-green-500",
      description: "Nestled in nature for deep meditation and spiritual practices",
      features: ["Silent Retreats", "Nature Walks", "Meditation"],
      symbol: "🌿"
    },
    {
      href: "/branches/yogiraj-pharmacy",
      imgSrc: "https://i.pinimg.com/736x/a7/ce/2d/a7ce2d3f92fe2216ad2d2e876fec9ab1.jpg",
      alt: "Yogiraj Pharmacy",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      text: "Herbal & Ayurvedic Medicines",
      title: "Yogiraj Pharmacy",
      icon: <FlaskRound className="w-5 h-5" />,
      titleColor: "text-blue-800",
      borderColor: "border-blue-200",
      gradient: "from-blue-400 to-cyan-500",
      description: "Ancient healing wisdom through pure Ayurvedic formulations",
      features: ["Herbal Medicine", "Ayurvedic Consultations", "Panchakarma"],
      symbol: "🌱"
    },
    {
      href: "/branches/krishi-farm",
      imgSrc: "https://i.pinimg.com/736x/4a/17/be/4a17bed3b76e45e96d1f370be265a2bb.jpg",
      alt: "Krishi Farm",
      bgColor: "bg-gradient-to-br from-lime-50 to-green-50",
      text: "Organic & Sustainable Farming",
      title: "Krishi Farm",
      icon: <Sprout className="w-5 h-5" />,
      titleColor: "text-lime-800",
      borderColor: "border-lime-200",
      gradient: "from-lime-400 to-green-500",
      description: "Growing pure, organic food in harmony with nature",
      features: ["Organic Farming", "Cow Sanctuary", "Farm Education"],
      symbol: "🌾"
    },
    {
      href: "/branches/gurukul-academy",
      imgSrc: "https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Gurukul International Academy",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      text: "Modern Education with Vedic Roots",
      title: "Gurukul International Academy",
      icon: <BookOpen className="w-5 h-5" />,
      titleColor: "text-violet-800",
      borderColor: "border-violet-200",
      gradient: "from-violet-400 to-purple-500",
      description: "Blending ancient wisdom with contemporary education",
      features: ["Vedic Studies", "Modern Curriculum", "Yoga Training"],
      symbol: "📚"
    },
    {
      href: "/branches/ayurvedic-treatment",
      imgSrc: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Ayurvedic Treatment Center",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
      text: "Traditional Healing & Panchkarma",
      title: "Ayurvedic Treatment",
      icon: <HeartPulse className="w-5 h-5" />,
      titleColor: "text-rose-800",
      borderColor: "border-rose-200",
      gradient: "from-rose-400 to-pink-500",
      description: "Holistic healing through authentic Ayurvedic therapies",
      features: ["Panchakarma", "Therapeutic Massage", "Diet Therapy"],
      symbol: "💆"
    },
    {
      href: "/branches/yogiraj-college",
      imgSrc: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Yogiraj College of Pharmacy",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      text: "Pharmacy Education & Research",
      title: "Yogiraj College of Pharmacy",
      icon: <GraduationCap className="w-5 h-5" />,
      titleColor: "text-indigo-800",
      borderColor: "border-indigo-200",
      gradient: "from-indigo-400 to-blue-500",
      description: "Pioneering pharmaceutical education with spiritual foundation",
      features: ["B.Pharma", "M.Pharma", "Research Programs"],
      symbol: "🎓"
    },
    {
      href: "/branches/research-centre",
      imgSrc: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Research Centre",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      text: "Ayurvedic Research & Development",
      title: "Research Centre",
      icon: <Microscope className="w-5 h-5" />,
      titleColor: "text-teal-800",
      borderColor: "border-teal-200",
      gradient: "from-teal-400 to-cyan-500",
      description: "Scientific validation of ancient Ayurvedic knowledge",
      features: ["Clinical Research", "Herbal Studies", "Publication"],
      symbol: "🔬"
    }
  ];

  return (
    <section id="ashram-branches" className="relative py-6 bg-gradient-to-b from-slate-50 to-amber-50/30 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 text-4xl">🌿</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🌸</div>
        <div className="absolute bottom-32 right-10 text-6xl">📿</div>
        <div className="absolute top-1/2 left-20 text-4xl">🧘</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            Sacred Spaces
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our divine ecosystem of spiritual centers, each dedicated to nurturing 
            <span className="text-amber-600 font-medium"> body, mind, and soul </span>
            through ancient wisdom and modern practices
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {branches.map((branch, index) => (
            <Link
              key={index}
              href={branch.href}
              className={cn(
                "group relative overflow-hidden rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-80",
                branch.borderColor,
                branch.bgColor
              )}
            >
              <div className="absolute inset-0">
                <img 
                  src={branch.imgSrc} 
                  alt={branch.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <div className="absolute top-6 right-6 text-2xl opacity-80">
                  {branch.symbol}
                </div>

                <div className="flex items-center mb-3">
                  <div className={cn(
                    "p-2 rounded-full bg-white/20 backdrop-blur-sm mr-3 group-hover:scale-110 transition-transform duration-300",
                    branch.titleColor
                  )}>
                    {branch.icon}
                  </div>
                  <h3 className={cn(
                    "text-xl font-semibold font-serif",
                    branch.titleColor
                  )}>
                    {branch.title}
                  </h3>
                </div>
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  {branch.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {branch.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border",
                        branch.borderColor,
                        "bg-white/20 text-white/90 border-white/30"
                      )}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className={cn(
                  "w-full h-1 rounded-full bg-gradient-to-r",
                  branch.gradient
                )} />
              </div>

              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                branch.gradient,
                "mix-blend-overlay"
              )} />
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {branches.map((branch, index) => (
                <CarouselItem key={index} className="px-3">
                  <Link
                    href={branch.href}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border-2 h-64",
                      branch.borderColor,
                      branch.bgColor
                    )}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={branch.imgSrc} 
                        alt={branch.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
                      <div className="flex items-center mb-2">
                        <div className={cn(
                          "p-1.5 rounded-full bg-white/20 backdrop-blur-sm mr-2",
                          branch.titleColor
                        )}>
                          {branch.icon}
                        </div>
                        <h3 className={cn(
                          "text-lg font-semibold font-serif",
                          branch.titleColor
                        )}>
                          {branch.title}
                        </h3>
                      </div>
                      <p className="text-white/90 text-xs mb-3 leading-relaxed">
                        {branch.description}
                      </p>
                      <div className={cn(
                        "w-full h-1 rounded-full bg-gradient-to-r",
                        branch.gradient
                      )} />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-4 bg-white/80 backdrop-blur-sm border-0 text-slate-700 hover:bg-white" />
            <CarouselNext className="mr-4 bg-white/80 backdrop-blur-sm border-0 text-slate-700 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};