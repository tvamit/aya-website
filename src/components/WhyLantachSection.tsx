import { Shield, Zap, Heart, Building, Target } from "lucide-react";

const differentiators = [
  { 
    icon: Shield, 
    title: "Privacy-First AI Architecture", 
    desc: "Your data stays yours. No third-party sharing, ever." 
  },
  { 
    icon: Zap, 
    title: "Lightning-Fast Voice Responses", 
    desc: "Sub-second latency for natural conversations." 
  },
  { 
    icon: Heart, 
    title: "Human-Centered Design", 
    desc: "Built around how people actually communicate." 
  },
  { 
    icon: Building, 
    title: "Scalable for Enterprise & Startups", 
    desc: "From 10 users to 10 million — Aya grows with you." 
  },
  { 
    icon: Target, 
    title: "Built for Real-World Usage", 
    desc: "Production-ready, not just a demo." 
  },
];

const WhyLantachSection = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why <span className="text-gradient">LanTach</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What sets us apart from other AI assistants
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {differentiators.map((item, index) => (
            <div 
              key={item.title}
              className="group flex items-center gap-5 p-5 rounded-2xl bg-background/50 border border-border/30 hover:border-primary/40 hover:bg-background/80 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLantachSection;
