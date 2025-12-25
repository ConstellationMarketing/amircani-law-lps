import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Star } from "lucide-react";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Real Google reviews from Amircani Law clients
  const testimonials = [
    {
      name: "Zamyah S.",
      rating: 5,
      timeAgo: "Recent",
      text: "I loveeeeeeeee Amircani law !! Maha is amazing . Jasmine Seals is the absolute best as well. Jasmine was so patient with me, she answered everything I asked. Amircani law made me feel like family . I'd recommend them one thousand times over!!! Thank you all for being great !!!!",
      source: "Google"
    },
    {
      name: "Umar M.",
      rating: 5,
      timeAgo: "Recent",
      text: "Amircani law offices of Atlanta is the best law offices I have ever worked with I can't say enough about this awesome team of professionals they work endlessly until you are fully compensated for your loss thank God for Maribel and everyone who helped me with not just one but two car accidents they are very personable at answering my question about the car accident thank you guys",
      source: "Google"
    },
    {
      name: "Musa G.",
      rating: 5,
      timeAgo: "Recent",
      text: "Terrific firm with a reputation to match. Their attention to detail and concern for clients is unmatched. You'd be well represented if you're fortunate enough to have Maha handle your case.",
      source: "Google"
    },
    {
      name: "Lorenzo H.",
      rating: 5,
      timeAgo: "Recent",
      text: "If you are looking for exceptional service, Amircani Law is the place for you. The staff is great & the attention to detail is amazing. Attorney Maha is definitely one of the best in the business & really cares about her clients. Spread the word!",
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
            className="bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-bold text-sm px-6 md:px-8 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] inline-block text-center"
          >
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};
