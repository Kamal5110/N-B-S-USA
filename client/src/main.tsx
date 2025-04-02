import { createRoot } from "react-dom/client";
import "./index.css";
import { lazy, Suspense } from "react";

// Code splitting - Lazy load the main App component
const App = lazy(() => import("./App"));

// Display a simple loading indicator during initial load
const LoadingIndicator = () => (
  <div className="w-full h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-700">Loading Nishav Business Solutions...</p>
    </div>
  </div>
);

// Root render with Suspense fallback
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingIndicator />}>
    <App />
  </Suspense>
);
