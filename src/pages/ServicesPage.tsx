import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  const services = [
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Website Design & Development",
      description: "Launch fast, responsive, and SEO-friendly websites that look good and perform even better for your business.",
      features: [
        "Mobile-responsive design",
        "SEO optimization built-in",
        "Fast loading speeds"
      ],
      link: "/services/website-design"
    },
    {
      icon: <Search className="h-7 w-7" />,
      title: "Content Strategy & SEO",
      description: "Drive organic growth with high-quality content that ranks well and resonates for local search.",
      features: [
        "Keyword research & strategy",
        "High-quality content creation",
        "Local SEO optimization"
      ],
      link: "/services/content-seo"
    },
    {
      icon: <Share2 className="h-7 w-7" />,
      title: "Omni-Channel Social Media Management",
      description: "Stay visible and relevant across all major platforms, consistently, for your audience.",
      features: [
        "Multi-platform posting",
        "Content calendar planning",
        "Audience engagement"
      ],
      link: "/services/social-media"
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Paid Ads Management",
      description: "Reach the right people, at the right time, with the right message for targeted ad campaigns.",
      features: [
        "Targeted campaign setup",
        "Ad creative optimization",
        "Performance monitoring"
      ],
      link: "/services/paid-ads"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "CRM & Automation Integration",
      description: "Turn leads into customers with personalized follow-ups and workflows, optimizing your sales process.",
      features: [
        "Lead tracking & nurturing",
        "Automated email sequences",
        "Sales pipeline optimization"
      ],
      link: "/services/crm-automation"
    },
    {
      icon: <Workflow className="h-7 w-7" />,
      title: "Behavioral Marketing Automation",
      description: "Map journeys that speak to every customer's unique path, enhancing customer engagement.",
      features: [
        "Customer journey mapping",
        "Behavioral triggers",
        "Personalized experiences"
      ],
      link: "/services/behavior-automation"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Website Care & Optimization Plan",
      description: "Keep your website running fast, safe, and error-free, ensuring optimal performance for users.",
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
      description: "Get more out of every blog or newsletter, maximizing your digital content ROI.",
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
      description: "Make every piece of content part of your conversion funnel, driving smarter marketing for your business.",
      features: [
        "Strategic content placement",
        "Conversion funnel optimization",
        "Performance tracking"
      ],
      link: "/services/content-distribution"
    },
    {
      icon: <Bot className="h-7 w-7" />,
      title: "AI Integration & Smart Agents",
      description: "Bring AI into your business where it matters most, driving innovation for SMEs.",
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
      title: "No more fragmented vendors or DIY struggles for SMEs"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Predictable monthly investment with clear outcomes for your digital marketing budget"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "All-in-one dashboard to track your growth and digital performance"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "AI + human-powered team working with you, not just for you"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Services built around your stage, not someone else's template"
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

      {/* Core Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-4 leading-tight">
              Explore Our Core Digital Services for SMEs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover h-full bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                <CardHeader className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-ghost-white rounded-xl flex items-center justify-center">
                      <div className="text-marian-blue [&>svg]:w-7 [&>svg]:h-7">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold mb-3 text-oxford-blue leading-tight">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-azure flex-shrink-0" />
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

      {/* JXING Tech Advantage */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-4 leading-tight">
              The JXING Tech Advantage: Your Trusted Digital Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                <div className="flex-shrink-0 w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center">
                  <div className="text-marian-blue [&>svg]:w-6 [&>svg]:h-6">
                    {advantage.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-base text-oxford-blue font-medium leading-relaxed">
                    {advantage.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Grow Your Business
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Ready to choose a plan that matches your stage of business? Explore our digital agency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              Choose Your Plan
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;