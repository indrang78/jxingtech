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
  // 6 Core Services
  const coreServices = [
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Website Design & Development",
      description: "Professional, scalable websites that convert visitors into customers. From corporate sites to full e-commerce platforms.",
      priceRange: "Starting MYR 788",
      features: [
        "Mobile-responsive design",
        "SEO optimization built-in",
        "E-commerce capabilities",
        "Content management system",
        "Ongoing care & maintenance"
      ],
      link: "/services/website-design",
      category: "Platform"
    },
    {
      icon: <Search className="h-7 w-7" />,
      title: "SEO & Content Strategy",
      description: "Comprehensive SEO package for dominant search presence and sustainable organic traffic growth.",
      priceRange: "MYR 1,188/month",
      features: [
        "20-30 keywords research",
        "5 blog articles per month",
        "Advanced technical SEO",
        "Monthly competitor analysis",
        "Performance tracking"
      ],
      link: "/services/content-seo",
      category: "Performance"
    },
    {
      icon: <Share2 className="h-7 w-7" />,
      title: "Social Media Management",
      description: "Build consistent brand presence and organic reach across multiple social platforms.",
      priceRange: "MYR 1,188/month",
      features: [
        "3 platform management",
        "20 content posts per month",
        "Content planning & strategy",
        "Community engagement",
        "Monthly analytics reporting"
      ],
      link: "/services/social-media",
      category: "Performance"
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Paid Ads Management",
      description: "ROI-focused paid digital advertising campaigns for immediate market impact and lead generation.",
      priceRange: "MYR 588/month",
      features: [
        "Multi-platform campaigns",
        "Ad creative & copywriting",
        "A/B testing & optimization",
        "Conversion tracking",
        "Monthly performance reports"
      ],
      link: "/services/paid-ads",
      category: "Performance"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "CRM & Automation",
      description: "Streamline customer engagement with powerful CRM systems and marketing automation workflows.",
      priceRange: "MYR 1,888/month",
      features: [
        "CRM implementation",
        "Email marketing automation",
        "Lead nurturing workflows",
        "Customer segmentation",
        "Integration with existing tools"
      ],
      link: "/services/crm-automation",
      category: "Platform"
    },
    {
      icon: <Bot className="h-7 w-7" />,
      title: "AI Integration & Smart Agents",
      description: "Custom AI solutions and intelligent automation for modern, efficient business operations.",
      priceRange: "Custom pricing",
      features: [
        "AI chatbot development",
        "Process automation",
        "Custom AI integrations",
        "Smart workflow optimization",
        "Ongoing AI training & refinement"
      ],
      link: "/services/ai-integration",
      category: "Advanced"
    }
  ];

  const advantages = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Complete digital ecosystem in one place"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Transparent, predictable monthly investment"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Proven results across multiple industries"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "AI + human expertise working for you"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] opacity-30"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Your Complete Digital Growth Ecosystem
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            6 core services to power your business transformation. From websites to AI, we've got you covered.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8" asChild>
            <Link to="/pricing">View Our Packages</Link>
          </Button>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              Our 6 Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build, grow, and scale your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="card-hover h-full bg-card border-2 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                <CardHeader className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                      service.category === 'Performance' ? 'bg-secondary/10' :
                      service.category === 'Advanced' ? 'bg-accent/10' :
                      'bg-primary/10'
                    }`}>
                      <div className={`[&>svg]:w-7 [&>svg]:h-7 ${
                        service.category === 'Performance' ? 'text-secondary' :
                        service.category === 'Advanced' ? 'text-accent' :
                        'text-primary'
                      }`}>
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Badge className={`mb-2 text-xs ${
                        service.category === 'Performance' ? 'bg-secondary/10 text-secondary' :
                        service.category === 'Advanced' ? 'bg-accent/10 text-accent' :
                        'bg-primary/10 text-primary'
                      }`}>
                        {service.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2 text-foreground leading-tight">
                    {service.title}
                  </CardTitle>
                  <div className={`text-sm font-bold mb-3 ${
                    service.category === 'Performance' ? 'text-secondary' :
                    service.category === 'Advanced' ? 'text-accent' :
                    'text-primary'
                  }`}>
                    {service.priceRange}
                  </div>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${
                          service.category === 'Performance' ? 'text-secondary' :
                          service.category === 'Advanced' ? 'text-accent' :
                          'text-primary'
                        }`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-semibold rounded-lg ${
                      service.category === 'Performance' ? 'bg-secondary hover:bg-secondary/90 text-white' :
                      service.category === 'Advanced' ? 'bg-accent hover:bg-accent/90 text-primary' :
                      'bg-primary hover:bg-primary/90 text-white'
                    }`}
                    asChild
                  >
                    <Link to={service.link}>
                      Learn More 
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* JXING Tech Advantage */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              Why Choose JXING Tech
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than just services—a complete digital partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-card rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="text-primary [&>svg]:w-6 [&>svg]:h-6">
                    {advantage.icon}
                  </div>
                </div>
                <p className="text-sm text-foreground font-medium leading-relaxed pt-2">
                  {advantage.title}
                </p>
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Choose the services that match your growth stage and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8" asChild>
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;