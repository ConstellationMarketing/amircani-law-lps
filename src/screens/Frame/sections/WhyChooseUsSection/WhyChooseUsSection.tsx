import React from "react";
import { CheckCircle, Users, Award } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: CheckCircle,
      title: "Honest & Transparent",
      text: "At Amircani Law, we believe in providing clear, straightforward legal advice. You deserve honest answers about your case, your rights, and your options. We take the time to explain everything in a way that's easy to understand, so you can make informed decisions with confidence."
    },
    {
      icon: Users,
      title: "Reliable & Accessible",
      text: "When you need legal help, you shouldn't have to wait. Our team is committed to responsive communication and exceptional service. Whether by phone, email, or in person at our office on Powers Ferry Road, we are here to support you every step of the way."
    },
    {
      icon: Award,
      title: "Experienced & Proven",
      text: "With years of experience handling accident cases, we know how to fight for the best outcome for our clients. Our track record speaks for itself—just check our client reviews. We are dedicated to securing the results you deserve."
    }
  ];

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-amircani-primary text-3xl md:text-4xl font-bold text-center mb-3">
          Why Choose Us?
        </h2>
        <p className="font-body text-gray-600 text-center text-lg mb-12">
          When you have a personal injury case, there's too much at stake and no room for trial and error. It's essential to work with an experienced and trusted attorney from the start to secure the outcome you deserve. Here's why thousands of Georgians choose Amircani Law:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-amircani-light p-8 rounded-lg flex flex-col items-center text-center border border-amircani-secondary/20"
              >
                <div className="w-16 h-16 bg-amircani-secondary rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-amircani-primary" />
                </div>
                <h3 className="font-heading text-amircani-primary text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-amircani-primary/80 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-amircani-primary text-lg mb-4">
            At Amircani Law, we put you first. Contact us today to see how we can help.
          </p>
          <a
            href="tel:6782807389"
            className="bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-medium text-sm px-6 md:px-8 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] inline-block text-center"
          >
            Call Today - (678) 280-7389
          </a>
        </div>
      </div>
    </section>
  );
};
