import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Star } from "lucide-react";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Placeholder testimonials - replace with actual Amircani Law client reviews
  const testimonials = [
    {
      name: "Client Review",
      rating: 5,
      timeAgo: "Recent",
      text: "Maha and her team at Amircani Law provided exceptional representation for my car accident case. She fought tirelessly to get me the compensation I deserved and kept me informed every step of the way. I highly recommend Amircani Law for anyone needing a personal injury attorney in Atlanta.",
      source: "Google"
    },
    {
      name: "Client Review",
      rating: 5,
      timeAgo: "Recent",
      text: "After my accident, I didn't know where to turn. Amircani Law took care of everything - dealing with the insurance companies, handling all the paperwork, and making sure I got proper medical treatment. They truly care about their clients and fight hard for justice.",
      source: "Google"
    },
    {
      name: "Client Review",
      rating: 5,
      timeAgo: "Recent",
      text: "Professional, responsive, and results-driven. Maha Amircani exceeded my expectations in handling my personal injury case. She secured a settlement that covered all my medical bills and lost wages. I'm incredibly grateful for her expertise and dedication.",
      source: "Google"
    },
    {
      name: "Client Review",
      rating: 5,
      timeAgo: "Recent",
      text: "I was injured in a truck accident and Amircani Law helped me navigate the complex legal process. They were always available to answer my questions and provided honest, straightforward advice. I couldn't have asked for better representation.",
      source: "Google"
    }
  ];

  return (
    <section className="w-full bg-amircani-light py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-amircani-primary text-3xl md:text-4xl font-bold text-center mb-4">
          Client Reviews
        </h2>
        <p className="font-body text-amircani-primary/70 text-center text-lg mb-12">
          See what our clients have to say about their experience with Amircani Law
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amircani-secondary rounded-full flex items-center justify-center">
                    <span className="font-body text-amircani-primary font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body text-amircani-primary font-semibold text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="font-body text-gray-500 text-xs">
                      {testimonial.timeAgo}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-amircani-secondary font-body text-2xl font-bold">G</span>
                </div>
                <p className="font-body text-gray-700 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=amircani+law+atlanta"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-medium text-sm px-6 md:px-8 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] inline-block text-center"
          >
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};
