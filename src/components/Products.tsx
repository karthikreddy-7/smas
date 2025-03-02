import { PRODUCTS } from "@/constants/products";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";

export default function Products() {
  return (
    <Section title="Marine-Based Solutions">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </Section>
  );
}
