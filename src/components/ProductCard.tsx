import { Product } from "@/constants/products";
import Image from "next/image";

interface ProductCardProps extends Product {}

export default function ProductCard({
  title,
  description,
  applications,
  image,
}: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 bg-gradient-to-r from-teal-300 to-teal-500">
        <Image
          src={image} // ✅ Use the product's image property directly
          alt={title}
          fill
          className="object-cover rounded-t-3xl"
        />
      </div>

      {/* Product Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>

        <div className="border-t border-gray-300 pt-4">
          <h4 className="text-lg font-semibold text-teal-600 mb-2">
            Key Applications:
          </h4>
          <ul className="space-y-2">
            {applications.map((app, index) => (
              <li
                key={index}
                className="flex items-center text-gray-800 text-sm transition-transform hover:translate-x-2"
              >
                ✅ {app}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
