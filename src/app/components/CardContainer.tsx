/* eslint-disable @next/next/no-img-element */

interface ICardContainer {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const CardContainer = ({ title, description, image, alt }: ICardContainer) => {
  return (
    <div className="flex flex-col border sm:p-5 p-3 shadow">
      <img src={image} className="sm:w-[400px] sm:max-h-[240px] max-sm:h-[200px] object-cover rounded" alt={alt} />
      <div className="flex flex-col flex-1 gap-2">
        <h4 className="text-xl font-bold mt-3">{title}</h4>
        <p className="text-md text-justify leading-6">{description}</p>
      </div>
    </div>
  );
};

export default CardContainer;
