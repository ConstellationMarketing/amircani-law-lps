import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const BadgesSection = (): JSX.Element => {
  // Placeholder badges - replace with actual Amircani Law award images
  const badges = [
    { src: "/avvo-badge.jpg", alt: "Avvo Rating" },
    { src: "/super-lawyers-badge.jpg", alt: "Super Lawyers" },
    { src: "/best-lawyers-badge.jpg", alt: "Best Lawyers" },
    { src: "/top-attorneys-badge.jpg", alt: "Top Attorneys" },
    { src: "/justia-badge.jpg", alt: "Justia" },
    { src: "/martindale-badge.jpg", alt: "Martindale-Hubbell" },
  ];

  return (
    <section className="w-full bg-white py-6 md:py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {badges.map((badge, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-2 flex items-center justify-center h-32">
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback for missing images
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-amircani-secondary text-amircani-primary hover:bg-amircani-secondary/80 border-amircani-secondary" />
            <CarouselNext className="right-0 bg-amircani-secondary text-amircani-primary hover:bg-amircani-secondary/80 border-amircani-secondary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
