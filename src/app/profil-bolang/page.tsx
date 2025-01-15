/* eslint-disable @next/next/no-img-element */

import ContainerSectionProfile from '../components/ContainerSectionProfile';

const ProfilSection = () => {
  return (
    <section className="flex flex-col sm:mx-32 mx-4 relative left-0 right-0 items-center">
      <ContainerSectionProfile
        title="Padukuhan Bolang"
        description="Padukuhan Bolang terletak di Kalurahan Giripanggung, Kapanewon Tepus, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta. Sebagai bagian dari wilayah perbukitan, Padukuhan Bolang menawarkan pemandangan yang asri dan udara sejuk. Warga Padukuhan Bolang menjaga nilai-nilai keharmonisan yang tercermin dari semangat gotong royong dan kebersamaan yang kuat. Dengan luas wilayah mencapai 61.178 Ha, padukuhan ini terbagi dalam satu RW (RW 06) yang terdiri dari lima RT. Keberadaan ladang, perbukitan, dan hutan membuat Padukuhan Bolang tetap kaya akan potensi lokal."
        image="/assets/images/padukuhan-bolang.jpeg"
        alt="padukuhan-bolang"
      />

      <ContainerSectionProfile
        title="Geografi"
        description="Padukuhan Bolang berada pada ketinggian sekitar 360 meter di atas permukaan laut, dengan suhu udara sejuk berkisar antara 25-30°C. Wilayah ini didominasi oleh dataran tinggi dengan tekstur tanah berupa batuan kapur, khas daerah karst Gunung Kidul. Sistem drainase bawah tanah di wilayah ini memberikan tantangan sekaligus potensi bagi pengelolaan sumber daya air. Karakteristik tanah  yang berbatu dan berkapur memengaruhi pola pertanian masyarakat setempat sehingga sebagian besar masyarakat Bolang mengoptimalkan lahan untuk bercocok tanam palawija."
        image="/assets/images/alas-bolang.jpeg"
        alt="geografi-padukuhan-bolang"
      />

      <div>
        <ContainerSectionProfile
          title="Tradisi dan Budaya Masyarakat"
          description="Padukuhan Bolang kaya akan tradisi dan budaya yang tetap terjaga dari generasi ke generasi. Kehidupan masyarakat di padukuhan ini sangat dipengaruhi oleh nilai-nilai kearifan lokal yang menjunjung tinggi gotong royong, kebersamaan, dan penghormatan terhadap leluhur. Tradisi dan budaya yang diwariskan tidak hanya menjadi identitas komunitas, tetapi juga berfungsi sebagai penghubung emosional antarwarga, memperkuat rasa persaudaraan di tengah modernisasi. Acara-acara adat, yang masih sering dilakukan, mencerminkan semangat masyarakat untuk merawat nilai-nilai luhur, menjaga harmoni dengan alam, dan mengukuhkan kebudayaan mereka. Berikut adalah beberapa tradisi dan budaya yang tetap hidup di Padukuhan Bolang."
          alt="tradisi-budaya-bolang"
        />
        <div className="flex flex-col mt-4 max-w-[1000px] items-start gap-8">
          <div className="flex w-full lg:items-center gap-6 max-lg:flex-col">
            <img src="/assets/images/selikuran.png" alt="selikuran" className="object-cover h-[300px] min-w-[300px] rounded" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-[#424242]">1. SELIKURAN</h4>
              <p className="leading-8 text-[16px] text-justify">
                Tradisi Selikuran merupakan salah satu warisan budaya yang masih dijaga dengan baik oleh warga Padukuhan Bolang. Tradisi ini
                menjadi momen istimewa yang digelar untuk menyambut datangnya sepuluh hari terakhir bulan Ramadhan. Dalam tradisi ini, warga
                Bolang berkumpul untuk mempererat silaturahmi sambil mengingatkan satu sama lain tentang pentingnya memperbanyak sedekah,
                memperdalam introspeksi diri, dan meningkatkan kualitas ibadah. Acara malam selikuran ini biasanya diadakan di Balai
                Padukuhan Bolang melakukan doa bersama yang dipimpin oleh salah satu tokoh yang disebut Kaum yang bernama Budi Murtono.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:items-center gap-6 max-lg:flex-col">
            <img src="/assets/images/kenduri.jpg" alt="kenduri" className="object-cover h-[300px] min-w-[300px] rounded" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-[#424242]">2. KENDURI</h4>
              <p className="leading-8 text-[16px] text-justify">
                Tradisi kenduri merupakan salah satu tradisi yang masih dilaksanakan secara rutin oleh masyarakat Bolang. Tradisi ini
                biasanya diadakan sebelum musim tanam ataupun musim panen. Adapun tujuan dilakukanya tradisi ini sebelum musim tanam yakni
                untuk meminta permohonan kepada Tuhan agar diberikan kelancaran serta kesuburan dimusim tanam. Selain itu tujuan
                dilakukannya tradisi ini sebelum musim panen yakni sebagai bentuk rasa syukur kepada Tuhan atas hasil panen yang diberikan.
                Acara ini dimulai dengan warga yang berdatangan ke Balai Padukuhan dengan membawa masakan masing-masing lalu akan diadakan
                doa bersama dan juga makan bersama.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:items-center gap-6 max-lg:flex-col">
            <img src="/assets/images/Potensi-01.jpeg" alt="gotong-royong" className="object-cover h-[300px] min-w-[300px] rounded" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-[#424242]">3. BERSIH DUSUN</h4>
              <p className="leading-8 text-[16px] text-justify">
                Bersih Dusun merupakan kegiatan yang ditujukan sebagai bentuk komitmen warga Padukuhan Bolang dalam menjaga kebersihan
                lingkungan dan mempererat tali persaudaraan di antara mereka. Kegiatan ini mencerminkan semangat gotong-royong kebersamaan
                masyarakat Padukuhan Bolang. Selain itu, kegiatan ini juga sebagai bentuk tingginya kepedulian masyarakat Padukuhan Bolang
                dalam menjaga dan melestarikan kebersihan lingkungan. Kegiatan ini memberikan kesempatan kepada masyarakat untuk merayakan
                kebersamaan dan kekompakan dalam menjaga tradisi dan nilai-nilai luhur yang diwariskan dari generasi-generasi.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:items-center gap-6 max-lg:flex-col">
            <img src="/assets/images/ternakan.jpeg" alt="gumrekan" className="object-cover h-[300px] min-w-[300px] rounded" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-[#424242]">4. GUMREKAN</h4>
              <p className="leading-8 text-[16px] text-justify">
                Gumrekan adalah salah satu tradisi yang terus dijaga oleh masyarakat Padukuhan Bolang sebagai bagian dari warisan budaya
                yang penuh makna. Tradisi ini biasanya dilaksanakan setiap delapan bulan sekali sebagai wujud rasa syukur dan doa kepada
                Tuhan Yang Maha Esa. Dalam pelaksanaannya, masyarakat bersama-sama mempersiapkan makanan khas berupa ketupat yang dibuat
                dengan berbagai bentuk unik. Setiap bentuk ketupat tersebut memiliki makna simbolis tersendiri, mencerminkan nilai-nilai
                kebersamaan, keberkahan, dan harapan baik. Tradisi ini tidak hanya menjadi momen spiritual, tetapi juga mempererat tali
                persaudaraan antarwarga.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-6 max-lg:flex-col">
            <img src="/assets/images/karawitan.jpeg" alt="gotong-royong" className="object-cover h-[300px] min-w-[300px] rounded" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-[#424242]">5. KARAWITAN</h4>
              <p className="leading-8 text-[16px] text-justify">
                Karawitan adalah salah satu kegiatan seni yang rutin dilaksanakan oleh masyarakat Padukuhan Bolang. Kegiatan ini biasanya
                berlangsung di Balai Padukuhan pada malam hari, menghadirkan perpaduan indah antara seni gamelan dan seni vokal tradisional.
                Selain menjadi hiburan yang dinikmati oleh masyarakat, karawitan juga berfungsi sebagai upaya pelestarian budaya yang
                diwariskan turun-temurun. Melalui suara gamelan yang harmonis dan syair-syair yang sarat makna, kegiatan ini menjadi simbol
                kebanggaan dan identitas budaya masyarakat Padukuhan Bolang.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContainerSectionProfile
        title="Kehidupan Sosial Masyarakat"
        description="Kehidupan sosial di Padukuhan Bolang berjalan harmonis dengan peran penting perangkat desa sebagai penggerak utama berbagai kegiatan masyarakat. Perangkat desa tidak hanya bertindak sebagai pemimpin administratif, tetapi juga sebagai figur yang menginspirasi semangat kebersamaan dan kerja sama di kalangan warga. Dalam setiap program atau acara, peran perangkat desa sangat terasa dalam mengarahkan, memfasilitasi, dan memastikan keberhasilan berbagai inisiatif lokal. Partisipasi aktif warga menjadi ciri khas kehidupan sosial di Padukuhan Bolang. Berbagai kegiatan seperti pertemuan karang taruna, program desa, hingga tradisi gotong royong menjadi ajang bagi masyarakat untuk berkumpul, berdiskusi, dan bersama-sama mewujudkan tujuan bersama. Dalam pertemuan karang taruna, misalnya, para pemuda-pemudi dusun berbagi ide dan merancang kegiatan yang tidak hanya bermanfaat untuk mereka sendiri, tetapi juga untuk seluruh masyarakat. Tradisi gotong royong yang masih terjaga menjadi bukti nyata semangat solidaritas warga Bolang. Kegiatan ini mencakup berbagai aspek, mulai dari membersihkan lingkungan, membangun fasilitas umum, hingga membantu tetangga yang membutuhkan. Hubungan yang erat antara pemimpin desa dan masyarakat menciptakan suasana yang mendukung pertumbuhan lingkungan sosial yang kuat dan inklusif. Harmoni yang terpancar dari kerja sama ini menjadi fondasi penting dalam kehidupan sosial Padukuhan Bolang, sekaligus mencerminkan nilai-nilai luhur yang diwariskan dari generasi ke generasi."
        image="/assets/images/perangkat-desa.png"
        alt="rapat-desa"
      />

      <ContainerSectionProfile
        title="Kehidupan Ekonomi"
        description="Padukuhan Bolang merupakan sebuah wilayah yang menggambarkan
        kehidupan masyarakat agraris dengan kekayaan nilai tradisional yang tetap terjaga. Sebagian besar warga mengandalkan sektor pertanian palawija sebagai sumber penghidupan utama, menghasilkan tanaman seperti jagung, kacang-kacangan, dan singkong yang menjadi komoditas penting di kawasan ini. Selain bertani, beberapa warga juga menjalankan aktivitas beternak dalam skala kecil sebagai penunjang kebutuhan ekonomi keluarga. Usaha-usaha kecil hingga menengah juga mulai tumbuh sebagai upaya masyarakat untuk meningkatkan pendapatan, mencerminkan semangat kewirausahaan yang terus berkembang. Keunikan dari sistem ekonomi di Bolang terletak pada budaya gotong royong yang kuat, di mana warga saling bahu-membahu dalam mengelola lahan, berbagi alat pertanian, hingga mendistribusikan hasil panen. Tradisi ini tidak hanya mempererat hubungan antarwarga tetapi juga menjadi salah satu pondasi penting dalam menjaga keberlanjutan ekonomi lokal. Walaupun wilayah ini belum tersentuh oleh sektor industri besar atau pariwisata, potensi Bolang tetap menarik untuk dijadikan objek penelitian atau kerja sama. Keasrian lingkungannya, kehidupan sosial yang harmonis, serta semangat kemandirian yang tinggi memberikan peluang besar bagi pihak luar, baik akademisi, institusi, maupun pengusaha, untuk mengembangkan inovasi bersama masyarakat lokal. Dengan sinergi yang tepat, Padukuhan Bolang dapat menjadi contoh sukses bagaimana kearifan lokal dan pengembangan ekonomi modern dapat berjalan berdampingan."
        image="/assets/images/ladang.jpeg"
        alt="rapat-desa"
      />

      <ContainerSectionProfile
        title="Akses Pendidikan"
        description="Padukuhan Bolang merupakan salah satu padukuhan yang strategis dengan akses yang mudah ke berbagai jenjang pendidikan, mulai dari SD hingga SMA/SMK. Di sekitar Padukuhan Bolang, terdapat beberapa institusi pendidikan, seperti SD Negeri Gupakan 2, SMP Negeri 2 Tepus, hingga SMK YPKK Tepus, yang semuanya berlokasi cukup dekat. Keberadaan fasilitas pendidikan ini menjadi salah satu keunggulan Padukuhan Bolang, memudahkan warga untuk memberikan pendidikan yang layak bagi anak-anak mereka tanpa harus menempuh jarak yang jauh. Hal ini juga mencerminkan pentingnya pendidikan dalam kehidupan masyarakat setempat."
        image="/assets/images/smk-ypkk.jpg"
        alt="pendidikan-fasilitas-umum"
      />

      <ContainerSectionProfile
        title="Lingkungan dan Kelestarian Alam"
        description="Lingkungan Padukuhan Bolang dikenal dengan keindahannya yang asri dan alami, dikelilingi oleh perbukitan yang menjulang serta pepohonan rindang, seperti jati, yang menambah kesejukan suasana. Masyarakat Padukuhan Bolang sangat menjunjung tinggi kelestarian alam dan kebersihan lingkungan. Hal ini terlihat dari kedisiplinan mereka dalam menjaga lingkungan serta semangat gotong royong yang tercermin dalam kegiatan rutin Bersih Dusun. Selain itu, kesadaran warga terhadap pengelolaan sampah sangat patut diacungi jempol. Mereka memiliki kebiasaan untuk tidak membuang sampah sembarangan dan selalu memastikan sampah diletakkan pada tempatnya. Semangat kebersamaan ini menjadikan Padukuhan Bolang sebagai contoh nyata harmonisasi antara manusia dan alam yang tetap terjaga."
        image="/assets/images/alam-bolang.jpeg"
        alt="pendidikan-fasilitas-umum"
      />
    </section>
  );
};

export default ProfilSection;
