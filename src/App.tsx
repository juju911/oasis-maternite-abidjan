import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><p>Page À propos en cours de développement</p></div>} />
          <Route path="/services" element={<div className="min-h-screen flex items-center justify-center"><p>Page Services en cours de développement</p></div>} />
          <Route path="/testimonials" element={<div className="min-h-screen flex items-center justify-center"><p>Page Témoignages en cours de développement</p></div>} />
          <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><p>Page Blog en cours de développement</p></div>} />
          <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><p>Page Contact en cours de développement</p></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
