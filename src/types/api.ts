import { Service, BlogPost } from './common';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ServiceResponse extends ApiResponse<Service> {}
export interface ServicesResponse extends ApiResponse<Service[]> {}
export interface BlogPostResponse extends ApiResponse<BlogPost> {}
export interface BlogPostsResponse extends ApiResponse<BlogPost[]> {} 