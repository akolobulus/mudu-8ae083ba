import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

const testimonials = [
  { name: "Chinedu M.", city: "Abuja, Nigeria", avatar: testimonial2, text: "Before using Mudu, I was confused about market prices. I often received conflicting info. With Mudu's guidance, I finally understood how to manage my food budget properly." },
  { name: "Aisha O.", city: "Lagos, Nigeria", avatar: testimonial1, text: "This service was a game-changer for my business. I was experiencing high food costs and wasn't sure what to buy. The advice I received was quick and accurate." },
  { name: "Tolu A.", city: "Ibadan, Nigeria", avatar: testimonial3, text: "I used to rely on random online searches for market info, but it led to confusion. Now, with Mudu, I get reliable, expert-backed advice instantly." },
  { name: "Emeka O.", city: "Port Harcourt, Nigeria", avatar: testimonial4, text: "Mudu helped me find the best prices for bulk rice. I saved over 30% on my monthly shopping. The WhatsApp interface makes it incredibly easy to use." },
  { name: "Amina B.", city: "Kano, Nigeria", avatar: testimonial5, text: "As a small trader, Mudu connected me with wholesalers I never knew existed. My profit margins have improved significantly since I started using it." },
  { name: "Kunle D.", city: "Enugu, Nigeria", avatar: testimonial6, text: "I recommend Mudu to every family I know. It's like having a market expert in your pocket—available 24/7, rain or shine." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 md:mb-12" data-aos="fade-up">
          Read what the customers are saying about us.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-awadoc-yellow text-awadoc-yellow" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
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
