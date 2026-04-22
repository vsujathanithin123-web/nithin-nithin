import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/data';
import { ShoppingCart, ExternalLink } from 'lucide-react';

export function GearStore() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">
              Stark Tech <span className="text-primary italic">Store</span>
            </h2>
            <p className="text-zinc-500 font-mono text-xs uppercase mt-2">Official Avengers Tactical Gear</p>
          </div>
          <div className="flex gap-4">
            <span className="text-[10px] font-mono text-zinc-500 py-1 px-3 border border-zinc-800 rounded-full">3 ITEMS IN STOCK</span>
            <span className="text-[10px] font-mono text-zinc-500 py-1 px-3 border border-zinc-800 rounded-full">GLOBAL SHIPPING AVAILABLE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-square mb-6 overflow-hidden hud-border">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-white text-black px-6 py-3 font-black uppercase italic text-sm flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Payload
                </button>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono text-primary uppercase font-bold">{product.category}</span>
                  <h3 className="text-xl font-bold uppercase mt-1 tracking-tight">{product.name}</h3>
                </div>
                <div className="text-right">
                  <span className="block text-lg font-black text-white italic">${product.price.toFixed(2)}</span>
                  <span className="text-[8px] font-mono text-zinc-600 uppercase">Secure Transaction</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 hud-border bg-gradient-to-br from-primary/10 via-transparent to-transparent">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-black uppercase italic mb-4">Request Custom Prototype?</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Stark Industries R&D department accepts specialized requests from Level 8 operatives. 
              Custom suits, propulsion systems, and defensive arrays are available for priority missions.
            </p>
            <button className="text-primary font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              Initialize Contact <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
