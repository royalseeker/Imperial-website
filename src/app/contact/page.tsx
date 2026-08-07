import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Imperial Ecommerce LTD. We're here to help with consulting, store setup, or product inquiries.",
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-blue-950 mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-8">
            Whether you are interested in our e-commerce consulting services, looking to start your own eBay Store, TikTok shop, or have a question about a product, we'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Mail />
              </div>
              <div>
                <p className="font-bold">Email Us</p>
                <p>info@imperialecommerce.co.uk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Netlify Form Handling */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          <form name="contact" method="POST" data-netlify="true" className="space-y-6">
            {/* Required hidden input for Netlify forms in static sites */}
            <input type="hidden" name="form-name" value="contact" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
