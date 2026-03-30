// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <Section className="py-12">
      {/* Header */}
      <div className="mb-10 space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight">Blog</h1>
        <p className="text-muted-foreground text-lg">Thoughts, tutorials.</p>
      </div>

      {/* Post Grid */}
      {BLOG_POSTS.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border bg-card shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Cover Image */}
              <div className="relative w-full h-44 overflow-hidden bg-muted">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  /* Fallback gradient placeholder when no image is provided */
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                    <span className="text-4xl opacity-30"></span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.category.map((cat) => (
                    <Badge
                      key={cat}
                      variant="outline"
                      className="capitalize text-xs"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t">
                  <span className="flex items-center gap-1.5">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>

                {/* Read more */}
                <span className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}