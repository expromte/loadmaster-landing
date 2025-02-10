
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Specifications } from "@/components/Specifications";
import { Process } from "@/components/Process";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Specifications />
      <Process />
      <ContactForm />
    </main>
  );
};

export default Index;
