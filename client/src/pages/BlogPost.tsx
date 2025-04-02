import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { blogPosts } from "@/lib/data";
import CTASection from "@/components/home/CTASection";

const BlogPost = () => {
  const [, params] = useRoute('/blog/:id');
  const postId = params?.id ? parseInt(params.id) : 0;
  
  const post = blogPosts.find(post => post.id === postId);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!post) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-[var(--primary)] mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-[var(--darkgray)] mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            href="/blogs"
            className="bg-[var(--primary)] text-white px-6 py-3 rounded-md font-bold hover:bg-[var(--primary)]/90 transition duration-300 shadow-md inline-block"
          >
            Return to Blog
          </Link>
        </div>
      </section>
    );
  }
  
  return (
    <>
      {/* Post Header */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center text-white/80 mb-4">
            <i className="far fa-calendar-alt mr-2"></i>
            <span>{post.date}</span>
            <span className="mx-3">|</span>
            <span>{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto"></div>
        </div>
      </section>
      
      {/* Post Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-10">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto" 
              />
            </div>
            
            {/* Post Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
            
            {/* Post Meta */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-[var(--primary)] mb-2">Share this post:</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                      <i className="fab fa-facebook-f text-lg"></i>
                    </a>
                    <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                      <i className="fab fa-twitter text-lg"></i>
                    </a>
                    <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                      <i className="fab fa-linkedin-in text-lg"></i>
                    </a>
                    <a href="#" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">
                      <i className="fas fa-envelope text-lg"></i>
                    </a>
                  </div>
                </div>
                
                <Link 
                  href="/blogs"
                  className="text-[var(--primary)] hover:text-[var(--accent)] font-semibold flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i> Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      <section className="py-16 bg-[var(--lightgray)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-12 text-center">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter(relatedPost => relatedPost.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <div 
                  key={relatedPost.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 bg-gray-300 relative">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-[var(--darkgray)]/70 mb-3">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                      {relatedPost.title}
                    </h3>
                    <p className="text-[var(--darkgray)] mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="text-[var(--primary)] font-semibold hover:text-[var(--accent)] transition duration-300 inline-flex items-center"
                    >
                      Read More <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default BlogPost;
