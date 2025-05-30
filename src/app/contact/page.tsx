import { Mail, Phone } from "lucide-react";
import Image from "next/image";

// src/app/contact/page.tsx
export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center max-w-screen overflow-hidden">
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
      <section className="py-12">
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
                        href="mailto:skandamarine@gmail.com"
                        className="text-gray-600 hover:text-teal-600 transition"
                      >
                        skandamarine@gmail.com
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
                        +91 90002 46048
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
                        <br />
                        Kavali, Nellore District
                        <br />
                        Andhra Pradesh, India 524201
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

      {/* Social Proof */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gray-600 mb-8">
            Trusted by coastal communities across India
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <Image
              src="/india-gov-logo.png"
              alt="Govt of India"
              width={100}
              height={70}
              className="h-12 mx-auto opacity-75"
            />

            <Image
              src="/marine-council-logo.png"
              alt="Marine Council"
              width={150}
              height={70}
              className="h-18 mx-auto opacity-75"
            />

            <Image
              src="/organic-logo.png"
              alt="Organic Certified"
              width={130}
              height={100}
              className="h-24 mx-auto opacity-75"
            />

            <Image
              src="/women-empowerment-logo.png"
              alt="Women Empowerment"
              width={100}
              height={50}
              className="h-16 mx-auto opacity-75"
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
