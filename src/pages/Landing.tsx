import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/20 blur-3xl"></div>
      </div>

      <Header />

      <main id="home" className="relative">
        <Hero />

        <section id="platform" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The PalC AI Platform
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to run your NeoCloud on Kubernetes: from data to deployment with full observability.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Pipeline Orchestrator",
                  description: "Define DAGs for data processing, training, evaluation, and deployment using GitOps. Supports batch and streaming.",
                },
                {
                  title: "Model Lifecycle",
                  description: "Versioning, registry, approval gates, rollbacks. Integrates with MLflow, Kubeflow, and custom registries.",
                },
                {
                  title: "GPU Scheduler",
                  description: "Right-size GPU allocation with priority queues, preemption, and cost-aware placement across clusters.",
                },
                {
                  title: "Observability",
                  description: "Metrics, traces, and lineage across datasets, models, and services. SLA and drift alerts built-in.",
                },
                {
                  title: "Security & Governance",
                  description: "RBAC, audit logs, secrets management, image signing, and policy enforcement across environments.",
                },
                {
                  title: "Cost Management",
                  description: "Chargeback, cost attribution by project/model, and automated scaling policies to reduce spend.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-card">
                  <div className="text-foreground font-semibold">{feature.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Products</h2>
                <p className="mt-2 text-muted-foreground">Modular products that work together or standalone.</p>
              </div>
              <a href="#contact" className="hidden rounded-lg bg-foreground px-3.5 py-2 text-sm font-semibold text-background shadow-sm hover:bg-foreground/90 md:inline-flex">
                See a demo
              </a>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "PalC Orchestrator", description: "DAG engine for AI pipelines with approvals, retries, and lineage." },
                { title: "PalC ModelOps", description: "End-to-end model lifecycle with gates and policies." },
                { title: "PalC GPU Manager", description: "Optimize GPU allocation, queues, and costs across clusters." },
              ].map((product, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
                  <div className="text-foreground font-semibold">{product.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How it works</h2>
              <p className="mt-4 text-muted-foreground">A proven path to reliable AI in production.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { step: "01", title: "Connect", description: "Attach data sources, clusters, and registries. Auto-discover assets." },
                { step: "02", title: "Compose", description: "Define pipelines and policies as code with GitOps." },
                { step: "03", title: "Operate", description: "Observe, scale, and govern workloads with automation." },
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm text-muted-foreground">{item.step}</div>
                  <div className="mt-2 font-semibold text-foreground">{item.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="integrations" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Integrations</h2>
            <p className="mt-2 text-muted-foreground">Use with your stack. No rewrites required.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {["Kubernetes", "Argo", "Ray", "Kafka", "MLflow", "Prometheus"].map((integration, idx) => (
                <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center text-sm">
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pricing</h2>
              <p className="mt-4 text-muted-foreground">Simple tiers that scale with your NeoCloud.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  description: "Community edition for small teams.",
                  features: ["Single cluster", "Basic pipelines", "Community support"],
                  highlighted: false,
                },
                {
                  name: "Pro",
                  price: "$999",
                  period: "/mo",
                  description: "For growing teams running production AI.",
                  features: ["Multi-cluster", "ModelOps & GPU Manager", "SSO and RBAC", "Email support"],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "Complex, regulated, or hybrid environments.",
                  features: ["Private cloud/on-prem", "Advanced governance", "Dedicated support", "SLAs"],
                  highlighted: false,
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 ${
                    plan.highlighted
                      ? "border-primary/40 bg-gradient-to-b from-primary/10 to-white/5 ring-1 ring-inset ring-primary/30"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="text-foreground font-semibold">{plan.name}</div>
                  <div className="mt-2 text-3xl font-semibold text-foreground">
                    {plan.price}
                    {plan.period && <span className="text-base font-normal text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Talk to PalC AI</h2>
                <p className="mt-4 text-muted-foreground">
                  Tell us about your use case and infrastructure. We'll tailor a demo to your needs.
                </p>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground">
                  <div className="font-semibold text-foreground">Contact</div>
                  <p className="mt-2">Email: hello@palc.ai</p>
                  <p>Location: Remote • Global</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
