import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Shield, Zap, Search, TrendingUp, Settings, Monitor, Users, ShoppingCart, Briefcase, AlertTriangle, Clock } from "lucide-react";

const WebsiteCarePage = () => {
  const deliverables = [
    {
      icon: Shield,
      title: "Security Monitoring & Updates",
      description: "24/7 security monitoring with regular updates and malware protection to keep your site safe"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization, caching, and technical improvements to ensure fast loading times"
    },
    {
      icon: Search,
      title: "SEO Health Maintenance", 
      description: "Ongoing SEO monitoring and optimization to maintain and improve search rankings"
    },
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimization",
      description: "Continuous testing and optimization to improve user experience and conversion rates"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Website Health Audit",
      description: "Comprehensive analysis of your site's performance, security, SEO, and user experience"
    },
    {
      step: "02", 
      title: "Optimization Plan Development",
      description: "Create customized maintenance and optimization roadmap based on audit findings"
    },
    {
      step: "03",
      title: "Implementation & Monitoring",
      description: "Execute optimizations and establish ongoing monitoring systems for all key metrics"
    },
    {
      step: "04",
      title: "Continuous Improvement",
      description: "Regular reporting, testing, and refinements to keep your website performing at its best"
    }
  ];

  const faqs = [
    {
      question: "What are common website maintenance issues for businesses?",
      answer: "Common issues include slow loading speeds, security vulnerabilities, broken links, outdated plugins, poor mobile responsiveness, declining SEO rankings, and conversion rate drops. Our plan addresses all these proactively."
    },
    {
      question: "How often do you perform website maintenance tasks?",
      answer: "We perform daily security monitoring, weekly performance checks, monthly SEO audits, and quarterly comprehensive reviews. Critical security updates are applied immediately as needed."
    },
    {
      question: "Will website maintenance affect my site's availability?",
      answer: "Most maintenance tasks are performed without any downtime. When updates require brief maintenance windows, we schedule them during low-traffic periods and notify you in advance."
    },
    {
      question: "What happens if my website gets hacked or goes down?",
      answer: "We provide emergency response within 2 hours for critical issues. Our plan includes daily backups, malware removal, and restoration services to get your site back online quickly."
    },
    {
      question: "Can you help improve my website's conversion rates?",
      answer: "Yes! Our optimization plan includes A/B testing, user experience improvements, page speed optimization, and conversion funnel analysis to help turn more visitors into customers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20">
            Website Maintenance
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Website Care & Optimization: Keep Your Site Healthy, Fast, and Conversion-Ready
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ensure your website stays secure, fast, and optimized for conversions. Our comprehensive care plan keeps your digital foundation strong while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
              Secure My Website
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all">
              Get Free Website Audit
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Hidden Costs of Website Neglect</h2>
            <p className="text-muted-foreground text-lg">Most businesses lose customers and revenue due to preventable website issues</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-xl">Security Vulnerabilities & Downtime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Outdated websites are prime targets for hackers. Security breaches can cost businesses thousands in lost revenue, damaged reputation, and recovery efforts.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Clock className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-xl">Slow Performance & Poor User Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Slow-loading websites lose 40% of visitors within 3 seconds. Poor performance directly impacts search rankings, user experience, and conversion rates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Comprehensive Website Care System</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We provide proactive website maintenance, security monitoring, and performance optimization so your site stays healthy, secure, and conversion-focused while you concentrate on growing your business.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Proactive Security</h3>
              <p className="text-muted-foreground">24/7 monitoring, regular updates, and immediate threat response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Speed Optimization</h3>
              <p className="text-muted-foreground">Continuous performance improvements for faster loading times</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Conversion Focus</h3>
              <p className="text-muted-foreground">Regular testing and optimization to improve business results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You Get: Complete Website Protection</h2>
            <p className="text-muted-foreground text-lg">Comprehensive maintenance and optimization services to keep your website performing</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perfect for Business-Critical Websites</h2>
            <p className="text-muted-foreground text-lg">Essential for businesses that depend on their website for revenue and growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">E-commerce Businesses</h3>
              <p className="text-muted-foreground text-sm">Online stores where downtime directly impacts sales and customer trust</p>
            </Card>
            <Card className="p-6 text-center">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Professional Service Firms</h3>
              <p className="text-muted-foreground text-sm">Businesses where website performance affects lead generation and credibility</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Growing SMEs</h3>
              <p className="text-muted-foreground text-sm">Companies without dedicated IT resources who need reliable website management</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Website Care Process</h2>
            <p className="text-muted-foreground text-lg">Systematic approach to keeping your website healthy and optimized</p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Snapshot */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Success Snapshot</h2>
          </div>
          <Card className="p-8">
            <blockquote className="text-lg italic mb-4">
              "Since partnering with JXING Tech for website care, we've had zero security incidents and our site loads 60% faster. Most importantly, our conversion rate improved by 35% thanks to their ongoing optimization work. It's like having a dedicated IT team at a fraction of the cost."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <span className="font-semibold text-primary">DB</span>
              </div>
              <div>
                <div className="font-semibold">Business Owner</div>
                <div className="text-muted-foreground">Online Retail Company</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Digital Investment Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait for problems to occur. Keep your website secure, fast, and optimized with our comprehensive care plan. Your business depends on it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
              Secure My Website
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all">
              Get Free Website Health Check
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteCarePage;