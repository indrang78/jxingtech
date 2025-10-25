import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from 'react-google-recaptcha';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ArrowRight,
  Send,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackFormSubmission, trackCTA, trackBooking } from "@/lib/analytics";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: ""
  });

  const inquiryTypes = [
    "General Inquiry",
    "Free Consultation",
    "Custom Quote",
    "Support Request"
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@jxingtech.my",
      link: "mailto:hello@jxingtech.my",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+60 10-288 2827",
      link: "tel:+60102882827",
      description: "Speak directly with our team"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Start a conversation",
      link: "https://wa.me/60102882827",
      description: "Quick chat on WhatsApp"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear messages when user starts typing
    if (message.content) {
      setMessage({ type: '', content: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', content: '' });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
      setMessage({ 
        type: 'error', 
        content: 'Please fill in all required fields.' 
      });
      setIsLoading(false);
      return;
    }

    // Validate CAPTCHA
    if (!captchaValue) {
      setMessage({ 
        type: 'error', 
        content: 'Please complete the CAPTCHA verification.' 
      });
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          inquiryType: formData.inquiryType,
          message: formData.message,
          recaptchaToken: captchaValue
        }
      });

      if (error) throw error;

      trackFormSubmission('Contact Form', 'success');

      setMessage({ 
        type: 'success', 
        content: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        message: ""
      });
      
      // Reset CAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaValue(null);
    } catch (error) {
      console.error('Error sending message:', error);
      trackFormSubmission('Contact Form', 'error');
      setMessage({ 
        type: 'error', 
        content: 'Failed to send message. Please try again or contact us directly.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Connect and Grow Your Business
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Whether you have a question about digital marketing, need a custom quote for AI integration, or are ready to start your digital transformation journey, we're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <CardHeader className="p-8 border-b border-muted/20">
                <CardTitle className="text-2xl font-bold text-oxford-blue">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="mt-2 h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-oxford-blue">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold text-oxford-blue">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter your company name"
                        className="mt-2 h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inquiryType" className="text-sm font-semibold text-oxford-blue">
                      Inquiry Type *
                    </Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-oxford-blue">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project, questions, or how we can help..."
                      required
                      rows={6}
                      className="mt-2 resize-none"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-oxford-blue mb-2 block">
                      Security Verification *
                    </Label>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeExLkqAAAAAJ9xiK6EQcfzqzjUwZ9xVCXG1bJZ"
                      onChange={(value) => setCaptchaValue(value)}
                      onExpired={() => setCaptchaValue(null)}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-azure hover:bg-azure/90 text-white font-semibold py-4 text-lg rounded-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-8">
              {/* Contact Methods */}
              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <CardHeader className="p-6 border-b border-muted/20">
                  <CardTitle className="text-lg font-bold text-oxford-blue">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-colors group"
                        onClick={() => {
                          if (method.link.startsWith('http')) {
                            trackCTA(`Contact via ${method.title}`, 'Contact Page Sidebar');
                          } else {
                            trackCTA(`Contact via ${method.title}`, 'Contact Page Sidebar');
                          }
                        }}
                      >
                        <div className="w-10 h-10 bg-azure/10 rounded-lg flex items-center justify-center group-hover:bg-azure/20 transition-colors">
                          <method.icon className="h-5 w-5 text-azure" />
                        </div>
                        <div>
                          <div className="font-semibold text-oxford-blue text-sm">
                            {method.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {method.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {method.description}
                          </div>
                        </div>
                        {method.link.startsWith('http') && (
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-azure transition-colors" />
                        )}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <CardHeader className="p-6 border-b border-muted/20">
                  <CardTitle className="text-lg font-bold text-oxford-blue flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-azure" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-2 border-t border-muted/20">
                      <p className="text-xs text-muted-foreground">
                        Malaysia Time (GMT+8)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                <CardHeader className="p-6 border-b border-muted/20">
                  <CardTitle className="text-lg font-bold text-oxford-blue flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-azure" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-sm">
                    <p className="font-medium text-oxford-blue mb-2">
                      JXING Tech Group
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Unit 37-2, Level 37<br />
                      Q Sentral<br />
                      No. 2A, Jalan Stesen Sentral 2<br />
                      Kuala Lumpur Sentral<br />
                      50470 Kuala Lumpur, Malaysia
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="w-full"
                    >
                      <a 
                        href="https://maps.google.com/?q=Q+Sentral+Kuala+Lumpur+Sentral" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        View on Google Maps
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Cal.com Inline Booking */}
      <section className="py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Book a time that works for you directly in our calendar below. We'll discuss your digital transformation needs and how we can help grow your business.
            </p>
          </div>
          <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            <CardContent className="p-0">
              <div className="relative" style={{ height: '630px' }}>
                <iframe
                  src="https://cal.com/jxingtech"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', borderRadius: '12px' }}
                  title="Schedule a consultation"
                  onLoad={() => trackBooking('Inline Calendar View')}
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action - Free Consultation */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <Card className="bg-azure/5 border border-azure/20 rounded-xl overflow-hidden">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-azure/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-azure" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-oxford-blue mb-4 leading-tight">
                Book a Free Consultation Directly
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to discuss your digital transformation? Schedule a 30-minute consultation with our digital agency specialists to explore how we can help grow your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-xanthous hover:bg-xanthous/90 text-oxford-blue font-semibold px-8 py-4 rounded-lg"
                  asChild
                >
                  <a 
                    href="https://cal.com/jxingtech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackCTA('Book Free Consultation', 'Contact Page CTA');
                      trackBooking('External Calendar Link');
                    }}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-azure/20 text-azure hover:bg-azure/10 font-semibold px-8 py-4 rounded-lg"
                    asChild
                  >
                    <a 
                      href="https://wa.me/60102882827" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => trackCTA('Start WhatsApp Chat', 'Contact Page CTA')}
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Start WhatsApp Chat
                    </a>
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-azure">30 min</div>
                  <div className="text-sm text-muted-foreground">Free consultation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-azure">24hr</div>
                  <div className="text-sm text-muted-foreground">Response time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-azure">100%</div>
                  <div className="text-sm text-muted-foreground">No commitment</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;