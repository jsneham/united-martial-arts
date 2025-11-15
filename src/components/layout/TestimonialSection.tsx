import { testimonials } from "@/constant";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export const TestimonialSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <section id="testimonial" className="mt-16 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-3xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((t, index) => (
            <CarouselItem key={index}>
              <Card className="bg-neutral-900 border border-neutral-700 text-white shadow-lg mx-auto p-8">
                <CardContent className="text-center">
                  <p className="text-lg italic mb-4 text-gray-100">
                    “{t.feedback}”
                  </p>
                  <span className="text-sm text-gray-400">— {t.name}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
