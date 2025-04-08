import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center px-4">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 animate-fade-in-up">
            Cultivating Ocean Prosperity
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-up delay-100">
            Pioneering sustainable seaweed solutions while empowering coastal
            communities through marine innovation.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group animate-fade-in-right">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-lg">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Our Journey
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2025, SMAS emerged from a vision to revolutionize
                seaweed cultivation along India&apos;s coastal belts. What began
                as a community initiative has blossomed into a nationwide
                movement empowering thousands of coastal families.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-left">
            <Image
              src="/images/women-farmers.jpg"
              alt="Women Farmers"
              width={400}
              height={300}
              className="rounded-xl shadow-lg w-full h-auto object-contain"
            />

            <Image
              src="/images/seaweed-harvest.jpg"
              alt="Seaweed Harvest"
              width={400}
              height={300}
              className="rounded-xl shadow-lg w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Guiding Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ecological Balance",
                icon: "🌱",
                description:
                  "Maintaining marine ecosystem integrity through sustainable cultivation practices",
              },
              {
                title: "Community First",
                icon: "👩‍🌾",
                description:
                  "Empowering coastal families with 80% women participation in our workforce",
              },
              {
                title: "Innovation Driven",
                icon: "🔬",
                description:
                  "Combining traditional knowledge with modern marine biotechnology",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-md hover:bg-white/20 transition duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Right: Big Heading */}
          <div className="flex justify-center items-center">
            <h2 className="text-6xl md:text-8xl font-bold text-blue-900">
              Skanda Marine <br /> Solutions
            </h2>
          </div>
          {/* Left: Timeline */}
          <div className="border-l-4 border-teal-500 pl-8">
            {[
              {
                year: "2025",
                title: "SMAS Foundation",
                content:
                  "Established in Tamil Nadu with first 50 farming families",
              },
              /*
              {
                year: "2027",
                title: "Tech Integration",
                content:
                  "Implemented IoT-enabled cultivation monitoring systems",
              },
              {
                year: "2029",
                title: "National Recognition",
                content:
                  "Awarded Best Marine Agri-Initiative by Government of India",
              },
              {
                year: "2030",
                title: "Global Expansion",
                content:
                  "Launched international operations across 5 coastal nations",
              },
              */
            ].map((milestone, index) => (
              <div
                key={index}
                className="mb-12 relative pl-8 animate-fade-in-up"
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[10px] top-2"></div>
                <div className="text-2xl font-bold text-teal-600">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mt-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 mt-2">{milestone.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
