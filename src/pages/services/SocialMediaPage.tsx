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
  Share2, 
  Users, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Target,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Heart,
  Eye,
  Quote,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import socialMediaImage from "@/assets/service-social-media.jpg";

const SocialMediaPage = () => {
  const deliverables = [
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Multi-Platform Content Creation",
      description: "Custom content tailored for Facebook, Instagram, LinkedIn, Twitter, TikTok, and YouTube"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Strategic Content Calendar",
      description: "Monthly content planning with optimal posting times and platform-specific strategies"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Management",
      description: "Active engagement with your audience, responding to comments, messages, and building relationships"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Detailed monthly reports with insights, growth metrics, and strategy recommendations"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Audience Growth Strategy",
      description: "Organic growth tactics to increase followers, engagement, and brand awareness"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Brand Voice Development",
      description: "Consistent messaging and tone across all platforms that reflects your brand personality"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Brand & Audience Analysis",
      description: "We audit your current presence and analyze your target audience across all platforms"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a comprehensive social media strategy with platform-specific approaches"
    },
    {
      step: "03",
      title: "Content Creation & Scheduling",
      description: "Develop and schedule engaging content optimized for each platform's best practices"
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuously track performance and optimize strategy based on real-time data"
    }
  ];

  const targetClients = [
    "Small to medium-sized enterprises (SMEs) looking to build a strong social media presence",
    "Startups needing to establish brand awareness and connect with their target audience",
    "E-commerce businesses wanting to drive traffic and sales through social media",
    "Service-based businesses looking to showcase expertise and attract new clients",
    "Established companies needing to modernize their social media strategy"
  ];

  const platforms = [
    { name: "Facebook", description: "Build community and drive engagement", icon: <Users className="h-5 w-5" /> },
    { name: "Instagram", description: "Visual storytelling and brand showcase", icon: <Eye className="h-5 w-5" /> },
    { name: "LinkedIn", description: "B2B networking and thought leadership", icon: <Target className="h-5 w-5" /> },
    { name: "Twitter", description: "Real-time engagement and news sharing", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "TikTok", description: "Creative video content for younger audiences", icon: <Heart className="h-5 w-5" /> },
    { name: "YouTube", description: "Long-form video content and tutorials", icon: <BarChart3 className="h-5 w-5" /> }
  ];

  const faqs = [
    {
      question: "Which social media platforms are most effective for SMEs?",
      answer: "The most effective platforms depend on your target audience and business type. For B2B companies, LinkedIn and Twitter are often most valuable. For B2C businesses, Facebook, Instagram, and TikTok typically drive the best results. We analyze your specific audience to recommend the optimal platform mix for your business."
    },
    {
      question: "How often should we post on social media?",
      answer: "Posting frequency varies by platform: Facebook (3-5 times/week), Instagram (1-2 times/day), LinkedIn (1-2 times/week), Twitter (3-5 times/day), and TikTok (3-5 times/week). We create a custom posting schedule based on your audience's activity patterns and platform best practices."
    },
    {
      question: "Do you create all the content or do we need to provide it?",
      answer: "We handle all content creation including graphics, captions, videos, and stories. We work with you to understand your brand voice and may request product photos or company updates, but the creative development and execution is our responsibility."
    },
    {
      question: "How do you measure social media ROI?",
      answer: "We track multiple metrics including follower growth, engagement rates, website traffic from social media, lead generation, and conversions. Our monthly reports show how social media activity directly contributes to your business goals and revenue."
    },
    {
      question: "Can you manage social media advertising as well?",
      answer: "Yes! While this service focuses on organic social media management, we can integrate paid social advertising to amplify your reach and drive specific business outcomes. This would be part of our Performance Marketing service."
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
                Social Media Management
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Omni-Channel Social Media Management: Engage Your Audience, Everywhere
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Stay visible and relevant across all major platforms, consistently, for your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
                  Start Growing Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
                  View Social Strategy
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={socialMediaImage} 
                alt="Social media content creation team at work" 
                className="w-full h-auto object-cover"
              />
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
                The Social Media Challenges SMEs Face
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Time-Consuming Content Creation</h3>
                    <p className="text-muted-foreground">Creating consistent, engaging content for multiple platforms takes hours that busy business owners don't have.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Low Engagement & Reach</h3>
                    <p className="text-muted-foreground">Many businesses struggle to get their content seen and fail to build meaningful connections with their audience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Inconsistent Brand Presence</h3>
                    <p className="text-muted-foreground">Without a clear strategy, social media efforts become sporadic and fail to reinforce brand messaging effectively.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-8">
              <Quote className="h-8 w-8 text-marian-blue mb-4" />
              <blockquote className="text-lg text-oxford-blue font-medium mb-4 leading-relaxed">
                "We knew we needed to be on social media, but every time we posted something, it felt like we were shouting into the void. Our content wasn't getting engagement, and we didn't know what our audience actually wanted to see."
              </blockquote>
              <cite className="text-muted-foreground">— Common feedback from our SME clients</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Our Omni-Channel Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We create a cohesive social media presence that amplifies your brand voice, engages your audience, and drives real business results across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Strategic Platform Selection
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  We identify the platforms where your audience is most active and create tailored strategies for each, ensuring maximum impact from your social media investment.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Consistent Content Creation
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Our team creates engaging, on-brand content daily, ensuring your audience always has fresh, valuable content to interact with across all your social channels.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Data-Driven Optimization
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  We continuously analyze performance metrics and audience behavior to refine our strategy, ensuring your social media presence grows stronger over time.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Platform Coverage */}
          <div className="bg-card rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6 text-center">
              Platforms We Master
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-ghost-white rounded-lg">
                  <div className="w-10 h-10 bg-marian-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-marian-blue [&>svg]:w-5 [&>svg]:h-5">
                      {platform.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-oxford-blue">{platform.name}</h4>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables & Features */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              What You Get: Complete Social Media Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to build a powerful social media presence that engages your audience and drives business growth.
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
                Our social media management service is perfect for businesses that want to build meaningful connections with their audience and drive growth through social channels.
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
                  <h3 className="text-lg font-semibold text-oxford-blue">Ideal Client Profile</h3>
                  <p className="text-muted-foreground">Growth-focused businesses</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Business Stage</span>
                  <span className="text-muted-foreground">Startup to Enterprise</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Target Audience</span>
                  <span className="text-muted-foreground">B2B or B2C</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Goals</span>
                  <span className="text-muted-foreground">Brand awareness & growth</span>
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
              Our Proven Social Media Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From strategy development to ongoing optimization, we follow a systematic approach that delivers consistent results.
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
                    "JXING Tech transformed our social media from a time-consuming chore into our most powerful marketing channel. In 8 months, we've seen a 400% increase in engagement and generated over RM50,000 in direct sales from social media leads."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ghost-white rounded-full flex items-center justify-center">
                      <span className="text-marian-blue font-semibold">MR</span>
                    </div>
                    <div>
                      <cite className="text-oxford-blue font-semibold not-italic">Maria Rodriguez</cite>
                      <p className="text-muted-foreground">Founder, Eco Beauty Co.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">400%</div>
                    <div className="text-sm text-muted-foreground">Engagement Increase</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">25K</div>
                    <div className="text-sm text-muted-foreground">New Followers</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">RM50K</div>
                    <div className="text-sm text-muted-foreground">Revenue Generated</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">8</div>
                    <div className="text-sm text-muted-foreground">Months to Results</div>
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
              Get answers to common questions about our social media management services.
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
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's create a social media presence that truly connects with your audience and drives business growth. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg" asChild>
              <Link to="/pricing">
                View Pricing & Packages
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg" asChild>
              <Link to="/contact">Get Strategy Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;