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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20">
            SEO & Content Strategy
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            SEO & Content Strategy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Combine the power of SEO with authentic brand storytelling. Build organic visibility, establish thought leadership, and create meaningful connections that convert visitors into loyal customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Growing Organically
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Get Free SEO Audit
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Content & SEO Challenge Every Business Faces</h2>
            <p className="text-muted-foreground text-lg">Most businesses struggle to balance technical SEO with authentic brand storytelling</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Search className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-xl">Technical SEO Without Soul</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Many businesses focus solely on keywords and rankings, creating content that searches well but fails to connect with real people or build meaningful relationships.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Clock className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-xl">Inconsistent Content Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Without a unified approach to SEO and brand storytelling, businesses create disjointed content that neither ranks well nor builds brand authority and trust.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution with Image */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img 
                src={seoImage} 
                alt="Professional analyzing SEO data and content strategy" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Content-Led SEO & Brand Storytelling System</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We merge technical SEO expertise with authentic brand storytelling to create content that ranks well, engages deeply, and converts consistently. Your brand story becomes your competitive advantage.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Strategic SEO Foundation</h3>
              <p className="text-muted-foreground">Technical optimization and keyword strategy that supports your brand narrative</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Authentic Storytelling</h3>
              <p className="text-muted-foreground">Compelling brand narratives that resonate with your audience and build trust</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Growth-Driven Results</h3>
              <p className="text-muted-foreground">Measurable improvements in rankings, traffic, and business outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You Get: Complete Content & SEO Ecosystem</h2>
            <p className="text-muted-foreground text-lg">Comprehensive strategy that builds organic growth and brand authority</p>
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
            <h2 className="text-3xl font-bold mb-4">Perfect for Businesses Ready to Build Authority</h2>
            <p className="text-muted-foreground text-lg">Designed for companies who want to establish thought leadership and grow organically</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">SMEs & Startups</h3>
              <p className="text-muted-foreground text-sm">Companies looking to build brand authority and compete with larger businesses</p>
            </Card>
            <Card className="p-6 text-center">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Professional Services</h3>
              <p className="text-muted-foreground text-sm">Consultants, agencies, and service providers who sell expertise and trust</p>
            </Card>
            <Card className="p-6 text-center">
              <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">E-commerce Brands</h3>
              <p className="text-muted-foreground text-sm">Online retailers who want to reduce ad dependency and build sustainable growth</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Content-Led SEO Process</h2>
            <p className="text-muted-foreground text-lg">Strategic approach that combines technical optimization with authentic storytelling</p>
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
              "JXING Tech's content-led SEO approach transformed our online presence. Not only did we see a 300% increase in organic traffic within 8 months, but more importantly, we established ourselves as thought leaders in our industry. The quality of leads improved dramatically because our content pre-qualified prospects."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <span className="font-semibold text-primary">JM</span>
              </div>
              <div>
                <div className="font-semibold">Founder & CEO</div>
                <div className="text-muted-foreground">Technology Consulting Firm</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Brand Authority?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop competing on price alone. Build trust, authority, and sustainable organic growth with content that tells your story and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/pricing">
                View Pricing & Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <Link to="/contact">Schedule Content Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSEOPage;