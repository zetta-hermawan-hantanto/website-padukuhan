import React from 'react';
import { Video } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="flex w-full lg:mt-20 mt-10 flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-3" data-aos="fade-up">
        <Video size={40} />
        <div className="flex gap-3 items-center">
          <span className="h-[3px] bg-[#424242] w-[125px] max-lg:hidden" />
          <h2 className="text-[20px] sm:text-[26px] font-bold">Video Padukuhan Bolang</h2>
          <span className="h-[3px] bg-[#424242] w-[125px] max-lg:hidden" />
        </div>
        <p className="lg:text-[20px] sm:text-[16px] text-[14px] lg:mt-8 mt-4 leading-8 w-full lg:text-justify text-center text-[#424242]">
          Saksikan keindahan Padukuhan Bolang disetiap sudutnya melalui video berikut:
        </p>
      </div>

      <div className="mt-10 items-center justify-center" data-aos="fade-up">
        <video className="max-w-[1080px] rounded-md max-sm:max-w-[300px] max-xl:max-w-[720px]" controls>
          <source src="https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAkt7g4q7CCAy4LoSZgmTPnQsWpr8xauJ5V7zNFt" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
