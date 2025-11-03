import { Leaf, Recycle, CheckCircle } from "lucide-react";

export default function Sustainability() {
  const points = [
    "Responsibly managed forests and traceable sourcing",
    "Eco‑friendly manufacturing that minimizes waste",
    "Circular options: repair, refurbish, and reuse programs",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute right-[-6rem] top-[-6rem] h-52 w-52 rotate-12 rounded-full bg-emerald-500/10 ring-1 ring-emerald-200" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200">
              <Leaf className="h-4 w-4" /> Sustainability
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built responsibly for a thriving future
            </h2>
            <p className="mt-4 text-gray-600">
              Our wood is sourced from responsibly managed forests and processed with eco‑friendly practices. We help you meet sustainability goals without compromising performance.
            </p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-emerald-100">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-200">
                  <Recycle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Closed-loop options</p>
                  <p className="text-sm text-gray-600">Reduce waste with repair and reuse programs.</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900 ring-1 ring-emerald-100">
                Ask us how we can cut your carbon footprint while improving durability and total cost of ownership.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
