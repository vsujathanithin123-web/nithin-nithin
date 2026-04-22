import { motion } from 'motion/react';
import { Shield, Zap, Award, User, Bell, Terminal, Activity, Lock, Globe, HardDrive } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';

type Tier = 'Bronze' | 'Silver' | 'Gold';

const TIER_DATA = {
  Bronze: {
    rank: 'Consultant',
    clearance: 'Level 3',
    status: 'ACTIVE // BACKGROUND CHECK CLEAR',
    color: 'text-orange-500',
    borderColor: 'border-orange-500/30',
    bgColor: 'bg-orange-500/5',
    perks: ['Public Archive Access', 'Standard Training Sims', 'Civilian Database']
  },
  Silver: {
    rank: 'Field Agent',
    clearance: 'Level 7',
    status: 'ACTIVE // TACTICAL READINESS HIGH',
    color: 'text-slate-400',
    borderColor: 'border-slate-400/30',
    bgColor: 'bg-slate-400/5',
    perks: ['Classified Villain Dossiers', 'Advanced HUD Training', 'Early Gear Allocation', 'Priority Support']
  },
  Gold: {
    rank: 'Avenger Elite',
    clearance: 'Level 10 (OMEGA)',
    status: 'ACTIVE // MULTIVERSAL SYNC STABLE',
    color: 'text-yellow-500',
    borderColor: 'border-yellow-500/30',
    bgColor: 'bg-yellow-500/5',
    perks: ['Global Mission Command', 'Stark R&D Prototypes', 'Multiverse Tracking', 'Vibranium Vault Access']
  }
};

export function MemberDashboard() {
  const [selectedTier, setSelectedTier] = useState<Tier>('Silver'); // Mock selection for demo
  const data = TIER_DATA[selectedTier];

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header: Identity & Status */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className={cn("w-20 h-20 rounded-2xl border-2 flex items-center justify-center bg-zinc-900", data.borderColor)}>
              <User className={cn("w-10 h-10", data.color)} />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary p-1 rounded-full border-2 border-black">
              <Shield className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Agent <span className="text-primary italic">V. Sujatha</span></h2>
            <div className="flex items-center gap-3 mt-1">
              <span className={cn("text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-widest", data.borderColor, data.color, data.bgColor)}>
                {data.rank} // {data.clearance}
              </span>
              <span className="text-[10px] font-mono text-zinc-600 animate-pulse">SYSTEMS ONLINE</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          {Object.keys(TIER_DATA).map((t) => (
            <button 
              key={t}
              onClick={() => setSelectedTier(t as Tier)}
              className={cn(
                "px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border",
                selectedTier === t ? "bg-primary text-white border-primary active-glow" : "bg-white/5 text-zinc-500 border-white/10 hover:bg-white/10"
              )}
            >
              SIM {t} VIEW
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Mission Control */}
        <div className="lg:col-span-2 space-y-8">
          <section className="hud-border p-8 bg-gradient-to-br from-zinc-900/50 to-transparent">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-black uppercase italic tracking-wide">Mission Command</h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Protocol 47-B</span>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Project Insight Tracking', status: 'STABLE', time: '2m ago' },
                { title: 'Multiversal Static Detected', status: 'ALERT', time: '14m ago', warning: true },
                { title: 'Stark Sat Grid Calibration', status: 'PENDING', time: '1h ago' }
              ].map((mission, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-white/5 bg-black/40 rounded group hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-2 h-2 rounded-full", mission.warning ? "bg-red-500 animate-pulse" : "bg-primary")} />
                    <span className="text-[11px] font-bold uppercase tracking-tight text-zinc-300">{mission.title}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={cn("text-[9px] font-mono px-2 py-0.5 rounded", mission.warning ? "text-red-500 bg-red-500/10" : "text-zinc-500 bg-zinc-500/5")}>{mission.status}</span>
                    <span className="text-[9px] font-mono text-zinc-700">{mission.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hud-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-black uppercase tracking-widest italic">Biometric Stats</h4>
              </div>
              <div className="space-y-4">
                {['HEART RATE: 72 BPM', 'ADRENALINE: NORMAL', 'NEURAL SYNC: 98%'].map(s => (
                  <div key={s} className="flex justify-between items-center text-[10px] font-mono py-1 border-b border-white/5">
                    <span className="text-zinc-500">{s.split(': ')[0]}</span>
                    <span className="text-primary font-bold">{s.split(': ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hud-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <HardDrive className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-black uppercase tracking-widest italic">Local Gear Array</h4>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center">
                    <Lock className="w-3 h-3 text-zinc-700" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[9px] text-zinc-600 uppercase font-mono tracking-tighter">Awaiting R&D Deployment...</p>
            </div>
          </div>
        </div>

        {/* Right Column: Perks & Tier Details */}
        <aside className="space-y-8">
          <section className={cn("hud-border p-8 transition-colors duration-500", data.borderColor)}>
            <div className="mb-8">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Assigned Designation</div>
              <h3 className={cn("text-3xl font-black uppercase italic mb-4", data.color)}>{data.rank}</h3>
              <div className="text-[10px] font-mono opacity-50 uppercase leading-relaxed">
                {data.status}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase text-primary tracking-[0.2em] mb-4 block">ACTIVE PRIVILEGES</span>
                <div className="space-y-3">
                  {data.perks.map(perk => (
                    <div key={perk} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 border border-primary rotate-45" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button className="w-full py-3 bg-white/5 border border-white/10 text-white font-bold uppercase text-[10px] tracking-widest hover:bg-white/10 transition-colors">
                  Upgrade Clearance
                </button>
              </div>
            </div>
          </section>

          <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
            <div className="relative z-10">
              <Bell className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-sm font-bold uppercase italic mb-2 tracking-wide">Next Mission Ready</h4>
              <p className="text-[10px] text-zinc-500 leading-relaxed uppercase font-mono mb-6">
                Director Fury has authorized a new tactical sim for Level {data.clearance.includes('10') ? '10' : '7'}+ agents.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
