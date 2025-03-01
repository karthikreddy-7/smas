import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-blue-50 to-teal-100">
      {/* Background Waves */}
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-10 animate-float"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-blue-900 leading-tight tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-800">
            Ocean to Agriculture
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mt-4 opacity-80 max-w-2xl mx-auto">
          Harnessing Marine Algae for Sustainable Solutions
        </p>

        <div>
          <button className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-green-700 text-white text-lg font-semibold shadow-lg hover:scale-105 transform transition-all duration-300">
            Explore Our Solutions
          </button>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute hidden md:block">
        <Image
          src="/seaweed-icon.jpg"
          alt="Seaweed Icon"
          width={6000}
          height={6000}
          className="opacity-40"
        />
      </div>

      {/* Bottom Wave */}
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
  );
}
