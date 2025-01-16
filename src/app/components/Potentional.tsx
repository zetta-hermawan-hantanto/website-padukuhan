import Link from 'next/link';
import CardPotentional from './CardPotentional';

interface IPotentional {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const potentionalData: Array<IPotentional> = [
  {
    title: 'Sumber Daya Manusia',
    description:
      'Sebagian besar masyarakat Padukuhan Bolang bermata pencaharian sebagai petani palawija, dan peternak sapi, kambing, ayam. Selain itu, beberapa masyarakat di sana juga memiliki usaha mikro, kecil, menengah (UMKM) seperti membuka toko kelontong. Segala bentuk usaha yang dimiliki oleh masyarakat Padukuhan Bolang menggambarkan bahwa masyarakat setempat memiliki etos kerja yang tinggi.',
    image: 'penduduk-bolang-berladang',
    alt: 'Penduduk Bolang sedang melakukan aktivitas di ladang.',
  },
  {
    title: 'Sumber Daya Alam',
    description:
      'Padukuhan Bolang dianugerahi sumber daya alam yang melimpah, dengan sektor pertanian palawija sebagai salah satu andalannya. Komoditas utama yang dihasilkan mencakup jagung, singkong, dan kacang, yang menjadi tulang punggung perekonomian warga. Selain itu, potensi di bidang peternakan ayam, kambing, dan sapi menjadi salah satu sumber penghidupan tambahan.',
    image: 'area-ladang-bolang',
    alt: 'Area ladang jagung di daerah Padukuhan Bolang.',
  },
];

const Potentional = () => {
  return (
    <div className="bg-[#CCEDEC] flex flex-col mt-16 lg:px-32 lg:py-20 sm:px-24 sm:py-12 px-4 py-3">
      <div className="flex items-center justify-between max-sm:flex-col max-sm:text-center max-sm:gap-4">
        <div className="flex flex-col" data-aos="fade-left">
          <h2 className="font-bold text-[#424242] lg:text-[36px] text-[28px] max-sm:mt-12">Potensi Padukuhan Bolang</h2>
          <p className="text-[#747373] text-[16px] font-semibold lg:max-w-[500px] max-w-[400px] leading-8">
            Keunggulan yang mencerminkan kehidupan masyarakat dan kekayaan lokal.
          </p>
        </div>
        <Link
          className="sm:px-6 sm:py-3 px-3 py-2 bg-white font-bold rounded-full shadow-md hover:bg-white/75"
          href="/profil-bolang"
          data-aos="fade-left"
        >
          Lebih Lanjut
        </Link>
      </div>
      <div className="flex justify-center gap-10 mt-12 max-xl:flex-col" data-aos="fade-up">
        {potentionalData.map((data, index) => (
          <CardPotentional key={index} title={data.title} description={data.description} image={data.image} alt={data.alt} />
        ))}
      </div>
    </div>
  );
};

export default Potentional;
