import { Headphones, AlertTriangle, Calendar, Navigation } from "lucide-react";

const useCases = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 voice assistance for seamless customer experiences"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Assistance",
    description: "Quick response guidance in critical situations"
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Effortless scheduling through natural conversation"
  },
  {
    icon: Navigation,
    title: "Smart Navigation",
    description: "Intuitive voice-guided directions and wayfinding"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Where <span className="text-gradient">Aya</span> Helps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications powered by intelligent voice interaction
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.title}
              className="group relative bg-card/50 border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 hover:bg-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
