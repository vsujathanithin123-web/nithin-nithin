import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-30"
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-particles-in-blue-background-4050-large.mp4"
          autoPlay 
          muted 
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 px-8 md:px-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 text-xs font-mono tracking-[0.3em] uppercase bg-primary/20 border border-primary/50 text-primary">
            Threat Level: Alpha
          </span>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 leading-[0.85] uppercase">
            Assemble <br /><span className="text-primary italic">The Initiative</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            The world is under siege. Earth's Mightiest Heroes are the only line of defense. 
            Access classified databases, track multiverse anomalies, and join the Avengers Initiative today.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-black font-black uppercase italic tracking-wider hover:bg-white transition-colors flex items-center gap-2 group">
              Join The Ranks
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative HUD elements */}
      <div className="absolute right-0 bottom-0 p-8 hidden xl:block">
        <div className="w-64 h-64 border border-primary/30 rounded-full flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
          <div className="absolute inset-0 border-t-4 border-primary rounded-full" />
          <div className="w-48 h-48 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
        <div className="mt-4 text-right">
          <span className="block text-[10px] font-mono text-zinc-600 uppercase">Coordinate Lock: 40.7128° N, 74.0060° W</span>
          <span className="block text-[10px] font-mono text-primary uppercase">Sector: New York / 7-A</span>
        </div>
      </div>
    </section>
  );
}
