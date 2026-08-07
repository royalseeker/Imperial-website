"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Update the name, price, and desc below to match your actual products!
const products = [
  { 
    id: 1, 
    name: "Nitrile Diamond Grip Gloves", 
    price: "£11.59", 
    desc: "Nitrile Diamond Grip Gloves Extra Thick & Super Strong 8MIL -Orange", 
    platform: "eBay", 
    link: "https://ebay.io/m/BDLMNr" 
  },
  { 
    id: 2, 
    name: "Renault Radio Code", 
    price: "£1.99", 
    desc: "Renault Radio Unlock Code Service", 
    platform: "eBay", 
    link: "https://ebay.io/m/RxBMSG" 
  },
  { 
    id: 3, 
    name: "Seamless Finish Concealer Brush", 
    price: "£10.79", 
    desc: "Hourglass Vanish Seamless Finish Concealer Brush", 
    platform: "TikTok", 
    link: "https://shop.tiktok.com/gb/pdp/1729867661857036558" 
  },
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
              {/* Fallback box for product image */}
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
