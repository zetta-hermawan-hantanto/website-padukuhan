'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, House, MapPinHouse, Images } from 'lucide-react';

interface INavbarList {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

const navbarList: Array<INavbarList> = [
  {
    name: 'Beranda Bolang',
    link: '/',
    icon: <House className="text-white" />,
  },
  {
    name: 'Profil Bolang',
    link: '/profil-bolang',
    icon: <MapPinHouse className="text-white" />,
  },
  {
    name: 'Galeri Foto',
    link: '/galeri-foto',
    icon: <Images className="text-white" />,
  },
];

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <nav className="relative top-0 left-0 right-0 z-10 max-w-full w-full">
      <MenuIcon className="w-7 h-7 m-4 md:hidden block" onClick={() => setActive(!active)} />

      <ul className="flex justify-center space-x-8 py-8 text-[#424242] items-center max-md:hidden">
        {navbarList?.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="font-medium text-[18px] ease-linear transition duration-200 hover:-zinc-900 hover:scale-105">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={`${active ? '' : 'hidden'} flex flex-col w-[250px] h-[230px] top-10 bg-[#229799] absolute ml-5 rounded p-6 space-y-8`}>
        {navbarList?.map((item, index) => (
          <li
            key={index}
            className="flex items-center px-3 gap-3 hover:bg-[#48CFCB] py-1.5 rounded  ease-linear transition duration-200 hover:scale-105"
          >
            {item.icon}
            <Link href={item.link} className="font-medium text-[14px] text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
