import React from "react";

export const CallToActionMainSection = (): JSX.Element => {
  return (
    <section className="w-full bg-amircani-primary py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-white text-3xl md:text-4xl font-normal mb-6">
          Ready to Discuss Your Case?
        </h2>
        
        <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Don't wait to get the legal help you deserve. Contact Amircani Law today for a free consultation with an experienced Atlanta personal injury attorney.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:6782807389"
            className="bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-medium text-sm px-8 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          >
            Call Now - (678) 280-7389
          </a>
          
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-white/90 text-amircani-primary font-inter font-medium text-sm px-8 py-3 rounded-full border border-white transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
          >
            Request Free Consultation
          </button>
        </div>

        <p className="font-body text-white/70 text-sm mt-6">
          Available 24/7 · No Fee Unless We Win · Serving Metro Atlanta
        </p>
      </div>
    </section>
  );
};
