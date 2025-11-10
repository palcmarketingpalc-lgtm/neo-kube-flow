import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-8">Disclaimer</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">General Information</h2>
            <p>
              The information provided by PalC AI on our website is for general informational purposes only. 
              All information is provided in good faith, however we make no representation or warranty of any kind, 
              express or implied, regarding the accuracy, adequacy, validity, reliability, availability, 
              or completeness of any information on the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">No Professional Advice</h2>
            <p>
              The content on our website does not constitute professional advice. Before making any decisions 
              based on the information provided, we recommend consulting with qualified professionals in the 
              relevant field.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">External Links</h2>
            <p>
              Our website may contain links to external websites that are not provided or maintained by PalC AI. 
              We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on 
              these external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p>
              In no event shall PalC AI, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your 
              access to or use of or inability to access or use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
            <p>
              While we strive to provide uninterrupted service, we do not guarantee that our services will be 
              available at all times. Service interruptions may occur due to maintenance, updates, or unforeseen 
              technical issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Disclaimer</h2>
            <p>
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately 
              upon posting to the website.
            </p>
          </section>

          <p className="text-sm pt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
