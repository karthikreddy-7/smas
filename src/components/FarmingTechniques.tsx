import { FARMING_METHODS } from "@/constants/farming";
import Image from "next/image";
import Section from "@/components/Section";

export default function FarmingTechniques() {
  return (
    <Section title="Innovative Cultivation Methods">
      <div className="grid md:grid-cols-3 gap-8 ">
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
  );
}
