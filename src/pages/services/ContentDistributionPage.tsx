import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Route, BarChart3, Target, Users, Zap, MessageSquare, Clock, TrendingUp, MapPin } from "lucide-react";

const ContentDistributionPage = () => {
  const deliverables = [
    {
      icon: Route,
      title: "Customer Journey Mapping",
      description: "Detailed mapping of content touchpoints across your customer's entire journey"
    },
    {
      icon: Target,
      title: "Smart Content Targeting",
      description: "AI-powered content recommendations based on user behavior and journey stage"
    },
    {
      icon: BarChart3,
      title: "Multi-Channel Distribution Strategy", 
      description: "Coordinated content delivery across email, social, web, and paid channels"
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization System",
      description: "Continuous testing and optimization to improve content conversion rates"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Journey Analysis & Mapping",
      description: "Deep dive into your customer journey to identify key content opportunities and gaps"
    },
    {
      step: "02", 
      title: "Content Strategy Development",
      description: "Create targeted content strategies for each journey stage and customer segment"
    },
    {
      step: "03",
      title: "Distribution Channel Setup",
      description: "Configure and optimize content delivery across all relevant channels and platforms"
    },
    {
      step: "04",
      title: "Performance Monitoring & Optimization",
      description: "Track engagement metrics and continuously refine distribution strategies for better results"
    }
  ];

  const faqs = [
    {
      question: "How does this differ from typical digital content marketing?",
      answer: "Traditional content marketing often takes a one-size-fits-all approach. Our journey-driven method delivers personalized content based on where customers are in their buying journey, their behavior patterns, and their specific needs, resulting in higher engagement and conversion rates."
    },
    {
      question: "What channels can you distribute content through?",
      answer: "We distribute content across email marketing, social media platforms, website personalization, paid advertising, SMS, push notifications, and any other relevant channels where your audience is active."
    },
    {
      question: "How do you measure the success of content distribution?",
      answer: "We track engagement rates, conversion metrics, customer journey progression, content attribution, and ROI across all channels. We provide detailed analytics showing how content performs at each journey stage."
    },
    {
      question: "Can this work for B2B and B2C businesses?",
      answer: "Absolutely. We adapt the journey mapping and content strategy to match your specific business model, whether you're targeting other businesses with longer sales cycles or consumers with shorter decision-making processes."
    },
    {
      question: "How quickly can I see results from journey-driven content distribution?",
      answer: "Initial improvements in engagement typically appear within 2-4 weeks, while significant conversion improvements usually manifest within 6-8 weeks as we gather data and optimize the distribution strategy."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20">
            Content Strategy
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Journey-Driven Content Distribution: Smart Content, Smarter Conversions for Your Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Deliver the right content at the right moment in your customer's journey. Increase engagement, accelerate conversions, and build stronger relationships with intelligent content distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Smart Distribution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Journey Examples
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Content Distribution Challenge</h2>
            <p className="text-muted-foreground text-lg">Most businesses broadcast content without considering where customers are in their journey</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <MessageSquare className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-xl">Generic Content Broadcasting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Businesses send the same content to everyone, regardless of their stage in the buying journey, leading to poor engagement and missed conversion opportunities.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Clock className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-xl">Poor Timing & Relevance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Content often reaches prospects at the wrong time with irrelevant messaging, causing them to disengage or seek solutions elsewhere.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Intelligent Content Journey System</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We map your customer journey and deliver personalized content experiences that guide prospects from awareness to advocacy, ensuring every touchpoint adds value and moves them closer to conversion.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Journey Mapping</h3>
              <p className="text-muted-foreground">Identify key touchpoints and content opportunities throughout the customer journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Smart Targeting</h3>
              <p className="text-muted-foreground">Deliver personalized content based on behavior, preferences, and journey stage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Continuous Optimization</h3>
              <p className="text-muted-foreground">Monitor performance and refine distribution strategies for better results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You Get: Complete Journey Orchestration</h2>
            <p className="text-muted-foreground text-lg">Comprehensive content distribution system tailored to your customer journey</p>
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
            <h2 className="text-3xl font-bold mb-4">Perfect for Growth-Focused Businesses</h2>
            <p className="text-muted-foreground text-lg">Designed for businesses ready to optimize their content strategy for maximum impact</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">SMEs & Startups</h3>
              <p className="text-muted-foreground text-sm">Companies looking to maximize content ROI with limited resources</p>
            </Card>
            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">E-commerce Businesses</h3>
              <p className="text-muted-foreground text-sm">Online retailers wanting to guide customers through the buying journey</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">B2B Service Providers</h3>
              <p className="text-muted-foreground text-sm">Professional services firms with complex sales cycles and multiple touchpoints</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey-Driven Process</h2>
            <p className="text-muted-foreground text-lg">Strategic approach to mapping and optimizing your content distribution</p>
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
              "JXING Tech's journey-driven content distribution transformed our customer engagement. By delivering the right content at the right time, we saw a 250% increase in conversion rates and 180% improvement in customer lifetime value. Our content finally works as hard as we do."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <span className="font-semibold text-primary">SC</span>
              </div>
              <div>
                <div className="font-semibold">Growth Marketing Manager</div>
                <div className="text-muted-foreground">SaaS Startup</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop broadcasting generic content. Start delivering personalized experiences that guide customers to conversion. Let's build your journey-driven content system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Smart Distribution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Schedule Strategy Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentDistributionPage;