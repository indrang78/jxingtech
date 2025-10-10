import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Lightbulb, 
  ArrowRight, 
  Globe,
  Zap,
  Heart,
  Shield,
  TrendingUp,
  Handshake,
  CheckCircle,
  Eye,
  Award
} from "lucide-react";

const AboutPage = () => {
  const differentiators = [
    {
      icon: <Handshake className="h-8 w-8 text-secondary" />,
      title: "Subscription Alignment",
      description: "We grow when you grow. Our subscription model means we're invested in your long-term success, not just one-off projects."
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Full Integration",
      description: "No more juggling multiple vendors. We bring web, marketing, automation, and AI together in one cohesive system."
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Pragmatic Approach",
      description: "We focus on what actually works. No unnecessary complexity—just practical solutions that deliver measurable results."
    },
    {
      icon: <Eye className="h-8 w-8 text-secondary" />,
      title: "Full Transparency",
      description: "Clear pricing. Clear timelines. Clear communication. You'll always know where you stand and what's happening."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "We start by understanding your business, goals, and challenges through in-depth conversations."
    },
    {
      number: "02",
      title: "Build",
      description: "We create your digital foundation—website, systems, and workflows tailored to your needs."
    },
    {
      number: "03",
      title: "Optimize",
      description: "We continuously test, refine, and improve based on real data and user behavior."
    },
    {
      number: "04",
      title: "Grow",
      description: "We scale what works, double down on winning strategies, and evolve with your business."
    }
  ];

  const metrics = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Active Clients" },
    { value: "85%", label: "Client Retention" },
    { value: "3x", label: "Average ROI Growth" }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-shimmer opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About JXING Tech
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your growth partner in digital transformation
          </p>
        </div>
      </section>

      {/* MD's Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">From the Managing Director</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why I Started JXING Tech
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm Indran Gegathesa, founder and MD of JXING Tech. Let me share why this company exists and what drives us every day.
            </p>
            <p>
              Before JXING Tech, I spent years at Heineken, managing digital platforms and seeing firsthand how challenging it is to coordinate digital efforts—even in a large multinational. If a company with those resources struggles, imagine what it's like for SMEs with limited budgets and fragmented support.
            </p>
            <p>
              That realization stuck with me. I saw too many small businesses getting stuck with beautiful websites that didn't convert, marketing campaigns without clear ROI, or tech tools that didn't talk to each other. They deserved better—a partner who actually cared about their growth, not just deliverables.
            </p>
            <p>
              JXING Tech started during the COVID-19 lockdown as JKING Tech, initially built to sell vegetables online. When the world reopened, we pivoted into web development and digital marketing. After my corporate experience, I knew we needed to do this properly—to build a business that treats SMEs with the same strategic thinking and integrated approach that big companies get.
            </p>
            <p>
              We rebranded to JXING Tech Sdn. Bhd. with a clear mission: help SMEs grow with transparency, integration, and real results. No fluff, no jargon—just honest work and tangible outcomes.
            </p>
            <p className="font-semibold text-foreground">
              We're not here to be just another agency. We're here to be your long-term growth partner.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're different because we've built our business around what SMEs actually need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="card-hover text-center h-full border-2 hover:border-secondary transition-colors">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach & Philosophy */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Approach & Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine lean methods, data-driven insights, and creative thinking to build partnerships that actually work
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-muted/50 to-background border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">How We Work With You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Data + Creativity</h4>
                  <p className="text-sm text-muted-foreground">
                    We let the numbers guide us, but we're not robots. Great marketing needs both insight and imagination.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                    <Handshake className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">True Partnership</h4>
                  <p className="text-sm text-muted-foreground">
                    You're not just a client. We collaborate, listen, and adapt as your business evolves.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Lean Execution</h4>
                  <p className="text-sm text-muted-foreground">
                    We move fast, test quickly, and iterate based on what actually works—no bloat, no waste.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Metrics & Milestones */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Growth in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="card-hover text-center border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These numbers tell part of the story, but what matters most is the impact—businesses that are growing, 
              teams that are more efficient, and entrepreneurs who feel supported in their journey.
            </p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Talk Growth
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're just starting out or ready to scale, I'd love to hear about your business and explore how we can help. No pressure, no sales pitch—just an honest conversation about what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all">
                Book a Call with the MD
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-base transition-all">
                View Our Plans
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/70 mt-6">
            — Indran Gegathesa, Managing Director
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;