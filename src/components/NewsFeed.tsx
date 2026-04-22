import { motion } from 'motion/react';
import { NEWS } from '@/src/data';
import { Newspaper, Share2, CornerDownRight } from 'lucide-react';

export function NewsFeed() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">
              S.H.I.E.L.D. <span className="text-primary italic">Intel</span>
            </h2>
            <p className="text-zinc-500 text-xs font-mono uppercase mt-2">Daily Briefing // Worldwide Threat Matrix</p>
          </div>
          <button className="p-3 border border-zinc-800 hover:border-primary transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEWS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hud-border p-8 hover:bg-primary/5 transition-all group flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono text-primary font-bold uppercase py-1 px-2 border border-primary/30">
                  {item.source}
                </span>
                <span className="text-[10px] font-mono text-zinc-600 uppercase">{item.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold uppercase leading-tight mb-4 group-hover:glitch-text transition-all">
                {item.title}
              </h3>
              
              <p className="text-zinc-400 text-sm italic mb-8 flex-1">
                "{item.summary}"
              </p>

              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest cursor-pointer hover:gap-4 transition-all">
                <CornerDownRight className="w-4 h-4" />
                Read Full Briefing
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
