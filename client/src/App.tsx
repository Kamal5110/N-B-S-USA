import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/common/BackToTop";
import FloatingContact from "./components/common/FloatingContact";
import PageTransition from "./components/common/PageTransition";

// Lazy load page components for better performance
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Clients = lazy(() => import("@/pages/Clients"));
const Blogs = lazy(() => import("@/pages/Blogs"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const BookMeeting = lazy(() => import("@/pages/BookMeeting"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Loading fallback for page components
const PageLoading = () => (
  <div className="w-full h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <Home />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/about">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <About />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/services">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <Services />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/service/:id">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <ServiceDetail />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/clients">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <Clients />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/blogs">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <Blogs />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/blog/:id">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <BlogPost />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/contact">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <Contact />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/book-meeting">
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <BookMeeting />
            </Suspense>
          </PageTransition>
        </Route>
        <Route>
          <PageTransition>
            <Suspense fallback={<PageLoading />}>
              <NotFound />
            </Suspense>
          </PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <BackToTop />
        <FloatingContact />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
