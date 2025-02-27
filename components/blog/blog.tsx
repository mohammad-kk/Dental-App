import Link from 'next/link';
import React from 'react';


const BlogPage: React.FC = () => {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/blog/${post.id}`}>{'$1'}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
