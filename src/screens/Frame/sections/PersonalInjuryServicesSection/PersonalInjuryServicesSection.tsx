import React from "react";
import { Accordion, AccordionItem } from "../../../../components/ui/accordion";

export const PersonalInjuryServicesSection = (): JSX.Element => {
  return (
    <section id="practice-areas" className="w-full bg-amircani-light py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-amircani-primary text-3xl md:text-4xl font-bold mb-4">
            Practice Areas
          </h2>
          <p className="font-body text-amircani-primary/70 text-base max-w-3xl mx-auto mb-8">
            Experienced personal injury representation across Atlanta and Georgia
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single">
            <AccordionItem value="car-accidents" title="Car Accidents">
              Needing an Atlanta-based personal injury attorney due to the carelessness, recklessness, or drunkenness of another driver is hugely frustrating. You didn't do anything wrong but now you're saddled with medical bills, forced to find a new car, and may have missed work due to your injuries.
            </AccordionItem>

            <AccordionItem value="truck-accidents" title="Truck Accidents">
              Commercial truck accidents in the Atlanta metro area that result in needing to file a personal injury claim are incredibly dangerous and often result in injuries for the passengers in the smaller vehicle. Trucks are heavy vehicles, which is why passenger cars tend to suffer severe damage when involved in accidents with commercial trucks.
            </AccordionItem>

            <AccordionItem value="motorcycle-accidents" title="Motorcycle Accidents">
              Being a biker is a mixed bag – it's fun, efficient, and affordable, but it can also be more dangerous than other modes of vehicular transportation. Motorcyclists are the most vulnerable motorists on the roads of Atlanta, GA due to the inherent lack of safety features present in most cars and trucks.
            </AccordionItem>

            <AccordionItem value="wrongful-death" title="Wrongful Death">
              Losing a loved one is always painful. Knowing their death was preventable if people had not acted negligently makes the death even harder to bear. Wrongful death claims are similar to personal injury claims but with some additional potential damages.
            </AccordionItem>

            <AccordionItem value="crash-report-retrieval" title="Crash Report Retrieval Service">
              At Amircani Law, we understand how crucial timely access to accurate crash reports can be after an accident. Our Crash Report Retrieval Service is designed to simplify the process for individuals involved in motor vehicle accidents in Georgia. Whether you need a copy for insurance claims, legal proceedings, or personal records, we take the hassle out of navigating law enforcement systems and waiting in long queues. Our team will handle the entire process—locating the correct report, verifying the details, and delivering it to you quickly and securely. This service not only saves you time but also ensures that you have the critical documentation needed to support your case and move forward with confidence.
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amircani-secondary rounded-lg p-12 text-center">
          <h3 className="font-heading text-amircani-primary text-2xl md:text-3xl font-bold mb-6">
            Call Us for Personal Injury Help
          </h3>

          <a
            href="tel:6782807389"
            className="inline-block font-heading text-amircani-primary text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
          >
            (678) 280-7389
          </a>

          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:6782807389"
              className="bg-amircani-primary hover:bg-amircani-primary/90 text-white font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
            >
              Free consultations available
            </a>

            <p className="font-body text-amircani-primary text-base">
              Speak directly with an experienced Atlanta personal injury attorney today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
