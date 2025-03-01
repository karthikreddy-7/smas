// src/components/Products.tsx
import { PRODUCTS } from "@/constants/products";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";

export default function Products() {
  return (
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
  );
}