export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  duration: string;
  price: string;
  category: string;
  benefits: string[];
  process: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  image: string;
} 