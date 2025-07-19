import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  TrendingUp, 
  Globe, 
  Search, 
  Mail, 
  BarChart3, 
  Workflow, 
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-azure" />,
      title: "AI-Powered Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      features: [
        "Customer service chatbots",
        "Lead qualification automation",
        "Data entry and processing",
        "Workflow optimization",
        "Integration management"
      ],
      pricing: "Starting at $497/month"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-azure" />,
      title: "Growth Marketing",
      description: "Data-driven marketing strategies that deliver measurable results",
      features: [
        "Content marketing strategy",
        "Social media management",
        "Email marketing campaigns",
        "Conversion optimization",
        "Performance tracking"
      ],
      pricing: "Starting at $997/month"
    },
    {
      icon: <Search className="h-12 w-12 text-azure" />,
      title: "SEO & Web Presence",
      description: "Boost your online visibility and attract more qualified leads",
      features: [
        "Technical SEO audits",
        "Content optimization",
        "Local SEO setup",
        "Website performance",
        "Analytics reporting"
      ],
      pricing: "Starting at $697/month"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-azure" />,
      title: "Analytics & Insights",
      description: "Turn your data into actionable business intelligence",
      features: [
        "Custom dashboards",
        "Performance metrics",
        "Predictive analytics",
        "ROI tracking",
        "Monthly reporting"
      ],
      pricing: "Starting at $397/month"
    },
    {
      icon: <Workflow className="h-12 w-12 text-azure" />,
      title: "System Integration",
      description: "Connect your tools and systems for seamless operations",
      features: [
        "CRM integration",
        "API connections",
        "Data synchronization",
        "Process automation",
        "Custom solutions"
      ],
      pricing: "Starting at $797/month"
    },
    {
      icon: <Mail className="h-12 w-12 text-azure" />,
      title: "Email Marketing",
      description: "Personalized email campaigns that convert prospects into customers",
      features: [
        "Campaign strategy",
        "Template design",
        "Automation sequences",
        "A/B testing",
        "Performance optimization"
      ],
      pricing: "Starting at $597/month"
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      description: "Perfect for small businesses getting started with digital transformation",
      services: ["Basic Automation", "SEO Fundamentals", "Analytics Setup"],
      price: "$1,497/month",
      badge: "Most Popular"
    },
    {
      name: "Growth Package",
      description: "Comprehensive solution for businesses ready to scale",
      services: ["Full Automation Suite", "Growth Marketing", "SEO & Web Presence", "Analytics & Insights"],
      price: "$2,997/month",
      badge: "Best Value"
    },
    {
      name: "Enterprise Package",
      description: "Complete digital ecosystem for established businesses",
      services: ["All Services", "Priority Support", "Custom Integrations", "Dedicated Account Manager"],
      price: "Custom Pricing",
      badge: "Premium"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-[600px] mx-auto">
            Our Services
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-[600px] mx-auto leading-relaxed">
            Comprehensive digital solutions designed to streamline your operations, 
            boost your online presence, and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-4 leading-tight">
              What We Offer
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Tailored solutions for every aspect of your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover h-full bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                <CardHeader className="text-center p-6">
                  <div className="flex justify-center mb-4 w-14 h-14 bg-ghost-white rounded-xl mx-auto items-center">
                    <div className="text-marian-blue [&>svg]:w-7 [&>svg]:h-7">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold mb-3 text-oxford-blue leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-6 pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-azure flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <div className="text-lg font-semibold text-azure mb-4">
                      {service.pricing}
                    </div>
                    <Button variant="outline-azure" className="w-full h-11 text-sm font-semibold rounded-lg">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Bundled solutions that deliver maximum value and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="card-hover relative">
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="cta-gradient text-white px-4 py-1">
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-bold mb-2">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    {pkg.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-azure">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-azure flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="azure" className="w-full">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground">
              How we deliver results in just 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your current systems and identify opportunities for improvement"
              },
              {
                step: "02", 
                title: "Strategy",
                description: "We create a customized plan tailored to your business goals and budget"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our team deploys solutions with minimal disruption to your operations"
              },
              {
                step: "04",
                title: "Optimization",
                description: "We continuously monitor and optimize performance for maximum ROI"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-azure text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how our services can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline-azure" size="xl">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;