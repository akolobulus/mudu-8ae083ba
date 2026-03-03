import { MessageCircle, Facebook, Youtube, Twitter, Linkedin, Instagram, Mic } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl text-foreground" style={{ fontWeight: 800 }}>Mudu</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Smart shopping for u — simplifying access to real-time market prices using AI on WhatsApp.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Mic className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Price Checker</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Market Intelligence</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About us</a></li>
              <li><a href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Security</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Reach us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Reach us</h4>
            <ul className="space-y-4">
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact us</a></li>
              <li>
                <p className="text-sm font-semibold text-foreground">E-mail:</p>
                <a href="mailto:officialarikpa@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">officialarikpa@gmail.com</a>
              </li>
              <li>
                <p className="text-sm font-semibold text-foreground">Address:</p>
                <p className="text-sm text-muted-foreground">No 6, Freetown Road, Apapa, Lagos - Nigeria.</p>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">8 The Green. Ste A. Dover, Delaware 19901 - USA.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">©2026 Mudu. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
