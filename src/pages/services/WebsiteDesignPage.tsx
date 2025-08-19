import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Globe, 
  Zap, 
  Search, 
  Smartphone, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Star,
  Quote
} from "lucide-react";

const WebsiteDesignPage = () => {
  const deliverables = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Custom Website Design",
      description: "Fully responsive, mobile-first design tailored to your brand and business goals"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning-Fast Performance",
      description: "Optimized for speed with page load times under 3 seconds for better user experience"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Foundation",
      description: "Built-in SEO optimization with proper structure, meta tags, and schema markup"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Optimization",
      description: "Perfect display and functionality across all devices and screen sizes"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Reliability",
      description: "SSL certificates, regular backups, and security monitoring included"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Conversion-Focused",
      description: "Strategic placement of CTAs and forms to maximize lead generation and sales"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competition to create a strategic foundation"
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team creates custom designs and develops your website using the latest technologies"
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description: "Comprehensive testing across devices and browsers to ensure perfect functionality"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We handle the launch process and provide ongoing support and maintenance"
    }
  ];

  const targetClients = [
    "Small to medium-sized enterprises (SMEs) looking to establish or improve their online presence",
    "Startups needing a professional website to build credibility and attract customers",
    "E-commerce businesses requiring conversion-optimized online stores",
    "Service-based businesses wanting to showcase their expertise and generate leads",
    "Growing companies needing to scale their digital infrastructure"
  ];

  const faqs = [
    {
      question: "What are the key considerations for website development?",
      answer: "Key considerations include mobile responsiveness, page loading speed, SEO optimization, user experience design, security measures, scalability, and conversion optimization. We ensure all these elements are properly addressed in every project."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typically, a custom website takes 4-8 weeks from start to launch, depending on complexity and features required. We provide detailed timelines during the discovery phase and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer comprehensive website care and optimization plans that include security updates, performance monitoring, content updates, backups, and technical support to keep your site running smoothly."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. All our websites are built with a mobile-first approach, ensuring they look and function perfectly on smartphones, tablets, and desktop computers. Mobile optimization is essential for both user experience and SEO."
    },
    {
      question: "Can you help with e-commerce functionality?",
      answer: "Yes, we specialize in building conversion-optimized e-commerce websites with features like product catalogs, shopping carts, payment integration, inventory management, and customer account systems."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Website Design & Development
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Growth-Driven Website Design & Development: Your Foundation for Digital Success
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Launch fast, responsive, and SEO-friendly websites that look good and perform even better for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <Globe className="h-24 w-24 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
                The Problem We Solve
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Slow, Outdated Websites</h3>
                    <p className="text-muted-foreground">Many businesses struggle with websites that load slowly, look unprofessional, and don't convert visitors into customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Poor Mobile Experience</h3>
                    <p className="text-muted-foreground">With over 60% of web traffic coming from mobile devices, non-responsive websites lose potential customers daily.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Low Search Visibility</h3>
                    <p className="text-muted-foreground">Websites built without SEO considerations fail to rank in search engines, missing out on organic traffic and growth opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-8">
              <Quote className="h-8 w-8 text-marian-blue mb-4" />
              <blockquote className="text-lg text-oxford-blue font-medium mb-4 leading-relaxed">
                "Our old website was costing us customers. It was slow, looked outdated, and didn't work properly on phones. We knew we needed help but didn't know where to start."
              </blockquote>
              <cite className="text-muted-foreground">— Common feedback from our clients</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Our Growth-Driven Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We create websites that not only look amazing but are strategically designed to grow your business, attract customers, and generate results from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Growth-Focused Design
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Every element is strategically placed to guide visitors toward taking action, whether that's making a purchase, booking a consultation, or contacting your team.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Performance Optimized
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Built for speed and reliability with optimized code, compressed images, and efficient hosting to ensure your site loads in under 3 seconds.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Future-Proof Technology
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Using modern frameworks and best practices to ensure your website remains secure, scalable, and easy to maintain as your business grows.
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Deliverables & Features */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              What You Get: Key Deliverables & Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive website solution designed to attract, engage, and convert your ideal customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-marian-blue [&>svg]:w-6 [&>svg]:h-6">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-oxford-blue mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
                Who Is This For?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our website design and development service is perfect for businesses that want to establish a strong online presence and drive real results.
              </p>
              <ul className="space-y-4">
                {targetClients.map((client, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-azure flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-ghost-white rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-marian-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-oxford-blue">Perfect For</h3>
                  <p className="text-muted-foreground">Growing businesses</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Annual Revenue</span>
                  <span className="text-muted-foreground">$100K - $10M+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Team Size</span>
                  <span className="text-muted-foreground">5 - 100+ employees</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Industry</span>
                  <span className="text-muted-foreground">All sectors welcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From initial consultation to successful launch, we follow a strategic process that ensures your website delivers results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-marian-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-oxford-blue mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Snapshot */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Success Snapshot
            </h2>
          </div>

          <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Quote className="h-8 w-8 text-marian-blue mb-4" />
                  <blockquote className="text-xl text-oxford-blue font-medium mb-6 leading-relaxed">
                    "JXING Tech transformed our online presence completely. Our new website not only looks amazing but has increased our lead generation by 300% in just 6 months. The mobile experience is fantastic, and our customers love how easy it is to navigate."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ghost-white rounded-full flex items-center justify-center">
                      <span className="text-marian-blue font-semibold">SB</span>
                    </div>
                    <div>
                      <cite className="text-oxford-blue font-semibold not-italic">Sarah Chen</cite>
                      <p className="text-muted-foreground">CEO, TechStart Solutions</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">300%</div>
                    <div className="text-sm text-muted-foreground">Lead Increase</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">2.8s</div>
                    <div className="text-sm text-muted-foreground">Page Load Time</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Mobile Score</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">45%</div>
                    <div className="text-sm text-muted-foreground">Bounce Rate Drop</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our website design and development process.
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
            Ready to Launch Your Growth-Driven Website?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's create a website that not only looks amazing but drives real business results. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
              Start Your Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesignPage;