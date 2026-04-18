'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Sparkles, CheckCircle2, MessageSquareCode, Zap, Loader2 } from 'lucide-react';

interface VerseData {
  verse_key: string;
  text_uthmani: string;
  translations: { text: string }[];
}

export default function SessionPage() {
  const router = useRouter();
  const [verse, setVerse] = useState<VerseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    async function fetchVerse() {
      try {
        const response = await fetch('/api/quran/verse');
        const data = await response.json();
        setVerse(data);
      } catch (error) {
        console.error('Failed to fetch verse:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchVerse();
  }, []);

  const handleFinish = () => {
    setIsCompleted(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Loading daily session...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[80vh] w-full max-w-4xl mx-auto space-y-8 py-10 animate-in fade-in duration-700">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Today's Session</p>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Focus & Reflection</h1>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
          <Zap className="w-5 h-5 text-primary fill-primary animate-pulse" />
          <span className="text-lg font-bold text-white tracking-tight text-nowrap">Real Streak active</span>
        </div>
      </header>

      <main className="flex-1 space-y-12">
        {/* Verse Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 text-gray-500 mb-6 font-mono text-sm uppercase tracking-widest border-b border-white/5 pb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Verse {verse?.verse_key}</span>
          </div>

          <div className="space-y-10">
            <p className="quran-text text-5xl md:text-6xl text-white leading-[1.8] text-right drop-shadow-lg">
              {verse?.text_uthmani}
            </p>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1 glass-panel p-8 rounded-[2rem] border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                <div 
                  className="text-xl md:text-2xl font-serif italic text-gray-200 leading-[1.6] select-none text-balance"
                  dangerouslySetInnerHTML={{ __html: verse?.translations[0]?.text || "" }}
                />
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">Verified Translation</span>
                  <BookOpen className="w-5 h-5 text-gray-600" />
                </div>
              </div>

              <div className="w-full lg:w-80 space-y-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Hackathon mode</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium capitalize">
                    Connected to Quran Foundation API. Deepen your understanding with real-time data.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl border border-dashed border-white/10 text-center py-10 group cursor-pointer hover:border-primary/50 transition-all">
                  <MessageSquareCode className="w-10 h-10 text-gray-600 mx-auto mb-4 group-hover:text-primary transition-colors" />
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Add a personal reflection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Button */}
        <div className="flex flex-col items-center justify-center py-12">
          {isCompleted ? (
            <div className="flex flex-col items-center gap-6 animate-in zoom-in duration-500">
              <div className="w-24 h-24 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-500 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">BarakAllah!</h2>
                <p className="text-gray-400 font-medium">Your habit for today is officially logged.</p>
              </div>
            </div>
          ) : (
            <Button 
              size="lg" 
              className="h-16 px-16 rounded-full bg-primary text-black font-extrabold text-xl hover:bg-primary/90 shadow-[0_20px_40px_-10px_rgba(255,196,56,0.3)] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 group"
              onClick={handleFinish}
            >
              Complete Habit <CheckCircle2 className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
