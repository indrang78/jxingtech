import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight,
  ArrowLeft,
  Search,
  Clock,
  User,
  Calendar,
  TrendingUp,
  Share2,
  BarChart3,
  Workflow,
  Bot,
  Globe,
  FileText,
  Target,
  Zap,
  Mail,
  Filter
} from "lucide-react";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const postsPerPage = 6;

  const categories = [
    "All", "SEO", "Website Design", "Social Media", "Paid Ads", 
    "Automation", "AI", "E-commerce", "Local SEO", "Content Marketing"
  ];

  const allBlogPosts = [
    {
      id: 1,
      title: "10 Essential SEO Strategies for SMEs in 2024",
      excerpt: "Discover the latest SEO techniques that are driving real results for small and medium enterprises. Learn how to outrank your competitors and increase organic traffic.",
      category: "SEO",
      readTime: "8 min read",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      icon: Search,
      image: "photo-1518770660439-4636190af475",  // Tech circuit board
      featured: true,
      tags: ["SEO", "SME", "Organic Traffic", "Rankings"]
    },
    {
      id: 2,
      title: "How AI Automation Can Transform Your Customer Service",
      excerpt: "Learn how artificial intelligence is revolutionizing customer support and reducing operational costs. Discover practical AI tools you can implement today.",
      category: "AI",
      readTime: "12 min read",
      author: "Marcus Wong",
      date: "Dec 12, 2024",
      icon: Bot,
      image: "photo-1486312338219-ce68d2c6f44d",  // Professional using MacBook
      featured: true,
      tags: ["AI", "Automation", "Customer Service", "Chatbots"]
    },
    {
      id: 3,
      title: "Social Media Marketing Trends That Actually Work",
      excerpt: "Cut through the noise with proven social media strategies that deliver measurable ROI. Focus on tactics that convert followers into customers.",
      category: "Social Media",
      readTime: "6 min read",
      author: "Lisa Zhang",
      date: "Dec 10, 2024",
      icon: Share2,
      image: "photo-1487058792275-0ad4aaf24ca7",  // Code on computer monitor
      featured: false,
      tags: ["Social Media", "Marketing", "ROI", "Engagement"]
    },
    {
      id: 4,
      title: "Maximizing ROI from Paid Advertising Campaigns",
      excerpt: "Expert tips on optimizing your ad spend across Google, Facebook, and other platforms. Learn to reduce costs while increasing conversions.",
      category: "Paid Ads",
      readTime: "10 min read",
      author: "David Kim",
      date: "Dec 8, 2024",
      icon: BarChart3,
      image: "photo-1605810230434-7631ac76ec81",  // Team collaboration with displays
      featured: true,
      tags: ["Paid Ads", "PPC", "ROI", "Google Ads", "Facebook Ads"]
    },
    {
      id: 5,
      title: "Website Performance: Why Speed Matters for Conversions",
      excerpt: "The direct correlation between website speed and conversion rates, plus actionable optimization tips to improve your site's performance.",
      category: "Website Design",
      readTime: "7 min read",
      author: "Emily Tan",
      date: "Dec 5, 2024",
      icon: TrendingUp,
      image: "photo-1581090464777-f3220bbe1b8b",  // Innovation concept with lightbulb
      featured: false,
      tags: ["Website Speed", "Conversions", "Performance", "UX"]
    },
    {
      id: 6,
      title: "Building Effective Marketing Automation Workflows",
      excerpt: "Step-by-step guide to creating automation that nurtures leads and drives conversions. Transform your marketing efficiency with smart workflows.",
      category: "Automation",
      readTime: "15 min read",
      author: "Alex Rivera",
      date: "Dec 3, 2024",
      icon: Workflow,
      image: "photo-1460925895917-afdab827c52f",
      featured: false,
      tags: ["Marketing Automation", "Lead Nurturing", "Workflows", "CRM"]
    },
    {
      id: 7,
      title: "Local SEO Mastery: Dominate Your Geographic Market",
      excerpt: "Complete guide to local SEO optimization for businesses targeting geographic markets. Increase foot traffic and local online visibility.",
      category: "Local SEO",
      readTime: "11 min read",
      author: "James Liu",
      date: "Nov 28, 2024",
      icon: Target,
      image: "photo-1498050108023-c5249f4df085",
      featured: false,
      tags: ["Local SEO", "Google My Business", "Local Rankings", "Foot Traffic"]
    },
    {
      id: 8,
      title: "E-commerce Conversion Rate Optimization Guide",
      excerpt: "Proven strategies to increase your online store's conversion rate. Learn how to turn more visitors into paying customers with strategic optimization.",
      category: "E-commerce",
      readTime: "13 min read",
      author: "Rachel Wong",
      date: "Nov 25, 2024",
      icon: Globe,
      image: "photo-1486312338219-ce68d2c6f44d",
      featured: false,
      tags: ["E-commerce", "CRO", "Online Store", "Conversions"]
    },
    {
      id: 9,
      title: "Content Marketing Strategy for B2B Success",
      excerpt: "Build a content marketing strategy that attracts qualified leads and establishes thought leadership in your industry.",
      category: "Content Marketing",
      readTime: "9 min read",
      author: "Michael Chen",
      date: "Nov 22, 2024",
      icon: FileText,
      image: "photo-1488590528505-98d2b5aba04b",
      featured: false,
      tags: ["Content Marketing", "B2B", "Lead Generation", "Thought Leadership"]
    },
    {
      id: 10,
      title: "The Future of Digital Marketing: AI and Automation",
      excerpt: "Explore how artificial intelligence and automation are reshaping digital marketing. Stay ahead of the curve with emerging technologies.",
      category: "AI",
      readTime: "14 min read",
      author: "Dr. Amanda Foster",
      date: "Nov 20, 2024",
      icon: Zap,
      image: "photo-1581091226825-a6a2a5aee158",
      featured: false,
      tags: ["AI", "Future", "Digital Marketing", "Innovation"]
    },
    {
      id: 11,
      title: "Mobile-First Design: Essential for Modern Websites",
      excerpt: "Why mobile-first design is crucial for user experience and SEO. Learn best practices for creating mobile-optimized websites that convert.",
      category: "Website Design",
      readTime: "8 min read",
      author: "Sophie Martinez",
      date: "Nov 18, 2024",
      icon: Globe,
      image: "photo-1460925895917-afdab827c52f",
      featured: false,
      tags: ["Mobile Design", "Responsive", "UX", "Mobile SEO"]
    },
    {
      id: 12,
      title: "Advanced Google Analytics 4 for SMEs",
      excerpt: "Master Google Analytics 4 to make data-driven decisions. Learn to track what matters and optimize your digital marketing performance.",
      category: "SEO",
      readTime: "16 min read",
      author: "Kevin Park",
      date: "Nov 15, 2024",
      icon: BarChart3,
      image: "photo-1498050108023-c5249f4df085",
      featured: false,
      tags: ["Google Analytics", "Data Analysis", "Performance Tracking", "ROI"]
    }
  ];

  const featuredPosts = allBlogPosts.filter(post => post.featured);

  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            JXING Tech Blog: Insights for Digital Growth
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with our expert articles on web development, SEO, AI, marketing automation, and digital trends relevant to SMEs.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/30 border-b border-muted/20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center space-x-2 mr-4">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Categories:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`rounded-full ${
                    selectedCategory === category 
                      ? "bg-azure text-white hover:bg-azure/90" 
                      : "hover:bg-muted"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Info */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} 
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {currentPosts.map((post) => (
                <Card key={post.id} className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-200 overflow-hidden group">
                  <div className="aspect-video bg-muted/30 relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${post.image}?w=400&h=225&fit=crop`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-azure text-white">
                        {post.category}
                      </Badge>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-xanthous text-oxford-blue">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="p-6">
                    <CardTitle className="text-lg font-bold text-oxford-blue leading-tight mb-3 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
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
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-azure group-hover:text-white group-hover:border-azure transition-colors">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-azure text-white" : ""}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-8">
              {/* Featured Posts */}
              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <CardHeader className="p-6 border-b border-muted/20">
                  <CardTitle className="text-lg font-bold text-oxford-blue flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-azure" />
                    Featured Articles
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {featuredPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="group cursor-pointer">
                        <h4 className="text-sm font-semibold text-oxford-blue mb-2 line-clamp-2 group-hover:text-azure transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-muted-foreground space-x-3">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        {post !== featuredPosts[featuredPosts.length - 1] && (
                          <div className="border-b border-muted/20 mt-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-azure/5 border border-azure/20 rounded-xl">
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-bold text-oxford-blue flex items-center mb-2">
                    <Mail className="h-5 w-5 mr-2 text-azure" />
                    Stay Updated
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for monthly digital growth tips and industry insights.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <form onSubmit={handleNewsletterSignup} className="space-y-4">
                    <div>
                      <Label htmlFor="newsletter-email" className="text-sm font-medium text-oxford-blue">
                        Email Address
                      </Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-azure hover:bg-azure/90 text-white font-semibold"
                    >
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Unsubscribe anytime. We respect your privacy.
                  </p>
                </CardContent>
              </Card>

              {/* Popular Categories */}
              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <CardHeader className="p-6 border-b border-muted/20">
                  <CardTitle className="text-lg font-bold text-oxford-blue">
                    Popular Topics
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {["SEO", "AI", "Automation", "Social Media", "Website Design"].map((topic) => (
                      <Button
                        key={topic}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedCategory(topic);
                          setCurrentPage(1);
                        }}
                        className="text-xs hover:bg-azure hover:text-white hover:border-azure"
                      >
                        {topic}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;