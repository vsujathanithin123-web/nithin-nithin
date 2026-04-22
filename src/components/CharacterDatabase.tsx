import { motion, AnimatePresence } from 'motion/react';
import { HEROES, VILLAINS, type Character } from '@/src/data';
import { Shield, Zap, Search, X, Activity, Terminal, Crosshair, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export function CharacterGrid({ characters, title, type }: { characters: Character[], title: string, type: 'hero' | 'villain' }) {
  const [search, setSearch] = useState('');
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const filtered = characters.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.alias.toLowerCase().includes(search.toLowerCase())
  );

  // Simulate data fetching
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Cinematic delay for "database decoding"
    return () => clearTimeout(timer);
  }, [characters]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedChar(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
            {title} <span className="text-primary italic">Profiles</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Access Level: Level 7 Clearance</span>
          </div>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="SEARCH DATABASE..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-primary px-12 py-3 rounded-full text-xs font-mono uppercase focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="w-12 h-12 text-primary" />
              </motion.div>
              <div className="text-center">
                <span className="block text-[10px] font-mono text-primary uppercase tracking-[0.4em] animate-pulse">Decoding Database...</span>
                <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest mt-1">Stark Secure Uplink Established</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((char, index) => (
                <motion.div
                  key={char.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedChar(char)}
                  className="group relative hud-border overflow-hidden cursor-pointer"
                >
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={char.imageUrl} 
                      alt={char.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      {type === 'hero' ? (
                        <Shield className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                      ) : (
                        <Zap className="w-6 h-6 text-accent drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                      )}
                    </div>
                  </div>

                  <div className="p-6 relative z-10 flex-1 flex flex-col">
                    <span className="block text-[10px] font-mono text-primary uppercase tracking-widest mb-1">{char.alias}</span>
                    <h3 className="text-xl font-bold uppercase mb-4">{char.name}</h3>
                    
                    <div className="space-y-4 mb-6 flex-1">
                      <p className="text-xs text-zinc-400 leading-relaxed font-medium line-clamp-2">{char.description}</p>
                      
                      {/* Technical Stats Summary */}
                      {char.stats && (
                        <div className="flex gap-1 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                          {Object.values(char.stats).map((val, i) => (
                            <div key={i} className="flex-1 bg-primary/20">
                              <div className="h-full bg-primary" style={{ width: `${(val / 7) * 100}%` }} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-zinc-800">
                      <div className="flex flex-wrap gap-2 text-[8px] font-mono text-zinc-600 uppercase tracking-widest group-hover:text-primary transition-colors">
                        View Full Dossier →
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BIOGRAPHY MODAL */}
      <AnimatePresence>
        {selectedChar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedChar(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-zinc-900 hud-border overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="absolute top-4 right-4 z-[110]">
                <button 
                  onClick={() => setSelectedChar(null)}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:text-black transition-all group"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              {/* Character Visual Side */}
              <div className="w-full md:w-[40%] relative aspect-[3/4] md:aspect-auto">
                <img 
                  src={selectedChar.imageUrl} 
                  alt={selectedChar.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900" />
                <div className="absolute bottom-6 left-6 md:hidden">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{selectedChar.alias}</span>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">{selectedChar.name}</h3>
                </div>
              </div>

              {/* Character Details Side */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="hidden md:block mb-8">
                  <span className="text-xs font-mono text-primary uppercase tracking-[0.4em] mb-2 block animate-pulse">Classified Archive // Access Level 10</span>
                  <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-1">{selectedChar.alias}</span>
                  <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">{selectedChar.name}</h2>
                  <div className="h-px w-24 bg-primary" />
                </div>

                <div className="space-y-12">
                  {/* Biography */}
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Terminal className="w-4 h-4 text-primary" />
                      <h4 className="text-sm font-bold uppercase tracking-widest">Core Dossier</h4>
                    </div>
                    <p className="text-zinc-400 leading-relaxed uppercase text-xs font-medium tracking-wide">
                      {selectedChar.description}
                    </p>
                  </section>

                  {/* Power Grid */}
                  {selectedChar.stats && (
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <Activity className="w-4 h-4 text-primary" />
                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-100">Power Grid Readout</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {Object.entries(selectedChar.stats as Record<string, number>).map(([key, val]) => (
                          <div key={key} className="space-y-2">
                            <div className="flex justify-between text-[10px] uppercase font-bold text-zinc-500 font-mono">
                              <span>{key}</span>
                              <span className="text-primary">{val}/7</span>
                            </div>
                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${(val / 7) * 100}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]" 
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Special Abilities */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <Crosshair className="w-4 h-4 text-primary" />
                      <h4 className="text-sm font-bold uppercase tracking-widest">Tactical Abilities</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {selectedChar.powers.map(power => (
                        <div key={power} className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-sm text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                          {power}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Villain Specific Details */}
                  {type === 'villain' && (
                    <section className="bg-red-500/5 border border-red-500/20 p-6 rounded-lg">
                      <div className="space-y-6">
                        {selectedChar.motive && (
                          <div>
                            <span className="block text-[8px] font-mono text-accent uppercase font-bold tracking-widest mb-2">Primary Objective</span>
                            <p className="text-xs text-zinc-300 italic leading-relaxed">"{selectedChar.motive}"</p>
                          </div>
                        )}
                        {selectedChar.connection && (
                          <div>
                            <span className="block text-[8px] font-mono text-zinc-500 uppercase font-bold tracking-widest mb-2">Avengers Threat Profile</span>
                            <p className="text-xs text-zinc-400 leading-relaxed uppercase">{selectedChar.connection}</p>
                          </div>
                        )}
                      </div>
                    </section>
                  )}
                </div>
                
                <div className="mt-12 pt-8 border-t border-zinc-800 flex justify-between items-center opacity-40">
                  <span className="text-[8px] font-mono uppercase tracking-[0.4em]">S.H.I.E.L.D. DATA NODE 09-X</span>
                  <span className="text-[8px] font-mono uppercase tracking-[0.4em]">STARK TECH PROTECTED</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
