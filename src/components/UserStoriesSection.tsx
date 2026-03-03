import marketBuyer1 from "@/assets/market-buyer-1.jpg";
import marketTrader1 from "@/assets/market-trader-1.jpg";
import marketBuyer2 from "@/assets/market-buyer-2.jpg";
import marketTrader2 from "@/assets/market-trader-2.jpg";

const UserStoriesSection = () => {
  return (
    <section className="py-10 md:py-20 px-4">
      {/* Mobile layout: 2x2 grid of circles with bubbles */}
      <div className="md:hidden max-w-sm mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center" data-aos="zoom-in">
            <div className="w-36 h-36 rounded-full bg-awadoc-yellow overflow-hidden">
              <img src={marketBuyer1} alt="Nigerian buyer checking prices on phone" className="w-full h-full object-cover" />
            </div>
            <div className="mt-2 bg-background shadow-sm border border-border rounded-xl px-3 py-2 text-xs text-foreground text-center">
              Check today's prices
            </div>
          </div>
          <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="w-28 h-28 rounded-full bg-awadoc-blue overflow-hidden">
              <img src={marketTrader1} alt="Nigerian market trader" className="w-full h-full object-cover" />
            </div>
            <div className="mt-2 bg-background shadow-sm border border-border rounded-xl px-3 py-2 text-xs text-foreground text-center">
              Thanks, saved me money!
            </div>
          </div>
          <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-32 h-32 rounded-full overflow-hidden" style={{ backgroundColor: 'hsl(180, 70%, 55%)' }}>
              <img src={marketBuyer2} alt="Nigerian woman buying at market" className="w-full h-full object-cover" />
            </div>
            <div className="mt-2 bg-background shadow-sm border border-border rounded-xl px-3 py-2 text-xs text-foreground text-center">
              Find the best deals
            </div>
          </div>
          <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="w-28 h-28 rounded-full bg-awadoc-purple overflow-hidden">
              <img src={marketTrader2} alt="Nigerian market professional" className="w-full h-full object-cover" />
            </div>
            <div className="mt-2 bg-background shadow-sm border border-border rounded-xl px-3 py-2 text-xs text-foreground text-center">
              Smart shopping for u
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout: absolute positioned circles */}
      <div className="hidden md:block max-w-6xl mx-auto relative min-h-[600px]">
        <div className="absolute left-0 top-8 flex flex-col items-start" data-aos="zoom-in">
          <div className="w-80 h-80 rounded-full bg-awadoc-yellow overflow-hidden">
            <img src={marketBuyer1} alt="Nigerian buyer checking prices on phone" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="absolute left-[35%] top-0 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="w-40 h-40 rounded-full bg-awadoc-blue overflow-hidden">
            <img src={marketTrader1} alt="Nigerian market trader" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -right-48 top-10" data-aos="fade-left" data-aos-delay="300">
            <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
              Check today's prices
            </div>
          </div>
        </div>

        <div className="absolute left-[28%] top-[55%] space-y-3" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
            Thanks, saved me money!
          </div>
          <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
            Smart shopping for u
          </div>
        </div>

        <div className="absolute right-[15%] top-[30%] flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="w-64 h-64 rounded-full overflow-hidden" style={{ backgroundColor: 'hsl(180, 70%, 55%)' }}>
            <img src={marketBuyer2} alt="Nigerian woman buying at market" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-delay="500">
            <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
              Find the best deals
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
          <div className="w-44 h-44 rounded-full bg-awadoc-purple overflow-hidden">
            <img src={marketTrader2} alt="Nigerian market professional" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-background shadow-sm border border-border rounded-xl px-5 py-3 text-sm text-foreground">
              Compare market prices
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStoriesSection;
