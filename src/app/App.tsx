import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { FloatingParticles } from "./components/FloatingParticles";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white min-h-screen overflow-x-hidden relative transition-colors duration-500" style={{ scrollBehavior: "smooth" }}>
        <AnimatedBackground />
        <FloatingParticles />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}