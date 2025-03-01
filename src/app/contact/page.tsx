import { Mail, Phone } from "lucide-react";
import Image from "next/image";

// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-10 animate-float"></div>
        <div className="relative z-10 container text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-800">
              Connect With Ocean Innovators
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Partner with us to cultivate sustainable marine solutions and
            empower coastal communities
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">
                        General Inquiries
                      </h3>
                      <a
                        href="mailto:contact@skandamarine.com"
                        className="text-gray-600 hover:text-teal-600 transition"
                      >
                        contact@skandamarine.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">
                        Phone Support
                      </h3>
                      <a
                        href="tel:+914422556677"
                        className="text-gray-600 hover:text-teal-600 transition"
                      >
                        +91 44 2255 6677
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                      <LocationIcon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">
                        Headquarters
                      </h3>
                      <p className="text-gray-600">
                        Marine Algae Research Center
                        <br />
                        Ramanathapuram District
                        <br />
                        Tamil Nadu, India 623501
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Opportunities */}
              <div className="bg-blue-900 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  B2B & Partnership Inquiries
                </h3>
                <div className="space-y-2">
                  <p>📈 Bulk orders for seaweed-coated fertilizers</p>
                  <p>🤝 Coastal community partnerships</p>
                  <p>🔬 Research collaborations</p>
                  <p>🌱 Sustainable farming initiatives</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Subject</label>
                    <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                      <option>Select inquiry type</option>
                      <option>Product Inquiry</option>
                      <option>Farming Partnership</option>
                      <option>Technical Support</option>
                      <option>Investment Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.18117601181!2d78.692888!3d9.3699995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0067597d4824a9%3A0x8d0b5b4ee0a67027!2sRamanathapuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718727772350!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gray-600 mb-8">
            Trusted by coastal communities across India
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <Image
              src="/india-gov-logo.svg"
              alt="Govt of India"
              width={100}
              height={50}
              className="h-12 mx-auto opacity-75"
            />

            <Image
              src="/marine-council-logo.svg"
              alt="Marine Council"
              width={120}
              height={60}
              className="h-16 mx-auto opacity-75"
            />

            <Image
              src="/organic-certified-logo.svg"
              alt="Organic Certified"
              width={110}
              height={55}
              className="h-14 mx-auto opacity-75"
            />

            <Image
              src="/women-empowerment-logo.svg"
              alt="Women Empowerment"
              width={100}
              height={50}
              className="h-12 mx-auto opacity-75"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Add Location Icon component
function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
