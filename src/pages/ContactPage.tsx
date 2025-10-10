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
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-standard container-padding relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Let's Connect and Grow Your Business
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you have a question about digital marketing, need a custom quote, or are ready to start your digital transformation journey, we're here to help.
          </p>
        </div>
      </section>

      <div className="container-standard container-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-2 border-border">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@company.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+60 12 345 6789"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-foreground mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your Company Ltd."
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inquiryType" className="text-sm font-semibold text-foreground mb-2 block">
                    Inquiry Type *
                  </Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select what you need help with" />
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
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project, questions, or how we can help..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-2 block">
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
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
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-8">
              {/* Contact Methods */}
              <Card className="p-6 border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group border border-border hover:border-primary/30"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground text-sm mb-1">
                          {method.title}
                        </div>
                        <div className="text-sm text-primary font-medium mb-1 break-all">
                          {method.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {method.description}
                        </div>
                      </div>
                      {method.link.startsWith('http') && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      )}
                    </a>
                  ))}
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="p-6 border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Malaysia Time (GMT+8)
                    </p>
                  </div>
                </div>
              </Card>

              {/* Office Location with Map */}
              <Card className="p-6 border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Office Location
                </h3>
                <div className="text-sm mb-4">
                  <p className="font-semibold text-foreground mb-3">
                    JXING Tech Group
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Unit 37-2, Level 37<br />
                    Q Sentral<br />
                    No. 2A, Jalan Stesen Sentral 2<br />
                    Kuala Lumpur Sentral<br />
                    50470 Kuala Lumpur, Malaysia
                  </p>
                  
                  {/* Embedded Map */}
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-border">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9073682896877!2d101.68463031475715!3d3.1336229977181944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c5bf96420d%3A0x822f1e88c89f5c8e!2sQ%20Sentral!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="JXING Tech Group Office Location"
                    />
                  </div>

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
                      Open in Google Maps
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Consultation CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-standard container-padding text-center">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Schedule Your Free Consultation
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Book a 30-minute strategy call to discuss your digital growth goals and discover how we can help.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
            <div style={{ height: '630px' }}>
              <iframe
                src="https://cal.com/jxingtech/book-a-free-consult"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Schedule a consultation with JXING Tech"
              />
            </div>
          </div>

          <p className="mt-8 text-white/80">
            Or call us directly at <a href="tel:+60102882827" className="font-semibold underline hover:text-white">+60 10-288 2827</a>
          </p>
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
                  <a href="https://cal.com/jxingtech" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://wa.me/60102882827" target="_blank" rel="noopener noreferrer">
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