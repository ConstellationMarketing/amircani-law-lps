import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-amircani-primary overflow-hidden" style={{backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2Fe3fd1762a7374f7c91955902025a26ba?format=webp&width=800)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {/* Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-amircani-primary/40 pointer-events-none"></div>

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
      <div className="relative w-full h-full">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 h-full">
            {/* Left Column - Text and Button */}
            <div className="text-left py-16 md:py-24 flex flex-col justify-center">
              <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Your Trusted Advocates: Maximizing Justice, Minimizing Stress
              </h1>

              <h2 className="font-body text-amircani-secondary text-xl md:text-2xl font-semibold mb-6">
                Atlanta Personal Injury
              </h2>

              <p className="font-body text-white text-base leading-relaxed mb-8">
                The accident attorneys at Amircani Law in Atlanta, GA are committed to fighting for the compensation people injured by negligent parties deserve.
              </p>

              <a
                href="#contact"
                className="bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-bold text-sm px-6 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] inline-block text-center w-fit"
              >
                FREE CASE REVIEW
              </a>
            </div>

            {/* Right Column - Attorney Image */}
            <div className="relative h-full flex items-end justify-center lg:justify-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F8d9da819288d44bb8810df91c75f6e9a?format=webp&width=800"
                alt="Maha Amircani - Attorney"
                className="w-full max-w-md h-auto object-contain object-bottom self-end"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
