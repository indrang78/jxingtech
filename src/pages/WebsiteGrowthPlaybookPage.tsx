import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { 
  Download,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Zap,
  Globe,
  BarChart3,
  Star,
  AlertCircle,
  Shield,
  Clock,
  Award
} from "lucide-react";
import LandingNavigation from "@/components/LandingNavigation";
import LandingFooter from "@/components/LandingFooter";
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
    <div className="min-h-screen bg-white">
      <LandingNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-ghost-white to-azure/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-xanthous/10 text-oxford-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="h-4 w-4 mr-2" />
                FREE 10-Page Digital Growth Blueprint
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-oxford-blue mb-6 leading-tight">
                Transform Your SME into a Digital Powerhouse
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get the exact strategies 1,000+ SME owners used to <strong>double their online revenue</strong> in 90 days. 
                No fluff, just proven tactics you can implement immediately.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-azure">10</div>
                  <div className="text-sm text-muted-foreground">Pages</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-azure">FREE</div>
                  <div className="text-sm text-muted-foreground">Download</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-azure">24/7</div>
                  <div className="text-sm text-muted-foreground">Access</div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-azure" />
                  No spam, ever
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-azure" />
                  Instant download
                </div>
              </div>
            </div>

            {/* Right Column - Playbook Preview & Lead Form */}
            <div className="flex justify-center lg:justify-end">
              <Card className="bg-white border-0 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden max-w-md w-full">
                <CardContent className="p-8">
                  {/* Playbook Preview */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <div className="w-48 h-60 bg-white rounded-lg shadow-xl transform rotate-3 hover:rotate-1 transition-transform duration-300 overflow-hidden mx-auto">
                        <img 
                          src={playbookCover}
                          alt="Website Growth Playbook for SMEs"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-xanthous text-oxford-blue px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        NEW!
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-oxford-blue mb-2">
                      Get Your FREE Playbook
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Join 1,000+ SME owners who downloaded this week
                    </p>
                    <div className="flex items-center justify-center space-x-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-xanthous text-xanthous" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">(4.9/5)</span>
                    </div>
                  </div>

                  {message.content && (
                    <Alert className={`mb-4 ${message.type === 'error' ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`}>
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

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="h-12 border-muted-foreground/20 focus:border-azure"
                      />
                    </div>

                    <div>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Your business email"
                        required
                        className="h-12 border-muted-foreground/20 focus:border-azure"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreedToPrivacy}
                        onCheckedChange={(checked) => handleInputChange("agreedToPrivacy", checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                        I agree to receive the playbook and marketing insights. Unsubscribe anytime.
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-bold py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      disabled={isLoading}
                    >
                      <Download className="h-5 w-5 mr-2" />
                      {isLoading ? 'Sending...' : 'Download My Free Playbook Now'}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    🔒 Your email is safe. No spam, guaranteed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">
              What's Inside This Power-Packed Playbook?
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build a profitable digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="bg-ghost-white border-0 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-azure/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-azure" />
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

          {/* Complete Contents List */}
          <Card className="bg-azure/5 border-0 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-oxford-blue mb-6 text-center">
              Complete 10-Page Breakdown:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {playbookFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-azure flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-ghost-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">
              Join 1,000+ SME Owners Getting Results
            </h2>
            <p className="text-lg text-muted-foreground">
              See what business owners are saying about the playbook
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-1 mb-3">
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
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-oxford-blue to-azure">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let your competitors get ahead. Download your free playbook now and start implementing 
            proven growth strategies that actually work for SMEs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center text-white/90">
              <Users className="h-5 w-5 mr-2" />
              1,000+ downloads this month
            </div>
            <div className="flex items-center text-white/90">
              <TrendingUp className="h-5 w-5 mr-2" />
              Average 127% revenue increase
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => document.getElementById('email')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Download className="h-6 w-6 mr-3" />
            Get My Free Playbook Now
          </Button>
          
          <p className="text-white/70 text-sm mt-4">
            ⚡ Instant download • No credit card required • 100% free
          </p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default WebsiteGrowthPlaybookPage;