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
import pricingImage from "@/assets/pricing-decision.jpg";

const PricingPage = () => {
  // Pillar 1: Platform Architecture & Management
  const platformPackages = [
    {
      name: "Core Digital Presence",
      subtitle: "The essential corporate package (Web Solution Package - Business Essentials)",
      price: "788",
      originalPrice: "1,000",
      featured: false,
      features: [
        { label: "Web Pages", value: "Up to 5 Pages", included: true },
        { label: "Content Creation", value: "1 Article / Month", included: true },
        { label: "Monthly Changes", value: "1 Change / Month", included: true },
        { label: "Revision Cycles", value: "Max 1 Revision", included: true },
        { label: "Calendar Booking", value: "Not Included", included: false }
      ],
      buttonText: "Start Project",
      buttonVariant: "outline" as const
    },
    {
      name: "Corporate Growth Plus",
      subtitle: "Scalable solution for growing businesses (Web Solution Package - Business Plus)",
      price: "1,188",
      setupFee: "FREE Setup Fee (MYR 1,500 Value)",
      featured: true,
      features: [
        { label: "Web Pages", value: "Up to 12 Pages", included: true },
        { label: "Content Creation", value: "2 Articles / Month", included: true },
        { label: "Monthly Changes", value: "2 Changes / Month", included: true },
        { label: "Revision Cycles", value: "Max 3 Revisions", included: true },
        { label: "Calendar Booking", value: "Included", included: true }
      ],
      buttonText: "Engage Corporate Growth",
      buttonVariant: "default" as const
    },
    {
      name: "E-commerce Platform",
      subtitle: "Digital Solution Package focused on sales (Business Essentials)",
      price: "1,388",
      priceNote: "1 Month Annual Commitment",
      setupFeeNote: "Setup Fee Waived",
      featured: false,
      features: [
        { label: "Product Listing", value: "Up to 50 Products", included: true },
        { label: "Payment Gateways", value: "2 Options Included", included: true },
        { label: "Content Creation", value: "2 Articles / Month", included: true },
        { label: "Platform Analytics", value: "Not Included", included: false },
        { label: "Backup Retention", value: "30 Days Data Snapshot", included: true }
      ],
      buttonText: "Inquire for E-commerce",
      buttonVariant: "outline" as const
    }
  ];

  // Customer Experience (CX) Modules
  const cxModules = [
    {
      name: "Strategy & Insights",
      price: "1,888",
      description: "Engagement roadmap, segmentation frameworks, A/B testing, and analytics dashboards."
    },
    {
      name: "Implementation & Integration",
      price: "1,888",
      description: "Platform setup, data migration, CRM/sales warehouse integration, and scalable architecture design."
    },
    {
      name: "Campaign Management",
      price: "1,888",
      description: "Automated multi-channel campaigns (email, SMS, push badges), template design, and compelling copy."
    },
    {
      name: "Optimization & Support",
      price: "1,888",
      description: "Ongoing campaign optimization, deliverability monitoring, compliance, and 'Triple-Punch' Technical Support."
    }
  ];

  // Pillar 2: Performance Growth Modules
  const performanceModules = [
    {
      name: "Organic Authority System",
      subtitle: "SEO Package Plus for dominant search presence",
      price: "1,188",
      priceNote: "1 Month plan / Best for B2B",
      features: [
        "Comprehensive Website SEO",
        "20-30 Keywords Research & Scope",
        '"5 Blog Writing" ** / Month',
        "Advanced Schema & Technical SEO",
        "Monthly Competitor Analysis"
      ],
      buttonText: "Add SEO Module",
      color: "yellow"
    },
    {
      name: "Nurture Flow & Conversion",
      subtitle: "Email marketing programs and audience targeting via Marketing Plus",
      price: "888",
      priceNote: "1 Month plan / Best for B2B",
      features: [
        "Managed for 1 Social Platform",
        "Up to 10,000 Monthly Sends",
        "Subscription Form Included",
        "Advanced Segmentation",
        "Behaviour Targeting Incorporated"
      ],
      buttonText: "Add Email Module",
      color: "cyan"
    },
    {
      name: "Performance Acquisition",
      subtitle: "ROI-focused campaign Marketing (Paid Digital Ads Platform)",
      price: "588",
      priceNote: "1 Month plan / Best for B2B",
      features: [
        "Managed for 1 Social Platform",
        "Content Planning Included",
        '"2 Campaigns Events per Month',
        "Monthly Social Media Audit",
        "Max Client Spend: MYR 5,000"
      ],
      buttonText: "Add Ads Module",
      color: "red"
    },
    {
      name: "Social Media Organic Growth",
      subtitle: "Full organic reach creation Growth Package",
      price: "1,188",
      priceNote: "1 Month plan / Best for B2B",
      features: [
        "Management for 3 Social Platforms",
        "Content Planning Included",
        '"20 Content Posts" ** / Month',
        "Monthly Competitor Analysis",
        "Monthly Social Media Audit"
      ],
      buttonText: "Add Social Module",
      color: "green"
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes! You can upgrade at any time with immediate effect. Downgrades apply at your next billing cycle. Our team will help ensure a smooth transition."
    },
    {
      question: "What billing cycles do you offer?",
      answer: "We offer both monthly and annual billing options. Annual plans typically come with discounts and are billed monthly for convenience."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Monthly plans can be cancelled with 30 days' notice. Annual commitments require completion of the contract term or may incur early termination fees as outlined in your agreement."
    },
    {
      question: "Are there setup fees?",
      answer: "Setup fees vary by package. Some plans like Corporate Growth Plus include FREE setup (MYR 1,500 value waived), while others may have applicable fees disclosed upfront."
    },
    {
      question: "Can I combine multiple modules?",
      answer: "Absolutely! Our modular approach allows you to mix and match Platform packages with Performance modules to create a custom solution that fits your business needs."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes! For complex requirements beyond our standard packages, we offer bespoke digital innovation projects starting from MYR 15,000. Contact us to discuss your specific needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] opacity-30"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm">
            2 STRATEGY & INVESTMENT
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Two Pillars of Digital Transformation.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We categorize our offerings into core platform development and advanced performance growth, ensuring a unified strategy for every client.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Flexible Pricing That Grows With You
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Choose the package that fits your current needs, then scale up as your business grows. No surprises, just transparent monthly pricing designed for SMEs.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={pricingImage} 
                alt="Business owner reviewing pricing options" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Projects Banner */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <Card className="bg-white shadow-lg border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <Zap className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Bespoke Digital Innovation Projects
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        For complex, non-recurring challenges that require dedicated, high-level engineering and specialized consulting beyond the scope of our managed monthly tiers.
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Custom AI Development & Integration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Enterprise-Level Migrations & Integrations
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Complex System Integrations (API/ERP)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Specialized Automative Projects
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right flex-shrink-0">
                  <Badge className="mb-3 bg-secondary/10 text-secondary border-secondary/20">
                    ONE-OFF PROJECT INVESTMENT
                  </Badge>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    MYR 15,000
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Starting From</p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white">
                    Discuss Your Custom Scope
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pillar 1: Platform Architecture & Management */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pillar 1: Platform Architecture & Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Scalable digital presence, from corporate websites to full-stack e-commerce and specialized customer experience systems.
            </p>
            <Badge className="mt-4 bg-secondary text-white">See All Tiers</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {platformPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative ${pkg.featured ? 'border-2 border-secondary shadow-lg' : 'border'}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        MYR {pkg.price}
                      </span>
                    </div>
                    {pkg.originalPrice && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Setup Fee: <span className="line-through">MYR {pkg.originalPrice}</span> No Setup Fee (for Now)
                      </p>
                    )}
                    {pkg.setupFee && (
                      <p className="text-sm font-semibold text-secondary mt-1">
                        {pkg.setupFee}
                      </p>
                    )}
                    {pkg.priceNote && (
                      <p className="text-sm text-muted-foreground mt-1">{pkg.priceNote}</p>
                    )}
                    {pkg.setupFeeNote && (
                      <p className="text-sm text-secondary mt-1">{pkg.setupFeeNote}</p>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{feature.label}</span>
                        <span className={feature.included ? "text-secondary font-medium" : "text-red-500"}>
                          {feature.included ? feature.value : feature.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${pkg.featured ? 'bg-secondary hover:bg-secondary/90 text-white' : 'bg-foreground hover:bg-foreground/90 text-background'}`}
                  >
                    {pkg.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CX Orchestration */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Customer.io Management Services (CX Orchestration)
            </h3>
            <p className="text-muted-foreground mb-6">
              These are specialized modules required to run your Customer Engagement Platform, priced per module based on the complexity of the service provided.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cxModules.map((module, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground mb-2">
                    {module.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    MYR {module.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 2: Performance Growth Modules */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pillar 2: Performance Growth Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These specialized modules inject expert performance strategies directly into your infrastructure for immediate market advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceModules.map((module, index) => (
              <Card 
                key={index} 
                className={`border-l-4 ${
                  module.color === 'yellow' ? 'border-l-accent' :
                  module.color === 'cyan' ? 'border-l-secondary' :
                  module.color === 'red' ? 'border-l-red-500' :
                  'border-l-green-500'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground mb-2">
                    {module.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {module.subtitle}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      MYR {module.price}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{module.priceNote}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline"
                    className={`w-full border-2 ${
                      module.color === 'yellow' ? 'border-accent text-accent hover:bg-accent hover:text-primary' :
                      module.color === 'cyan' ? 'border-secondary text-secondary hover:bg-secondary hover:text-white' :
                      module.color === 'red' ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white' :
                      'border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
                    }`}
                  >
                    {module.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pricing FAQs
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our pricing, plans, and billing
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA & Guarantee */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Digital Transformation Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            All prices in MYR. Introductory rates (MYR) apply for the first three months of a new annual contract. Contact us for custom enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
              asChild
            >
              <Link to="/contact">Book a Strategy Call</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold px-8"
              asChild
            >
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-white text-sm font-medium">
              Growth Guarantee: See measurable results or we'll work until you do
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;