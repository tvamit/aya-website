import { Mic, Brain, Shield, Zap, Globe, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Natural Voice Interface",
    description: "Speak naturally and be understood. Advanced speech recognition adapts to your voice and accent.",
  },
  {
    icon: Brain,
    title: "Intelligent Understanding",
    description: "Contextual awareness that remembers conversations and learns from interactions.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-50ms response times ensure conversations feel natural and uninterrupted.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays yours. End-to-end encryption and zero data retention policies.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate in over 40 languages with real-time translation capabilities.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Centered",
    description: "Designed with empathy and accessibility at its core for inclusive experiences.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-muted-foreground">Capabilities</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for the Future of
            <span className="text-gradient"> Voice AI</span>
          </h2>
          
          <p className="text-muted-foreground">
            Powerful features designed to make voice interactions feel magical, 
            intuitive, and secure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
