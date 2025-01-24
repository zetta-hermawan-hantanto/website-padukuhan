/* eslint-disable @next/next/no-img-element */

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const images = [
  'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAktKbOGZ0LZdoHhqv0Rp7C9nEygDiczUXW1lwsf',
  'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAkt7aWNzFAy4LoSZgmTPnQsWpr8xauJ5V7zNFtf',
  'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAktXzNKtyiLolPAR7ytgWmvdOHMJh3xZ9aF6Vb5',
  'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAktVEUzc0NWdw9sObo6ueh2YIVJFl43AmiG5nKC',
  'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAktT44wEwleodEqRKDnUQ8V014M2FZrLupxXs5b',
  'https://zagr038nx6.ufs.sh/f/lVDJ9nQoGAktd0e5A43zNuXC1S7K9Dl2Wms3yR6OaIFcBtpM',
];

const CarouselGrid = () => {
  return (
    <div className="mt-8">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        orientation="horizontal"
        className="w-full z-50 relative"
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pt-1 xl:basis-1/4 lg:basis-1/2 sm:basis-full">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-4">
                    <img src={image} alt="hero-section" className="h-[400px] object-cover w-full rounded" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-sm:-left-3" />
        <CarouselNext className="max-sm:-right-3" />
      </Carousel>
    </div>
  );
};

export default CarouselGrid;
