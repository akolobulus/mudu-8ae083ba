import { Button } from "@/components/ui/button";

const avatars = [
  { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face", pos: "top-8 left-[10%]" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", pos: "top-12 right-[15%]" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", pos: "bottom-16 left-[20%]" },
  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", pos: "top-20 left-[30%]" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", pos: "bottom-20 right-[25%]" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", pos: "top-16 right-[35%]" },
];

const CTAFooter = () => {
  return (
    <section className="relative bg-awadoc-teal py-20 md:py-32 px-4 overflow-hidden">
      {/* Floating avatars */}
      {avatars.map((av, i) => (
        <img
          key={i}
          src={av.src}
          alt="User"
          className={`absolute ${av.pos} w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary-foreground/30 opacity-40 hidden md:block`}
        />
      ))}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-primary-foreground leading-tight mb-6">
          Accessing healthcare shouldn't be hard. Together, we can make it easy
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-base md:text-lg leading-relaxed">
          Get AI-powered healthcare insights delivered through WhatsApp. Join millions of Africans accessing quality health guidance anytime, anywhere.
        </p>
        <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-semibold">
          Talk to Awadoc now
        </Button>
      </div>
    </section>
  );
};

export default CTAFooter;
