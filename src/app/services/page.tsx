import type { Metadata } from "next";
import { Store, TrendingUp, ShoppingBag, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Imperial Ecommerce offers complete ecommerce solutions – from store setup to training. Find out how we can help grow your online business.",
};

export default function Services() {
  const services = [
    {
      title: "Store Setup & Onboarding",
      desc: "Complete setup of your eBay and TikTok shops, ensuring all technical and compliance requirements are met for the UK market.",
      icon: Store
    },
    {
      title: "Ecommerce Consulting",
      desc: "One-on-one strategic guidance tailored to your business goals, helping you navigate algorithms and optimize your listings.",
      icon: TrendingUp
    },
    {
      title: "Product Sourcing",
      desc: "Assistance in identifying high-margin, reliable products and connecting with trustworthy suppliers to build your inventory.",
      icon: ShoppingBag
    },
    {
      title: "Training Courses",
      desc: "Comprehensive training modules designed to take you from a beginner to an advanced seller across multiple social commerce platforms.",
      icon: BookOpen
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-blue-950 mb-4">Our Services</h1>
        <p className="text-lg text-slate-600">
          We provide end-to-end solutions for aspiring entrepreneurs. Whether you need a push in the right direction or a complete store build, we are here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <service.icon size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
