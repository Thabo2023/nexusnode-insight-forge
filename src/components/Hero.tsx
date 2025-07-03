import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full animate-tech-grid" style={{
        backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
        backgroundSize: '50px 50px'
      }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{
      animationDelay: '1s'
    }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-glow/30 rounded-full animate-float" style={{
      animationDelay: '2s'
    }} />

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Large Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/b410b5d7-b6b7-484c-ba33-cf086ec5c70a.png" 
              alt="Nexusnode Logo" 
              className="h-32 md:h-40 w-auto mx-auto object-scale-down"
            />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Transform{" "}
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Data
            </span>{" "}
            Into{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Strategic Insights
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up max-w-2xl mx-auto" style={{
          animationDelay: '0.4s'
        }}>
            Transform raw data into strategic insights with precision-driven analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Analytics Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              View Case Studies
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2024</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-glow mb-2">∞</div>
              <div className="text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;