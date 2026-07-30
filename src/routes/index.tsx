import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Coffee, Pill, Globe, Shield, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-dubai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kebre Ilike PLC — Ethiopian Coffee Export & Global Trade" },
      {
        name: "description",
        content:
          "Kebre Ilike PLC exports specialty Ethiopian coffee and imports pharmaceutical and medical supplies. Based in Jimma, Ethiopia.",
      },
      { property: "og:title", content: "Kebre Ilike PLC — Ethiopian Coffee Export & Global Trade" },
      {
        property: "og:description",
        content: "Specialty coffee exporter and pharmaceutical importer based in southwestern Ethiopia.",
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
              Kebre Ilike PLC is a dual-focus enterprise exporting specialty coffee from the
              UNESCO-protected Yayo Biosphere Reserve and importing essential pharmaceutical
              supplies to Ethiopia.
            </p>
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

      {/* About intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">A Legacy of Quality & Trust</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Operating from southwestern Ethiopia, Kebre Ilike PLC bridges the gap between Ethiopian
            agricultural excellence and global markets. We specialize in the export of premium,
            traceable coffee from the Jimma region and the import of high-quality pharmaceutical
            and medical supplies.
          </p>
        </div>
      </section>

      {/* Two business arms */}
      <section className="bg-[oklch(0.97_0.01_150)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-5xl">What We Do</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Two complementary business arms serving both local and international markets.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Specialty Coffee Export</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We source, process, and export high-quality Arabica coffee from the Yayo Biosphere
                Reserve and Jimma region. Our coffees are shade-grown, fully traceable, and available
                as washed and natural micro-lots.
              </p>
              <Link
                to="/coffee"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Pill className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Pharma & Medical Import</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We import and distribute pharmaceutical products and medical consumables, ensuring
                reliable supply chains, regulatory compliance, and timely delivery across Ethiopia.
              </p>
              <Link
                to="/pharma"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
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
