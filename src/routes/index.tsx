import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Coffee, Globe, Shield, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-dubai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kebre Ilike PLC — Ethiopian Coffee Export & Global Trade" },
      {
        name: "description",
        content:
          "Kebre Ilike PLC exports specialty Ethiopian coffee from the Yayo Biosphere Reserve and Jimma region. Fully traceable, sustainably grown, and expertly processed.",
      },
      { property: "og:title", content: "Kebre Ilike PLC — Ethiopian Coffee Export & Global Trade" },
      {
        property: "og:description",
        content: "Specialty coffee exporter based in southwestern Ethiopia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Ethiopian coffee landscape"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 md:pt-40 md:pb-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Ethiopian Coffee & Global Trade,{" "}
              <span className="text-primary">Rooted in Quality</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
              Kebre Ilike PLC exports specialty coffee from the UNESCO-protected Yayo Biosphere
              Reserve and Jimma region. Direct farm-to-cup traceability, sustainable agroforestry,
              and fair pricing for roasters worldwide.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/coffee"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
              >
                Explore Our Coffee <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-6 text-center text-white">
            {[
              { n: "100+", l: "Export Partners" },
              { n: "Jimma", l: "Origin & Terroir" },
              { n: "Dual", l: "Business Arms" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold sm:text-5xl">{s.n}</div>
                <div className="mt-1 text-xs text-white/70 sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">Why Kebre Ilike</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Built on transparency, sustainability, and deep roots in Ethiopian agriculture and trade.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              Icon: Globe,
              t: "Global Reach",
              d: "Exporting to Europe, North America, and Asia with full logistics support through ESL and FOB Djibouti / FCA Addis Ababa.",
            },
            {
              Icon: Shield,
              t: "Full Traceability",
              d: "Direct farm-to-cup traceability with information on every coffee lot available to our roasting partners.",
            },
            {
              Icon: Coffee,
              t: "Sustainable Origins",
              d: "Shade-grown coffee from the UNESCO-protected Yayo Biosphere Reserve, preserving native forest canopy.",
            },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[oklch(0.97_0.01_150)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">How We Work</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              From the highlands of southwestern Ethiopia to your roastery.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Source", d: "We partner directly with farmers and washing stations in the Yayo Biosphere Reserve and Jimma region." },
              { n: "02", t: "Process", d: "Using controlled washed and natural micro-lot processing with dedicated drying facilities to ensure quality." },
              { n: "03", t: "Export", d: "We handle logistics, customs compliance, and port clearance, delivering to Europe, North America, and Asia." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="font-display text-4xl font-bold text-primary">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-3xl p-10 text-white shadow-[var(--shadow-elegant)] md:p-16"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to partner with us?
            </h2>
            <p className="mt-4 text-white/90">
              Whether you are a specialty roaster looking for traceable Ethiopian coffee or a
              healthcare partner seeking reliable pharmaceutical supply, we are ready to work with you.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
