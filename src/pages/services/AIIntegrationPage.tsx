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
  Bot, 
  Brain, 
  Cpu, 
  Zap, 
  Workflow, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertTriangle,
  TrendingUp,
  Quote,
  Search,
  BarChart3,
  Settings,
  Headphones,
  FileText,
  Shield,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const AIIntegrationPage = () => {
  const deliverables = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Custom AI Chatbots & Virtual Assistants",
      description: "Intelligent chatbots that handle customer inquiries, lead qualification, and support tasks 24/7"
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Process Automation with AI",
      description: "Automated workflows that use AI to make decisions, process data, and streamline operations"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Predictive Analytics Integration",
      description: "AI-powered insights that predict customer behavior, sales trends, and business opportunities"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Natural Language Processing",
      description: "AI systems that understand and respond to human language for better customer interactions"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Analysis & Reporting AI",
      description: "Automated data analysis that generates insights and reports without manual intervention"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom AI Agent Development",
      description: "Specialized AI agents built for your specific business processes and requirements"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "AI Readiness Assessment",
      description: "Evaluate your current systems and identify the best opportunities for AI implementation"
    },
    {
      step: "02",
      title: "Custom AI Development",
      description: "Build and train AI models specifically designed for your business needs and data"
    },
    {
      step: "03",
      title: "Integration & Testing",
      description: "Seamlessly integrate AI solutions with your existing systems and thoroughly test performance"
    },
    {
      step: "04",
      title: "Optimization & Scaling",
      description: "Continuously improve AI performance and expand capabilities as your business grows"
    }
  ];

  const targetClients = [
    "Small to medium-sized enterprises (SMEs) looking to modernize operations with AI technology",
    "Startups wanting to build AI-powered features into their products and services",
    "E-commerce businesses seeking to automate customer service and personalize experiences",
    "Service-based businesses looking to streamline operations and improve customer interactions",
    "Growing companies ready to leverage AI for competitive advantage and operational efficiency"
  ];

  const aiUseCases = [
    { 
      name: "Customer Service Automation", 
      description: "24/7 AI chatbots for support and inquiries", 
      icon: <Headphones className="h-5 w-5" />,
      benefit: "Reduce support costs by 60%"
    },
    { 
      name: "Lead Qualification", 
      description: "AI agents that qualify and score leads", 
      icon: <Target className="h-5 w-5" />,
      benefit: "Increase conversion rates by 40%"
    },
    { 
      name: "Content Generation", 
      description: "AI-powered content creation and optimization", 
      icon: <FileText className="h-5 w-5" />,
      benefit: "Save 15+ hours per week"
    },
    { 
      name: "Predictive Analytics", 
      description: "Forecast sales and customer behavior", 
      icon: <TrendingUp className="h-5 w-5" />,
      benefit: "Improve decision accuracy by 50%"
    }
  ];

  const faqs = [
    {
      question: "What are common AI automation use cases for SMEs?",
      answer: "Common AI use cases for SMEs include customer service chatbots (handling 80% of routine inquiries), automated lead qualification and scoring, inventory management and forecasting, email marketing personalization, document processing and data entry, appointment scheduling, social media content generation, and sales pipeline optimization. We help identify which use cases will deliver the highest ROI for your specific business."
    },
    {
      question: "How much does custom AI development cost for small businesses?",
      answer: "AI implementation costs vary based on complexity and scope. Simple chatbots start around $5,000-10,000, while comprehensive AI automation systems range from $15,000-50,000. We offer flexible payment plans and focus on solutions that deliver measurable ROI within 6-12 months. Most SMEs see cost savings that justify the investment through reduced labor costs and increased efficiency."
    },
    {
      question: "Do we need technical expertise to use AI solutions?",
      answer: "No technical expertise required! We design AI solutions to be user-friendly and provide comprehensive training for your team. Our AI systems integrate seamlessly with your existing tools and workflows. We also offer ongoing support and maintenance to ensure your AI solutions continue performing optimally as your business evolves."
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer: "Implementation timelines vary by complexity: Simple chatbots can be deployed in 2-4 weeks, while comprehensive AI automation systems typically take 6-12 weeks. We provide phased implementation so you can start seeing benefits early in the process. Complex custom AI agents may take 3-6 months for full development and optimization."
    },
    {
      question: "Will AI replace our employees or help them be more productive?",
      answer: "Our AI solutions are designed to augment human capabilities, not replace employees. AI handles repetitive tasks, data processing, and routine inquiries, freeing your team to focus on high-value activities like strategy, creativity, and complex problem-solving. Most clients see increased employee satisfaction as mundane tasks are automated."
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
                AI Integration & Agent Development
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                AI Integration, Automation & Agent Development: Future-Proof Your Business with Smart Tech
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Bring AI into your business where it matters most, driving innovation for SMEs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
                  Start AI Transformation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
                  Get AI Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <Brain className="h-24 w-24 text-white/60" />
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
                The AI Implementation Challenges SMEs Face
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Manual, Time-Consuming Processes</h3>
                    <p className="text-muted-foreground">Repetitive tasks like data entry, customer inquiries, and report generation consume valuable time that could be spent on growth activities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Limited AI Expertise & Resources</h3>
                    <p className="text-muted-foreground">Most SMEs lack the technical knowledge and budget to implement AI solutions, missing opportunities for automation and competitive advantage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">Difficulty Scaling Operations</h3>
                    <p className="text-muted-foreground">Without intelligent automation, businesses struggle to handle growth efficiently, leading to increased costs and reduced service quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-8">
              <Quote className="h-8 w-8 text-marian-blue mb-4" />
              <blockquote className="text-lg text-oxford-blue font-medium mb-4 leading-relaxed">
                "We knew AI could help our business, but we didn't know where to start or how to implement it without breaking the bank. Our team was spending hours on tasks that we felt could be automated, but we lacked the expertise to make it happen."
              </blockquote>
              <cite className="text-muted-foreground">— Common feedback from SMEs before AI implementation</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Our Practical AI Implementation Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We make AI accessible and practical for SMEs by developing custom solutions that solve real business problems and deliver measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Business-Focused AI Development
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  We build AI solutions that solve specific business problems, not generic tools. Every solution is designed to deliver clear ROI and improve operations.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  SME-Friendly Implementation
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI solutions are designed for businesses without technical teams. We handle everything from development to training and ongoing support.
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-ghost-white rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-marian-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-oxford-blue mb-3">
                  Scalable AI Architecture
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI solutions grow with your business, adapting to increased volume and complexity while maintaining performance and reliability.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* AI Use Cases Showcase */}
          <div className="bg-card rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6 text-center">
              Popular AI Use Cases for SMEs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiUseCases.map((useCase, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-ghost-white rounded-lg">
                  <div className="w-10 h-10 bg-marian-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-marian-blue [&>svg]:w-5 [&>svg]:h-5">
                      {useCase.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-oxford-blue">{useCase.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{useCase.description}</p>
                    <div className="text-xs text-azure font-medium">{useCase.benefit}</div>
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
              What You Get: Complete AI Integration Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to leverage AI technology for improved efficiency, better customer experiences, and competitive advantage.
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
                Our AI integration service is perfect for forward-thinking businesses that want to leverage artificial intelligence to automate processes and gain competitive advantage.
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
                  <Bot className="h-6 w-6 text-marian-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-oxford-blue">AI Readiness Indicators</h3>
                  <p className="text-muted-foreground">Signs your business is ready for AI</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Repetitive Tasks</span>
                  <span className="text-muted-foreground">High volume daily</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-ghost-white rounded-lg">
                  <span className="text-oxford-blue font-medium">Data Volume</span>
                  <span className="text-muted-foreground">Growing complexity</span>
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
              Our Proven AI Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From assessment to deployment, we follow a systematic approach that ensures your AI solutions deliver real business value and measurable results.
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
                    "JXING Tech's AI chatbot transformed our customer service. It now handles 75% of inquiries automatically, reduced response time from hours to seconds, and our customer satisfaction scores increased by 40%. The ROI was evident within 3 months."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ghost-white rounded-full flex items-center justify-center">
                      <span className="text-marian-blue font-semibold">RT</span>
                    </div>
                    <div>
                      <cite className="text-oxford-blue font-semibold not-italic">Robert Thompson</cite>
                      <p className="text-muted-foreground">Operations Director, ServicePro Solutions</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">75%</div>
                    <div className="text-sm text-muted-foreground">Automated Inquiries</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Increase</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">20hrs</div>
                    <div className="text-sm text-muted-foreground">Weekly Time Saved</div>
                  </div>
                  <div className="text-center p-4 bg-ghost-white rounded-xl">
                    <div className="text-3xl font-bold text-marian-blue mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Months to ROI</div>
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
              Get answers to common questions about our AI integration and automation services.
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
            Ready to Future-Proof Your Business with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop letting manual processes hold you back. Let's implement AI solutions that automate tasks, improve efficiency, and give you a competitive edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg" asChild>
              <Link to="/pricing">
                View Pricing & Packages
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg" asChild>
              <Link to="/contact">Get AI Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIIntegrationPage;