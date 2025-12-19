import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import TechStack from '@/components/sections/TechStack';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <TechStack />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}