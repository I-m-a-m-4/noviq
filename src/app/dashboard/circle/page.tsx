'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  MessageSquare, 
  Settings, 
  Share2, 
  CheckCircle2, 
  History,
  Zap,
  ArrowRight,
  TrendingUp,
  Inbox
} from 'lucide-react';

const MEMBERS = [
  { id: 1, name: "Abdullah D.", avatar: "https://picsum.photos/seed/user1/100/100", status: "Completed", streak: 12 },
  { id: 2, name: "Hamza R.", avatar: "https://picsum.photos/seed/user2/100/100", status: "Completed", streak: 8 },
  { id: 3, name: "Zaid K.", avatar: "https://picsum.photos/seed/user3/100/100", status: "Pending", streak: 0 },
  { id: 4, name: "Umar S.", avatar: "https://picsum.photos/seed/user4/100/100", status: "Completed", streak: 15 },
];

export default function CirclePage() {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase">
            <Users className="w-3 h-3" /> 4 Active Members
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Faith Seekers</h1>
          <p className="text-gray-500 font-medium">Your private accountability circle for spiritual consistency.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 gap-2">
            <Share2 className="w-4 h-4" /> Invite
          </Button>
          <Button className="h-12 px-6 rounded-full bg-white text-black font-bold hover:bg-gray-200 gap-2">
            <MessageSquare className="w-4 h-4" /> Circle Chat
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Members List */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" /> Today's Velocity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MEMBERS.map((member) => (
              <Card key={member.id} className="glass-panel border-none group hover:bg-white/[0.08] transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12 border-2 border-white/10 group-hover:border-primary/50 transition-all">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        {member.status === 'Completed' && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full border-2 border-gray-950 p-0.5">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-white group-hover:text-primary transition-colors">{member.name}</p>
                        <p className="text-xs text-gray-500 font-medium">Joined Jan 2024</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 rounded-full px-3 py-1 mb-2 group-hover:shadow-[0_0_15px_rgba(255,196,56,0.15)] transition-all">
                        <Zap className="w-3 h-3 text-primary fill-primary" />
                        <span className="text-xs font-bold text-white tracking-tight">{member.streak}d</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${member.status === 'Completed' ? 'text-green-500' : 'text-gray-600'}`}>
                        {member.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${member.status === 'Completed' ? 'w-full bg-green-500' : 'w-1/3 bg-gray-600'}`} 
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Circle History Card */}
          <Card className="glass-panel border-none">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white/5">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2 px-3">
                <History className="w-5 h-5 text-gray-400" /> Circle Timeline
              </CardTitle>
              <Button variant="ghost" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest font-bold">
                See all activity
              </Button>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 relative">
                  {i !== 3 && <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-white/5" />}
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-white">Surah Al-Imran Session</p>
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Yesterday, 9:20 PM</span>
                    </div>
                    <p className="text-sm text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5 italic">
                      "Collective effort today. All members completed their habit before Maghrib."
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Side Panel: Settings & Info */}
        <div className="space-y-6">
          <Card className="glass-panel border-none p-8 space-y-6 bg-gradient-to-b from-primary/10 via-transparent to-transparent">
            <h3 className="text-xl font-bold text-white mb-4">Circle DNA</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Target Consistency</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-extrabold text-white">92%</span>
                  <span className="text-xs font-bold text-green-500">+4% this week</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-primary animate-shimmer" />
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Challenge</p>
                <p className="text-lg font-bold text-white tracking-tight">30-Day Surah Al-Kahf Journey</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Join the circle in finishing Al-Kahf's tafsir by the end of Ramadan.
                </p>
                <Button className="w-full h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 mt-4 gap-2 text-xs font-bold uppercase tracking-widest">
                  View Challenge <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="glass-panel p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all border border-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-500/10 text-gray-500 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                <Settings className="w-5 h-5" />
              </div>
              <span className="font-bold text-white group-hover:text-primary transition-colors">Circle Settings</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
