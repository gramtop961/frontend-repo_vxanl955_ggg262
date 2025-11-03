import { Phone, Mail } from "lucide-react";

const companyName = "Название компании";

export default function ContactCTA() {
  return (
    <section id="quote" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-amber-700 p-1 shadow-lg">
          <div className="rounded-3xl bg-white/95 px-8 py-10 sm:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Partner with {companyName} and experience the difference
                </h3>
                <p className="mt-3 text-gray-600">
                  Tell us about your pallet needs and get a fast, no‑obligation quote. Our team will recommend the right specification for your operation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+10000000000"
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    <Phone className="h-5 w-5" /> Call us
                  </a>
                  <a
                    href="mailto:hello@example.com?subject=Quote%20request%20for%20wooden%20pallets"
                    className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold text-amber-700 ring-1 ring-amber-200 hover:bg-amber-50"
                  >
                    <Mail className="h-5 w-5" /> Email us
                  </a>
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = Object.fromEntries(new FormData(form));
                  // For now, simply open an email with the details
                  const subject = encodeURIComponent("Quote request");
                  const body = encodeURIComponent(
                    `Company: ${data.company || ""}\nName: ${data.name || ""}\nPhone: ${data.phone || ""}\nQuantity: ${data.quantity || ""}\nNotes: ${data.notes || ""}`
                  );
                  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
                }}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input name="company" className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input name="name" className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input name="phone" className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input name="quantity" className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="e.g., 500 pallets" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea name="notes" rows={3} className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500" placeholder="Tell us about sizes, treatment, or timelines" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Request quote
                </button>
                <p className="mt-2 text-center text-xs text-gray-500">No spam. We’ll only use your details to respond to your request.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
