'use client';

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IBlogCategory } from "@/types/blog";

// Geçici mock data - Daha sonra API'den gelecek
const MOCK_CATEGORIES: IBlogCategory[] = [
  { id: "1", name: "Cilt Bakımı", slug: "cilt-bakimi" },
  { id: "2", name: "Saç Bakımı", slug: "sac-bakimi" },
  { id: "3", name: "Beslenme", slug: "beslenme" },
  { id: "4", name: "Güzellik", slug: "guzellik" },
  { id: "5", name: "Sağlık", slug: "saglik" }
];

const POPULAR_TAGS = [
  "cilt bakımı",
  "saç bakımı",
  "beslenme",
  "güzellik",
  "sağlık",
  "doğal bakım",
  "makyaj",
  "spa"
];

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Kategoriler</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {MOCK_CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/blog?category=${category.slug}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popüler Etiketler</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TAGS.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bülten</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            En yeni blog yazılarımızdan haberdar olmak için bültenimize abone olun.
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Abone Ol
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 