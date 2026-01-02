import { Award } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-xl font-medium text-muted-foreground">
              Techvoot Hackathon 2026
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-border" />

          <div className="flex flex-col items-center gap-1">
            <span className="text-xl text-muted-foreground">
              Built with ❤️ by{" "}
              <span className="text-foreground font-medium">Team LanTach</span>
            </span>
            <span className="text-xl text-muted-foreground/70">
              Amit · Nitin · Zeel · Nikunj
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
