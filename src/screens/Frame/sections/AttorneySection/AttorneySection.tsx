import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-amircani-light py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-amircani-primary text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Attorney Maha Amircani
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full h-full min-h-[400px]">
            <img
              src="/maha-amircani-attorney.jpg"
              alt="Maha Amircani, Attorney"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-body text-amircani-primary text-base leading-relaxed">
              Maha Amircani is the founding attorney of Amircani Law and a dedicated personal injury advocate representing individuals and families injured due to negligence. She has successfully handled a wide range of injury cases, including car accidents, truck accidents, motorcycle accidents, and wrongful death claims, fighting aggressively for fair and full compensation for her clients.
            </p>

            <p className="font-body text-amircani-primary text-base leading-relaxed">
              With a strong background in personal injury law, Maha is known for her strategic approach, attention to detail, and unwavering commitment to client advocacy. She has built a reputation for standing up to insurance companies and refusing to accept unfair settlement offers, ensuring every case is prepared as if it will go to trial.
            </p>

            <p className="font-body text-amircani-primary text-base leading-relaxed">
              Maha brings a deep understanding of how insurance carriers evaluate and defend claims, using this insight to anticipate tactics and strengthen her clients' cases. Her hands-on approach ensures that every client receives personalized legal guidance and clear communication throughout the legal process.
            </p>

            <p className="font-body text-amircani-primary text-base leading-relaxed">
              Based in Atlanta, Georgia, Maha Amircani proudly serves clients throughout Metro Atlanta and surrounding areas. She is deeply committed to protecting the rights of injury victims and helping them move forward with confidence after life-altering accidents.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-medium text-sm px-8 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Schedule Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
