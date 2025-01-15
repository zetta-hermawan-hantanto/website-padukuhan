import CardContainer from '../components/CardContainer';

const GaleriFotoPage = () => {
  return (
    <section className="flex w-full text-[#424242] flex-wrap sm:mx-32 mx-16 mt-10 gap-8">
      <CardContainer
        title="Balai Padukuhan Bolang"
        description="Balai Padukuhan Bolang adalah sebuah fasilitas masyarakat yang terletak di lokasi strategis, tepat di tengah wilayah RT-RT di Padukuhan Bolang. Posisi balai ini menghadap ke arah utara, menjadikannya pusat yang mudah diakses oleh seluruh warga. Balai ini berfungsi sebagai tempat berkumpulnya warga untuk berbagai keperluan, seperti rapat warga atau pelaksanaan acara-acara tertentu yang melibatkan banyak orang. Salah satu kegiatan yang sering diadakan di balai ini adalah latihan karawitan, yang menjadi ajang untuk mempererat hubungan sosial antarwarga melalui seni budaya. Fungsi balai ini sangat penting dalam mendukung kehidupan sosial dan budaya masyarakat di Padukuhan Bolang."
        image="/assets/images/galeri-foto/balai-padukuhan.jpeg"
        alt="rumah-dukuh"
        key={1}
      />
      <CardContainer
        title="Rumah Dukuh Padukuhan Bolang"
        description="Rumah Dukuh Padukuhan Bolang terletak di sebelah utara Balai Padukuhan, tepatnya di RT-02, RW-06. Rumah ini tidak hanya menjadi tempat tinggal yang nyaman bagi Bapak Dukuh dan keluarganya, tetapi juga berfungsi sebagai salah satu pusat interaksi masyarakat. Warga sering mengunjungi rumah ini untuk berbagai keperluan, seperti mengurus perizinan, meminta restu untuk melaksanakan kegiatan, atau melaporkan berbagai hal kepada Bapak Dukuh. Kehadiran rumah ini mencerminkan keterbukaan dan kedekatan pemimpin dengan masyarakat, menjadi simbol harmoni dan gotong royong di Padukuhan Bolang."
        image="/assets/images/galeri-foto/rumah-dukuh.jpeg"
        alt="rumah-dukuh"
        key={1}
      />
      <CardContainer
        title="Rumah Ketua RT-02"
        description="Rumah Ketua RT-02 Padukuhan Bolang memiliki lokasi yang strategis, terletak tidak jauh dari Balai Padukuhan. Rumah ini mudah dikenali dengan dominasi warna hijau yang menyegarkan, serta halaman yang dihiasi berbagai tanaman, memberikan kesan asri dan nyaman. Selain berfungsi sebagai tempat tinggal, rumah ini juga berperan sebagai pusat kegiatan ekonomi warga, menyediakan berbagai kebutuhan pokok (sembako) dan aneka jajanan. Hal ini menjadikan rumah Ketua RT-02 ramai dikunjungi oleh warga setempat, baik untuk memenuhi kebutuhan sehari-hari maupun oleh anak-anak yang mampir membeli jajanan setelah bermain."
        image="/assets/images/galeri-foto/ketua-rt-02.jpeg"
        alt="rumah-dukuh"
        key={2}
      />
      <CardContainer
        title="Rumah Ketua RT-03"
        description="Rumah ini merupakan rumah RT-03 di Padukuhan Bolang yang mencerminkan gaya arsitektur tradisional Jawa dengan sentuhan modern. Atapnya berbentuk limasan dengan ornamen khas di puncaknya, memperlihatkan identitas budaya lokal yang masih kental. Dindingnya dicat warna biru cerah yang memberikan kesan segar dan bersahabat, dilengkapi dengan pagar depan sederhana berwarna senada yang menambah estetika rumah. Halaman depan yang lapang menambah kesan keterbukaan dan keramahan rumah ini sebagai bagian dari kehidupan sosial masyarakat Padukuhan Bolang."
        image="/assets/images/galeri-foto/ketua-rt-03.jpeg"
        alt="rumah-dukuh"
        key={2}
      />
      <CardContainer
        title="Pohon Beringin Padukuhan Bolang"
        description="Pohon beringin yang berdiri kokoh di area menuju RT-01 Padukuhan Bolang ini menjadi salah satu simbol kelestarian lingkungan di desa tersebut. Pohon ini ditanam sekitar 42 tahun yang lalu oleh Ketua RW-06 sekarang Bapak Budi dimana ketika itu, beliau masih kanak-kanak. Penanaman pohon beringin ini sebagai bagian dari upaya untuk menciptakan lingkungan yang rindang dan asri. Dengan usia yang hampir setengah abad, pohon ini tidak hanya memberikan keteduhan dan keindahan alami, tetapi juga menjadi saksi bisu perjalanan sejarah serta kebersamaan masyarakat Padukuhan Bolang dalam menjaga dan melestarikan alam sekitarnya."
        image="/assets/images/galeri-foto/beringin.jpeg"
        alt="beringin"
        key={3}
      />
    </section>
  );
};

export default GaleriFotoPage;
