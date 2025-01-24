/* eslint-disable @next/next/no-img-element */

// *************** IMPORT LIBRARIES ***************
import { Trees } from 'lucide-react';
import { ReactNode } from 'react';

// *************** IMPORT MODULES ***************
import AboutDataSection from './AboutData';

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
    <div className="flex flex-col lg:mx-20 mx-4 lg:mt-20 mt-4 max-lg:items-center">
      <div className="text-[#424242] flex items-center gap-3" data-aos="fade-right">
        <span className="h-[3px] bg-[#424242] w-[125px] max-lg:hidden" />
        <h2 className="text-[20px] sm:text-[26px] font-bold">Seputar Padukuhan Bolang</h2>
        <Trees size={32} color="#424242" />
      </div>

      <div className="flex justify-center flex-col lg:items-end w-full" data-aos="fade-left">
        <p className="w-1/2 max-lg:w-full text-[#424242] lg:mt-8 mt-4 lg:text-[20px] sm:text-[18px] sm:leading-9 leading-8 max-lg:text-justify text-justify">
          Padukuhan Bolang merupakan salah satu padukuhan yang terletak di Kalurahan Giripanggung, Kapanewon Tepus, Kabupaten Gunung Kidul,
          Daerah Istimewa Yogyakarta. Padukuhan ini dikelilingi oleh perbukitan dan pepohonan yang membuat udara di padukuhan ini sejuk dan
          asri. Jarak dari pusat Kota Yogyakarta menuju Padukuhan Bolang sekitar 60 km dengan waktu tempuh sekitar 2 jam menggunakan
          kendaraan pribadi seperti motor atau mobil. Mayoritas penduduk di Padukuhan Bolang bekerja sebagai petani dan beternak. Sebagian
          besar petani di Padukuhan Bolang menanam palawija seperti jagung, kacang tanah, dan singkong. Selain itu, sebagian penduduk juga
          senang beternak hewan seperti ayam, kambing dan sapi. Kehidupan masyarakat di Padukuhan Bolang penuh dengan kebersamaan.
          Masyarakat disini senang bekerja sama dan gotong royong dalam kegiatan sehari-hari seperti membersihkan lingkungan dan membangun
          infrastruktur dusun. Padukuhan Bolang memiliki tradisi dan budaya yang kental dan masih dijaga oleh masyarakat setempat dengan
          baik. Padukuhan Bolang menawarkan kenyamanan dan ketenangan bagi siapa saja yang berkunjung ke padukuhan ini. Mulai dari
          pemandangan, udara, hingga keramahan masyarakatnya membuat Padukuhan Bolang menjadi tempat yang cocok untuk dikunjungi.
        </p>
        <img
          src="https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAktT148SxeodEqRKDnUQ8V014M2FZrLupxXs5b3"
          className="object-cover w-1/2 max-lg:w-full rounded-md xl:mt-6 mt-10"
          alt="Grid foto seputar kehidupan dan suasana di Padukuhan Bolang"
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
