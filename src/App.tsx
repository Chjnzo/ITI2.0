import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Immobili from "./pages/Immobili";
import PropertyDetail from "./pages/PropertyDetail";
import ChiSiamo from "./pages/ChiSiamo";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import BottomDock from "./components/BottomDock";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/immobili" element={<Immobili />} />
          <Route path="/immobile/:id" element={<PropertyDetail />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/property/:slug" element={<PropertyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomDock />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;