export interface IBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: IBlogCategory;
  author: IBlogAuthor;
  publishedAt: string;
  readingTime: number;
  tags: string[];
}

export interface IBlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface IBlogAuthor {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface IBlogSearchParams {
  query?: string;
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
} 