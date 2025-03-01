// src/app/page.tsx (Homepage)
import FarmingTechniques from "@/components/FarmingTechniques";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Mission from "@/components/Mission";
import ProductCard from "@/components/ProductCard";
import Products from "@/components/Products";
import Section from "@/components/Section";
import { FARMING_METHODS } from "@/constants/farming";
import { PRODUCTS } from "@/constants/products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white">
      <Hero />

      <Mission />

      {/* Farming Techniques */}
      <FarmingTechniques />

      {/* Products Section */}
      <Products />

      {/* Impact Section */}
      <Impact />
    </div>
  );
}
