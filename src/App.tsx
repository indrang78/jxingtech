import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { I18nProvider } from "@/contexts/I18nContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WebsiteDesignPage from "./pages/services/WebsiteDesignPage";
import ContentSEOPage from "./pages/services/ContentSEOPage";
import SocialMediaPage from "./pages/services/SocialMediaPage";
import PaidAdsPage from "./pages/services/PaidAdsPage";
import CRMAutomationPage from "./pages/services/CRMAutomationPage";
import BehavioralAutomationPage from "./pages/services/BehavioralAutomationPage";
import AIIntegrationPage from "./pages/services/AIIntegrationPage";
import RepurposingPage from "./pages/services/RepurposingPage";
import ContentDistributionPage from "./pages/services/ContentDistributionPage";
import WebsiteCarePage from "./pages/services/WebsiteCarePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ResourcesPage from "./pages/ResourcesPage";
import BlogPage from "./pages/BlogPage";
import WebsiteGrowthPlaybookPage from "./pages/WebsiteGrowthPlaybookPage";
import HelpPage from "./pages/HelpPage";
import ClientLoginPage from "./pages/ClientLoginPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Routes>
          {/* English routes (default) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/website-design" element={<WebsiteDesignPage />} />
          <Route path="/services/content-seo" element={<ContentSEOPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/paid-ads" element={<PaidAdsPage />} />
          <Route path="/services/crm-automation" element={<CRMAutomationPage />} />
          <Route path="/services/behavioral-automation" element={<BehavioralAutomationPage />} />
          <Route path="/services/ai-integration" element={<AIIntegrationPage />} />
          <Route path="/services/repurposing" element={<RepurposingPage />} />
          <Route path="/services/content-distribution" element={<ContentDistributionPage />} />
          <Route path="/services/website-care" element={<WebsiteCarePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/resources/website-growth-playbook" element={<WebsiteGrowthPlaybookPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/client-login" element={<ClientLoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />

          {/* Localized routes for ms, zh, hi, fr, de, es */}
          {['ms', 'zh', 'hi', 'fr', 'de', 'es'].map(locale => (
            <Route key={locale} path={`/${locale}/*`} element={
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/website-design" element={<WebsiteDesignPage />} />
                <Route path="/services/content-seo" element={<ContentSEOPage />} />
                <Route path="/services/social-media" element={<SocialMediaPage />} />
                <Route path="/services/paid-ads" element={<PaidAdsPage />} />
                <Route path="/services/crm-automation" element={<CRMAutomationPage />} />
                <Route path="/services/behavioral-automation" element={<BehavioralAutomationPage />} />
                <Route path="/services/ai-integration" element={<AIIntegrationPage />} />
                <Route path="/services/repurposing" element={<RepurposingPage />} />
                <Route path="/services/content-distribution" element={<ContentDistributionPage />} />
                <Route path="/services/website-care" element={<WebsiteCarePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/resources/website-growth-playbook" element={<WebsiteGrowthPlaybookPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/client-login" element={<ClientLoginPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              </Routes>
            } />
          ))}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <I18nProvider>
          <AppContent />
          <Toaster />
          <Sonner />
        </I18nProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
