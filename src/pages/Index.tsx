import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PracticeAreas from '@/components/PracticeAreas';
import BalanceSection from '@/components/BalanceSection';
import Differentials from '@/components/Differentials';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Index() {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PracticeAreas />
      <BalanceSection />
      <Differentials />
      <AboutSection />
      <TeamSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
