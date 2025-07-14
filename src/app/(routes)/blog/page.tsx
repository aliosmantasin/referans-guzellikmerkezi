import { Suspense } from 'react';
import { Metadata } from "next";
import { BlogList } from "@/components/features/blog/blog-list";
import { BlogSidebar } from "@/components/features/blog/blog-sidebar";
import { BlogSearch } from "@/components/features/blog/blog-search";

export const metadata: Metadata = {
  title: "Blog | Beatty Center",
  description: "Beatty Center blog yazıları, sağlık ve güzellik hakkında güncel bilgiler.",
  openGraph: {
    title: "Blog | Beatty Center",
    description: "Beatty Center blog yazıları, sağlık ve güzellik hakkında güncel bilgiler.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full lg:w-3/4">
          <h1 className="mb-8 text-4xl font-bold">Blog</h1>
          <BlogSearch />
          <BlogList />
        </div>
        <div className="w-full lg:w-1/4">
          <BlogSidebar />
        </div>
      </div>
    </main>
    </Suspense>
  );
} 