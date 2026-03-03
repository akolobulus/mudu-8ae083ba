import { Button } from "@/components/ui/button";
import { FileText, Waves } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Decorative elements */}
        <div className="absolute left-4 md:left-12 top-0 md:top-8">
          <div className="w-16 h-20 md:w-20 md:h-24 bg-awadoc-yellow/20 rounded-xl flex items-center justify-center rotate-[-12deg]">
            <FileText className="w-8 h-8 md:w-10 md:h-10 text-awadoc-yellow" />
          </div>
          <div className="mt-4 bg-background shadow-lg rounded-full px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5 border border-border">
            <div className="w-5 h-5 rounded-full bg-awadoc-pink/20 flex items-center justify-center text-[10px]">👩</div>
            Anna
          </div>
        </div>

        <div className="absolute right-4 md:right-12 top-4 md:top-12">
          <div className="w-16 h-20 md:w-20 md:h-24 bg-awadoc-blue/20 rounded-xl flex items-center justify-center rotate-[12deg]">
            <Waves className="w-8 h-8 md:w-10 md:h-10 text-awadoc-blue" />
          </div>
          <div className="mt-4 bg-background shadow-lg rounded-full px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5 border border-border">
            <div className="w-5 h-5 rounded-full bg-awadoc-blue/20 flex items-center justify-center text-[10px]">👩‍⚕️</div>
            Elena
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto px-8 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight mb-6">
            Instant Healthcare via WhatsApp, Powered by AI.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We improve patient access and engagement using AI-powered solutions delivered through WhatsApp, making healthcare accessible to everyone, everywhere.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
            Talk to Awadoc now
          </Button>
        </div>

        {/* Avatar group */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            {[
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            To serve over <span className="font-semibold text-foreground">1.5 billion</span> Africans
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
