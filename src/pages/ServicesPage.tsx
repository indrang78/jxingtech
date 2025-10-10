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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Our 6 Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, grow, and scale your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card 
                key={index} 
                className="group relative h-full bg-card border border-border hover:border-primary/30 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  service.category === 'Performance' ? 'bg-gradient-to-r from-secondary/50 to-secondary' :
                  service.category === 'Advanced' ? 'bg-gradient-to-r from-accent/50 to-accent' :
                  'bg-gradient-to-r from-primary/50 to-primary'
                }`} />
                
                <CardHeader className="p-8 pb-4">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      service.category === 'Performance' ? 'bg-gradient-to-br from-secondary/10 to-secondary/5' :
                      service.category === 'Advanced' ? 'bg-gradient-to-br from-accent/10 to-accent/5' :
                      'bg-gradient-to-br from-primary/10 to-primary/5'
                    }`}>
                      <div className={`[&>svg]:w-8 [&>svg]:h-8 ${
                        service.category === 'Performance' ? 'text-secondary' :
                        service.category === 'Advanced' ? 'text-accent' :
                        'text-primary'
                      }`}>
                        {service.icon}
                      </div>
                    </div>
                    <Badge 
                      variant="outline"
                      className={`text-xs font-medium border-0 ${
                        service.category === 'Performance' ? 'bg-secondary/10 text-secondary' :
                        service.category === 'Advanced' ? 'bg-accent/10 text-accent' :
                        'bg-primary/10 text-primary'
                      }`}
                    >
                      {service.category}
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <CardTitle className="text-xl font-bold mb-4 text-foreground leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  {/* Description */}
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8 pt-4">
                  {/* Features List */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      What's Included
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            service.category === 'Performance' ? 'text-secondary' :
                            service.category === 'Advanced' ? 'text-accent' :
                            'text-primary'
                          }`} />
                          <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className={`w-full font-semibold rounded-xl h-12 transition-all duration-300 ${
                      service.category === 'Performance' 
                        ? 'bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30' :
                      service.category === 'Advanced' 
                        ? 'bg-accent hover:bg-accent/90 text-primary shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30' :
                        'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30'
                    }`}
                    asChild
                  >
                    <Link to={service.link} className="inline-flex items-center justify-center gap-2">
                      Learn More 
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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