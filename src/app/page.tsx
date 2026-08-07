"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingBag, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Empowering UK Entrepreneurs <br className="hidden md:block"/> Your Partners in Ecommerce
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Expert ecommerce guidance, store setup, and a curated selection of premium products across eBay and TikTok.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/shop" className="bg-amber-400 text-blue-950 font-bold px-8 py-4 rounded-full hover:bg-amber-300 transition-transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2">
              Shop Now <ShoppingBag size={20} />
            </Link>
            <Link href="/services" className="bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-white/20">
              Our Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How We Help You Grow</h2>
            <p className="mt-4 text-slate-600">From concept to scalable online store, we provide end-to-end ecommerce solutions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Store Setup", desc: "Professional eBay and TikTok shop creation optimized for conversions.", icon: Store },
              { title: "Consulting", desc: "Strategic guidance to navigate the UK ecommerce landscape.", icon: TrendingUp },
              { title: "Product Sourcing", desc: "Finding high-margin, reliable products to build your brand.", icon: ShoppingBag },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
