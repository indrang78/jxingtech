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
  TrendingUp, 
  Target, 
  BarChart3, 
  DollarSign, 
  Zap, 
  Eye,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertTriangle,
  Users,
  Quote,
  Search,
  MousePointer,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";
import paidAdsImage from "@/assets/service-paid-ads.jpg";

const PaidAdsPage = () => {
  const deliverables = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Campaign Strategy & Planning",
      description: "Comprehensive advertising strategy tailored to your business goals and target audience"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Google Ads Management",
      description: "Search, Display, Shopping, and YouTube ads optimized for maximum ROI and conversions"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Facebook & Instagram Ads",
      description: "Social media advertising across Meta platforms with advanced audience targeting"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Detailed reporting and analysis with actionable insights for campaign optimization"
    },
    {
      icon: <MousePointer className="h-6 w-6" />,
      title: "Landing Page Optimization",
      description: "Conversion-focused landing pages designed to maximize your ad campaign performance"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Continuous Optimization",
      description: "Ongoing A/B testing, bid management, and campaign refinements for better results"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit & Strategy",
      description: "Analyze your current advertising efforts and develop a comprehensive paid media strategy"
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Create and launch targeted campaigns across Google, Facebook, and other relevant platforms"
    },
    {
      step: "03",
      title: "Monitor & Optimize",
      description: "Daily monitoring and weekly optimizations to improve performance and reduce costs"
    },
    {
      step: "04",
      title: "Scale & Expand",
      description: "Identify winning campaigns and scale them while testing new opportunities"
    }
  ];

  const targetClients = [
    "Small to medium-sized enterprises (SMEs) looking to accelerate growth with paid advertising",
    "Startups needing to quickly generate leads and customers in competitive markets",
    "E-commerce businesses wanting to increase online sales and product visibility",
    "Service-based businesses looking to generate qualified leads and consultations",
    "Local businesses aiming to capture more customers in their geographic area"
  ];

  const adPlatforms = [
    { 
      name: "Google Ads", 
      description: "Search, Display, Shopping & YouTube", 
      icon: <Search className="h-5 w-5" />
    },
    { 
      name: "Facebook & Instagram", 
      description: "Social media advertising & retargeting", 
      icon: <Users className="h-5 w-5" />
    },
    { 
      name: "LinkedIn Ads", 
      description: "B2B targeting & lead generation", 
      icon: <Target className="h-5 w-5" />
    },
    { 
      name: "TikTok Ads", 
      description: "Video advertising for younger demographics", 
      icon: <Smartphone className="h-5 w-5" />
    }
  ];

  const faqs = [
    {
      question: "What is the typical Google Ads budget for SMEs?",
      answer: "The optimal ad budget varies based on your industry, competition, and growth goals. We work with businesses at different investment levels to achieve their marketing objectives. Visit our Pricing page for detailed package information and investment ranges tailored to your business stage."
    },
    {
      question: "How quickly can I see results from paid advertising?",
      answer: "You can start seeing initial traffic and leads within 24-48 hours of launching campaigns. However, meaningful optimization and improved performance typically occur after 2-4 weeks as we gather data and refine targeting. Full campaign maturity and optimal ROI usually develop over 2-3 months."
    },
    {
      question: "What's included in your management service?",
      answer: "We manage and optimize your ad campaigns on your behalf. You maintain full control and transparency through shared access to all advertising accounts. Our service includes strategy development, campaign setup, daily monitoring, weekly optimizations, A/B testing, and detailed monthly reporting. Visit our Pricing page for complete package details."
    },
    {
      question: "What's included in your paid ads management fee?",
      answer: "Our management fee includes strategy development, campaign setup, daily monitoring, weekly optimizations, A/B testing, landing page recommendations, monthly reporting, and ongoing account management. Ad spend is separate and goes directly to the platforms."
    },
    {
      question: "Can you help with e-commerce advertising specifically?",
      answer: "Absolutely! We specialize in e-commerce advertising including Google Shopping campaigns, Facebook Dynamic Product Ads, retargeting campaigns, and conversion tracking setup. We'll help optimize your product feeds and create campaigns that drive sales, not just traffic."
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
                Paid Ads Management
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Performance Marketing: Paid Ads Management - Accelerate Your Growth with Targeted Campaigns
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Reach the right people, at the right time, with the right message for targeted ad campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
                  Start Advertising Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-lg">
                  Get Ad Account Audit
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={paidAdsImage} 
                alt="Professional analyzing paid advertising metrics and performance" 
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
                The Paid Advertising Challenges Businesses Face
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Wasted Ad Spend</h3>
                    <p className="text-muted-foreground">Many businesses burn through advertising budgets with poorly targeted campaigns that generate clicks but not customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Complex Platform Management</h3>
                    <p className="text-muted-foreground">Managing multiple advertising platforms (Google, Facebook, LinkedIn) requires specialized knowledge and constant optimization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Poor ROI Tracking</h3>
                    <p className="text-muted-foreground">Without proper tracking and analytics, it's impossible to know which campaigns are profitable and which are draining resources.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-8">
              <Quote className="h-8 w-8 text-marian-blue mb-4" />
              <blockquote className="text-lg text-oxford-blue font-medium mb-4 leading-relaxed">
                "We were spending thousands on Google Ads but had no idea if they were actually bringing in customers. Our cost per click kept going up, but our sales stayed flat. We needed someone who actually understood how to make paid advertising profitable."
              </blockquote>
              <cite className="text-muted-foreground">— Common feedback from businesses before working with us</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Our Performance-Driven Advertising Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We create and manage high-converting advertising campaigns that deliver measurable results and profitable growth for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Precision Targeting
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  We use advanced audience targeting and demographic data to ensure your ads reach the people most likely to become customers, maximizing your ROI.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Data-Driven Optimization
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Every campaign decision is backed by data. We continuously test, measure, and optimize to improve performance and reduce your cost per acquisition.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  ROI-Focused Management
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on metrics that matter to your business - conversions, revenue, and profit - not just clicks and impressions that don't drive growth.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Platform Coverage */}
          <div className="bg-card rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6 text-center">
              Platforms We Master
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adPlatforms.map((platform, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-ghost-white rounded-lg">
                  <div className="w-10 h-10 bg-marian-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-marian-blue [&>svg]:w-5 [&>svg]:h-5">
                      {platform.icon}
                    </div>
                  </div>
                  <div className="flex-1">
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
              What You Get: Complete Paid Advertising Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to run profitable advertising campaigns that drive real business growth and measurable ROI.
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
                Our paid advertising management is perfect for businesses that want to accelerate growth with targeted, profitable advertising campaigns.
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
                  <TrendingUp className="h-6 w-6 text-marian-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-oxford-blue">Investment Range</h3>
                  <p className="text-muted-foreground">Recommended ad spend budgets</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Starter</span>
                  <span className="text-muted-foreground">MYR 3,000-8,000/month</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Growth</span>
                  <span className="text-muted-foreground">MYR 8,000-20,000/month</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Scale</span>
                  <span className="text-muted-foreground">MYR 20,000+/month</span>
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
              Our Proven Advertising Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From strategic planning to campaign scaling, we follow a systematic approach that maximizes your advertising ROI.
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
                    "JXING Tech transformed our advertising from a money pit into our most profitable sales channel. In 6 months, they reduced our cost per acquisition by 65% while increasing our monthly leads by 300%. ROI went from -20% to +400%."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ghost-white rounded-full flex items-center justify-center">
                      <span className="text-marian-blue font-semibold">DL</span>
                    </div>
                    <div>
                      <cite className="text-oxford-blue font-semibold not-italic">David Liu</cite>
                      <p className="text-muted-foreground">CEO, TechSolutions Pro</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">65%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">300%</div>
                    <div className="text-sm text-muted-foreground">Lead Increase</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">400%</div>
                    <div className="text-sm text-muted-foreground">ROI Improvement</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Months to Success</div>
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
              Get answers to common questions about our paid advertising management services.
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
            Ready to Scale with Profitable Advertising?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop wasting money on ads that don't convert. Let's create campaigns that drive real business growth and measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg" asChild>
              <Link to="/pricing">
                View Pricing & Packages
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg" asChild>
              <Link to="/contact">Get Free Ad Account Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaidAdsPage;