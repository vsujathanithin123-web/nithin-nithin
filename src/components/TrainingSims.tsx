import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, Target, Award, Play, RotateCcw, Trophy } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// --- BRONZE GAME: HYDRA TARGET PRACTICE ---
function BronzeGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [target, setTarget] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const spawnTarget = () => {
    setTarget({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    });
  };

  const handleClick = () => {
    if (!isPlaying) return;
    setScore(s => s + 100);
    spawnTarget();
  };

  useEffect(() => {
    let timer: any;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between mb-4 font-mono text-xs text-primary">
        <span>SCORE: {score}</span>
        <span>TIME: {timeLeft}s</span>
      </div>
      <div 
        ref={containerRef}
        className="flex-1 bg-black/40 border border-white/5 rounded-lg relative overflow-hidden cursor-crosshair"
      >
        {!isPlaying ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
            <h4 className="text-xl font-black italic mb-4">RECRICT TARGET PRACTICE</h4>
            <p className="text-zinc-500 text-[10px] uppercase mb-6">Neutralize Hydra anomalies as fast as possible</p>
            <button 
              onClick={() => { setIsPlaying(true); setScore(0); setTimeLeft(30); spawnTarget(); }}
              className="px-6 py-2 bg-primary text-white font-bold uppercase text-[10px] tracking-widest hover:active-glow transition-all"
            >
              Start Drill
            </button>
          </div>
        ) : (
          <motion.div
            animate={{ left: `${target.x}%`, top: `${target.y}%` }}
            className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-4 border-primary bg-primary/20 flex items-center justify-center"
            onClick={handleClick}
          >
            <Target className="w-6 h-6 text-primary" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

// --- SILVER GAME: ARC REACTOR SYNC ---
function SilverGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [syncLevel, setSyncLevel] = useState(0);
  const [targetSync, setTargetSync] = useState(50);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('INITIATE SYNC');

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setTargetSync(Math.random() * 100);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSync = () => {
    if (!isPlaying) return;
    const diff = Math.abs(syncLevel - targetSync);
    if (diff < 10) {
      setScore(s => s + 500);
      setMessage('SYNC SUCCESS!');
      setTimeout(() => setMessage('SYNCING...'), 1000);
    } else {
      setMessage('SYNC FAILED!');
      setTimeout(() => setMessage('SYNCING...'), 1000);
    }
  };

  return (
    <div className="h-full flex flex-col">
       <div className="flex justify-between mb-4 font-mono text-xs text-primary">
        <span>STARK ENERGY: {score}</span>
        <span>SYSTEM: {message}</span>
      </div>
      <div className="flex-1 bg-black/40 border border-white/5 rounded-lg p-8 flex flex-col justify-center gap-12">
        {!isPlaying ? (
          <div className="text-center">
            <h4 className="text-xl font-black italic mb-4">REACTOR FREQUENCY SYNC</h4>
             <button 
              onClick={() => setIsPlaying(true)}
              className="px-6 py-2 bg-primary text-white font-bold uppercase text-[10px] tracking-widest"
            >
              Calibrate
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                <span>Target Frequency</span>
                <span>{targetSync.toFixed(1)}Hz</span>
              </div>
              <div className="h-4 bg-zinc-900 rounded-full relative">
                <motion.div 
                  animate={{ left: `${targetSync}%` }}
                  className="absolute top-0 bottom-0 w-8 -ml-4 bg-primary/20 border-x border-primary" 
                />
              </div>
            </div>

            <div className="space-y-4">
               <div className="flex justify-between text-[10px] font-mono text-primary uppercase">
                <span>Current Output</span>
                <span>{syncLevel.toFixed(1)}Hz</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={syncLevel}
                onChange={(e) => setSyncLevel(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <button 
              onClick={handleSync}
              className="w-full py-4 bg-primary/10 border border-primary text-primary font-black uppercase text-[10px] tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              Stabilize Energy
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// --- GOLD GAME: MULTIVERSE DEFENSE ---
function GoldGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const gameState = useRef({
    hero: { x: 0, y: 0 },
    enemies: [] as { x: number, y: number, speed: number }[],
    projectiles: [] as { x: number, y: number }[]
  });

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    gameState.current = {
      hero: { x: 250, y: 350 },
      enemies: [],
      projectiles: []
    };
  };

  useEffect(() => {
    if (!isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame: number;
    const loop = () => {
      // Logic
      if (Math.random() < 0.05) {
        gameState.current.enemies.push({ 
          x: Math.random() * canvas.width, 
          y: -20, 
          speed: 2 + Math.random() * 3 
        });
      }

      gameState.current.enemies = gameState.current.enemies.filter(e => {
        e.y += e.speed;
        return e.y < canvas.height;
      });

      gameState.current.projectiles = gameState.current.projectiles.filter(p => {
        p.y -= 7;
        return p.y > 0;
      });

      // Hit detection
      gameState.current.projectiles.forEach((p, pi) => {
        gameState.current.enemies.forEach((e, ei) => {
          const dist = Math.hypot(p.x - e.x, p.y - e.y);
          if (dist < 20) {
            gameState.current.enemies.splice(ei, 1);
            gameState.current.projectiles.splice(pi, 1);
            setScore(s => s + 10);
          }
        });
      });

      // Draw
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Hero
      ctx.fillStyle = '#D1232A';
      ctx.beginPath();
      ctx.moveTo(gameState.current.hero.x, gameState.current.hero.y - 15);
      ctx.lineTo(gameState.current.hero.x - 15, gameState.current.hero.y + 15);
      ctx.lineTo(gameState.current.hero.x + 15, gameState.current.hero.y + 15);
      ctx.fill();

      // Draw Enemies
      ctx.fillStyle = '#666';
      gameState.current.enemies.forEach(e => {
        ctx.fillRect(e.x - 10, e.y - 10, 20, 20);
      });

      // Draw Projectiles
      ctx.fillStyle = '#fff';
      gameState.current.projectiles.forEach(p => {
        ctx.fillRect(p.x - 2, p.y - 10, 4, 10);
      });

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying]);

  const handleInput = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = ('clientX' in e ? e.clientX : e.touches[0].clientX) - rect.left;
    gameState.current.hero.x = x;
    
    // Auto-fire logic or click to fire
    gameState.current.projectiles.push({ x: gameState.current.hero.x, y: gameState.current.hero.y - 20 });
  };

  return (
    <div className="h-full flex flex-col">
       <div className="flex justify-between mb-4 font-mono text-xs text-primary">
        <span>MULTIVERSE THREATS NEUTRALIZED: {score}</span>
        <span>PROTOCOL: OMEGA FORCE</span>
      </div>
      <div className="flex-1 bg-black/40 border border-white/5 rounded-lg relative overflow-hidden">
        {!isPlaying ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10 p-8 text-center">
            <h4 className="text-xl font-black italic mb-4">OMEGA THREAT RESPONSE</h4>
            <p className="text-zinc-500 text-[10px] uppercase mb-6">Control your sub-orbital vessel and defend the sanctuary. Move to aim, click to fire.</p>
            <button 
              onClick={startGame}
              className="px-8 py-3 bg-white text-black font-black uppercase text-[10px] tracking-widest active-glow"
            >
              Authorize Mission
            </button>
          </div>
        ) : (
          <canvas 
            ref={canvasRef}
            width={500}
            height={400}
            onMouseMove={handleInput}
            onClick={handleInput}
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
}

// --- MAIN HUB ---
export function TrainingSims() {
  const [activeSim, setActiveSim] = useState<'bronze' | 'silver' | 'gold'>('bronze');

  const SIMS = [
    { id: 'bronze', label: 'Bronze Clearance', title: 'Target Practice', component: BronzeGame, level: 'Recruit' },
    { id: 'silver', label: 'Silver Clearance', title: 'Reactor Sync', component: SilverGame, level: 'Agent' },
    { id: 'gold', label: 'Gold Clearance', title: 'Omega Defense', component: GoldGame, level: 'Avenger' },
  ];

  const current = SIMS.find(s => s.id === activeSim)!;
  const ActiveComp = current.component;

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-80 flex flex-col gap-6">
          <div className="mb-8">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
              Training <span className="text-primary italic">Sims</span>
            </h2>
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.3em]">Holographic Combat Range</p>
          </div>

          <div className="space-y-4">
            {SIMS.map((sim) => (
              <button
                key={sim.id}
                onClick={() => setActiveSim(sim.id as any)}
                className={cn(
                  "w-full text-left p-6 hud-border group transition-all",
                  activeSim === sim.id ? "active-glow border-primary/50" : "opacity-60 hover:opacity-100"
                )}
              >
                <div className="text-[8px] font-mono text-primary uppercase mb-1 tracking-widest">{sim.level} ACCESS</div>
                <h3 className="text-lg font-black uppercase italic tracking-tight">{sim.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-[8px] font-mono text-zinc-500">
                  <Play className={cn("w-3 h-3", activeSim === sim.id ? "text-primary fill-primary" : "")} />
                  {activeSim === sim.id ? "SIMULATION ACTIVE" : "LOCK SECTOR"}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-auto p-6 bg-primary/5 border border-primary/10 rounded-xl hidden lg:block">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-mono uppercase font-bold text-zinc-400 tracking-widest">HQ Leaderboard</span>
            </div>
            <div className="space-y-3">
              {[
                { name: 'STARK_T', score: '99,420' },
                { name: 'ROGERS_S', score: '88,150' },
                { name: 'PARKER_P', score: '72,900' }
              ].map((entry, idx) => (
                <div key={idx} className="flex justify-between text-[10px] font-mono border-b border-white/5 pb-1">
                  <span className="text-zinc-500">{entry.name}</span>
                  <span className="text-primary">{entry.score}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 min-h-[600px] flex flex-col">
          <div className="hud-border flex-1 p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSim}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{current.label} Required</span>
                    <h2 className="text-3xl font-black uppercase italic">{current.title}</h2>
                  </div>
                  <button onClick={() => window.location.reload()} className="p-2 border border-white/10 hover:border-primary transition-colors rounded">
                    <RotateCcw className="w-4 h-4 text-zinc-500" />
                  </button>
                </div>
                <div className="flex-1 min-h-[400px]">
                  <ActiveComp />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
