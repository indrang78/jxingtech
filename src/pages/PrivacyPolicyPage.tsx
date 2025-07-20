import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-smooth mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> January 2024
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We collect information you provide directly to us, such as when you fill out a form, request a consultation, 
                or contact us. This may include your name, email address, phone number, company name, and any message you send us.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">How We Use Your Information</h2>
              <ul className="text-muted-foreground mb-6 leading-relaxed space-y-2">
                <li>• To respond to your inquiries and provide customer support</li>
                <li>• To send you information about our services that may interest you</li>
                <li>• To improve our website and services</li>
                <li>• To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this privacy policy or as required by law.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                You have the right to access, update, or delete your personal information. You may also opt out of receiving 
                communications from us at any time.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:hello@jxingtech.my" className="text-azure hover:underline">
                  hello@jxingtech.my
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;