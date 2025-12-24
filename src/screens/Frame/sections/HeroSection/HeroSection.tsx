import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-amircani-primary">
      {/* Navigation Bar */}
      <div className="relative w-full bg-amircani-primary border-b border-amircani-secondary/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/amircani-law-logo.png"
              alt="Amircani Law"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <p className="font-body text-amircani-secondary text-xs uppercase tracking-wider">Call 24/7</p>
            <a
              href="tel:6782807389"
              className="font-body text-white hover:text-amircani-secondary transition-colors text-lg font-semibold"
            >
              (678) 280-7389
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4">
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
          className="bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-medium text-sm px-8 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
        >
          CALL NOW - (678) 280-7389
        </a>
      </div>
    </section>
  );
};
