import { createFileRoute } from "@tanstack/react-router";
import coffeeImg from "@/assets/agent.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kebre Ilike PLC" },
      { name: "description", content: "Kebre Ilike PLC is an Ethiopian enterprise exporting specialty coffee and importing pharmaceutical supplies." },
      { property: "og:title", content: "About — Kebre Ilike PLC" },
      { property: "og:description", content: "Learn about our origins in Jimma, our commitment to sustainable coffee farming, and our dual business model." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Rooted in Ethiopian Soil, Global in Vision
          </h1>
          <p className="mt-5 text-muted-foreground">
            Kebre Ilike PLC was founded with a deep respect for Ethiopia&apos;s coffee heritage and a
            vision to connect it to the world. Headquartered in the coffee-rich landscapes of
            southwestern Ethiopia, we operate at the intersection of agricultural excellence and
            international trade.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our primary focus is the export of specialty-grade Arabica coffee from the Jimma region
            and the UNESCO-protected Yayo Biosphere Reserve. Alongside this, we import and distribute
            pharmaceutical and medical supplies, ensuring Ethiopia has access to essential healthcare
            products.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Specialty Arabica coffee from Yayo Biosphere Reserve and Jimma",
              "Direct farm-to-cup traceability with transparent sourcing",
              "Sustainable agroforestry and shade-grown farming practices",
              "Licensed for international trade under Ethiopian Coffee & Tea Authority",
              "Fully VAT-compliant with customs and logistics expertise",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src={coffeeImg}
            alt="Kebre Ilike coffee operations"
            loading="lazy"
            width={800}
            height={1000}
            className="rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-elegant)] sm:block">
            <div className="font-display text-3xl font-bold">100+</div>
            <div className="text-xs opacity-90">Export Partners Worldwide</div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {[
          { n: "01", t: "Source", d: "We partner directly with farmers and washing stations in the Yayo Biosphere Reserve and Jimma region." },
          { n: "02", t: "Process", d: "Using controlled washed and natural micro-lot processing with dedicated drying facilities to ensure quality." },
          { n: "03", t: "Export", d: "We handle logistics, customs compliance, and port clearance, delivering to Europe, North America, and Asia." },
        ].map((s) => (
          <div key={s.n} className="rounded-2xl border border-border p-8">
            <div className="font-display text-4xl font-bold text-primary">{s.n}</div>
            <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
