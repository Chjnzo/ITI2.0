import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import BottomDock from "./components/BottomDock";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieBanner from "./components/CookieBanner";

// Lazy loading pages
const Index = lazy(() => import("./pages/Index"));
const Immobili = lazy(() => import("./pages/Immobili"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--secondary)' }}>
    <div className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'var(--primary)', borderTopColor: 'transparent' }}></div>
  </div>
);

const App = () => (
  <ErrorBoundary>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <BottomDock />
            <CookieBanner />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;