export interface Property {
  id: number;
  slug: string;
  title: string;
  price: string;
  location: string;
  description: string;
  specs: {
    mq: number;
    rooms: number;
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
  {
    id: 1,
    slug: 'penthouse-san-vigilio',
    title: "Penthouse San Vigilio",
    location: "Bergamo Alta",
    price: "€ 890.000",
    description: "Uno splendido attico situato nel cuore della Città Alta, con una vista mozzafiato sulle valli bergamasche. Questa proprietà unica combina il fascino storico con finiture ultramoderne, domotica di ultima generazione e un terrazzo abitabile di 40mq.",
    specs: { mq: 210, rooms: 4, baths: 3 },
    features: ['Terrazzo Vista Mura', 'Domotica', 'Box Doppio', 'Finiture di Pregio'],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Marco Ferrari",
      phone: "+39 035 123 4567",
      email: "marco.f@iltuoimmobiliare.it"
    }
  },
  {
    id: 2,
    slug: 'loft-industriale-centro',
    title: "Loft Industriale",
    location: "Centro Città",
    price: "€ 345.000",
    description: "Un loft open-space ricavato da un'ex officina meccanica degli anni '50. Altezze incredibili, mattoni a vista e grandi vetrate rendono questo spazio ideale per chi cerca una soluzione abitativa non convenzionale a pochi passi da Via XX Settembre.",
    specs: { mq: 125, rooms: 2, baths: 2 },
    features: ['Altezze 5mt', 'Mattoni a Vista', 'Riscaldamento a Pavimento', 'Aria Condizionata'],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Elena Gualdi",
      phone: "+39 035 987 6543",
      email: "elena.g@iltuoimmobiliare.it"
    }
  },
  {
    id: 3,
    slug: 'villa-contemporanea-gorle',
    title: "Villa Contemporanea",
    location: "Gorle",
    price: "€ 1.250.000",
    description: "Villa unifamiliare di nuova costruzione certificata in Classe A4. Immersa nel verde della zona residenziale di Gorle, la villa offre ampi spazi esterni, piscina a sfioro e un design architettonico che fonde interni ed esterni in un unico ambiente armonioso.",
    specs: { mq: 450, rooms: 6, baths: 4 },
    features: ['Piscina', 'Classe A4', 'Giardino 1000mq', 'Security System'],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Marco Ferrari",
      phone: "+39 035 123 4567",
      email: "marco.f@iltuoimmobiliare.it"
    }
  }
];