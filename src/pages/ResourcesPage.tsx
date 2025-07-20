import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight,
  BookOpen,
  Download,
  Clock,
  User,
  HelpCircle,
  FileText,
  TrendingUp,
  Search,
  Share2,
  BarChart3,
  Workflow,
  Bot,
  CheckCircle
} from "lucide-react";

const ResourcesPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential SEO Strategies for SMEs in 2024",
      description: "Discover the latest SEO techniques that are driving real results for small and medium enterprises.",
      category: "SEO",
      readTime: "8 min read",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      icon: Search,
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      id: 2,
      title: "How AI Automation Can Transform Your Customer Service",
      description: "Learn how artificial intelligence is revolutionizing customer support and reducing operational costs.",
      category: "Automation",
      readTime: "12 min read",
      author: "Marcus Wong",
      date: "Dec 12, 2024",
      icon: Bot,
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 3,
      title: "Social Media Marketing Trends That Actually Work",
      description: "Cut through the noise with proven social media strategies that deliver measurable ROI.",
      category: "Social Media",
      readTime: "6 min read",
      author: "Lisa Zhang",
      date: "Dec 10, 2024",
      icon: Share2,
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 4,
      title: "Maximizing ROI from Paid Advertising Campaigns",
      description: "Expert tips on optimizing your ad spend across Google, Facebook, and other platforms.",
      category: "Paid Ads",
      readTime: "10 min read",
      author: "David Kim",
      date: "Dec 8, 2024",
      icon: BarChart3,
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 5,
      title: "Website Performance: Why Speed Matters for Conversions",
      description: "The direct correlation between website speed and conversion rates, plus actionable optimization tips.",
      category: "Website",
      readTime: "7 min read",
      author: "Emily Tan",
      date: "Dec 5, 2024",
      icon: TrendingUp,
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 6,
      title: "Building Effective Marketing Automation Workflows",
      description: "Step-by-step guide to creating automation that nurtures leads and drives conversions.",
      category: "Automation",
      readTime: "15 min read",
      author: "Alex Rivera",
      date: "Dec 3, 2024",
      icon: Workflow,
      image: "photo-1460925895917-afdab827c52f"
    }
  ];

  const playbookBenefits = [
    "Proven strategies for increasing website traffic by 300%",
    "Step-by-step conversion optimization techniques",
    "Local SEO secrets for dominating your market",
    "Content marketing blueprint for consistent growth",
    "Performance tracking and analytics setup guide",
    "Mobile optimization best practices"
  ];

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Download request:", { name, email });
    // Reset form
    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Resources for Your Digital Growth Journey
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access our expert insights, guides, and tools to empower your business with proven digital marketing strategies.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Our Latest Insights & Articles on Digital Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with actionable insights from our digital marketing experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200 overflow-hidden group">
                <div className="aspect-video bg-muted/30 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${post.image}?w=400&h=225&fit=crop`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-azure text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-bold text-oxford-blue leading-tight mb-3 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-azure group-hover:text-white group-hover:border-azure transition-colors">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-azure hover:bg-azure/90 text-white font-semibold px-8 py-4 rounded-lg">
              View All Blog Posts
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Website Growth Playbook */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <Badge className="bg-xanthous/10 text-xanthous border-xanthous/20 mb-4">
                    Free Download
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-oxford-blue mb-4 leading-tight">
                    Your Free Website Growth Playbook for SMEs
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Unlock the secrets to transforming your website into a lead-generation powerhouse. This comprehensive guide reveals the exact strategies we use to help our clients achieve 300% traffic growth.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-oxford-blue mb-4">
                    What's Inside:
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {playbookBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-azure flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-oxford-blue">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-oxford-blue">
                      Business Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your business email"
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold py-4 rounded-lg"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Playbook Now
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="bg-gradient-to-br from-azure/10 to-marian-blue/10 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-80 bg-white rounded-lg shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                    <div className="p-6 h-full flex flex-col">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-azure/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <TrendingUp className="h-8 w-8 text-azure" />
                        </div>
                        <h3 className="text-lg font-bold text-oxford-blue">
                          Website Growth Playbook
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          For SMEs & Startups
                        </p>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="h-2 bg-muted rounded-full"></div>
                        <div className="h-2 bg-muted rounded-full w-4/5"></div>
                        <div className="h-2 bg-muted rounded-full w-3/5"></div>
                        <div className="h-2 bg-azure/20 rounded-full w-4/5"></div>
                        <div className="h-2 bg-muted rounded-full"></div>
                        <div className="h-2 bg-muted rounded-full w-2/3"></div>
                      </div>
                      <div className="text-center mt-4">
                        <Badge className="bg-xanthous text-oxford-blue">
                          FREE
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Help/FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <Card className="bg-azure/5 border border-azure/20 rounded-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-azure/10 rounded-xl flex items-center justify-center">
                  <HelpCircle className="h-8 w-8 text-azure" />
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-oxford-blue mb-4 leading-tight">
                Got Questions? We've Got Answers for Your Digital Needs.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive help center covers everything from getting started with digital marketing to advanced optimization strategies. Find instant answers to common questions about our services, pricing, and processes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-azure hover:bg-azure/90 text-white font-semibold px-8 py-4 rounded-lg">
                  <FileText className="h-5 w-5 mr-2" />
                  Visit Our Help Center
                </Button>
                <Button variant="outline" size="lg" className="border-azure/20 text-azure hover:bg-azure/10 font-semibold px-8 py-4 rounded-lg">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Need Personalized Advice for Your Digital Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get expert guidance tailored to your business goals. Our digital strategy consultants are ready to help you create a roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg">
              Book a Free Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;