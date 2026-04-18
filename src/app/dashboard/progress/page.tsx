'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  Target, 
  Calendar, 
  TrendingUp, 
  Award,
  BookOpen,
  Clock,
  ArrowRight
} from 'lucide-react';

const PROGRESS_STATS = [
  { label: "Current Streak", value: "5 Days", icon: Zap, color: "text-amber-500 bg-amber-500/10" },
  { label: "Total Reflections", value: "24", icon: BookOpen, color: "text-blue-500 bg-blue-500/10" },
  { label: "Time Invested", value: "120m", icon: Clock, color: "text-green-500 bg-green-500/10" },
  { label: "Completion Rate", value: "85%", icon: TrendingUp, color: "text-purple-500 bg-purple-500/10" },
];

const RECENT_HISTORY = [
  { date: "Yesterday", surah: "Al-Baqarah", verse: "2:153", status: "Completed" },
  { date: "2 days ago", surah: "Ash-Sharh", verse: "94:5-6", status: "Completed" },
  { date: "3 days ago", surah: "Al-Kahf", verse: "18:1", status: "Completed" },
  { date: "4 days ago", surah: "Al-Ikhlas", verse: "112:1", status: "Completed" },
  { date: "5 days ago", surah: "An-Nasr", verse: "110:1-3", status: "Completed" },
];

export default function ProgressPage() {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-700">
      <header>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Growth Map</h1>
        <p className="text-gray-500 font-medium">Measuring your spiritual consistency over time.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROGRESS_STATS.map((stat) => (
          <Card key={stat.label} className="glass-panel border-none group transition-all hover:translate-y-[-2px]">
            <CardContent className="p-6 flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Heatmap Mockup */}
        <Card className="lg:col-span-2 glass-panel border-none">
          <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 pb-6">
            <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" /> Consistency Heatmap
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Year to date</span>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 70 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-[4px] transition-all hover:scale-110 ${
                    i % 3 === 0 ? 'bg-primary opacity-20' : 
                    i % 5 === 0 ? 'bg-primary opacity-60' : 
                    i % 7 === 0 ? 'bg-primary opacity-100 shadow-[0_0_15px_rgba(255,196,56,0.3)]' : 
                    'bg-white/5'
                  }`}
                />
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between text-xs font-bold text-gray-600 uppercase tracking-widest">
              <span>Less</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-[2px] bg-white/5" />
                <div className="w-3 h-3 rounded-[2px] bg-primary opacity-20" />
                <div className="w-3 h-3 rounded-[2px] bg-primary opacity-60" />
                <div className="w-3 h-3 rounded-[2px] bg-primary opacity-100" />
              </div>
              <span>More</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent History Table */}
        <Card className="glass-panel border-none flex flex-col">
          <CardHeader className="border-b border-white/5 pb-4">
            <CardTitle className="text-lg font-bold text-white mb-1">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-y-auto flex-1">
            <div className="divide-y divide-white/5">
              {RECENT_HISTORY.map((item, i) => (
                <div key={i} className="p-4 px-6 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.date}</span>
                      <span className="text-xs text-gray-600 font-mono">{item.verse}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{item.surah}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full p-4 text-xs font-bold text-gray-500 hover:text-white transition-all border-t border-white/5 uppercase tracking-widest flex items-center justify-center gap-2 group">
              View All History <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Achievements Card */}
      <Card className="glass-panel border-none p-12 text-center bg-gradient-to-br from-primary/5 via-transparent to-transparent relative overflow-hidden group">
        <div className="absolute inset-0 bg-dot-grid opacity-20 group-hover:scale-105 transition-transform duration-1000" />
        <Award className="w-16 h-16 text-primary mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,196,56,0.5)] animate-bounce" />
        <h2 className="text-3xl font-extrabold text-white mb-2">Spiritual Mile Markers</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 font-medium">You've unlocked 4 spiritual milestones this month. Keep building your consistency for the ultimate reward.</p>
        <button className="h-14 px-10 rounded-full bg-white text-black font-extrabold text-lg hover:bg-gray-200 transition-all shadow-xl shadow-white/5">
          View Achievements
        </button>
      </Card>
    </div>
  );
}
