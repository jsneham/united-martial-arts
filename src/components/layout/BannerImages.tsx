import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function BannerImages() {
  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
    "/images/banner5.jpg",
    "/images/banner6.jpg",
    "/images/banner7.jpg",
  ];

  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full max-w-7xl mx-auto rounded-xl overflow-hidden"
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <Card className="bg-neutral-900 border-neutral-800 rounded-xl overflow-hidden">
              <CardContent className="h-[500px] p-0">
                <img
                  src={img}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover" 
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
