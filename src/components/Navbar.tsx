import lantachLogo from "@/assets/lantach-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={lantachLogo} 
              alt="LanTach Logo" 
              className="h-10 w-auto"
            />
            <span className="font-heading font-bold text-xl text-foreground">
              LanTach
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Features
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Demo
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="#demo" 
              className="hidden sm:inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
