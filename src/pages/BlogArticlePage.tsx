import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "react-router-dom";
import {
  Clock,
  User,
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ArrowLeft,
  ArrowRight,
  Quote,
  ChevronRight
} from "lucide-react";

const BlogArticlePage = () => {
  const { id } = useParams();

  // Mock article data - in production, this would come from Supabase
  const article = {
    id: 1,
    title: "10 Essential SEO Strategies for SMEs in 2024",
    excerpt: "Discover the latest SEO techniques that are driving real results for small and medium enterprises.",
    category: "SEO",
    readTime: "8 min read",
    author: "Sarah Chen",
    authorBio: "SEO Specialist with 10+ years of experience helping SMEs achieve sustainable organic growth.",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    date: "December 15, 2024",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    tags: ["SEO", "SME", "Organic Traffic", "Rankings", "Digital Marketing"],
    content: `
      <h2>Introduction: Why SEO Matters More Than Ever</h2>
      <p>In today's digital landscape, search engine optimization isn't just a nice-to-have—it's essential for business survival. Small and medium enterprises (SMEs) that invest in strategic SEO consistently outperform competitors who rely solely on paid advertising.</p>
      
      <p>This comprehensive guide will walk you through the most effective SEO strategies we've tested across dozens of SME clients in 2024, delivering an average traffic increase of 285%.</p>

      <h2>1. Focus on User Intent, Not Just Keywords</h2>
      <p>Gone are the days of keyword stuffing. Modern SEO requires understanding what your users actually want when they search. Google's algorithm has become sophisticated enough to understand context and intent.</p>

      <blockquote>
        "The best SEO strategy is to create content that genuinely answers your audience's questions. Everything else is secondary." — Sarah Chen, SEO Specialist
      </blockquote>

      <h3>How to Implement:</h3>
      <ul>
        <li>Analyze search results for your target keywords to understand what Google considers relevant</li>
        <li>Create content that matches the searcher's intent (informational, navigational, or transactional)</li>
        <li>Use natural language and semantic keywords throughout your content</li>
        <li>Structure content to answer specific questions your audience is asking</li>
      </ul>

      <h2>2. Optimize for Core Web Vitals</h2>
      <p>Google's Core Web Vitals are now a ranking factor. Sites that load quickly, remain stable, and respond immediately to user interactions rank higher and convert better.</p>

      <p>Our testing shows that improving Core Web Vitals can increase organic traffic by 15-25% within 60 days. More importantly, faster sites convert 2-3x better than slow ones.</p>

      <h3>Key Metrics to Monitor:</h3>
      <ul>
        <li><strong>Largest Contentful Paint (LCP):</strong> Should occur within 2.5 seconds</li>
        <li><strong>First Input Delay (FID):</strong> Should be less than 100 milliseconds</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> Should be less than 0.1</li>
      </ul>

      <h2>3. Create Topic Clusters, Not Individual Pages</h2>
      <p>Instead of creating isolated blog posts, organize your content into topic clusters with pillar pages and supporting content. This structure helps Google understand your expertise and authority in specific areas.</p>

      <h2>4. Leverage Local SEO Opportunities</h2>
      <p>For SMEs serving specific geographic areas, local SEO is a goldmine. Optimizing for local search can dramatically increase foot traffic and phone calls.</p>

      <h3>Local SEO Checklist:</h3>
      <ul>
        <li>Claim and optimize your Google Business Profile</li>
        <li>Ensure NAP (Name, Address, Phone) consistency across all platforms</li>
        <li>Gather and respond to customer reviews</li>
        <li>Create location-specific content</li>
        <li>Build local citations and backlinks</li>
      </ul>

      <h2>5. Optimize for Voice Search</h2>
      <p>With the rise of smart speakers and voice assistants, optimizing for voice search is becoming crucial. Voice searches tend to be longer and more conversational than typed queries.</p>

      <h2>6. Build Quality Backlinks Strategically</h2>
      <p>Backlinks remain one of the strongest ranking factors. However, quality matters far more than quantity. A single link from a high-authority, relevant site can outperform dozens of low-quality links.</p>

      <blockquote>
        "One quality backlink from an industry authority is worth more than 100 directory submissions." — Digital Marketing Proverb
      </blockquote>

      <h2>7. Implement Schema Markup</h2>
      <p>Schema markup helps search engines understand your content better and can earn you rich snippets in search results, significantly increasing click-through rates.</p>

      <h2>8. Create Video Content</h2>
      <p>Video content is dominating search results. YouTube is the second-largest search engine, and Google frequently shows video results for informational queries.</p>

      <h2>9. Monitor and Adapt to Algorithm Updates</h2>
      <p>Google updates its algorithm hundreds of times per year. Stay informed about major updates and be prepared to adjust your strategy accordingly.</p>

      <h2>10. Track and Measure Results</h2>
      <p>SEO without analytics is guesswork. Implement comprehensive tracking to understand what's working and what needs adjustment.</p>

      <h3>Key Metrics to Track:</h3>
      <ul>
        <li>Organic traffic growth</li>
        <li>Keyword rankings for target terms</li>
        <li>Click-through rate (CTR) from search results</li>
        <li>Conversion rate from organic traffic</li>
        <li>Page load speed and Core Web Vitals</li>
        <li>Backlink profile growth</li>
      </ul>

      <h2>Conclusion</h2>
      <p>SEO is a marathon, not a sprint. These strategies require consistent effort and patience, but the long-term payoff—sustainable organic traffic that doesn't depend on ad spend—is invaluable for SMEs.</p>

      <p>Start with the fundamentals, measure your results, and continuously refine your approach. Within 6-12 months, you'll see significant improvements in your organic visibility and traffic.</p>
    `
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Local SEO Mastery: Dominate Your Geographic Market",
      category: "Local SEO",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Advanced Google Analytics 4 for SMEs",
      category: "SEO",
      readTime: "16 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop"
    },
    {
      id: 4,
      title: "Content Marketing Strategy for B2B Success",
      category: "Content Marketing",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop"
    }
  ];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: url
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      // Could add a toast notification here
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Blog */}
      <div className="bg-gray-50 border-b border-border">
        <div className="container-standard container-padding py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] max-h-[500px] bg-gray-100 overflow-hidden">
        <img 
          src={article.heroImage} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Header */}
      <div className="container-standard container-padding py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge className="bg-primary text-primary-foreground mb-4">
              {article.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Author & Meta Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 border-y border-border">
            <div className="flex items-center gap-4">
              <img 
                src={article.authorImage} 
                alt={article.author}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-foreground">{article.author}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleShare('facebook')}
                className="rounded-full"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleShare('twitter')}
                className="rounded-full"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="rounded-full"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleShare('copy')}
                className="rounded-full"
              >
                <Link2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-standard container-padding pb-20">
        <div className="max-w-4xl mx-auto">
          <article 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-li:text-muted-foreground prose-li:my-2
              prose-strong:text-foreground prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-primary 
              prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-8
              prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg
              prose-blockquote:not-italic prose-blockquote:text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2">Tags:</span>
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mt-8 p-8 bg-gray-50 border-2 border-border">
            <div className="flex items-start gap-6">
              <img 
                src={article.authorImage} 
                alt={article.author}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">About {article.author}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.authorBio}
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  View all articles by {article.author} <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container-standard container-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link 
                  key={related.id} 
                  to={`/blog/${related.id}`}
                  className="block"
                >
                  <Card className="card-hover cursor-pointer overflow-hidden h-full">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="bg-secondary text-secondary-foreground mb-3">
                        {related.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 leading-tight">
                        {related.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {related.readTime}
                      </div>
                      <div className="mt-4 flex items-center text-primary font-semibold">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven strategies can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
              asChild
            >
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-8"
              asChild
            >
              <Link to="/pricing">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticlePage;