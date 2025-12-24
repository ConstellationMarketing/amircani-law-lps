import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const BadgesSection = (): JSX.Element => {
  const badges = [
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F01d1961d0c5846e696850ed0fc3b5480?format=webp&width=800", alt: "State Bar of Georgia" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F5ab73d24e5654ccc8ce10efe99326151?format=webp&width=800", alt: "Georgia Association for Women Lawyers" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F8eaf28b2a4a64e40af50af93c9c08b6a?format=webp&width=800", alt: "Georgia Trial Lawyers Association" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F40ec4dc3789c440b962a6f6907fb8958?format=webp&width=800", alt: "Atlanta Bar Association" },
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
