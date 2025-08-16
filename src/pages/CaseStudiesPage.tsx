import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Search,
  Share2,
  BarChart3,
  Workflow,
  Bot,
  Filter,
  Quote,
  Clock
} from "lucide-react";

const CaseStudiesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const caseStudies = [
    {
      id: 1,
      clientName: "Leading F&B Brand",
      industry: "Food & Beverage",
      category: "SEO",
      challenge: "Low online visibility and declining foot traffic due to increased competition in the local market.",
      solution: "Implemented comprehensive SEO strategy with local optimization, content marketing, and social media integration.",
      outcome: "3x increase in organic traffic, 85% improvement in local search rankings, 40% boost in store visits",
      quote: "JXING Tech transformed our digital presence completely. We went from being invisible online to dominating local search results.",
      clientRole: "Marketing Director",
      icon: Search,
      results: [
        { metric: "Organic Traffic", value: "300%" },
        { metric: "Local Rankings", value: "85%" },
        { metric: "Store Visits", value: "40%" }
      ]
    },
    {
      id: 2,
      clientName: "Growing E-commerce Startup",
      industry: "E-commerce",
      category: "Automation",
      challenge: "Manual processes causing delays in customer service and inventory management, leading to poor customer experience.",
      solution: "Deployed AI-powered customer service automation and integrated CRM system with inventory management.",
      outcome: "50% reduction in response time, 75% decrease in manual tasks, doubled customer satisfaction scores",
      quote: "The automation solutions saved us countless hours and dramatically improved our customer experience. Our team can now focus on growth instead of repetitive tasks.",
      clientRole: "Operations Manager",
      icon: Bot,
      results: [
        { metric: "Response Time", value: "-50%" },
        { metric: "Manual Tasks", value: "-75%" },
        { metric: "Customer Satisfaction", value: "100%" }
      ]
    },
    {
      id: 3,
      clientName: "Professional Services Firm",
      industry: "Professional Services",
      category: "Website",
      challenge: "Outdated website with poor mobile experience resulting in high bounce rates and lost leads.",
      solution: "Complete website redesign with mobile-first approach, lead capture optimization, and performance enhancement.",
      outcome: "Doubled conversion rates, 60% reduction in bounce rate, 4x increase in qualified leads",
      quote: "Our new website is not just beautiful—it's a lead generation machine. The results speak for themselves.",
      clientRole: "Managing Partner",
      icon: Globe,
      results: [
        { metric: "Conversion Rate", value: "200%" },
        { metric: "Bounce Rate", value: "-60%" },
        { metric: "Qualified Leads", value: "400%" }
      ]
    },
    {
      id: 4,
      clientName: "Regional Healthcare Provider",
      industry: "Healthcare",
      category: "Social Media",
      challenge: "Limited social media presence and difficulty reaching younger demographics for health awareness campaigns.",
      solution: "Comprehensive social media strategy with targeted content, community management, and paid advertising campaigns.",
      outcome: "500% growth in social following, 250% increase in appointment bookings, 90% improvement in brand awareness",
      quote: "JXING Tech helped us connect with our community in ways we never thought possible. Our patient engagement has never been higher.",
      clientRole: "Marketing Coordinator",
      icon: Share2,
      results: [
        { metric: "Social Following", value: "500%" },
        { metric: "Appointment Bookings", value: "250%" },
        { metric: "Brand Awareness", value: "90%" }
      ]
    },
    {
      id: 5,
      clientName: "Manufacturing SME",
      industry: "Manufacturing",
      category: "Paid Ads",
      challenge: "High cost per acquisition and poor ROAS from existing advertising campaigns across multiple platforms.",
      solution: "Restructured paid advertising strategy with advanced targeting, A/B testing, and performance optimization.",
      outcome: "65% reduction in cost per lead, 180% improvement in ROAS, 45% increase in qualified inquiries",
      quote: "We were hemorrhaging money on ads before JXING Tech. Now every dollar spent brings measurable returns.",
      clientRole: "Sales Director",
      icon: BarChart3,
      results: [
        { metric: "Cost Per Lead", value: "-65%" },
        { metric: "ROAS", value: "180%" },
        { metric: "Qualified Inquiries", value: "45%" }
      ]
    },
    {
      id: 6,
      clientName: "Tech Startup",
      industry: "Technology",
      category: "Automation",
      challenge: "Scaling challenges with customer onboarding and support processes limiting growth potential.",
      solution: "Implemented behavioral automation, customer journey mapping, and AI-powered support systems.",
      outcome: "300% faster onboarding process, 80% reduction in support tickets, 120% increase in customer retention",
      quote: "The automation systems JXING Tech built allowed us to scale without adding headcount. It's been transformational.",
      clientRole: "CEO",
      icon: Workflow,
      results: [
        { metric: "Onboarding Speed", value: "300%" },
        { metric: "Support Tickets", value: "-80%" },
        { metric: "Customer Retention", value: "120%" }
      ]
    }
  ];

  const overallStats = [
    { label: "Average Traffic Increase", value: "285%", icon: TrendingUp },
    { label: "Client Retention Rate", value: "96%", icon: Users },
    { label: "Average ROI Improvement", value: "220%", icon: BarChart3 },
    { label: "Projects Completed", value: "150+", icon: Workflow }
  ];

  const filterCategories = ["All", "Website", "SEO", "Social Media", "Paid Ads", "Automation"];

  const filteredCaseStudies = selectedFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Real Results, Real Growth: Our Client Success Stories
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            See how JXING Tech has helped businesses like yours achieve their digital goals and scale with confidence.
          </p>
        </div>
      </section>

      {/* Overall Impact Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our data-driven approach consistently delivers exceptional outcomes for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {overallStats.map((stat, index) => (
              <Card key={index} className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] text-center p-6">
                <div className="w-12 h-12 bg-azure/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-azure" />
                </div>
                <div className="text-3xl font-bold text-oxford-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by service:</span>
            </div>
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category)}
                className={`rounded-full ${
                  selectedFilter === category 
                    ? "bg-azure text-white hover:bg-azure/90" 
                    : "hover:bg-muted"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200 overflow-hidden">
                <CardHeader className="p-8 border-b border-muted/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-oxford-blue mb-2">
                        {study.clientName}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-azure/10 text-azure border-azure/20">
                        {study.industry}
                      </Badge>
                    </div>
                    <div className="w-12 h-12 bg-azure/10 rounded-xl flex items-center justify-center">
                      <study.icon className="h-6 w-6 text-azure" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-oxford-blue mb-2 uppercase tracking-wide">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-oxford-blue mb-2 uppercase tracking-wide">
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-oxford-blue mb-3 uppercase tracking-wide">
                      Key Results
                    </h4>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {study.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-azure mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {study.outcome}
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Quote className="h-5 w-5 text-azure flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">
                          "{study.quote}"
                        </p>
                        <p className="text-xs text-azure font-medium">
                          — {study.clientRole}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                    <Clock className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join the businesses that have transformed their digital presence with JXING Tech. Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
              Schedule a Free Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline-white" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;