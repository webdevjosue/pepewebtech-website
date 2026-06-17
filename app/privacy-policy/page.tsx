import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PepeWebTech Privacy Policy. How we collect, use, and protect your data. AI Employee services, website design, and consulting.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | PepeWebTech",
    description:
      "How PepeWebTech collects, uses, and protects your data.",
    url: "https://pepewebtech.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Legal
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: June 17, 2026
          </p>

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Who We Are
              </h2>
              <p>
                PepeWebTech is operated by Josue Zazueta, a sole proprietor
                based in Temecula, California. We provide AI Employee services
                (chatbots, phone agents, follow-up systems), website design,
                and technology consulting to small businesses.
              </p>
              <p className="mt-2">
                Contact us at{" "}
                <a
                  href="mailto:info@pepewebtech.com"
                  className="text-primary hover:underline"
                >
                  info@pepewebtech.com
                </a>{" "}
                with any privacy questions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">We collect:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>
                  <strong className="text-foreground">
                    Contact information
                  </strong>
                  {" "}— name, email, phone number, and business details you
                  provide via our contact form, email, or phone.
                </li>
                <li>
                  <strong className="text-foreground">
                    Service data
                  </strong>
                  {" "}— business information, FAQs, scripts, and content you
                  provide so we can train and configure your AI Employee.
                </li>
                <li>
                  <strong className="text-foreground">
                    Call and chat data
                  </strong>
                  {" "}— transcripts and recordings from calls/chats handled by
                  your AI Employee (you own this data; we process it on your
                  behalf).
                </li>
                <li>
                  <strong className="text-foreground">
                    Usage analytics
                  </strong>
                  {" "}— anonymous website traffic data via standard web
                  analytics tools.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="space-y-2 ml-6 list-disc">
                <li>To provide and maintain your AI Employee services</li>
                <li>To design, build, and deploy your website</li>
                <li>To communicate with you about your project or account</li>
                <li>To improve our services and website</li>
                <li>
                  To comply with legal obligations and protect against fraud
                </li>
              </ul>
              <p className="mt-3">
                We do <strong className="text-foreground">not</strong> sell,
                rent, or trade your data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. AI &amp; Data Processing
              </h2>
              <p>
                Your AI Employee processes customer calls and chats using
                AI models. When you provide business information for
                training (FAQs, pricing, policies), that data is used
                solely to power your AI Employee&apos;s responses.
              </p>
              <p className="mt-2">
                Call recordings, transcripts, and chat logs are stored
                securely and are accessible only to you (the account owner)
                and PepeWebTech for service maintenance. You may delete
                this data at any time by requesting it in writing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Third-Party Services
              </h2>
              <p className="mb-3">
                We use the following third-party services to operate. Each
                has its own privacy policy:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>
                  <strong className="text-foreground">
                    Telephony / SMS
                  </strong>
                  {" "}— Call routing, SMS follow-up (e.g., Twilio, Vapi)
                </li>
                <li>
                  <strong className="text-foreground">
                    AI Model Providers
                  </strong>
                  {" "}— LLM inference for chatbot and phone agent responses
                </li>
                <li>
                  <strong className="text-foreground">
                    Payment Processing
                  </strong>
                  {" "}— Stripe for billing
                </li>
                <li>
                  <strong className="text-foreground">
                    Hosting
                  </strong>
                  {" "}— Vercel for website hosting and deployment
                </li>
              </ul>
              <p className="mt-3">
                We share only the minimum data necessary for these services
                to function.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Data Retention
              </h2>
              <p>
                We retain your data for as long as you are an active
                client. After cancellation, we delete service data (call
                logs, transcripts, training content) within 30 days unless
                you request sooner. Anonymous analytics data may be kept
                indefinitely.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Request a copy of your data</li>
                <li>Request deletion of your data</li>
                <li>Correct inaccurate information</li>
                <li>Opt out of marketing communications</li>
                <li>
                  If you are a California resident, you have additional
                  rights under the CCPA
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email{" "}
                <a
                  href="mailto:info@pepewebtech.com"
                  className="text-primary hover:underline"
                >
                  info@pepewebtech.com
                </a>
                . We respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Cookies
              </h2>
              <p>
                Our website uses essential cookies for basic functionality.
                We do not use advertising or tracking cookies. Analytics
                cookies, if used, are anonymous and do not identify
                individuals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                9. Security
              </h2>
              <p>
                We take reasonable measures to protect your data including
                encrypted connections (HTTPS), access controls, and secure
                third-party infrastructure. However, no method of
                transmission or storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We
                will notify active clients by email of any material
                changes. The &quot;Last updated&quot; date at the top of
                this page reflects the most recent revision.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm">
                PepeWebTech is a service of Josue Zazueta, sole proprietor.
                Based in Temecula, California.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
