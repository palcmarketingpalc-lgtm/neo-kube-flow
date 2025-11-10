import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/palc-logo.svg";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
              <img src={logo} alt="PalC AI" className="h-6 w-auto" />
            </span>
            <span className="text-base font-semibold tracking-tight">PalC AI</span>
          </a>

          <nav className="hidden gap-8 text-sm/6 text-muted-foreground md:flex">
            <a href="#platform" className="hover:text-foreground transition-colors">Platform</a>
            <a href="#products" className="hover:text-foreground transition-colors">Products</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#integrations" className="hover:text-foreground transition-colors">Integrations</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#contact" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Talk to us
            </a>
            <a href="#contact" className="rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background shadow-sm hover:bg-foreground/90 transition-colors">
              Request demo
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-card/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-2 text-sm">
            <a href="#platform" className="py-2" onClick={() => setMobileMenuOpen(false)}>Platform</a>
            <a href="#products" className="py-2" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#how" className="py-2" onClick={() => setMobileMenuOpen(false)}>How it works</a>
            <a href="#integrations" className="py-2" onClick={() => setMobileMenuOpen(false)}>Integrations</a>
            <a href="#pricing" className="py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#contact" className="py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background shadow-sm" onClick={() => setMobileMenuOpen(false)}>
              Request demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
