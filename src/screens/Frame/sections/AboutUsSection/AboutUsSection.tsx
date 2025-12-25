import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about-us" className="w-full bg-white pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-amircani-primary text-3xl md:text-4xl font-bold text-center mb-12">
          About Amircani Law
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-full mb-12 max-w-4xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F8905bc97d8294c86beb582ad958d8818?format=webp&width=800"
              alt="Atlanta Made - Amircani Law"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex flex-col space-y-6 text-center max-w-3xl">
            <p className="font-body text-amircani-primary text-base leading-relaxed">
              Amircani Law is an Atlanta-based personal injury law firm dedicated to representing individuals and families harmed by negligence. With years of experience handling accident and injury claims across Georgia, our attorneys have successfully advocated for clients seeking justice, accountability, and fair financial compensation.
            </p>

            <p className="font-body text-amircani-primary text-base leading-relaxed">
              Our practice focuses on personal injury matters, including car accidents, truck accidents, motorcycle accidents, wrongful death claims, and related injury cases. Whether you are dealing with medical bills, lost wages, or long-term recovery, we work tirelessly to pursue the maximum compensation available under Georgia law.
            </p>

            <p className="font-body text-amircani-primary text-base leading-relaxed">
              Led by a skilled legal team with extensive negotiation and litigation experience, Amircani Law is known for strategic advocacy and client-focused representation. We prepare every case with precision and determination, ensuring insurance companies and opposing parties take our clients' claims seriously.
            </p>

            <p className="font-body text-amircani-primary text-base leading-relaxed">
              Located in Atlanta, Georgia, we proudly serve clients throughout Metro Atlanta and surrounding communities. When your health, finances, and future are on the line, the attorneys at Amircani Law provide the trusted guidance and strong representation you need every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
