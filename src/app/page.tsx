// src/app/page.tsx (Homepage)
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import { FARMING_METHODS } from "@/constants/farming";
import { PRODUCTS } from "@/constants/products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-10 animate-float"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold text-blue-900 leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-800">
              Ocean to Agriculture
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-4 opacity-80">
            Harnessing Marine Algae for Sustainable Solutions
          </p>
          <button className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-green-700 text-white text-lg font-semibold shadow-lg hover:scale-105 transform transition-all duration-300">
            Explore Our Solutions
          </button>
        </div>

        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#e6f7f9"
              fillOpacity="1"
              d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,138.7C672,139,768,117,864,138.7C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <Section title="Our Ocean Commitment">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              SMAS combines marine biotechnology with traditional wisdom to
              create eco-friendly solutions that benefit both coastal
              communities and modern agriculture.
            </p>
          </div>
          <div className="animate-float">
            <Image
              src="/seaweed-farm.jpg"
              alt="Sustainable Farming"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Farming Techniques */}
      <Section title="Innovative Cultivation Methods">
        <div className="grid md:grid-cols-3 gap-8">
          {FARMING_METHODS.map((method) => (
            <div
              key={method.id}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-full h-48 bg-teal-100 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={method.image || "/placeholder.jpg"}
                  alt={method.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Products Section */}
      <Section title="Marine-Based Solutions">
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              className="transform hover:-translate-y-2 transition duration-300"
            />
          ))}
        </div>
      </Section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Transforming Coastal Communities
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-400 mb-2">1000+</div>
              <div className="text-gray-300">Families Empowered</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-400 mb-2">1500t</div>
              <div className="text-gray-300">Annual Production</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-400 mb-2">40%</div>
              <div className="text-gray-300">Yield Increase</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-400 mb-2">
                ₹50/kg
              </div>
              <div className="text-gray-300">Farmer Income</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
