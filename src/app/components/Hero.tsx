/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

'use client';

import Tag from './Tag';
import { ReactNode, useEffect, useState } from 'react';

interface ITags {
  name: string;
}

const tags: Array<ITags> = [
  {
    name: 'Profil Desa',
  },
  {
    name: 'Budaya Lokal',
  },
  {
    name: 'Digitalisasi Daerah',
  },
];

const HeroSection = () => {
  const [text, setText] = useState<string>('');

  const [isTyping, setIsTyping] = useState<boolean>(true);

  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const [delta, setDelta] = useState<number>(100);

  const longDelta: number = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      typeWriter();
    }, delta);

    return () => clearInterval(interval);
  }, [delta, text, isTyping, isDeleting]);

  const typeWriter = (): void => {
    const fullText = 'Selamat Datang di Padukuhan Bolang';
    const updatedText = isTyping ? fullText.substring(0, text.length + 1) : fullText.substring(0, text.length - 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((delta) => delta / 2);
    } else {
      setDelta(100);
    }

    if (isTyping && !isDeleting && text === fullText) {
      setIsDeleting(true);
      setIsTyping(false);
      setDelta(longDelta);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setIsTyping(true);
    }
  };

  return (
    <div className="relative h-[calc(100vh-94px)] w-full">
      <div>
        <img src="/assets/images/hero.jpeg" alt="hero" className={`h-[calc(100vh-94px)] w-full rounded-sm object-cover`} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white">
        <span className="text-white text-center">
          <h2 className="font-bold text-[36px] max-sm:text-[28px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
            <span className="border-r-4 w-4 animate-blink">{text}</span>
          </h2>
        </span>

        <div className="bottom-10 absolute text-white text-center flex w-full justify-center flex-col items-center">
          <p className="text-[16px] max-sm:text-[12px] font-medium drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)] sm:max-w-[600px] max-w-[300px]">
            Temukan informasi lengkap tentang sejarah, kehidupan masyarakat, dan potensi lokal Padukuhan Bolang. Melalui digitalisasi ini,
            kami berharap Padukuhan Bolang dapat dikenal lebih luas dan menjadi inspirasi bagi banyak pihak.
          </p>
          <ul className="flex items-center justify-center space-x-4 mt-4">
            {tags.map(
              (tag: ITags, index: number): ReactNode => (
                <li key={index}>
                  <Tag name={tag.name} />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
