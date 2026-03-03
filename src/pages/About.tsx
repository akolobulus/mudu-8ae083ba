import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { CheckCircle2 } from "lucide-react";
import aboutHero1 from "@/assets/about-hero-1.jpg";
import aboutHero2 from "@/assets/about-hero-2.jpg";
import aboutProblem from "@/assets/about-problem.jpg";
import aboutSolution from "@/assets/about-solution.jpg";
import aboutWhy from "@/assets/about-why.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 max-w-3xl" data-aos="fade-up">
            Simplifying Access To Transparent Market Intelligence
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl ml-auto mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            We empower lives by making food pricing accessible, immediate, and fair. Mudu bridges the gap between shoppers and the real "True Price" of the market, ensuring no family has to pay more for the food they deserve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={aboutHero1} alt="Nigerian market trader speaking" className="w-full h-[400px] object-cover rounded-2xl" data-aos="fade-right" data-aos-delay="200" />
            <img src={aboutHero2} alt="Nigerian woman using phone for market prices" className="w-full h-[400px] object-cover rounded-2xl" data-aos="fade-left" data-aos-delay="300" />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src={aboutProblem} alt="Person checking market prices on WhatsApp" className="w-full h-[500px] object-cover rounded-2xl" data-aos="fade-right" />
          <div data-aos="fade-left">
            <p className="text-primary font-semibold mb-4">The Problem</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">The Problem We're Solving</h2>
            <p className="text-muted-foreground leading-relaxed">
              Access to fair food prices shouldn't be a privilege; it should be a basic right. Yet, millions of Nigerians face a "poverty tax" caused by a lack of reliable market information. In regions like Ajegunle, shoppers often overpay by 30% simply because they don't know the wholesale rates at hubs like Mile 12. This gap leads to food insecurity, stretched budgets, and unnecessary financial stress for households and honest traders alike.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p className="text-primary font-semibold mb-4">The Solution</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">How We Solve These Problems</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mudu seamlessly integrates market expertise with technical innovation. Our AI-powered market assistant is designed to break information barriers, delivering instant pricing guidance through a simple chat. We use advanced AI to transcribe voice notes in Yoruba, Pidgin, and English, providing accurate price maps and critical market insights within seconds, directly on WhatsApp.
            </p>
          </div>
          <img src={aboutSolution} alt="Young Nigerian woman confident about market solutions" className="w-full h-[500px] object-cover rounded-2xl" data-aos="fade-left" />
        </div>
      </section>

      {/* Transforming Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12" data-aos="fade-up">
            Mudu Is Transforming Market Access By:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Reducing "Buying Blind."', desc: "Instant price checks mean no more guessing at the stall." },
              { title: "Providing Accurate Market Data:", desc: "AI-verified pricing for precise bargaining." },
              { title: "Bridging the Gap for Underserved Communities:", desc: "Accessible in high-density areas like Ajegunle, anytime, anywhere." },
              { title: "Protecting Trader & Buyer Integrity:", desc: "Verified data that builds trust and credit history for the informal sector." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-8" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">
                    <span className="font-bold">{item.title}</span> {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Mudu */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10">Why Choose Mudu?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Immediate, reliable market support.",
                "24/7 availability.",
                "Personalized, AI-driven responses.",
                "Privacy and confidentiality guaranteed.",
                "Accessible on WhatsApp.",
                "Market prices are complex, but getting a fair deal shouldn't be. With Mudu, it's as simple as a conversation.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={aboutWhy} alt="Nigerian student working on market intelligence" className="w-full h-[450px] object-cover rounded-2xl" data-aos="fade-left" />
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16" data-aos="fade-up">
            What Drives Us at Mudu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Accessibility", desc: "Fair prices should be within reach for everyone. We are making quality market data as simple as a text message." },
              { title: "Empowerment", desc: "We empower individuals to take control of their budgets by providing accurate, reliable, and personalized price insights." },
              { title: "Innovation", desc: "Born at the Nigerian University of Technology and Management (NUTM), we leverage the power of AI to create smarter, faster ways to navigate the informal economy." },
              { title: "Compassion", desc: "Behind every price check is a family's meal. We approach every interaction with a commitment to reducing the cost of living." },
              { title: "Impact", desc: "We are driven by the desire to make a meaningful difference, bringing transparency to underserved markets and transforming lives." },
              { title: "Integrity", desc: 'We are committed to honesty, transparency, and accuracy in every "True Price" we deliver.' },
            ].map((item, i) => (
              <div key={i} className="mb-4" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
      <Footer />
    </div>
  );
};

export default About;
