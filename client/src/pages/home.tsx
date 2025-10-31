import { useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import VideoScroll from '@/components/VideoScroll';
import ProductsSection from '@/components/products-section';
import TechnologySection from '@/components/technology-section';
import TestimonialsSection from '@/components/testimonials-section';
import CareersSection from '@/components/careers-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import BackToTop from '@/components/back-to-top';
import ScrollProgress from '@/components/scroll-progress';
import { useLenis } from '@/hooks/use-lenis';

export default function Home() {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <TechnologySection />
        <TestimonialsSection />
        <CareersSection />
        <ContactSection />
      </main>

      {/* <Footer /> */}
      <BackToTop />
    </>
  );
}
