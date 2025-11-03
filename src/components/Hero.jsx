import { Rocket, Package, Truck } from "lucide-react";

const companyName = "Название компании";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
              <Rocket className="h-4 w-4" />
              Premium Wooden Pallets
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Elevating Your Pallet Experience
            </h1>
            <p className="mt-4 text-xl font-semibold text-amber-700">
              {companyName} — Your Premier Source for Quality Wooden Pallets
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed">
              In today’s fast-moving supply chains, your products deserve reliable, durable, and sustainable support. With years of expertise and a dedication to excellence, {companyName} delivers wooden pallets tailored to your exact needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Get a free quote
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold text-amber-700 ring-1 ring-amber-200 hover:bg-amber-50"
              >
                <Package className="h-5 w-5" />
                Explore products
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-amber-600" />
                Fast, reliable delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Heat-treated options (ISPM 15)
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-amber-200 via-amber-100 to-emerald-100 p-1 shadow-inner">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white shadow-lg">
                  <div className="px-8 py-10 text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-amber-500/10 ring-1 ring-amber-200 flex items-center justify-center">
                      <Package className="h-8 w-8 text-amber-600" />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Built for strength</p>
                    <p className="mt-2 text-gray-600">
                      Crafted from premium timber and engineered for the rigors of modern logistics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 hidden h-28 w-28 rotate-6 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-200 md:block" />
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-28 w-28 -rotate-6 rounded-xl bg-amber-500/10 ring-1 ring-amber-200 md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
