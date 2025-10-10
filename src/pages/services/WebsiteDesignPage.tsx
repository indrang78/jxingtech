import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  Smartphone, 
  Target, 
  RefreshCw,
  BarChart3,
  Layers,
  Layout,
  FileCode,
  PenTool,
  Settings,
  Calendar,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import webDesignImage from "@/assets/service-web-design.jpg";

const WebsiteDesignPage = () => {
  const challenges = [
    "Website becomes outdated fast",
    "Poor conversion design",
    "Hard to scale or update without dev help",
    "Slow loading times affecting SEO",
    "Not mobile-responsive",
    "Disconnected from marketing tools"
  ];

  const solutions = [
    {
      icon: Smartphone,
      title: "Responsive, Mobile-First Layout",
      description: "Optimized for all devices with flawless mobile experience that converts visitors into customers."
    },
    {
      icon: Target,
      title: "Conversion Optimization Built In",
      description: "Strategic CTAs, user journey mapping, and psychology-driven design to maximize conversions."
    },
    {
      icon: Layers,
      title: "Modular Architecture for Updates",
      description: "Easy to update and scale without breaking existing features or requiring full rebuilds."
    },
    {
      icon: BarChart3,
      title: "A/B Testing & Iteration",
      description: "Continuous testing and refinement based on real user data and behavior analytics."
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Lightning-fast load times with optimized code, images, and hosting infrastructure."
    },
    {
      icon: RefreshCw,
      title: "SEO & Technical Foundation",
      description: "Built-in SEO best practices, structured data, and clean code for search visibility."
    }
  ];

  const deliverables = [
    { icon: Layout, item: "Complete site structure & sitemap planning" },
    { icon: PenTool, item: "Custom design mockups & brand alignment" },
    { icon: FileCode, item: "Full development with clean, scalable code" },
    { icon: Settings, item: "CMS integration for easy content updates" },
    { icon: BarChart3, item: "Analytics & tracking setup (GA4, Search Console)" },
    { icon: Calendar, item: "Post-launch optimization & monthly update cycles" },
    { icon: RefreshCw, item: "Ongoing A/B testing & conversion improvements" },
    { icon: CheckCircle2, item: "Unlimited revision cycles during development" }
  ];

  const caseStudies = [
    {
      client: "Local Retailer",
      result: "Increased online conversions by 285% within 3 months through redesign and optimization."
    },
    {
      client: "Professional Services Firm",
      result: "Reduced bounce rate by 52% and doubled contact form submissions with mobile-first redesign."
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
              Web Design & Development
            </Badge>
            <h1 className="heading-responsive font-bold mb-6">
              Growth-Driven Web Design & Development
            </h1>
            <p className="subheading-responsive text-white/90 mb-8 max-w-2xl mx-auto">
              Websites that adapt, convert, and evolve as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                asChild
              >
                <Link to="/contact">Get Web Design Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
              The Challenges You Face
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Common website problems that hold SMEs back from growth
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-destructive bg-white">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                    <p className="text-foreground font-medium">{challenge}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section with Image */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                What We Do / Our Solution
              </h2>
              <p className="text-lg text-muted-foreground">
                Modern, conversion-focused websites built for growth and continuous improvement
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={webDesignImage} 
                alt="Professional web developer working on website design" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 card-hover border-2 hover:border-primary/20">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              What You'll Get
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete deliverables from strategy to ongoing optimization
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <deliverable.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-foreground font-medium pt-2">{deliverable.item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
              Why We Do It Differently
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-2 border-primary/20 bg-primary/5">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Subscription Model
                </h3>
                <p className="text-muted-foreground">
                  No huge upfront costs. Pay monthly and scale as you grow.
                </p>
              </Card>
              <Card className="p-8 text-center border-2 border-secondary/20 bg-secondary/5">
                <RefreshCw className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Ongoing Optimization
                </h3>
                <p className="text-muted-foreground">
                  Continuous A/B testing and improvements based on real data.
                </p>
              </Card>
              <Card className="p-8 text-center border-2 border-accent/20 bg-accent/5">
                <Layers className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Integrated Systems
                </h3>
                <p className="text-muted-foreground">
                  Connected to your CRM, tracking, and marketing tools.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Example Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Real outcomes for businesses like yours
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 border-l-4 border-l-primary bg-white">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {study.client}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {study.result}
                </p>
                <Button variant="link" className="text-primary p-0 h-auto" asChild>
                  <Link to="/case-studies">
                    View Full Case Study <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-standard container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Website?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build a website that grows with your business and drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
              asChild
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8"
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesignPage;