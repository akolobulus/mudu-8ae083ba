import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type Tab = "enquiry" | "partnership";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<Tab>("enquiry");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 pb-12 text-center max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Get In Touch</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Have questions or need assistance? We're here to help. Whether you're looking for more information about Mudu, need support, or want to explore partnerships, reach out to us anytime.
        </p>
      </section>

      <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
        <div className="inline-flex rounded-full border border-border overflow-hidden">
          <button onClick={() => setActiveTab("enquiry")} className={`px-8 py-3 text-sm font-semibold transition-colors ${activeTab === "enquiry" ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-muted"}`}>Enquiry</button>
          <button onClick={() => setActiveTab("partnership")} className={`px-8 py-3 text-sm font-semibold transition-colors ${activeTab === "partnership" ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-muted"}`}>Partnership</button>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
          <div className="bg-foreground text-background rounded-2xl p-8 flex flex-col justify-between min-h-[500px]" data-aos="fade-right">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Send Direct Email</p>
              <p className="text-lg font-semibold mb-12">officialarikpa@gmail.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Call Us</p>
              <p className="text-lg font-semibold mb-12">+234 07042001836</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {activeTab === "partnership" ? "Email for Partnership or Demo" : "Address"}
              </p>
              <p className="text-lg font-semibold">
                {activeTab === "partnership" ? "officialarikpa@gmail.com" : "No 6, Freetown Road, Apapa, Lagos, Nigeria"}
              </p>
            </div>
          </div>

          <div className="border border-border rounded-2xl p-8" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                  <Input required placeholder="Enter your first name" maxLength={100} className="rounded-lg border-border" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                  <Input required placeholder="Enter your last name" maxLength={100} className="rounded-lg border-border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                <Input required type="email" placeholder="Enter your email address" maxLength={255} className="rounded-lg border-border" />
              </div>
              {activeTab === "enquiry" ? (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number (Optional)</label>
                    <Input type="tel" placeholder="xxx-xxx-xxxx" maxLength={20} className="rounded-lg border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Personal message *</label>
                    <Textarea required placeholder="Type your message here" maxLength={1000} rows={4} className="rounded-lg border-border resize-none" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Job title *</label>
                    <Input required placeholder="Enter your job title" maxLength={100} className="rounded-lg border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company name *</label>
                    <Input required placeholder="Enter your company name" maxLength={100} className="rounded-lg border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                    <Textarea required placeholder="Tell us about your partnership interest" maxLength={1000} rows={4} className="rounded-lg border-border resize-none" />
                  </div>
                </>
              )}
              <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <CTAFooter />
      <Footer />
    </div>
  );
};

export default Contact;
