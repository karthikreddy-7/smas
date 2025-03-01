// src/components/Mission.tsx
import Image from "next/image";
import Section from "@/components/Section";

export default function Mission() {
  return (
    <Section title="Our Ocean Commitment">
      <div className="grid md:grid-cols-2 gap-12 min-h-screen justify-center items-center">
        <div className="bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            SMAS combines marine biotechnology with traditional wisdom to create eco-friendly solutions that benefit both coastal communities and modern agriculture.
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
  );
}
