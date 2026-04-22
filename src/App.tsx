import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CharacterGrid } from './components/CharacterDatabase';
import { MissionTimeline } from './components/Timeline';
import { NewsFeed } from './components/NewsFeed';
import { GearStore } from './components/GearStore';
import { InitiativeJoin } from './components/InitiativeJoin';
import { TacticalQuiz } from './components/TacticalQuiz';
import { AboutHQ } from './components/AboutHQ';
import { TrainingSims } from './components/TrainingSims';
import { MemberDashboard } from './components/MemberDashboard';
import { HEROES, VILLAINS } from './data';

export default function App() {
  return (
    <Router>
      <div className="flex bg-black min-h-screen text-white selection:bg-primary/30">
        <div className="scanline" />
        <Navigation />
        
        <main className="flex-1 ml-20 md:ml-64 relative">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutHQ />} />
            <Route path="/dashboard" element={<MemberDashboard />} />
            <Route path="/training" element={<TrainingSims />} />
            <Route path="/database" element={
              <div className="px-4 md:px-8 max-w-7xl mx-auto">
                <CharacterGrid 
                  characters={HEROES} 
                  title="Avengers" 
                  type="hero" 
                />
              </div>
            } />
            <Route path="/villains" element={
              <div className="px-4 md:px-8 max-w-7xl mx-auto">
                <CharacterGrid 
                  characters={VILLAINS} 
                  title="Villains" 
                  type="villain" 
                />
              </div>
            } />
            <Route path="/timeline" element={<MissionTimeline />} />
            <Route path="/news" element={<NewsFeed />} />
            <Route path="/shop" element={<GearStore />} />
            <Route path="/membership" element={<InitiativeJoin />} />
            <Route path="/quiz" element={<TacticalQuiz />} />
          </Routes>

          {/* Global Footer Decoration */}
          <footer className="mt-auto px-8 py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col">
              <span className="text-xl font-black italic tracking-tighter text-zinc-300">MARVEL AVENGERS</span>
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-1">Stark Industries Powered // Level 7 Access Required</span>
            </div>
            <div className="flex gap-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              <a href="#" className="hover:text-primary transition-colors">Privacy Protocols</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Heroism</a>
              <a href="#" className="hover:text-primary transition-colors">Contact HQ</a>
            </div>
            <p className="text-[10px] font-mono text-zinc-700 uppercase">© 2026 S.H.I.E.L.D. World Security Council</p>
          </footer>
        </main>
      </div>
    </Router>
  );
}
