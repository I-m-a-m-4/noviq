import { MOCK_USER, MOCK_CIRCLE, MOCK_MEMBERS_DATA } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Target, ArrowRight, Play, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const user = MOCK_USER;
  const circle = MOCK_CIRCLE;

  const completedCount = Object.values(circle.dailyStatus).filter(Boolean).length;
  const totalCount = circle.members.length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">As-Salamu Alaykum, {user.name}</h1>
          <p className="text-gray-500">Your Niyyah: <span className="text-primary">{user.niyyah}</span></p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-full px-4 py-2">
          <Zap className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-bold text-white">{user.streak} Day Streak</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Action Card */}
        <Card className="lg:col-span-2 glass-panel overflow-hidden border-none group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
          <CardContent className="p-8 relative">
            <div className="flex flex-col h-full justify-between gap-8">
              <div className="space-y-2">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Today's Focus</p>
                <h2 className="text-3xl font-bold text-white max-w-md">"And remember Allah often that you may succeed."</h2>
                <p className="text-gray-400 max-w-sm">Build consistency for the sake of Allah. Take 5 minutes for your daily engagement.</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Link href="/dashboard/session">
                  <Button size="lg" className="rounded-full bg-primary text-black hover:bg-primary/90 px-8">
                    <Play className="mr-2 w-4 h-4 fill-current" /> Start Today's Session
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>5 mins commitment</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Circle Card */}
        <Card className="glass-panel border-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-white">{circle.name}</h3>
              </div>
              <span className="text-xs text-gray-500">{completedCount} of {totalCount} done</span>
            </div>

            <div className="space-y-4">
              {circle.members.map((memberId) => {
                const member = MOCK_MEMBERS_DATA[memberId];
                const isCompleted = circle.dailyStatus[memberId];
                return (
                  <div key={memberId} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={member.avatar} className="w-8 h-8 rounded-full border border-white/10" />
                        {isCompleted && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full border-2 border-card">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-300">{member.name} {memberId === user.id && '(You)'}</span>
                    </div>
                    {isCompleted ? (
                      <span className="text-[10px] font-bold text-green-500 uppercase">Completed</span>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-600 uppercase">Pending</span>
                    )}
                  </div>
                );
              })}
            </div>

            <Link href="/dashboard/circle" className="w-full">
              <Button variant="ghost" className="w-full mt-6 text-gray-400 hover:text-white hover:bg-white/5 text-xs">
                View Circle Details <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Progress Quick View */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl">
          <p className="text-xs text-gray-500 font-bold uppercase mb-4">Consistency</p>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">85%</span>
            <span className="text-sm text-green-500 mb-1">+5% from last week</span>
          </div>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <p className="text-xs text-gray-500 font-bold uppercase mb-4">Total Reflections</p>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">24</span>
            <span className="text-sm text-gray-500 mb-1">Total verses pondered</span>
          </div>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <p className="text-xs text-gray-500 font-bold uppercase mb-4">Current Niyyah</p>
          <p className="text-lg font-medium text-white line-clamp-2">{user.niyyah}</p>
        </div>
      </section>
    </div>
  );
}
