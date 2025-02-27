"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group flex flex-col md:flex-row gap-6 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white">
      <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <div>
            <div className="flex items-center mb-2">
              <p className="text-sm font-medium text-indigo-600 mr-3">
                {post.category}
              </p>
              <p className="text-sm text-gray-500">
                {post.date} • {post.readTime}
              </p>
            </div>
            <Link href={`/blog/${post.slug}`} className="block">
              <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600 mb-3">
                {post.title}
              </h3>
              <p className="text-base text-gray-600 line-clamp-3 mb-4">
                {post.excerpt}
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-800 font-bold text-sm">
                {post.author.split(" ").map(name => name[0]).join("")}
              </span>
            </div>
            <p className="font-medium text-gray-900 text-sm">{post.author}</p>
          </div>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
