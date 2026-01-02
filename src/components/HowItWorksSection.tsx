import { Mic, Brain, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Mic,
    step: "1",
    title: "You Speak",
    desc: "Just talk naturally — Aya listens"
  },
  {
    icon: Brain,
    step: "2",
    title: "Aya Understands",
    desc: "AI processes your intent instantly"
  },
  {
    icon: MessageCircle,
    step: "3",
    title: "You Get Answers",
    desc: "Clear, helpful voice response"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">
          How <span className="text-gradient">Aya</span> Works
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 max-w-3xl mx-auto">
          {steps.map((item, index) => (
            <div key={item.step} className="flex items-center gap-4 sm:gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full" />
                  <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-[140px]">
                  {item.desc}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
