import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import GetEstimate from "./pages/GetEstimate";
import ResidentialPainting from "./pages/ResidentialPainting";
import InteriorPainting from "./pages/InteriorPainting";
import ExteriorPainting from "./pages/ExteriorPainting";
import DeckFenceStaining from "./pages/DeckFenceStaining";
import PowerWashing from "./pages/PowerWashing";

import FAQ from "./pages/FAQ";
import Commercial from "./pages/Commercial";
import ServiceAreas from "./pages/ServiceAreas";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-estimate" element={<GetEstimate />} />
            <Route path="/residential-painting" element={<ResidentialPainting />} />
            <Route path="/interior-painting" element={<InteriorPainting />} />
            <Route path="/exterior-painting" element={<ExteriorPainting />} />
            <Route path="/deck-fence-staining" element={<DeckFenceStaining />} />
            <Route path="/power-washing" element={<PowerWashing />} />
            
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
