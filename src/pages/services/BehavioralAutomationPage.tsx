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
  Target, 
  GitBranch, 
  Brain, 
  Zap, 
  BarChart3, 
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertTriangle,
  Eye,
  Quote,
  MousePointer,
  Heart,
  ShoppingCart,
  Map
} from "lucide-react";

const BehavioralAutomationPage = () => {
  const deliverables = [
    {
      icon: <Map className="h-6 w-6" />,
      title: "Customer Journey Mapping",
      description: "Visual mapping of every touchpoint in your customer's journey from awareness to advocacy"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Behavioral Trigger Setup",
      description: "Intelligent automation that responds to customer actions, preferences, and engagement patterns"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Content Delivery",
      description: "Dynamic content that adapts based on customer behavior, interests, and purchase history"
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Multi-Path Automation Flows",
      description: "Complex branching workflows that guide customers through personalized experiences"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics & Insights",
      description: "Deep behavioral analytics that reveal customer patterns and optimization opportunities"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-Time Optimization",
      description: "Continuous learning system that improves automation performance based on customer responses"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Journey Analysis",
      description: "Map your current customer touchpoints and identify key behavioral triggers and decision points"
    },
    {
      step: "02",
      title: "Automation Design",
      description: "Create intelligent workflows that respond to customer behavior and guide them toward conversion"
    },
    {
      step: "03",
      title: "Implementation & Testing",
      description: "Deploy behavioral triggers and test automation flows to ensure optimal customer experiences"
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Continuously refine automation based on performance data and customer feedback"
    }
  ];

  const targetClients = [
    "E-commerce businesses wanting to increase customer lifetime value and reduce cart abandonment",
    "SaaS companies looking to improve user onboarding and reduce churn rates",
    "Service-based businesses aiming to nurture leads through complex sales cycles",
    "Subscription businesses focused on improving retention and reducing cancellations",
    "SMEs with multiple customer touchpoints seeking to create cohesive experiences"
  ];

  const behaviorTriggers = [
    { 
      name: "Purchase Behavior", 
      description: "Cart abandonment, repeat purchases, browsing patterns", 
      icon: <ShoppingCart className="h-5 w-5" />,
      example: "Abandoned cart recovery sequences"
    },
    { 
      name: "Engagement Patterns", 
      description: "Email opens, website visits, content consumption", 
      icon: <Eye className="h-5 w-5" />,
      example: "Re-engagement campaigns for inactive users"
    },
    { 
      name: "User Journey Stage", 
      description: "Awareness, consideration, decision, advocacy", 
      icon: <Map className="h-5 w-5" />,
      example: "Stage-specific content delivery"
    },
    { 
      name: "Preference Signals", 
      description: "Product interests, communication preferences", 
      icon: <Heart className="h-5 w-5" />,
      example: "Personalized product recommendations"
    }
  ];

  const faqs = [
    {
      question: "How can behavioral automation improve e-commerce sales?",
      answer: "Behavioral automation dramatically improves e-commerce sales by creating personalized experiences that guide customers toward purchase. For example, cart abandonment sequences can recover 15-25% of lost sales, while behavioral product recommendations can increase average order value by 20-30%. We also implement browse abandonment flows, post-purchase upselling, and loyalty programs that respond to customer behavior patterns."
    },
    {
      question: "What types of customer behaviors can you track and automate around?",
      answer: "We track and automate around numerous behaviors including website browsing patterns, email engagement, purchase history, cart abandonment, content consumption, social media interactions, support ticket patterns, and subscription usage. Each behavior triggers specific automation sequences designed to enhance the customer experience and drive desired outcomes."
    },
    {
      question: "How is this different from basic email marketing automation?",
      answer: "While basic email automation sends messages based on simple triggers like time delays, behavioral automation creates intelligent, multi-channel experiences based on real customer actions and preferences. Our system considers the customer's entire journey, their engagement history, and behavioral patterns to deliver the right message through the right channel at the perfect moment."
    },
    {
      question: "How long does it take to see results from behavioral automation?",
      answer: "Initial results can be seen within 2-4 weeks as basic automation flows begin working. However, the real power emerges after 2-3 months when enough behavioral data has been collected to create highly personalized experiences. Most clients see 20-40% improvements in conversion rates and 30-50% increases in customer lifetime value within 6 months."
    },
    {
      question: "Can you integrate behavioral automation with our existing tools?",
      answer: "Absolutely! We integrate with all major platforms including Shopify, WooCommerce, HubSpot, Salesforce, Klaviyo, Mailchimp, and many others. Our goal is to create a unified system that leverages your existing tools while adding intelligent behavioral automation capabilities that enhance your customer experience."
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
                Behavioral Marketing Automation
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Behavioral Marketing Automation: Intelligent Journeys, Loyal Customers
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Map journeys that speak to every customer's unique path, enhancing customer engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Start Smart Automation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all">
                  Map Your Customer Journey
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <GitBranch className="h-24 w-24 text-white/60" />
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
                The Customer Experience Challenges Businesses Face
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Generic One-Size-Fits-All Marketing</h3>
                    <p className="text-muted-foreground">Sending the same message to all customers regardless of their behavior, preferences, or stage in the customer journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Poor Customer Journey Understanding</h3>
                    <p className="text-muted-foreground">Lack of visibility into how customers actually interact with your brand across different touchpoints and channels.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Low Customer Lifetime Value</h3>
                    <p className="text-muted-foreground">Customers make one purchase and never return because there's no intelligent system to nurture the relationship and encourage repeat business.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-8">
              <Quote className="h-8 w-8 text-marian-blue mb-4" />
              <blockquote className="text-lg text-oxford-blue font-medium mb-4 leading-relaxed">
                "We were treating all our customers the same way, sending generic emails and hoping for the best. We had no idea why some customers bought repeatedly while others disappeared after their first purchase. We needed a smarter way to understand and respond to customer behavior."
              </blockquote>
              <cite className="text-muted-foreground">— Common feedback from businesses before implementing behavioral automation</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Our Intelligent Behavioral Automation Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We create intelligent automation systems that understand your customers' behavior and deliver personalized experiences that drive engagement, loyalty, and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Intelligent Behavior Tracking
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Our system learns from every customer interaction, building detailed behavioral profiles that enable highly personalized marketing automation.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Dynamic Journey Mapping
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  We create flexible customer journey maps that adapt in real-time based on customer behavior, ensuring every interaction is relevant and timely.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Precision Personalization
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Every message, offer, and experience is tailored to the individual customer's behavior, preferences, and current stage in their journey.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Behavior Triggers Showcase */}
          <div className="bg-card rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6 text-center">
              Key Behavioral Triggers We Automate
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {behaviorTriggers.map((trigger, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-ghost-white rounded-lg">
                  <div className="w-10 h-10 bg-marian-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-marian-blue [&>svg]:w-5 [&>svg]:h-5">
                      {trigger.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-oxford-blue">{trigger.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{trigger.description}</p>
                    <div className="text-xs text-azure font-medium">{trigger.example}</div>
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
              What You Get: Complete Behavioral Automation System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to create intelligent, personalized customer experiences that adapt to individual behavior and drive exceptional results.
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
                Our behavioral marketing automation is perfect for businesses that want to create deeper customer relationships and maximize customer lifetime value through intelligent, personalized experiences.
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
                  <Target className="h-6 w-6 text-marian-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-oxford-blue">Ideal Customer Profile</h3>
                  <p className="text-muted-foreground">Customer-centric businesses</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Customer Base</span>
                  <span className="text-muted-foreground">500+ customers</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Touchpoints</span>
                  <span className="text-muted-foreground">Multiple channels</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Focus</span>
                  <span className="text-muted-foreground">Customer retention</span>
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
              Our Proven Behavioral Automation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From journey mapping to intelligent automation, we follow a systematic approach that creates personalized experiences that drive customer loyalty and revenue.
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
                    "JXING Tech's behavioral automation transformed our e-commerce business. Cart abandonment recovery alone increased our revenue by 28%, but the real magic happened with repeat customers. Our customer lifetime value increased by 180% as the system learned to deliver exactly what each customer wanted."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ghost-white rounded-full flex items-center justify-center">
                      <span className="text-marian-blue font-semibold">AL</span>
                    </div>
                    <div>
                      <cite className="text-oxford-blue font-semibold not-italic">Amanda Lee</cite>
                      <p className="text-muted-foreground">CEO, StyleCraft Boutique</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">180%</div>
                    <div className="text-sm text-muted-foreground">Customer LTV Increase</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">28%</div>
                    <div className="text-sm text-muted-foreground">Revenue Boost</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">65%</div>
                    <div className="text-sm text-muted-foreground">Repeat Purchase Rate</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">5</div>
                    <div className="text-sm text-muted-foreground">Months to Full ROI</div>
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
              Get answers to common questions about our behavioral marketing automation services.
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
            Ready to Create Intelligent Customer Journeys?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop treating all customers the same. Let's build behavioral automation that understands each customer and delivers personalized experiences that drive loyalty and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
              Start Smart Automation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all">
              Map Your Customer Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BehavioralAutomationPage;