import Hero from "./components/Hero";
import Features from "./components/Features";
import Sustainability from "./components/Sustainability";
import ContactCTA from "./components/ContactCTA";

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <header className="sticky top-0 z-20 w-full border-b border-amber-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-amber-600" />
            <span className="text-lg font-bold tracking-tight text-gray-900">Название компании</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#features" className="hover:text-amber-700">Products</a>
            <a href="#sustainability" className="hover:text-amber-700">Sustainability</a>
            <a href="#quote" className="rounded-lg bg-amber-600 px-3 py-1.5 font-semibold text-white hover:bg-amber-700">Get a quote</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <section id="sustainability">
          <Sustainability />
        </section>
        <ContactCTA />
      </main>

      <footer className="border-t border-amber-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Название компании. All rights reserved. Built with sustainable principles and a dedication to quality.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
