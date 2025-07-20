import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfServicePage = () => {
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
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Terms and conditions for using our services
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

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                By accessing and using JXING Tech Group services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Service Description</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                JXING Tech Group provides digital marketing services including but not limited to website development, 
                SEO, social media management, paid advertising, and automation solutions for small and medium enterprises.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Payment Terms</h2>
              <ul className="text-muted-foreground mb-6 leading-relaxed space-y-2">
                <li>• Monthly subscriptions are billed in advance</li>
                <li>• Annual contracts receive a 10% discount</li>
                <li>• Payments are due within 30 days of invoice date</li>
                <li>• Late payments may result in service suspension</li>
              </ul>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Cancellation Policy</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Monthly subscriptions can be cancelled with 30 days written notice. Annual contracts have a 12-month 
                minimum commitment. Refunds are provided on a pro-rata basis for annual contracts cancelled early.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                All work products created by JXING Tech Group remain the property of the client upon full payment. 
                JXING Tech Group retains the right to use work as portfolio examples and case studies.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                JXING Tech Group's liability is limited to the amount paid for services. We are not liable for 
                indirect, incidental, or consequential damages.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, contact us at:{" "}
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

export default TermsOfServicePage;