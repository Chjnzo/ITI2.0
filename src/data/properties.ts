export interface Property {
  id: number;
  slug: string;
  title: string;
  price: string;
  location: string;
  category: string;
  description: string;
  piano?: string;
  garage?: boolean;
  stato?: string;
  specs: {
    mq: number;
    rooms: string | number;
    baths: number;
  };
  features: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  // ... dati di esempio mantenuti per compatibilità
];