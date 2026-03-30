import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Section } from "@/components/common/Section";

interface BlogCategoryContentProps {
  activeCategories: string[];
  filteredPosts: BlogPost[];
  mainCategory: string;
}

export function BlogCategoryContent({
  activeCategories,
  filteredPosts,
  mainCategory,
}: BlogCategoryContentProps) {
  return (
   <Section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-12">
      
<Link
  href="/blog"
  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mt-6 sm:mt-8 md:mt-10 mb-8 transition-colors"
>
  <ArrowLeft size={16} />
  Back to Blog
</Link>
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-4xl font-bold capitalize">
          Category: {activeCategories.join(" / ")}
        </h1>
        <p className="text-muted-foreground">
          Showing posts matching{" "}
          <span className="font-semibold text-foreground underline decoration-primary decoration-2">
            {mainCategory}
          </span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border bg-card shadow-sm hover:shadow-md hover:border-primary transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Cover Image */}
              <div className="relative w-full h-44 overflow-hidden bg-muted">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                    <span className="text-4xl opacity-30">✍️</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Categories */}
                <div className="flex gap-2 flex-wrap mb-3">
                  {post.category.map((cat) => (
                    <Badge
                      key={cat}
                      variant={cat === mainCategory ? "default" : "secondary"}
                      className="text-xs capitalize"
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
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed flex-1 mb-4">
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
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12 text-center border-2 border-dashed rounded-3xl bg-muted/20">
            <p className="text-muted-foreground">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}