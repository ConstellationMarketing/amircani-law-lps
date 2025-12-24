import React from "react";

export const BadgesSection = (): JSX.Element => {
  const badges = [
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F01d1961d0c5846e696850ed0fc3b5480?format=webp&width=800", alt: "State Bar of Georgia" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F5ab73d24e5654ccc8ce10efe99326151?format=webp&width=800", alt: "Georgia Association for Women Lawyers" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F8eaf28b2a4a64e40af50af93c9c08b6a?format=webp&width=800", alt: "Georgia Trial Lawyers Association" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F40ec4dc3789c440b962a6f6907fb8958?format=webp&width=800", alt: "Atlanta Bar Association" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F9653c960e5714cf995c6c2c8fe6a6b73?format=webp&width=800", alt: "Super Lawyers 2025" },
  ];

  return (
    <section className="w-full bg-white py-6 md:py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="w-full h-auto max-h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
