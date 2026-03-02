import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import BottomDock from "./components/BottomDock";

// Lazy loading pages
const Index = lazy(() => import("./pages/Index"));
const Immobili = lazy(() => import("./pages/Immobili"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
    <div className="w-8 h-8 border-4 border-[#94b0ab] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/immobili" element={<Immobili />} />
              <Route path="/immobile/:id" element={<PropertyDetail />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/property/:slug" element={<PropertyDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <BottomDock />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;