import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const highlights = [
    "Professional personal injury representation",
    "Car, truck, and motorcycle accident advocacy",
    "Wrongful death claims handled with care and diligence",
    "Clear, consistent communication throughout your case",
    "Results-driven legal strategies focused on maximum compensation"
  ];

  return (
    <section id="about-us" className="w-full bg-white pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-amircani-primary text-3xl md:text-4xl font-bold text-center mb-12">
          About Amircani Law
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-full mb-12 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F4344c94d0ea04565a6370ddcafbd8985?format=webp&width=800"
                  alt="Alanna Dae - Amircani Law Team"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amircani-primary via-amircani-primary/95 to-transparent p-6 pt-12">
                  <h4 className="font-heading text-white text-xl font-bold mb-1">Alanna Dae</h4>
                  <p className="font-body text-amircani-secondary text-sm">Paralegal/Case Manager</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F71a11081020c40d799e4722c0b02c277?format=webp&width=800"
                  alt="Maribel Posada - Amircani Law Team"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amircani-primary via-amircani-primary/95 to-transparent p-6 pt-12">
                  <h4 className="font-heading text-white text-xl font-bold mb-1">Maribel Posada</h4>
                  <p className="font-body text-amircani-secondary text-sm">Paralegal/Case Manager</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8a7b33c1f3e4309983e45cabed92535%2F34a9ad696f0a417ca2d3ea376da60ad8?format=webp&width=800"
                  alt="Aslam Pohlel - Amircani Law Team"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amircani-primary via-amircani-primary/95 to-transparent p-6 pt-12">
                  <h4 className="font-heading text-white text-xl font-bold mb-1">Aslam Pohlel</h4>
                  <p className="font-body text-amircani-secondary text-sm">Property Damage Paralegal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6 text-center max-w-3xl mb-12">
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

          <div className="w-full">
            <h3 className="font-heading text-amircani-primary text-2xl font-bold text-center mb-8">
              Service Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-amircani-secondary/20 rounded-lg p-6 flex flex-col items-center text-center border border-amircani-secondary/30"
                >
                  <CheckCircle className="w-10 h-10 text-amircani-secondary mb-3" />
                  <p className="font-body text-amircani-primary text-sm font-medium leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
