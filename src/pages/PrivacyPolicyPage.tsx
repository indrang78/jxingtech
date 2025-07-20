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
                <strong>Last updated:</strong> July 20, 2025
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                JXING Tech Sdn. Bhd. ("JXING Tech," "we," "us," or "our") is committed to protecting the privacy of our website visitors and clients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                By accessing or using our website and services, you signify your acceptance of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may collect personal information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, fill out a form, place an order, subscribe to the newsletter, respond to a survey, and in connection with other activities, services, features or resources we make available.
              </p>

              <h3 className="text-xl font-semibold text-oxford-blue mb-3">1.1. Personal Identification Information</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                This includes information that can be used to identify you directly or indirectly:
              </p>
              <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 pl-4">
                <li>• <strong>Contact Information:</strong> Name, email address, phone number, company name, and physical address.</li>
                <li>• <strong>Communication Data:</strong> Information you provide when you communicate with us via email, phone, chat, or contact forms.</li>
                <li>• <strong>Payment Information:</strong> Details required for processing payments for our services (e.g., billing address, payment card details). Note: We typically use third-party payment processors, and we do not store sensitive payment card details on our servers.</li>
              </ul>

              <h3 className="text-xl font-semibold text-oxford-blue mb-3">1.2. Non-Personal Identification Information</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may collect non-personal identification information about users whenever they interact with our website. This may include:
              </p>
              <ul className="text-muted-foreground mb-6 leading-relaxed space-y-2 pl-4">
                <li>• <strong>Browser Information:</strong> The browser name, the type of computer, and technical information about users' means of connection to our site (such as the operating system and the Internet service providers utilized).</li>
                <li>• <strong>Usage Data:</strong> Information about how you use our website, such as pages visited, time spent on pages, links clicked, and navigation paths.</li>
                <li>• <strong>IP Address:</strong> Your Internet Protocol (IP) address.</li>
              </ul>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">2. How We Collect Information</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We collect information through various methods:
              </p>
              <ul className="text-muted-foreground mb-6 leading-relaxed space-y-2 pl-4">
                <li>• <strong>Directly from You:</strong> When you fill out forms (e.g., contact form, playbook download form), subscribe to our newsletter, communicate with us directly, or sign up for our services.</li>
                <li>• <strong>Automatically:</strong> Through cookies, web beacons, and other tracking technologies as you navigate our website.</li>
                <li>• <strong>From Third Parties:</strong> We may receive information from third-party services integrated with our website (e.g., analytics providers like Google Analytics, booking tools like Cal.com, CRM systems).</li>
              </ul>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">3. How We Use the Collected Information</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                JXING Tech collects and uses your personal information for the following purposes:
              </p>
              <ul className="text-muted-foreground mb-6 leading-relaxed space-y-2 pl-4">
                <li>• <strong>To Provide and Maintain Services:</strong> To operate and deliver the services you request, including website development, marketing campaigns, and AI integrations.</li>
                <li>• <strong>To Process Transactions:</strong> To process payments for services and manage your subscription.</li>
                <li>• <strong>To Improve Customer Service:</strong> Your information helps us to more effectively respond to your customer service requests and support needs.</li>
                <li>• <strong>To Personalize User Experience:</strong> We may use information in the aggregate to understand how our users as a group use the services and resources provided on our site.</li>
                <li>• <strong>To Send Periodic Emails:</strong> We may use the email address to send user information and updates pertaining to their order or service. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
                <li>• <strong>For Marketing and Promotion:</strong> To send you marketing communications, newsletters, and promotional offers that we believe may be of interest to you, based on your consent where required.</li>
                <li>• <strong>To Improve Our Website:</strong> We may use feedback you provide to improve our products and services.</li>
                <li>• <strong>For Security:</strong> To protect our website and services from fraud and abuse.</li>
              </ul>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">4. How We Protect Your Information</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">5. Sharing Your Personal Information</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may use third-party service providers to help us operate our business and the website or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Examples of third parties we may share data with include:
              </p>
              <ul className="text-muted-foreground mb-6 leading-relaxed space-y-2 pl-4">
                <li>• Payment Processors: For handling transactions.</li>
                <li>• Analytics Providers: Such as Google Analytics, to understand website usage.</li>
                <li>• CRM Systems: For managing customer relationships.</li>
                <li>• Email Marketing Platforms: For sending newsletters and promotional emails.</li>
                <li>• Cloud Hosting Providers: For storing data.</li>
                <li>• Legal & Regulatory Authorities: When required by law or to protect our rights.</li>
              </ul>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">6. Cookies and Other Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our website may use "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We use cookies for:
              </p>
              <ul className="text-muted-foreground mb-6 leading-relaxed space-y-2 pl-4">
                <li>• Website functionality (e.g., remembering preferences).</li>
                <li>• Analytics (e.g., tracking website traffic).</li>
                <li>• Marketing (e.g., personalizing ads).</li>
              </ul>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">7. Your Data Protection Rights</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Depending on your location and applicable laws, you may have the following rights regarding your personal data:
              </p>
              <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 pl-4">
                <li>• <strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li>• <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li>• <strong>Right to Erasure:</strong> Request deletion of your personal data under certain conditions.</li>
                <li>• <strong>Right to Restrict Processing:</strong> Request restriction of processing your data under certain conditions.</li>
                <li>• <strong>Right to Object to Processing:</strong> Object to our processing of your personal data under certain conditions.</li>
                <li>• <strong>Right to Data Portability:</strong> Request transfer of your data to another organization or directly to you, under certain conditions.</li>
                <li>• <strong>Right to Withdraw Consent:</strong> If we rely on your consent to process your personal data, you have the right to withdraw that consent at any time.</li>
              </ul>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To exercise any of these rights, please contact us using the details provided below. We will respond to your request within a reasonable timeframe as required by law.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                JXING Tech has the discretion to update this Privacy Policy at any time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications.
              </p>

              <h2 className="text-2xl font-bold text-oxford-blue mb-4">9. Contacting Us</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              </p>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p><strong>JXING Tech Sdn. Bhd.</strong></p>
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

export default PrivacyPolicyPage;