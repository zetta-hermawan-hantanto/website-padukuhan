import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// *************** Define the font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

// *************** Define the metadata
export const metadata: Metadata = {
  title: 'Padukuhan Bolang',
  description:
    'Padukuhan Bolang terletak di Kalurahan Giripanggung, Kapanewon Tepus, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta. Sebagai bagian dari wilayah perbukitan, Padukuhan Bolang menawarkan pemandangan yang asri dan udara sejuk. Warga Padukuhan Bolang menjaga nilai-nilai keharmonisan yang tercermin dari semangat gotong royong dan kebersamaan yang kuat. Dengan luas wilayah mencapai 61.178 Ha, padukuhan ini terbagi dalam satu RW (RW 06) yang terdiri dari lima RT. Keberadaan ladang, perbukitan, dan hutan membuat Padukuhan Bolang tetap kaya akan potensi lokal.',
};

// *************** Define the layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.variable} antialiased max-w-full w-full mx-auto`}>
        <Navbar />
        <main className="w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
