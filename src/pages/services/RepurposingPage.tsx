import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, RefreshCw, Share2, Target, TrendingUp, Users, Clock, Zap, MessageSquare } from "lucide-react";

const RepurposingPage = () => {
  const deliverables = [
    {
      icon: RefreshCw,
      title: "Multi-Format Content Transformation",
      description: "Convert one piece of content into 5-10 different formats across platforms"
    },
    {
      icon: Share2,
      title: "Cross-Platform Distribution Strategy", 
      description: "Strategic distribution plan optimized for each platform's algorithm and audience"
    },
    {
      icon: Target,
      title: "Content Calendar & Scheduling",
      description: "Automated scheduling system with optimal posting times for maximum engagement"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics & Optimization",
      description: "Track content performance and continuously optimize repurposing strategies"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Content Audit & Selection",
      description: "Analyze your existing content library to identify high-performing pieces for repurposing"
    },
    {
      step: "02", 
      title: "Format Strategy Development",
      description: "Create a comprehensive plan for transforming content across multiple formats and platforms"
    },
    {
      step: "03",
      title: "Content Transformation",
      description: "Professionally adapt content for blogs, social posts, videos, infographics, and more"
    },
    {
      step: "04",
      title: "Distribution & Optimization",
      description: "Deploy content across channels with continuous performance monitoring and refinement"
    }
  ];

  const faqs = [
    {
      question: "How can content repurposing benefit my digital marketing?",
      answer: "Content repurposing maximizes your content ROI by extending reach, improving SEO through consistent publishing, saving time and resources, and reinforcing key messages across multiple touchpoints to increase brand recall."
    },
    {
      question: "What types of content work best for repurposing?",
      answer: "High-performing blog posts, webinars, case studies, research reports, and customer success stories work exceptionally well. We focus on evergreen content that provides ongoing value to your audience."
    },
    {
      question: "How many pieces of content can you create from one original piece?",
      answer: "Typically, we can create 8-12 different content pieces from one original asset. For example, a webinar can become blog posts, social media posts, infographics, email sequences, and short video clips."
    },
    {
      question: "How do you ensure content quality across different formats?",
      answer: "We maintain quality through platform-specific optimization, consistent brand voice and messaging, professional design standards, and thorough review processes before any content goes live."
    },
    {
      question: "Can you repurpose content for specific industries or niches?",
      answer: "Absolutely. We tailor content repurposing strategies to your industry's unique requirements, audience preferences, and platform behaviors to ensure maximum relevance and engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20">
            Content Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Content Repurposing Engine: Maximize Your Message, Multiply Your Reach for Businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform one piece of content into multiple high-performing assets. Save time, increase reach, and maximize your content ROI with our systematic repurposing strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Content Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Content Examples
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Content Challenge Every Business Faces</h2>
            <p className="text-muted-foreground text-lg">Creating enough quality content to maintain consistent online presence is overwhelming</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Clock className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-xl">Time-Consuming Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Businesses struggle to produce enough content for multiple platforms, leading to inconsistent posting and missed opportunities for engagement.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Target className="h-8 w-8 text-destructive mb-2" />
                <CardTitle className="text-xl">Limited Content Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Great content often gets buried after initial publication, with businesses missing the opportunity to maximize its impact across different channels and formats.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Strategic Content Multiplication System</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We transform your high-performing content into multiple formats, extending its lifespan and dramatically increasing your reach without the constant pressure of creating new content from scratch.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Smart Transformation</h3>
              <p className="text-muted-foreground">Convert one piece into 8-12 different formats optimized for various platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Strategic Distribution</h3>
              <p className="text-muted-foreground">Deploy content across channels with platform-specific optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Performance Tracking</h3>
              <p className="text-muted-foreground">Monitor and optimize content performance for maximum ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You Get: Complete Content Ecosystem</h2>
            <p className="text-muted-foreground text-lg">Comprehensive content transformation and distribution system</p>
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
            <h2 className="text-3xl font-bold mb-4">Perfect for Growing Businesses</h2>
            <p className="text-muted-foreground text-lg">Designed specifically for businesses ready to amplify their content strategy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">SMEs & Startups</h3>
              <p className="text-muted-foreground text-sm">Limited resources but need consistent content presence</p>
            </Card>
            <Card className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Content-Heavy Businesses</h3>
              <p className="text-muted-foreground text-sm">Companies with valuable expertise to share across multiple channels</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Growth-Focused Teams</h3>
              <p className="text-muted-foreground text-sm">Organizations wanting to maximize content ROI and reach</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Content Multiplication Process</h2>
            <p className="text-muted-foreground text-lg">Systematic approach to maximize your content's potential</p>
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
              "JXING Tech's content repurposing strategy transformed our marketing efficiency. From one webinar, they created 15 different content pieces that kept our audience engaged for months. Our content reach increased by 400% while our content creation time decreased by 60%."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <span className="font-semibold text-primary">MR</span>
              </div>
              <div>
                <div className="font-semibold">Marketing Director</div>
                <div className="text-muted-foreground">E-commerce Platform</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Multiply Your Content Impact?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your existing content into a powerful, multi-channel marketing engine. Let's maximize your message and multiply your reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Content Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Schedule Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepurposingPage;