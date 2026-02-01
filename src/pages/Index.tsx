import HeroSection from '@/components/HeroSection';
import ProShowsSection from '@/components/ProShowsSection';
import EventsSection from '@/components/EventsSection';
import StorySection from '@/components/StorySection';
import ScheduleSection from '@/components/ScheduleSection';
import HighlightsSection from '@/components/HighlightsSection';
import SponsorsSection from '@/components/SponsorsSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ProShowsSection />
      <EventsSection />
      <StorySection />
      <HighlightsSection />
      <SponsorsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
