export interface NavItem {
  title: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt: string;
} 