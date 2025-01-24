import CardPotentional from './CardPotentional';
import { ChartNoAxesCombined, Sprout, Feather, MapPinned, Store } from 'lucide-react';

interface IPotentional {
  title: string;
  description: string;
  image: string;
  alt: string;
  children?: React.ReactNode;
}

const potentionalData: Array<IPotentional> = [
  {
    title: 'Pertanian Palawija',
    description:
      'Salah satu potensi Padukuhan Bolang adalah pertanian palawija. Hasil pertanian palawija yang dihasilkan oleh masyarakat Padukuhan Bolang meliputi jagung, kacang tanah, singkong. Pertanian palawija di Padukuhan Bolang memiliki kualitas yang baik dan menjadi salah satu sumber pendapatan utama bagi masyarakat. Pelatihan dan pengadaan sarana pertanian yang tepat akan membantu masyarakat Padukuhan Bolang dalam mengembangkan hasil pertanian palawija mereka.',
    image: 'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAkt44bS0TXiYHOcwgLGemEtxvr76uKqalQRXVNP',
    alt: 'Salah satu potensi Padukuhan Bolang adalah pertanian palawija khususnya jagung.',
    children: <Sprout />,
  },
  {
    title: 'Hasil Ternak',
    description:
      'Potensi hasil ternak di Padukuhan Bolang juga tidak kalah menarik. Sebagian besar masyarakat Padukuhan Bolang memiliki hewan ternak seperti sapi, kambing dan ayam. Kualitas hasil ternak yang dihasilkan oleh masyarakat juga cukup baik sehingga menjadi salah satu sumber pendapatan bagi masyarakat. Pembinaan dan pendampingan yang tepat akan membantu masyarakat Padukuhan Bolang dalam mengembangkan hasil ternak mereka.',
    image: 'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAktX3M6xCRiLolPAR7ytgWmvdOHMJh3xZ9aF6Vb',
    alt: 'Potensi hasil ternak di Padukuhan Bolang yang tidak kalah menarik.',
    children: <Feather />,
  },
  {
    title: 'Lokasi Strategis',
    description:
      'Padukuhan Bolang memiliki lokasi yang cukup strategis dan mudah diakses. Akses jalan yang mudah dan merupakan salah satu jalur utama menuju objek wisata pantai di Gunung Kidul seperti Pantai Wediombo, Pantai Siung, Jungwook dan lainnya. Hal ini membuat Padukuhan Bolang memiliki potensi untuk dikembangkan sebagai destinasi wisata. Pembangunan infrastruktur yang sesuai sasaran akan mendukung peningkatan potensi wisata di Padukuhan Bolang.',
    image: 'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAkt9DYVIDlOvsDKutfaTySioU4zq1Xg8L9xcQRZ',
    alt: 'Lokasi yang strategis membuat Padukuhan Bolang memiliki potensi untuk dikembangkan sebagai destinasi wisata.',
    children: <MapPinned />,
  },
  {
    title: 'UMKM',
    description:
      'Padukuhan Bolang juga memiliki potensi yang cukup menjanjikan di sektor UMKM. Masyarakat Padukuhan Bolang memiliki kreativitas dan inovasi yang tinggi dalam mengembangkan produk-produk UMKM. Sebagian dari masyarakat Padukuhan Bolang juga memiliki usaha sendiri. Contoh usaha mereka meliputi toko sembako, toko buah, penghasil kerajinan tangan seperti sanggar burung dan bahkan penghasil madu. Pelatihan dan pendampingan yang tepat akan membantu masyarakat Padukuhan Bolang dalam mengembangkan produk-produk UMKM mereka.',
    image: 'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAktryPoaLS6pbnkSx78QeP53yCmXsNif1vcUuGw',
    alt: 'Lokasi yang strategis membuat Padukuhan Bolang memiliki potensi untuk dikembangkan sebagai destinasi wisata.',
    children: <Store />,
  },
];

const Potentional = () => {
  return (
    <div className="bg-[#CCEDEC] flex flex-col mt-16 lg:px-32 lg:py-20 sm:px-24 sm:py-12 px-4 py-3">
      <div className="flex items-center justify-center max-sm:flex-col text-center max-sm:gap-4">
        <div className="flex flex-col gap-4" data-aos="fade-up">
          <ChartNoAxesCombined size={50} className="self-center max-sm:mt-10" />
          <div className="flex items-center sm:gap-4 justify-center">
            <span className="h-[3px] bg-[#424242] w-[125px] max-lg:hidden" />
            <h2 className="font-bold text-[#424242] lg:text-[36px] sm:text-[28px] text-[20px]">Potensi Padukuhan Bolang</h2>
            <span className="h-[3px] bg-[#424242] w-[125px] max-lg:hidden" />
          </div>
          <p className="text-[#747373] sm:text-[16px] text-[14px] font-semibold lg:max-w-[500px] max-w-[400px] leading-8 lg:mx-[125px]">
            Keunggulan yang mencerminkan kehidupan masyarakat dan kekayaan lokal.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-12 max-xl:flex-col flex-wrap" data-aos="fade-up">
        {potentionalData.map((data, index) => (
          <CardPotentional key={index} title={data.title} description={data.description} image={data.image} alt={data.alt}>
            {data.children}
          </CardPotentional>
        ))}
      </div>
    </div>
  );
};

export default Potentional;
