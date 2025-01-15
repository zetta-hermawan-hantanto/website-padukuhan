import React from 'react';

const Footer = () => {
  return (
    <footer className="flex w-full bg-[#229799] flex-col pt-20 pb-5 relative overflow-hidden mt-20">
      <div className="flex items-center justify-center">
        <p className="text-white text-center mt-20 font-bold">Allright Reserved © 2025 Padukuhan Bolang</p>
      </div>

      <div className="w-60 h-60 absolute inset-x-0 bg-[#CCEDEC] -bottom-24 -left-10 rounded-full z-10 bg-opacity-50" />
      <div className="w-60 h-60 absolute bg-[#CCEDEC] -bottom-24 -right-10 rounded-full z-10 bg-opacity-50" />
    </footer>
  );
};

export default Footer;
