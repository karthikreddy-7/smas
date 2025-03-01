// src/constants/products.ts
export interface Product {
    id: number;
    title: string;
    description: string;
    applications: string[];
  }
  
  export const PRODUCTS: Product[] = [
    {
      id: 1,
      title: "Seaweed-Coated Fertilizer",
      description: "Organic biostimulant enhancing crop yield by 20-35%",
      applications: [
        "Improves soil fertility",
        "Enhances nutrient uptake",
        "Reduces chemical fertilizer use"
      ]
    },
    {
      id: 2,
      title: "Carrageenan Extract",
      description: "Natural food stabilizer from red seaweed",
      applications: [
        "Dairy products",
        "Processed meats",
        "Pharmaceutical capsules"
      ]
    },
    {
      id: 3,
      title: "Animal Feed Supplement",
      description: "Rich in essential nutrients for livestock",
      applications: [
        "Poultry nutrition",
        "Aquaculture feed",
        "Dairy cattle supplement"
      ]
    }
  ];