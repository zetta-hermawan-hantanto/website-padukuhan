import { ReactNode } from 'react';

const AboutDataSection = ({ title, subtitle }: { title: string; subtitle: string }): ReactNode => {
  return (
    <div className="flex flex-col max-sm:justify-center max-sm:items-center max-sm:text-center">
      <h2 className="font-bold xl:text-[48px] text-[32px] text-[#424242]">{title}</h2>
      <p className="mt-2 text-[#747373] xl:text-[16px] text-[12px] font-semibold xl:max-w-[200px] max-w-[150px]">{subtitle}</p>
    </div>
  );
};

export default AboutDataSection;
