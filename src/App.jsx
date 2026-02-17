import React from 'react';
import { 
  Instagram, MapPin, Clock, Award, Shield, Users, 
  Target, ChevronRight, Globe, Anchor, HelpCircle, Map 
} from 'lucide-react';
import coachImg from './assets/pic.png';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600/30 font-sans antialiased">
      
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center rotate-45">
              <span className="text-white font-black -rotate-45 text-xs">SF</span>
            </div>
            <span className="font-black tracking-tighter text-xl italic uppercase">Samurai Fitness</span>
          </div>
          <a href="https://instagram.com/samuraifitness2025" className="hover:text-red-500 transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
            <Instagram size={18} />
            <span className="hidden sm:inline">Follow the mats</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-red-600"></span>
            <span className="text-red-500 text-xs font-black tracking-[0.4em] uppercase">Est. 2025 • Yatton</span>
            <span className="h-[1px] w-12 bg-red-600"></span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-8 italic">
            Samurai <br />
            <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">Fitness</span>
          </h1>
          <p className="text-xl md:text-3xl font-light tracking-tight text-zinc-400 max-w-2xl mx-auto leading-tight">
            High quality <span className="text-white font-medium italic underline decoration-red-600 underline-offset-8">Jiu Jitsu</span> instruction built on community & discipline.
          </p>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://instagram.com/samuraifitness2025" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-black uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 text-center">
              Start Your Journey
            </a>
            <div className="w-full sm:w-auto px-10 py-5 border border-zinc-800 font-mono text-sm tracking-widest uppercase bg-zinc-900/50">
               Sat 10:30 & Wed 19:30
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-5xl font-black uppercase italic leading-none text-balance">The Gentle Art in <br /><span className="text-red-600">North Somerset</span></h2>
              <p className="text-xl text-zinc-300 leading-relaxed font-light italic">
                "We’re more than just a club - we’re building a local community of like-minded people committed to learning & training the 'Gentle Art' of Jiu Jitsu."
              </p>
              <div className="space-y-4 text-zinc-500">
                <p>At Samurai Fitness, we teach Brazilian Jiu Jitsu (BJJ) — a martial art focused on leverage, control, and submissions. Whether you're training for self-defense, competition, or fitness, our classes are tailored to your goals.</p>
                <p>All levels are welcome - from complete beginners to seasoned athletes. We pride ourselves on a safe, inclusive, and welcoming environment.</p>
              </div>
            </div>
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 p-10 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-red-600" />
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">Location</h4>
                    <p className="text-zinc-400">The Studio, Yatton North Somerset <br /> @_thestudioyatton</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Target className="text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">Focus</h4>
                    <p className="text-zinc-400">Leverage, Control, Submissions, & Mindset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Coach - Detailed Bio with Image */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-zinc-800 group-hover:border-red-600 transition-colors z-0" />
              <div className="relative z-10 bg-zinc-900 aspect-[4/5] overflow-hidden">
                <img 
                  src={coachImg} 
                  alt="Samurai Fitness Lead Coach" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-red-600 p-8 hidden md:block z-20">
                <Award size={48} className="text-white" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.3em] text-sm">
                <Anchor size={20} />
                Former Royal Marine Commando
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic leading-none text-balance">
                24 Years <br /> <span className="text-zinc-500 underline decoration-red-600">Service</span>
              </h2>
              <p className="text-lg text-zinc-300 font-medium italic">
                A Brown Belt under the Chamberlain Brothers at the Roger Gracie Academy Bristol, he remains a key member of their Coaching Team.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                His passion for the sport has led him to train all over the globe, including the United States, Thailand, and most recently Brazil. As a qualified PT, Fitness Instructor, Coach & Mentor, he brings a unique blend of physical conditioning, technical skill, and mindset coaching to every class.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-zinc-900 border border-zinc-800">
                   <p className="text-red-500 font-black text-3xl">BJJ</p>
                   <p className="text-xs uppercase tracking-widest font-bold text-zinc-400">Brown Belt</p>
                </div>
                <div className="p-6 bg-zinc-900 border border-zinc-800">
                   <p className="text-red-500 font-black text-3xl">PT</p>
                   <p className="text-xs uppercase tracking-widest font-bold text-zinc-400">Qualified Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline / Schedule */}
      <section className="py-24 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase italic mb-16">Deployment Schedule</h2>
          <div className="grid md:grid-cols-2 gap-12 relative text-left">
            <div className="p-8 bg-zinc-950 border-t-4 border-red-600 relative">
              <h3 className="text-2xl font-black uppercase italic mb-2">Adult Programme</h3>
              <p className="text-red-500 font-mono text-sm mb-4">LAUNCHED 29.11.2025</p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Full technical instruction for all levels now active on the mats.</p>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <Clock size={14} className="text-red-600" /> Wed 19:30 / Sat 10:30
              </div>
            </div>
            <div className="p-8 bg-zinc-950 border-t-4 border-zinc-700 opacity-60 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-zinc-800 px-3 py-1 text-[8px] font-bold tracking-[.3em] uppercase">Phase 2</div>
              <h3 className="text-2xl font-black uppercase italic mb-2 text-zinc-500">Teen Programme</h3>
              <p className="text-zinc-600 font-mono text-sm mb-4 tracking-tighter">LAUNCHING SPRING 2026</p>
              <p className="text-zinc-500 text-sm italic">Developing discipline, confidence and control for the next generation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Gallery (Placeholders) */}
      <section className="py-24 px-6 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-black uppercase italic">The Mats</h2>
              <a href="https://instagram.com/samuraifitness2025" className="text-red-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">View Gallery <ChevronRight size={16}/></a>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-colors flex items-center justify-center grayscale hover:grayscale-0 overflow-hidden">
                   <div className="text-zinc-800 font-black text-2xl uppercase italic">Training</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <HelpCircle className="text-red-600" size={32} />
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">New to the mats?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <h4 className="font-bold text-red-500 uppercase text-sm tracking-widest">What should I wear?</h4>
              <p className="text-zinc-500 text-sm leading-relaxed italic">For your first session, comfortable gym wear (shorts/leggings and a t-shirt) is perfect. No shoes are permitted on the mats.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-red-500 uppercase text-sm tracking-widest">Do I need to be fit?</h4>
              <p className="text-zinc-500 text-sm leading-relaxed italic">No. BJJ will get you into shape. We focus on technique and leverage over raw athleticism to ensure everyone can progress.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-red-500 uppercase text-sm tracking-widest">Is it safe for beginners?</h4>
              <p className="text-zinc-500 text-sm leading-relaxed italic">Safety is our priority. We foster a supportive environment where ego is left at the door. You will be guided every step of the way.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-red-500 uppercase text-sm tracking-widest">How do I join?</h4>
              <p className="text-zinc-500 text-sm leading-relaxed italic">Simply send us a DM on Instagram. We’ll confirm your spot and provide any extra details for your first class.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Card */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col md:flex-row">
          <div className="p-10 md:w-1/2 space-y-6">
            <div className="inline-block bg-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest italic">Yatton Base</div>
            <h3 className="text-3xl font-black uppercase italic text-balance">Visit The Studio</h3>
            <p className="text-zinc-500 leading-relaxed italic">Our Yatton facility provides a clean, focused, and professional environment for high-level technical training in North Somerset.</p>
            <div className="pt-4 flex items-center gap-3 text-zinc-300 font-mono text-sm">
                <MapPin size={18} className="text-red-600 shrink-0" />
                The Studio, Yatton North Somerset
            </div>
          </div>
          <div className="bg-zinc-950 md:w-1/2 min-h-[300px] flex items-center justify-center relative italic text-zinc-800">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
             <div className="relative z-10 flex flex-col items-center gap-2">
                <Map size={40} className="text-zinc-900" />
                <span className="font-black tracking-[0.5em] uppercase text-xl">Find Us</span>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-32 px-6 text-center border-t border-zinc-900">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="inline-block p-4 rounded-full bg-zinc-900 mb-4 animate-bounce">
             <Globe className="text-red-600" />
          </div>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">See you on the mats</h2>
          <div className="space-y-4">
            <p className="text-zinc-500 uppercase font-bold tracking-[.4em] text-xs underline decoration-red-600 underline-offset-4 decoration-2">DM for more information</p>
            <a href="https://instagram.com/samuraifitness2025" className="text-3xl md:text-5xl font-black hover:text-red-500 transition-colors break-all">@samuraifitness2025</a>
          </div>
          <p className="pt-24 text-[10px] text-zinc-700 uppercase tracking-[.8em] font-black leading-loose">
            Samurai Fitness // Gentle Art // Royal Marine DNA
          </p>
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md sm:hidden">
        <a 
          href="https://instagram.com/samuraifitness2025"
          className="flex items-center justify-center gap-3 bg-red-600 text-white p-5 font-black uppercase tracking-widest shadow-2xl shadow-red-600/40 active:scale-95 transition-transform border-2 border-white/10"
        >
          <Instagram size={20} />
          Book Your Class
        </a>
      </div>
    </div>
  );
}