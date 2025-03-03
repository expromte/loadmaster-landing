
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Specifications } from "@/components/Specifications";
import { Process } from "@/components/Process";
import { ContactForm } from "@/components/ContactForm";
import { CompletedProjects } from "@/components/CompletedProjects";
import { Pricing } from "@/components/Pricing";
import { FloatingButton } from "@/components/FloatingButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Specifications />
      <CompletedProjects />
      <Pricing />
      <Process />
      <ContactForm />
      <FloatingButton />
    </main>
  );
};

export default Index;
