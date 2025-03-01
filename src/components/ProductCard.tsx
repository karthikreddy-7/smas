// src/components/ProductCard.tsx
import { Product } from '@/constants/products';
import Image from 'next/image';

interface ProductCardProps extends Product {
  className?: string;
}

export default function ProductCard({
  title,
  description,
  applications,
  className = ''
}: ProductCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="relative h-48 bg-blue-50">
        <Image
          src={`/images/products/${title.toLowerCase().replace(/ /g, '-')}.jpg`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-blue-800 mb-2">
            Key Applications:
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            {applications.map((app, index) => (
              <li 
                key={index}
                className="text-sm text-blue-700"
              >
                {app}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}