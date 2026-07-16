'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Send,
  Zap,
  Users,
  MessageSquare,
  Video,
  Layers,
  FileText,
  MousePointerClick,
  ChevronRight,
  TrendingUp,
  FileDown,
  Menu
} from 'lucide-react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channelLink: '',
    goal: '',
    budget: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  React.useEffect(() => {
    // WebGL Canvas Background Mesh Logic
    const canvas = document.getElementById('meshGL') as HTMLCanvasElement;
    if (!canvas || !window.THREE) return;

    const THREE = window.THREE;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 20;

    const geometry = new THREE.PlaneGeometry(30, 30, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: 0xe34a32,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      const time = clock.getElapsedTime();
      const pos = geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const z = Math.sin(u * 0.3 + time) * Math.cos(v * 0.3 + time) * 1.5;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;
      mesh.rotation.z = time * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#ECEDEE] text-[#232427] antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* PAGE SHELL */}
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 pt-2 sm:pt-4">
        
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-[#F4F5F5] text-[#232427] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_20px_60px_-30px_rgba(35,36,39,0.25)] min-h-[95svh] flex flex-col">
          <canvas id="meshGL" className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"></canvas>
          
          {/* Atmosphere - Bloom effects */}
          <div className="pointer-events-none absolute -right-40 top-0 h-[720px] w-[720px] rounded-full opacity-70 blur-3xl transition-transform duration-700 ease-out" style={{ background: 'radial-gradient(circle at 55% 45%, rgba(227,74,50,0.45), rgba(240,120,70,0.2) 40%, rgba(244,245,245,0) 70%)' }}></div>
          <div className="pointer-events-none absolute -left-52 top-24 h-[640px] w-[640px] rounded-full opacity-60 blur-3xl" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(46,48,52,0.25), rgba(120,124,130,0.1) 45%, rgba(244,245,245,0) 72%)' }}></div>

          {/* FLOATING NAV */}
          <div className="sticky top-3 sm:top-5 z-50 flex justify-center px-3 pt-4 sm:pt-6">
            <nav className="flex w-full max-w-[940px] items-center justify-between rounded-full border border-white/70 bg-white/75 py-2.5 pl-5 pr-2.5 backdrop-blur-xl transition-shadow duration-500 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_30px_-14px_rgba(35,36,39,0.15)]">
              <Link href="/" className="flex items-center gap-2.5">
                <Logo className="w-6 h-6" />
                <span className="text-base font-bold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Noviq</span>
              </Link>
              <div className="hidden md:flex items-center gap-1 text-sm font-medium text-[#4b4d52]">
                <Link href="#services" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  Services
                </Link>
                <Link href="#portfolio" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  Portfolio
                </Link>
                <Link href="#why-choose-us" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  Why Us
                </Link>
                <Link href="#pricing" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  Pricing
                </Link>
                <Link href="#about" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  About
                </Link>
                <Link href="#blog" className="rounded-full px-3.5 py-2 hover:bg-black/5 transition">
                  Blog
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Link href="#contact" className="group inline-flex items-center gap-1.5 rounded-full bg-[#171719] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_22px_-10px_rgba(23,23,25,0.7)]">
                  Hire Us
                  <ArrowRight className="h-4 w-4 opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" strokeWidth={1.5} />
                </Link>
              </div>
            </nav>
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-16 text-center sm:pt-24 lg:pb-28 flex-1 justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-medium text-orange-600 backdrop-blur shadow-[0_6px_16px_-8px_rgba(35,36,39,0.25)]">
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              Professional Production & Automation Agency
            </div>

            {/* Headline */}
            <div className="relative mt-7">
              <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7.5xl tracking-tight text-[#2E3034]">
                Scale Your YouTube Channel
                <br />
                <span className="relative inline-block font-serif-accent text-orange-600" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
                  Without Doing The Work
                  <span className="absolute -right-6 top-1/2 hidden h-16 w-40 -translate-y-1/2 translate-x-full rounded-full bg-gradient-to-br from-[#F05A3C] to-[#C93A24] opacity-90 blur-[1px] lg:block shadow-[0_20px_40px_-14px_rgba(227,74,50,0.6)]"></span>
                </span>
              </h1>

              {/* Floating tiles */}
              <div className="absolute -right-8 -top-10 hidden rotate-6 md:flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-[0_18px_35px_-14px_rgba(35,36,39,0.35)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white">
                  <Video className="h-5 w-5" strokeWidth={1.5} />
                </span>
              </div>
              <div className="absolute -right-24 top-16 hidden -rotate-6 lg:flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-[0_18px_35px_-14px_rgba(35,36,39,0.35)]" style={{ transitionDelay: '.2s' }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                  <Layers className="h-5 w-5" strokeWidth={1.5} />
                </span>
              </div>
              <div className="absolute -bottom-14 right-6 hidden rotate-3 md:flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-black/5 shadow-[0_18px_35px_-14px_rgba(35,36,39,0.35)]" style={{ transitionDelay: '.4s' }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F7F5] border border-black/10 text-orange-600">
                  <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                </span>
              </div>
            </div>

            {/* Subheadline */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#55575c]">
              We handle scriptwriting, voiceovers, video editing, thumbnail design, and channel management so you can focus on growing your business.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[#171719] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_14px_28px_-12px_rgba(23,23,25,0.75)]">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
              <Link href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-8 py-4 text-base font-semibold text-[#2E3034] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_22px_-12px_rgba(35,36,39,0.3)]">
                View Portfolio
              </Link>
            </div>
            
            {/* Background Video Montage Placeholder / Interactive Preview */}
            <div className="mt-16 w-full max-w-4xl aspect-video rounded-3xl border border-black/5 bg-white p-2 shadow-[0_30px_60px_-15px_rgba(35,36,39,0.3)]">
              <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
                <Video className="w-16 h-16 text-orange-500 mb-4 animate-pulse" />
                <span className="text-xl font-semibold">Video Montage Reel Playing</span>
                <span className="text-sm text-gray-400 mt-2">Featuring professional edits, documentary clips, and motion dynamics.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className="px-4 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#2E3034] sm:text-5xl">
              What Do We Do?
            </h2>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-600">
              We help creators, businesses, and brands grow on YouTube by providing professional video editing, YouTube automation, thumbnail design, content strategy, and channel management. Whether you&apos;re starting from scratch or scaling an existing channel, we handle the creative and technical work so you can focus on your business.
            </p>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="px-4 py-16 sm:px-10 lg:px-16 bg-[#F4F5F5] rounded-[32px] border border-white shadow-sm">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Services</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#2E3034] sm:text-5xl">
              Complete YouTube Operations.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Service 1: YouTube Automation */}
            <div className="group rounded-3xl border border-black/5 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Layers className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold">YouTube Automation</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                We manage the entire content production process: topic research, scriptwriting, AI or human voiceovers, video editing, thumbnail design, and publishing support.
              </p>
              <div className="mt-6 border-t border-black/5 pt-4">
                <span className="text-xs font-semibold text-gray-400 uppercase">Ideal for</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Entrepreneurs & Coaches</li>
                  <li>• Investors</li>
                  <li>• Content creators</li>
                  <li>• Faceless YouTube channels</li>
                </ul>
              </div>
            </div>

            {/* Service 2: Video Editing */}
            <div className="group rounded-3xl border border-black/5 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Video className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold">Video Editing</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Professional editing for YouTube videos, Shorts, TikToks, Instagram Reels, Podcasts, and documentary-style productions. Complete with motion graphics, captions, sound design, color correction, and visual storytelling.
              </p>
              <div className="mt-6 border-t border-black/5 pt-4">
                <span className="text-xs font-semibold text-gray-400 uppercase">Features included</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Motion graphics & Captions</li>
                  <li>• Premium Sound design</li>
                  <li>• Color correction</li>
                  <li>• Visual storytelling pacing</li>
                </ul>
              </div>
            </div>

            {/* Service 3: Thumbnail Design */}
            <div className="group rounded-3xl border border-black/5 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-500">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <MousePointerClick className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold">Thumbnail Design</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Increase click-through rates (CTR) with high-performing, attention-grabbing thumbnails designed following strict competitor research and A/B testing concepts.
              </p>
              <div className="mt-6 border-t border-black/5 pt-4">
                <span className="text-xs font-semibold text-gray-400 uppercase">Our Process</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>• Competitor CTR research</li>
                  <li>• A/B testing concepts</li>
                  <li>• Contrast & visual psychology focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section id="portfolio" className="px-4 py-24 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Portfolio</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#2E3034] sm:text-5xl">
              Proven Results in Diverse Niches.
            </h2>
          </div>

          {/* Categories Tab Navigation */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            <span className="bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full cursor-pointer">All Works</span>
            <span className="bg-white border border-black/5 text-[#55575c] text-xs font-medium px-4 py-2 rounded-full hover:bg-black/5 transition cursor-pointer">Scripts</span>
            <span className="bg-white border border-black/5 text-[#55575c] text-xs font-medium px-4 py-2 rounded-full hover:bg-black/5 transition cursor-pointer">Videos & Edits</span>
            <span className="bg-white border border-black/5 text-[#55575c] text-xs font-medium px-4 py-2 rounded-full hover:bg-black/5 transition cursor-pointer">Voice Overs</span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Real Portfolio Item 1: Football Niche */}
            <div className="rounded-3xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-48 bg-gray-900 flex items-center justify-center text-white relative">
                  <Video className="w-10 h-10 text-orange-500 animate-pulse" />
                  <span className="absolute bottom-4 left-4 bg-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">Football Niche</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Football & Sports Scripting</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Check out some of our most viral sports scripts and editing styles:
                  </p>
                  <div className="mt-4 space-y-2">
                    <a href="https://youtu.be/bVxlOrULRBc?si=baQ6Pg6J1rFxytQw" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Video: The Rise & Fall of Football Giants
                    </a>
                    <a href="https://youtu.be/6zGZKxfDo1s?si=ZhLVh9H4gdTDqQ1x" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Video: Champions League Tactical Edits
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Scripts</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Pacing</span>
                </div>
              </div>
            </div>

            {/* Real Portfolio Item 2: True Crime */}
            <div className="rounded-3xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-48 bg-gray-900 flex items-center justify-center text-white relative">
                  <Video className="w-10 h-10 text-orange-500" />
                  <span className="absolute bottom-4 left-4 bg-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">True Crime Niche</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">True Crime Case Documentaries</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    High retention mystery and crime storytelling:
                  </p>
                  <div className="mt-4 space-y-2">
                    <a href="https://docs.google.com/document/d/1HqcUZvAmgOnO3CKbtsjuJycbgP-vwnr8qwPvZK8jBVE/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Script: Case File #902
                    </a>
                    <a href="https://docs.google.com/document/d/1ZVgaWyg1Mx0BsNHEkPj-RPL7-5Yqvo-eeVedOawwBrQ/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Script: Solving The Unsolved
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Research</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Structure</span>
                </div>
              </div>
            </div>

            {/* Real Portfolio Item 3: US Politics */}
            <div className="rounded-3xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-48 bg-gray-900 flex items-center justify-center text-white relative">
                  <Video className="w-10 h-10 text-orange-500" />
                  <span className="absolute bottom-4 left-4 bg-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">Politics</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">US & Canadian Politics</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Highly analytical scripts and political documentaries:
                  </p>
                  <div className="mt-4 space-y-2">
                    <a href="https://docs.google.com/document/d/1lnr3PvhObfFb_9tZg5R3UHgh4bZ0AUrpi7EZSl4c5l4/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Script: Election Debates analysis
                    </a>
                    <a href="https://youtu.be/ZyTFvGK0OpI?si=xBbdbCUl-2JrhB31" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Video: Canadian Politics Explained
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Scripts</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Analysis</span>
                </div>
              </div>
            </div>

            {/* Real Portfolio Item 4: Heavy Machinery */}
            <div className="rounded-3xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-48 bg-gray-900 flex items-center justify-center text-white relative">
                  <Video className="w-10 h-10 text-orange-500" />
                  <span className="absolute bottom-4 left-4 bg-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">Machinery</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Heavy Machinery & Agrotech</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Fascinating details on agricultural innovations:
                  </p>
                  <div className="mt-4 space-y-2">
                    <a href="https://youtu.be/zwPQZXvPnKg?si=FU2D-lbch9y8q9NW" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Video: Modern Agricultural Giants
                    </a>
                    <a href="https://youtu.be/lSgD0XKEXh8?si=wLHMyd25uOi5q4Xj" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Video: Tree Felling Operations
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Editing</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Voicework</span>
                </div>
              </div>
            </div>

            {/* Real Portfolio Item 5: Voice Over Samples */}
            <div className="rounded-3xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-48 bg-gray-900 flex items-center justify-center text-white relative">
                  <Video className="w-10 h-10 text-orange-500" />
                  <span className="absolute bottom-4 left-4 bg-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">Voice Over</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">VO Samples & Platforms</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Listen to professional voice clips and browse profiles:
                  </p>
                  <div className="mt-4 space-y-2">
                    <a href="https://www.voices.com/profile/kirranandrews" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Voices.com Profile
                    </a>
                    <a href="https://voice123.com/voice-actor/KirranAndrews/" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Voice123 Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Narrative Voice</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Samples</span>
                </div>
              </div>
            </div>

            {/* Real Portfolio Item 6: Drive Folders */}
            <div className="rounded-3xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-48 bg-gray-900 flex items-center justify-center text-white relative">
                  <Video className="w-10 h-10 text-orange-500" />
                  <span className="absolute bottom-4 left-4 bg-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">Drive Folders</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Drive Portfolios</h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Direct access to sample folders of scripts, edits, and voiceovers:
                  </p>
                  <div className="mt-4 space-y-2">
                    <a href="https://drive.google.com/drive/folders/1T758ijcGLV_3xIefgbfos0LgP7-m79cf" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Video Editing Drive Folder
                    </a>
                    <a href="https://drive.google.com/drive/folders/1ztZ-GcbpFYq-k7PQ0cBn77MrjsladtKx" target="_blank" rel="noopener noreferrer" className="block text-xs font-semibold text-orange-600 hover:underline">
                      → Thumbnail Portfolio Folder
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Thumbnails</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Video Files</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section id="why-choose-us" className="px-4 py-20 sm:px-10 lg:px-16 bg-white rounded-[32px] border border-black/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Why Choose Us</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-[#2E3034] sm:text-5xl">
                Built to Scale Channels Correctly.
              </h2>
              <p className="mt-6 text-[#55575c] leading-relaxed">
                We combine creativity with proven YouTube strategies to produce content that is engaging, professional, and optimized for growth. Our workflow is built around quality, consistency, and clear communication. From compelling edits and high-performing thumbnails to organized production systems, we focus on delivering content that helps clients build their audience and achieve their goals.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="p-5 border border-black/5 bg-[#F4F5F5] rounded-2xl flex gap-4">
                <Clock className="w-10 h-10 text-orange-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Fast Turnaround</h4>
                  <p className="text-sm text-gray-600 mt-1">Receive completed videos on schedule without delays.</p>
                </div>
              </div>
              <div className="p-5 border border-black/5 bg-[#F4F5F5] rounded-2xl flex gap-4">
                <TrendingUp className="w-10 h-10 text-orange-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Retention-Focused Editing</h4>
                  <p className="text-sm text-gray-600 mt-1">Every edit and cut is mathematically designed to keep viewers watching longer.</p>
                </div>
              </div>
              <div className="p-5 border border-black/5 bg-[#F4F5F5] rounded-2xl flex gap-4">
                <Users className="w-10 h-10 text-orange-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Full Production Team</h4>
                  <p className="text-sm text-gray-600 mt-1">No need to hire separate editors, writers, and designers. We handle it all.</p>
                </div>
              </div>
              <div className="p-5 border border-black/5 bg-[#F4F5F5] rounded-2xl flex gap-4">
                <Layers className="w-10 h-10 text-orange-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Proven Workflow</h4>
                  <p className="text-sm text-gray-600 mt-1">We use systems developed from working with YouTube creators across multiple niches.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RESULTS SECTION ================= */}
        <section className="px-4 py-16 sm:px-10 lg:px-16">
          <div className="relative rounded-[32px] bg-[#0E0F11] text-white p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
              <div className="p-6">
                <p className="text-5xl font-extrabold text-orange-500">500+</p>
                <p className="mt-3 text-base text-gray-400 font-medium">Videos Edited</p>
              </div>
              <div className="p-6 border-y sm:border-y-0 sm:border-x border-white/10">
                <p className="text-5xl font-extrabold text-orange-500">20M+</p>
                <p className="mt-3 text-base text-gray-400 font-medium">Combined Views</p>
              </div>
              <div className="p-6">
                <p className="text-5xl font-extrabold text-orange-500">50+</p>
                <p className="mt-3 text-base text-gray-400 font-medium">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="px-4 py-12 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Testimonials</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#2E3034] sm:text-5xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-black/5 p-6 rounded-3xl">
              <p className="text-gray-600 text-sm leading-relaxed">&ldquo;Noviq changed our workflow completely. The videos are edited with extreme precision and retention has gone up by 40% on average.&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">A</div>
                <div>
                  <h4 className="text-sm font-bold">Alex Carter</h4>
                  <p className="text-xs text-gray-400">Finance Creator (300k Subs)</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black/5 p-6 rounded-3xl">
              <p className="text-gray-600 text-sm leading-relaxed">&ldquo;They handle everything from script to thumbnail. Our faceless channels are fully automated and we just watch the revenue scale.&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">M</div>
                <div>
                  <h4 className="text-sm font-bold">Marcus Chen</h4>
                  <p className="text-xs text-gray-400">Automation Operator (5 Channels)</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-black/5 p-6 rounded-3xl">
              <p className="text-gray-600 text-sm leading-relaxed">&ldquo;We needed quick turnaround on short form content and Noviq delivers high-quality shorts within 24 hours every time.&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">J</div>
                <div>
                  <h4 className="text-sm font-bold">Jessica V.</h4>
                  <p className="text-xs text-gray-400">Coaching Agency Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section id="pricing" className="px-4 py-20 sm:px-10 lg:px-16 bg-[#F4F5F5] rounded-[32px] border border-white">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Pricing Plans</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#2E3034] sm:text-5xl">
              Simple, Predictable Packages.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="bg-white border border-black/5 p-8 rounded-3xl flex flex-col">
              <h3 className="text-xl font-bold">Starter Package</h3>
              <p className="text-gray-400 text-sm mt-1">For getting started</p>
              <p className="text-4xl font-extrabold text-orange-600 mt-6">$300–$500<span className="text-sm text-gray-500 font-normal">/month</span></p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
                <li>• 4 videos edited</li>
                <li>• Basic professional editing</li>
                <li>• Visual pacing & Captions</li>
                <li>• Sound design & Color correction</li>
              </ul>
              <Link href="#contact" className="mt-8 block text-center bg-orange-600 text-white hover:bg-orange-500 py-3 rounded-full font-semibold transition-all">Get Started</Link>
            </div>

            {/* Growth Plan */}
            <div className="bg-white border-2 border-orange-500 p-8 rounded-3xl flex flex-col relative shadow-md">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>
              <h3 className="text-xl font-bold">Growth Package</h3>
              <p className="text-gray-400 text-sm mt-1">For scaling creators</p>
              <p className="text-4xl font-extrabold text-orange-600 mt-6">$800–$1,500<span className="text-sm text-gray-500 font-normal">/month</span></p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
                <li>• Comprehensive Topic Research</li>
                <li>• Professional Scriptwriting</li>
                <li>• Advanced Retention Editing</li>
                <li>• High CTR Thumbnail designs</li>
                <li>• Priority delivery turnaround</li>
              </ul>
              <Link href="#contact" className="mt-8 block text-center bg-orange-600 text-white hover:bg-orange-500 py-3 rounded-full font-semibold transition-all">Choose Growth</Link>
            </div>

            {/* Automation Plan */}
            <div className="bg-white border border-black/5 p-8 rounded-3xl flex flex-col">
              <h3 className="text-xl font-bold">Full Automation</h3>
              <p className="text-gray-400 text-sm mt-1">Complete hands-off option</p>
              <p className="text-4xl font-extrabold text-orange-600 mt-6">$2,000+<span className="text-sm text-gray-500 font-normal">/month</span></p>
              <ul className="mt-6 space-y-3 text-sm text-gray-600 flex-1">
                <li>• Complete channel management</li>
                <li>• Publishing support & tags optimization</li>
                <li>• In-depth Analytics review</li>
                <li>• Dedicated content strategy</li>
                <li>• Human or premium AI voiceovers</li>
              </ul>
              <Link href="#contact" className="mt-8 block text-center bg-orange-600 text-white hover:bg-orange-500 py-3 rounded-full font-semibold transition-all">Get Full Automation</Link>
            </div>
          </div>
        </section>

        {/* ================= ABOUT US ================= */}
        <section id="about" className="px-4 py-20 sm:px-10 lg:px-16 bg-white rounded-[32px] border border-black/5 mt-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider text-center">About Us</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2E3034] sm:text-5xl text-center">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
              <p>
                What started as a passion for video editing quickly became a mission to help creators tell better stories and grow their audiences. As we worked with different clients and content creators, we realized that many had great ideas but lacked the time, skills, or team needed to consistently produce high-quality YouTube content. That&apos;s where we stepped in.
              </p>
              <p>
                Over the years, we&apos;ve developed experience in YouTube content production, from researching topics and organizing content to editing engaging videos, designing eye-catching thumbnails, and optimizing content for audience retention. We&apos;ve worked on projects across multiple niches, helping creators transform ideas into professional videos that capture attention and keep viewers engaged.
              </p>
              <p>
                Our experience spans a variety of niches, including celebrity documentaries, true crime, football and sports content, finance, educational videos, AI and technology, business, entertainment, and YouTube Shorts. This diverse background allows us to adapt our editing style and storytelling approach to suit different audiences and content goals.
              </p>
              <p>
                Our mission is simple: to help creators, entrepreneurs, and businesses grow on YouTube by delivering high-quality content that educates, entertains, and inspires. We believe every creator deserves a reliable production partner who values quality, consistency, and long-term success.
              </p>
            </div>
          </div>
        </section>

        {/* ================= BLOG & RESOURCES ================= */}
        <section id="blog" className="px-4 py-20 sm:px-10 lg:px-16">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Blog & Resources</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-[#2E3034] sm:text-5xl">
              Latest Insights & Growth Guides.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Post 1 */}
            <article className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 flex-1">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">YouTube Automation</span>
                <h3 className="text-lg font-bold mt-2">How to Start a YouTube Automation Channel</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Starting a YouTube automation channel doesn&apos;t require you to appear on camera. With the right niche, content strategy, and production workflow, you can build a channel that reaches thousands or millions...
                </p>
              </div>
              <div className="p-6 border-t border-black/5 bg-[#F4F5F5] flex items-center justify-between text-xs font-semibold text-orange-600">
                <span>Read Guide</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 flex-1">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Niches Selection</span>
                <h3 className="text-lg font-bold mt-2">Best Faceless YouTube Niches</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Not all YouTube niches are created equal. Some offer higher earning potential, better audience retention, and more opportunities for long-term growth. Explore finance, technology, true crime, and sports...
                </p>
              </div>
              <div className="p-6 border-t border-black/5 bg-[#F4F5F5] flex items-center justify-between text-xs font-semibold text-orange-600">
                <span>Read Guide</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 flex-1">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Earnings</span>
                <h3 className="text-lg font-bold mt-2">How Much YouTube Pays Per 1,000 Views</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  One of the most common questions creators ask is how much YouTube actually pays. The answer depends on RPM and CPM, compare earnings across different niches, and share practical ways to increase income...
                </p>
              </div>
              <div className="p-6 border-t border-black/5 bg-[#F4F5F5] flex items-center justify-between text-xs font-semibold text-orange-600">
                <span>Read Guide</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </article>

            {/* Post 4 */}
            <article className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 flex-1">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">Video Editing</span>
                <h3 className="text-lg font-bold mt-2">Video Editing Tips for Higher Audience Retention</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Great editing keeps viewers engaged from beginning to end. Learn the techniques used by successful YouTube creators, including crafting strong hooks, pattern interrupts, and B-roll alignment...
                </p>
              </div>
              <div className="p-6 border-t border-black/5 bg-[#F4F5F5] flex items-center justify-between text-xs font-semibold text-orange-600">
                <span>Read Guide</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </article>

            {/* Post 5 */}
            <article className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 flex-1">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">YouTube Shorts</span>
                <h3 className="text-lg font-bold mt-2">YouTube Shorts Growth Strategies</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  YouTube Shorts offer one of the fastest ways to grow an audience. Discover proven strategies for finding viral topics, writing attention-grabbing hooks, and turning casual viewers into subscribers...
                </p>
              </div>
              <div className="p-6 border-t border-black/5 bg-[#F4F5F5] flex items-center justify-between text-xs font-semibold text-orange-600">
                <span>Read Guide</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </article>
          </div>

          <div className="mt-12 bg-orange-600 text-white rounded-[24px] p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-xl font-bold">Our Goal</h4>
              <p className="text-sm text-orange-100 mt-2 max-w-2xl">
                Our blog is designed to help creators, entrepreneurs, and businesses succeed on YouTube by sharing practical, actionable advice. Every article is based on real-world strategies and is written to help you create better content, grow your audience, and build a sustainable online business.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-orange-600 uppercase">
              <span className="bg-white px-3 py-1.5 rounded-full">• Generates Google Traffic</span>
              <span className="bg-white px-3 py-1.5 rounded-full">• Builds Authority</span>
              <span className="bg-white px-3 py-1.5 rounded-full">• Attracts Leads</span>
            </div>
          </div>
        </section>

        {/* ================= LEAD MAGNET ================= */}
        <section className="px-4 py-12 sm:px-10 lg:px-16">
          <div className="bg-[#0E0F11] text-white p-8 sm:p-12 rounded-[32px] border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.4), transparent 70%)' }}></div>
            <div className="relative z-10 max-w-xl">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">Free Resource Download</span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2">Get &ldquo;The 25 Best YouTube Niches for 2026&rdquo;</h3>
              <p className="text-gray-400 text-sm mt-3">
                Unlock our curated list of high-CPM, high-retention niches to launch or pivot your channel for maximum profitability this year.
              </p>
            </div>
            <div className="w-full md:w-auto relative z-10">
              {leadSubmitted ? (
                <div className="bg-orange-600/20 border border-orange-500/30 text-orange-400 px-6 py-4 rounded-full font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Guide sent to your email!
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:max-w-md">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    required
                    className="px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500 flex-1 min-w-[200px]"
                  />
                  <button type="submit" className="bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-orange-500 transition-all flex items-center justify-center gap-2 shrink-0">
                    <FileDown className="w-4 h-4" />
                    Get Free PDF
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="px-4 py-20 sm:px-10 lg:px-16 bg-[#F4F5F5] rounded-[32px] border border-white mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Get in Touch</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-[#2E3034] sm:text-5xl">
                Ready to Scale? Book Your Free Call.
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 shrink-0 font-bold">1</span>
                  <p className="text-sm text-gray-600">Contact us through our website or book a discovery call.</p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 shrink-0 font-bold">2</span>
                  <p className="text-sm text-gray-600">Tell us about your channel, business, or content project goals.</p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 shrink-0 font-bold">3</span>
                  <p className="text-sm text-gray-600">Receive a fully customized content plan and project quote based on your requirements.</p>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 shrink-0 font-bold">4</span>
                  <p className="text-sm text-gray-600">Once approved, we will immediately begin creating your content while keeping you updated throughout our production timeline.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Application Received!</h3>
                  <p className="text-sm text-gray-500 mt-2">We will review your channel and get back to you within 24 hours to schedule a discovery call.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-black/5 bg-[#F4F5F5] focus:outline-none focus:border-orange-500 text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-black/5 bg-[#F4F5F5] focus:outline-none focus:border-orange-500 text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">YouTube Channel Link</label>
                    <input 
                      type="url" 
                      value={formData.channelLink}
                      onChange={(e) => setFormData({...formData, channelLink: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-black/5 bg-[#F4F5F5] focus:outline-none focus:border-orange-500 text-sm"
                      placeholder="https://youtube.com/@yourchannel"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Monthly Content Goal</label>
                    <input 
                      type="text" 
                      value={formData.goal}
                      onChange={(e) => setFormData({...formData, goal: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-black/5 bg-[#F4F5F5] focus:outline-none focus:border-orange-500 text-sm"
                      placeholder="e.g. 4 Long-form videos & 12 Shorts"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Estimated Monthly Budget</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-black/5 bg-[#F4F5F5] focus:outline-none focus:border-orange-500 text-sm"
                    >
                      <option value="">Select range...</option>
                      <option value="starter">$300 - $500/mo</option>
                      <option value="growth">$800 - $1,500/mo</option>
                      <option value="automation">$2,000+/mo</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3.5 rounded-full transition-all text-sm mt-4 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Book Your Free Strategy Call
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="px-2 pb-2 sm:px-0 sm:pb-4 mt-12">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-[#0E0F11] text-white px-6 py-16 sm:px-12 lg:py-20 shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_20px_60px_-30px_rgba(0,0,0,0.85)]">
            <div className="pointer-events-none absolute -left-40 bottom-0 h-[520px]. w-[520px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.3), transparent 70%)' }}></div>

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold leading-tight sm:text-6xl tracking-tight">
                Scale Your Reach Today.
              </h2>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                Join creators and companies scaling automated channels and high-quality YouTube production seamlessly with Noviq.
              </p>

              <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row justify-center">
                <Link href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_14px_28px_-12px_rgba(234,88,12,0.5)]">
                  Start Your Production Roadmap
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row text-center sm:text-left">
              <Link href="/" className="flex items-center gap-2.5">
                <Logo className="w-5 h-5" />
                <span className="text-base font-bold tracking-tight bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">Noviq</span>
              </Link>
              <div className="flex items-center gap-6 text-sm font-medium text-gray-400 flex-wrap justify-center">
                <Link href="#services" className="hover:text-white">Services</Link>
                <Link href="#portfolio" className="hover:text-white">Portfolio</Link>
                <Link href="#why-choose-us" className="hover:text-white">Why Choose Us</Link>
                <Link href="#pricing" className="hover:text-white">Pricing</Link>
              </div>
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Noviq Agency. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
