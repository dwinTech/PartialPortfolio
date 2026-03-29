// constants/blog.ts
// Add a `coverImage` field to each post pointing to an image in /public/blog/
// You can use any image source: local files, Unsplash, your CDN, etc.

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string[];
  author: string;
  date: string;
  coverImage?: string; // optional, for the image feature
}
export type BlogCategory = {
  slug: string;
  name: string;
  parent?: string; // for nested categories e.g. "tech" -> "react"
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "tailwindcss", name: "tailwindcss", parent: "tech" },
  { slug: "nodejs", name: "Node js", parent: "tech" },
  { slug: "laravel", name: "Laravel", parent: "tech" },
  { slug: "react", name: "React", parent: "tech" },
  { slug: "nextjs", name: "Next.js", parent: "tech" },
];


export const BLOG_POSTS = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and build your first app.",
     content: "Next.js is a React framework that makes it easy to build full-stack applications. It provides file-based routing, server components, and more.",
    date: "2016-05-10",
    category: ["Tech", "Nextjs"],
    author: "Guillermo Rauch",
    coverImage: "/Blog-Post_Visuals-1.png",
    
  },
  { 
     id: "2",
    slug: "react-hooks-deep-dive",
    title: "React Hooks Deep Dive",
    excerpt: "Understanding useState, useEffect, and custom hooks.",
    content: "React Hooks let you use state and other React features without writing a class. This post explores the most common hooks and patterns.",
    category: ["Tech", "React"],
    author: "Jordan Walke",
    date: "2013-29-05",
    coverImage: "/Blog-Post_Visuals-2.jpg",
  },
  { 
     id: "3",
    slug: "getting-started-with-laravel",
    title: "Getting Started with Laravel",
    excerpt: "Learn the basics of laravel.",
    content: "Laravel is a popular, open-source PHP framework designed for building modern web applications with elegant syntax and a rich ecosystem",
    category: ["Tech", "Laravel"],
    author: " Taylor Otwell",
    date: "2011-06-09",
    coverImage: "/laravel-12-welcome-page.png",
  },
  { 
     id: "4",
    slug: "getting-started-with-nodejs",
    title: "Getting Started with Node.js",
    excerpt: "Learn the basics of Node.js",
    content: "Node.js is a free, open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser, primarily for server-side development.",
    category: ["Tech", "Nodejs"],
    author: "Ryan Dahl",
    date: "2009-27-05",
    coverImage: "/Blog-Post_Visual-5.png",
  },
  { 
     id: "5",
    slug: "getting-started-with-tailwindcss",
    title: "Getting Started with Tailwind CSS",
    excerpt: "Rapidly build modern websites without ever leaving your HTML.",
    content: "In Tailwind CSS, usually refers to two core concepts: configuring source files so the framework knows what CSS to generate, and using utility classes to set the content of pseudo-elements.",
    category: ["Tech", "Tailwind CSS"],
    author: "Adam Wathan",
    date: "2019-13-05",
    coverImage: "/Blog-Post_Visual-4.png",
  },
];