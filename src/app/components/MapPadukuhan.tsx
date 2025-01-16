const MapPadukuhan = () => {
  return (
    <div className="lg:my-20 sm:mx-32 mx-4 my-10">
      <div className="justify-center gap-12 flex items-center max-lg:flex-col">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.0376751128852!2d110.67683739500988!3d-8.093223324881041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb79740116091%3A0x138c23a27b681438!2sBALAI%20PADUKUHAN%20BOLANG!5e0!3m2!1sid!2sid!4v1734800186660!5m2!1sid!2sid"
          height="600"
          loading="lazy"
          className="mt-12 w-full"
          data-aos="fade-right"
        />
        <div className="flex flex-col text-[#424242]" data-aos="fade-left">
          <h2 className="font-bold text-[24px]">Map Padukuhan Bolang</h2>
          <p className="sm:text-[20px] text-[14px] text-[#424242] leading-8 max-w-[900px] text-justify mt-4">
            Padukuhan Bolang terletak di kawasan dataran tinggi yang dikelilingi oleh suasana pedesaan yang asri dan tenang. Berada dalam
            jangkauan perjalanan singkat dari pusat kecamatan, padukuhan ini mudah diakses baik oleh kendaraan roda dua maupun roda empat.
            Keindahan alam yang masih terjaga membuat Bolang menjadi tempat yang nyaman untuk disinggahi, dengan masyarakat yang ramah dan
            budaya lokal yang masih kuat. Gunakan peta di samping untuk menemukan rute terbaik menuju Padukuhan Bolang, dan nikmati
            keindahan kehidupan pedesaan di sini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapPadukuhan;
