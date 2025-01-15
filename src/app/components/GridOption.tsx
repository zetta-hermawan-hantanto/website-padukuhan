import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  className?: string;
  image?: string;
}

const GridOption = ({ title, className, image, description }: Props) => {
  return (
    <div className={cn('relative grid-option h-full', className)}>
      <div className="flex flex-col justify-end h-full p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm font-semibold">{description}</p>
      </div>

      {image && <Image src={image} alt={title} fill={true} className="object-cover opacity-20 hover:opacity-75 rounded-md" />}
    </div>
  );
};

export default GridOption;
