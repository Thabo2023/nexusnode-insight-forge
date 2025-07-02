import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import News from "@/components/News";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Partners />
        <Team />
        <News />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
