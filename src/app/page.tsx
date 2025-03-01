// src/app/page.tsx (Homepage)
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Section from '@/components/Section';
import { FARMING_METHODS } from '@/constants/farming';
import { PRODUCTS } from '@/constants/products';

export default function Home() {
  return (
    <>
      <Hero 
        title="Sustainable Seaweed Solutions"
        subtitle="Empowering Coastal Communities through Marine Algae Cultivation"
      />
      
      <Section title="Our Mission">
        <p className="text-lg">
          SMAS combines traditional farming wisdom with modern technology to 
          create sustainable livelihoods while protecting marine ecosystems.
        </p>
      </Section>

      <Section title="Farming Techniques">
        <div className="grid md:grid-cols-3 gap-8">
          {FARMING_METHODS.map((method) => (
            <div key={method.id} className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Products">
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Section>
    </>
  );
}