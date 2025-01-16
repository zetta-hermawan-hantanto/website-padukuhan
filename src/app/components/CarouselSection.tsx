import Link from 'next/link';
import CarouselGrid from './CarouselGrid';

const CarouselSection = () => {
  return (
    <div className="mt-20 sm:mx-32 mx-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-[#424242] flex items-center gap-3" data-aos="fade-right">
          <span className="h-[3px] bg-[#424242] w-[100px] sm:flex hidden" />
          <h2 className="font-bold text-[24px]">Foto Padukuhan Bolang</h2>
        </div>
        <Link
          href="/galeri-foto"
          className="flex items-center justify-center px-6 py-2.5 rounded bg-[#229799] text-white hover:opacity-75"
          data-aos="fade-left"
        >
          Jelajahi
        </Link>
      </div>
      <div className="flex flex-col" data-aos="fade-up">
        <CarouselGrid />
        <p className="sm:text-[20px] text-[14px] mt-8 leading-8 w-full text-justify text-[#424242]">
          Galeri ini menyajikan berbagai foto yang menggambarkan suasana Padukuhan Bolang. Mulai dari hijaunya pepohonan yang menyegarkan
          mata hingga spot-spot menarik di sekitar padukuhan. Setiap foto di sini membawa cerita dan keindahan khas yang membuat Padukuhan
          Bolang begitu istimewa. Yuk, nikmati dan rasakan sendiri pesonanya!
        </p>
      </div>
    </div>
  );
};

export default CarouselSection;
