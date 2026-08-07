import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Imperial Ecommerce LTD (Reg. 16776358), our mission and team. We guide new entrepreneurs into online selling on platforms like eBay, TikTok, and Instagram.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-blue-950 mb-8">About Imperial Ecommerce</h1>
      <div className="prose prose-lg prose-blue max-w-none">
        <p className="lead text-xl text-slate-600 mb-6">
          Based in Middlesbrough, UK, Imperial Ecommerce LTD was founded with a dual purpose: to provide customers with high-quality, reliable products and to empower aspiring entrepreneurs to build their own successful online businesses.
        </p>
        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Our Mission</h2>
        <p className="text-slate-600 mb-6">
          We believe that e-commerce should be accessible to everyone. The landscape of online selling across platforms like eBay and TikTok is vast and constantly evolving. Our goal is to demystify this process, offering hands-on guidance, onboarding, and training, alongside running our own highly optimized retail operations.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-10">
          <h3 className="font-bold text-blue-900 mb-2">Company Details</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>Company Name:</strong> Imperial Ecommerce LTD</li>
            <li><strong>Registration Number:</strong> 16776358</li>
            <li><strong>Location:</strong> Middlesbrough, United Kingdom</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
