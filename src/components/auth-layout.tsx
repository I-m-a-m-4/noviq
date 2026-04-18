import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  quote: string;
  subtitle: string;
}

export default function AuthLayout({ children, imageSrc, quote, subtitle }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full font-sans text-gray-900 bg-white">
      {/* Left Side: Form */}
      <div className="flex flex-col w-full lg:w-1/2 p-8 md:p-12 lg:p-20 justify-between relative overflow-y-auto">
        <header>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <BookOpen className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-black">Quran Circle</span>
          </Link>
        </header>

        <main className="max-w-md w-full mx-auto my-auto py-12">
          {children}
        </main>

        <footer className="text-sm text-gray-500 text-center lg:text-left">
          © {new Date().getFullYear()} Quran Circle. Built for the sake of Allah.
        </footer>
      </div>

      {/* Right Side: Image & Branding */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gray-900">
        <img 
          src={imageSrc} 
          alt="Auth background" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-end p-20 h-full w-full">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white tracking-tight leading-tight">
              {quote}
            </h2>
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed font-medium">
              {subtitle}
            </p>
            
            <div className="flex gap-2 pt-8">
              <div className="h-1.5 w-12 rounded-full bg-primary" />
              <div className="h-1.5 w-4 rounded-full bg-white/20" />
              <div className="h-1.5 w-4 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
