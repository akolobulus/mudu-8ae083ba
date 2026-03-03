import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    city: "Lagos, Nigeria",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
    text: "AwaDoc has been a lifesaver! I was able to get health guidance at 2am when my child had a fever. The AI provided clear steps and connected me to a nearby pharmacy.",
  },
  {
    name: "Chidi Nnamdi",
    city: "Abuja, Nigeria",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    text: "As someone in a rural area, accessing healthcare used to be a journey. AwaDoc brings the doctor to my phone. The WhatsApp interface makes it so easy to use.",
  },
  {
    name: "Funke Adeyemi",
    city: "Ibadan, Nigeria",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    text: "I love how AwaDoc explains things in simple terms. It helped me understand my symptoms and gave me peace of mind before my doctor's appointment.",
  },
  {
    name: "Emeka Obi",
    city: "Port Harcourt, Nigeria",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    text: "The speed of response is incredible. Within minutes I had a comprehensive breakdown of what my symptoms could mean and recommended next steps.",
  },
  {
    name: "Amina Ibrahim",
    city: "Kano, Nigeria",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    text: "AwaDoc connected me with a specialist when the AI detected my symptoms needed professional attention. The seamless referral system is amazing.",
  },
  {
    name: "Tunde Bakare",
    city: "Enugu, Nigeria",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    text: "I recommend AwaDoc to all my friends and family. It's like having a knowledgeable health companion available 24/7 right in your pocket.",
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
