import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight,
  Eye,
  EyeOff,
  Users,
  BarChart3,
  MessageCircle,
  HelpCircle,
  ExternalLink,
  Mail,
  Lock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";

const ClientLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Set up auth state listener
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Redirect authenticated users to dashboard
        if (session?.user) {
          // Clear any error messages
          setMessage({ type: '', content: '' });
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Redirect authenticated users
  useEffect(() => {
    if (user && session) {
      // User is already logged in, show dashboard access
      return;
    }
  }, [user, session]);

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

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', content: '' });

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          setMessage({ 
            type: 'error', 
            content: 'Invalid email or password. Please check your credentials and try again.' 
          });
        } else {
          setMessage({ type: 'error', content: error.message });
        }
      } else {
        setMessage({ 
          type: 'success', 
          content: 'Successfully logged in! Welcome to your client dashboard.' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        content: 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', content: '' });

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', content: 'Passwords do not match.' });
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setMessage({ type: 'error', content: 'Password must be at least 6 characters long.' });
      setIsLoading(false);
      return;
    }

    try {
      const redirectUrl = `${window.location.origin}/client-login`;
      
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) {
        if (error.message.includes('User already registered')) {
          setMessage({ 
            type: 'error', 
            content: 'An account with this email already exists. Please sign in instead.' 
          });
        } else {
          setMessage({ type: 'error', content: error.message });
        }
      } else {
        setMessage({ 
          type: 'success', 
          content: 'Account created successfully! Please check your email to verify your account.' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        content: 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setMessage({ type: 'error', content: 'Please enter your email address first.' });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
        redirectTo: `${window.location.origin}/client-login`,
      });

      if (error) {
        setMessage({ type: 'error', content: error.message });
      } else {
        setMessage({ 
          type: 'success', 
          content: 'Password reset email sent! Please check your inbox.' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        content: 'Failed to send password reset email. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setFormData({ email: "", password: "", confirmPassword: "" });
    setMessage({ type: 'success', content: 'Successfully logged out.' });
  };

  // If user is authenticated, show dashboard access
  if (user && session) {
    return (
      <div className="min-h-screen bg-background">
        {/* Minimal Header */}
        <header className="bg-white border-b border-muted/20 py-4">
          <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-oxford-blue">
              JXING Tech
            </Link>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </header>

        {/* Dashboard Access Section */}
        <section className="py-20">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-azure/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-azure" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-oxford-blue mb-4">
                Welcome to Your Client Dashboard
              </h1>
              <p className="text-lg text-muted-foreground">
                You're successfully logged in as {user.email}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-azure/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-azure" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue">Project Updates</h3>
                    <p className="text-sm text-muted-foreground">Real-time progress tracking</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Access detailed project timelines, milestones, and deliverables for all your active campaigns.
                </p>
              </Card>

              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-xanthous/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-xanthous" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue">Performance Reports</h3>
                    <p className="text-sm text-muted-foreground">Analytics and insights</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  View comprehensive analytics, ROI metrics, and performance data for your digital campaigns.
                </p>
              </Card>

              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-marian-blue/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-marian-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue">Communication Hub</h3>
                    <p className="text-sm text-muted-foreground">Direct team access</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Communicate directly with your dedicated account team and track all project communications.
                </p>
              </Card>

              <Card className="bg-card border-0 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-robin-egg-blue/10 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-robin-egg-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-oxford-blue">Account Management</h3>
                    <p className="text-sm text-muted-foreground">Service control</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage your subscription, request changes, and access billing information.
                </p>
              </Card>
            </div>

            {/* Notion Dashboard Access */}
            <Card className="bg-azure/5 border border-azure/20 rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-azure/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="h-8 w-8 text-azure" />
                </div>
                <h2 className="text-2xl font-bold text-oxford-blue mb-4">
                  Access Your Notion Dashboard
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Your comprehensive project workspace with detailed documentation, timelines, and collaborative tools.
                </p>
                <Button 
                  size="lg" 
                  className="bg-azure hover:bg-azure/90 text-white font-semibold px-8 py-4 rounded-lg"
                  asChild
                >
                  <a href="https://clients.jxingtech.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Open Notion Dashboard
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Opens in a new tab. You may need to sign in to Notion separately.
                </p>
              </CardContent>
            </Card>

            {/* Support Section */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Need help with your dashboard?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link to="/help">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Visit Help Center
                  </Link>
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Login/Signup form for non-authenticated users
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="bg-white border-b border-muted/20 py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-oxford-blue">
            JXING Tech
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-azure transition-colors">
            ← Back to Homepage
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Client Dashboard Login for JXING Tech Partners
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Access your project updates, performance reports, and communication hub for your digital marketing campaigns.
          </p>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="py-20">
        <div className="max-w-[500px] mx-auto px-6">
          <Card className="bg-card border-0 rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.1)]">
            <CardHeader className="p-8 text-center border-b border-muted/20">
              <CardTitle className="text-2xl font-bold text-oxford-blue">
                {isLogin ? 'Sign In to Your Dashboard' : 'Create Your Client Account'}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {isLogin 
                  ? 'Access your personalized project workspace'
                  : 'Get started with your JXING Tech client portal'
                }
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

              <form onSubmit={isLogin ? handleSignIn : handleSignUp} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-oxford-blue">
                    Email Address
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="pl-12 h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-semibold text-oxford-blue">
                    Password
                  </Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="pl-12 pr-12 h-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-oxford-blue transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <Label htmlFor="confirmPassword" className="text-sm font-semibold text-oxford-blue">
                      Confirm Password
                    </Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        placeholder="Confirm your password"
                        required
                        className="pl-12 h-12"
                      />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-azure hover:text-azure/80 transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-azure hover:bg-azure/90 text-white font-semibold py-4 text-lg rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : (isLogin ? 'Log In' : 'Create Account')}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </form>

              <Separator className="my-8" />

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setMessage({ type: '', content: '' });
                    setFormData({ email: formData.email, password: "", confirmPassword: "" });
                  }}
                  className="w-full"
                >
                  {isLogin ? 'Create New Account' : 'Sign In Instead'}
                </Button>
              </div>

              {/* Support Section */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Need help logging in?
                </p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/help">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Visit Help Center
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ClientLoginPage;