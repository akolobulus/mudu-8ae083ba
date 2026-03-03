import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "What is Mudu?", answer: 'Mudu is an AI-powered market intelligence tool that operates directly on WhatsApp. We help Nigerians avoid the "poverty tax" by providing real-time, verified food prices from major hubs like Mile 12 and other national markets.' },
  { question: "How do I get started with Mudu?", answer: "It's as simple as a conversation. Just save our official WhatsApp number and send a message or a voice note in English, Pidgin, or Yoruba to start checking prices." },
  { question: "What is your pricing model?", answer: "Mudu is built to be accessible to everyone. We offer a free tier for basic price checks, while advanced features like bulk-buying coordination and deep price analytics are available through affordable premium plans." },
  { question: "What kind of market issues can Mudu help with?", answer: 'Mudu helps you find the "True Price" of staples (like rice, beans, and tomatoes), discover the best stalls for value, and understand seasonal price trends so you know when to buy bulk.' },
  { question: "Can I upload photos or voice notes for assessment?", answer: "Yes! You can send voice notes in your local dialect describing what you want to buy, and our AI will transcribe it to give you a verified price map. You can also upload photos of items to verify quality and grade." },
  { question: "Is Mudu a replacement for my local trader?", answer: "No, Mudu is a bridge. We don't replace the trader; we provide you with the data you need to haggle fairly and connect you with verified sellers who offer the best value." },
  { question: "How accurate are the insights provided by Mudu?", answer: 'Our insights are powered by real-time data from "Market Ambassadors" on the ground. While prices can fluctuate slightly throughout the day, our AI-verified "True Price" range is the most accurate street-level data available.' },
  { question: "Is my data safe with Mudu?", answer: "Absolutely. We prioritize your privacy and ensure that your personal information and shopping habits are protected at every step." },
  { question: "What happens to my conversation history?", answer: "Your history is saved securely so you can track how prices have changed over time and keep a record of your favourite stalls. You have full control over your data and can request deletion at any time." },
  { question: "How do I upgrade to a paid plan?", answer: 'You can upgrade directly within the WhatsApp chat by typing "Upgrade". We support easy payments via Interswitch and other local gateways.' },
  { question: "Why should I choose Mudu as my Market Assistant?", answer: 'Mudu is the only assistant that understands the "street". It\'s 24/7, multilingual, and built specifically to save you money in the Nigerian informal economy.' },
  { question: 'How does Mudu handle "market emergencies" (scarcity or price spikes)?', answer: "During sudden price hikes or fuel strikes, Mudu sends out real-time alerts and suggests alternative markets or substitute products to ensure your family stays fed without breaking the bank." },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 pb-12 text-center max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Got questions? We've got answers! Explore our FAQs to learn more about how{" "}
          <span className="font-semibold text-foreground">Mudu</span> works and how it can help you master the market.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-24" data-aos="fade-up" data-aos-delay="100">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CTAFooter />
      <Footer />
    </div>
  );
};

export default FAQ;
