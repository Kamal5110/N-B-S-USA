import { Helmet } from 'react-helmet';
import { Link } from "wouter";
import { blogPosts } from "@/lib/data";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Insights | Nishav Business Solutions</title>
        <meta name="description" content="Stay informed with our latest accounting articles, financial news, and expert insights on offshore accounting services." />
        <meta name="keywords" content="accounting blog, accounting insights, accounting tips, CPA firm news, offshore accounting articles" />
        <link rel="canonical" href="https://nishavbusiness.com/blogs" />
      </Helmet>
      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20" aria-labelledby="blogs-page-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="blogs-page-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">Blog & Insights</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay informed with our latest articles, news, and expert financial insights.
          </p>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-20 bg-white" aria-labelledby="featured-article-heading">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 id="featured-article-heading" className="text-3xl font-bold text-[var(--primary)] mb-8">Featured Article</h2>
            
            <div className="bg-[var(--lightgray)] rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gray-300 h-full relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-[var(--darkgray)]/70 mb-3">
                    <i className="far fa-calendar-alt mr-2"></i>
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-[var(--darkgray)] mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <Link 
                    href={`/blog/${blogPosts[0].id}`}
                    className="bg-[var(--primary)] text-white px-6 py-2 rounded-md font-bold hover:bg-[var(--primary)]/90 transition duration-300 shadow-md inline-block"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Posts */}
          <h2 id="recent-articles-heading" className="text-3xl font-bold text-[var(--primary)] mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-labelledby="recent-articles-heading">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-[var(--lightgray)] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gray-300 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[var(--darkgray)]/70 mb-3">
                    <i className="far fa-calendar-alt mr-2"></i>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                    {post.title}
                  </h3>
                  <p className="text-[var(--darkgray)] mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-[var(--primary)] font-semibold hover:text-[var(--accent)] transition duration-300 inline-flex items-center"
                  >
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-16 bg-[var(--primary)] rounded-lg shadow-lg p-8 md:p-12" aria-labelledby="newsletter-heading">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 id="newsletter-heading" className="text-2xl font-bold text-white mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/80 mb-0">
                  Receive the latest financial insights, tax tips, and accounting news directly to your inbox.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="px-4 py-3 rounded-md focus:outline-none flex-grow"
                  />
                  <button 
                    type="submit"
                    className="bg-[var(--accent)] text-[var(--primary)] px-6 py-3 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
