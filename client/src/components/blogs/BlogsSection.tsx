import { Link } from "wouter";
import { blogPosts } from "@/lib/data";

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Latest Insights & News
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--darkgray)]">
            Stay informed with our expert articles and updates on accounting trends. 
            Discover how our <Link href="/services" className="text-[var(--accent)] hover:underline">accounting services</Link> can transform your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        <div className="text-center mt-12 space-y-4">
          <Link 
            href="/blogs"
            className="bg-[var(--primary)] text-white px-8 py-3 rounded-md font-bold hover:bg-[var(--primary)]/90 transition duration-300 shadow-md inline-block mx-2"
          >
            View All Articles
          </Link>
          <div className="mt-4 text-[var(--darkgray)]">
            Questions about our expertise? <Link href="/contact" className="text-[var(--accent)] hover:underline">Contact us</Link> or <Link href="/book-meeting" className="text-[var(--accent)] hover:underline">schedule a free consultation</Link>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
