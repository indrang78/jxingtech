import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
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
  CreditCard,
  Lightbulb,
  BookOpen,
  FileCheck,
  Mail
} from "lucide-react";

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Services", "Billing", "Onboarding", "Technical"];

  const faqData = [
    // Services
    {
      id: 1,
      category: "Services",
      question: "How do I sign up for JXING Tech's services?",
      answer: "Signing up is simple! Start by booking a free consultation through our website or contact page. We'll discuss your business goals, recommend the right package, and create a custom proposal. Once approved, we'll send a service agreement and invoice. After payment confirmation, we'll schedule your onboarding session and assign your dedicated account team. The entire process typically takes 2-3 business days from initial contact to project kickoff.",
      icon: Globe,
      tags: ["signup", "onboarding", "getting started", "consultation"]
    },
    {
      id: 2,
      category: "Services",
      question: "What digital marketing services does JXING Tech offer?",
      answer: "We offer comprehensive digital solutions including Growth-Driven Web Design, Content-Led SEO, Social Media Management, Paid Ads (Google & Facebook), Custom Web Solution, AI Integration & Chatbots, Content Repurposing, Customer Journey Marketing, and Website Care Plans. All services are designed to work together as an integrated ecosystem for maximum impact.",
      icon: Zap,
      tags: ["services", "digital marketing", "SEO", "web design", "automation"]
    },
    {
      id: 3,
      category: "Services",
      question: "Can I customize my service package?",
      answer: "Absolutely! While we offer three standard packages (Digital Launchpad, Growth Engine, Enterprise Ascend), we understand every business is unique. You can add specific services, remove unnecessary ones, or create a completely custom package. We also offer one-off projects starting at MYR 10,000 for specialized needs like custom AI development or complex integrations.",
      icon: Settings,
      tags: ["customization", "packages", "custom solutions", "flexibility"]
    },

    // Billing
    {
      id: 4,
      category: "Billing",
      question: "Can I change plans mid-subscription?",
      answer: "Yes! You can upgrade your plan at any time, and changes take effect immediately with prorated billing. For downgrades, changes apply at your next billing cycle to ensure continuity of services. Our team will help you transition smoothly between plans and adjust your services accordingly. There are no penalties for plan changes.",
      icon: CreditCard,
      tags: ["billing", "plan changes", "upgrade", "downgrade", "subscription"]
    },
    {
      id: 5,
      category: "Billing",
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers (preferred for Malaysian clients), credit/debit cards (Visa, Mastercard, Amex), and online banking. Subscriptions are billed monthly in advance. Annual plans receive a 10% discount and are also billed monthly (not upfront). All invoices are sent via email 5 days before the billing date.",
      icon: CreditCard,
      tags: ["payment", "billing methods", "invoicing", "credit card"]
    },
    {
      id: 6,
      category: "Billing",
      question: "What happens if I cancel my subscription?",
      answer: "Monthly subscribers can cancel with 30 days' written notice. Annual subscribers are committed for 12 months but can discuss early termination options with potential fees waived in special circumstances. Upon cancellation, you'll receive all completed work, final reports, and website/content ownership transfers. We also offer a 60-day transition support period to help you smoothly move to another provider if needed.",
      icon: Shield,
      tags: ["cancellation", "refund", "termination", "exit policy"]
    },

    // Onboarding
    {
      id: 7,
      category: "Onboarding",
      question: "How long does onboarding take?",
      answer: "Standard onboarding takes 1-2 weeks and includes: initial strategy session, access setup to all tools and dashboards, brand discovery workshop, competitor analysis, content audit, and goal setting. You'll be assigned a dedicated account manager who will guide you through each step. We provide a detailed onboarding checklist and timeline so you know exactly what to expect.",
      icon: Clock,
      tags: ["onboarding", "timeline", "getting started", "setup"]
    },
    {
      id: 8,
      category: "Onboarding",
      question: "What information do you need from me to get started?",
      answer: "We'll need: business background and goals, current website/social media access, brand guidelines (logo, colors, fonts), existing marketing materials, competitor information, target audience details, and login credentials for platforms you use. Don't worry if you don't have everything—we'll help you gather what's needed during onboarding. We provide a detailed questionnaire to make this easy.",
      icon: FileText,
      tags: ["onboarding", "requirements", "information needed", "setup"]
    },
    {
      id: 9,
      category: "Onboarding",
      question: "Will I have a dedicated account manager?",
      answer: "Growth Engine and Enterprise Ascend clients receive a dedicated account manager. Digital Launchpad clients work with our shared support team but have a consistent point of contact. Your account manager oversees all aspects of your campaigns, coordinates with specialists, provides strategic guidance, and is available for regular check-ins. Enterprise clients also get a backup manager for 24/7 coverage.",
      icon: Users,
      tags: ["account manager", "support", "contact", "team"]
    },

    // Technical
    {
      id: 10,
      category: "Technical",
      question: "How do I access my client dashboard?",
      answer: "Your dashboard is at clients.jxingtech.com (credentials emailed after onboarding). It provides real-time project updates, performance metrics, content calendars, campaign analytics, invoice history, and direct team messaging. The dashboard works on all devices and is updated in real-time. Use the 'Forgot Password' feature if needed or contact support@jxingtech.com.",
      icon: Globe,
      tags: ["dashboard", "login", "access", "portal", "technical"]
    },
    {
      id: 11,
      category: "Technical",
      question: "How do I request website updates or changes?",
      answer: "Submit update requests via: 1) Your client dashboard's 'Request Update' feature (recommended), 2) Email your account manager, 3) Our support portal, or 4) Website contact form. Include specific details and attach files/screenshots if needed. Minor changes (text, images) complete in 24-48 hours. Major updates (new pages, features) take 3-5 business days. All requests are tracked and confirmed.",
      icon: FileText,
      tags: ["updates", "changes", "requests", "website", "support"]
    },
    {
      id: 12,
      category: "Technical",
      question: "Do you provide training on how to use my new website?",
      answer: "Yes! All website clients receive: 1-hour live training session covering CMS basics, content updates, image management, and SEO best practices. We provide video tutorials, written guides, and ongoing email support. Additional training sessions can be scheduled as needed. Enterprise clients get unlimited training for their team members.",
      icon: Lightbulb,
      tags: ["training", "education", "CMS", "website management", "support"]
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
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-standard container-padding relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Help & FAQs
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Answers to common questions about our services, process, and support
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
                    <p className="text-sm text-muted-foreground mt-2">
                      Still can't find what you're looking for?
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <a
                        href="mailto:hello@jxingtech.my"
                        className="w-full p-4 border border-muted/30 rounded-lg hover:border-azure/30 hover:bg-azure/5 transition-all duration-200 cursor-pointer group block"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-azure/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-azure/20 transition-colors">
                            <MessageCircle className="h-5 w-5 text-azure" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-oxford-blue mb-1">
                              Contact Support Team
                            </div>
                            <div className="text-xs text-muted-foreground leading-relaxed">
                              Get personalized help from our experts
                            </div>
                          </div>
                        </div>
                      </a>

                      <div
                        className="w-full p-4 border border-muted/30 rounded-lg hover:border-azure/30 hover:bg-azure/5 transition-all duration-200 cursor-pointer group"
                        data-cal-link="jxingtech/book-a-free-consult"
                        data-cal-config='{"layout":"month_view"}'
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-azure/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-azure/20 transition-colors">
                            <Calendar className="h-5 w-5 text-azure" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-oxford-blue mb-1">
                              Book a Consultation
                            </div>
                            <div className="text-xs text-muted-foreground leading-relaxed">
                              Schedule a call with our digital strategy experts
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="https://wa.me/60102882827"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full p-4 border border-muted/30 rounded-lg hover:border-azure/30 hover:bg-azure/5 transition-all duration-200 cursor-pointer group block"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-azure/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-azure/20 transition-colors">
                            <MessageCircle className="h-5 w-5 text-azure" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-oxford-blue mb-1">
                              Live Chat
                            </div>
                            <div className="text-xs text-muted-foreground leading-relaxed">
                              Get instant help during business hours
                            </div>
                          </div>
                        </div>
                      </a>
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

      {/* Helpful Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Helpful Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore more resources to help you make the most of our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link to="/blog">
              <Card className="p-6 card-hover border-2 border-border hover:border-primary/30 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Blog
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Latest insights on digital marketing, SEO, and growth strategies
                </p>
                <div className="flex items-center text-primary text-sm font-semibold">
                  Read Articles <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link to="/resources/website-growth-playbook">
              <Card className="p-6 card-hover border-2 border-border hover:border-primary/30 h-full">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Growth Playbook
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Free comprehensive guide to scaling your digital presence
                </p>
                <div className="flex items-center text-primary text-sm font-semibold">
                  Download Free <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link to="/case-studies">
              <Card className="p-6 card-hover border-2 border-border hover:border-primary/30 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Case Studies
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Real success stories from businesses we've helped grow
                </p>
                <div className="flex items-center text-primary text-sm font-semibold">
                  View Results <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link to="/contact">
              <Card className="p-6 card-hover border-2 border-border hover:border-primary/30 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Contact Support
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get in touch with our team for personalized assistance
                </p>
                <div className="flex items-center text-primary text-sm font-semibold">
                  Get Help <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-standard container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our team is here to help. Get personalized assistance for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
              asChild
            >
              <Link to="/contact">
                <Mail className="h-5 w-5 mr-2" />
                Contact Support Team
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold rounded-full px-8"
              data-cal-link="jxingtech/book-a-free-consult"
              data-cal-config='{"layout":"month_view"}'
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book a Consultation
            </Button>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm max-w-md mx-auto">
            <p className="text-white/90 text-sm">
              <MessageCircle className="h-4 w-4 inline mr-2" />
              <strong>Live Chat Available:</strong> Instant help during business hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;