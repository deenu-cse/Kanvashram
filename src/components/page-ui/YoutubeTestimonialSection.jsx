'use client';

import { useState, useEffect, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const googleTestimonials = [
  {
    name: 'Naman Dev Rawat',
    country: 'Italy',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f1/b8/default-avatar-2020-22.jpg?w=300&h=-1&s=1',
    short: "This place is so good, I got their during my winter vacation. This place is the Maharishi Kanva's Ashram where he lived. ...",
    full: "This place is so good, I got their during my winter vacation. This place is the Maharishi Kanva's Ashram where he lived. This place is also the birth place King Dushyant's and Sakuntala's son 'Bharat'. The king Bharat is the one from which name this whole country got their name Bharat",
  },
  {
    name: 'Bella_Ciao33',
    country: 'London, UK',
    image: '/images/yoga/sya-testimonial-review1.webp',
    short: 'Kanva Rishi Ashram is a spiritual retreat for the soul. It calms your nerves through meditation and teaches you to control....',
    full: 'Kanva Rishi Ashram is a spiritual retreat for the soul. It calms your nerves through meditation and teaches you to control your senses. I highly recommend visiting Kanva Rishi Ashram for a spiritual experience which is beyond this world.',
  },
  {
    name: 'vanigupta031992',
    country: 'India',
    image: '/images/yoga/sya-testimonial-review2.webp',
    short: 'The ashram is old but well maintained. Ashram and its surroundings are very neat and clean...',
    full: 'The ashram is old but well maintained. Ashram and its surroundings are very neat and clean. Loved the peaceful environment of ashram',
  },
  {
    name: 'ayushagarwals022',
    country: 'Japan',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f3/23/default-avatar-2020-28.jpg?w=100&h=-1&s=1',
    short: 'The ashram is very calm and peaceful and is very relaxing.....',
    full: 'The ashram is very calm and peaceful and is very relaxing. The entire place is very neat and clean and is a good place to spent quality time with family.',
  },
  {
    name: 'Manisha Pal',
    country: 'India',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWOpB20mks5bL49XSRSg4aAp3q99rrdRcoa0SEUkVaqJs42VNzRxQ=w108-h108-p-rp-mo-ba4-br100',
    short: 'Very pleasant place especially greenery giving fresh and pleasant view. Grateful still Gurukul and Ayurveda still preserve here which is heritage for our culture.....',
    full: 'Very pleasant place especially greenery giving fresh and pleasant view. Grateful still Gurukul and Ayurveda still preserve here which is heritage for our culture. People should visit here but without disturb diversity and naturality of this place.',
  },
  {
    name: 'AKASH PATEL',
    country: 'India',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWb5MjYm1X2F-QbAWh1IxHDqxL79XfRPHRwBqofqxDqyZuwOR2V=w108-h108-p-rp-mo-ba3-br100',
    short: 'A very relaxing place to be. One can spend few hours here. Best time to visit is October to February....',
    full: 'A very relaxing place to be. One can spend few hours here. Best time to visit is October to February.',
  },
  {
    name: 'Shiwangi Tripathi Advocat',
    country: 'India',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjU6rD4pcPkGufCMSkt58ra4xt0554NpwdJOOONpdWMYm_HnrdpyOQ=w108-h108-p-rp-mo-ba6-br100',
    short: 'Beautiful location and must visit place.A place in memory of maharaja bharat childhood and Maharshi Kanva who took care of Maa Shakuntala.This aashram ......',
    full: 'Beautiful location and must visit place.A place in memory of maharaja bharat childhood and Maharshi Kanva who took care of Maa Shakuntala.This aashram has gurukul chikitsalay small zoo like birds rabbit domestic and wild animals too can be seen,Park playground so many more things to visit.',
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