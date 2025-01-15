'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface INavbarList {
  name: string;
  link: string;
}

const navbarList: Array<INavbarList> = [
  {
    name: 'Beranda Bolang',
    link: '/',
  },
  {
    name: 'Profil Bolang',
    link: '/profil-bolang',
  },
  {
    name: 'Galeri Foto',
    link: '/galeri-foto',
  },
];

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);

  const menuRef = useRef<null | SVGSVGElement>(null);

  const containerMenu = useRef<null | HTMLUListElement>(null);

  const middleIndex: number = Math.ceil(navbarList.length / 2);

  const pathname: string = usePathname();

  useEffect(() => {
    setActive(true);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerMenu &&
        containerMenu.current &&
        !containerMenu.current.contains(event.target as Node) &&
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setActive(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative top-0 left-0 right-0 z-10 w-full">
      <ul className="flex justify-center space-x-8 py-8 text-[#424242] items-center max-md:hidden">
        {navbarList?.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="font-medium text-[18px] ease-linear transition duration-200 hover:-zinc-900 hover:scale-105">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`m-4 flex w-full md:hidden`}>
        <MenuIcon className="w-7 h-7" onClick={() => setActive(!active)} ref={menuRef} />
      </div>

      <ul
        className={`${active ? 'hidden' : ''} flex flex-col w-[250px] h-[270px] top-10 bg-[#229799] absolute ml-5 rounded p-6 space-y-8`}
        ref={containerMenu}
      >
        {navbarList?.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="font-medium text-[14px] ease-linear transition duration-200 text-white hover:scale-105 hover:bg-[#48CFCB] py-2 px-6 rounded"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
