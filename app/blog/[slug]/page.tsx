"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blog-data";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Link
          href="/blog"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Find related posts based on category or tags
  const relatedPosts = blogPosts
    .filter((p) => 
      p.id !== post.id && 
      (p.category === post.category || 
       p.tags.some(tag => post.tags.includes(tag)))
    )
    .slice(0, 2);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-100 hover:text-white mb-6"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-indigo-100">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article>
              <div className="prose prose-lg prose-indigo max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-800 font-bold text-lg">
                      {post.author.split(" ").map(name => name[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-gray-500 text-sm">Author</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                          <Image
                            src={relatedPost.imageSrc}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="mt-1 text-xs text-gray-500">
                            {relatedPost.date} • {relatedPost.readTime}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Categories</h3>
                <div className="space-y-2">
                  {Array.from(new Set(blogPosts.map(post => post.category))).map(category => (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-gray-700">{category}</span>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {blogPosts.filter(post => post.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-lg shadow-md text-white">
                <h3 className="text-lg font-semibold mb-3">Need Marketing Help?</h3>
                <p className="mb-4 text-indigo-100">Let our experts help grow your dental practice with proven strategies.</p>
                <a 
                  href="/contact" 
                  className="inline-block w-full bg-white text-indigo-600 font-medium py-2 px-4 rounded-md text-center hover:bg-indigo-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
