import { Check, ShoppingBag, TrendingUp, Users } from "lucide-react";

const partnerTypes = [
  { label: "Household Shoppers", desc: "Reducing daily food costs for families" },
  { label: "Market Unions & Traders", desc: "Increasing digital visibility and sales for stall owners" },
  { label: "FMCG & Retailers", desc: "Providing street-level data for supply chains" },
  { label: "Agro-Logistics", desc: "Streamlining the movement of food from farm to market" },
];

const benefits = [
  {
    icon: Users,
    title: "Improve Buyer Access",
    borderColor: "border-t-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    points: [
      "Self-service price checks and digital triage via WhatsApp and SMS",
      "24/7 market support available without the need for human agents",
      "Accurate and easy location-based stall searching",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Optimize Market Capacity",
    borderColor: "border-t-awadoc-pink",
    iconBg: "bg-awadoc-pink/10",
    iconColor: "text-awadoc-pink",
    points: [
      "Deflect crowded market trips with self-service AI assistants",
      "Ensure buyers find the right stall types when searching online",
      "Improve trader resource utilization by routing buyers to the right stalls",
    ],
  },
  {
    icon: TrendingUp,
    title: "Enhance National Revenue",
    borderColor: "border-t-awadoc-yellow",
    iconBg: "bg-awadoc-yellow/10",
    iconColor: "text-awadoc-yellow",
    points: [
      "Route buyers to virtual or physical stalls to increase trader turnover",
      "Fill open supply gaps with high-demand food items based on real-time data",
      "Gain valuable analytics to drive national food supply strategy",
    ],
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground text-center mb-10">
          Who We Work With
        </h2>

        {/* Partner types */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {partnerTypes.map((type, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-sm font-medium text-foreground">{type.label}</span>
            </div>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-2xl p-6 border-t-4 ${benefit.borderColor}`}
            >
              <div className={`w-12 h-12 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold font-sans text-foreground mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.points.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
