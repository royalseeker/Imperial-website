import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Store, Instagram, Mail, MapPin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Imperial Ecommerce LTD",
    default: "Imperial Ecommerce LTD – UK Ecommerce Store & Services",
  },
  description: "Imperial Ecommerce LTD provides expert ecommerce services and a curated online store in the UK. Visit our eBay and TikTok shops or contact us to get started.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        {/* Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              {/* Replace with actual logo image later */}
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xl">IE</div>
              <span className="font-bold text-xl tracking-tight text-blue-900">Imperial Ecommerce</span>
            </Link>
            <div className="hidden md:flex space-x-8 font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-blue-900 transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-blue-900 transition-colors">Services</Link>
              <Link href="/shop" className="hover:text-blue-900 transition-colors">Shop</Link>
              <Link href="/contact" className="hover:text-blue-900 transition-colors">Contact</Link>
            </div>
            {/* Mobile menu button would go here */}
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-950 text-slate-300 py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Imperial Ecommerce LTD</h3>
              <p className="text-sm mb-2">Empowering UK Entrepreneurs & Curating Quality Products.</p>
              <p className="text-sm">Company Reg No: 16776358</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail size={16} /> info@imperialecommerce.co.uk</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> Middlesbrough, UK</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Our Stores & Socials</h3>
              <div className="flex gap-4">
                <a href="#" aria-label="eBay Store" className="hover:text-amber-400 transition-colors"><Store /></a>
                {/* Custom TikTok SVG or Icon */}
                <a href="#" aria-label="TikTok Shop" className="hover:text-amber-400 transition-colors">
                  <span className="font-bold">TikTok</span>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-amber-400 transition-colors"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-blue-900 text-sm text-center">
            © 2025 Imperial Ecommerce LTD. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
