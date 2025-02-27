import Link from 'next/link';
import React from 'react';
import { blogPosts } from '@/data/blog-data';
import { Container, Section } from '@/components/craft';
import { ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <Section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dental Marketing Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and strategies to help your dental practice thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date} • {post.category}</p>
                <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                      <span className="text-primary font-medium text-sm">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BlogPage;
