import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyLantachSection from "@/components/WhyLantachSection";
import UseCasesSection from "@/components/UseCasesSection";
import ConnectorSection from "@/components/ConnectorSection";
import SectorsSection from "@/components/SectorsSection";
import TrustSection from "@/components/TrustSection";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* 1. Who is it? */}
        <HeroSection />
        <SectionDivider />
        {/* 2. How does it work? */}
        <HowItWorksSection />
        <SectionDivider />
        {/* 3. What does it do? */}
        <FeaturesSection />
        <SectionDivider />
        {/* 4. Why should I trust it? */}
        <WhyLantachSection />
        <SectionDivider />
        {/* 5. Where is it used? */}
        <UseCasesSection />
        <ConnectorSection />
        {/* 6. Who is it for? */}
        <SectorsSection />
        <SectionDivider />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
