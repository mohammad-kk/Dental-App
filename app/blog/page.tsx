"use client";

import { blogPosts } from "@/data/blog-data";
import BlogCard from "@/components/blog/blog-card";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample images for the carousel
const photos = [
  {
    src: "/images/dentistoperating.jpg",
  },
  {
    src: "/images/Dentures.jpg",
  },
  {
    src: "/images/doctorputtingupxrays.jpg",
  },
  {
    src: "/images/denistoperating2.jpg",
  },
  {
    src: "/images/blackwhiteteethmold.jpg",
  },
  {
    src: "/images/dentalutensils.jpg",
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-left mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dental Marketing Blog</h1>
          <p className="text-xl text-gray-600">
            Expert insights, tips, and strategies to help your dental practice thrive in the digital age.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Left Side Dominant */}
          <div className="lg:col-span-8">
            {/* Featured Post */}
            {blogPosts.length > 0 && (
              <div className="mb-12">
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90"></div>
                  <div className="relative z-10 p-8 md:p-12 text-white">
                    <div>
                      <p className="text-indigo-200 text-sm font-semibold mb-2">
                        {blogPosts[0].category} • {blogPosts[0].date}
                      </p>
                      <h2 className="text-2xl md:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
                      <p className="text-indigo-100 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center mb-6">
                        <div className="mr-4 h-10 w-10 rounded-full bg-indigo-300 flex items-center justify-center">
                          <span className="text-indigo-800 font-bold">
                            {blogPosts[0].author.split(" ").map(name => name[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{blogPosts[0].author}</p>
                          <p className="text-indigo-200 text-sm">{blogPosts[0].readTime}</p>
                        </div>
                      </div>
                      <a
                        href={`/blog/${blogPosts[0].slug}`}
                        className="inline-block bg-white text-indigo-600 font-medium py-3 px-6 rounded-md shadow-md hover:bg-indigo-50 transition-colors duration-300"
                      >
                        Read Article
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog List */}
            <div className="space-y-10">
              {blogPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
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

              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map(tag => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1.5 rounded-full hover:bg-indigo-100 hover:text-indigo-800 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
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
