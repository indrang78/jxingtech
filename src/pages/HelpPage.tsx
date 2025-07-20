import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight,
  Search,
  HelpCircle,
  MessageCircle,
  Calendar,
  Users,
  Settings,
  FileText,
  Zap,
  Globe,
  BarChart3,
  Clock,
  Shield,
  Phone,
  Mail
} from "lucide-react";

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Pre-sale Questions", "Client Support"];

  const faqData = [
    // Pre-sale Questions
    {
      id: 1,
      category: "Pre-sale Questions",
      question: "What digital marketing services does JXING Tech offer?",
      answer: "JXING Tech offers a comprehensive suite of digital marketing services including Growth-Driven Website Design & Development, Content-Led SEO & Brand Storytelling, Omni-Channel Social Media Management, Performance Marketing (Paid Ads), CRM & Automation Integration, Behavioral Marketing Automation, AI Integration & Agent Development, Content Repurposing Engine, Journey-Driven Content Distribution, and Website Care & Optimization Plans. We specialize in integrated solutions for SMEs looking to scale their digital presence.",
      icon: Globe,
      tags: ["services", "digital marketing", "SEO", "website design", "social media"]
    },
    {
      id: 2,
      category: "Pre-sale Questions",
      question: "How does your subscription model for SME digital solutions work?",
      answer: "Our subscription model is designed for flexibility and value. We offer three main packages: Digital Launchpad (MYR 2,500-3,500/month), Growth Engine (MYR 4,500-6,500/month), and Enterprise Ascend (MYR 8,000-12,000/month). You can choose between month-to-month flexibility or annual contracts with 10% savings. All plans are billed monthly, and annual contracts have a 12-month minimum commitment. You can upgrade anytime, and downgrades take effect at your next billing cycle.",
      icon: BarChart3,
      tags: ["subscription", "pricing", "packages", "billing", "SME"]
    },
    {
      id: 3,
      category: "Pre-sale Questions",
      question: "What's the typical project timeline for web development?",
      answer: "Website development timelines vary based on complexity and scope. A standard business website typically takes 4-6 weeks from concept to launch, including design, development, content creation, and testing. E-commerce sites may take 6-8 weeks. Complex custom solutions can take 8-12 weeks. We follow a structured process: Discovery & Planning (1 week), Design & Approval (1-2 weeks), Development & Content (2-4 weeks), Testing & Launch (1 week). We provide detailed timelines during our initial consultation.",
      icon: Clock,
      tags: ["timeline", "web development", "website", "project duration"]
    },
    {
      id: 4,
      category: "Pre-sale Questions",
      question: "Do you offer custom AI automation solutions?",
      answer: "Yes! We specialize in AI integration and automation solutions tailored to your business needs. Our AI services include custom chatbot development, intelligent customer service automation, predictive analytics implementation, workflow automation, and AI-powered content generation. We work with leading AI platforms and can develop custom solutions starting from MYR 10,000 based on scope. Our Enterprise Ascend package includes AI integration as a standard feature.",
      icon: Zap,
      tags: ["AI", "automation", "custom solutions", "chatbots", "enterprise"]
    },
    {
      id: 5,
      category: "Pre-sale Questions",
      question: "What platforms do you work with for digital marketing?",
      answer: "We work with all major digital marketing platforms including Google Ads, Facebook Ads, Instagram, LinkedIn, TikTok, YouTube, Google Analytics, Google Search Console, Facebook Business Manager, Mailchimp, HubSpot, Salesforce, WordPress, Shopify, Wix, and many more. Our team stays current with platform updates and best practices. We recommend platforms based on your target audience, budget, and business goals rather than pushing specific tools.",
      icon: Settings,
      tags: ["platforms", "tools", "Google Ads", "Facebook", "social media", "CRM"]
    },

    // Client Support FAQs
    {
      id: 6,
      category: "Client Support",
      question: "How do I access my client dashboard for project updates?",
      answer: "Your client dashboard is accessible at clients.jxingtech.com. You'll receive login credentials via email after your project kicks off. The dashboard provides real-time project updates, performance reports, campaign analytics, content calendars, and direct communication with your account team. If you've forgotten your login details, use the 'Forgot Password' feature or contact our support team. The dashboard is mobile-friendly and updated in real-time.",
      icon: Users,
      tags: ["client dashboard", "login", "project updates", "access"]
    },
    {
      id: 7,
      category: "Client Support",
      question: "How do I request a website update or SEO change?",
      answer: "Website updates and SEO changes can be requested through multiple channels: 1) Your client dashboard has a 'Request Update' feature, 2) Email your account manager directly, 3) Use our support portal, or 4) Submit requests via our website contact form. Include specific details about the changes needed. Minor updates (text changes, image swaps) are typically completed within 24-48 hours. Larger changes may take 3-5 business days. All requests are prioritized based on urgency and complexity.",
      icon: FileText,
      tags: ["website updates", "SEO changes", "requests", "support"]
    },
    {
      id: 8,
      category: "Client Support",
      question: "What's included in my monthly website care plan?",
      answer: "Your monthly website care plan includes: security monitoring and updates, performance optimization, backup management, plugin/software updates, broken link checks, uptime monitoring, basic SEO maintenance, monthly performance reports, priority support, and minor content updates (up to 2 hours per month). Additional services like major design changes, new page creation, or extensive content updates may incur additional charges. Detailed plan features are outlined in your service agreement.",
      icon: Shield,
      tags: ["website care", "maintenance", "security", "updates", "support"]
    },
    {
      id: 9,
      category: "Client Support",
      question: "Can I pause or upgrade my digital service subscription?",
      answer: "Yes! Upgrades can be made anytime and take effect immediately. For downgrades or pausing services, changes take effect at your next billing cycle to ensure service continuity. Monthly subscribers can pause with 30 days' notice. Annual subscribers can discuss temporary adjustments with their account manager. We'll work with you to find solutions that fit your changing business needs while maintaining service quality.",
      icon: Settings,
      tags: ["subscription", "upgrade", "pause", "billing", "changes"]
    },
    {
      id: 10,
      category: "Client Support",
      question: "Who do I contact for urgent support regarding my digital campaigns?",
      answer: "For urgent support, contact us through: 1) Priority support hotline (provided in your welcome packet), 2) Email support@jxingtech.com with 'URGENT' in the subject line, 3) Your dedicated account manager's direct contact, 4) Live chat on our website during business hours, or 5) Your client dashboard's emergency contact feature. Enterprise clients have 24/7 priority support. We aim to respond to urgent issues within 2 hours during business hours and 4 hours outside business hours.",
      icon: Phone,
      tags: ["urgent support", "emergency", "contact", "campaigns", "priority"]
    }
  ];

  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const quickActions = [
    {
      title: "Contact Support Team",
      description: "Get personalized help from our experts",
      icon: MessageCircle,
      action: "Contact Support",
      color: "azure"
    },
    {
      title: "Book a Consultation",
      description: "Schedule a call with our digital strategy experts",
      icon: Calendar,
      action: "Book Consultation",
      color: "xanthous"
    },
    {
      title: "Live Chat",
      description: "Get instant help during business hours",
      icon: MessageCircle,
      action: "Start Live Chat",
      color: "marian-blue"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How Can We Help Your Business?
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about our digital agency services, processes, and client support.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-12 text-base"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground mr-2">Categories:</span>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full ${
                        selectedCategory === category 
                          ? "bg-azure text-white hover:bg-azure/90" 
                          : "hover:bg-muted"
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main FAQ Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-oxford-blue mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} 
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>

              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-card rounded-xl px-6 border-0 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                      <AccordionTrigger className="text-left text-oxford-blue font-semibold hover:no-underline py-6 pr-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-azure/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <faq.icon className="h-4 w-4 text-azure" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge variant="outline" className="text-xs">
                                {faq.category}
                              </Badge>
                            </div>
                            <div className="text-left">
                              {faq.question}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-12">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Card className="bg-muted/30 border-0 rounded-xl p-12 text-center">
                  <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-oxford-blue mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any FAQs matching your search. Try different keywords or browse our categories.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                  >
                    Clear Search
                  </Button>
                </Card>
              )}
            </div>

            {/* Sidebar - Quick Actions */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <CardHeader className="p-6 border-b border-muted/20">
                    <CardTitle className="text-lg font-bold text-oxford-blue">
                      Need More Help?
                    </CardTitle>
                    <CardDescription>
                      Still can't find what you're looking for?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {quickActions.map((action, index) => (
                        <div
                          key={index}
                          className="w-full p-4 border border-muted/30 rounded-lg hover:border-azure/30 hover:bg-azure/5 transition-all duration-200 cursor-pointer group"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-azure/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-azure/20 transition-colors">
                              <action.icon className="h-5 w-5 text-azure" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm text-oxford-blue mb-1">
                                {action.title}
                              </div>
                              <div className="text-xs text-muted-foreground leading-relaxed">
                                {action.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Support Hours */}
                <Card className="bg-azure/5 border border-azure/20 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-oxford-blue mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-azure" />
                      Support Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Enterprise clients have 24/7 priority support access.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Still Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our digital strategy experts are here to help. Get personalized assistance for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
              <Mail className="h-5 w-5 mr-2" />
              Contact Our Support Team
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
              <Calendar className="h-5 w-5 mr-2" />
              Book a Consultation
            </Button>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-white/90 text-sm">
              <MessageCircle className="h-4 w-4 inline mr-2" />
              <strong>Live Chat Available:</strong> Get instant help during business hours via our website chat widget
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;