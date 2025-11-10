import logo from "@/assets/palc-logo.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-auto items-center justify-center rounded-md bg-white/5 px-1.5 ring-1 ring-inset ring-white/10">
              <img src={logo} alt="PalC AI" className="h-5 w-auto" />
            </span>
            <span className="text-sm font-semibold">PalC AI</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © {currentYear} PalC AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
