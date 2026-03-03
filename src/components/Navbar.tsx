import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-sans text-foreground">Mudu</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About us</a>
            <a href="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <a href="#blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact us</a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="/about" className="block text-sm font-medium text-muted-foreground hover:text-foreground">About us</a>
            <a href="/faq" className="block text-sm font-medium text-muted-foreground hover:text-foreground">FAQ</a>
            <a href="#blog" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Blog</a>
            <a href="#contact" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Contact us</a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 w-full">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
