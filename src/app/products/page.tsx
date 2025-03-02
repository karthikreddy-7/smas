import Image from "next/image";
import Section from "@/components/Section";
import { PRODUCTS } from "@/constants/products";

export default function ProductsPage() {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white min-h-screen flex justify-center px-6 py-12">
      <Section title="Our Value-Added Products">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.applications.map((app, index) => (
                    <li
                      key={index}
                      className="flex items-center text-blue-800 text-sm"
                    >
                      ✅ {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
