import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Search, PenTool, TrendingUp, Heart, Users, ShoppingCart, Briefcase, BarChart3, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import seoImage from "@/assets/service-seo-content.jpg";

const ContentSEOPage = () => {
  const deliverables = [
    {
      icon: Search,
      title: "Strategic SEO Foundation",
      description: "Comprehensive keyword research, technical SEO optimization, and content strategy aligned with search intent"
    },
    {
      icon: PenTool,
      title: "Brand Story Development",
      description: "Compelling brand narrative and content themes that resonate with your target audience and build trust"
    },
    {
      icon: TrendingUp,
      title: "Content Calendar & Production", 
      description: "Strategic content planning and creation that drives organic traffic and supports business goals"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking & Optimization",
      description: "Monthly reporting and continuous optimization to improve rankings, traffic, and conversions"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "SEO Audit & Brand Discovery",
      description: "Analyze current SEO performance and uncover your unique brand story and competitive advantages"
    },
    {
      step: "02", 
      title: "Strategy & Content Planning",
      description: "Develop comprehensive SEO strategy and content calendar aligned with business objectives"
    },
    {
      step: "03",
      title: "Content Creation & Optimization",
      description: "Produce high-quality, SEO-optimized content that tells your brand story and drives organic growth"
    },
    {
      step: "04",
      title: "Monitor, Measure & Refine",
      description: "Track performance metrics and continuously optimize content strategy for better results"
    }
  ];

  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer: "SEO is a long-term strategy. You'll typically see initial improvements in 3-6 months, with significant results in 6-12 months. However, our content-led approach often delivers faster engagement and brand awareness improvements within the first few months."
    },
    {
      question: "What makes your approach different from traditional SEO?",
      answer: "We combine technical SEO with compelling brand storytelling. While traditional SEO focuses on rankings, our content-led approach builds genuine connections with your audience, leading to better engagement, trust, and ultimately higher conversion rates."
    },
    {
      question: "Do you only focus on Google, or other search engines too?",
      answer: "While Google is our primary focus due to its market dominance, we optimize for all major search engines including Bing and Yahoo. We also consider how content performs on social platforms and in AI search results."
    },
    {
      question: "How do you measure the success of content and SEO efforts?",
      answer: "We track organic traffic growth, keyword rankings, content engagement metrics, brand mention sentiment, lead generation from organic traffic, and ultimately, revenue attribution from SEO efforts."
    },
    {
      question: "Can you help businesses in competitive industries rank well?",
      answer: "Absolutely. Our brand storytelling approach helps businesses differentiate themselves even in crowded markets. We focus on unique value propositions and niche topics where you can establish authority and build trust."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-standard container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground border-0">
              SEO & Content Strategy
            </Badge>
            <h1 className="heading-responsive font-bold mb-6">
              SEO & Content Strategy
            </h1>
            <p className="subheading-responsive text-white/90 mb-8 max-w-2xl mx-auto">
              Combine the power of SEO with authentic brand storytelling. Build organic visibility, establish thought leadership, and create meaningful connections that convert visitors into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                asChild
              >
                <Link to="/contact">
                  Start Growing Organically
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8"
              >
                Get Free SEO Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
              The Content & SEO Challenge Every Business Faces
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Most businesses struggle to balance technical SEO with authentic brand storytelling
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-l-4 border-l-destructive bg-white">
                <div className="flex items-start gap-3">
                  <Search className="h-8 w-8 text-destructive flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl mb-3">Technical SEO Without Soul</CardTitle>
                    <p className="text-muted-foreground">Many businesses focus solely on keywords and rankings, creating content that searches well but fails to connect with real people or build meaningful relationships.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-l-4 border-l-destructive bg-white">
                <div className="flex items-start gap-3">
                  <Clock className="h-8 w-8 text-destructive flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl mb-3">Inconsistent Content Strategy</CardTitle>
                    <p className="text-muted-foreground">Without a unified approach to SEO and brand storytelling, businesses create disjointed content that neither ranks well nor builds brand authority and trust.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution with Image */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Our Content-Led SEO & Brand Storytelling System
              </h2>
              <p className="text-lg text-muted-foreground">
                We merge technical SEO expertise with authentic brand storytelling to create content that ranks well, engages deeply, and converts consistently. Your brand story becomes your competitive advantage.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={seoImage} 
                alt="Professional analyzing SEO data and content strategy" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 card-hover border-2 hover:border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Strategic SEO Foundation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technical optimization and keyword strategy that supports your brand narrative
              </p>
            </Card>
            <Card className="p-8 card-hover border-2 hover:border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Authentic Storytelling
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Compelling brand narratives that resonate with your audience and build trust
              </p>
            </Card>
            <Card className="p-8 card-hover border-2 hover:border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Growth-Driven Results
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Measurable improvements in rankings, traffic, and business outcomes
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              What You Get: Complete Content & SEO Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive strategy that builds organic growth and brand authority
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <Card key={index} className="p-6 card-hover border-2 hover:border-primary/20 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
              Perfect for Businesses Ready to Build Authority
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Designed for companies who want to establish thought leadership and grow organically
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-2 border-primary/20 bg-primary/5">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  SMEs & Startups
                </h3>
                <p className="text-muted-foreground">
                  Companies looking to build brand authority and compete with larger businesses
                </p>
              </Card>
              <Card className="p-8 text-center border-2 border-secondary/20 bg-secondary/5">
                <Briefcase className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Professional Services
                </h3>
                <p className="text-muted-foreground">
                  Consultants, agencies, and service providers who sell expertise and trust
                </p>
              </Card>
              <Card className="p-8 text-center border-2 border-accent/20 bg-accent/5">
                <ShoppingCart className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  E-commerce Brands
                </h3>
                <p className="text-muted-foreground">
                  Online retailers who want to reduce ad dependency and build sustainable growth
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Our Content-Led SEO Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Strategic approach that combines technical optimization with authentic storytelling
              </p>
            </div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start bg-white p-6 rounded-xl border border-border">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Snapshot */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Success Snapshot
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-l-4 border-l-primary bg-white">
              <blockquote className="text-lg italic mb-4 text-foreground leading-relaxed">
                "JXING Tech's content-led SEO approach transformed our online presence. Not only did we see a 300% increase in organic traffic within 8 months, but more importantly, we established ourselves as thought leaders in our industry. The quality of leads improved dramatically because our content pre-qualified prospects."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">JM</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Founder & CEO</div>
                  <div className="text-muted-foreground">Technology Consulting Firm</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 bg-white border border-border">
                  <h3 className="font-semibold mb-3 text-lg text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-standard container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Build Your Brand Authority?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stop competing on price alone. Build trust, authority, and sustainable organic growth with content that tells your story and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
              asChild
            >
              <Link to="/pricing">
                View Pricing & Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8"
              asChild
            >
              <Link to="/contact">Schedule Content Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSEOPage;