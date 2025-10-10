import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Search, 
  Share2, 
  TrendingUp, 
  Users, 
  Workflow, 
  Shield, 
  Repeat, 
  Target,
  Bot,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  BarChart3,
  Headphones,
  Settings
} from "lucide-react";

const ServicesPage = () => {
  // Pillar 1: Platform Architecture & Management Services
  const platformServices = [
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Core Digital Presence",
      description: "Professional corporate website package for businesses ready to establish a solid online foundation.",
      priceRange: "MYR 788",
      features: [
        "Up to 5 web pages",
        "Mobile-responsive design",
        "1 content article per month",
        "Monthly change allowance"
      ],
      link: "/services/website-design"
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Corporate Growth Plus",
      description: "Scalable solution for growing businesses with enhanced features and capacity.",
      priceRange: "MYR 1,188",
      badge: "Most Popular",
      features: [
        "Up to 12 web pages",
        "Advanced SEO optimization",
        "2 content articles per month",
        "Calendar booking integration",
        "FREE setup fee (MYR 1,500 value)"
      ],
      link: "/services/website-design"
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "E-commerce Platform",
      description: "Complete e-commerce solution focused on driving online sales for your business.",
      priceRange: "MYR 1,388",
      features: [
        "Up to 50 product listings",
        "2 payment gateway integrations",
        "Content creation support",
        "30-day data backup retention"
      ],
      link: "/services/website-design"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Customer Experience (CX) Orchestration",
      description: "Specialized modules for running comprehensive customer engagement platforms.",
      priceRange: "MYR 1,888 per module",
      features: [
        "Strategy & Insights",
        "Implementation & Integration",
        "Campaign Management",
        "Optimization & Support"
      ],
      link: "/services/crm-automation"
    }
  ];

  // Pillar 2: Performance Growth Modules
  const performanceServices = [
    {
      icon: <Search className="h-7 w-7" />,
      title: "Organic Authority System",
      description: "Comprehensive SEO package for dominant search presence and organic traffic growth.",
      priceRange: "MYR 1,188",
      features: [
        "20-30 keywords research & scope",
        "5 blog articles per month",
        "Advanced schema & technical SEO",
        "Monthly competitor analysis"
      ],
      link: "/services/content-seo",
      color: "yellow"
    },
    {
      icon: <Workflow className="h-7 w-7" />,
      title: "Nurture Flow & Conversion",
      description: "Email marketing programs and audience targeting to convert leads into customers.",
      priceRange: "MYR 888",
      features: [
        "1 social platform management",
        "Up to 10,000 monthly sends",
        "Subscription form included",
        "Advanced segmentation & targeting"
      ],
      link: "/services/behavior-automation",
      color: "cyan"
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Performance Acquisition",
      description: "ROI-focused paid digital ads campaigns for immediate market impact.",
      priceRange: "MYR 588",
      features: [
        "1 social platform campaign",
        "Content planning included",
        "2 campaign events per month",
        "Monthly social media audit",
        "Max client spend: MYR 5,000"
      ],
      link: "/services/paid-ads",
      color: "red"
    },
    {
      icon: <Share2 className="h-7 w-7" />,
      title: "Social Media Organic Growth",
      description: "Full organic reach creation across multiple social platforms.",
      priceRange: "MYR 1,188",
      features: [
        "3 social platform management",
        "Content planning & strategy",
        "20 content posts per month",
        "Monthly competitor analysis"
      ],
      link: "/services/social-media",
      color: "green"
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Website Care & Optimization",
      description: "Ongoing maintenance, security, and performance optimization to keep your site running smoothly.",
      features: [
        "Regular security updates",
        "Performance monitoring",
        "Backup & maintenance"
      ],
      link: "/services/website-care"
    },
    {
      icon: <Repeat className="h-7 w-7" />,
      title: "Content Repurposing Engine",
      description: "Maximize your content ROI by transforming core content into multiple formats.",
      features: [
        "Multi-format content creation",
        "Cross-platform optimization",
        "Content lifecycle management"
      ],
      link: "/services/repurposing"
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Journey-Driven Content Distribution",
      description: "Strategic content placement across your conversion funnel for maximum impact.",
      features: [
        "Funnel-based content strategy",
        "Conversion optimization",
        "Performance tracking"
      ],
      link: "/services/content-distribution"
    },
    {
      icon: <Bot className="h-7 w-7" />,
      title: "AI Integration & Smart Agents",
      description: "Custom AI solutions and smart automation for modern business operations.",
      features: [
        "Custom AI implementation",
        "Smart chatbots & agents",
        "Process automation"
      ],
      link: "/services/ai-integration"
    }
  ];

  const advantages = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "No more fragmented vendors or DIY struggles"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Transparent, predictable monthly investment"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "All-in-one dashboard to track your growth"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "AI + human-powered team working with you"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Modular services built for your growth stage"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-[600px] mx-auto">
            Your Complete Digital Growth Ecosystem for Businesses
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-[600px] mx-auto leading-relaxed font-medium">
            Integrated Digital Solutions. Scalable Outcomes. One Expert Team.
          </p>
          <p className="text-base text-white/80 mb-8 max-w-[700px] mx-auto leading-relaxed">
            At JXING Tech, we believe growth shouldn't come from random guesswork or juggling multiple vendors. That's why we offer integrated, subscription-based digital solutions for SMEs that bring your website, content, automation, social media, and ads together in one place. Whether you're just starting out or scaling fast, our services are built to grow with you—powered by strategy, supported by AI, and delivered by a team that's just as invested in your success as you are.
          </p>
        </div>
      </section>

      {/* Pillar 1: Platform Architecture & Management */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">Pillar 1</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              Platform Architecture & Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Scalable digital presence solutions from corporate websites to full-stack e-commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformServices.map((service, index) => (
              <Card key={index} className="card-hover h-full bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                {service.badge && (
                  <div className="absolute -top-3 left-6">
                    <Badge className="bg-secondary text-white">{service.badge}</Badge>
                  </div>
                )}
                <CardHeader className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <div className="text-secondary [&>svg]:w-7 [&>svg]:h-7">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold mb-2 text-foreground leading-tight">
                        {service.title}
                      </CardTitle>
                      <div className="text-sm font-bold text-secondary mb-2">
                        {service.priceRange}
                      </div>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="secondary" className="w-full h-11 text-sm font-semibold rounded-lg group">
                    Learn More 
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 2: Performance Growth Modules */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-white">Pillar 2</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              Performance Growth Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized modules that inject expert performance strategies directly into your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {performanceServices.map((service, index) => (
              <Card 
                key={index} 
                className={`card-hover h-full bg-card border-l-4 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200 ${
                  service.color === 'yellow' ? 'border-l-accent' :
                  service.color === 'cyan' ? 'border-l-secondary' :
                  service.color === 'red' ? 'border-l-red-500' :
                  'border-l-green-500'
                }`}
              >
                <CardHeader className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                      service.color === 'yellow' ? 'bg-accent/10' :
                      service.color === 'cyan' ? 'bg-secondary/10' :
                      service.color === 'red' ? 'bg-red-50' :
                      'bg-green-50'
                    }`}>
                      <div className={`[&>svg]:w-7 [&>svg]:h-7 ${
                        service.color === 'yellow' ? 'text-accent' :
                        service.color === 'cyan' ? 'text-secondary' :
                        service.color === 'red' ? 'text-red-500' :
                        'text-green-500'
                      }`}>
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold mb-2 text-foreground leading-tight">
                        {service.title}
                      </CardTitle>
                      <div className={`text-sm font-bold mb-2 ${
                        service.color === 'yellow' ? 'text-accent' :
                        service.color === 'cyan' ? 'text-secondary' :
                        service.color === 'red' ? 'text-red-500' :
                        'text-green-500'
                      }`}>
                        {service.priceRange}
                      </div>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${
                          service.color === 'yellow' ? 'text-accent' :
                          service.color === 'cyan' ? 'text-secondary' :
                          service.color === 'red' ? 'text-red-500' :
                          'text-green-500'
                        }`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className={`w-full h-11 text-sm font-semibold rounded-lg group border-2 ${
                      service.color === 'yellow' ? 'border-accent text-accent hover:bg-accent hover:text-primary' :
                      service.color === 'cyan' ? 'border-secondary text-secondary hover:bg-secondary hover:text-white' :
                      service.color === 'red' ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white' :
                      'border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
                    }`}
                  >
                    Learn More 
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              Additional Services & Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complementary services to enhance your digital ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-hover h-full bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                <CardHeader className="p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-primary [&>svg]:w-6 [&>svg]:h-6">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2 text-foreground leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-xs text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* JXING Tech Advantage */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              The JXING Tech Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why businesses choose our modular, integrated approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="text-primary [&>svg]:w-6 [&>svg]:h-6">
                    {advantage.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-base text-foreground font-medium leading-relaxed">
                    {advantage.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your Digital Foundation?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Choose the services that match your growth stage. Mix and match our modular offerings to create your perfect digital ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8" asChild>
              <Link to="/pricing">View Pricing & Plans</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8" asChild>
              <Link to="/contact">Schedule a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;