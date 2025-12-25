import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-amircani-primary">
      {/* Navigation Bar */}
      <div className="relative w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F9a655bd1ec654702bd1d3e23ce761b09?format=webp&width=800"
              alt="Amircani Law"
              className="h-16 w-auto object-contain"
            />
          </div>

          <a
            href="tel:6782807389"
            className="bg-amircani-primary hover:bg-amircani-primary/90 px-6 py-3 rounded-lg transition-all duration-150 flex flex-col items-center"
          >
            <p className="font-body text-amircani-secondary text-xs uppercase tracking-wider font-bold">Call 24/7</p>
            <span className="font-body text-white text-lg font-semibold">
              (678) 280-7389
            </span>
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Your Trusted Advocates: Maximizing Justice, Minimizing Stress
        </h1>

        <h2 className="font-body text-amircani-secondary text-xl md:text-2xl font-semibold mb-6">
          Atlanta Personal Injury
        </h2>

        <p className="font-body text-white text-base max-w-3xl mx-auto leading-relaxed mb-8">
          The accident attorneys at Amircani Law in Atlanta, GA are committed to fighting for the compensation people injured by negligent parties deserve.
        </p>

        <a
          href="tel:6782807389"
          className="bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-medium text-sm px-6 md:px-8 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] inline-block text-center"
        >
          CALL NOW - (678) 280-7389
        </a>
      </div>
    </section>
  );
};
