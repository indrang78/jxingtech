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
                <strong>Last updated:</strong> July 20, 2025
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Welcome to JXING Tech Group! These Terms of Service ("Terms") govern your access to and use of our website, services, and products provided by JXING Tech Sdn. Bhd. ("JXING Tech," "we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                JXING Tech Group provides growth-driven digital solutions, including but not limited to website design and development, digital marketing, SEO, content creation, automation, and AI integration, primarily for small to mid-sized businesses (SMEs) on a subscription-based model.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">2. Services</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We offer various digital services and packages as described on our website. The specific scope of services, deliverables, and pricing will be detailed in a separate Service Agreement or Proposal, which, once executed, will form an integral part of your agreement with JXING Tech.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>3.1. Subscription Fees:</strong> All fees for our subscription services are billed in advance on a monthly or annual basis, as agreed upon in your Service Agreement.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>3.2. Payment Method:</strong> You authorize JXING Tech to charge your designated payment method for all applicable fees. You are responsible for ensuring that your payment information is accurate and up-to-date.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>3.3. Late Payments:</strong> If any payment is not received by the due date, JXING Tech reserves the right to suspend or terminate your access to the services until all outstanding amounts are paid in full.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">4. Cancellation and Refund Policy</h2>
              <h3 className="text-xl font-semibold text-oxford-blue mb-3">4.1. 12-Month Contract Plans:</h3>
              <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 pl-4">
                <li>• If you have signed up for a 12-month contract plan, you cannot cancel the plan before the completion of the 12-month contract period.</li>
                <li>• You are obligated to fulfill all monthly payments for the entire 12-month duration.</li>
                <li>• <strong>Default on Payment (12-Month Plan):</strong> In the event that you disable your payment card, prevent further billing, or otherwise default on payments for a 12-month contract plan prior to its completion, JXING Tech reserves the right to immediately suspend services and refuse the transfer of any website, content, domain, accounts, or any other digital assets created or managed by JXING Tech on your behalf. All outstanding amounts for the full 12-month term will remain due and payable.</li>
                <li>• <strong>Cancellation After 12 Months:</strong> Cancellation of a 12-month contract plan is perfectly acceptable and can be initiated after the full 12-month contract period has been completed. To cancel, you must provide written notice to JXING Tech at least thirty (30) days prior to your desired cancellation date.</li>
              </ul>

              <h3 className="text-xl font-semibold text-oxford-blue mb-3">4.2. Month-to-Month Contract Plans:</h3>
              <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 pl-4">
                <li>• If you have signed up for a month-to-month contract plan, you may cancel at any time by providing written notice to JXING Tech at least thirty (30) days prior to your desired cancellation date.</li>
                <li>• A cancellation fee of RM 1,500 will be applied to all month-to-month contract cancellations. This fee will be charged upon receipt of your cancellation notice.</li>
              </ul>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>4.3. Refunds:</strong> All fees paid are non-refundable, except as explicitly stated otherwise in your Service Agreement or as required by applicable law.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>5.1. Our IP:</strong> All intellectual property rights in and to the JXING Tech website, services, and any proprietary software, tools, or methodologies used to provide the services are owned by JXING Tech.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>5.2. Client IP:</strong> Any content, website designs, or digital assets specifically created by JXING Tech for you as part of the paid services will, upon full payment for such services, become your intellectual property. However, JXING Tech retains the right to use such work for its portfolio and marketing purposes.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>5.3. Licenses:</strong> You grant JXING Tech a non-exclusive, royalty-free license to use your logos, trademarks, and content as necessary to provide the services and for our marketing and portfolio.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To the maximum extent permitted by law, JXING Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services; or (c) unauthorized access, use, or alteration of your transmissions or content.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">7. Indemnification</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                You agree to indemnify and hold harmless JXING Tech, its affiliates, officers, agents, and employees from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the services or your violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">8. Governing Law and Dispute Resolution</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Malaysia, without regard to its conflict of law principles. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Malaysia.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We reserve the right to modify these Terms at any time. If we make changes, we will notify you by revising the "Last Updated" date at the top of these Terms and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you an email notification). Your continued use of the services after any such changes constitutes your acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p><strong>Email:</strong> <a href="mailto:hello@jxingtech.my" className="text-azure hover:underline">hello@jxingtech.my</a></p>
                <p><strong>Phone/WhatsApp:</strong> <a href="tel:+60102882827" className="text-azure hover:underline">+60102882827</a></p>
                <div className="mt-3">
                  <p><strong>Address:</strong></p>
                  <p className="ml-4">
                    Unit 37-2, Level 37, Q Sentral,<br />
                    No. 2A, Jalan Stesen Sentral 2,<br />
                    Kuala Lumpur Sentral,<br />
                    50470 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;