import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chinedu M.",
    city: "Abuja, Nigeria",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    text: "Before using Mudu, I was confused about market prices. I often received conflicting info. With Mudu's guidance, I finally understood how to manage my food budget properly.",
  },
  {
    name: "Aisha O.",
    city: "Lagos, Nigeria",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
    text: "This service was a game-changer for my business. I was experiencing high food costs and wasn't sure what to buy. The advice I received was quick and accurate.",
  },
  {
    name: "Tolu A.",
    city: "Ibadan, Nigeria",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    text: "I used to rely on random online searches for market info, but it led to confusion. Now, with Mudu, I get reliable, expert-backed advice instantly.",
  },
  {
    name: "Emeka O.",
    city: "Port Harcourt, Nigeria",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    text: "Mudu helped me find the best prices for bulk rice. I saved over 30% on my monthly shopping. The WhatsApp interface makes it incredibly easy to use.",
  },
  {
    name: "Amina B.",
    city: "Kano, Nigeria",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    text: "As a small trader, Mudu connected me with wholesalers I never knew existed. My profit margins have improved significantly since I started using it.",
  },
  {
    name: "Kunle D.",
    city: "Enugu, Nigeria",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    text: "I recommend Mudu to every family I know. It's like having a market expert in your pocket—available 24/7, rain or shine.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground text-center mb-12">
          Read what the customers are saying about us.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-awadoc-yellow text-awadoc-yellow" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
