// src/constants/farming.ts
export interface FarmingMethod {
    id: number;
    title: string;
    description: string;
    idealConditions: string;
    image: string | null; 
  }
  
  export const FARMING_METHODS: FarmingMethod[] = [
    {
      id: 1,
      title: "Floating Bamboo Raft",
      image:null,
      description: "Calm water cultivation system using bamboo structures",
      idealConditions: "Sheltered bays with minimal wave action"
    },
    {
      id: 2,
      title: "Longline Method",
      image:null,
      description: "Horizontal cultivation lines in shallow waters",
      idealConditions: "Moderate wave areas with 2-5m depth"
    },
    {
      id: 3,
      title: "Tube Net System",
      image:null,
      description: "Vertical cultivation in high-energy environments",
      idealConditions: "Coastal areas with strong tidal currents"
    }
  ];