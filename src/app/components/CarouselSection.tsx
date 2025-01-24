import Link from 'next/link';
import CarouselGrid from './CarouselGrid';
import { Image as Galeri } from 'lucide-react';

const CarouselSection = () => {
  return (
    <div className="sm:mt-20 mt-10 lg:mx-32 mx-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-[#424242] flex items-center gap-3 max-sm:justify-between" data-aos="fade-right">
          <span className="h-[3px] bg-[#424242] w-[100px] sm:flex hidden" />
          <h2 className="font-bold sm:text-[24px] text-[20px]">Galeri Foto Padukuhan Bolang</h2>
          <Galeri size={30} />
        </div>
        <Link
          href="/galeri-foto"
          className="lg:flex items-center justify-center px-6 py-2.5 rounded bg-[#229799] text-white hover:opacity-75 hidden"
          data-aos="fade-left"
        >
          Jelajahi
        </Link>
      </div>
      <div className="flex flex-col" data-aos="fade-up">
        <CarouselGrid />
        <p className="lg:text-[20px] sm:text-[16px] text-[14px] mt-8 leading-8 w-full text-justify text-[#424242]">
          Galeri foto Padukuhan Bolang yang menampilkan keindahan alam, kegiatan masyarakat, dan potensi yang ada di Padukuhan Bolang. Foto
          yang ditampilkan di galeri ini merupakan dokumentasi kegiatan masyarakat dan potensi yang ada di Padukuhan Bolang. Foto-foto
          tersebut diambil dari berbagai sudut dan kegiatan yang ada di Padukuhan Bolang. Jelajahi galeri foto ini untuk menemukan betapa
          indahnya Padukuhan Bolang mulai dari suasana alam, masyarakat hingga potensi yang ada di Padukuhan Bolang.
        </p>
      </div>
    </div>
  );
};

export default CarouselSection;
