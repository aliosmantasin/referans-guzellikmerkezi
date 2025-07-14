'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") || "");

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const params = new URLSearchParams(searchParams.toString());
      
      if (searchQuery) {
        params.set("query", searchQuery);
      } else {
        params.delete("query");
      }
      
      router.push(`/blog?${params.toString()}`);
    },
    [searchQuery, searchParams, router]
  );

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Blog yazılarında ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button type="submit">Ara</Button>
      </div>
    </form>
  );
} 