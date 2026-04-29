import Header from "./components/Header";
import UrgencyBanner from "./components/UrgencyBanner";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ReformSection from "./components/ReformSection";
import PainsSection from "./components/PainsSection";
import ServicesSection from "./components/ServicesSection";
import SimulatorSection from "./components/SimulatorSection";
import DiffsSection from "./components/DiffsSection";
import SocialProofSection from "./components/SocialProofSection";
import SEOSection from "./components/SEOSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function Home() {
  return (
    <main className="min-h-screen">
      <UrgencyBanner />
      <Header />
      <HeroSection />
      <StatsSection />
      <ReformSection />
      <PainsSection />
      <ServicesSection />
      <SimulatorSection />
      <DiffsSection />
      <SocialProofSection />
      <SEOSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
