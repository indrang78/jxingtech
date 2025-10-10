import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  BarChart3,
  Bot,
  Shield,
  X,
  Plus,
  FileText,
  Users,
  Clock
} from "lucide-react";

const PricingPage = () => {
  const packages = [
    {
      name: "Digital Launchpad",
      targetClient: "Ideal for Startups & Small Businesses",
      badge: "Most Popular",
      priceRange: "MYR 2,500 - 3,500",
      monthlyPrice: "2,999",
      annualPrice: "2,699",
      annualSavings: "10%",
      description: "Perfect for businesses just getting started with their digital transformation journey.",
      keyBenefits: [
        "Professional online presence",
        "Basic SEO foundation",
        "Social media setup",
        "Lead generation system"
      ],
      coreServices: [
        "Growth-Driven Website Design & Development",
        "Content Strategy & SEO (Basic)",
        "Social Media Management (2 platforms)",
        "CRM & Automation Integration (Basic)",
        "Website Care & Optimization Plan"
      ],
      features: [
        "Mobile-responsive website",
        "Basic SEO optimization",
        "2 social media platforms",
        "Email automation setup",
        "Monthly performance reports",
        "Priority support"
      ],
      notIncluded: [
        "Paid advertising",
        "Advanced automation",
        "AI integration",
        "Content repurposing"
      ]
    },
    {
      name: "Growth Engine",
      targetClient: "Perfect for Growing SMEs",
      badge: "Best Value",
      priceRange: "MYR 4,500 - 6,500",
      monthlyPrice: "5,499",
      annualPrice: "4,949",
      annualSavings: "10%",
      description: "Comprehensive digital marketing solution for businesses ready to scale rapidly.",
      keyBenefits: [
        "Complete digital ecosystem",
        "Advanced automation",
        "Multi-channel marketing",
        "Performance optimization"
      ],
      coreServices: [
        "All Digital Launchpad services",
        "Paid Ads Management",
        "Behavioral Marketing Automation",
        "Content Repurposing Engine",
        "Journey-Driven Content Distribution",
        "Omni-Channel Social Media (4 platforms)"
      ],
      features: [
        "Everything in Digital Launchpad",
        "Google & Facebook Ads management",
        "Advanced marketing automation",
        "4 social media platforms",
        "Content repurposing across channels",
        "Customer journey mapping",
        "Bi-weekly strategy calls",
        "Priority support"
      ],
      notIncluded: [
        "AI agent development",
        "Custom integrations",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise Ascend",
      targetClient: "For Established Enterprises",
      badge: "Premium",
      priceRange: "MYR 8,000 - 12,000",
      monthlyPrice: "9,999",
      annualPrice: "8,999",
      annualSavings: "10%",
      description: "Full-scale digital transformation with AI integration and dedicated support.",
      keyBenefits: [
        "Complete digital transformation",
        "AI-powered automation",
        "Dedicated support team",
        "Custom solutions"
      ],
      coreServices: [
        "All Growth Engine services",
        "AI Integration & Smart Agents",
        "Advanced Behavioral Automation",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Priority Development Queue"
      ],
      features: [
        "Everything in Growth Engine",
        "AI chatbots & smart agents",
        "Custom AI integrations",
        "Advanced automation workflows",
        "Dedicated account manager",
        "Weekly strategy sessions",
        "Custom reporting dashboard",
        "24/7 priority support",
        "First access to new features"
      ],
      notIncluded: []
    }
  ];

  const customProject = {
    name: "One-Off / Custom Projects",
    description: "Tailored solutions for specific business needs and unique requirements.",
    pricing: "MYR 10,000+ (Based on Scope)",
    examples: [
      "Custom AI development",
      "Complex system integrations",
      "Enterprise-level migrations",
      "Specialized automation projects",
      "Custom dashboard development"
    ]
  };

  const addOns = [
    {
      icon: FileText,
      name: "Extra Content Pieces",
      description: "Additional blog posts, social media content, or marketing materials",
      price: "MYR 500 - 1,500",
      unit: "per piece"
    },
    {
      icon: BarChart3,
      name: "Additional Landing Pages",
      description: "Custom designed and optimized landing pages for campaigns",
      price: "MYR 1,500 - 3,000",
      unit: "per page"
    },
    {
      icon: Bot,
      name: "Advanced AI Features",
      description: "Custom AI chatbots, automation workflows, or integrations",
      price: "MYR 2,000 - 5,000",
      unit: "per feature"
    },
    {
      icon: Users,
      name: "Priority Support Package",
      description: "24/7 dedicated support with 2-hour response time SLA",
      price: "MYR 1,500",
      unit: "per month"
    },
    {
      icon: TrendingUp,
      name: "Additional Ad Spend Management",
      description: "Extra paid advertising budget management and optimization",
      price: "15% of ad spend",
      unit: "management fee"
    },
    {
      icon: Clock,
      name: "Rush Development",
      description: "Fast-track your project with priority development queue",
      price: "30% premium",
      unit: "on project cost"
    }
  ];

  const comparisonFeatures = [
    { feature: "Website Design & Development", launchpad: true, growth: true, enterprise: true },
    { feature: "Content Strategy & SEO", launchpad: "Basic", growth: "Advanced", enterprise: "Enterprise" },
    { feature: "Social Media Management", launchpad: "2 Platforms", growth: "4 Platforms", enterprise: "All Platforms" },
    { feature: "CRM & Automation", launchpad: "Basic", growth: "Advanced", enterprise: "AI-Powered" },
    { feature: "Paid Ads Management", launchpad: false, growth: true, enterprise: true },
    { feature: "Content Repurposing", launchpad: false, growth: true, enterprise: true },
    { feature: "AI Integration", launchpad: false, growth: false, enterprise: true },
    { feature: "Dedicated Account Manager", launchpad: false, growth: false, enterprise: true },
    { feature: "24/7 Support", launchpad: false, growth: false, enterprise: true }
  ];

  const faqs = [
    {
      question: "What's the difference between monthly and annual plans for digital agency services?",
      answer: "Annual plans offer a 10% discount and are billed monthly with a 12-month minimum commitment. Monthly plans provide complete flexibility with no long-term commitment but are priced higher. Both options include the same services and support levels."
    },
    {
      question: "Can I upgrade or downgrade my plan with JXING Tech?",
      answer: "Absolutely! You can upgrade your plan at any time, and the changes take effect immediately. For downgrades, changes will apply at your next billing cycle to ensure continuity of services. Our team will help you transition smoothly between plans."
    },
    {
      question: "Are there any hidden fees in your digital marketing packages?",
      answer: "No hidden fees, ever. Our pricing is completely transparent. The only additional costs might be third-party tools (like premium plugins or ad spend budgets) which we'll always discuss and get approval for beforehand. Setup fees, reporting, and ongoing optimization are all included."
    },
    {
      question: "What if I need a custom solution for my business?",
      answer: "We offer custom solutions starting at MYR 10,000 based on scope and complexity. This includes unique integrations, specialized automation, custom AI development, or enterprise-level migrations. We'll provide a detailed quote after understanding your specific requirements."
    },
    {
      question: "Do you offer month-to-month contracts?",
      answer: "Yes! Our monthly plans offer complete flexibility with no long-term commitment. You can cancel or modify your plan with 30 days' notice. Annual plans require a 12-month commitment but offer significant savings and are still billed monthly for cash flow convenience."
    },
    {
      question: "What happens if I need to pause my services?",
      answer: "We understand business needs can change. Monthly subscribers can pause services with 30 days' notice. Annual subscribers can discuss temporary service adjustments with their account manager. We'll work with you to find the best solution for your situation."
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle className="h-5 w-5 text-azure mx-auto" />;
    }
    if (value === false) {
      return <X className="h-5 w-5 text-gray-300 mx-auto" />;
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-standard container-padding relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pricing & Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transparent subscription plans for every growth stage. No hidden fees, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
              asChild
            >
              <Link to="/contact">Start Your Plan</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8"
            >
              Compare All Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200 ${pkg.badge === "Best Value" ? "ring-2 ring-azure" : ""}`}>
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className={`px-4 py-1 ${pkg.badge === "Best Value" ? "bg-azure text-white" : pkg.badge === "Premium" ? "bg-xanthous text-oxford-blue" : "bg-marian-blue text-white"}`}>
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="p-6 sm:p-8 text-center border-b border-muted/20">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-oxford-blue mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm text-azure font-medium mb-3 sm:mb-4">
                    {pkg.targetClient}
                  </p>
                  <div className="mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl font-bold text-oxford-blue mb-1">
                      MYR {pkg.monthlyPrice}
                      <span className="text-base sm:text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      or MYR {pkg.annualPrice}/month (annual) - Save {pkg.annualSavings}
                    </div>
                    <div className="text-xs text-azure mt-1">
                      Range: {pkg.priceRange}/month
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-oxford-blue mb-3 uppercase tracking-wide">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {pkg.keyBenefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-azure flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-oxford-blue mb-3 uppercase tracking-wide">
                      Core Services Included
                    </h4>
                    <ul className="space-y-2">
                      {pkg.coreServices.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-azure flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full h-12 font-semibold rounded-full transition-all duration-200 ${
                      pkg.badge === "Best Value" 
                        ? "bg-primary hover:bg-primary/90 text-white" 
                        : pkg.badge === "Premium"
                        ? "bg-xanthous hover:bg-xanthous/90 text-oxford-blue"
                        : "bg-primary hover:bg-primary/90 text-white"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Projects Card */}
          <Card className="bg-muted/30 border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] max-w-4xl mx-auto">
            <CardHeader className="p-8 text-center">
              <CardTitle className="text-2xl font-bold text-oxford-blue mb-4">
                {customProject.name}
              </CardTitle>
              <p className="text-lg text-muted-foreground mb-4">
                {customProject.description}
              </p>
              <div className="text-3xl font-bold text-azure">
                {customProject.pricing}
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-oxford-blue mb-4 uppercase tracking-wide">
                    Project Examples
                  </h4>
                  <ul className="space-y-3">
                    {customProject.examples.map((example, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-azure flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <Button variant="secondary" className="mb-4">
                    Get a Custom Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">
                    Schedule a Discovery Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Compare Our Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See what's included in each package to make the best choice for your business.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-muted/20">
                    <th className="text-left p-4 sm:p-6 text-oxford-blue font-semibold text-sm sm:text-base">Features</th>
                    <th className="text-center p-4 sm:p-6 text-oxford-blue font-semibold text-sm sm:text-base">Digital Launchpad</th>
                    <th className="text-center p-4 sm:p-6 text-oxford-blue font-semibold text-sm sm:text-base">Growth Engine</th>
                    <th className="text-center p-4 sm:p-6 text-oxford-blue font-semibold text-sm sm:text-base">Enterprise Ascend</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-muted/10 hover:bg-muted/20 transition-colors">
                      <td className="p-4 sm:p-6 text-muted-foreground font-medium text-sm sm:text-base">{feature.feature}</td>
                      <td className="p-4 sm:p-6 text-center">{renderFeatureValue(feature.launchpad)}</td>
                      <td className="p-4 sm:p-6 text-center">{renderFeatureValue(feature.growth)}</td>
                      <td className="p-4 sm:p-6 text-center">{renderFeatureValue(feature.enterprise)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Add-On Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhance your package with optional services tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-6 border-2 border-border hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <addon.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {addon.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {addon.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="text-xl font-bold text-primary mb-1">
                    {addon.price}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {addon.unit}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Need something custom? Let's discuss your unique requirements.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full" asChild>
              <Link to="/contact">
                <Plus className="w-4 h-4 mr-2" />
                Request Custom Add-Ons
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Pricing Model */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Why Subscription Pricing?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our subscription model is designed to align our success with yours
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-2 border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Predictable Investment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No surprise bills or hidden fees. You know exactly what you're paying each month, making budgeting simple and stress-free.
                </p>
              </Card>

              <Card className="p-8 bg-white border-2 border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Continuous Optimization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't just build and leave. Monthly subscriptions mean we're invested in your ongoing success and constantly improving your results.
                </p>
              </Card>

              <Card className="p-8 bg-white border-2 border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Flexibility to Scale
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Start small and scale up as you grow. Upgrade, downgrade, or pause services as your business needs change.
                </p>
              </Card>

              <Card className="p-8 bg-white border-2 border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Value-Focused Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on delivering measurable ROI every month, not just completing a project and moving on.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Pricing FAQs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our pricing and packages.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl px-6 border-0 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <AccordionTrigger className="text-left text-oxford-blue font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA with Guarantee */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Growing?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Choose your plan and start seeing results within 30 days, or get a custom quote tailored to your unique needs.
            </p>
            
            {/* Guarantee Badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Our Growth Guarantee</h3>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                We're committed to your success. If you don't see measurable improvements in your digital metrics within the first 90 days, we'll work with you at no additional cost until you do.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
                asChild
              >
                <Link to="/contact">
                  Start Your Plan Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold rounded-full px-8"
                asChild
              >
                <Link to="/contact">Book a Strategy Call</Link>
              </Button>
            </div>

            <p className="mt-8 text-white/70 text-sm">
              No credit card required • Free consultation • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;