/* eslint-disable @next/next/no-img-element */

const CardPotentional = ({ title, description, image, alt }: { title: string; description: string; image: string; alt: string }) => {
  return (
    <div className="relative flex bg-white rounded-lg shadow-md sm:p-8 p-4 items-center overflow-hidden transform transition duration-500 hover:shadow-2xl hover:-translate-y-3 max-sm:flex-col">
      <img
        src={`/assets/images/${image}.jpeg`}
        alt={alt}
        className="h-[300px] w-[250px] object-cover rounded-md transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 transition duration-500 hover:opacity-100 backdrop-blur-md pointer-events-none"></div>
      <div className="relative z-10 flex-col flex gap-4 sm:mx-8 mx-4 text-left">
        <h3 className="sm:text-[20px] text-[18px] font-bold text-gray-800 transition-transform duration-500 hover:scale-105 max-sm:mt-4">
          {title}
        </h3>
        <p className="sm:text-[16px] text-[14px] font-semibold text-[#727272] leading-7 text-justify max-w-[400px] transition-transform duration-500 hover:scale-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardPotentional;
