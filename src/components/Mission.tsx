import Image from "next/image";

export default function Mission() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto text-center">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10">
        Our Ocean Commitment
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="bg-white bg-opacity-70 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            SMAS combines marine biotechnology with traditional wisdom to create
            eco-friendly solutions that benefit both coastal communities and
            modern agriculture.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <Image
            src="/images/seaweed-farm.jpg"
            alt="Sustainable Farming"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
