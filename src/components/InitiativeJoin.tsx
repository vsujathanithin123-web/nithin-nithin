import { motion } from 'motion/react';
import { Check, Shield, Zap, Award, Facebook, MessageSquare, Settings, User, CreditCard, Eye, Key, Package } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const BUNDLES = [
  {
    name: 'Bronze',
    price: 'Free',
    description: 'Basic access to public news and civilian hero files.',
    features: ['Public Intel Archive', 'Hero Database', 'Basic Tactical Quiz'],
    icon: Shield,
    accent: 'bg-orange-950/20 text-orange-500 border-orange-500/20',
    attachment: {
      name: 'Digital ID Card',
      desc: 'Standard S.H.I.E.L.D identification for civilian consultants.',
      icon: CreditCard
    }
  },
  {
    name: 'Silver',
    price: '$9.99/mo',
    description: 'Advanced tactical intel and priority store access.',
    features: ['Classified Villain Dossiers', 'Early Gear Drops', 'Rank Designation', 'Custom UI HUD'],
    icon: Award,
    accent: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    popular: true,
    attachment: {
      name: 'Stark HUD Interface',
      desc: 'Exclusive "Friday" A.I. skin for your command platform.',
      icon: Eye
    }
  },
  {
    name: 'Gold',
    price: '$24.99/mo',
    description: 'Elite clearance. Full multiverse tracking and R&D perks.',
    features: ['Level 10 Global Intel', 'Exclusive Stark Gear', 'Daily Mission Briefs', 'Multiverse Sync'],
    icon: Zap,
    accent: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    attachment: {
      name: 'Vibranium Priority Key',
      desc: 'Physical authentication device for secure HQ entry.',
      icon: Key
    }
  }
];

export function InitiativeJoin() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* User Account Controls */}
        <div className="flex justify-end mb-12 gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
            <User className="w-3 h-3" />
            Sign In
          </button>
          <Link 
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-primary/80 transition-colors"
          >
            <Settings className="w-3 h-3" />
            Manage Account
          </Link>
        </div>

        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 border border-primary/30 rounded-full mb-6"
          >
            <Shield className="w-8 h-8 text-primary animate-pulse" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Security <span className="text-primary italic">Clearance</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed text-sm">
            Unlock higher level access to S.H.I.E.L.D databases. Choose your tier of the Avengers Initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {BUNDLES.map((bundle, index) => {
            const Icon = bundle.icon;
            const AttachmentIcon = bundle.attachment.icon;
            return (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative p-10 hud-border flex flex-col group",
                  bundle.popular && "active-glow bg-primary/5"
                )}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-sm uppercase tracking-widest">
                    Recommended Clearance
                  </div>
                )}
                
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-8 border", bundle.accent)}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-3xl font-black uppercase italic mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {bundle.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-2xl font-black">{bundle.price}</span>
                  {bundle.price !== 'Free' && <span className="text-[10px] opacity-40 uppercase font-mono ml-2 tracking-widest">/mo</span>}
                </div>
                
                <p className="text-zinc-500 text-xs mb-8 leading-relaxed">
                  {bundle.description}
                </p>

                <div className="space-y-4 mb-8 flex-1">
                  {bundle.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Check className="w-2 h-2 text-primary" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bundle Attachment Perk */}
                <div className="mb-10 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg group/perk">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 bg-primary/10 rounded border border-primary/20">
                      <AttachmentIcon className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">Sign-on Attachment</span>
                  </div>
                  <h4 className="text-[11px] font-bold uppercase mb-1">{bundle.attachment.name}</h4>
                  <p className="text-[9px] text-zinc-500 leading-tight uppercase font-mono">{bundle.attachment.desc}</p>
                </div>

                <button className={cn(
                  "w-full py-4 font-bold uppercase tracking-widest transition-all text-xs rounded-lg",
                  bundle.name === 'Silver' 
                    ? "bg-primary text-white hover:bg-primary/90 active-glow shadow-primary/20" 
                    : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                )}>
                  Enlist Now
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Tactical Shipment Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-24 p-8 border border-white/5 bg-zinc-950/50 rounded-2xl flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
            <Package className="w-8 h-8 text-zinc-600" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Global Logistics // Stark Shipping</h4>
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em] leading-relaxed">
              All physical attachments (Priority Keys, Agent Badges) are dispatched via Stark Secure Logistics. 
              Transit time may vary across dimensions.
            </p>
          </div>
        </motion.div>

        {/* Social Media CTAs */}
        <div className="mt-24 p-12 hud-border border-dashed flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-primary/5 via-transparent to-transparent">
          <div className="max-w-md">
            <h4 className="text-2xl font-black uppercase italic mb-3">Join the Multiverse Community</h4>
            <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-wide">
              Discuss tactics, share intel, and meet other agents across Earth-616 and beyond. 
              Stay connected with HQ on all major channels.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 px-6 py-4 bg-[#FF4500] text-white rounded-lg font-bold uppercase tracking-widest text-[10px] hover:brightness-110 transition-all">
              <MessageSquare className="w-4 h-4" />
              Agent Subreddit
            </button>
            <button className="flex items-center gap-3 px-6 py-4 bg-[#1877F2] text-white rounded-lg font-bold uppercase tracking-widest text-[10px] hover:brightness-110 transition-all">
              <Facebook className="w-4 h-4" />
              HQ Facebook Page
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Secure Access Node // World Security Council Protocol 13-A</p>
        </div>
      </div>
    </div>
  );
}
