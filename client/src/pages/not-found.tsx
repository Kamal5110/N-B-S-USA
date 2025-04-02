import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Nishav Business Solutions</title>
        <meta name="description" content="The page you are looking for could not be found. Please check the URL or navigate back to the homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="w-full max-w-lg text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="text-[10rem] font-bold text-[var(--primary)]/10">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <AlertTriangle size={80} className="text-[var(--primary)]" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="default" 
                size="lg"
                asChild
                className="flex items-center gap-2"
              >
                <Link href="/">
                  <Home size={18} />
                  Return to Homepage
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={18} />
                Go Back
              </Button>
            </div>
            
            <div className="pt-8 border-t border-gray-200 mt-8">
              <h2 className="text-xl font-semibold text-[var(--primary)] mb-4">Looking for something specific?</h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/services" className="text-[var(--primary)] hover:text-[var(--accent)] underline">Our Services</Link>
                <Link href="/about" className="text-[var(--primary)] hover:text-[var(--accent)] underline">About Us</Link>
                <Link href="/clients" className="text-[var(--primary)] hover:text-[var(--accent)] underline">Client Stories</Link>
                <Link href="/blogs" className="text-[var(--primary)] hover:text-[var(--accent)] underline">Blog & Resources</Link>
                <Link href="/contact" className="text-[var(--primary)] hover:text-[var(--accent)] underline">Contact Us</Link>
                <Link href="/book-meeting" className="text-[var(--primary)] hover:text-[var(--accent)] underline">Book a Meeting</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
