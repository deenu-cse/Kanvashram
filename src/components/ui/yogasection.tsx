import { cn } from "@/lib/utils";
import Link from 'next/link';
import { Flower, HeartPulse, BookOpen, Leaf } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const YogaComponent = () => {
  const cards = [
    {
      href: "/programs/yoga",
      imgSrc: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Yoga Practice",
      bgColor: "bg-accent/10",
      text: "Daily Yoga & Meditation",
      title: "Hatha & Pranayama",
      icon: <Flower size={20} />,
      titleBg: "bg-[#88734C] text-white/90",
      overlay: true,
    },
    {
      href: "/programs/ayurveda",
      imgSrc: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Ayurveda Wellness",
      bgColor: "bg-green-100",
      text: "Ayurveda Healing",
      title: "Detox & Rejuvenation",
      icon: <HeartPulse size={20} />,
      titleBg: "bg-base-content/90 text-white",
      overlay: false,
    },
    {
      href: "/programs/education",
      imgSrc: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Vedic Education",
      bgColor: "bg-yellow-100",
      text: "Vedic Knowledge",
      title: "Yoga Research",
      icon: <BookOpen size={20} />,
      titleBg: "bg-base-content/90 text-white",
      overlay: false,
    },
    {
      href: "/programs/nature",
      imgSrc: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Nature Retreat",
      bgColor: "bg-blue-100",
      text: "Eco & Spiritual Living",
      title: "Forest Retreats",
      icon: <Leaf size={20} />,
      titleBg: "bg-white/80",
      overlay: false,
    },
    {
      href: "/programs/meditation",
      imgSrc: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Meditation",
      bgColor: "bg-pink-100",
      text: "Mind & Soul",
      title: "Meditation Programs",
      icon: <Flower size={20} />,
      titleBg: "bg-white/80",
      overlay: false,
    },
  ];

  return (
    <section id='yoga-programs' className='bg-white rounded-3xl p-4 my-10 max-w-6xl mx-auto'>
      <div className='flex flex-col md:flex-row items-end justify-between w-full'>
        <div className='flex flex-col my-12 w-full items-start justify-start gap-4'>
          <div className='flex flex-col md:flex-row gap-2 items-start w-full justify-between'>
            <h2 className="relative font-serif text-balance text-4xl md:text-5xl font-sans font-semibold max-w-xl text-left leading-[1em] text-[#88734C]">
              Yoga & Wellness <br />
              <span>
                <Flower className="inline-flex fill-accent/10 rotate-12 text-[#88734C]" size={40} strokeWidth={2} />
              </span>{" "}
              Programs
            </h2>
            <p className='max-w-sm font-medium text-md text-neutral/60'>
              Experience holistic living with <strong className="text-[#88734C]">Yoga, Pranayama, Ayurveda & Meditation</strong>
              at Gurukul Kanvashram, where ancient Vedic wisdom meets modern wellness practices.
            </p>
          </div>
          <div className='flex flex-row gap-6 items-start justify-start flex-wrap text-[#7b8993]'>
            <p className='text-base whitespace-nowrap font-medium'>+10,000 Visitors Annually</p>
            <p className='text-base whitespace-nowrap font-medium'>Recognized for Yoga & Ayurveda</p>
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className={cn(
              "overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out relative h-[330px] rounded-xl",
              card.bgColor,
              index === 0 ? "md:col-span-2 hover:rotate-1" : index === 2 ? "hover:-rotate-3" : index === 3 ? "hover:rotate-4" : "hover:-rotate-3",
            )}
          >
            {card.overlay ? (
              <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/40 text-white gap-2">
                <p className="text-base ml-20 rotate-[-4deg] origin-top-left">{card.text}</p>
                <h3 className={cn("text-2xl font-semibold flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-sm ml-20 rotate-[-4deg] origin-top-left", card.titleBg)}>
                  {card.icon} {card.title}
                </h3>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-between h-full px-1 py-3">
                <div className="flex flex-col items-center justify-center gap-2 rotate-[-4deg] origin-top-right -mt-2">
                  <p className="text-base-content">{card.text}</p>
                  <h3 className={cn("text-2xl font-semibold text-center px-6 py-2 rounded-full flex items-center gap-2", card.titleBg)}>
                    {card.icon} {card.title}
                  </h3>
                </div>
                <div className="w-full h-full rounded-xl overflow-hidden mt-4">
                  <img src={card.imgSrc} alt={card.alt} className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            )}
            {card.overlay && <img src={card.imgSrc} alt={card.alt} className="w-full h-full object-cover rounded-xl" />}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="px-2">
                <Link
                  href={card.href}
                  className={cn(
                    "overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out relative h-[250px] rounded-xl",
                    card.bgColor,
                    index === 0 ? "hover:rotate-1" : index === 2 ? "hover:-rotate-3" : index === 3 ? "hover:rotate-4" : "hover:-rotate-3",
                  )}
                >
                  {card.overlay ? (
                    <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/40 text-white gap-2 rounded-xl">
                      <p className="text-base ml-4 rotate-[-4deg] origin-top-left">{card.text}</p>
                      <h3 className={cn("text-2xl font-semibold flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm rotate-[-4deg] origin-top-left ml-4", card.titleBg)}>
                        {card.icon} {card.title}
                      </h3>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-between h-full px-1 py-3">
                      <div className="flex flex-col items-center justify-center gap-2 rotate-[-4deg] origin-top-right -mt-2">
                        <p className="text-base-content">{card.text}</p>
                        <h3 className="text-2xl font-semibold text-center px-3 py-2 rounded-full flex items-center gap-2 bg-black text-white">
                          {card.icon} {card.title}
                        </h3>
                      </div>
                      <div className="w-full h-full rounded-xl overflow-hidden mt-4">
                        <img src={card.imgSrc} alt={card.alt} className="w-full h-[250px] object-cover rounded-xl" />
                      </div>
                    </div>
                  )}
                  {card.overlay && <img src={card.imgSrc} alt={card.alt} className="w-full h-[350px] object-cover rounded-xl" />}
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-6"/>
          <CarouselNext className="mr-6"/>
        </Carousel>
      </div>
    </section>
  );
};