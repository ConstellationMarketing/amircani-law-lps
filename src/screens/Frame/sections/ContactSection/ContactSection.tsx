import React from "react";
import { Phone, MapPin } from "lucide-react";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="w-full bg-amircani-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-amircani-primary text-3xl md:text-4xl font-bold mb-4">
            Contact Amircani Law
          </h2>
          <p className="font-body text-amircani-primary text-lg">
            Speak with a professional Atlanta personal injury attorney about your case today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-amircani-primary text-2xl font-bold mb-6">
              Request Your Free Consultation
            </h3>
            <form
              id="contact-form"
              name="amircani-contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
              className="space-y-4"
            >
              {/* Hidden field for Netlify form detection */}
              <input type="hidden" name="form-name" value="amircani-contact" />

              {/* Honeypot field for spam protection */}
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              {/* Hidden tracking fields */}
              <input type="hidden" id="utm_source" name="utm_source" />
              <input type="hidden" id="utm_medium" name="utm_medium" />
              <input type="hidden" id="utm_campaign" name="utm_campaign" />
              <input type="hidden" id="utm_term" name="utm_term" />
              <input type="hidden" id="utm_content" name="utm_content" />
              <input type="hidden" id="gclid" name="gclid" />
              <input type="hidden" id="fbclid" name="fbclid" />
              <input type="hidden" id="msclkid" name="msclkid" />
              <input type="hidden" id="first_utm_source" name="first_utm_source" />
              <input type="hidden" id="first_utm_medium" name="first_utm_medium" />
              <input type="hidden" id="first_utm_campaign" name="first_utm_campaign" />
              <input type="hidden" id="first_utm_term" name="first_utm_term" />
              <input type="hidden" id="first_utm_content" name="first_utm_content" />
              <input type="hidden" id="first_referrer" name="first_referrer" />
              <input type="hidden" id="first_landing_page" name="first_landing_page" />
              <input type="hidden" id="first_visit_timestamp" name="first_visit_timestamp" />
              <input type="hidden" id="referrer" name="referrer" />
              <input type="hidden" id="referrer_domain" name="referrer_domain" />
              <input type="hidden" id="search_engine" name="search_engine" />
              <input type="hidden" id="social_platform" name="social_platform" />
              <input type="hidden" id="traffic_source_category" name="traffic_source_category" />
              <input type="hidden" id="is_paid_traffic" name="is_paid_traffic" />
              <input type="hidden" id="is_returning_visitor" name="is_returning_visitor" />
              <input type="hidden" id="lead_source" name="lead_source" />
              <input type="hidden" id="lead_medium" name="lead_medium" />
              <input type="hidden" id="lead_campaign" name="lead_campaign" />
              <input type="hidden" id="lead_keyword" name="lead_keyword" />
              <input type="hidden" id="lead_content" name="lead_content" />
              <input type="hidden" id="landing_url" name="landing_url" />
              <input type="hidden" id="landing_page" name="landing_page" />
              <input type="hidden" id="current_page_url" name="current_page_url" />
              <input type="hidden" id="session_id" name="session_id" />
              <input type="hidden" id="session_count" name="session_count" />
              <input type="hidden" id="pages_visited" name="pages_visited" />
              <input type="hidden" id="time_on_page" name="time_on_page" />
              <input type="hidden" id="user_agent" name="user_agent" />
              <input type="hidden" id="device_type" name="device_type" />
              <input type="hidden" id="browser" name="browser" />
              <input type="hidden" id="os" name="os" />
              <input type="hidden" id="screen_resolution" name="screen_resolution" />
              <input type="hidden" id="timestamp" name="timestamp" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-amircani-secondary"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-amircani-secondary"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-amircani-secondary"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-body text-sm focus:outline-none focus:border-amircani-secondary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amircani-secondary hover:bg-amircani-secondary/80 text-amircani-primary font-inter font-medium text-sm px-6 md:px-8 py-3 rounded-full border border-amircani-secondary transition-all duration-150 uppercase tracking-[2px] text-center"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-amircani-primary text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-amircani-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-amircani-primary font-medium">(678) 280-7389</p>
                    <p className="font-body text-gray-600 text-sm">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-amircani-primary text-2xl font-bold mb-6">
                Office Location
              </h3>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amircani-secondary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-amircani-primary font-medium mb-1">Atlanta Office:</p>
                  <p className="font-body text-amircani-primary">3340 Peachtree Rd. NE</p>
                  <p className="font-body text-amircani-primary">Suite 180</p>
                  <p className="font-body text-amircani-primary mb-2">Atlanta, GA 30326</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-amircani-primary text-2xl font-bold mb-4">
                What To Expect
              </h3>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                When you contact Amircani Law, you'll speak directly with an experienced personal injury attorney who will listen to your story, answer your questions, and provide honest guidance about your case. We offer free consultations and work on a contingency fee basis—you don't pay unless we win.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.4899999999998!2d-84.36!3d33.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66df95e7f7e1e6b1!2s3340%20Peachtree%20Rd%20NE%20Suite%20180%2C%20Atlanta%2C%20GA%2030326!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amircani Law Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
