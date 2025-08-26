import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Cal, { getCalApi } from "@calcom/embed-react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Thurai0925Page = () => {
  const [socialCountdown, setSocialCountdown] = useState<CountdownState>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hostingCountdown, setHostingCountdown] = useState<CountdownState>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isAnnualPlan, setIsAnnualPlan] = useState(false);
  const [selectedServices, setSelectedServices] = useState({
    maintenance: true,
    social: true,
    ads: true
  });

  const prices = {
    monthly: { maintenance: 308, social: 888, ads: 888 },
    annual: { maintenance: 199, social: 588, ads: 588 }
  };

  const calculateCountdown = (targetDate: Date): CountdownState => {
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const socialTarget = new Date('2025-08-27T23:59:59');
    const hostingTarget = new Date('2025-08-31T23:59:59');

    const interval = setInterval(() => {
      setSocialCountdown(calculateCountdown(socialTarget));
      setHostingCountdown(calculateCountdown(hostingTarget));
    }, 1000);

    // Initialize Cal.com
    (async function () {
      const cal = await getCalApi({"namespace":"book-a-free-consult"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();

    return () => clearInterval(interval);
  }, []);

  const calculateTotal = () => {
    const plan = isAnnualPlan ? 'annual' : 'monthly';
    let total = 0;
    
    Object.entries(selectedServices).forEach(([service, isSelected]) => {
      if (isSelected) {
        total += prices[plan][service as keyof typeof prices.monthly];
      }
    });

    return total;
  };

  const formatCountdown = (countdown: CountdownState) => {
    return `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`;
  };

  const toggleService = (service: keyof typeof selectedServices) => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">A Proposal for Thurai Dental KLINIC</h1>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="https://wtuwfzzgsueahgmjfvur.supabase.co/storage/v1/object/public/images/logo/JXING%20BLUE.png" 
              alt="JXING TECH Logo" 
              className="w-48 mb-2"
            />
            <p className="text-lg text-muted-foreground">
              Presented by <span className="font-semibold text-secondary">JXING TECH</span>
            </p>
          </div>
        </header>

        {/* Challenge Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
            The Current Challenge: Action Required
          </h2>
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              We've identified two critical deadlines for your practice's online presence. A seamless transition to our managed services is crucial to avoid any lapse in your online visibility, patient trust, and ability to attract new leads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-l-yellow-500">
              <h3 className="font-bold text-lg text-foreground mb-2">Social Media Activity Ends</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your last scheduled post is on August 27, 2025. An inactive profile can quickly impact patient trust.
              </p>
              <div className="text-3xl font-bold text-yellow-600 tabular-nums">
                {formatCountdown(socialCountdown)}
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-red-500">
              <h3 className="font-bold text-lg text-foreground mb-2">Website Hosting Expires</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your website will go offline after August 31, 2025, making it inaccessible to current and potential patients.
              </p>
              <div className="text-3xl font-bold text-red-600 tabular-nums">
                {formatCountdown(hostingCountdown)}
              </div>
            </Card>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
            Our Comprehensive Solution
          </h2>
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              We recommend an integrated approach to secure your online foundation and drive growth. Each service is designed to achieve a specific, critical objective for your practice.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <Card className="p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Website Maintenance</h3>
                  <p className="text-sm font-semibold text-secondary">Objective: Stay Online & Secure</p>
                </div>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  WordPress, theme & plugin updates
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  Daily backups for peace of mind
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  Security & uptime monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  Basic support & hosting included
                </li>
              </ul>
            </Card>

            <Card className="p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Social Media Management</h3>
                  <p className="text-sm font-semibold text-secondary">Objective: Build Trust</p>
                </div>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  12-14 engaging posts per month
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  Strategic content planning
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  Competitor analysis
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  Monthly performance reports
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  <span className="font-semibold">Note:</span> Price is per platform. RM 100 fee for multi-platform posting.
                </li>
              </ul>
            </Card>

            <Card className="p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-secondary p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Paid Ads Management</h3>
                  <p className="text-sm font-semibold text-secondary">Objective: Get Leads</p>
                </div>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  4 strategic campaigns per month
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  In-depth competitor analysis
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  Detailed monthly reports
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✔</span> 
                  <span className="font-semibold">Note:</span> Ad spend is a separate cost.
                </li>
              </ul>
            </Card>
          </div>
          
          <Card className="mt-8 p-6 bg-muted">
            <h4 className="font-bold text-lg text-foreground text-center mb-4">
              Proposed Paid Ads Strategy
            </h4>
            <p className="text-center text-muted-foreground mb-6">
              We propose a 2-month experimental phase to identify the highest-performing ad strategy, ensuring your budget is used effectively for long-term lead generation.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-secondary h-24 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-secondary-foreground font-bold">RM 400</span>
                </div>
                <p className="text-sm font-semibold">Experiment Month 1</p>
              </div>
              <div className="text-center">
                <div className="bg-primary h-32 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-primary-foreground font-bold">RM 1,000</span>
                </div>
                <p className="text-sm font-semibold">Experiment Month 2</p>
              </div>
              <div className="text-center">
                <div className="bg-accent h-36 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-accent-foreground font-bold">RM 1,200</span>
                </div>
                <p className="text-sm font-semibold">Ongoing Recommended</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Pricing Section */}
        <Card className="p-6 sm:p-8 bg-muted">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-2">
            Your Decision: Pricing & Our Recommendation
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            We recommend all three services for a robust digital presence. Your choice is between two pricing plans.
          </p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="font-medium text-foreground">Month-to-Month</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAnnualPlan(!isAnnualPlan)}
              className={isAnnualPlan ? 'bg-secondary text-secondary-foreground' : ''}
            >
              {isAnnualPlan ? 'Annual' : 'Monthly'}
            </Button>
            <span className="font-medium text-secondary">Annual Commitment (Save over 30%!)</span>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {[
                { key: 'maintenance', title: 'Website Maintenance', desc: 'Essential for security and online presence.' },
                { key: 'social', title: 'Social Media Management', desc: 'Builds trust and community.' },
                { key: 'ads', title: 'Paid Ads Management', desc: 'Directly generates new patient leads.' }
              ].map(({ key, title, desc }) => (
                <Card 
                  key={key}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedServices[key as keyof typeof selectedServices] 
                      ? 'bg-accent/10 border-accent' 
                      : ''
                  }`}
                  onClick={() => toggleService(key as keyof typeof selectedServices)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-semibold text-primary mr-4">
                        RM {prices[isAnnualPlan ? 'annual' : 'monthly'][key as keyof typeof prices.monthly].toFixed(2)}
                      </span>
                      <input 
                        type="checkbox" 
                        checked={selectedServices[key as keyof typeof selectedServices]}
                        onChange={() => toggleService(key as keyof typeof selectedServices)}
                        className="h-5 w-5 rounded text-accent focus:ring-accent"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">Total Monthly Cost:</span>
                <span className="text-3xl font-bold text-primary">
                  RM {calculateTotal().toFixed(2)}
                </span>
              </div>
              <p className="text-right text-sm text-muted-foreground mt-1">
                *All prices are exclusive of Government Tax.
              </p>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-primary mb-4">Next Steps</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
            We would be delighted to schedule a brief call to discuss your specific goals and finalize the service plan. We are ready to ensure a smooth transition and begin strengthening your digital presence immediately.
          </p>
          <div className="max-w-xl mx-auto mt-4" style={{ height: '600px', overflow: 'hidden' }}>
            <Cal 
              namespace="book-a-free-consult"
              calLink="jxingtech/book-a-free-consult"
              style={{width:"100%",height:"100%",overflow:"scroll"}}
              config={{"layout":"month_view"}}
            />
          </div>
        </footer>

      </div>

    </div>
  );
};

export default Thurai0925Page;