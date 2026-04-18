"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, LayoutDashboard, Target, BarChart3, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Session', href: '/dashboard/session', icon: BookOpen },
  { name: 'Circle', href: '/dashboard/circle', icon: Target },
  { name: 'Progress', href: '/dashboard/progress', icon: BarChart3 },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r border-white/5 bg-[#0F1012] flex flex-col h-screen fixed left-0 top-0 z-40">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-black" />
          </div>
          <span className="text-lg font-semibold tracking-tighter text-white">Quran Circle</span>
        </Link>

        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                pathname === item.href 
                  ? "bg-white/5 text-primary border border-white/5" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-xl glass-panel">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://picsum.photos/seed/user1/100/100" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-medium text-white truncate">Abdullah D.</p>
            <p className="text-[10px] text-gray-500 truncate">12 Day Streak</p>
          </div>
        </div>

        <button 
          onClick={() => {
            // In a real app, clear sessions/cookies here
            window.location.href = '/login';
          }}
          className="flex items-center gap-3 px-3 py-2 w-full text-gray-500 hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Log out</span>
        </button>
      </div>
    </div>
  );
}
