import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
  ChevronRight
} from "lucide-react";
import caseStudySaas from "@/assets/case-study-saas.jpg";
import caseStudyFnb from "@/assets/case-study-fnb.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";
import caseStudyManufacturing from "@/assets/case-study-manufacturing.jpg";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyTechStartup from "@/assets/case-study-tech-startup.jpg";

const CaseStudiesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const caseStudies = [
    {
      id: 1,
      clientName: "TechStart Solutions",
      industry: "B2B SaaS",
      category: "Website",
      challenge: "Outdated website with 78% bounce rate and less than 1% conversion rate.",
      keyMetric: "285% Traffic Increase",
      image: caseStudySaas,
      icon: Globe,
      results: [
        { metric: "Traffic", value: "+285%" },
        { metric: "Bounce Rate", value: "-52%" },
        { metric: "Conversions", value: "+320%" }
      ]
    },
    {
      id: 2,
      clientName: "Leading F&B Brand",
      industry: "Food & Beverage",
      category: "SEO",
      challenge: "Low online visibility and declining foot traffic due to increased competition.",
      keyMetric: "3x Organic Traffic",
      image: caseStudyFnb,
      icon: Search,
      results: [
        { metric: "Organic Traffic", value: "+300%" },
        { metric: "Local Rankings", value: "+85%" },
        { metric: "Store Visits", value: "+40%" }
      ]
    },
    {
      id: 3,
      clientName: "Regional Healthcare Provider",
      industry: "Healthcare",
      category: "Social Media",
      challenge: "Limited social media presence and difficulty reaching younger demographics.",
      keyMetric: "500% Social Growth",
      image: caseStudyHealthcare,
      icon: Share2,
      results: [
        { metric: "Social Following", value: "+500%" },
        { metric: "Appointments", value: "+250%" },
        { metric: "Brand Awareness", value: "+90%" }
      ]
    },
    {
      id: 4,
      clientName: "Manufacturing SME",
      industry: "Manufacturing",
      category: "Paid Ads",
      challenge: "High cost per acquisition and poor ROAS from existing advertising campaigns.",
      keyMetric: "180% ROAS Improvement",
      image: caseStudyManufacturing,
      icon: BarChart3,
      results: [
        { metric: "Cost Per Lead", value: "-65%" },
        { metric: "ROAS", value: "+180%" },
        { metric: "Inquiries", value: "+45%" }
      ]
    },
    {
      id: 5,
      clientName: "Growing E-commerce Startup",
      industry: "E-commerce",
      category: "Automation",
      challenge: "Manual processes causing delays in customer service and inventory management.",
      keyMetric: "75% Task Reduction",
      image: caseStudyEcommerce,
      icon: Bot,
      results: [
        { metric: "Response Time", value: "-50%" },
        { metric: "Manual Tasks", value: "-75%" },
        { metric: "Satisfaction", value: "+100%" }
      ]
    },
    {
      id: 6,
      clientName: "Tech Startup",
      industry: "Technology",
      category: "Automation",
      challenge: "Scaling challenges with customer onboarding and support processes.",
      keyMetric: "300% Faster Onboarding",
      image: caseStudyTechStartup,
      icon: Workflow,
      results: [
        { metric: "Onboarding", value: "+300%" },
        { metric: "Support Tickets", value: "-80%" },
        { metric: "Retention", value: "+120%" }
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
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-standard container-padding relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Real Results, Real Growth
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses like yours achieve transformational digital growth.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Proven Results Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our data-driven approach consistently delivers exceptional outcomes for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {overallStats.map((stat, index) => (
              <Card key={index} className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-y border-border">
        <div className="container-standard container-padding">
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
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
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
      <section className="py-20 bg-white">
        <div className="container-standard container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredCaseStudies.map((study) => (
              <Link 
                key={study.id} 
                to={`/case-studies/${study.id}`}
                className="block h-full"
              >
                <Card className="card-hover overflow-hidden h-full flex flex-col">
                  <div className="aspect-video bg-gray-200 overflow-hidden relative">
                    <img 
                      src={study.image} 
                      alt={study.clientName}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {study.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-foreground mb-2 leading-tight">
                          {study.clientName}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {study.industry}
                        </Badge>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 ml-3">
                        <study.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Key Results
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {study.results.map((result, index) => (
                          <div key={index} className="text-center">
                            <div className="text-xl font-bold text-primary mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg mb-4">
                      <p className="text-2xl font-bold text-primary text-center">
                        {study.keyMetric}
                      </p>
                    </div>

                    <div className="flex items-center justify-center text-primary font-semibold mt-auto">
                      View Case Study <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-standard container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Write Your Success Story With Us
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the businesses that have transformed their digital presence with JXING Tech. Let's discuss how we can help you achieve similar results.
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
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;