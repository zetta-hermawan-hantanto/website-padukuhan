/* eslint-disable @next/next/no-img-element */

interface ICardContainer {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const CardContainer = ({ title, description, image, alt }: ICardContainer) => {
  return (
    <div className="flex flex-col border p-5 shadow max-w-[400px]">
      <img src={image} className="sm:w-[400px] max-h-[240px] object-cover rounded" alt={alt} />
      <div className="flex flex-col flex-1 gap-2">
        <h4 className="text-xl font-bold mt-3">{title}</h4>
        <p className="text-md text-justify leading-6">{description}</p>
      </div>
    </div>
  );
};

export default CardContainer;
