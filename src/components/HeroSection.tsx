import { Button } from "@/components/ui/button";
import ayaCharacter from "@/assets/aya-character.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Voice-Powered AI Assistant
              </span>
            </div>

            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Meet{" "}
              <span className="text-gradient drop-shadow-[0_0_20px_hsl(156_52%_66%/0.6)]">
                Aya
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground">
                Your Intelligent Voice Guide
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              A voice-powered AI that guides users with clarity and trust.
              Experience seamless conversations with advanced natural language
              understanding.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button variant="hero" size="xl">
                Start Conversation
              </Button>
              <Button variant="heroOutline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">
                  50ms
                </div>
                <div className="text-sm text-muted-foreground">
                  Response Time
                </div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-foreground">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Availability
                </div>
              </div>
            </div>
          </div>

          {/* Right - Aya Character */}
          <div
            className="relative flex justify-center lg:justify-end opacity-0 animate-fade-in-right"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              {/* Glow behind character */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />

              {/* Breathing lantern glow on chest */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary/40 animate-breathe" />

              {/* Eye glow pulse */}
              <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-24 h-8 rounded-full bg-primary/30 animate-eye-pulse" />

              <img
                src={ayaCharacter}
                alt="Aya - LanTach AI Assistant"
                className="relative z-10 w-full max-w-2xl translate-y-6 animate-float [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] "
              />

              {/* Voice wave indicator */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary rounded-full animate-wave"
                    style={{
                      height: `${20 + Math.random() * 20}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
