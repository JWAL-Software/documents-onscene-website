import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documents on Scene - On-Scene Risk Management & Insurance Documentation" },
    { name: "description", content: "Get the documents you need on-scene in an easily digestible way. Expert guidance from insurance underwriting specialist Jamie Rhines and attorney Devin Argyle." },
  ];
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Documents OnScene</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#specialists" className="text-gray-700 hover:text-blue-600 transition">Leadership</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="mailto:support@documentsonscene.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</a>
            </div>
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#about" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#specialists" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>Leadership</a>
              <a href="#features" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="mailto:support@documentsonscene.com" className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Documents You Need, <span className="text-blue-600">Where You Need Them, When You Need Them</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get critical insurance and legal documents when you need them most. 
                Expert guidance from industry specialists delivered in an easily digestible format.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:support@documentsonscene.com" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                  Get Started Today
                </a>
                <a href="#about" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Hero1.png" 
                alt="Heavy-duty roadside assistance vehicle towing semi truck" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Documents on Scene?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamlined documentation for on-scene situations, backed by expert knowledge
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Easily Digestible</h4>
              <p className="text-gray-600">
                Complex legal and insurance documents simplified and presented in a clear, actionable format.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Available On-Scene</h4>
              <p className="text-gray-600">
                Access critical documents when and where you need them, without delays or complications.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h4>
              <p className="text-gray-600">
                Backed by specialists in insurance underwriting and on-scene risk management law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">About Us</h3>
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">
              Empowering Towing and Recovery Teams to Do What They Do Best — While We Take Care of What Comes Next.
            </h4>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              OnScene was built by people who understand the grind of towing and recovery. Our mission is simple: give operators the tools and support they need to focus on the job, not the paperwork. From scene to settlement, we make sure every recovery is documented, processed, and paid — fast, fair, and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="specialists" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Jamie Rhines */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Jamie Rhines</h4>
                <p className="text-blue-600 font-semibold mb-4">Founder, President & Chief Executive Officer</p>
                <p className="text-gray-600 leading-relaxed">
                  Jamie Rhines brings more than two decades of towing and insurance experience to OnScene. After over ten years working for major insurance carriers, he switched sides to advocate for the towing and recovery professionals who keep highways safe. His mission is simple: make sure hardworking operators get paid fairly and on time.
                </p>
              </div>
            </div>

            {/* Megan Rhines */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Megan Rhines</h4>
                <p className="text-blue-600 font-semibold mb-4">Treasurer & Chief Operating Officer</p>
                <p className="text-gray-600 leading-relaxed">
                  Megan Rhines manages OnScene's operations and finance with a focus on efficiency, compliance, and partner trust. Her leadership ensures the company grows on solid footing while maintaining transparency and reliability for its users and investors.
                </p>
              </div>
            </div>

            {/* Jacob Knight */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Jacob Knight</h4>
                <p className="text-blue-600 font-semibold mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 leading-relaxed">
                  Jacob Knight is the lead architect and primary developer of OnScene's AI-driven platform. With a background in logistics and systems design, he builds the tools that connect field operators, dispatchers, and insurers in real time — turning complex workflows into simple, reliable solutions.
                </p>
              </div>
            </div>

            {/* Devin Argyle */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Devin Argyle</h4>
                <p className="text-blue-600 font-semibold mb-4">Secretary & Chief Legal Officer</p>
                <p className="text-gray-600 leading-relaxed">
                  Devin Argyle oversees OnScene's legal strategy, compliance, and risk management. A corporate attorney with deep experience in startup law and regulatory oversight, he ensures OnScene's contracts, funding, and structure remain fully compliant with Delaware law and S-Corp requirements, supporting secure and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Access the documents you need on-scene, backed by expert guidance from industry specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@documentsonscene.com" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
              Contact Us Today
            </a>
            <a href="#about" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-white text-lg font-semibold mb-4">Documents on Scene</h5>
              <p className="text-gray-400">
                Providing critical on-scene documentation with expert guidance from industry specialists.
              </p>
            </div>
            <div>
              <h5 className="text-white text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#specialists" className="hover:text-white transition">Leadership</a></li>
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-lg font-semibold mb-4">Contact</h5>
              <p className="text-gray-400">
                Get in touch to learn more about how Documents on Scene can help you.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Documents on Scene. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
