import { motion } from 'motion/react';
import { TIMELINE } from '@/src/data';
import { Circle } from 'lucide-react';

export function MissionTimeline() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">
            Mission <span className="text-primary italic">Timeline</span>
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-primary to-transparent opacity-30" />
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-primary/20" />

          {TIMELINE.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-1.5 w-6 h-6 bg-black flex items-center justify-center">
                <Circle className="w-3 h-3 text-primary fill-primary animate-pulse" />
              </div>
              
              <div className="hud-border p-6 hover:bg-primary/5 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl font-black italic text-primary">{event.year}</span>
                  <div className="h-px flex-1 bg-primary/10" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 tracking-wide group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
