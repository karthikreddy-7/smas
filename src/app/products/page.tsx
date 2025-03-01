// src/app/products/page.tsx
import Section from "@/components/Section";
import { PRODUCTS } from "@/constants/products";

export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen justify-center flex">
      <Section title="Our Value-Added Products">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="list-disc pl-5">
                {product.applications.map((app, index) => (
                  <li key={index} className="text-blue-800">
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
