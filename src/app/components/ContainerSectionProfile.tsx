/* eslint-disable @next/next/no-img-element */

interface IContainerSectionProfile {
  title: string;
  description: string;
  image?: string;
  alt?: string;
}

const ContainerSectionProfile = ({ title, description, image, alt }: IContainerSectionProfile) => {
  return (
    <div className="flex w-full flex-col max-w-[1000px] items-center justify-center mt-8">
      <div className="flex flex-col">
        <span className="w-[120px] h-1.5 bg-[#48CFCB] my-2 rounded" />
        <h2 className="text-[24px] font-bold text-[#424242] sm:text-[32px]">{title}</h2>
        <p className="mt-4 leading-10 text-[16px] text-justify sm:text-[20px]">{description}</p>
      </div>
      {image && <img src={image} alt={alt} className="object-cover w-full rounded-xl mt-8 max-h-[600px]" />}
    </div>
  );
};

export default ContainerSectionProfile;
