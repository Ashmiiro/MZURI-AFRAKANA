"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Mountain,
  Waves,
  MapPin,
  Calendar,
  Wifi,
  CheckCircle2,
  User,
  Coffee,
  Car,
  Sliders,
  ShieldCheck,
  ChevronDown,
  Search,
  Mail,
  Phone,
  Globe,
  Map,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Clock,
  Utensils,
  Award,
  Trees,
  Volume2
} from 'lucide-react';

// Import our rich structured data
import { FAQs } from '@/data/faqs';
import { FlagshipItineraries } from '@/data/itineraries';
import { CatalogItems } from '@/data/itineraries';
import { DestinationsData } from '@/data/destinations';
import { LodgesData } from '@/data/lodges';
import { getSafariImage } from '@/lib/images';

export default function MzuriAfrikanaWebsite() {
  // Navigation state: 'home' | 'catalog' | 'destinations' | 'lodges' | 'faqs' | 'itinerary-detail' | 'planner'
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>('source-of-soul');
  
  // Mobile menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Custom Planner form state
  const [plannerStep, setPlannerStep] = useState<number>(1);
  const [plannerForm, setPlannerForm] = useState({
    destinations: [] as string[],
    duration: '10-14',
    partySize: '2',
    interests: [] as string[],
    lodgingPrestige: 'elite',
    name: '',
    email: '',
    phone: '',
    timeframe: 'Late 2026',
    notes: ''
  });
  const [plannerSubmitted, setPlannerSubmitted] = useState<boolean>(false);

  // FAQ states
  const [faqCategory, setFaqCategory] = useState<string>('planning');
  const [faqQuery, setFaqQuery] = useState<string>('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Catalog filtering states
  const [catalogCategory, setCatalogCategory] = useState<string>('All');
  const [catalogQuery, setCatalogQuery] = useState<string>('');

  // Destination tab state
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>('uganda');

  // Lodge filtrations
  const [selectedLodgeCountry, setSelectedLodgeCountry] = useState<string>('All');

  // Set up view synchronization from URL hash or query if desired
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const p = params.get('page');
        const id = params.get('id');
        if (p) {
          setActiveTab(p);
          if (id) setSelectedItineraryId(id);
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL search parameters elegantly
  const navigateTo = (page: string, id?: string) => {
    setActiveTab(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id) {
      setSelectedItineraryId(id);
    }
    
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('page', page);
      if (id) url.searchParams.set('id', id);
      else url.searchParams.delete('id');
      window.history.pushState({}, '', url.toString());
    }
  };

  // Filter Catalog Items
  const filteredCatalog = useMemo(() => {
    return CatalogItems.filter(item => {
      const matchesCategory = catalogCategory === 'All' || item.category === catalogCategory;
      const matchesQuery = item.title.toLowerCase().includes(catalogQuery.toLowerCase()) || 
                           item.highlights.toLowerCase().includes(catalogQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(catalogQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [catalogCategory, catalogQuery]);

  // Handle planner form inputs
  const handlePlannerCheck = (type: 'destinations' | 'interests', value: string) => {
    setPlannerForm(prev => {
      const arr = prev[type];
      const nextArr = arr.includes(value) ? arr.filter(x => x !== value) : [...arr, value];
      return { ...prev, [type]: nextArr };
    });
  };

  const handlePlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlannerSubmitted(true);
  };

  const selectedItinerary = useMemo(() => {
    return FlagshipItineraries.find(it => it.id === selectedItineraryId) || FlagshipItineraries[0];
  }, [selectedItineraryId]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 bg-pattern" id="mzuri-root">
      
      {/* EXQUISITE LUXURY TOP-BAR & TICKER */}
      <div className="bg-stone-950 text-gold-100/80 text-[11px] uppercase tracking-[0.25em] py-2 px-4 border-b border-stone-850/40 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="inline-block w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" id="ticker-pulse"></span>
            East Africa Executive Jet & overland Logistics Configured for 2026 / 2027
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-mono font-bold text-[10px] sm:text-[11px]">
            <a href="tel:+256792045930" className="hover:text-gold-400 transition-colors flex items-center gap-1 text-gold-100">
              <Phone className="w-3.5 h-3.5 text-gold-500" /> +256 792045930
            </a>
            <span className="text-stone-800 hidden sm:inline">&bull;</span>
            <a href="mailto:emmanuelwalugaa@gmail.com" className="hover:text-gold-400 transition-colors flex items-center gap-1 text-gold-100">
              <Mail className="w-3.5 h-3.5 text-gold-500" /> emmanuelwalugaa@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* STICKY LUXURY LOGO & NAVIGATION HEADER */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-stone-150/80 shadow-xs z-40 transition-all duration-300" id="main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
          
          {/* BRAND LOGO */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('home')} id="header-brand">
            <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-stone-200 group-hover:border-gold-500 transition-all duration-500 shadow-md p-0.5 overflow-hidden shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/d/1943KXEJvQG7BDiUCCqbe0aEF2NbfNab_" 
                alt="Mzuri Afrikana Safaris Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-serif font-black text-lg tracking-widest text-stone-950 uppercase leading-none">
                Mzuri Afrikana
              </div>
              <div className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-gold-600 leading-none mt-1">
                Safaris &bull; Est. 2011
              </div>
            </div>
          </div>

          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-stone-600" id="desktop-nav">
            <button 
              onClick={() => navigateTo('home')}
              className={`hover:text-gold-600 cursor-pointer transition-colors relative pb-1 ${activeTab === 'home' ? 'text-stone-950' : ''}`}
            >
              <span>Home</span>
              {activeTab === 'home' && (
                <motion.span layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500" />
              )}
            </button>
            <button 
              onClick={() => navigateTo('catalog')}
              className={`hover:text-gold-600 cursor-pointer transition-colors relative pb-1 ${activeTab === 'catalog' ? 'text-stone-950' : ''}`}
            >
              <span>Safaris Catalog</span>
              {activeTab === 'catalog' && (
                <motion.span layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500" />
              )}
            </button>
            <button 
              onClick={() => navigateTo('destinations')}
              className={`hover:text-gold-600 cursor-pointer transition-colors relative pb-1 ${activeTab === 'destinations' ? 'text-stone-950' : ''}`}
            >
              <span>Destinations</span>
              {activeTab === 'destinations' && (
                <motion.span layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500" />
              )}
            </button>
            <button 
              onClick={() => navigateTo('lodges')}
              className={`hover:text-gold-600 cursor-pointer transition-colors relative pb-1 ${activeTab === 'lodges' ? 'text-stone-950' : ''}`}
            >
              <span>Luxury Lodges</span>
              {activeTab === 'lodges' && (
                <motion.span layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500" />
              )}
            </button>
            <button 
              onClick={() => navigateTo('faqs')}
              className={`hover:text-gold-600 cursor-pointer transition-colors relative pb-1 ${activeTab === 'faqs' ? 'text-stone-950' : ''}`}
            >
              <span>Client FAQs</span>
              {activeTab === 'faqs' && (
                <motion.span layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500" />
              )}
            </button>
          </nav>

          {/* CTA / CONSULTATION BUTTON */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => navigateTo('planner')}
              className="px-5 py-2.5 bg-stone-950 text-white hover:bg-gold-600 text-[11px] uppercase font-bold tracking-widest rounded-lg transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border border-stone-800"
              id="cta-nav"
            >
              Plan My Safari
            </button>
          </div>

          {/* MOBILE BURGER TOGGLE */}
          <button 
            className="md:hidden p-2 text-stone-900 rounded-lg hover:bg-stone-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-burger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-stone-100 bg-white"
              id="mobile-drawer"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col items-stretch text-[13px] font-bold uppercase tracking-widest text-stone-600">
                <button 
                  onClick={() => navigateTo('home')}
                  className={`py-2 px-3 hover:bg-stone-50 rounded-lg text-left ${activeTab === 'home' ? 'text-stone-950 bg-stone-50' : ''}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => navigateTo('catalog')}
                  className={`py-2 px-3 hover:bg-stone-50 rounded-lg text-left ${activeTab === 'catalog' ? 'text-stone-950 bg-stone-50' : ''}`}
                >
                  Safaris Catalog
                </button>
                <button 
                  onClick={() => navigateTo('destinations')}
                  className={`py-2 px-3 hover:bg-stone-50 rounded-lg text-left ${activeTab === 'destinations' ? 'text-stone-950 bg-stone-50' : ''}`}
                >
                  Destinations
                </button>
                <button 
                  onClick={() => navigateTo('lodges')}
                  className={`py-2 px-3 hover:bg-stone-50 rounded-lg text-left ${activeTab === 'lodges' ? 'text-stone-950 bg-stone-50' : ''}`}
                >
                  Luxury Lodges
                </button>
                <button 
                  onClick={() => navigateTo('faqs')}
                  className={`py-2 px-3 hover:bg-stone-50 rounded-lg text-left ${activeTab === 'faqs' ? 'text-stone-950 bg-stone-50' : ''}`}
                >
                  Client FAQs
                </button>
                <div className="pt-4 border-t border-stone-100">
                  <button 
                    onClick={() => navigateTo('planner')}
                    className="w-full py-3 bg-stone-950 text-white hover:bg-gold-600 text-center font-bold rounded-lg tracking-widest shadow-sm"
                  >
                    PLAN MY SAFARI
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* RENDER ACTIVE PAGE / TAB VIEW */}
      <main className="flex-1" id="main-content">
        <AnimatePresence mode="wait">
          
          {/* 1. HOMEPAGE VIEW */}
          {activeTab === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-20 py-0 pb-16"
            >
              {/* BRAND HERO BANNER */}
              <section className="relative h-[90vh] min-h-[600px] w-full bg-stone-950 flex items-center justify-center overflow-hidden" id="hero-banner">
                {/* Visual Backdrop with high-contrast luxury shading */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={getSafariImage("safari_land")} 
                    alt="Mzuri Afrikana Safari Landscape" 
                    className="w-full h-full object-cover object-center opacity-45 transform scale-105 transition-transform duration-10000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-900/40"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
                  {/* Floating badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/90 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-[0.2em] shadow-lg mb-2">
                    <Sparkles className="w-3.5 h-3.5" /> Luxury Reimagined
                  </div>
                  
                  {/* Tagline */}
                  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-wide text-white leading-tight">
                    Explore Africa <br className="sm:hidden" />
                    <span className="font-serif italic font-medium text-gold-200">in Style</span>
                  </h1>
                  
                  {/* Brand Philosophy Subheader */}
                  <p className="max-w-xl mx-auto text-stone-200 text-base sm:text-lg lg:text-xl font-light tracking-wide">
                    All you do is wake up and be ready for greatness. Bespoke luxury charters, elite private guides, and pristine savannah oases.
                  </p>
                  
                  {/* Primary CTA Buttons */}
                  <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button 
                      onClick={() => navigateTo('planner')}
                      className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-stone-950 hover:bg-gold-400 font-bold uppercase text-xs tracking-widest rounded-lg transition-all duration-300 shadow-xl cursor-pointer"
                    >
                      Design Your Custom Safari
                    </button>
                    <button 
                      onClick={() => navigateTo('catalog')}
                      className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-lg transition-all duration-300 backdrop-blur-xs border border-white/20 cursor-pointer"
                    >
                      Browse Itineraries
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-8 left-0 w-full text-center text-stone-400/80 text-[11px] uppercase tracking-widest z-10 hidden sm:block">
                  Scroll and Explore Golden Horizons &bull; Matchless Micato Safaris Benchmark
                </div>
              </section>

              {/* WELCOME / BRAND STORY */}
              <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8" id="welcome-story">
                <div className="space-y-4">
                  <div className="flex justify-center mb-2">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-md border border-stone-150 overflow-hidden">
                      <img 
                        src="https://lh3.googleusercontent.com/d/1943KXEJvQG7BDiUCCqbe0aEF2NbfNab_" 
                        alt="Mzuri Afrikana Safaris Logo Seal" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="font-mono text-xs text-gold-600 uppercase tracking-widest">Our Heritage</div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-950">
                    Welcome to <span className="italic font-bold text-gold-600">Mzuri Afrikana Safaris</span>
                  </h2>
                </div>
                
                <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto font-light">
                  Born from a devotion to the African soil, we design high-end, five-star private safaris for the world&apos;s most discerning travelers. We specialize in Uganda (&ldquo;The Pearl of Africa&rdquo;), seamlessly combining gorilla-tracking deep forests with elite, private cross-border extensions into Kenya, Tanzania, and Rwanda. Every detail of your transit, permits, five-star lodging, and private spotters is handled with total excellence. 
                </p>

                <div className="text-gold-700 italic font-serif text-xl font-medium pt-2 max-w-xl mx-auto font-semibold">
                  &ldquo;All you do is wake up and be ready for greatness. We curate the rest.&rdquo;
                </div>
              </section>

              {/* OUR BEST PACKAGES (FROM BROCHURE) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="our-best-packages">
                <div className="text-center space-y-3">
                  <div className="font-mono text-xs text-rose-600 uppercase tracking-[0.3em] font-bold">Bespoke Options</div>
                  <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-950 uppercase tracking-tight">
                    Our Best <span className="text-rose-600 italic">Packages</span>
                  </h2>
                  <div className="h-1 w-20 bg-rose-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Package A: Family Safaris */}
                  <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all-custom flex flex-col justify-between group">
                    <div className="p-8 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                          <Compass className="w-6 h-6" />
                        </div>
                        <span className="px-3.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
                          Primate Encounters
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl font-black text-purple-950 tracking-wider uppercase group-hover:text-rose-600 transition-colors">Family Safaris</h3>
                        <p className="text-stone-600 text-sm leading-relaxed font-light">
                          Create lifelong memories with a safari designed for all ages. We specialize in family-friendly travel that balances high-energy excitement for kids with relaxation for parents and grandparents. Our packages feature interconnecting suites.
                        </p>
                      </div>
                    </div>

                    <div className="px-8 pb-8 pt-4 border-t border-stone-100 bg-stone-50/50 space-y-4">
                      <div className="text-[10px] font-mono font-bold uppercase text-stone-400 tracking-wider">Primate Highlights:</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-rose-50 text-rose-700 text-xs font-semibold rounded-lg border border-stone-150 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Chimpanzee Tracking
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-rose-50 text-rose-700 text-xs font-semibold rounded-lg border border-stone-150 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Gorilla Tracking
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Package B: Group Safaris */}
                  <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all-custom flex flex-col justify-between group">
                    <div className="p-8 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                          <User className="w-6 h-6 animate-pulse" />
                        </div>
                        <span className="px-3.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                          Big Game Safaris
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl font-black text-purple-950 tracking-wider uppercase group-hover:text-rose-600 transition-colors">Group Safaris</h3>
                        <p className="text-stone-600 text-sm leading-relaxed font-light">
                          Nothing bonds a group like a shared sunset over the savannah. Our group packages are designed for social discovery, featuring private bush villas and exclusive-use vehicles that allow your circle to set the pace. Whether you’re celebrating a milestone or seeking an escape.
                        </p>
                      </div>
                    </div>

                    <div className="px-8 pb-8 pt-4 border-t border-stone-100 bg-stone-50/50 space-y-4">
                      <div className="text-[10px] font-mono font-bold uppercase text-stone-400 tracking-wider">Big Game Focus:</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-rose-50 text-amber-700 text-xs font-semibold rounded-lg border border-stone-150 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" /> The Big Seven
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-rose-50 text-amber-700 text-xs font-semibold rounded-lg border border-stone-150 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" /> The Big Five
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Package C: First-Timer Safaris */}
                  <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all-custom flex flex-col justify-between group">
                    <div className="p-8 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                          <Map className="w-6 h-6" />
                        </div>
                        <span className="px-3.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-200 rounded-full">
                          Active & Adventure
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl font-black text-purple-950 tracking-wider uppercase group-hover:text-rose-600 transition-colors">First-Timer Safaris</h3>
                        <p className="text-stone-600 text-sm leading-relaxed font-light">
                          Embarking on your first safari is a life-changing milestone, and we are here to make it effortless. We take the intimidation out of the African bush by providing a &ldquo;hand-held&rdquo; experience from start to finish. Our orientations and all-inclusive logistics make exploring stress-free.
                        </p>
                      </div>
                    </div>

                    <div className="px-8 pb-8 pt-4 border-t border-stone-100 bg-stone-50/50 space-y-4">
                      <div className="text-[10px] font-mono font-bold uppercase text-stone-400 tracking-wider">Adrenaline & Adventure:</div>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-rose-50 text-rose-600 text-xs font-semibold rounded-lg border border-stone-150 transition-colors">
                          <CheckCircle2 className="w-3" /> White-Water Rafting
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-rose-50 text-rose-600 text-xs font-semibold rounded-lg border border-stone-150 transition-colors">
                          <CheckCircle2 className="w-3" /> Mountain Climbing
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-rose-50 text-rose-600 text-xs font-semibold rounded-lg border border-stone-150 transition-colors">
                          <CheckCircle2 className="w-3" /> Extreme Sports
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* BRAND STRENGTHS / CORE VALUE PROPOSITION */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="core-values">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  <div className="p-8 rounded-2xl bg-white border border-stone-200/60 shadow-xs hover:shadow-md transition-all-custom">
                    <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 mb-6">
                      <Car className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-stone-950 mb-3">Custom 4x4 Luxury Vehicles</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      We operate exclusively custom-outfitted, long-wheelbase Safari Land Cruisers. Features pop-up observation roofs, high-definition camera chargers, high-speed on-board Wi-Fi, air conditioning, and a chilled beverage station.
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl bg-white border border-stone-200/60 shadow-xs hover:shadow-md transition-all-custom">
                    <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 mb-6">
                      <User className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-stone-950 mb-3">Elite Private Guiding</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Your Private Expedition Guide is a trained ornithologist, predator specialist, and master tracker. Accompanying you 24/7, they navigate you fast-track past crowds, providing incredible historical and biological context.
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl bg-white border border-stone-200/60 shadow-xs hover:shadow-md transition-all-custom">
                    <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 mb-6">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-stone-950 mb-3">Flawless Air evacuation</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Every Mzuri client is enrolled in AMREF Flying Doctors premium medical evacuation support. In the highly unlikely event of emergency, a private ICU aircraft will land, ensuring seamless transit to premium city clinics.
                    </p>
                  </div>

                </div>
              </section>

              {/* FEATURED DESTINATIONS NAVIGATION GRIDS */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="grid-destinations">
                <div className="text-center space-y-3">
                  <div className="font-mono text-xs text-gold-600 uppercase tracking-widest">Wander Golden Terrains</div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-950">Featured East African Horizons</h2>
                  <p className="text-stone-500 text-sm max-w-xl mx-auto">Click any territory below to browse our premier cross-border destinations.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {DestinationsData.map((dest) => (
                    <div 
                      key={dest.id}
                      onClick={() => {
                        setSelectedDestinationId(dest.id);
                        navigateTo('destinations');
                      }}
                      className="relative h-96 group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all-custom border border-stone-150"
                    >
                      <img 
                        src={getSafariImage(dest.imageSeed)} 
                        alt={dest.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
                      
                      <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                        <div className="font-mono text-[10px] uppercase text-gold-400 tracking-widest font-semibold">{dest.country}</div>
                        <h3 className="font-serif text-2xl font-semibold text-white tracking-wide">{dest.name}</h3>
                        <p className="text-stone-250 text-xs line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {dest.tagline}
                        </p>
                        <div className="pt-2 flex items-center gap-1 text-gold-400 text-xs uppercase tracking-widest font-bold group-hover:translate-x-1.5 transition-transform duration-300">
                          Explore Territory <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FEATURED FLAGSHIP SAFARIS CATALOG TEASERS */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="flagships-showcase">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-stone-200 pb-8">
                  <div className="space-y-3">
                    <div className="font-mono text-xs text-gold-600 uppercase tracking-widest">Our Flagship Odysseys</div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-950">Five Flagship Safaris</h2>
                  </div>
                  <button 
                    onClick={() => navigateTo('catalog')}
                    className="flex items-center gap-2 text-stone-950 hover:text-gold-600 text-xs font-bold uppercase tracking-widest group"
                  >
                    View Comprehensive Catalog ({CatalogItems.length} Trips) <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {FlagshipItineraries.slice(0, 3).map((safari) => (
                    <div 
                      key={safari.id}
                      className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-xs flex flex-col hover:shadow-lg transition-all-custom"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={getSafariImage(safari.imageSeed)} 
                          alt={safari.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-stone-950 text-white py-1 px-3 rounded-md border border-stone-800 font-bold">
                          {safari.duration} Days
                        </div>
                        <div className="absolute bottom-4 right-4 bg-gold-500 text-stone-950 py-1.5 px-3 rounded-lg text-xs tracking-wider uppercase font-extrabold shadow-md font-mono">
                          From ${safari.price.toLocaleString()} pp
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="font-serif text-2xl font-bold text-stone-950 leading-tight">{safari.name}</h3>
                          <p className="text-gold-600 text-xs font-mono tracking-wider font-semibold uppercase">{safari.vibe}</p>
                          <p className="text-stone-650 text-sm leading-relaxed line-clamp-3 font-light">{safari.description}</p>
                        </div>

                        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                          <button 
                            onClick={() => navigateTo('itinerary-detail', safari.id)}
                            className="px-5 py-2.5 bg-stone-950 hover:bg-gold-500 text-white hover:text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 w-full text-center"
                          >
                            Explore Day-by-Day Journey
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* BENTO GRID: MARKETING ANGLES & COMPARATIVE BENCHMARKINGS */}
              <section className="bg-stone-900 text-stone-100 py-20" id="bento-marketing">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                  
                  <div className="text-center space-y-3">
                    <span className="font-mono text-xs text-gold-400 uppercase tracking-widest">Why Select Mzuri Safaris</span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">The Anatomy of an Elite host</h2>
                    <p className="text-stone-400 text-sm max-w-xl mx-auto">Matching and exceeding structural limits to provide sovereign journeys.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Bento Box 1: 5 reasons child safety */}
                    <div className="lg:col-span-8 bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8" id="family-reasons">
                      <div className="space-y-4">
                        <span className="text-gold-400 font-mono text-[10px] uppercase tracking-widest font-semibold">Catering to Legacies</span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-white">5 Reasons for a Family Safari with Mzuri</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-sm font-light text-stone-300">
                          <div className="space-y-1">
                            <span className="font-serif font-bold text-gold-400 mr-2">1. Private Dynamic Multi-generational Cruisers:</span>
                            We isolate family bubble units in private Land Cruisers. No sharing means kids can move, inquire, or rest instantly.
                          </div>
                          <div className="space-y-1">
                            <span className="font-serif font-bold text-gold-400 mr-2">2. Interlinked Family Luxury Suites:</span>
                            We secure premium connected river suites with private fences to safeguard absolute luxury and proximity.
                          </div>
                          <div className="space-y-1">
                            <span className="font-serif font-bold text-gold-400 mr-2">3. Customized Junior Ranger guides:</span>
                            Our veteran guides offer personalized tasks (cast animal prints, track bird tracks) keep young minds active.
                            </div>
                          <div className="space-y-1">
                            <span className="font-serif font-bold text-gold-400 mr-2">4. Handplaced dietary safety:</span>
                            Our partner chefs pre-consult with parents on custom menus, food, and specific nutritional allergies.
                          </div>
                        </div>
                        <div className="pt-2 text-stone-350 text-sm font-light">
                          <span className="font-serif font-bold text-gold-400 mr-2">5. Sponsor and Donate Linkages:</span>
                          With our &ldquo;Mzuri One for One&rdquo; initiative, families are taken to local primary classrooms to personally donate books and see tuition sponsors.
                        </div>
                      </div>
                    </div>

                    {/* Bento Box 2: Your Hosts in Africa */}
                    <div className="lg:col-span-4 bg-stone-950 border border-stone-800 rounded-3xl p-8 flex flex-col justify-between" id="hosts-highlight">
                      <div className="space-y-4">
                        <span className="text-gold-400 font-mono text-[10px] uppercase tracking-widest font-semibold">Your Hosts in Africa</span>
                        <h3 className="font-serif text-2xl text-white">Our Guarding Standard</h3>
                        <p className="text-stone-400 text-xs leading-relaxed font-light">
                          Operating at matching levels to sovereign luxury standards, Mzuri Agency focuses heavily on individual private host-care. From international meet-and-greets to clearing customs bypass, we treat clients as royal diplomats.
                        </p>
                      </div>
                      <div className="pt-8 border-t border-stone-800/80 mt-6 space-y-3 font-mono text-[11px] uppercase tracking-widest text-gold-400">
                        <div>&bull; 24/7 Diplomatic Concierge</div>
                        <div>&bull; Elite Private Guides</div>
                      </div>
                    </div>

                    {/* Bento Box 3: Transport specs */}
                    <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-3xl p-8 flex flex-col justify-between space-y-6" id="land-cruiser-specs">
                      <div className="space-y-3">
                        <span className="text-gold-400 font-mono text-[10px] uppercase tracking-widest font-semibold">The Mzuri Cruisers</span>
                        <h3 className="font-serif text-xl sm:text-2xl text-white">Luxury Over-land Custom Fleets</h3>
                        <p className="text-stone-400 text-xs leading-relaxed font-light">
                          All transit segments utilize custom-built 4x4 Land Cruisers featuring:
                        </p>
                      </div>
                      <ul className="text-xs text-stone-300 font-mono space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold-500" /> ON-BOARD encrypted WIFI STARLINK</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold-500" /> COMPRESSOR REFRIGERATOR COLD DRINKS</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold-500" /> POP-UP EXTRA VIEW ACCESS</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold-500" /> USB SURCHARGE PORTS FOR EACH WINDOW</li>
                      </ul>
                    </div>

                    {/* Bento Box 4: Great Safari videos integrated */}
                    <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end min-h-[300px]" id="video-integration">
                      <img 
                        src={getSafariImage("lion_video")} 
                        alt="Lion in Uganda Murchison" 
                        className="absolute inset-0 w-full h-full object-cover opacity-25"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
                      
                      <div className="relative z-10 space-y-3">
                        <span className="text-gold-400 font-mono text-[10px] uppercase tracking-widest font-semibold">Vibrant Imagery</span>
                        <h3 className="font-serif text-2xl text-white max-w-sm">Great Safari Videos &bull; Experiential Reels</h3>
                        <p className="text-stone-400 text-xs font-light max-w-md">Our clients receive pristine bespoke high-definition video memories recorded by professional camera lenses inside our Land Cruisers during our trips.</p>
                        
                        <div className="pt-2">
                          <button 
                            onClick={() => navigateTo('planner')}
                            className="inline-flex items-center gap-2 text-gold-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                          >
                            Plan Your Cinematic Safari <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* PEOPLE & CULTURE & THE MZURI DIFFERENCE */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16" id="people-difference-culture">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                  
                  {/* Column 1: People & Culture */}
                  <div className="bg-stone-50 border border-stone-200/60 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <span className="font-mono text-xs text-rose-600 uppercase tracking-[0.2em] font-bold">Discover the Pearl in Every Path</span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-950 uppercase tracking-tight">People & <span className="text-rose-600 italic">Culture</span></h2>
                        <div className="h-0.5 w-16 bg-rose-600 rounded"></div>
                      </div>

                      <blockquote className="border-l-4 border-rose-600 pl-4 py-1 italic text-stone-750 text-base font-light">
                        &ldquo;To visit Uganda is to witness nature&apos;s masterpieces in one single frame. Our packages are designed to take you beyond the ordinary.&rdquo;
                      </blockquote>

                      <p className="text-stone-600 text-sm leading-relaxed font-light">
                        Uganda is defined by the legendary smile of its people and a heritage as rich as its soil. Our cultural encounters take you beyond the safari vehicle to experience the vibrant rhythm of local life, from ancient forest traditions to the colorful energy of our modern markets.
                      </p>
                    </div>

                    <div className="relative h-48 rounded-2xl overflow-hidden mt-4">
                      <img 
                        src={getSafariImage("ugandaculture")} 
                        alt="Ugandan Drumming and Cultural Dance" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent"></div>
                      <span className="absolute bottom-4 left-4 text-xs font-mono text-white tracking-widest font-semibold">Vibrant Cultural Heritage &bull; Uganda</span>
                    </div>
                  </div>

                  {/* Column 2: Why Choose Us - The Mzuri Difference */}
                  <div className="bg-stone-950 border border-stone-850 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-lg text-white">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <span className="font-mono text-xs text-rose-500 uppercase tracking-[0.2em] font-bold">Absolute Distinction</span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">The Mzuri <span className="text-rose-500 italic">Difference</span></h2>
                        <div className="h-0.5 w-16 bg-rose-500 rounded"></div>
                      </div>

                      <p className="text-stone-400 text-sm font-light">
                        Choosing a luxury travel partner requires confidence. Mzuri Afrikana Safaris is built on local wisdom, fine-tuned logistics, and personal touch.
                      </p>

                      <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-rose-500 shrink-0">
                            <User className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-serif text-base font-bold text-white tracking-wide">Expert Local Guides</h4>
                            <p className="text-stone-400 text-xs font-light">
                              Our certified safari guides speak the language of the land and the animals, matching the highest regional levels of guiding wisdom.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-rose-500 shrink-0">
                            <Car className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-serif text-base font-bold text-white tracking-wide">Custom 4x4 Fleet</h4>
                            <p className="text-stone-400 text-xs font-light">
                              Total overland safety and absolute comfort on every &ldquo;African Journey&rdquo;. Each long-wheelbase cruiser contains premium on-board Wi-Fi and power supply.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-rose-500 shrink-0">
                            <Sliders className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-serif text-base font-bold text-white tracking-wide">Tailor-Made Odysseys</h4>
                            <p className="text-stone-400 text-xs font-light">
                              Every high-end custom itinerary is 100% customizable to your group&apos;s individual rhythm and dynamic expectations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* BOOKING BROCHURE FRONT PAGE BLOCK: THE MZURI TRAVEL GUIDE */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" id="brochure-guide-block">
                <div className="relative rounded-3xl overflow-hidden border border-rose-200/60 shadow-lg bg-gradient-to-br from-rose-50 via-white to-purple-50 p-8 sm:p-12 md:p-16 text-center space-y-6">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl"></div>

                  <div className="space-y-2 relative z-10">
                    <span className="font-mono text-xs uppercase tracking-[0.4em] text-rose-600 font-extrabold">Mzuri Travel Guide</span>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-purple-950 uppercase tracking-tight">
                      Absolutely <span className="text-rose-600 italic">Africa</span>
                    </h2>
                    <p className="font-mono text-[10px] sm:text-xs text-stone-500 tracking-[0.2em] uppercase max-w-lg mx-auto pb-4">
                      &bull; Explore Africa In Style &bull;
                    </p>
                  </div>

                  <div className="h-px w-24 bg-stone-200 mx-auto"></div>

                  <div className="space-y-2 relative z-10 max-w-xl mx-auto py-4">
                    <p className="text-stone-800 text-lg sm:text-xl font-light italic">
                      &ldquo;Not all those who Wander are Lost&rdquo;
                    </p>
                    <span className="block font-mono text-[10px] text-rose-600 uppercase tracking-widest font-bold">- J.R.R. Tolkien</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 pt-4">
                    <a 
                      href="https://wa.me/256792045930" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-8 py-4 bg-stone-950 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-md transition-all-custom cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-rose-400" /> WhatsApp Call: +256 792045930
                    </a>
                    <a 
                      href="mailto:emmanuelwalugaa@gmail.com" 
                      className="inline-flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-stone-50 text-stone-900 text-xs font-bold uppercase tracking-widest rounded-xl border border-stone-200 shadow-sm transition-all-custom cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-rose-600" /> Email: emmanuelwalugaa@gmail.com
                    </a>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* 2. SAFARIS CATALOG VIEW */}
          {activeTab === 'catalog' && (
            <motion.div
              key="catalog-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
            >
              <div className="text-center space-y-4">
                <span className="font-mono text-xs text-gold-600 uppercase tracking-widest">Sovereign Travel Index</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-950">Safari Portfolios & Pricing Catalog</h1>
                <p className="text-stone-500 text-sm max-w-xl mx-auto">
                  Examine our structured multi-tiered private itineraries. Perfect base models waiting for your individual customized tailoring.
                </p>
              </div>

              {/* SEARCH & FILTER CONTROLS */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row gap-6 justify-between items-center" id="catalog-controls">
                
                {/* Search query */}
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-3.5 top-3.5 text-stone-400 w-4 h-4" />
                  <input 
                    type="text" 
                    value={catalogQuery}
                    onChange={(e) => setCatalogQuery(e.target.value)}
                    placeholder="Search pricing titles, key horizons, gorilla..."
                    className="w-full pl-10 pr-4 py-2.5 border border-stone-250 rounded-lg text-sm bg-stone-50/50focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-gold-500 text-stone-900"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto justify-start md:justify-end" id="category-scroller">
                  {['All', 'Classic Safaris', 'Private Classic Safaris', 'Private Custom Safaris', 'Options & Extensions'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCatalogCategory(cat)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all duration-250 cursor-pointer ${
                        catalogCategory === cat 
                          ? 'bg-stone-950 text-white border-stone-950 shadow-sm' 
                          : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

              </div>

              {/* CORE CATALOG TABLE & DYNAMIC CARDS PORTFOLIO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="catalog-trips">
                <AnimatePresence mode="popLayout">
                  {filteredCatalog.length > 0 ? (
                    filteredCatalog.map((item) => {
                      const associatedFlagship = FlagshipItineraries.find(it => it.name.toLowerCase().includes(item.title.toLowerCase().replace("the ", "").split(" ")[0]) || item.title.toLowerCase().includes(it.name.toLowerCase().split(" ")[0]));
                      
                      return (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-all-custom"
                        >
                          <div className="space-y-4">
                            <div className="flex justify-between items-start gap-4">
                              <span className="inline-block px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-wider bg-gold-50 text-gold-700 border border-gold-200 rounded-md">
                                {item.category}
                              </span>
                              <span className="font-mono text-xs text-stone-400 uppercase font-semibold">
                                {item.duration} Days
                              </span>
                            </div>

                            <div className="space-y-1">
                              <h3 className="font-serif text-2xl font-bold text-stone-950 tracking-wide">{item.title}</h3>
                              <p className="text-gold-600 font-mono text-xs uppercase tracking-wider font-semibold">{item.highlights}</p>
                            </div>

                            <p className="text-stone-600 text-sm font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                            <div>
                              <div className="text-[10px] uppercase text-stone-400 font-bold tracking-wider">Premium Pricing</div>
                              <div className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                                {item.price > 0 ? `From $${item.price.toLocaleString()} pp` : "Price on Request"}
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              {associatedFlagship && (
                                <button
                                  onClick={() => navigateTo('itinerary-detail', associatedFlagship.id)}
                                  className="px-4 py-2 bg-stone-100 hover:bg-stone-250 text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                                >
                                  Day-by-Day
                                </button>
                              )}
                              <button
                                onClick={() => {
                                  setPlannerForm(prev => ({ ...prev, notes: `Inquiry regarding: ${item.title} (${item.duration} Days)` }));
                                  navigateTo('planner');
                                }}
                                className="px-5 py-2.5 bg-stone-950 hover:bg-gold-500 text-white hover:text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors cursor-pointer flex-1 text-center"
                              >
                                Request Quote
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })
                  ) : (
                    <div className="col-span-1 md:col-span-2 py-12 text-center text-stone-500 font-light bg-white border border-dashed border-stone-200 rounded-2xl">
                      No matching premium safaris located. Try refining your keyword filter.
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* CUSTOM INQUIRY HIGHLIGHT BANNER */}
              <div className="bg-stone-950 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 text-center space-y-6 relative overflow-hidden" id="custom-cta-block">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#be8d3d_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                  <h2 className="font-serif text-3xl sm:text-4xl">One-of-a-Kind Custom Journeys</h2>
                  <p className="text-stone-300 text-sm font-light leading-relaxed">
                    Our team of veteran safari designers excels at starting with a completely blank canvas. Let us handle your custom airfields, regional jet extensions, and specific gorilla tracking permissions.
                  </p>
                  <div className="pt-4">
                    <button 
                      onClick={() => navigateTo('planner')}
                      className="px-8 py-3.5 bg-gold-500 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg hover:bg-gold-400 transition-colors cursor-pointer"
                    >
                      Launch Bespoke Designer Form
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. FLAGSHIP ITINERARY DETAIL VIEW */}
          {activeTab === 'itinerary-detail' && (
            <motion.div
              key="itinerary-detail-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="py-12 space-y-16"
              id="itinerary-details-page"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                
                {/* Back button */}
                <button 
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-950 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  &larr; Back to Safaris Discovery
                </button>

                {/* Itinerary Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left block copy */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="px-3 py-1 text-[9px] font-mono bg-gold-100 text-gold-700 border border-gold-250 rounded-md font-bold uppercase tracking-widest shadow-xs">
                        Flagship Collection
                      </span>
                      <span className="font-mono text-xs text-stone-400 font-bold uppercase tracking-wider">
                        {selectedItinerary.duration} Days Journey
                      </span>
                    </div>

                    <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-950 leading-tight">
                      {selectedItinerary.name}
                    </h1>

                    <p className="text-gold-600 font-mono text-xs uppercase tracking-wider font-extrabold border-b border-stone-200 pb-4">
                      {selectedItinerary.vibe}
                    </p>

                    <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
                      {selectedItinerary.description}
                    </p>

                    <div className="space-y-3 pt-4">
                      <h3 className="font-serif text-lg font-bold text-stone-950">Grand Safari Highlights</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-600 text-xs leading-relaxed font-light">
                        {selectedItinerary.highlights.map((hil, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                            <span>{hil}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Price Card */}
                  <div className="lg:col-span-5 bg-white border border-stone-200 rounded-3xl p-8 shadow-xs flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="text-stone-400 font-mono text-[10px] uppercase font-bold tracking-widest">Pricing Package (All Inclusive)</div>
                      <div className="font-serif text-4xl sm:text-5xl font-black text-stone-950">
                        ${selectedItinerary.price.toLocaleString()} 
                        <span className="text-xs sm:text-sm font-light text-stone-400 font-sans block mt-1">USD / Per Person Sharing Double occupancy</span>
                      </div>
                      
                      <p className="text-stone-500 text-xs leading-relaxed font-light">
                        Includes national gorilla/primate permits, executive 4x4 overland cruiser fleets, customized Starlink Wi-Fi, AMREF escape insurance, and gourmet meals.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <button 
                        onClick={() => {
                          setPlannerForm(prev => ({ ...prev, notes: `Inquiry for Flagship Safari: ${selectedItinerary.name} (${selectedItinerary.duration} Days)` }));
                          navigateTo('planner');
                        }}
                        className="w-full py-4 bg-stone-950 hover:bg-gold-500 text-white hover:text-stone-950 font-bold uppercase text-xs tracking-widest rounded-xl shadow-lg transition-colors cursor-pointer"
                      >
                        Book Itinerary / Customise Trip
                      </button>
                      <button 
                        onClick={() => navigateTo('catalog')}
                        className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-950 font-bold uppercase text-xs tracking-widest rounded-xl transition-colors cursor-pointer"
                      >
                        Explore Other Safaris
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* EXPLORE OTHER DYNAMIC SELECTOR TAB FOR FLAGSHIPS */}
              <div className="bg-stone-100 border-y border-stone-200 py-6" id="itinerary-selector-rail">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="font-serif text-sm font-bold text-stone-700 uppercase tracking-widest">Compare Day-by-day Itineraries:</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {FlagshipItineraries.map((it) => (
                      <button
                        key={it.id}
                        onClick={() => setSelectedItineraryId(it.id)}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                          selectedItineraryId === it.id 
                            ? 'bg-gold-500 text-stone-950 border-gold-500 font-black' 
                            : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        {it.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* TIMELINE: DAY-BY-DAY IMMERSIVE STORY */}
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="day-by-day-block">
                <div className="text-center space-y-3">
                  <span className="font-mono text-xs text-gold-600 uppercase tracking-widest">The Path Unfolded</span>
                  <h2 className="font-serif text-3xl font-light text-stone-950">Detailed Narrative Timeline</h2>
                </div>

                <div className="relative border-l border-stone-200 pl-6 sm:pl-10 ml-4 space-y-16 py-4">
                  {selectedItinerary.days.map((day) => (
                    <motion.div 
                      key={day.dayNumber}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                      transition={{ duration: 0.4 }}
                      className="relative space-y-4"
                    >
                      {/* Timeline Dot Circle */}
                      <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] bg-stone-950 border-4 border-white rounded-full flex items-center justify-center text-white ring-2 ring-gold-400"></div>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2 items-center text-xs text-gold-700 font-mono uppercase tracking-[0.15em] font-semibold">
                          <span>Day {day.dayNumber}</span>
                          {day.meals && (
                            <>
                              <span className="text-stone-300">&bull;</span>
                              <span className="text-stone-500">Meals: {day.meals}</span>
                            </>
                          )}
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-stone-950 tracking-wide">{day.title}</h3>
                      </div>

                      <p className="text-stone-600 text-base leading-relaxed font-light">
                        {day.description}
                      </p>

                      {day.activities.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {day.activities.map((act, idy) => (
                            <span 
                              key={idy}
                              className="px-3 py-1 bg-stone-100/80 hover:bg-gold-50 text-[10px] font-mono uppercase tracking-wider text-stone-600 hover:text-gold-800 border border-stone-150 rounded-md transition-colors"
                            >
                              &bull; {act}
                            </span>
                          ))}
                        </div>
                      )}

                      {day.lodging && (
                        <div className="p-4 bg-stone-50 border border-stone-200/60 rounded-xl space-y-1 inline-block mt-2">
                          <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider font-mono flex items-center gap-1.5">
                            <Coffee className="w-3.5 h-3.5 text-gold-500" /> Executive Resort Partner
                          </div>
                          <div className="font-serif text-sm font-bold text-stone-900">{day.lodging}</div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* 4. DESTINATIONS VIEW */}
          {activeTab === 'destinations' && (
            <motion.div
              key="destinations-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in"
              id="destinations-layout-page"
            >
              <div className="text-center space-y-4">
                <span className="font-mono text-xs text-gold-600 uppercase tracking-widest">East Africa Untold</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-950">Aesthetic Territories</h1>
                <p className="text-stone-500 text-sm max-w-xl mx-auto">
                  Seamlessly pairing Uganda’s pristine rainforest primate trails with iconic golden savannah extensions in the region.
                </p>
              </div>

              {/* HORIZONTAL TERRITORY SWITCHER */}
              <div className="flex justify-center border-b border-stone-200" id="destination-tabs">
                <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-px">
                  {DestinationsData.map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() => setSelectedDestinationId(dest.id)}
                      className={`py-4 px-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] relative transition-colors cursor-pointer shrink-0 ${
                        selectedDestinationId === dest.id ? 'text-stone-950 font-extrabold' : 'text-stone-400 hover:text-stone-600'
                      }`}
                    >
                      {dest.name}
                      {selectedDestinationId === dest.id && (
                        <motion.span layoutId="destination-tab-underline" className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gold-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* ACTIVE DESTINATION PRESENTATION */}
              {(() => {
                const dest = DestinationsData.find(d => d.id === selectedDestinationId) || DestinationsData[0];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="active-destination-profile">
                    
                    {/* Visual Media */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="relative h-96 rounded-3xl overflow-hidden shadow-md border border-stone-200">
                        <img 
                          src={getSafariImage(dest.imageSeed)} 
                          alt={dest.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-mono uppercase tracking-widest font-semibold text-center">
                          {dest.country}
                        </div>
                      </div>

                      <div className="p-6 bg-gold-50/50 border border-gold-200 rounded-2xl space-y-2">
                        <h4 className="font-serif text-sm font-bold text-gold-800">Exclusive Mzuri Transit Standards:</h4>
                        <p className="text-stone-600 text-xs leading-relaxed font-light">
                          All border crossings and high-end airfields are pre-cleared by our fast-track operational desk. We coordinate multi-country visas and private regional jet flights flawlessly.
                        </p>
                      </div>
                    </div>

                    {/* Copy Description & Highlights */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] uppercase text-gold-600 font-bold tracking-widest">{dest.country} Overview</span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-semibold">{dest.name}</h2>
                        <p className="text-stone-500 italic text-base sm:text-lg font-light">{dest.tagline}</p>
                      </div>

                      <p className="text-stone-600 text-base leading-relaxed font-light">
                        {dest.description}
                      </p>

                      <div className="space-y-4 pt-4 border-t border-stone-200">
                        <h3 className="font-serif text-lg font-bold text-stone-950">Key Horizonal Highlights</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {dest.highlights.map((hil, idx) => (
                            <div key={idx} className="flex gap-3 items-start text-xs leading-relaxed text-stone-650 font-light p-3 bg-white border border-stone-150 rounded-xl hover:border-gold-300 transition-colors">
                              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                              <span>{hil}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-8">
                        <button
                          onClick={() => {
                            setPlannerForm(prev => ({ ...prev, destinations: [dest.name] }));
                            navigateTo('planner');
                          }}
                          className="px-6 py-3 bg-stone-950 hover:bg-gold-500 text-white hover:text-stone-950 text-xs font-bold uppercase tracking-widest rounded-lg shadow-sm transition-colors cursor-pointer"
                        >
                          Request Custom Itinerary into {dest.name}
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })()}

            </motion.div>
          )}

          {/* 5. LUXURY LODGES VIEW */}
          {activeTab === 'lodges' && (
            <motion.div
              key="lodges-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in"
              id="lodging-layout-page"
            >
              <div className="text-center space-y-4">
                <span className="font-mono text-xs text-gold-600 uppercase tracking-widest">Selected Enriched Sanctuary Partners</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-950">Where You Stay</h1>
                <p className="text-stone-500 text-sm max-w-xl mx-auto">
                  Exploring partnerships with elite lodges setting wild global standards of conservation and luxurious hosting.
                </p>
              </div>

              {/* COUNTRY LODGE FILTERS */}
              <div className="flex justify-center flex-wrap gap-2" id="lodge-filters">
                {['All', 'Uganda', 'Rwanda', 'Tanzania', 'Kenya'].map((country) => (
                  <button
                    key={country}
                    onClick={() => setSelectedLodgeCountry(country)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                      selectedLodgeCountry === country 
                        ? 'bg-stone-950 text-white border-stone-950 font-black shadow-sm' 
                        : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>

              {/* LODGES CARD GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="lodges-layout-grid">
                {LodgesData.filter(lg => selectedLodgeCountry === 'All' || lg.country.toLowerCase().includes(selectedLodgeCountry.toLowerCase()) || (selectedLodgeCountry === 'Rwanda' && lg.location.includes('Rwanda'))).map((lodge) => (
                  <div 
                    key={lodge.id}
                    className="bg-white border border-stone-200 rounded-3xl overflow-hidden flex flex-col hover:shadow-lg transition-all-custom"
                  >
                    <div className="relative h-72 sm:h-80 overflow-hidden">
                      <img 
                        src={getSafariImage(lodge.imageSeed)} 
                        alt={lodge.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-widest bg-stone-950/90 text-white font-bold py-1 px-3.5 rounded-md border border-stone-850/60">
                        {lodge.partnerTier}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/95 text-stone-950 py-1.5 px-3 rounded-lg text-[10px] tracking-wider uppercase font-bold shadow-md flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold-600" /> {lodge.country}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h3 className="font-serif text-2xl font-bold text-stone-950 tracking-wide">{lodge.name}</h3>
                          <p className="text-stone-400 font-mono text-[10px] uppercase font-bold tracking-wider">{lodge.location}</p>
                        </div>
                        <p className="text-stone-650 text-sm leading-relaxed font-light">{lodge.description}</p>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-stone-100">
                        <div className="text-[10px] font-mono font-bold uppercase text-stone-400 tracking-wider">Premium Suite Amenities:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {lodge.amenities.map((amenity, idx) => (
                            <span 
                              key={idx}
                              className="px-2.5 py-1 bg-stone-55 lg:bg-stone-50 text-[10px] font-mono text-stone-600 border border-stone-150 rounded"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          )}

          {/* 6. COMPREHENSIVE FAQ VIEW (TABS + FILTER) */}
          {activeTab === 'faqs' && (
            <motion.div
              key="faqs-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in text-stone-900"
              id="faq-layout-page"
            >
              <div className="text-center space-y-4">
                <span className="font-mono text-xs text-gold-600 uppercase tracking-widest">Client Resource Library</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-light">Client Help & Consultation</h1>
                <p className="text-stone-500 text-sm max-w-xl mx-auto">
                  Fully updated expert insights on planning, booking, and experiencing East African luxury travel safely.
                </p>
              </div>

              {/* SEARCH FAQ COMPONENT */}
              <div className="space-y-4 max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 text-stone-400 w-4.5 h-4.5" />
                  <input 
                    type="text"
                    value={faqQuery}
                    onChange={(e) => setFaqQuery(e.target.value)}
                    placeholder="Search all 27 expert answers (e.g., vaccine, gorilla, tip...)"
                    className="w-full pl-11 pr-4 py-3 border border-stone-250 rounded-xl bg-white shadow-xs focus:ring-2 focus:ring-gold-500 focus:outline-hidden text-sm"
                  />
                  {faqQuery && (
                    <button 
                      onClick={() => setFaqQuery('')}
                      className="absolute right-3.5 top-3.5 text-xs font-mono py-0.5 px-1 bg-stone-200 rounded text-stone-600 hover:text-stone-900"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* SECTION TABS FOR ALL CATEGORIES */}
              {!faqQuery && (
                <div className="flex justify-center border-b border-stone-200" id="faq-categories-list">
                  <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-px">
                    {(Object.keys(FAQs) as Array<keyof typeof FAQs>).map((key) => (
                      <button
                        key={key}
                        onClick={() => {
                          setFaqCategory(key);
                          setExpandedFaq(null);
                        }}
                        className={`py-4 px-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] relative transition-colors cursor-pointer shrink-0 ${
                          faqCategory === key ? 'text-stone-950 font-black' : 'text-stone-400 hover:text-stone-600'
                        }`}
                      >
                        {FAQs[key].title.split(": ")[1]}
                        {faqCategory === key && (
                          <motion.span layoutId="faq-tab-underline" className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gold-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* RENDER ACCORDION COLLAPSIBLES */}
              <div className="space-y-4" id="faq-accordions-render">
                {(() => {
                  // Determine subset to show
                  let itemsToShow: Array<{ question: string; answer: string; categoryTitle: string }> = [];
                  
                  if (faqQuery) {
                    // Search everything
                    Object.values(FAQs).forEach(cat => {
                      cat.items.forEach(it => {
                        if (it.question.toLowerCase().includes(faqQuery.toLowerCase()) || 
                            it.answer.toLowerCase().includes(faqQuery.toLowerCase())) {
                          itemsToShow.push({ ...it, categoryTitle: cat.title });
                        }
                      });
                    });
                  } else {
                    const activeCatData = FAQs[faqCategory] || FAQs.planning;
                    itemsToShow = activeCatData.items.map(it => ({ ...it, categoryTitle: activeCatData.title }));
                  }

                  if (itemsToShow.length === 0) {
                    return (
                      <div className="py-12 text-center text-stone-500 font-light bg-stone-50 border border-dashed border-stone-200 rounded-2xl">
                        No matches located for your term. Search via &ldquo;tips&rdquo;, &ldquo;visas&rdquo;, or &ldquo;kids&rdquo;!
                      </div>
                    );
                  }

                  return itemsToShow.map((item, idx) => {
                    const uniqueId = `faq-${idx}-${item.question.slice(0, 15)}`;
                    const isExpanded = expandedFaq === uniqueId;
                    
                    return (
                      <div 
                        key={uniqueId}
                        className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-sm"
                      >
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : uniqueId)}
                          className="w-full p-5 sm:p-6 flex justify-between items-center text-left focus:outline-hidden font-serif hover:bg-stone-50 transition-colors"
                        >
                          <div className="space-y-1 pr-6">
                            {faqQuery && (
                              <span className="text-[9px] font-mono text-gold-600 border border-gold-300 px-1.5 py-0.5 rounded uppercase mr-2 tracking-widest font-bold">
                                {item.categoryTitle.split(": ")[1]}
                              </span>
                            )}
                            <span className="text-base sm:text-lg font-bold text-stone-900 tracking-wide">{item.question}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-stone-400 transform transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden border-t border-stone-100"
                            >
                              <div className="p-5 sm:p-6 bg-stone-50/50 text-stone-650 text-sm leading-relaxed font-light">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  });
                })()}
              </div>

            </motion.div>
          )}

          {/* 7. DESIGN PLANNER SYSTEM FORM */}
          {activeTab === 'planner' && (
            <motion.div
              key="planner-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
              id="custom-safari-designer-portal"
            >
              <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 md:p-12 shadow-md space-y-10">
                
                <div className="text-center space-y-3">
                  <div className="font-mono text-[10px] uppercase text-gold-600 font-bold tracking-[0.3em]" id="designer-badge">
                    Private Safari Architect
                  </div>
                  <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-950">Design Your Custom Safari</h1>
                  <p className="text-stone-500 text-xs sm:text-sm max-w-xl mx-auto">
                    Initiate your personalized planning dossier. A veteran Mzuri concierge advisor will compile pricing and bespoke suggestions inside 24 hours.
                  </p>
                </div>

                {plannerSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-gold-50/70 border border-gold-300 rounded-2xl text-center space-y-6"
                    id="planner-confirmation"
                  >
                    <div className="w-16 h-16 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-black text-stone-900">Your Safari Dossier is Initiated</h3>
                      <p className="text-stone-600 text-sm font-light max-w-lg mx-auto leading-relaxed">
                        Excellent, <strong className="font-semibold text-stone-900">{plannerForm.name}</strong>. We have synchronized your options with our Kampala ground office. A private luxury advisor with direct gorilla permit networks will email yours at <strong className="font-semibold text-stone-900">{plannerForm.email}</strong>.
                      </p>
                    </div>
                    
                    <div className="bg-white/80 border border-stone-200 p-4 rounded-xl text-xs max-w-md mx-auto text-stone-500 font-mono text-left space-y-1.5 shadow-xs">
                      <div className="text-gold-700 font-serif font-bold h-4">Dossier Summary:</div>
                      <div>&bull; Targets: {plannerForm.destinations.join(', ') || 'All East Africa'}</div>
                      <div>&bull; Duration Frame: {plannerForm.duration} Days</div>
                      <div>&bull; Party Size: {plannerForm.partySize} Guests</div>
                      <div>&bull; Style Standard: {plannerForm.lodgingPrestige === 'elite' ? 'Elite Sovereign Lodge Class' : 'Premium eco-camp Master Class'}</div>
                      {plannerForm.notes && <div>&bull; Custom Notes: &ldquo;{plannerForm.notes}&rdquo;</div>}
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setPlannerSubmitted(false);
                          setPlannerStep(1);
                          setPlannerForm({
                            destinations: [],
                            duration: '10-14',
                            partySize: '2',
                            interests: [],
                            lodgingPrestige: 'elite',
                            name: '',
                            email: '',
                            phone: '',
                            timeframe: 'Late 2026',
                            notes: ''
                          });
                        }}
                        className="px-6 py-3 bg-stone-950 hover:bg-gold-500 text-white hover:text-stone-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        Initiate Another Dossier
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handlePlannerSubmit} className="space-y-8" id="planner-step-form">
                    
                    {/* Stepper Tabs */}
                    <div className="flex justify-between items-center text-xs font-mono font-bold tracking-widest text-stone-400 border-b border-stone-100 pb-4">
                      <button type="button" onClick={() => setPlannerStep(1)} className={`pb-2 ${plannerStep === 1 ? 'text-gold-600 border-b-2 border-gold-600' : ''}`}>1. Horizon Selections</button>
                      <button type="button" onClick={() => setPlannerStep(2)} className={`pb-2 ${plannerStep === 2 ? 'text-gold-600 border-b-2 border-gold-600' : ''}`}>2. Refinement Specifications</button>
                      <button type="button" onClick={() => setPlannerStep(3)} className={`pb-2 ${plannerStep === 3 ? 'text-gold-600 border-b-2 border-gold-600' : ''}`}>3. Final Contact Details</button>
                    </div>

                    {/* STEP 1: Horizons and Destinations */}
                    {plannerStep === 1 && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="space-y-6"
                      >
                        <div className="space-y-3">
                          <label className="text-sm font-bold uppercase tracking-wider text-stone-900 block font-serif">A. Choose Your Target Territories (Choose many):</label>
                          <div className="grid grid-cols-2 gap-3">
                            {['Uganda', 'Rwanda', 'Kenya', 'Tanzania'].map((country) => {
                              const isChecked = plannerForm.destinations.includes(country);
                              return (
                                <div 
                                  key={country}
                                  onClick={() => handlePlannerCheck('destinations', country)}
                                  className={`p-4 border rounded-xl cursor-pointer text-center font-bold tracking-wider text-xs uppercase transition-all-custom ${
                                    isChecked 
                                      ? 'bg-gold-50 border-gold-500 text-gold-800' 
                                      : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-600'
                                  }`}
                                >
                                  {country}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-bold uppercase tracking-wider text-stone-900 block font-serif">B. Specific Wildlife & Experiential Focus Interests:</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {['Mountain Gorillas', 'Chimpanzees', 'The Great Migration', 'Nile Rafting & Sports', 'Cultural Meetups', 'Landscape Video capture'].map((interest) => {
                              const isChecked = plannerForm.interests.includes(interest);
                              return (
                                <div 
                                  key={interest}
                                  onClick={() => handlePlannerCheck('interests', interest)}
                                  className={`p-3 border rounded-lg cursor-pointer text-center text-xs transition-all-custom font-semibold ${
                                    isChecked 
                                      ? 'bg-stone-900 border-stone-900 text-white' 
                                      : 'bg-white border-stone-150 hover:bg-stone-50 text-stone-600'
                                  }`}
                                >
                                  {interest}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button 
                            type="button" 
                            onClick={() => setPlannerStep(2)}
                            className="px-6 py-3 bg-stone-950 hover:bg-stone-850 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                          >
                            Proceed to Specifications &rarr;
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: Refinement Specs */}
                    {plannerStep === 2 && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          
                          <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-stone-900 block font-serif">A. Estimative Duration (Days):</label>
                            <select 
                              value={plannerForm.duration}
                              onChange={(e) => setPlannerForm(prev => ({ ...prev, duration: e.target.value }))}
                              className="w-full p-2.5 border border-stone-250 bg-white rounded-lg text-sm"
                            >
                              <option value="5-8">5 to 8 Days (Fast Trails)</option>
                              <option value="10-14">10 to 14 Days (Signature Loop)</option>
                              <option value="15-20">15 to 20 Days (Grand Showcase)</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-stone-900 block font-serif">B. Travel Party Size (Guests):</label>
                            <select 
                              value={plannerForm.partySize}
                              onChange={(e) => setPlannerForm(prev => ({ ...prev, partySize: e.target.value }))}
                              className="w-full p-2.5 border border-stone-250 bg-white rounded-lg text-sm"
                            >
                              <option value="1">Solo Practitioner Tour</option>
                              <option value="2">Couples Expedition (2 Guests)</option>
                              <option value="4-6">Family Bubble Private Group (4-6 Guests)</option>
                              <option value="8+">Private Hosted Multi-vehicular Group (8+ Guests)</option>
                            </select>
                          </div>

                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-bold uppercase tracking-wider text-stone-900 block font-serif">C. Lodging Portfolio Class Prestige:</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div 
                              onClick={() => setPlannerForm(prev => ({ ...prev, lodgingPrestige: 'elite' }))}
                              className={`p-4 border rounded-xl cursor-pointer transition-all-custom ${
                                plannerForm.lodgingPrestige === 'elite' 
                                  ? 'bg-gold-50/70 border-gold-500 text-stone-905 font-bold shadow-xs' 
                                  : 'bg-white border-stone-150 hover:bg-stone-50 text-stone-500 font-light'
                              }`}
                            >
                              <div className="text-xs uppercase tracking-wider text-gold-700 font-bold mb-1">Elite Sovereign Lodge Class</div>
                              <p className="text-[11px] leading-relaxed">Clouds Mount Cabin, One&Only Gorilla Nests, Singita Sasakwa. Double stone hearths, private heated plunge baths, completely dedicated button-care.</p>
                            </div>

                            <div 
                              onClick={() => setPlannerForm(prev => ({ ...prev, lodgingPrestige: 'premium' }))}
                              className={`p-4 border rounded-xl cursor-pointer transition-all-custom ${
                                plannerForm.lodgingPrestige === 'premium' 
                                  ? 'bg-gold-50/70 border-gold-500 text-stone-905 font-bold shadow-xs' 
                                  : 'bg-white border-stone-150 hover:bg-stone-50 text-stone-500 font-light'
                              }`}
                            >
                              <div className="text-xs uppercase tracking-wider text-gold-700 font-bold mb-1">Premium Eco-Camp Master Class</div>
                              <p className="text-[11px] leading-relaxed">Lemala, Mihingo, Chobe. Luxurious classic visual canvas setups, elevated savannah viewing bridges, pristine rustic elements.</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between pt-4">
                          <button 
                            type="button" 
                            onClick={() => setPlannerStep(1)}
                            className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-705 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                          >
                            &larr; Back
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setPlannerStep(3)}
                            className="px-6 py-3 bg-stone-950 hover:bg-stone-850 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                          >
                            Proceed to Contact &rarr;
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: Final Contacts info */}
                    {plannerStep === 3 && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          
                          <div className="space-y-1.5">
                            <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">Your Full Name:</label>
                            <input 
                              type="text" 
                              required
                              value={plannerForm.name}
                              onChange={(e) => setPlannerForm(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="e.g. Dr. Arthur Conan Doyle"
                              className="w-full p-2.5 border border-stone-250 rounded-lg text-sm bg-stone-50focus:bg-white text-stone-900 focus:outline-hidden"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">Primary Email Address:</label>
                            <input 
                              type="email" 
                              required
                              value={plannerForm.email}
                              onChange={(e) => setPlannerForm(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="e.g. arthur@conandoyle.com"
                              className="w-full p-2.5 border border-stone-250 rounded-lg text-sm bg-stone-50focus:bg-white text-stone-900 focus:outline-hidden"
                            />
                          </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          
                          <div className="space-y-1.5">
                            <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">Preferred Travel Season:</label>
                            <select 
                              value={plannerForm.timeframe}
                              onChange={(e) => setPlannerForm(prev => ({ ...prev, timeframe: e.target.value }))}
                              className="w-full p-2.5 border border-stone-250 bg-white rounded-lg text-sm text-stone-900 focus:outline-hidden"
                            >
                              <option value="Late 2026">Late 2026 Season (November - February)</option>
                              <option value="Mid 2027">Mid 2027 Season (June - October)</option>
                              <option value="Over-Winter 2027">Late 2027 Season</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">Contact Number (WhatsApp enabled):</label>
                            <input 
                              type="text" 
                              value={plannerForm.phone}
                              onChange={(e) => setPlannerForm(prev => ({ ...prev, phone: e.target.value }))}
                              placeholder="e.g. +1 (415) 555-0199"
                              className="w-full p-2.5 border border-stone-250 rounded-lg text-sm bg-stone-50focus:bg-white text-stone-900 focus:outline-hidden"
                            />
                          </div>

                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">Special Requests or Medical limitations:</label>
                          <textarea 
                            rows={3}
                            value={plannerForm.notes}
                            onChange={(e) => setPlannerForm(prev => ({ ...prev, notes: e.target.value }))}
                            placeholder="Please specify physical concerns, flight needs, customized photography requests, target primates..."
                            className="w-full p-2.5 border border-stone-250 rounded-lg text-sm bg-stone-55 lg:bg-stone-50 focus:bg-white text-stone-900 focus:outline-hidden"
                          />
                        </div>

                        <div className="flex justify-between pt-4">
                          <button 
                            type="button" 
                            onClick={() => setPlannerStep(2)}
                            className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-705 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                          >
                            &larr; Back
                          </button>
                          <button 
                            type="submit"
                            className="px-8 py-3.5 bg-stone-950 hover:bg-gold-500 text-white hover:text-stone-900 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer shadow-md"
                          >
                            Complete & Submit Dossier
                          </button>
                        </div>
                      </motion.div>
                    )}

                  </form>
                )}

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* RICH BRAND FOOTER */}
      <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 border-t border-stone-850" id="brand-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Core Bio */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-stone-800 shadow-md p-1 overflow-hidden shrink-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1943KXEJvQG7BDiUCCqbe0aEF2NbfNab_" 
                    alt="Mzuri Afrikana Safaris Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="font-serif font-black text-sm tracking-widest text-white uppercase">
                  Mzuri Afrikana
                </div>
              </div>
              
              <p className="text-xs leading-relaxed font-light text-stone-400">
                Operating at the absolute pinnacle of East African experiential travel, designing ultra-premium bespoke safaris for discerning international clients. Explore Africa in Style.
              </p>

              <div className="text-stone-300 text-[11px] font-medium font-serif border-t border-stone-850/50 pt-3 space-y-0.5">
                <div className="text-gold-400 text-[9px] uppercase font-bold tracking-widest font-mono">Executive Leadership</div>
                <p className="text-white text-xs font-bold leading-tight">Mr. Waluga Emmanual (Wemma)</p>
                <p className="text-stone-500 font-mono text-[9px] uppercase tracking-wider">Chief Executive Officer</p>
              </div>

              <div className="text-gold-400 text-[10px] uppercase font-bold tracking-widest font-mono border-t border-stone-850/30 pt-1">
                &ldquo;absolutely Africa&rdquo;
              </div>
            </div>

            {/* Column 2: Quick navigation */}
            <div className="space-y-4">
              <h4 className="font-serif text-white text-sm font-bold tracking-wider">Quick Horizons</h4>
              <ul className="text-xs space-y-2 font-mono uppercase tracking-widest">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer transition-colors text-left py-0.5">Home &bull; Story</button></li>
                <li><button onClick={() => navigateTo('catalog')} className="hover:text-white cursor-pointer transition-colors text-left py-0.5">Safaris Portfolio</button></li>
                <li><button onClick={() => navigateTo('destinations')} className="hover:text-white cursor-pointer transition-colors text-left py-0.5">Territory Map</button></li>
                <li><button onClick={() => navigateTo('lodges')} className="hover:text-white cursor-pointer transition-colors text-left py-0.5">Sanctuary Partners</button></li>
                <li><button onClick={() => navigateTo('faqs')} className="hover:text-white cursor-pointer transition-colors text-left py-0.5">Help & FAQs</button></li>
              </ul>
            </div>

            {/* Column 3: The Mzuri One for One Commitment */}
            <div className="space-y-4">
              <h4 className="font-serif text-white text-sm font-bold tracking-wider">Mzuri Commitment</h4>
              <p className="text-xs leading-relaxed font-light text-stone-400">
                <strong>The &ldquo;Mzuri One for One&rdquo; Commitment:</strong> For every guest who books a journey with us, our foundation sponsors an entire school term&apos;s tuition, uniform, and books for a conservation-area child whose family lives adjacent to forest reserves, guaranteeing conservation directly supports humanity.
              </p>
            </div>

            {/* Column 4: Contact credentials */}
            <div className="space-y-4">
              <h4 className="font-serif text-white text-sm font-bold tracking-wider">HQ & Contact</h4>
              <div className="text-xs space-y-3 font-mono">
                <div className="flex items-start gap-2 text-stone-400">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0 select-none mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-white">Main Operations Base:</p>
                    <p>Kampala, Uganda</p>
                  </div>
                </div>
                <p className="flex items-center gap-2 text-stone-400">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0 select-none" />
                  <a href="https://wa.me/256792045930" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +256 792045930
                  </a>
                </p>
                <div className="flex items-start gap-2 text-stone-400">
                  <Mail className="w-4 h-4 text-gold-500 shrink-0 select-none mt-0.5" />
                  <div className="space-y-1">
                    <a href="mailto:emmanuelwalugaa@gmail.com" className="hover:text-white transition-colors block">
                      emmanuelwalugaa@gmail.com
                    </a>
                  </div>
                </div>
                <p className="flex items-center gap-2 text-stone-400">
                  <Globe className="w-4 h-4 text-gold-500 shrink-0 select-none" />
                  <a href="https://www.mzuriafrikanasafaris.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    www.mzuriafrikanasafaris.com
                  </a>
                </p>

                {/* Social Handles */}
                <div className="pt-2 border-t border-stone-850 space-y-2">
                  <p className="font-serif text-white text-[10px] uppercase font-bold tracking-wider">Social Handles:</p>
                  <div className="flex flex-wrap gap-2.5 text-[10px] text-stone-400 font-semibold tracking-wider font-mono">
                    <a href="https://youtube.com/@mzurifrikanasafaris" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors uppercase">
                      YouTube
                    </a>
                    <span>&bull;</span>
                    <a href="https://instagram.com/mzurifrikanasafaris" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors uppercase">
                      Instagram
                    </a>
                    <span>&bull;</span>
                    <a href="https://facebook.com/mzurifrikanasafaris" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors uppercase">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-stone-850 text-center text-[10px] sm:text-xs text-stone-500 tracking-wider">
            <div>
              &copy; {new Date().getFullYear()} Mzuri Afrikana Safaris Limited. Lic. UTB/0219/2026. All Rights Reserved. 
            </div>
            <div className="mt-1">
              Custom safari layouts bench-marked closely against high-end global standards. Under Kampala Jurisdictions.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
