import { Link } from "react-router-dom";
import logo from "@/assets/palc-logo.svg";

export const MinimalHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PalC AI" className="h-10 w-auto" />
          </Link>

          {/* Right-side buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Talk to us
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background shadow-sm hover:bg-foreground/90 transition-colors"
            >
              Request demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
