import { Package, Ruler, Truck, Shield } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Package,
      title: "Premium Timber",
      desc: "Meticulously selected wood for strength, durability, and long service life.",
    },
    {
      icon: Ruler,
      title: "Custom Sizes",
      desc: "From standard dimensions to fully bespoke builds for specialized equipment.",
    },
    {
      icon: Shield,
      title: "ISPM 15 Heat-Treated",
      desc: "Certified options for international shipping and border compliance.",
    },
    {
      icon: Truck,
      title: "Bulk & On‑Time Delivery",
      desc: "Scalable production capacity and logistics you can count on.",
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The {""}
            <span className="text-amber-700">{`\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438`}</span> Advantage
          </h2>
          <p className="mt-3 text-gray-600">
            Quality, customization, and sustainability—engineered for modern supply chains.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-700 ring-1 ring-amber-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
