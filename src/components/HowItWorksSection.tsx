import { Button } from "@/components/ui/button";
import { MessageSquare, ClipboardList, Brain, UserCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Start a Chat",
    description: "Begin a conversation with Mudu on WhatsApp and get instant access to reliable market data across Nigeria.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: ClipboardList,
    title: "Describe the Need",
    description: "Share your food concerns—type a text or send a voice note. Mudu will analyze it to understand exactly what you're looking for.",
    bgColor: "bg-awadoc-purple/10",
    iconColor: "text-awadoc-purple",
  },
  {
    icon: Brain,
    title: "Get AI-Powered Guidance",
    description: "Receive expert-backed price data, tailored recommendations, and clear next steps for your shopping.",
    bgColor: "bg-awadoc-orange/10",
    iconColor: "text-awadoc-orange",
  },
  {
    icon: UserCheck,
    title: "Connect with Professionals",
    description: "When needed, Mudu refers you to trusted wholesalers, verified farmers, or logistics partners for bulk delivery.",
    bgColor: "bg-awadoc-blue/10",
    iconColor: "text-awadoc-blue",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              How Does It Work?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mudu is designed for the streets. Whether you speak Yoruba, Hausa, Igbo, or Pidgin, our AI understands your market needs instantly.
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 self-start md:self-auto">
            Talk to Mudu now
          </Button>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center mb-5`}>
                <step.icon className={`w-6 h-6 ${step.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold font-sans text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
