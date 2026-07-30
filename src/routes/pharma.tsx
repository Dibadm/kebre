import { createFileRoute } from "@tanstack/react-router";
import { Pill, Truck, ShieldCheck, ClipboardList, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pharma")({
  head: () => ({
    meta: [
      { title: "Pharma & Medical Import — Kebre Ilike PLC" },
      { name: "description", content: "Kebre Ilike PLC imports and distributes pharmaceutical products and medical consumables across Ethiopia with full regulatory compliance." },
      { property: "og:title", content: "Pharma & Medical Import — Kebre Ilike PLC" },
      { property: "og:description", content: "Reliable pharmaceutical and medical supply importing for Ethiopia." },
    ],
  }),
  component: PharmaPage,
});

function PharmaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pharmaceuticals</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
          Pharma & Medical Supply Import
        </h1>
        <p className="mt-3 text-muted-foreground">
          Kebre Ilike PLC imports and distributes a comprehensive range of pharmaceutical
          products and medical consumables. We ensure reliable supply chains, regulatory
          compliance, and timely delivery to healthcare providers across Ethiopia.
        </p>
      </header>

      {/* Services */}
      <div className="mb-20">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">What We Supply</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Pill, t: "Pharmaceuticals", d: "Generic and branded medicines sourced from certified international manufacturers." },
            { Icon: ShieldCheck, t: "Medical Consumables", d: "Gloves, syringes, bandages, and other essential medical disposables." },
            { Icon: Truck, t: "Logistics & Distribution", d: "End-to-end import, customs clearance, and distribution to hospitals and clinics." },
            { Icon: ClipboardList, t: "Regulatory Compliance", d: "Full adherence to Ethiopian pharmaceutical regulations and quality standards." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why choose us */}
      <div className="mb-20">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Why Partner With Us</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { t: "Reliable Supply", d: "Consistent availability of essential medicines and medical supplies, even in challenging market conditions." },
            { t: "Quality Assured", d: "All products are sourced from WHO-GMP certified manufacturers and meet Ethiopian regulatory standards." },
            { t: "Local Expertise", d: "Deep understanding of Ethiopian import regulations, customs procedures, and healthcare distribution networks." },
          ].map((item) => (
            <div key={item.t} className="rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold">{item.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-[oklch(0.97_0.01_150)] p-10 text-center md:p-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Become a Partner</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We work with hospitals, clinics, pharmacies, and international suppliers. Reach out
          to discuss how we can support your pharmaceutical and medical supply needs.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
