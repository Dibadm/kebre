import { createFileRoute } from "@tanstack/react-router";
import { Coffee, MapPin, Leaf } from "lucide-react";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

export const Route = createFileRoute("/coffee")({
  head: () => ({
    meta: [
      { title: "Coffee Export — Kebre Ilike PLC" },
      { name: "description", content: "Specialty Ethiopian coffee from the Yayo Biosphere Reserve and Jimma region. Washed and natural micro-lots available for export." },
      { property: "og:title", content: "Coffee Export — Kebre Ilike PLC" },
      { property: "og:description", content: "Traceable, shade-grown Arabica coffee from southwestern Ethiopia." },
    ],
  }),
  component: CoffeePage,
});

function CoffeePage() {
  const origins = [
    {
      name: "Yayo Biosphere Reserve",
      region: "Southwestern Ethiopia",
      description:
        "A UNESCO-protected area famous for its wild Arabica forest coffee. Our flagship origin offering complex, floral cups with bright acidity.",
      image: p1,
    },
    {
      name: "Jimma",
      region: "Southwestern Ethiopia",
      description:
        "Known for rich, winey, and fruity profiles. Jimma coffees are beloved by roasters seeking distinctive, high-cupping lots.",
      image: p2,
    },
    {
      name: "Gera",
      region: "Near Jimma",
      description:
        "A hidden gem producing balanced, sweet, and complex coffees. Gera lots are increasingly sought after by specialty buyers.",
      image: p3,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Coffee</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Specialty Ethiopian Coffee</h1>
        <p className="mt-3 text-muted-foreground">
          Sourced from the UNESCO-protected Yayo Biosphere Reserve and the renowned coffee
          regions of southwestern Ethiopia. Fully traceable, sustainably grown, and expertly
          processed.
        </p>
      </header>

      {/* Origins */}
      <div className="mb-20">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Our Origins</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {origins.map((o) => (
            <div key={o.name} className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={o.image}
                  alt={o.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {o.region}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{o.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-20">
        <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">Processing & Quality</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Washed Micro-Lots</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Carefully pulped, fermented, and washed at controlled facilities. Our washed lots
              are known for clean, bright acidity and floral aromatics.
            </p>
          </div>
          <div className="rounded-2xl border border-border p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Coffee className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Natural Micro-Lots</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sun-dried on raised beds with meticulous sorting. Natural lots offer intense fruit
              notes, heavy body, and a sweet, winey finish.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-[oklch(0.97_0.01_150)] p-10 text-center md:p-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Request a Sample</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We deliver fresh green and roasted samples to our partners worldwide. Contact us to
          receive our current offer list and taste the difference of Ethiopian specialty coffee.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
        >
          Request Samples <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
