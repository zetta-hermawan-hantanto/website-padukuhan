'use client';

// *************** IMPORT LIBRARIES ***************
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// *************** IMPORT MODULES ***************
import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import Potentional from '../components/Potentional';
import CarouselSection from '../components/CarouselSection';
import MapPadukuhan from '../components/MapPadukuhan';
import VideoSection from '../components/VideoSection';

const HomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 50,
    });
  }, []);

  return (
    <section className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <Potentional />
      <VideoSection />
      <CarouselSection />
      <MapPadukuhan />
    </section>
  );
};

export default HomeSection;
