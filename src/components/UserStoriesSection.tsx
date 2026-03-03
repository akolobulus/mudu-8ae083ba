import marketBuyer1 from "@/assets/market-buyer-1.jpg";
import marketTrader1 from "@/assets/market-trader-1.jpg";
import marketBuyer2 from "@/assets/market-buyer-2.jpg";
import marketTrader2 from "@/assets/market-trader-2.jpg";

const UserStoriesSection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto relative min-h-[500px] md:min-h-[600px]">
        
        {/* Large left circle - yellow bg, buyer on phone */}
        <div className="md:absolute md:left-0 md:top-8 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-awadoc-yellow overflow-hidden">
            <img
              src={marketBuyer1}
              alt="Nigerian buyer checking prices on phone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center top - small blue circle, trader portrait */}
        <div className="md:absolute md:left-[35%] md:top-0 flex flex-col items-center mb-8 md:mb-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-awadoc-blue overflow-hidden">
            <img
              src={marketTrader1}
              alt="Nigerian market trader"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bubble to the right */}
          <div className="md:absolute md:-right-48 md:top-10 mt-3 md:mt-0">
            <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
              Check today's prices
            </div>
          </div>
        </div>

        {/* Center bubbles */}
        <div className="hidden md:block absolute left-[28%] top-[55%] space-y-3">
          <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
            Thanks, saved me money!
          </div>
          <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
            Smart shopping for u
          </div>
        </div>

        {/* Right center - large cyan circle, woman at market */}
        <div className="md:absolute md:right-[15%] md:top-[30%] flex flex-col items-center mb-8 md:mb-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-awadoc-blue overflow-hidden" style={{ backgroundColor: 'hsl(180, 70%, 55%)' }}>
            <img
              src={marketBuyer2}
              alt="Nigerian woman buying at market"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bubble below */}
          <div className="mt-3 md:mt-4">
            <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
              Find the best deals
            </div>
          </div>
        </div>

        {/* Far right - small purple circle, trader */}
        <div className="md:absolute md:right-0 md:top-0 flex flex-col items-center mb-8 md:mb-0">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-awadoc-purple overflow-hidden">
            <img
              src={marketTrader2}
              alt="Nigerian market professional"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bubble to the right */}
          <div className="mt-3 md:mt-4">
            <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
              Compare market prices
            </div>
          </div>
        </div>

        {/* Mobile-only bubbles */}
        <div className="md:hidden flex flex-col items-center gap-3 mt-4">
          <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
            Thanks, saved me money!
          </div>
          <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
            Smart shopping for u
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStoriesSection;
