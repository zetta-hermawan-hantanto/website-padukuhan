/* eslint-disable @next/next/no-img-element */

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const images = ['/galeri-foto/balai-padukuhan', 'image08', 'image02', 'image03', 'image07', 'image06'];

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
            <CarouselItem key={index} className="pt-1 lg:basis-1/4 sm:ba">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-4">
                    <img src={`/assets/images/${image}.jpeg`} alt="hero-section" className="h-[400px] object-cover w-full rounded" />
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
