import logo from "@/assets/palc-logo.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img src={logo} alt="PalC AI" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-sm">
              PalC AI delivers enterprise-grade NeoCloud orchestration for Kubernetes. 
              Automate data pipelines, manage model lifecycles, and optimize GPU workloads 
              from development to production with built-in governance and security.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="/privacy" className="block hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="/consent" className="block hover:text-foreground transition-colors">Consent</a>
              <a href="/disclaimer" className="block hover:text-foreground transition-colors">Disclaimer</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: hello@palc.ai</p>
              <p>Location: Remote • Global</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-muted-foreground">
          © {currentYear} PalC AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
