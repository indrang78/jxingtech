import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  Building,
  Users,
  Globe,
  Search,
  Share2,
  BarChart3,
  Workflow,
  Bot,
  Shield,
  Target,
  Repeat,
  X
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
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Flexible Digital Marketing Plans for Every Stage of Your Growth
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Choose from our integrated subscription packages or opt for a custom solution. Transparent pricing, no hidden fees for our SME digital services.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200 ${pkg.badge === "Best Value" ? "ring-2 ring-azure" : ""}`}>
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className={`px-4 py-1 ${pkg.badge === "Best Value" ? "bg-azure text-white" : pkg.badge === "Premium" ? "bg-xanthous text-oxford-blue" : "bg-marian-blue text-white"}`}>
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="p-8 text-center border-b border-muted/20">
                  <CardTitle className="text-2xl font-bold text-oxford-blue mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm text-azure font-medium mb-4">
                    {pkg.targetClient}
                  </p>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-oxford-blue mb-1">
                      MYR {pkg.monthlyPrice}
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
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

                <CardContent className="p-8">
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
                    className={`w-full h-12 font-semibold rounded-lg transition-all duration-200 ${
                      pkg.badge === "Best Value" 
                        ? "bg-azure hover:bg-azure/90 text-white" 
                        : pkg.badge === "Premium"
                        ? "bg-xanthous hover:bg-xanthous/90 text-oxford-blue"
                        : "bg-marian-blue hover:bg-marian-blue/90 text-white"
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
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
              <table className="w-full">
                <thead>
                  <tr className="border-b border-muted/20">
                    <th className="text-left p-6 text-oxford-blue font-semibold">Features</th>
                    <th className="text-center p-6 text-oxford-blue font-semibold">Digital Launchpad</th>
                    <th className="text-center p-6 text-oxford-blue font-semibold">Growth Engine</th>
                    <th className="text-center p-6 text-oxford-blue font-semibold">Enterprise Ascend</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-muted/10 hover:bg-muted/20 transition-colors">
                      <td className="p-6 text-muted-foreground font-medium">{feature.feature}</td>
                      <td className="p-6 text-center">{renderFeatureValue(feature.launchpad)}</td>
                      <td className="p-6 text-center">{renderFeatureValue(feature.growth)}</td>
                      <td className="p-6 text-center">{renderFeatureValue(feature.enterprise)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Flexibility Notice */}
      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <Card className="bg-azure/5 border border-azure/20 rounded-xl">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-azure/10 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-azure" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-oxford-blue mb-4">
                Flexible Contract Options
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                <strong>Month-to-Month Flexibility:</strong> No long-term commitment required. Cancel or modify with 30 days' notice.<br />
                <strong>Annual Contract Benefits:</strong> Save 10% with our annual plans, billed monthly with a 12-month minimum commitment for budget predictability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary">
                  Learn More About Contracts
                </Button>
                <Button variant="outline">
                  Compare Pricing Options
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
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

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Find Your Perfect Digital Growth Plan?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss which package fits your business stage and goals. Our digital strategy consultants are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
              Get a Custom Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
              Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;