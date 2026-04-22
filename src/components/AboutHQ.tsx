import { motion } from 'motion/react';
import { Shield, Target, Globe, Cpu, Users, Lock, Zap } from 'lucide-react';

export function AboutHQ() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Classified Protocol // Level 10</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">
              The <span className="text-primary">Avengers</span> Initiative
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 italic">
              "There was an idea... to bring together a group of remarkable people, to see if they could become something more."
            </p>
            <div className="h-px w-32 bg-primary mb-8" />
            <p className="text-zinc-500 leading-relaxed mb-8">
              Founded by Director Nick Fury of S.H.I.E.L.D., the Avengers Initiative was designed to defend Earth against threats that no single hero could withstand. From the Battle of New York to the multiversal incursions, our mission remains constant: Global Security through Super-Agent Tactical Integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hud-border p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
            </div>
            
            <div className="relative z-10 space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-2 tracking-wide">Global Defense</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest leading-loose">Omnipresent monitoring of planetary threats across all dimensions.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-2 tracking-wide">Tactical Response</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest leading-loose">Deployment of Earth's Mightiest Heroes within minutes of alert.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-2 tracking-wide">Advanced R&D</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest leading-loose">Leveraging Stark Tech and Wakandan Vibranium for planetary safety.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { label: 'Active Heros', value: '18', icon: Users },
            { label: 'Saved Timelines', value: '1,052', icon: Globe },
            { label: 'S.H.I.L.D. Agents', value: '45.2K', icon: Shield }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="hud-border p-8 text-center"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-black italic mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Historical Task Forces Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] mb-2 block">Archive Records // Team Designations</span>
            <h3 className="text-3xl font-black uppercase italic tracking-tight">Historical <span className="text-primary">Task Forces</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'original',
                name: 'The Original Avengers',
                desc: 'The foundation of planetary defense. Bonded by destiny to fight the foes no single hero could withstand.',
                icon: Shield,
                code: 'ALPHA-01'
              },
              {
                id: 'west-coast',
                name: 'West Coast Avengers',
                desc: 'Expansion team established to cover Pacific-rim threats. The first tactical split in Initiative history.',
                icon: Globe,
                code: 'WH-OAKLAND'
              },
              {
                id: 'new',
                name: 'New Avengers',
                desc: 'A decentralized force of street-level legends and heavy hitters, formed to restore order in chaos.',
                icon: Target,
                code: 'URBAN-SYNC'
              },
              {
                id: 'young',
                name: 'Young Avengers',
                desc: 'Inheritors of the legacy. A group of gifted youth linked to the iconic founding members.',
                icon: Zap,
                code: 'NEXT-GEN'
              },
              {
                id: 'mighty',
                name: 'Mighty Avengers',
                desc: 'The official S.H.I.E.L.D. sanctioned response team. High-tech, sanctioned, and heavily monitored.',
                icon: Cpu,
                code: 'GOV-SANCTIONED'
              },
              {
                id: 'secret',
                name: 'Secret Avengers',
                desc: 'Specialized for clandestine operations. Fighting the threats the public isn\'t allowed to know about.',
                icon: Lock,
                code: 'CLASSIFIED'
              }
            ].map((team, idx) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="hud-border p-8 bg-zinc-900/20 group hover:border-primary transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <team.icon className="w-16 h-16 text-white" />
                </div>
                <span className="text-[8px] font-mono text-primary uppercase tracking-[0.3em] mb-4 block">{team.code}</span>
                <h4 className="text-xl font-black uppercase italic mb-3 tracking-wide group-hover:text-primary transition-colors">{team.name}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed uppercase font-mono tracking-wider">{team.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
            <div className="inline-block p-12 border-2 border-dashed border-zinc-900 max-w-3xl">
                <h3 className="text-2xl font-bold uppercase mb-6 tracking-widest">Our Vision</h3>
                <p className="text-zinc-500 leading-relaxed italic">
                    "The world has changed. It's time we change with it. We are not just a team. We are a promise. 
                    A promise that if we can't save the Earth, you can be damn well sure we'll avenge it."
                </p>
                <div className="mt-8 text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em]">Commanding Officer // Nick Fury</div>
            </div>
        </div>
      </div>
    </div>
  );
}
