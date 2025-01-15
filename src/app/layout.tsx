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
  description: 'Padukuhan Bolang adalah padukuhan yang terletak di Desa Giripanggung, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta',
};

// *************** Define the layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.variable} antialiased w-full flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
