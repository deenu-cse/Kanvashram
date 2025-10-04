'use client';

import { useState, useEffect, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const googleTestimonials = [
  {
    name: 'Melina',
    country: 'Italy',
    image: '/images/yoga/sya-testimonial-review5.webp',
    short: 'I completed the 300 hour kundalini yoga teacher training. This was offered by many different instructors providing their insight and knowledge in many different areas [asana practice, kundalini theory + practice, pranayama, anatomy, ayurveda, etc.]. ...',
    full: 'I completed the 300 hour kundalini yoga teacher training. This was offered by many different instructors providing their insight and knowledge in many different areas [asana practice, kundalini theory + practice, pranayama, anatomy, ayurveda, etc.]. Each instructor had a deep understanding of their subject and it was the perfect combination of class materials/content and practices to allow you to truly embody your practice. Would love to attend an in-person program one day.',
  },
  {
    name: 'Hannah',
    country: 'Germany',
    image: '/images/yoga/sya-testimonial-review1.webp',
    short: 'I attended the 300 hour Kundalini Teachers Training course in January 2025. I have attended several other training programs over my 26 years of practicing yoga. This experience was the BEST! The Ashram was really fun, and the food was great. The trai...',
    full: 'I attended the 300 hour Kundalini Teachers Training course in January 2025. I have attended several other training programs over my 26 years of practicing yoga. This experience was the BEST! The Ashram was really fun, and the food was great. The training was the most excellent curriculum I have experienced thus far, the teachers were enthusiastic, heart centered and brilliant. Rishikesh is the most mystical place I have ever been held by the Himalayan mountains and the energetic greatness of the Ganges River. The town people were the kindest souls, the food in town was great too. I also loved the eco system of people and animals all existing together in such peace. My wife and I had such a beautiful experience, we feel that the friends we made in the program will likely be lifelong. We are already looking at our calendar to see when we can go back and finish the 500 hour program. My only request would be that they create a 1000 hour opportunity for those who want to continue on and on. Our daily practice is deeper than ever as are the gifts that come with a string Sadhana.',
  },
  {
    name: 'Olga Benko',
    country: 'Australia',
    image: '/images/yoga/sya-testimonial-review2.webp',
    short: 'Kundalini called me, as well as many others. Choosing a school, I saw the website of the Samadhi Yoga Ashram and a photo of Hari Priya and realized that I needed to go to this place. I had no idea what is Kundalini, and I did not expect the awakening...',
    full: 'Kundalini called me, as well as many others. Choosing a school, I saw the website of the Samadhi Yoga Ashram and a photo of Hari Priya and realized that I needed to go to this place. I had no idea what is Kundalini, and I did not expect the awakening of energy, I just followed my inner voice. I am very pleased with the training and grateful to all the Gurus for the knowledge and invaluable experience gained during the training. I got a lot more than I expected. During the practice, I found answers to my personal questions, as did everyone who was trained. I watched how I changed and how the people around me changed. We have undergone a colossal transformation, we have changed, we have become stronger, more confident, calmer, happier. I am grateful to the universe for this opportunity and wish all the best to the Ashram and all the Gurus. I will definitely return to Rishakesh. Namaste',
  },
  {
    name: 'Pauline',
    country: 'Japan',
    image: '/images/yoga/sya-testimonial-review3.webp',
    short: 'I have just completed by YTT200 training here. I will definitely miss here so much and in fact I don\'t want to leave and go back to my home country... It is my first time to India and I am coming here alone. There isn\'t any other student of the same ...',
    full: 'I have just completed by YTT200 training here. I will definitely miss here so much and in fact I don\'t want to leave and go back to my home country... It is my first time to India and I am coming here alone. There isn\'t any other student of the same nationality as me, but we are close friends now. I am glad that this yoga school is situated on this side of the river bank where it is more tranquil and suitable for study than the touristy centre on the opposite side. Food at ashram is so homey and in appropriate level of taste (not heavy like outside\'s and not bland), because the kitchen also cooks for the Guru\'s family who also lives here. With family members around, it feels not like a conventional/ business-driven school but experiencing local culture. Classes are well-organised and we learnt so much within a short span of time. It is out of my expectation that how focused we could learn yoga in such a way. Teachers speak good english and are serious in tackling our problems and make us improved quickly. Excursions offered by the school are fun and safe too (although we don\'t have much day off given the tight schedule of an intensive course). I would definitely love to visit India again, and if I do, I must come back and visit the school and the Guru\'s family. It can be said as my second home. I had such an amazing mind-changing journey and found my inner peace together with teaching techniques that I would definitely polish further in my yogi journey.',
  },
  {
    name: 'Montserrat',
    country: 'Russia',
    image: '/images/yoga/sya-testimonial-review4.webp',
    short: 'I had an amazing experience in SYA! The stuff became my family during my stay and I learn so much from them. Yogi Vishnu Panigrahi is such a beautiful being and so genuine! By spontaneity I met him and he brought me to this beautiful place! Which was...',
    full: 'I had an amazing experience in SYA! The stuff became my family during my stay and I learn so much from them. Yogi Vishnu Panigrahi is such a beautiful being and so genuine! By spontaneity I met him and he brought me to this beautiful place! Which was on of my greatest experience here in Rishikesh! The teachers are dedicated and the food during my stay was marvellous! p.s they have hot water to shower with and all is super clean! Thank you! SYA for this time! Until next time! Namaste.',
  },
];

const videos = [
  { embedUrl: 'https://www.youtube.com/embed/28yfG-HqNU0?si=4Eltay6NxCjsGyaR' },
  { embedUrl: 'https://www.youtube.com/embed/Y2ytJzZkZq8?si=09_FKHky0OfDMAoZ' },
  { embedUrl: 'https://www.youtube.com/embed/b132UsFcJJ4?si=Et9_kWGwDDpOsTim' },
  { embedUrl: 'https://www.youtube.com/embed/dyn4x-BdrBs?si=cOgLzqRdYQq0k5tI' },
  { embedUrl: 'https://www.youtube.com/embed/_EDu23auh10?si=JTtQ5XjM4n_NRiWl' },
  { embedUrl: 'https://www.youtube.com/embed/UzFl1Yg2OoU?si=ZJaIliMQS0OmBOKf' },
  { embedUrl: 'https://www.youtube.com/embed/illdHNpTSIM?si=7kLMM5LJw-1YzkhP' },
  { embedUrl: 'https://youtube.com/embed/8LOgbidX24c?si=ORBNb4aWNMD3Qr3J' },
  { embedUrl: 'https://youtube.com/embed/YECjBnYvAzs?si=pQG5LCLIvoWEkcsD' },
  { embedUrl: 'https://www.youtube.com/embed/jhW_Ugj7vKU?si=dyN_PG8YB1RQJmGk' },
  { embedUrl: 'https://www.youtube.com/embed/Nf8FP8Fg01Y?si=R-cK7pOaBnHbOUfO' },
  { embedUrl: 'https://www.youtube.com/embed/DMzqOhRCUxE?si=B72E2wUNDtkdARKO' },
  { embedUrl: 'https://www.youtube.com/embed/-XoVPCflWwA?si=xN6poy_ZeCaZxFM5' },
  { embedUrl: 'https://www.youtube.com/embed/DPMTeWoVEBI?si=dOhO-ok1BkTkaWmI' },
  { embedUrl: 'https://www.youtube.com/embed/D8Ff6JwpO8E?si=RwBNlSZeMBz5fBlO' },
];

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-none p-6 flex flex-col md:flex-row gap-4 rounded-2xl">
      <div className="sya-all-in-one-testimonial-slider-photo-details flex flex-col items-center md:items-start">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="sya-all-in-one-testimonial-photo w-20 h-20 rounded-full object-cover mb-2"
        />
        <p className="sya-all-in-one-testimonial-slider-testimonial-name font-semibold text-gray-800">
          {testimonial.name}
        </p>
        <p className="sya-all-in-one-testimonial-slider-testimonial-country text-sm text-gray-600">
          {testimonial.country}
        </p>
      </div>
      <div className="sya-all-in-one-testimonial-slider-testimonial-wrap flex-1">
        <p className="sya-all-in-one-testimonial-slider-testimonial-para text-gray-700 leading-relaxed">
          {isExpanded ? testimonial.full : testimonial.short}
          {!isExpanded && (
            <>
              <span className="toggle-text-ellipses">...</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(true);
                }}
                className="toggle-text-link text-blue-600 hover:underline ml-1 cursor-pointer"
              >
                Read more
              </button>
            </>
          )}
        </p>
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-blue-600 hover:underline text-sm mt-2"
          >
            Read less
          </button>
        )}
      </div>
    </div>
  );
};

const TestimonialCarousel = ({ testimonials }) => {
  const [api, setApi] = useState();

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api, scrollNext]);

  return (
    <div className="all-in-one-testimonial-wrap">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto shadow-none"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <TestimonialCard testimonial={testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const VideoCarousel = () => {
  const [api, setApi] = useState();

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 4000); // Change slide every 4 seconds (slightly faster than testimonials)

    return () => clearInterval(interval);
  }, [api, scrollNext]);

  return (
    <div className="all-in-one-testimonial-video-wrap mt-8 rounded-2xl">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto rounded-2xl"
      >
        <CarouselContent className="-ml-1">
          {videos.map((video, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <iframe
                  className="all-in-one-testimonial-video-iframe w-full aspect-video rounded-lg"
                  src={video.embedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const TestimonialsVideosSection = () => {
  const [activeTab, setActiveTab] = useState('google');

  const testimonialsByTab = {
    google: googleTestimonials,
  };

  return (
    <section id="all-in-one-testimonial" className="section-padding relative bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="row w-full">
          <div className="col-lg-12 w-full">
            <h2 className="common-heading text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What People Says About Kanvashram Ashram
            </h2>
            <div className="all-testimonial-box relative mt-12 overflow-hidden rounded-lg">
              <img
                src="/smark.jpg"
                alt=""
                className="all-testimonial-box-bg-image absolute inset-0 w-full h-full object-cover"
              />
              <div className=" p-4 md:p-6 flex flex-col lg:flex-row gap-0 lg:gap-3">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 w-full lg:w-auto">
                  <TabsList className="flex flex-col w-full lg:w-48 gap-2 me-3 all-in-one-testimonial-tab-list bg-transparent p-0 border-0">
                    <TabsTrigger
                      value="google"
                      className="nav-link data-[state=active]:bg-blue-500 data-[state=active]:text-white flex items-center justify-start p-3 rounded-md border border-gray-200 data-[state=active]:border-blue-500 hover:bg-gray-50"
                    >
                      <img src="/images/google-all-in-one.webp" alt="" className="all-in-one-icon w-6 h-6 mr-2" />
                      Google Reviews
                    </TabsTrigger>
                  </TabsList>
                  <div className="tab-content flex-1 w-full lg:flex-1 shadow-none">
                    <TabsContent value="google" className="tab-pane fade show active mt-0 w-full shadow-none">
                      <TestimonialCarousel testimonials={testimonialsByTab.google} />
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
              <VideoCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsVideosSection;