import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, suffix = "", decimals = 0 }: { end: number; suffix?: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [end]);
  
  return <>{count.toFixed(decimals)}{suffix}</>;
};

export const Hero = () => {
  return (
    <section className="overflow-hidden pb-16 pt-20 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-white/10">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent"></span>
              NeoCloud Orchestration on Kubernetes
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Orchestrate your NeoCloud across data, models and GPUs — at scale
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              PalC AI unifies pipeline automation, model lifecycle, and GPU operations on your Kubernetes platform. Ship reliable AI faster with governance, cost controls, and enterprise-grade security.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background shadow-sm hover:bg-foreground/90 transition-colors">
                Request demo
              </a>
              <a href="#platform" className="rounded-lg px-4 py-2.5 text-sm font-semibold text-foreground ring-1 ring-inset ring-white/20 hover:bg-white/10 transition-colors">
                Explore platform
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 text-xs text-muted-foreground sm:grid-cols-4">
              <div>
                <div className="text-foreground text-xl font-semibold"><AnimatedCounter end={10} suffix="x" /></div>
                Faster releases
              </div>
              <div>
                <div className="text-foreground text-xl font-semibold"><AnimatedCounter end={60} suffix="%" /></div>
                Lower GPU cost
              </div>
              <div>
                <div className="text-foreground text-xl font-semibold"><AnimatedCounter end={99.9} suffix="%" decimals={1} /></div>
                Uptime SLAs
              </div>
              <div>
                <div className="text-foreground text-xl font-semibold">SOC2</div>
                Enterprise security
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="backdrop-blur-lg bg-white/[0.06] rounded-2xl border border-white/10 p-4 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
                alt="Platform preview"
                className="rounded-xl object-cover ring-1 ring-white/10"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
