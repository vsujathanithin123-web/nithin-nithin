import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '@/src/data';
import { Trophy, RefreshCcw, ArrowRight, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function TacticalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    if (option === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    const next = currentQuestion + 1;
    if (next < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(next);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
            Tactical <span className="text-primary italic">Assessment</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs uppercase">Verify your knowledge of Earth's Mightiest Heroes</p>
        </div>

        <div className="hud-border p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-primary/20 -translate-y-1/2 translate-x-1/2 rounded-full" />
          
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative z-10"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
                    QUESTION {currentQuestion + 1} / {QUIZ_QUESTIONS.length}
                  </span>
                  <div className="flex gap-1">
                    {QUIZ_QUESTIONS.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "w-8 h-1 rounded-full bg-zinc-900 border border-zinc-800 transition-colors",
                          i <= currentQuestion && "bg-primary border-primary"
                        )} 
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-10 leading-tight">
                  {QUIZ_QUESTIONS[currentQuestion].question}
                </h3>

                <div className="grid grid-cols-1 gap-4 mb-10">
                  {QUIZ_QUESTIONS[currentQuestion].options.map((option) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = selectedAnswer && option === QUIZ_QUESTIONS[currentQuestion].correctAnswer;
                    const isWrong = isSelected && option !== QUIZ_QUESTIONS[currentQuestion].correctAnswer;

                    return (
                      <button
                        key={option}
                        disabled={selectedAnswer !== null}
                        onClick={() => handleAnswer(option)}
                        className={cn(
                          "w-full p-4 text-left border border-zinc-800 bg-zinc-900/50 hover:border-primary/50 transition-all font-bold uppercase text-sm flex justify-between items-center",
                          isSelected && "border-primary bg-primary/10",
                          isCorrect && "border-green-500 bg-green-500/10 text-green-500",
                          isWrong && "border-red-500 bg-red-500/10 text-red-500"
                        )}
                      >
                        {option}
                        {isSelected && <Zap className="w-4 h-4 fill-current" />}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={nextQuestion}
                    className="flex items-center gap-2 text-primary font-black uppercase italic tracking-widest ml-auto"
                  >
                    Next Signal <ArrowRight className="w-5 h-5" />
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="inline-block p-6 rounded-full bg-primary/10 border border-primary/30 mb-8">
                  <Trophy className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-4xl font-black uppercase italic mb-4">Assessment Complete</h3>
                <p className="text-zinc-500 font-mono mb-8 uppercase tracking-widest text-sm">
                  Tactical IQ Score: <span className="text-white text-2xl ml-2">{Math.round((score / QUIZ_QUESTIONS.length) * 100)}%</span>
                </p>
                <div className="mb-12">
                  <p className="text-lg font-bold text-zinc-300">
                    {score === QUIZ_QUESTIONS.length 
                      ? "UNMATCHED INTELLECT. Stark would be impressed." 
                      : score > QUIZ_QUESTIONS.length / 2 
                        ? "Competent Agent. Further briefing required." 
                        : "Civilian Status Confirmed. Keep training."}
                  </p>
                </div>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-primary text-black font-black uppercase italic tracking-widest flex items-center gap-2 mx-auto hover:bg-white transition-colors"
                >
                  <RefreshCcw className="w-5 h-5" />
                  Restart Assessment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Proprietary Assessment // S.H.I.E.L.D. Division of Education</p>
        </div>
      </div>
    </div>
  );
}
