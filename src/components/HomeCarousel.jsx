import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Adjust the import path as necessary

const HomeCarousel = ({ carouselItems }) => {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem
            key={item.id}
            className="relative flex items-end justify-center bg-cover bg-center p-8 sm:h-[500px] h-[350px]"
            style={{ backgroundImage: `url(${item.img})` }} // Adjust the height as needed
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative z-10 p-4 rounded-tl-md rounded-tr-md">
              <h2 className="text-6xl font-bold text-white mb-2">
                {item.title}
              </h2>
              <p className="text-lg text-center text-white">
                {item.description}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <span aria-hidden="true">&lt;</span>
        <span className="sr-only">Previous</span>
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <span aria-hidden="true">&gt;</span>
        <span className="sr-only">Next</span>
      </CarouselNext>
    </Carousel>
  );
};

export default HomeCarousel;
