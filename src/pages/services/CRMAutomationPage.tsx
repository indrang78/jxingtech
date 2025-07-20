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
  Users, 
  Workflow, 
  Database, 
  Zap, 
  Mail, 
  Phone,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertTriangle,
  Target,
  Quote,
  MessageSquare,
  BarChart3,
  Settings,
  Smartphone
} from "lucide-react";

const CRMAutomationPage = () => {
  const deliverables = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "CRM Setup & Configuration",
      description: "Complete CRM implementation tailored to your sales process and business requirements"
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Sales Pipeline Automation",
      description: "Automated lead nurturing sequences that move prospects through your sales funnel"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Marketing Integration",
      description: "Seamless email automation connected to your CRM for personalized customer communication"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Multi-Channel Communication",
      description: "Integration with WhatsApp, SMS, and other communication channels for comprehensive outreach"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics & Reporting",
      description: "Detailed insights into sales performance, customer behavior, and automation effectiveness"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom Workflow Development",
      description: "Tailored automation workflows that match your unique business processes and requirements"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Business Process Analysis",
      description: "Map your current sales and customer management processes to identify automation opportunities"
    },
    {
      step: "02",
      title: "CRM Implementation",
      description: "Set up and configure your CRM system with custom fields, pipelines, and user permissions"
    },
    {
      step: "03",
      title: "Automation Development",
      description: "Create automated workflows for lead nurturing, follow-ups, and customer communication"
    },
    {
      step: "04",
      title: "Integration & Training",
      description: "Connect all systems and train your team on the new automated processes"
    }
  ];

  const targetClients = [
    "Small to medium-sized enterprises (SMEs) looking to scale their sales and customer management",
    "Startups needing to establish efficient sales processes from the beginning",
    "E-commerce businesses wanting to automate customer lifecycle management",
    "Service-based businesses looking to improve lead nurturing and client retention",
    "Growing companies struggling with manual sales and customer management tasks"
  ];

  const integrations = [
    { 
      name: "WhatsApp Business", 
      description: "Customer service & sales automation", 
      icon: <MessageSquare className="h-5 w-5" />,
      benefit: "Direct customer communication"
    },
    { 
      name: "Email Platforms", 
      description: "Mailchimp, Constant Contact, HubSpot", 
      icon: <Mail className="h-5 w-5" />,
      benefit: "Automated email sequences"
    },
    { 
      name: "SMS & Messaging", 
      description: "Text messaging automation", 
      icon: <Smartphone className="h-5 w-5" />,
      benefit: "Multi-channel outreach"
    },
    { 
      name: "Analytics Tools", 
      description: "Google Analytics, Facebook Pixel", 
      icon: <BarChart3 className="h-5 w-5" />,
      benefit: "Complete tracking visibility"
    }
  ];

  const faqs = [
    {
      question: "Can you integrate WhatsApp with our CRM for customer service?",
      answer: "Absolutely! We specialize in WhatsApp Business API integration with CRM systems. This allows you to manage customer conversations, automate responses, track interaction history, and provide seamless customer service directly from your CRM dashboard. We can set up automated workflows for common inquiries and escalation procedures for complex issues."
    },
    {
      question: "Which CRM platforms do you work with?",
      answer: "We work with all major CRM platforms including HubSpot, Salesforce, Pipedrive, Zoho CRM, Monday.com, and others. We also help you choose the right CRM based on your business size, industry, and specific requirements. Our team is platform-agnostic and focuses on finding the best solution for your needs."
    },
    {
      question: "How long does CRM implementation and automation setup take?",
      answer: "Typical implementation takes 2-6 weeks depending on complexity. Basic CRM setup with standard automation can be completed in 2-3 weeks, while complex custom integrations may take 4-6 weeks. We provide a detailed timeline during the discovery phase and keep you updated throughout the process."
    },
    {
      question: "Will our existing data be migrated to the new CRM?",
      answer: "Yes, we handle complete data migration from your existing systems, spreadsheets, or old CRM. We ensure data integrity, clean up duplicates, and properly format all information for the new system. We also provide backup solutions and testing phases to ensure nothing is lost during the transition."
    },
    {
      question: "What ongoing support do you provide after implementation?",
      answer: "We provide comprehensive ongoing support including system monitoring, automation optimization, user training, troubleshooting, and regular performance reviews. Our support packages include everything from basic maintenance to advanced workflow development as your business grows."
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
                CRM & Automation Integration
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                CRM & Automation Integration: Streamline Sales, Nurture Leads, Close More Deals
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Turn leads into customers with personalized follow-ups and workflows, optimizing your sales process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
                  Automate Your Sales
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
                  Get CRM Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <Workflow className="h-24 w-24 text-white/60" />
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
                The Sales & Customer Management Challenges SMEs Face
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Manual Lead Management</h3>
                    <p className="text-muted-foreground">Tracking leads in spreadsheets and manually following up with prospects leads to missed opportunities and inconsistent communication.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Inconsistent Follow-Up</h3>
                    <p className="text-muted-foreground">Without automated systems, leads slip through the cracks and potential customers don't receive timely, personalized communication.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Disconnected Systems</h3>
                    <p className="text-muted-foreground">Customer data scattered across different platforms makes it impossible to get a complete view of the customer journey and sales performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-8">
              <Quote className="h-8 w-8 text-marian-blue mb-4" />
              <blockquote className="text-lg text-oxford-blue font-medium mb-4 leading-relaxed">
                "We were losing track of leads and customers constantly. Our sales team was spending more time on data entry than actually selling. We knew we needed a system, but didn't know where to start or how to make everything work together."
              </blockquote>
              <cite className="text-muted-foreground">— Common feedback from businesses before automation</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Our Integrated CRM & Automation Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We create a unified system that automates your sales process, nurtures leads intelligently, and gives you complete visibility into your customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Centralized Customer Data
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  All customer information, interactions, and sales history in one place, giving your team complete visibility and context for every interaction.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Intelligent Automation
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Automated workflows that handle follow-ups, lead scoring, and customer communication, ensuring no opportunity is missed while saving hours of manual work.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Personalized Customer Journeys
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Customized communication sequences based on customer behavior, preferences, and stage in the sales cycle for maximum engagement and conversion.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Integration Showcase */}
          <div className="bg-card rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6 text-center">
              Key Integrations We Provide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-ghost-white rounded-lg">
                  <div className="w-10 h-10 bg-marian-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-marian-blue [&>svg]:w-5 [&>svg]:h-5">
                      {integration.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-oxford-blue">{integration.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{integration.description}</p>
                    <div className="text-xs text-azure font-medium">{integration.benefit}</div>
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
              What You Get: Complete CRM & Automation System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to automate your sales process, nurture leads effectively, and scale your customer relationships.
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
                Our CRM and automation integration is perfect for businesses that want to scale their sales and improve customer relationships through intelligent automation.
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
                  <p className="text-muted-foreground">Sales-focused businesses</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Lead Volume</span>
                  <span className="text-muted-foreground">50+ leads/month</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Sales Team</span>
                  <span className="text-muted-foreground">2+ sales people</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Growth Stage</span>
                  <span className="text-muted-foreground">Scaling operations</span>
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
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From analysis to automation, we follow a systematic approach that ensures your CRM system drives real business results.
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
                    "JXING Tech's CRM automation transformed our sales process completely. We went from manually tracking 200+ leads in spreadsheets to having an automated system that nurtures prospects and closes deals while we sleep. Our conversion rate increased by 250% in just 4 months."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ghost-white rounded-full flex items-center justify-center">
                      <span className="text-marian-blue font-semibold">JK</span>
                    </div>
                    <div>
                      <cite className="text-oxford-blue font-semibold not-italic">James Kim</cite>
                      <p className="text-muted-foreground">Sales Director, GrowthTech Solutions</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">250%</div>
                    <div className="text-sm text-muted-foreground">Conversion Increase</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">15hrs</div>
                    <div className="text-sm text-muted-foreground">Weekly Time Saved</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Leads Automated</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">4</div>
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
              Get answers to common questions about our CRM and automation integration services.
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
            Ready to Automate Your Sales Success?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop losing leads and start scaling your sales with intelligent CRM automation. Let's build a system that works as hard as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
              Automate Your Sales
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
              Get CRM Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMAutomationPage;