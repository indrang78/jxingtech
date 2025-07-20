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
  const values = [
    {
      icon: <Eye className="h-8 w-8 text-azure" />,
      title: "Transparency",
      description: "Honest conversations and clear communication. No hidden fees or tech jargon in our digital solutions."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-azure" />,
      title: "Growth-Driven",
      description: "Everything we do is tied to measurable outcomes. We build with your business goals in mind."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-azure" />,
      title: "Innovation",
      description: "From AI tools to modern tech stacks, we stay ahead so your SME can too."
    },
    {
      icon: <Handshake className="h-8 w-8 text-azure" />,
      title: "Partnership",
      description: "We don't see you as just a client. We're here to work alongside you, through the ups and downs."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-azure" />,
      title: "Accountability",
      description: "If we say we'll deliver, we do. It's that simple."
    },
    {
      icon: <Shield className="h-8 w-8 text-azure" />,
      title: "Trust",
      description: "We know trust is earned. That's why we build it through consistency, not just promises, for our clients."
    }
  ];

  const team = [
    {
      name: "Indran Gegathesa",
      role: "Managing Director",
      bio: "Visionary leader driving digital transformation for SMEs across multiple industries.",
      expertise: ["Strategy", "Business Development", "Digital Transformation"]
    },
    {
      name: "Evelyn", 
      role: "Head of Marketing",
      bio: "Marketing strategist with expertise in growth marketing and content-driven campaigns.",
      expertise: ["Growth Marketing", "Content Strategy", "Campaign Management"]
    },
    {
      name: "Bagas",
      role: "Head of Tech",
      bio: "Technical architect specializing in AI integration, automation, and scalable web solutions.",
      expertise: ["AI Integration", "Automation", "Full-Stack Development"]
    }
  ];

  const whyWorkWithUs = [
    "We bring strategy and execution together for measurable digital results.",
    "We use AI and automation to get things done better and faster, saving you time and budget.",
    "We build long-term relationships. Most of our clients stick with us because we show up, listen, and stay involved.",
    "We keep things simple. You get one dashboard to track your project, your performance, and your progress.",
    "Our full range of services includes web development, SEO, social media, paid ads, automation, and AI integrations."
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-[600px] mx-auto">
            About JXING Tech: Your Digital Growth Partner
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-[600px] mx-auto leading-relaxed">
            Built for SMEs. Powered by Passion. Fueled by Results.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Our Mission & Vision
              </h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-marian-blue mb-4">Mission</h3>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  We help small and mid-sized businesses grow with affordable, high-performing digital solutions. 
                  By combining automation, AI, and human expertise, we make complex tech simple and scalable for businesses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-marian-blue mb-4">Vision</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We aim to become a trusted subscription-based digital agency, fostering long-term partnerships 
                  that evolve as your business grows.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-6 w-6 text-xanthous" />
                    <span>Our Approach</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-azure rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Growth-driven strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-azure rounded-full"></div>
                    <span className="text-sm text-muted-foreground">AI & automation integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-azure rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Human expertise & support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-azure rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Long-term partnerships</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              JXING Tech started with a simple observation: most SMEs aren't getting the support they need to succeed online. 
              Traditional agencies often prioritize design over real results. Freelancers can be great, but they're not always 
              consistent. And even in large companies, digital knowledge is often scattered or missing.
            </p>
            <p>
              I saw this firsthand during my time at Heineken. Despite the company's size and resources, managing digital 
              platforms was still a challenge. That made me realize how much harder it must be for smaller businesses with 
              fewer tools and tighter budgets.
            </p>
            <p>
              JXING Tech actually began as JKING Tech during the COVID-19 lockdown, originally built to sell vegetables online. 
              As the world reopened, we pivoted into web development and digital marketing services. After my time at Heineken, 
              I knew we needed to take this further—to make these services accessible, reliable, and focused on outcomes for the market.
            </p>
            <p>
              That's when we rebranded and registered as JXING Tech Sdn. Bhd. Today, we help businesses grow online not just 
              with websites, but with full systems that support real, lasting growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values as a Leading Digital Agency
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet the JXING Tech Digital Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of strategists, developers, marketers, and creatives who care deeply about what we do. 
              We bring a mix of experience in digital strategy, AI integration, SEO, marketing automation, and content creation. 
              More than that, we bring energy and commitment to every project we take on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-azure to-robin-egg-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-azure font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Plus our wider team of designers, developers, writers, and support staff. We're not just service providers. 
              We're the team you can rely on to help move things forward for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why JXING Tech is the Right Digital Partner for Your SME
            </h2>
          </div>
          
          <div className="space-y-6">
            {whyWorkWithUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-azure mt-1 flex-shrink-0" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              You can explore all 10 of our services on the{" "}
              <Link to="/services" className="text-azure hover:underline font-medium">
                Services page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What's Next for Your Digital Growth Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's talk about what your business needs right now. Whether you're just starting out or ready to scale, 
            we're here to help SMEs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Choose Your Plan
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline-azure" size="xl">
              Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;