import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ctaAvatar1 from "@/assets/cta-avatar-1.jpg";
import ctaAvatar2 from "@/assets/cta-avatar-2.jpg";
import ctaAvatar3 from "@/assets/cta-avatar-3.jpg";
import ctaAvatar4 from "@/assets/cta-avatar-4.jpg";
import ctaAvatar5 from "@/assets/cta-avatar-5.jpg";
import ctaAvatar6 from "@/assets/cta-avatar-6.jpg";

const avatars = [
  { src: ctaAvatar1, pos: "top-8 left-[10%]" },
  { src: ctaAvatar2, pos: "top-12 right-[15%]" },
  { src: ctaAvatar3, pos: "bottom-16 left-[20%]" },
  { src: ctaAvatar4, pos: "top-20 left-[30%]" },
  { src: ctaAvatar5, pos: "bottom-20 right-[25%]" },
  { src: ctaAvatar6, pos: "top-16 right-[35%]" },
];

const CTAFooter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Endless bounce animation for each avatar with staggered timing
      document.querySelectorAll(".cta-avatar").forEach((el, i) => {
        gsap.to(el, {
          y: -18,
          duration: 1.2 + i * 0.15,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-awadoc-teal py-20 md:py-32 px-4 overflow-hidden">
      {avatars.map((av, i) => (
        <img
          key={i}
          src={av.src}
          alt="User"
          className={`cta-avatar absolute ${av.pos} w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary-foreground/30 opacity-60 hidden md:block`}
        />
      ))}

      <div className="max-w-3xl mx-auto text-center relative z-10" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
          Accessing fair food prices shouldn't be hard. Together, we can make it easy
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-base md:text-lg leading-relaxed">
          Don't wait for answers—get instant, AI-powered insights and connect with verified traders.
        </p>
        <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-semibold">
          Talk to Mudu now
        </Button>
      </div>
    </section>
  );
};

export default CTAFooter;
