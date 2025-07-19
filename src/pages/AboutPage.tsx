import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  ArrowRight, 
  Globe,
  Zap,
  Heart
} from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-azure" />,
      title: "Innovation First",
      description: "We stay ahead of technological trends to provide cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: <Heart className="h-8 w-8 text-azure" />,
      title: "Human-Centered",
      description: "Technology should serve people, not the other way around. We design solutions that enhance human capability and experience."
    },
    {
      icon: <Target className="h-8 w-8 text-azure" />,
      title: "Results-Driven",
      description: "Every solution we implement is designed to deliver measurable business outcomes and sustainable growth."
    },
    {
      icon: <Globe className="h-8 w-8 text-azure" />,
      title: "Accessible Technology",
      description: "We believe powerful technology should be accessible to businesses of all sizes, not just enterprise corporations."
    }
  ];

  const stats = [
    { number: "500+", label: "SMEs Transformed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "300%", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "15+ years in digital transformation, former tech lead at Fortune 500 companies.",
      expertise: ["Strategy", "AI Implementation", "Business Development"]
    },
    {
      name: "Sarah Rodriguez", 
      role: "CTO",
      bio: "Full-stack developer and automation expert with a passion for elegant solutions.",
      expertise: ["System Architecture", "Automation", "Integration"]
    },
    {
      name: "Michael Thompson",
      role: "Head of Marketing",
      bio: "Growth marketing specialist who has scaled 50+ SMEs through digital channels.",
      expertise: ["Growth Marketing", "SEO", "Analytics"]
    },
    {
      name: "Emily Johnson",
      role: "Customer Success Manager", 
      bio: "Dedicated to ensuring every client achieves their business objectives and beyond.",
      expertise: ["Client Relations", "Project Management", "Training"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-[600px] mx-auto">
            About JXING Tech Group
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-[600px] mx-auto leading-relaxed">
            We're on a mission to democratize powerful technology solutions for small and 
            mid-sized businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
                Our Mission
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                We believe that every business, regardless of size, deserves access to the same 
                powerful technology solutions that have traditionally been reserved for large corporations.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Our mission is to simplify complex technology through intelligent automation, 
                AI-powered solutions, and human expertise - making it accessible, affordable, 
                and effective for SMEs worldwide.
              </p>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Founded 2021
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Globe className="h-4 w-4 mr-2" />
                  Remote-First
                </Badge>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-xanthous" />
                    <span>Our Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-azure mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate experts dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              JXING Tech Group was founded in 2021 with a simple observation: while large 
              corporations had access to sophisticated automation and AI solutions, small and 
              mid-sized businesses were left behind with outdated tools and manual processes.
            </p>
            <p>
              Our founder, Alex Chen, experienced this firsthand while consulting for various 
              businesses. SMEs had the same needs as large corporations - they wanted to automate 
              repetitive tasks, improve customer experiences, and scale efficiently - but they 
              lacked the resources and technical expertise to implement enterprise-level solutions.
            </p>
            <p>
              That's when we decided to bridge this gap. We created JXING Tech Group to make 
              powerful technology accessible to every business, regardless of size or technical 
              expertise. Today, we're proud to have helped over 500 SMEs transform their 
              operations and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can help transform your business with the right technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Schedule a Call
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline-azure" size="xl">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;