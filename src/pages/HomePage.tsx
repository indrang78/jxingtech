import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import {
  DollarSign,
  Puzzle,
  TrendingDown,
  Users,
  Globe,
  Search,
  Share2,
  Target,
  Settings,
  Zap,
  FileText,
  BarChart3,
  Workflow,
  CheckCircle2,
  Award,
  ArrowRight,
  Lightbulb,
  Rocket,
  RefreshCw,
  TrendingUp,
  MessageSquare,
  Bot,
} from "lucide-react";
import heroTeamImage from "@/assets/hero-team-collaboration.jpg";

export default function HomePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"book-a-free-consult"});
      cal("floatingButton", {"calLink":"jxingtech/book-a-free-consult","config":{"layout":"month_view"}});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const painPoints = [
    { icon: DollarSign, text: "High upfront agency costs" },
    { icon: Puzzle, text: "Disconnected tools & platforms" },
    { icon: TrendingDown, text: "No clear ROI tracking" },
    { icon: Users, text: "Lack of ongoing support" },
  ];

  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      benefit: "Professional websites that drive conversions and growth",
      link: "/services/website-design",
    },
    {
      icon: Search,
      title: "SEO & Content Strategy",
      benefit: "Rank higher and attract qualified organic traffic",
      link: "/services/content-seo",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      benefit: "Build consistent brand presence across platforms",
      link: "/services/social-media",
    },
    {
      icon: Target,
      title: "Paid Ads Management",
      benefit: "Maximize ROI from targeted ad campaigns",
      link: "/services/paid-ads",
    },
    {
      icon: Settings,
      title: "CRM & Automation",
      benefit: "Streamline operations and nurture leads effectively",
      link: "/services/crm-automation",
    },
    {
      icon: Bot,
      title: "AI Integration & Smart Agents",
      benefit: "Leverage AI for competitive advantage and efficiency",
      link: "/services/ai-integration",
    },
  ];

  const features = [
    {
      icon: CheckCircle2,
      title: "Subscription-Based Model",
      text: "Predictable monthly pricing with no surprise costs. Scale up or down as your business needs change.",
    },
    {
      icon: BarChart3,
      title: "Unified Dashboard",
      text: "All your marketing metrics, automation workflows, and website analytics in one central location.",
    },
    {
      icon: Award,
      title: "Transparent Reporting",
      text: "Clear, honest reporting on what's working and what's not, with actionable insights every month.",
    },
  ];

  const metrics = [
    { value: "285%", label: "Avg Traffic Lift" },
    { value: "96%", label: "Client Retention Rate" },
    { value: "220%", label: "ROI Improvement" },
    { value: "15+", label: "Years Experience" },
  ];

  const caseStudies = [
    {
      image: "/placeholder.svg",
      title: "E-Commerce Brand Triples Revenue",
      result: "3x revenue growth in 12 months",
      link: "/case-studies",
    },
    {
      image: "/placeholder.svg",
      title: "B2B SaaS Achieves 400% Lead Growth",
      result: "400% increase in qualified leads",
      link: "/case-studies",
    },
    {
      image: "/placeholder.svg",
      title: "Local Service Business Dominates Market",
      result: "85% market share in 18 months",
      link: "/case-studies",
    },
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discover",
      description: "Deep dive into your business, goals, and challenges",
    },
    {
      icon: Target,
      title: "Strategy",
      description: "Create a custom roadmap for sustainable growth",
    },
    {
      icon: Rocket,
      title: "Build",
      description: "Implement systems, content, and automation",
    },
    {
      icon: BarChart3,
      title: "Optimize",
      description: "Continuously test and improve performance",
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Scale what works and expand your success",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url(${heroTeamImage})` }}
        />
        
        <div className="container max-w-7xl mx-auto px-6 relative z-20 text-center py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Digital Growth, Made Simple
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90">
            We help small & medium businesses scale through unified web, marketing & automation systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold rounded-md px-8 py-6 text-lg"
            >
              Book Free Strategy Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary rounded-md px-8 py-6 text-lg font-semibold"
            >
              Download Growth Playbook
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-muted">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-md shadow-sm">
                <point.icon className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              How We Help Your Business Grow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed to drive measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow rounded-md">
                <service.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.benefit}</p>
                <Link
                  to={service.link}
                  className="text-secondary hover:text-primary font-medium text-sm inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JXING Tech */}
      <section className="py-20 bg-muted">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose JXING Tech
            </h2>
            <p className="text-xl text-muted-foreground">
              A better way to partner for growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-md shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics / Proof Bar */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="text-5xl md:text-6xl font-bold mb-2 text-accent">
                  {metric.value}
                </div>
                <div className="text-lg text-white/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results for real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow rounded-md">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{study.title}</h3>
                  <p className="text-secondary font-semibold mb-4">{study.result}</p>
                  <Link
                    to={study.link}
                    className="text-secondary hover:text-primary font-medium inline-flex items-center gap-1"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-secondary mb-4">
                    <step.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-secondary/30 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Grow Together
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Ready to transform your digital presence and drive real business growth?
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-semibold rounded-md px-10 py-6 text-lg"
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
