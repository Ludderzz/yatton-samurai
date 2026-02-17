import React from 'react';
import { 
  Instagram, MapPin, Clock, Award, Shield, Users, 
  Target, ChevronRight, Globe, Anchor, HelpCircle, Map 
} from 'lucide-react';
import coachImg from './assets/pic.png';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600/30 font-sans antialiased overflow-x-hidden">
      
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5 px-4 py-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-red-600 flex items-center justify-center rotate-45 shrink-0">
              <span className="text-white font-black -rotate-45 text-[10px]">SF</span>
            </div>
            <span className="font-black tracking-tighter text-lg sm:text-xl italic uppercase">Samurai Fitness</span>
          </div>
          <a href="https://instagram.com/samuraifitness2025" className="hover:text-red-500 transition-colors flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <Instagram size={16} />
            <span className="hidden xs:inline">Follow</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <span className="h-[1px] w-8 sm:w-12 bg-red-600"></span>
            <span className="text-red-500 text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase">Est. 2025 • Yatton</span>
            <span className="h-[1px] w-8 sm:w-12 bg-red-600"></span>
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] sm:leading-[0.8] mb-8 italic break-words">
            Samurai <br />
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]">Fitness</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl font-light tracking-tight text-zinc-400 max-w-2xl mx-auto leading-tight px-2">
            High quality <span className="text-white font-medium italic underline decoration-red-600 underline-offset-4 sm:underline-offset-8">Jiu Jitsu</span> instruction built on community & discipline.
          </p>
          
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <a href="https://instagram.com/samuraifitness2025" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 text-center text-sm sm:text-base">
              Start Your Journey
            </a>
            <div className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border border-zinc-800 font-mono text-[10px] sm:text-sm tracking-widest uppercase bg-zinc-900/50">
               Sat 10:30 & Wed 19:30
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-20 sm:py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <h2 className="text-4xl sm:text-5xl font-black uppercase italic leading-none text-balance">The Gentle Art in <br /><span className="text-red-600">North Somerset</span></h2>
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light italic">
                "We’re more than just a club - we’re building a local community of like-minded people committed to learning & training."
              </p>
              <div className="space-y-4 text-sm sm:text-base text-zinc-500 leading-relaxed">
                <p>At Samurai Fitness, we teach Brazilian Jiu Jitsu (BJJ) — a martial art focused on leverage, control, and submissions. Whether you're training for self-defense, competition, or fitness, our classes are tailored to your goals.</p>
                <p>All levels are welcome - from complete beginners to seasoned athletes. We pride ourselves on a safe, inclusive, and welcoming environment.</p>
              </div>
            </div>
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 p-8 sm:p-10 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-600" />
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-red-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs sm:text-sm">Location</h4>
                    <p className="text-zinc-400 text-sm sm:text-base">The Studio, Yatton <br className="hidden sm:block" /> @_thestudioyatton</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Target className="text-red-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs sm:text-sm">Focus</h4>
                    <p className="text-zinc-400 text-sm sm:text-base">Leverage, Control, Submissions, & Mindset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Coach - Detailed Bio with Image */}
      <section className="py-20 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative group max-w-md mx-auto lg:max-w-none w-full">
              <div className="absolute -inset-2 sm:-inset-4 border border-zinc-800 group-hover:border-red-600 transition-colors z-0" />
              <div className="relative z-10 bg-zinc-900 aspect-[4/5] overflow-hidden">
                <img 
                  src={coachImg} 
                  alt="Samurai Fitness Lead Coach" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-red-600 p-4 sm:p-8 z-20">
                <Award size={32} className="text-white sm:hidden" />
                <Award size={48} className="text-white hidden sm:block" />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 text-red-500 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-sm">
                <Anchor size={18} />
                Former Royal Marine Commando
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase italic leading-none text-balance">
                24 Years <br /> <span className="text-zinc-500 underline decoration-red-600">Service</span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-medium italic leading-relaxed">
                A Brown Belt under the Chamberlain Brothers at the Roger Gracie Academy Bristol, he remains a key member of their Coaching Team.
              </p>
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                His passion for the sport has led him to train all over the globe, including the United States, Thailand, and most recently Brazil. As a qualified PT, Fitness Instructor, Coach & Mentor, he brings a unique blend of physical conditioning and mindset coaching.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                <div className="p-4 sm:p-6 bg-zinc-900 border border-zinc-800">
                   <p className="text-red-500 font-black text-2xl sm:text-3xl">BJJ</p>
                   <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Brown Belt</p>
                </div>
                <div className="p-4 sm:p-6 bg-zinc-900 border border-zinc-800">
                   <p className="text-red-500 font-black text-2xl sm:text-3xl">PT</p>
                   <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Qualified Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline / Schedule */}
      <section className="py-20 sm:py-24 bg-zinc-900/50 border-y border-zinc-800 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase italic mb-12 sm:mb-16 tracking-tight text-balance px-4">Deployment Schedule</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 relative text-left max-w-sm md:max-w-none mx-auto">
            <div className="p-6 sm:p-8 bg-zinc-950 border-t-4 border-red-600 relative">
              <h3 className="text-xl sm:text-2xl font-black uppercase italic mb-2">Adult Programme</h3>
              <p className="text-red-500 font-mono text-xs sm:text-sm mb-4 tracking-tighter sm:tracking-normal">LAUNCHED 29.11.2025</p>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-6">Full technical instruction for all levels now active on the mats.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <Clock size={14} className="text-red-600 shrink-0" /> Wed 19:30 / Sat 10:30
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-zinc-950 border-t-4 border-zinc-700 opacity-60 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-zinc-800 px-2 py-1 text-[8px] font-bold tracking-[.2em] uppercase">Phase 2</div>
              <h3 className="text-xl sm:text-2xl font-black uppercase italic mb-2 text-zinc-500">Teen Programme</h3>
              <p className="text-zinc-600 font-mono text-xs sm:text-sm mb-4 tracking-tighter">LAUNCHING SPRING 2026</p>
              <p className="text-zinc-500 text-xs sm:text-sm italic">Developing discipline, confidence and control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Gallery */}
      <section className="py-20 sm:py-24 px-6 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 mb-10 sm:mb-12 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight">The Mats</h2>
              <a href="https://instagram.com/samuraifitness2025" className="text-red-500 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2">View Gallery <ChevronRight size={16}/></a>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-colors flex items-center justify-center grayscale hover:grayscale-0 overflow-hidden relative group">
                   <div className="text-zinc-800 font-black text-lg sm:text-2xl uppercase italic">Training</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 px-6 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 sm:mb-12">
            <HelpCircle className="text-red-600 shrink-0" size={28} />
            <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter">New to the mats?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 text-center sm:text-left">
            {[
              { q: "What should I wear?", a: "For your first session, comfortable gym wear (shorts/leggings and a t-shirt) is perfect. No shoes on the mats." },
              { q: "Do I need to be fit?", a: "No. BJJ will get you into shape. We focus on technique over raw athleticism to ensure everyone can progress." },
              { q: "Is it safe?", a: "Safety is our priority. We foster a supportive environment where ego is left at the door. You will be guided daily." },
              { q: "How do I join?", a: "Simply send us a DM on Instagram. We’ll confirm your spot and provide any extra details for your first class." }
            ].map((faq, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-bold text-red-500 uppercase text-[10px] sm:text-xs tracking-[0.2em]">{faq.q}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed italic">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Card */}
      <section className="py-16 sm:py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col md:flex-row rounded-sm">
          <div className="p-8 sm:p-10 md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-block bg-red-600 px-3 py-1 text-[8px] sm:text-[10px] font-black uppercase tracking-widest italic">Yatton Base</div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase italic text-balance leading-tight">Visit The Studio</h3>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed italic">Our Yatton facility provides a clean, professional environment for technical training in North Somerset.</p>
            <div className="pt-2 flex items-center justify-center md:justify-start gap-3 text-zinc-300 font-mono text-[10px] sm:text-sm">
                <MapPin size={16} className="text-red-600 shrink-0" />
                The Studio, Yatton BS49
            </div>
          </div>
          <div className="bg-zinc-950 md:w-1/2 min-h-[200px] sm:min-h-[300px] flex items-center justify-center relative italic text-zinc-800">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
             <div className="relative z-10 flex flex-col items-center gap-2">
                <Map size={32} className="text-zinc-900" />
                <span className="font-black tracking-[0.4em] uppercase text-lg sm:text-xl">Find Us</span>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-20 sm:py-32 px-6 text-center border-t border-zinc-900">
        <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
          <div className="inline-block p-4 rounded-full bg-zinc-900 mb-2 animate-bounce">
             <Globe className="text-red-600" size={24} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter px-4">See you on the mats</h2>
          <div className="space-y-4">
            <p className="text-zinc-500 uppercase font-bold tracking-[0.3em] text-[10px] sm:text-xs underline decoration-red-600 underline-offset-4 decoration-2">DM for more information</p>
            <a href="https://instagram.com/samuraifitness2025" className="text-xl sm:text-3xl md:text-5xl font-black hover:text-red-500 transition-colors break-all block px-4 leading-tight">@samuraifitness2025</a>
          </div>
          <p className="pt-16 sm:pt-24 text-[8px] sm:text-[10px] text-zinc-700 uppercase tracking-[0.5em] sm:tracking-[0.8em] font-black leading-loose italic">
            Samurai Fitness // Gentle Art // Royal Marine DNA
          </p>
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm sm:hidden">
        <a 
          href="https://instagram.com/samuraifitness2025"
          className="flex items-center justify-center gap-3 bg-red-600 text-white p-4 font-black uppercase tracking-[0.15em] text-xs shadow-2xl shadow-red-600/40 active:scale-95 transition-transform border border-white/10 rounded-sm"
        >
          <Instagram size={18} />
          Book Your Class
        </a>
      </div>
    </div>
  );
}