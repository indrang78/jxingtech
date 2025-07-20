import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WebsiteDesignPage from "./pages/services/WebsiteDesignPage";
import SocialMediaPage from "./pages/services/SocialMediaPage";
import PaidAdsPage from "./pages/services/PaidAdsPage";
import CRMAutomationPage from "./pages/services/CRMAutomationPage";
import BehavioralAutomationPage from "./pages/services/BehavioralAutomationPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/website-design" element={<WebsiteDesignPage />} />
              <Route path="/services/social-media" element={<SocialMediaPage />} />
              <Route path="/services/paid-ads" element={<PaidAdsPage />} />
              <Route path="/services/crm-automation" element={<CRMAutomationPage />} />
              <Route path="/services/behavioral-automation" element={<BehavioralAutomationPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
