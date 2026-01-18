import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-lg font-bold text-primary glow-text hover:opacity-80 transition-opacity"
          >
            &lt;YG /&gt;
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Yashwanth G. Built with
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
