import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, ArrowRight, Star, Zap } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$1,497",
      period: "/month",
      description: "Perfect for small businesses getting started with automation",
      badge: null,
      features: [
        { included: true, text: "Basic process automation" },
        { included: true, text: "Email marketing setup" },
        { included: true, text: "SEO fundamentals" },
        { included: true, text: "Monthly performance reports" },
        { included: true, text: "Email support" },
        { included: false, text: "Advanced AI tools" },
        { included: false, text: "Custom integrations" },
        { included: false, text: "Dedicated account manager" },
        { included: false, text: "24/7 phone support" }
      ],
      cta: "Start Free Trial",
      highlight: false
    },
    {
      name: "Growth",
      price: "$2,997",
      period: "/month",
      description: "Comprehensive solution for businesses ready to scale",
      badge: "Most Popular",
      features: [
        { included: true, text: "Full automation suite" },
        { included: true, text: "Advanced email marketing" },
        { included: true, text: "Complete SEO optimization" },
        { included: true, text: "Social media management" },
        { included: true, text: "Advanced analytics dashboard" },
        { included: true, text: "AI-powered chatbots" },
        { included: true, text: "Basic integrations" },
        { included: true, text: "Priority email support" },
        { included: false, text: "Dedicated account manager" }
      ],
      cta: "Start Free Trial",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Complete digital ecosystem for established businesses",
      badge: "Premium",
      features: [
        { included: true, text: "Everything in Growth" },
        { included: true, text: "Custom AI solutions" },
        { included: true, text: "Advanced integrations" },
        { included: true, text: "Dedicated account manager" },
        { included: true, text: "24/7 phone support" },
        { included: true, text: "Custom reporting" },
        { included: true, text: "Priority implementation" },
        { included: true, text: "Quarterly strategy sessions" },
        { included: true, text: "White-label options" }
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  const addOns = [
    {
      name: "Additional Team Member",
      price: "$197/month",
      description: "Add extra users to your account with full access"
    },
    {
      name: "Premium Support",
      price: "$497/month", 
      description: "Priority support with 2-hour response time"
    },
    {
      name: "Custom Integration",
      price: "$997/one-time",
      description: "Connect any third-party tool to your workflow"
    },
    {
      name: "Training & Onboarding",
      price: "$1,497/one-time",
      description: "Comprehensive team training and setup assistance"
    }
  ];

  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial for all plans. No credit card required."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
    },
    {
      question: "What's included in setup?",
      answer: "All plans include initial setup, basic training, and migration from your existing systems at no extra cost."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, our Enterprise plan includes custom development and integrations tailored to your specific needs."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your first month."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We believe in transparent, straightforward pricing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-[600px] mx-auto">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-[600px] mx-auto leading-relaxed">
            Choose the plan that fits your business needs. All plans include setup, 
            training, and ongoing support.
          </p>
          <div className="flex items-center justify-center space-x-2 text-white/80">
            <CheckCircle className="h-5 w-5 text-robin-egg-blue" />
            <span>14-day free trial</span>
            <span className="mx-2">•</span>
            <CheckCircle className="h-5 w-5 text-robin-egg-blue" />
            <span>No setup fees</span>
            <span className="mx-2">•</span>
            <CheckCircle className="h-5 w-5 text-robin-egg-blue" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlight ? 'ring-2 ring-azure shadow-[0_6px_16px_rgba(0,0,0,0.08)]' : 'shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]'} h-full bg-card border-0 rounded-xl transition-all duration-200`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="cta-gradient text-white px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-bold mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-azure">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-azure flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span 
                          className={`text-sm ${
                            feature.included ? 'text-foreground' : 'text-muted-foreground'
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.highlight ? "azure" : "outline-azure"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Enhance your plan with additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {addon.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-azure">
                    {addon.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {addon.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-muted-foreground">
              See how much time and money you could save
            </p>
          </div>

          <Card className="card-glow">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-azure mb-2">40+</div>
                  <div className="text-muted-foreground mb-2">Hours Saved Monthly</div>
                  <div className="text-sm text-green-600">= $2,000+ in labor costs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-azure mb-2">300%</div>
                  <div className="text-muted-foreground mb-2">Lead Increase</div>
                  <div className="text-sm text-green-600">= $15,000+ in new revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-azure mb-2">500%</div>
                  <div className="text-muted-foreground mb-2">Average ROI</div>
                  <div className="text-sm text-green-600">= 5x return on investment</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Typical Growth plan client saves <span className="font-bold text-azure">$17,000+</span> monthly 
                  while investing only <span className="font-bold">$2,997</span> in our services.
                </p>
                <Button variant="azure" size="lg">
                  Calculate Your Savings
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline-azure" size="xl">
              Schedule a Demo
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center space-x-6 text-gray-300">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-xanthous fill-current" />
              <span className="text-sm">4.9/5 customer rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-robin-egg-blue" />
              <span className="text-sm">Setup in under 48 hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;