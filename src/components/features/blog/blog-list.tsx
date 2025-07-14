'use client';

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MOCK_POSTS } from "@/app/(routes)/blog/mock-data";

export function BlogList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {MOCK_POSTS.map((post) => (
        <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
          <CardHeader className="p-0">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Link
                href={`/blog?category=${post.category.slug}`}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {post.category.name}
              </Link>
            </div>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="mb-3 text-2xl font-semibold transition-colors group-hover:text-primary line-clamp-2">
                {post.title}
              </h2>
            </Link>
            <p className="mb-4 text-muted-foreground line-clamp-2">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-6 pt-0 border-t">
            <div className="flex items-center gap-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
                quality={85}
              />
              <div>
                <p className="font-medium text-sm">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{format(new Date(post.publishedAt), "d MMM yyyy", { locale: tr })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{post.readingTime} dk</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
} 