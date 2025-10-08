import { cn } from "@/lib/utils";
import Link from "next/link";
import { Building, Leaf, FlaskRound, Sprout, BookOpen, HeartPulse } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const AshramBranches = () => {
  const branches = [
    {
      href: "/branches/kanvashram",
      imgSrc: "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Kanvashram Main Ashram",
      bgColor: "bg-[#f7f4ef]",
      text: "Spiritual & Cultural Center",
      title: "Kanvashram",
      icon: <Building size={20} />,
      titleBg: "bg-[#88734C] text-white/90",
      overlay: true,
    },
    {
      href: "/branches/parmarth-ashram",
      imgSrc: "https://images.pexels.com/photos/2041408/pexels-photo-2041408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Parmarth Ashram",
      bgColor: "bg-green-100",
      text: "Peace & Spiritual Harmony",
      title: "Parmarth Ashram",
      icon: <Leaf size={20} />,
      titleBg: "bg-[#2e7d32] text-white",
      overlay: false,
    },
    {
      href: "/branches/yogiraj-pharmacy",
      imgSrc: "https://images.pexels.com/photos/161599/pills-medication-tablets-drug-161599.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Yogiraj Pharmacy",
      bgColor: "bg-amber-100",
      text: "Herbal & Ayurvedic Medicines",
      title: "Yogiraj Pharmacy",
      icon: <FlaskRound size={20} />,
      titleBg: "bg-[#795548] text-white",
      overlay: false,
    },
    {
      href: "/branches/krishi-farm",
      imgSrc: "https://images.pexels.com/photos/158827/farm-tractor-agriculture-farmland-158827.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Krishi Farm",
      bgColor: "bg-lime-100",
      text: "Organic & Sustainable Farming",
      title: "Krishi Farm",
      icon: <Sprout size={20} />,
      titleBg: "bg-[#4caf50] text-white",
      overlay: false,
    },
    {
      href: "/branches/gurukul-academy",
      imgSrc: "https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Gurukul International Academy",
      bgColor: "bg-yellow-100",
      text: "Modern Education with Vedic Roots",
      title: "Gurukul International Academy",
      icon: <BookOpen size={20} />,
      titleBg: "bg-[#6d4c41] text-white",
      overlay: false,
    },
    {
      href: "/branches/ayurvedic-treatment",
      imgSrc: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Ayurvedic Treatment Center",
      bgColor: "bg-rose-100",
      text: "Traditional Healing & Panchkarma",
      title: "Ayurvedic Treatment",
      icon: <HeartPulse size={20} />,
      titleBg: "bg-[#b71c1c] text-white",
      overlay: false,
    },
  ];

  return (
    <section id="ashram-branches" className="bg-white rounded-3xl p-4 my-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between w-full">
        <div className="flex flex-col my-12 w-full items-start justify-start gap-4">
          <div className="flex flex-col md:flex-row gap-2 items-start w-full justify-between">
            <h2 className="relative font-serif text-balance text-4xl md:text-5xl font-sans font-semibold max-w-xl text-left leading-[1em] text-[#88734C]">
              Ashram Branches <br />
              <span>
                <Building className="inline-flex rotate-12 text-[#88734C]" size={40} strokeWidth={2} />
              </span>{" "}
            </h2>
            <p className="max-w-sm font-medium text-md text-neutral/60">
              Discover our various branches dedicated to <strong className="text-[#88734C]">spiritual growth, education, health, and sustainability</strong>.
              Each center contributes uniquely to the mission of holistic living envisioned by the Ashram.
            </p>
          </div>
          <div className="flex flex-row gap-6 items-start justify-start flex-wrap text-[#7b8993]">
            <p className="text-base whitespace-nowrap font-medium">Serving Communities Nationwide</p>
            <p className="text-base whitespace-nowrap font-medium">Promoting Vedic Culture & Wellness</p>
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
        {branches.map((branch, index) => (
          <Link
            key={index}
            href={branch.href}
            className={cn(
              "overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out relative h-[330px] rounded-xl",
              branch.bgColor
            )}
          >
            {branch.overlay ? (
              <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/40 text-white gap-2">
                <p className="text-base ml-20 rotate-[-4deg] origin-top-left">{branch.text}</p>
                <h3
                  className={cn(
                    "text-2xl font-semibold flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-sm ml-20 rotate-[-4deg] origin-top-left",
                    branch.titleBg
                  )}
                >
                  {branch.icon} {branch.title}
                </h3>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-between h-full px-1 py-3">
                <div className="flex flex-col items-center justify-center gap-2 rotate-[-4deg] origin-top-right -mt-2">
                  <p className="text-base-content">{branch.text}</p>
                  <h3
                    className={cn(
                      "text-2xl font-semibold text-center px-6 py-2 rounded-full flex items-center gap-2",
                      branch.titleBg
                    )}
                  >
                    {branch.icon} {branch.title}
                  </h3>
                </div>
                <div className="w-full h-full rounded-xl overflow-hidden mt-4">
                  <img src={branch.imgSrc} alt={branch.alt} className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            )}
            {branch.overlay && <img src={branch.imgSrc} alt={branch.alt} className="w-full h-full object-cover rounded-xl" />}
          </Link>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {branches.map((branch, index) => (
              <CarouselItem key={index} className="px-2">
                <Link
                  href={branch.href}
                  className={cn(
                    "overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out relative h-[250px] rounded-xl",
                    branch.bgColor
                  )}
                >
                  {branch.overlay ? (
                    <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/40 text-white gap-2 rounded-xl">
                      <p className="text-base ml-4 rotate-[-4deg] origin-top-left">{branch.text}</p>
                      <h3
                        className={cn(
                          "text-2xl font-semibold flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm rotate-[-4deg] origin-top-left ml-4",
                          branch.titleBg
                        )}
                      >
                        {branch.icon} {branch.title}
                      </h3>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-between h-full px-1 py-3">
                      <div className="flex flex-col items-center justify-center gap-2 rotate-[-4deg] origin-top-right -mt-2">
                        <p className="text-base-content">{branch.text}</p>
                        <h3
                          className={cn(
                            "text-2xl font-semibold text-center px-3 py-2 rounded-full flex items-center gap-2 bg-black text-white"
                          )}
                        >
                          {branch.icon} {branch.title}
                        </h3>
                      </div>
                      <div className="w-full h-full rounded-xl overflow-hidden mt-4">
                        <img src={branch.imgSrc} alt={branch.alt} className="w-full h-[250px] object-cover rounded-xl" />
                      </div>
                    </div>
                  )}
                  {branch.overlay && (
                    <img src={branch.imgSrc} alt={branch.alt} className="w-full h-[350px] object-cover rounded-xl" />
                  )}
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-6" />
          <CarouselNext className="mr-6" />
        </Carousel>
      </div>
    </section>
  );
};
