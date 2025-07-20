import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  ArrowRight, 
  Download, 
  Calendar, 
  DollarSign, 
  Users, 
  Settings, 
  Zap, 
  Bot, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Globe, 
  Smartphone, 
  BarChart3,
  Target,
  Clock,
  Shield,
  Lightbulb,
  Workflow,
  PieChart,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  const [email, setEmail] = useState("");

  const challenges = [
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "High upfront costs for digital agencies",
      description: "Traditional agencies require large retainers and long-term contracts"
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Lack of in-house tech & marketing expertise",
      description: "Small teams can't cover all the specialized skills needed"
    },
    {
      icon: <Settings className="h-8 w-8 text-red-500" />,
      title: "Fragmented services from multiple vendors",
      description: "Managing multiple providers creates complexity and inefficiency"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-red-500" />,
      title: "No measurable growth from one-off projects",
      description: "Isolated campaigns don't create sustainable long-term results"
    }
  ];

  const uniqueEdge = [
    {
      icon: <Bot className="h-8 w-8 text-azure" />,
      title: "AI-Accelerated Workflows",
      description: "Efficiency through intelligent automation that learns and adapts to your business needs."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-azure" />,
      title: "Ongoing Growth Focus",
      description: "Sustainable results through continuous optimization and data-driven strategies."
    },
    {
      icon: <Globe className="h-8 w-8 text-azure" />,
      title: "All-in-One Ecosystem",
      description: "Comprehensive digital presence management from a single, integrated platform."
    },
    {
      icon: <Shield className="h-8 w-8 text-azure" />,
      title: "Built-in Accountability & Transparent Reporting",
      description: "Clear metrics and regular reporting so you always know your ROI."
    }
  ];

  const solutions = [
    {
      icon: <Globe className="h-8 w-8 text-azure" />,
      title: "Website Design & Development",
      description: "Launch fast, responsive, and SEO-friendly websites that look good and perform even better for your business.",
      link: "/services/website-design"
    },
    {
      icon: <Target className="h-8 w-8 text-azure" />,
      title: "Content Strategy & SEO",
      description: "Drive organic growth with high-quality content that ranks well and resonates for local search.",
      link: "/services/content-seo"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-azure" />,
      title: "Social Media Management",
      description: "Engage your audience across all channels with consistent, on-brand social media presence.",
      link: "/services/social-media"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-azure" />,
      title: "Performance Marketing: Paid Ads",
      description: "Reach the right people, at the right time, with the right message for targeted campaigns.",
      link: "/services/paid-ads"
    },
    {
      icon: <Workflow className="h-8 w-8 text-azure" />,
      title: "CRM & Automation Integration",
      description: "Streamline your processes and nurture leads automatically with intelligent automation.",
      link: "/services/crm-automation"
    },
    {
      icon: <Bot className="h-8 w-8 text-azure" />,
      title: "AI Integration & Smart Agents",
      description: "Bring AI into your business where it matters most for SMEs.",
      link: "/services/ai-integration"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-azure" />,
      title: "Content Systems",
      description: "Repurpose and distribute content efficiently across all your marketing channels.",
      link: "/services/repurposing"
    },
    {
      icon: <Settings className="h-8 w-8 text-azure" />,
      title: "Website Care & Optimization",
      description: "Keep your digital presence running smoothly with ongoing maintenance and optimization.",
      link: "/services/website-care"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "JXING transformed our marketing completely. We saw a 250% increase in qualified leads within 3 months.",
      rating: 5,
      highlight: "Over 250% increase in organic traffic"
    },
    {
      name: "Mike Chen",
      company: "GrowthCo",
      text: "The automation solutions saved us countless hours. Our team can now focus on what matters most.",
      rating: 5,
      highlight: "Generated 400+ qualified leads"
    },
    {
      name: "Jennifer Liu",
      company: "LocalBiz Solutions",
      text: "Their subscription model made enterprise-level digital marketing accessible for our small business.",
      rating: 5,
      highlight: "300% ROI increase in 6 months"
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
              Growth, Simplified.
              <span className="block text-gradient-accent">Digital Solutions for SMEs that Scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering small and mid-sized businesses with affordable, high-performing digital strategies, 
              combining automation, AI, and human expertise for measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="xl" className="animate-scale-in">
                    <Calendar className="h-5 w-5" />
                    Book Your Free Growth Strategy Session
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                  <div className="w-full h-full">
                    <iframe
                      src="https://cal.com/jxingtech/growth-strategy-session"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Book a Growth Strategy Session"
                      className="rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline-azure" size="xl" className="animate-scale-in">
                <Download className="h-5 w-5" />
                Download Our Free Website Growth Playbook for SMEs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SME Challenge & Solution Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Are You Facing These Digital Hurdles?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className="text-center bg-red-50 border-red-200">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {challenge.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {challenge.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-azure/10 to-robin-egg-blue/10 rounded-lg p-8 border border-azure/20">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              At JXING Tech, we turn complexity into scalable outcomes for businesses.
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our subscription model is the answer to affordable digital solutions that grow with your business.
            </p>
            <Badge variant="secondary" className="px-6 py-3 text-base">
              <Zap className="h-5 w-5 mr-2" />
              Subscription-Based Digital Partnership
            </Badge>
          </div>
        </div>
      </section>

      {/* Why JXING Tech Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Your Long-Term Digital Partner, Not Just a Vendor.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with human expertise to deliver solutions that actually work for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueEdge.map((edge, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {edge.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {edge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {edge.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Growth-Driven Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Unlock Your Business Potential with Our Core Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital strategies designed specifically for SME growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="card-hover text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-base mb-4 flex-1">
                    {solution.description}
                  </CardDescription>
                  <Link to={solution.link}>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results: Client Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              See How We've Helped Businesses Like Yours Grow
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses who chose long-term digital partnership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                  <div className="mb-4">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.company}</div>
                  </div>
                  <Badge variant="secondary" className="w-full justify-center">
                    {testimonial.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/case-studies">
              <Button variant="azure" size="lg">
                View All Case Studies
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Download Playbook Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Your Blueprint for Digital Growth: Get Our Free Website Growth Playbook for SMEs
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover the proven strategies that have helped hundreds of SMEs transform their digital presence 
                and achieve sustainable growth. This comprehensive playbook includes actionable insights, 
                real-world case studies, and step-by-step implementation guides.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-azure flex-shrink-0" />
                  <span>SEO strategies that actually work for small businesses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-azure flex-shrink-0" />
                  <span>Conversion optimization techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-azure flex-shrink-0" />
                  <span>Automation workflows that save time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-azure flex-shrink-0" />
                  <span>Performance tracking and analytics</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-azure/10 to-robin-egg-blue/10 p-8 rounded-lg border border-azure/20">
              <div className="text-center mb-6">
                <div className="w-32 h-40 bg-azure/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Download className="h-16 w-16 text-azure" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Free Download</h3>
                <p className="text-muted-foreground">50+ pages of actionable insights</p>
              </div>
              
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                <Button variant="hero" className="w-full">
                  <Download className="h-5 w-5" />
                  Download Now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Your Digital Future Together.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Ready to transform your business with a partner who cares about your growth? 
            Connect with our digital strategy experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Calendar className="h-5 w-5" />
              Schedule Your Free Consultation
            </Button>
            <Link to="/pricing">
              <Button variant="outline-azure" size="xl">
                <PieChart className="h-5 w-5" />
                Explore Our Digital Marketing Packages & Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;