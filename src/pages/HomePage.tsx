import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
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
import heroBackground from "@/assets/hero-bg-modern.jpg";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [clientLogos, setClientLogos] = useState<string[]>([]);
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    // Fetch client logos
    const fetchClientLogos = async () => {
      try {
        const { data, error } = await supabase.storage
          .from('images')
          .list('clntlogo', {
            limit: 20,
            sortBy: { column: 'name', order: 'asc' }
          });

        if (error) {
          console.error('Error fetching client logos:', error);
          return;
        }

        if (data) {
          const logoUrls = data.map(file => {
            const { data: { publicUrl } } = supabase.storage
              .from('images')
              .getPublicUrl(`clntlogo/${file.name}`);
            return publicUrl;
          });
          setClientLogos(logoUrls);
        }
      } catch (error) {
        console.error('Error loading client logos:', error);
      }
    };

    fetchClientLogos();

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Growth, Simplified.
              <span className="block text-gradient-accent mt-2">Digital Solutions for SMEs that Scale.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Empowering small and mid-sized businesses with affordable, high-performing digital strategies, 
              combining automation, AI, and human expertise for measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="xl" className="animate-scale-in text-sm sm:text-base">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Book Your Free Growth Strategy Session</span>
                    <span className="sm:hidden">Free Strategy Session</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xs sm:max-w-lg md:max-w-4xl w-full h-[70vh] sm:h-[80vh] p-0 m-4">
                  <div className="w-full h-full">
                    <iframe
                      src="https://cal.com/jxingtech/book-a-free-consult"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Book a Growth Strategy Session"
                      className="rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Link to="/resources/website-growth-playbook">
                <Button variant="outline-white" size="xl" className="animate-scale-in text-sm sm:text-base">
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Download Our Free Website Growth Playbook for SMEs</span>
                  <span className="sm:hidden">Free Growth Playbook</span>
                </Button>
              </Link>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
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

          {/* Client Logos Section */}
          <div className="bg-gradient-to-br from-background to-muted/50 rounded-lg p-8 border border-azure/10">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Trusted by Forward-Thinking Businesses
              </h3>
              <p className="text-muted-foreground">
                Join these successful companies who chose JXING Tech as their digital growth partner
              </p>
            </div>
            
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {clientLogos.map((logoUrl, index) => {
                  // Extract client name from URL for alt text
                  const fileName = logoUrl.split('/').pop()?.split('.')[0] || '';
                  const clientName = fileName.replace(/clntlogo\//, '').replace(/[-_]/g, ' ');
                  
                  return (
                    <div key={index} className="flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_16.666%] px-3">
                      <div className="w-24 h-16 mx-auto flex items-center justify-center bg-card rounded-lg border border-border/50 hover:border-azure/30 transition-colors duration-200 p-3">
                        <img
                          src={logoUrl}
                          alt={`${clientName} - JXING Tech client success story`}
                          className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Your Blueprint for Digital Growth: Get Our Free Website Growth Playbook for SMEs
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
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
            <div className="bg-gradient-to-br from-azure/10 to-robin-egg-blue/10 p-6 sm:p-8 rounded-lg border border-azure/20 order-1 lg:order-2">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-24 sm:w-32 h-32 sm:h-40 bg-white rounded-xl mx-auto mb-3 sm:mb-4 shadow-[0_6px_24px_rgba(0,0,0,0.1)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-azure/10 to-marian-blue/10"></div>
                  <div className="relative h-full flex flex-col items-center justify-center p-3 sm:p-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-azure/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Download className="h-5 w-5 sm:h-6 sm:w-6 text-azure" />
                    </div>
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-bold text-oxford-blue">Website Growth</div>
                      <div className="text-xs text-muted-foreground">Playbook</div>
                      <div className="text-xs font-medium text-azure mt-1">FREE PDF</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 sm:mb-2">Free Download</h3>
                <p className="text-sm sm:text-base text-muted-foreground">50+ pages of actionable insights</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
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
                <Link to="/resources/website-growth-playbook">
                  <Button variant="hero" className="w-full">
                    <Download className="h-5 w-5" />
                    Download Now
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-3 sm:mt-4 text-center">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Let's Build Your Digital Future Together.
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8">
            Ready to transform your business with a partner who cares about your growth? 
            Connect with our digital strategy experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              data-cal-link="jxingtech/book-a-free-consult"
              data-cal-config='{"layout":"month_view"}'
              className="text-sm sm:text-base"
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Schedule Your Free Consultation</span>
              <span className="sm:hidden">Free Consultation</span>
            </Button>
            <Link to="/pricing">
              <Button variant="outline-white" size="xl" className="text-sm sm:text-base">
                <PieChart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden md:inline">Explore Our Digital Marketing Packages & Pricing</span>
                <span className="md:hidden">View Pricing</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;