'use client';

import AOS from 'aos';
import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import Potentional from '../components/Potentional';
import CarouselSection from '../components/CarouselSection';
import MapPadukuhan from '../components/MapPadukuhan';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const HomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 50,
    });
  }, []);

  return (
    <section className="w-full overflow-x-hidden flex flex-col">
      <div className="px-4">
        <HeroSection />
      </div>
      <div className="py-8 px-4">
        <AboutSection />
      </div>
      <Potentional />
      <CarouselSection />
      <MapPadukuhan />
    </section>
  );
};

export default HomeSection;
