// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="SMAS Logo" 
              className="h-12 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-blue-800">
              Skanda Marine Algae
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="/farming" className="text-gray-700 hover:text-blue-600">
              Farming
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}