import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Bot, Users, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const HomePage = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-azure" />,
      title: "AI-Powered Automation",
      description: "Streamline your business processes with intelligent automation that learns and adapts to your needs."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-azure" />,
      title: "Growth-Driven Marketing",
      description: "Data-driven marketing strategies that deliver measurable results and sustainable growth."
    },
    {
      icon: <Users className="h-8 w-8 text-azure" />,
      title: "Human Expertise",
      description: "Dedicated team of experts combining technology with human insight for optimal results."
    }
  ];

  const benefits = [
    "Save 40+ hours per month with automation",
    "Increase lead generation by 300%",
    "24/7 monitoring and optimization",
    "Dedicated account manager",
    "Custom integrations and workflows",
    "Comprehensive analytics and reporting"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "JXING transformed our marketing completely. We saw a 250% increase in qualified leads within 3 months.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "GrowthCo",
      text: "The automation solutions saved us countless hours. Our team can now focus on what matters most.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Simplify Complex Tech with
              <span className="block text-gradient-accent">Intelligent Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Growth-driven digital solutions for SMEs. Automation, AI, and human expertise 
              delivered through our subscription model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="animate-scale-in">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline-azure" size="xl" className="animate-scale-in">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose JXING Tech Group?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with human expertise to deliver solutions that actually work for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Measurable Results That Drive Growth
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our clients see real, quantifiable improvements in their business metrics. 
                From increased efficiency to higher conversion rates, we deliver results that matter.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-azure flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/services">
                  <Button variant="azure" size="lg">
                    Explore Our Services
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-xanthous" />
                    <span>Quick Stats</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-azure">300%</div>
                    <div className="text-muted-foreground">Average Lead Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-azure">40+</div>
                    <div className="text-muted-foreground">Hours Saved Monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-azure">24/7</div>
                    <div className="text-muted-foreground">Monitoring & Support</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-xanthous fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join hundreds of SMEs who have streamlined their operations and accelerated growth with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Your Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Link to="/pricing">
              <Button variant="outline-azure" size="xl">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;