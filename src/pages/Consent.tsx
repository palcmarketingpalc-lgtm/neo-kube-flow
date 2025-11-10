import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Consent() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-8">Consent</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Consent</h2>
            <p>
              By using our website and services, you consent to our Privacy Policy and agree to its terms. 
              We are committed to protecting your privacy and ensuring transparency in how we handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Collection Consent</h2>
            <p>
              When you provide information through our contact forms or interact with our platform, 
              you consent to the collection and processing of this information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Communication Consent</h2>
            <p>
              By submitting your contact information, you consent to receive communications from PalC AI 
              regarding our products, services, and updates. You may opt out at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance user experience. 
              By continuing to use our website, you consent to the use of these technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Withdrawing Consent</h2>
            <p>
              You have the right to withdraw your consent at any time. To do so, please contact us at 
              hello@palc.ai with your request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to Consent</h2>
            <p>
              We may update this consent notice from time to time. We encourage you to review this 
              page periodically for any changes.
            </p>
          </section>

          <p className="text-sm pt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
