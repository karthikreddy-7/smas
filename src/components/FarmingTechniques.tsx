import { FARMING_METHODS } from "@/constants/farming";
import Image from "next/image";

export default function FarmingTechniques() {
  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-10">
        Innovative Cultivation Methods
      </h2>

      {/* Farming Methods Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FARMING_METHODS.map((method) => (
          <div
            key={method.id}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group min-h-[400px] flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-48 bg-teal-100 rounded-lg overflow-hidden mb-4">
              <Image
                src={method.image || "/placeholder.jpg"}
                alt={method.title}
                width={500}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              {method.title}
            </h3>
            <p className="text-gray-600 flex-grow">{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
