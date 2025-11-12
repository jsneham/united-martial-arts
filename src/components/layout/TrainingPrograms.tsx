import type { ProgramType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { programsData } from "@/constant";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const ProgramComponent =({program}:{program: ProgramType}) => {

    return(
     <Card className="bg-neutral-900 border-neutral-700 hover:border-orange-500 transition duration-300">
                <CardHeader className="flex justify-center items-center">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-28 h-28 object-cover rounded-full border-2 shadow-md"

                  />
                </CardHeader>
                <CardContent className="p-3 text-center">
                  <p className="text-xs text-gray-400">{program.subtitle}</p>
                  <CardTitle className="text-base font-semibold text-white mt-1">
                    {program.title}
                  </CardTitle>
                </CardContent>
              </Card>
    )
}

export const TrainingPrograms = () => {
    const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

    return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Our Programs
      </h2>

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {programsData.map((program, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
            >
              <ProgramComponent program={program}/>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
