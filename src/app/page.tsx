import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Headphones, 
  Clock, 
  Send,
  Zap,
  Users,
  MessageSquare,
  Heart,
  BookOpen,
  Menu
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#ECEDEE] text-[#232427] antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* PAGE SHELL */}
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 pt-2 sm:pt-4">
        
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-[#F4F5F5] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_20px_60px_-30px_rgba(35,36,39,0.25)] min-h-[100svh] flex flex-col">
          
          {/* Atmosphere - Bloom effects */}
          <div className="pointer-events-none absolute -right-40 top-0 h-[720px] w-[720px] rounded-full opacity-70 blur-3xl transition-transform duration-700 ease-out" style={{ background: 'radial-gradient(circle at 55% 45%, rgba(227,74,50,0.55), rgba(240,120,70,0.28) 40%, rgba(244,245,245,0) 70%)' }}></div>
          <div className="pointer-events-none absolute -left-52 top-24 h-[640px] w-[640px] rounded-full opacity-60 blur-3xl" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(46,48,52,0.35), rgba(120,124,130,0.15) 45%, rgba(244,245,245,0) 72%)' }}></div>
          <div className="pointer-events-none absolute right-1/4 -bottom-40 h-[420px] w-[560px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(227,74,50,0.25), rgba(244,245,245,0) 70%)' }}></div>

          {/* FLOATING NAV */}
          <div className="sticky top-3 sm:top-5 z-50 flex justify-center px-3 pt-4 sm:pt-6">
            <nav className="flex w-full max-w-[880px] items-center justify-between rounded-full border border-white/70 bg-white/75 py-2.5 pl-5 pr-2.5 backdrop-blur-xl transition-shadow duration-500 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_30px_-14px_rgba(35,36,39,0.25)]">
              <Link href="/" className="flex items-center gap-2.5">
                <Logo className="w-6 h-6" />
                <span className="text-base font-semibold">Quran Circle</span>
              </Link>
              <div className="hidden md:flex items-center gap-1 text-sm font-medium text-[#4b4d52]">
                <Link href="#how-it-works" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  How it Works
                </Link>
                <Link href="#features" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  Features
                </Link>
                <Link href="#community" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  Community
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/signup" className="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#171719] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_22px_-10px_rgba(23,23,25,0.7)] hover:shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_16px_28px_-10px_rgba(23,23,25,0.8)]">
                  Join Now
                  <ArrowRight className="h-4 w-4 opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" strokeWidth={1.5} />
                </Link>
                <button className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white shadow-sm">
                  <Menu className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
            </nav>
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-16 text-center sm:pt-24 lg:pb-36 flex-1 justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-medium text-[#E34A32] backdrop-blur shadow-[0_6px_16px_-8px_rgba(35,36,39,0.25)]">
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              AI-Powered Quran Study
            </div>

            {/* Headline */}
            <div className="relative mt-7">
              <h1 className="text-5xl font-semibold leading-[1.02] text-[#2E3034] sm:text-7xl lg:text-8xl" style={{ letterSpacing: '-0.035em' }}>
                The Quran speaks
                <br />
                <span className="relative inline-block font-serif-accent" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
                  directly to you
                  <span className="absolute -right-6 top-1/2 hidden h-16 w-40 -translate-y-1/2 translate-x-full rounded-full bg-gradient-to-br from-[#F05A3C] to-[#C93A24] opacity-90 blur-[1px] lg:block shadow-[0_20px_40px_-14px_rgba(227,74,50,0.6)]"></span>
                </span>
              </h1>
            </div>

            {/* Paragraph */}
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#55575c]">
              Tell Quran Circle what&apos;s on your mind — finances, health, patience, purpose — and Gemini AI finds the exact Quranic verses that speak to your situation.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Link href="/signup" className="group inline-flex items-center gap-2 rounded-full bg-[#171719] px-7 py-3.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_14px_28px_-12px_rgba(23,23,25,0.75)] hover:shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_20px_34px_-12px_rgba(23,23,25,0.85)]">
                Start your journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
              <Link href="/login" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-7 py-3.5 text-base font-medium text-[#2E3034] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_22px_-12px_rgba(35,36,39,0.3)] hover:shadow-[0_16px_30px_-12px_rgba(35,36,39,0.35)]">
                I already have an account
              </Link>
            </div>
            
            <div className="mt-14">
              <p className="text-xs font-medium uppercase tracking-widest text-[#8a8c91]">
                Powered by
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#55575c]">
                <span className="text-lg font-semibold opacity-60">Gemini AI</span>
                <span className="text-lg font-semibold opacity-60">Quran Foundation API</span>
                <span className="text-lg font-semibold opacity-60">Firebase</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section id="how-it-works" className="px-4 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#E34A32]">How it works</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#2E3034] sm:text-5xl" style={{ letterSpacing: '-0.035em' }}>
              Three steps to a meaningful Quran habit.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#55575c]">
              A simple daily practice that connects you with the Quran in a deeply personal way.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="group rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_30px_-18px_rgba(35,36,39,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-18px_rgba(35,36,39,0.3)] transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F5F5] border border-black/5 text-[#E34A32]">
                <Heart className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Share your intention</h3>
              <p className="mt-2 text-base leading-relaxed text-[#55575c]">
                Enter what&apos;s on your heart — your worries, hopes, or focus areas — in plain words.
              </p>
              <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#F4F5F5] px-3 py-1.5 text-xs font-medium text-[#55575c]">
                <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                Takes 2 minutes
              </p>
            </div>

            {/* Step 2 */}
            <div className="group rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_30px_-18px_rgba(35,36,39,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-18px_rgba(35,36,39,0.3)] transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F5F5] border border-black/5 text-[#E34A32]">
                <Sparkles className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">AI finds your verses</h3>
              <p className="mt-2 text-base leading-relaxed text-[#55575c]">
                Gemini AI searches the entire Quran to find verses most relevant to your situation.
              </p>
              <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#F4F5F5] px-3 py-1.5 text-xs font-medium text-[#55575c]">
                <Zap className="h-3.5 w-3.5" strokeWidth={1.5} />
                Instant matching
              </p>
            </div>

            {/* Step 3 */}
            <div className="group rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_30px_-18px_rgba(35,36,39,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-18px_rgba(35,36,39,0.3)] transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F5F5] border border-black/5 text-[#E34A32]">
                <BookOpen className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Read and reflect</h3>
              <p className="mt-2 text-base leading-relaxed text-[#55575c]">
                Study 5 personalized verses with Arabic text, translations, and audio recitation.
              </p>
              <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#F4F5F5] px-3 py-1.5 text-xs font-medium text-[#55575c]">
                <Headphones className="h-3.5 w-3.5" strokeWidth={1.5} />
                5 minutes daily
              </p>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section id="features" className="px-4 pb-24 sm:px-10 lg:px-16 lg:pb-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#E34A32]">Features</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#2E3034] sm:text-5xl" style={{ letterSpacing: '-0.035em' }}>
              Four pillars of Quranic engagement.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#55575c]">
              Quran Circle builds a complete ecosystem around daily reading, personal reflection, community accountability, and active memorization.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_30px_-18px_rgba(35,36,39,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-18px_rgba(35,36,39,0.3)] transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F5F5] border border-black/5 text-[#E34A32]">
                <Zap className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Daily Reading</h3>
              <p className="mt-2 text-base leading-relaxed text-[#55575c]">
                Build a consistent habit with personalized verses that speak to your daily life.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_30px_-18px_rgba(35,36,39,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-18px_rgba(35,36,39,0.3)] transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F5F5] border border-black/5 text-[#E34A32]">
                <Heart className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Reflection</h3>
              <p className="mt-2 text-base leading-relaxed text-[#55575c]">
                Turn the Quran into living guidance for your real-life concerns and challenges.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_30px_-18px_rgba(35,36,39,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-18px_rgba(35,36,39,0.3)] transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F5F5] border border-black/5 text-[#E34A32]">
                <Users className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Community</h3>
              <p className="mt-2 text-base leading-relaxed text-[#55575c]">
                Join circles of friends who keep each other accountable through shared goals.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-3xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_30px_-18px_rgba(35,36,39,0.25)] hover:-translate-y-1 hover:shadow-[0_24px_44px_-18px_rgba(35,36,39,0.3)] transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F5F5] border border-black/5 text-[#E34A32]">
                <Headphones className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Memorization</h3>
              <p className="mt-2 text-base leading-relaxed text-[#55575c]">
                Learn through listening with audio from renowned Qaris for every verse.
              </p>
            </div>
          </div>
        </section>

        {/* ================= COMMUNITY ================= */}
        <section id="community" className="px-4 pb-24 sm:px-10 lg:px-16 lg:pb-32">
          <div className="relative rounded-[32px] bg-[#F7F7F5] border border-white p-8 sm:p-12 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_20px_50px_-30px_rgba(35,36,39,0.3)]">
            <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:-space-x-6">
              <div className="flex-1 rounded-full border border-black/5 bg-white px-8 py-7 text-center shadow-[0_14px_30px_-16px_rgba(35,36,39,0.3)] lg:-rotate-[1deg]">
                <p className="text-4xl font-semibold text-[#2E3034] sm:text-5xl">
                  5
                  <span className="text-[#E34A32]">minutes</span>
                </p>
                <p className="mt-1.5 text-base text-[#55575c]">
                  daily reading time
                </p>
              </div>
              <div className="flex-1 rounded-full border border-black/5 bg-white px-8 py-7 text-center shadow-[0_14px_30px_-16px_rgba(35,36,39,0.3)] lg:z-10 lg:scale-105">
                <p className="text-4xl font-semibold text-[#2E3034] sm:text-5xl">
                  5
                  <span className="text-[#E34A32]">verses</span>
                </p>
                <p className="mt-1.5 text-base text-[#55575c]">
                  per personalized session
                </p>
              </div>
              <div className="flex-1 rounded-full border border-black/5 bg-white px-8 py-7 text-center shadow-[0_14px_30px_-16px_rgba(35,36,39,0.3)] lg:rotate-[1deg]">
                <p className="text-4xl font-semibold text-[#2E3034] sm:text-5xl">
                  1
                  <span className="text-[#E34A32]">habit</span>
                </p>
                <p className="mt-1.5 text-base text-[#55575c]">
                  that transforms your connection
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <footer className="px-2 pb-2 sm:px-0 sm:pb-4">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-[#F4F5F5] px-6 py-20 sm:px-12 lg:py-28 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_20px_60px_-30px_rgba(35,36,39,0.25)]">
            <div className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(227,74,50,0.4), transparent 70%)' }}></div>
            <div className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(46,48,52,0.3), transparent 70%)' }}></div>

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-semibold leading-tight text-[#2E3034] sm:text-6xl" style={{ letterSpacing: '-0.035em' }}>
                Start your Quran journey today.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#55575c]">
                Join believers who use Quran Circle to build a consistent, meaningful relationship with the Quran — guided by AI, grounded in community.
              </p>

              <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row">
                <Link href="/signup" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#171719] px-7 py-3.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_14px_28px_-12px_rgba(23,23,25,0.75)]">
                  Start your journey — it&apos;s free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-6 border-t border-black/5 pt-8 sm:flex-row text-center sm:text-left">
              <Link href="/" className="flex items-center gap-2.5">
                <Logo className="w-5 h-5" />
                <span className="text-base font-semibold">Quran Circle</span>
              </Link>
              <div className="flex items-center gap-6 text-sm font-medium text-[#55575c] flex-wrap justify-center">
                <Link href="#how-it-works" className="hover:text-[#232427]">How it Works</Link>
                <Link href="#features" className="hover:text-[#232427]">Features</Link>
                <Link href="#community" className="hover:text-[#232427]">Community</Link>
              </div>
              <p className="text-xs text-[#8a8c91]">
                © 2025 Quran Circle. Built for the sake of Allah.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
