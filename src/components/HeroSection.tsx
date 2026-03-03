import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, y: 40, duration: 1, ease: "power3.out" });
      gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-cta", { opacity: 0, scale: 0.9, duration: 0.6, delay: 0.6, ease: "back.out(1.7)" });
      gsap.from(".hero-avatars", { opacity: 0, y: 20, duration: 0.6, delay: 0.8, ease: "power2.out" });
      gsap.from(".hero-deco-left", { opacity: 0, x: -60, rotation: -15, duration: 1, delay: 0.4, ease: "power2.out" });
      gsap.from(".hero-deco-right", { opacity: 0, x: 60, duration: 1, delay: 0.5, ease: "power2.out" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-10 pb-12 md:pt-20 md:pb-24 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Left decorative - hidden on mobile */}
        <div className="hero-deco-left hidden md:block absolute left-8 top-40 z-10">
          <div className="w-56 h-36 border-2 border-awadoc-yellow rounded-lg bg-background relative rotate-[-8deg]">
            <div className="absolute top-3 left-4 right-4 space-y-2">
              <div className="h-2 bg-awadoc-yellow/40 rounded w-3/4" />
              <div className="h-2 bg-awadoc-yellow/30 rounded w-1/2" />
              <div className="h-2 bg-awadoc-yellow/20 rounded w-2/3" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-12 h-8 bg-awadoc-yellow rounded-sm rotate-[5deg]" />
          </div>
          <div className="mt-3 ml-0">
            <div className="bg-awadoc-yellow text-foreground rounded-md px-3 py-1 text-xs font-semibold inline-flex items-center gap-1 shadow-sm">
              <span>Buyer</span>
              <svg width="8" height="8" viewBox="0 0 8 8" className="ml-0.5"><polygon points="4,8 0,0 8,0" fill="currentColor" /></svg>
            </div>
          </div>
        </div>

        {/* Right decorative - hidden on mobile */}
        <div className="hero-deco-right hidden md:block absolute right-8 top-36 z-10">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="text-awadoc-blue">
            <path d="M10 30 Q30 5, 50 30 T90 30 T110 20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M85 15 Q95 5, 105 15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <div className="mt-1 flex justify-end">
            <div className="bg-awadoc-blue text-primary-foreground rounded-md px-3 py-1 text-xs font-semibold inline-flex items-center gap-1 shadow-sm">
              <span>Trader</span>
              <svg width="8" height="8" viewBox="0 0 8 8" className="ml-0.5"><polygon points="4,8 0,0 8,0" fill="currentColor" /></svg>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto relative z-20 px-2 sm:px-4">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-4 md:mb-6">
            Instant Market Prices via<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>WhatsApp, Powered by AI.
          </h1>
          <p className="hero-subtitle text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop buying blind. Get real-time prices from major markets across Nigeria directly on your WhatsApp. Overcome price confusion and overspending. Increase savings, not costs.
          </p>
          <div className="hero-cta">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold shadow-lg shadow-primary/25 w-full sm:w-auto">
              Talk to Mudu now
            </Button>
          </div>

          {/* Avatar group */}
          <div className="hero-avatars mt-8 md:mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
              ].map((src, i) => (
                <img key={i} src={src} alt="User" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background object-cover" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-primary">Helping over</p>
              <p className="text-xs sm:text-sm font-semibold text-primary">1.5billion Africans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
