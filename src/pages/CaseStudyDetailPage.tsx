import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Target,
  CheckCircle2,
  Quote,
  ChevronRight,
  BarChart3,
  Zap,
  Award
} from "lucide-react";

const CaseStudyDetailPage = () => {
  const { id } = useParams();

  // Mock case study data - in production, this would come from Supabase
  const caseStudy = {
    id: 1,
    client: "TechStart Solutions",
    industry: "B2B SaaS",
    service: "Growth-Driven Web Design",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    keyMetric: "285% Traffic Increase",
    duration: "6 months",
    tags: ["Web Design", "SEO", "CRO"],
    
    overview: "TechStart Solutions, a B2B SaaS company, approached us with an outdated website that was losing them potential customers daily. Their bounce rate was 78%, and they were converting less than 1% of visitors.",
    
    challenge: {
      title: "The Challenge",
      description: "TechStart's website was built 5 years ago and hadn't been updated since. They faced several critical issues:",
      points: [
        "Extremely high bounce rate of 78% due to poor UX and slow load times",
        "Mobile experience was virtually unusable with no responsive design",
        "Zero SEO optimization resulting in minimal organic traffic",
        "Conversion rate below 1% with unclear value proposition",
        "Outdated design that didn't reflect their innovative product",
        "No integration with their CRM or marketing automation tools"
      ]
    },
    
    solution: {
      title: "Our Approach",
      description: "We implemented a comprehensive growth-driven redesign strategy:",
      strategies: [
        {
          icon: Target,
          title: "User Research & Strategy",
          description: "Conducted in-depth user research, competitor analysis, and developed a conversion-focused sitemap and user journey."
        },
        {
          icon: Zap,
          title: "Performance-First Design",
          description: "Built a lightning-fast, mobile-first website optimized for speed with Core Web Vitals scoring in the green across all metrics."
        },
        {
          icon: BarChart3,
          title: "SEO Foundation",
          description: "Implemented comprehensive technical SEO, schema markup, and content structure optimized for target keywords."
        },
        {
          icon: CheckCircle2,
          title: "Conversion Optimization",
          description: "Strategically placed CTAs, simplified contact forms, and A/B tested key pages to maximize conversions."
        }
      ]
    },
    
    results: {
      title: "The Results",
      description: "Within 6 months of launching the new website, TechStart saw transformational growth:",
      metrics: [
        { icon: TrendingUp, value: "285%", label: "Increase in Organic Traffic", color: "text-primary" },
        { icon: Users, value: "52%", label: "Reduction in Bounce Rate", color: "text-secondary" },
        { icon: Target, value: "4.2%", label: "Conversion Rate (from 0.8%)", color: "text-accent" },
        { icon: DollarSign, value: "320%", label: "Increase in Monthly Leads", color: "text-primary" },
        { icon: Zap, value: "1.2s", label: "Page Load Time (from 5.8s)", color: "text-secondary" },
        { icon: Award, value: "#1", label: "Ranking for Key Terms", color: "text-accent" }
      ],
      additionalPoints: [
        "Achieved 95+ Google PageSpeed score on both mobile and desktop",
        "Successfully integrated with HubSpot CRM for seamless lead management",
        "Reduced customer acquisition cost by 45% through improved conversion rates",
        "Mobile traffic increased by 412% due to responsive design",
        "Average session duration increased from 45 seconds to 3 minutes 20 seconds"
      ]
    },
    
    quote: {
      text: "Working with JXING Tech was transformational for our business. Not only did they build us a beautiful website, but they completely changed how we think about digital growth. The results speak for themselves - we've tripled our inbound leads and significantly reduced our customer acquisition costs.",
      author: "Michael Chen",
      position: "CEO, TechStart Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    
    timeline: [
      { phase: "Discovery & Research", duration: "2 weeks", description: "User research, competitor analysis, strategy development" },
      { phase: "Design & Prototyping", duration: "3 weeks", description: "Wireframes, design mockups, user testing" },
      { phase: "Development", duration: "4 weeks", description: "Full website build, CMS integration, testing" },
      { phase: "Launch & Optimization", duration: "2 weeks", description: "Launch, monitoring, initial A/B tests" },
      { phase: "Ongoing Support", duration: "Ongoing", description: "Monthly updates, optimization, performance monitoring" }
    ]
  };

  const relatedCases = [
    {
      id: 2,
      title: "E-Commerce Brand 3x Revenue Growth",
      industry: "E-Commerce",
      metric: "300% Revenue Increase",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Local Service Business Market Domination",
      industry: "Local Services",
      metric: "85% Market Share",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-border">
        <div className="container-standard container-padding py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/case-studies">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={caseStudy.heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90" />
        
        <div className="container-standard container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground border-0">
              {caseStudy.service}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {caseStudy.client}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-semibold">
              {caseStudy.keyMetric}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{caseStudy.duration}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>{caseStudy.industry}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {caseStudy.overview}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {caseStudy.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              {caseStudy.challenge.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {caseStudy.challenge.description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.challenge.points.map((point, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-destructive bg-white">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <p className="text-foreground">{point}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                {caseStudy.solution.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {caseStudy.solution.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.solution.strategies.map((strategy, index) => (
                <Card key={index} className="p-8 card-hover border-2 hover:border-primary/20">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <strategy.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {strategy.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {strategy.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-standard container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                {caseStudy.results.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {caseStudy.results.description}
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {caseStudy.results.metrics.map((metric, index) => (
                <Card key={index} className="p-8 text-center bg-white border-2">
                  <metric.icon className={`w-12 h-12 mx-auto mb-4 ${metric.color}`} />
                  <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </p>
                </Card>
              ))}
            </div>

            {/* Additional Results */}
            <Card className="p-8 bg-white">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Additional Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.additionalPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Quote */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
              <Quote className="w-12 h-12 text-primary mb-6" />
              <blockquote className="text-2xl text-foreground font-medium mb-8 leading-relaxed">
                "{caseStudy.quote.text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={caseStudy.quote.image} 
                  alt={caseStudy.quote.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{caseStudy.quote.author}</div>
                  <div className="text-muted-foreground">{caseStudy.quote.position}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
              Project Timeline
            </h2>
            <div className="space-y-6">
              {caseStudy.timeline.map((phase, index) => (
                <Card key={index} className="p-6 bg-white border-l-4 border-l-primary">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/3">
                      <h3 className="font-semibold text-foreground mb-1">{phase.phase}</h3>
                      <p className="text-sm text-muted-foreground">{phase.duration}</p>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
              More Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedCases.map((relatedCase) => (
                <Link 
                  key={relatedCase.id} 
                  to={`/case-studies/${relatedCase.id}`}
                  className="block"
                >
                  <Card className="card-hover overflow-hidden h-full">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img 
                        src={relatedCase.image} 
                        alt={relatedCase.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="bg-secondary text-secondary-foreground mb-3">
                        {relatedCase.industry}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                        {relatedCase.title}
                      </h3>
                      <p className="text-2xl font-bold text-primary mb-4">
                        {relatedCase.metric}
                      </p>
                      <div className="flex items-center text-primary font-semibold">
                        View Case Study <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-standard container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's achieve similar results for your business. Schedule a free consultation to discuss your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
              asChild
            >
              <Link to="/contact">Schedule a Call</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8"
              asChild
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;