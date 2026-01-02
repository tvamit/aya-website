import { 
  Hospital, 
  Hotel, 
  ShoppingBag, 
  Plane, 
  Building2, 
  GraduationCap, 
  Landmark, 
  Car 
} from "lucide-react";

const sectors = [
  { icon: Hospital, name: "Healthcare", desc: "Hospitals & Clinics" },
  { icon: Hotel, name: "Hospitality", desc: "Hotels & Resorts" },
  { icon: ShoppingBag, name: "Retail", desc: "Stores & E-commerce" },
  { icon: Plane, name: "Travel", desc: "Airlines & Tourism" },
  { icon: Building2, name: "Corporate", desc: "Offices & Enterprise" },
  { icon: GraduationCap, name: "Education", desc: "Schools & Universities" },
  { icon: Landmark, name: "Banking", desc: "Finance & Insurance" },
  { icon: Car, name: "Automotive", desc: "Dealerships & Services" },
];

const SectorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aya adapts to any sector, providing intelligent voice guidance tailored to your industry
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {sectors.map((sector, index) => (
            <div 
              key={sector.name}
              className="group flex flex-col items-center p-4 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <sector.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-sm text-foreground text-center">
                {sector.name}
              </h3>
              <p className="text-xs text-muted-foreground text-center mt-1">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
