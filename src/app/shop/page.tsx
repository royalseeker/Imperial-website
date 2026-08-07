"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// Dummy product data
const products = [
  { id: 1, name: "Handcrafted Leather Wallet", price: "£24.99", desc: "Durable, RFID-blocking minimalist wallet.", platform: "eBay", link: "#" },
  { id: 2, name: "Wireless Earbuds Pro", price: "£45.00", desc: "Noise-cancelling with 24hr battery life.", platform: "TikTok", link: "#" },
  { id: 3, name: "Ergonomic Laptop Stand", price: "£32.50", desc: "Adjustable aluminum stand for home offices.", platform: "eBay", link: "#" },
];

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-blue-950 mb-4">Shop Our Products</h1>
        <p className="text-lg text-slate-600">Browse our curated selection of high-quality items available on eBay and TikTok. Fast UK shipping guaranteed.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 overflow-hidden flex flex-col"
          >
            <div className="aspect-square bg-slate-100 relative">
              {/* Fallback box since we don't have actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">Image: {product.name}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-bold text-lg text-slate-900">{product.name}</h2>
                <span className="font-bold text-amber-500">{product.price}</span>
              </div>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{product.desc}</p>
              
              <motion.a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
                  product.platform === 'eBay' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Buy on {product.platform} <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
