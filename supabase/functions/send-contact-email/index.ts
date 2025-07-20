import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: string;
  message: string;
  recaptchaToken: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = Deno.env.get("RECAPTCHA_SECRET_KEY");
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not found in environment variables");
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    console.log("reCAPTCHA verification response:", data);
    
    return data.success === true;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, inquiryType, message, recaptchaToken }: ContactEmailRequest = await req.json();

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA token is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "JXING Tech <noreply@jxingtech.com>",
      to: [email],
      subject: "Thank you for contacting JXING Tech!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #003F88, #007DEB); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">JXING Tech</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Digital Growth Solutions</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #0A1640; margin: 0 0 20px 0; font-size: 24px;">Thank you for reaching out, ${name}!</h2>
            
            <p style="color: #4A4A4A; line-height: 1.6; margin-bottom: 20px;">
              We've received your <strong>${inquiryType.toLowerCase()}</strong> and our team will review it carefully. Here's what happens next:
            </p>
            
            <div style="background: #EDF3FB; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #003F88; margin: 0 0 15px 0; font-size: 18px;">Your Message Details:</h3>
              <p style="margin: 5px 0; color: #4A4A4A;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #4A4A4A;"><strong>Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 5px 0; color: #4A4A4A;"><strong>Phone:</strong> ${phone}</p>` : ''}
              ${company ? `<p style="margin: 5px 0; color: #4A4A4A;"><strong>Company:</strong> ${company}</p>` : ''}
              <p style="margin: 5px 0; color: #4A4A4A;"><strong>Inquiry Type:</strong> ${inquiryType}</p>
              <p style="margin: 15px 0 5px 0; color: #4A4A4A;"><strong>Message:</strong></p>
              <p style="margin: 5px 0; color: #4A4A4A; font-style: italic; background: white; padding: 15px; border-radius: 6px;">${message}</p>
            </div>
            
            <div style="background: #F0F9FF; border-left: 4px solid #007DEB; padding: 20px; margin: 25px 0;">
              <h3 style="color: #003F88; margin: 0 0 10px 0; font-size: 16px;">⏰ What's Next?</h3>
              <ul style="color: #4A4A4A; margin: 0; padding-left: 20px;">
                <li>We'll review your inquiry within 24 hours</li>
                <li>A specialist will contact you to discuss your needs</li>
                <li>We'll provide personalized recommendations</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://cal.com/jxingtech" style="background: #FFC759; color: #0A1640; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                📅 Book a Free Consultation
              </a>
            </div>
            
            <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; margin-top: 30px;">
              <p style="color: #6B7280; font-size: 14px; margin: 0;">
                <strong>Need immediate assistance?</strong><br>
                📧 Email: hello@jxingtech.com<br>
                📱 WhatsApp: +60 12-345 6789<br>
                🕒 Business Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM (GMT+8)
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px 0; color: #6B7280; font-size: 12px;">
            © 2024 JXING Tech Group. All rights reserved.
          </div>
        </div>
      `,
    });

    // Send notification email to JXING Tech team
    const teamEmailResponse = await resend.emails.send({
      from: "Contact Form <noreply@jxingtech.com>",
      to: ["hello@jxingtech.com"],
      subject: `New ${inquiryType} from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #0A1640; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">JXING Tech Website</p>
          </div>
          
          <div style="background: white; border: 1px solid #E5E7EB; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #0A1640; margin: 0 0 15px 0; font-size: 20px;">Contact Information</h2>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
              ${company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${company}</p>` : ''}
              <p style="margin: 5px 0;"><strong>Inquiry Type:</strong> <span style="background: #007DEB; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${inquiryType}</span></p>
            </div>
            
            <div style="background: #FFFBEB; border: 1px solid #FCD34D; padding: 20px; border-radius: 8px;">
              <h3 style="color: #0A1640; margin: 0 0 10px 0;">Message:</h3>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0; color: #6B7280; font-size: 14px;">
                Submitted on ${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })} (Malaysia Time)
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { userEmailResponse, teamEmailResponse });

    return new Response(JSON.stringify({ 
      success: true, 
      userEmail: userEmailResponse,
      teamEmail: teamEmailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);