/* eslint-disable @next/next/no-img-element */
'use client';

import AboutDataSection from './AboutData';
import { ReactNode } from 'react';

interface IAnalyticsData {
  title: string;
  subtitle: string;
}

const analyticsData: Array<IAnalyticsData> = [
  {
    title: '449±',
    subtitle: 'Jumlah Penduduk di Padukuhan Bolang',
  },
  {
    title: '129±',
    subtitle: 'Jumlah Kartu Keluarga di Padukuhan Bolang',
  },
  {
    title: '80%',
    subtitle: 'Penduduk di Padukuhan Bolang Bekerja Sebagai Petani Palawija',
  },
  {
    title: '50%',
    subtitle: 'Penduduk di Padukuhan Bolang Beternak',
  },
];

const AboutSection = () => {
  return (
    <div className="flex flex-col xl:mx-28 mx-4 max-lg:mt-4 mt-20">
      <div className="text-[#424242] flex items-center gap-3 max-lg:justify-center">
        <span className="h-[3px] bg-[#424242] w-[100px] max-lg:hidden" />
        <h2 className="font-bold text-[26px]">Tentang Padukuhan</h2>
      </div>

      <div className="flex justify-center flex-col lg:items-end items-center w-full">
        <p className="w-[600px] max-lg:w-full text-[#424242] lg:mt-8 mt-4 sm:text-[20px] text-[14px] leading-8 max-lg:text-center text-justify max-sm:px-2">
          Padukuhan Bolang, yang terletak di Kalurahan Giripanggung, Kapanewon Tepus, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta,
          menawarkan kenyamanan baik bagi penduduk maupun para pengunjung. Lingkungan di padukuhan ini dikelilingi oleh pepohonan rindang
          yang menciptakan suasana asri, sejuk, dan menenangkan. Kebersihan lingkungan juga sangat terjaga berkat kesadaran tinggi
          masyarakat dalam menjaga kelestarian alam. Hal ini tercermin dari tradisi rutin mereka, yaitu kegiatan bersih dusun, yang
          dilakukan dengan penuh semangat kebersamaan. Masyarakat Bolang dikenal memiliki rasa solidaritas yang kuat, tercermin melalui
          tradisi gotong royong dalam kerja bakti serta saling membantu satu sama lain dalam berbagai kegiatan.
        </p>
        <img
          src="/assets/images/about-bolang.jpeg"
          className="object-cover w-[600px] max-lg:w-full rounded-md xl:mt-6 mt-10 max-h-[400px]"
          alt="about-section"
        />
      </div>

      <div className="lg:mt-20 mt-10 flex w-full sm:justify-around justify-center max-sm:flex-col max-sm:items-center max-sm:gap-8">
        {analyticsData.map(
          (data: IAnalyticsData, index: number): ReactNode => (
            <div key={index} className="flex" data-aos="fade-up">
              <AboutDataSection key={index} title={data.title} subtitle={data.subtitle} />
              {index !== analyticsData.length - 1 && <div className="w-[2px] bg-[#747373] h-full ml-20 max-xl:hidden" />}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AboutSection;
