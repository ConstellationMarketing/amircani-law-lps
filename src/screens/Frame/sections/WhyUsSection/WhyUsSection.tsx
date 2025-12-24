import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { CheckCircle, FileText, Phone, Scale, Shield } from "lucide-react";

export const WhyUsSection = (): JSX.Element => {
  const serviceHighlights = [
    {
      icon: Scale,
      title: "Professional Representation",
      description: "Experienced personal injury attorneys dedicated to protecting your rights and securing maximum compensation for your injuries."
    },
    {
      icon: Shield,
      title: "Comprehensive Case Handling",
      description: "We handle all aspects of your case, from investigation to negotiation to trial preparation, ensuring no detail is overlooked."
    },
    {
      icon: Phone,
      title: "24/7 Availability",
      description: "Our team is always accessible when you need us. We provide responsive communication and keep you informed throughout your case."
    },
    {
      icon: FileText,
      title: "No Fee Unless We Win",
      description: "We work on a contingency fee basis - you don't pay attorney fees unless we successfully recover compensation for you."
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Our attorneys have successfully recovered millions for injury victims throughout Atlanta and Georgia."
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-amircani-primary text-3xl md:text-4xl font-bold text-center mb-4">
          Service Highlights
        </h2>
        <p className="font-body text-amircani-primary/70 text-center text-lg mb-12 max-w-3xl mx-auto">
          When you choose Amircani Law, you get dedicated personal injury representation focused on results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceHighlights.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-amircani-light border border-amircani-secondary/20 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-amircani-secondary rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-amircani-primary" />
                    </div>
                    <h3 className="font-heading text-amircani-primary text-lg font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-amircani-primary/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
