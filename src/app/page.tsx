// app/page.tsx
import AboutUsSection from '@/components/about-us-section';
import HomeHeader from '@/components/page-ui/firstHeader'
import { YogaComponent } from '@/components/ui/yogasection';
import { StayFacilitiesSection } from '@/components/page-ui/stay-facilities-section';
import { HistoryTimeline } from '@/components/page-ui/history-timeline';
import { AshramThings } from '@/components/page-ui/ashramThings';
import { AshramStay } from '@/components/page-ui/stay-info';
import { AshramStory } from '@/components/page-ui/ashramStory';
import Faqs from '@/components/page-ui/faq-sections';

export default function Home() {
  return (
    <div className="relative">
      <HomeHeader />
      <AboutUsSection />
      <YogaComponent />
      <main className="bg-background">
        <div className="flex min-h-screen flex-col justify-center px-1 py-10 pb-5 md:px-3 lg:py-7">
          <StayFacilitiesSection />
        </div>
      </main>
      <AshramStay />
      <HistoryTimeline />
      <AshramStory />
      <AshramThings />
      <div className='w-full'>
        <Faqs />
      </div>
    </div>
  );
}