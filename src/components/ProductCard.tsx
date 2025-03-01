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
    <div className={`relative bg-gradient-to-b from-teal-100 to-teal-50 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl ${className}`}>
      <div className="relative h-56 bg-teal-200">
        <Image
          src={`/images/products/${title.toLowerCase().replace(/ /g, '-')}.jpg`}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-teal-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        
        <div className="border-t border-teal-300 pt-4">
          <h4 className="text-md font-semibold text-teal-700 mb-2">Key Applications:</h4>
          <ul className="list-disc pl-5 space-y-1 text-teal-600 text-sm">
            {applications.map((app, index) => (
              <li key={index} className="transition-transform hover:translate-x-1">
                {app}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
