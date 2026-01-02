import lantachLogo from "@/assets/lantach-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Brand with glow */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse-glow" />
              <img 
                src={lantachLogo} 
                alt="LanTach Logo" 
                className="h-10 w-auto relative z-10"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-foreground">
                LanTach
              </span>
              <p className="text-sm text-muted-foreground">
                Guiding users through voice
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LanTach. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            LanTach — guiding users through voice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
