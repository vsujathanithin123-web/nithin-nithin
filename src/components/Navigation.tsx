import { Link, useLocation } from 'react-router-dom';
import { Shield, Users, Zap, Calendar, ShoppingBag, Award, Database, Newspaper } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const NAV_ITEMS = [
  { href: '/', label: 'Command Center', icon: Shield },
  { href: '/about', label: 'About HQ', icon: Users },
  { href: '/dashboard', label: 'Agent Hub', icon: Shield },
  { href: '/training', label: 'Training Sims', icon: Zap },
  { href: '/database', label: 'Hero Database', icon: Database },
  { href: '/villains', label: 'Villains File', icon: Users },
  { href: '/timeline', label: 'Mission Timeline', icon: Calendar },
  { href: '/news', label: 'S.H.I.E.L.D. Intel', icon: Newspaper },
  { href: '/shop', label: 'Gear Store', icon: ShoppingBag },
  { href: '/membership', label: 'Initiative Join', icon: Award },
  { href: '/quiz', label: 'Tactical Quiz', icon: Zap },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-full w-20 md:w-64 bg-black/80 border-r border-primary/20 backdrop-blur-xl z-50 flex flex-col pt-8 pb-4">
      <div className="px-6 mb-12 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary animate-pulse">
          <span className="text-xl font-black text-primary italic">A</span>
        </div>
        <span className="hidden md:block font-bold tracking-tighter text-xl glitch-text">AVENGERS HQ</span>
      </div>

      <div className="flex-1 flex flex-col gap-2 px-2 md:px-4">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "relative group flex items-center gap-4 p-3 rounded-lg transition-all duration-300 overflow-hidden",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/30" 
                  : "text-zinc-500 hover:text-primary hover:bg-primary/5"
              )}
            >
              <Icon className="w-6 h-6 shrink-0" />
              <span className="hidden md:block font-medium text-sm tracking-wide">{item.label}</span>
              {isActive && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className="px-4 mt-auto">
        <div className="p-4 rounded-xl hud-border bg-primary/5 hidden md:block">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">System Online</span>
          </div>
          <p className="text-[10px] font-mono text-primary/70 leading-tight">
            DECRYPTING DATA PACKETS...
            98% SCAN COMPLETE
          </p>
        </div>
      </div>
    </nav>
  );
}
