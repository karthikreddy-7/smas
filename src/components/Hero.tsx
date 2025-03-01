// src/components/Hero.tsx
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="relative h-96">
      <Image
        src="/images/banner.jpg"
        alt="Seaweed Farming"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-blue-900/50 flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}