import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight,
  Download,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Zap,
  Globe,
  BarChart3,
  Star,
  ArrowLeft,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import playbookCover from "@/assets/playbook-cover.jpg";

const WebsiteGrowthPlaybookPage = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agreedToPrivacy: false
  });

  const keyBenefits = [
    {
      icon: Globe,
      title: "Build an SEO-friendly website from scratch",
      description: "Step-by-step guide to creating a website that ranks high on search engines"
    },
    {
      icon: TrendingUp,
      title: "Master social media content strategy",
      description: "Proven tactics for creating engaging content that drives real business results"
    },
    {
      icon: Target,
      title: "Discover tools and tactics for consistent growth",
      description: "Practical tools and strategies that deliver measurable, sustainable growth"
    },
    {
      icon: Zap,
      title: "Actionable steps for every SME",
      description: "Clear, implementable strategies designed specifically for small and medium enterprises"
    }
  ];

  const testimonials = [
    {
      quote: "This playbook is a must-read for any startup! The strategies are practical and easy to implement.",
      author: "Jennifer Wong",
      role: "Startup Founder",
      company: "TechFlow Solutions"
    },
    {
      quote: "Finally, a guide that speaks our language as SMEs. No fluff, just actionable insights.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "Local Business Network"
    },
    {
      quote: "The social media strategies alone increased our engagement by 200% in just 3 months.",
      author: "Sarah Kumar",
      role: "E-commerce Owner",
      company: "StyleCraft Boutique"
    }
  ];

  const playbookFeatures = [
    "Website architecture that converts visitors into customers",
    "Local SEO optimization for maximum visibility",
    "Content marketing blueprint for thought leadership",
    "Social media calendar templates and strategies",
    "Performance tracking and analytics setup guide",
    "Mobile optimization best practices",
    "Lead generation systems that work 24/7",
    "Budget-friendly tools and resource recommendations",
    "Common mistakes to avoid (save time and money)",
    "Quick-win tactics for immediate results"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', content: '' });

    // Validate required fields
    if (!formData.name || !formData.email) {
      setMessage({ 
        type: 'error', 
        content: 'Please fill in all required fields.' 
      });
      setIsLoading(false);
      return;
    }

    if (!formData.agreedToPrivacy) {
      setMessage({ 
        type: 'error', 
        content: 'Please agree to the privacy policy to continue.' 
      });
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call for playbook download
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Thank you! Your playbook download link has been sent to your email.",
      });
      
      setMessage({ 
        type: 'success', 
        content: 'Thank you! Check your email for the download link.' 
      });
      
      // Reset form
      setFormData({ name: "", email: "", agreedToPrivacy: false });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        content: 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear messages when user starts typing
    if (message.content) {
      setMessage({ type: '', content: '' });
    }
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Unlock Your Digital Potential: Download the JXING Tech Website Growth Playbook for SMEs
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Your 10-page blueprint for building a high-performing website and mastering social media, even if you're doing it yourself, tailored for the modern market.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-xanthous">10</div>
                  <div className="text-sm text-white/80">Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-xanthous">FREE</div>
                  <div className="text-sm text-white/80">Download</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-xanthous">5★</div>
                  <div className="text-sm text-white/80">Rated</div>
                </div>
              </div>
            </div>

            {/* Right Column - Playbook Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-white rounded-xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={playbookCover}
                    alt="Website Growth Playbook for SMEs by JXING Tech Group"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/20 to-transparent"></div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-xanthous text-oxford-blue px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  NEW 2024
                </div>
                <div className="absolute -bottom-4 -right-4 bg-azure text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  FREE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-oxford-blue mb-6">
              What You'll Learn Inside
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This comprehensive playbook covers everything you need to transform your digital presence and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-azure/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-azure" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Detailed Features List */}
          <Card className="bg-muted/30 border-0 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-oxford-blue mb-6 text-center">
              Complete Playbook Contents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {playbookFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-azure flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section className="py-20 bg-azure/5">
        <div className="max-w-[600px] mx-auto px-6">
          <Card className="bg-white border-0 rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.1)] overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-azure/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-azure" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-oxford-blue mb-4">
                  Get Your FREE Playbook Now
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join thousands of SME owners who have transformed their digital presence with our proven strategies.
                </p>
              </div>

              {message.content && (
                <Alert className={`mb-6 ${message.type === 'error' ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`}>
                  {message.type === 'error' ? (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  )}
                  <AlertDescription className={message.type === 'error' ? 'text-red-700' : 'text-green-700'}>
                    {message.content}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-oxford-blue">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-2 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-oxford-blue">
                    Business Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your business email"
                    required
                    className="mt-2 h-12"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.agreedToPrivacy}
                    onCheckedChange={(checked) => handleInputChange("agreedToPrivacy", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to receive the playbook and occasional updates about digital marketing insights. 
                    I can unsubscribe anytime. We respect your privacy and will never share your information.
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-bold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  disabled={isLoading}
                >
                  <Download className="h-6 w-6 mr-3" />
                  {isLoading ? 'Processing...' : 'Download My Free Playbook Now'}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by 1,000+ SME owners across Southeast Asia
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-xanthous text-xanthous" />
                  ))}
                  <span className="text-sm font-medium text-muted-foreground ml-2">
                    4.9/5 based on 127 reviews
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">
              What SME Owners Are Saying
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real businesses just like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-xanthous text-xanthous" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-sm font-semibold text-oxford-blue">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-azure">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let your competitors get ahead. Download your free playbook now and start implementing proven growth strategies today.
          </p>
          <Button 
            size="lg" 
            className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-bold px-12 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => document.getElementById('email')?.focus()}
          >
            <Download className="h-6 w-6 mr-3" />
            Get My Free Playbook
          </Button>
        </div>
      </section>

    </div>
  );
};

export default WebsiteGrowthPlaybookPage;