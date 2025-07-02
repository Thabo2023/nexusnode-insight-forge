import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full animate-tech-grid"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Modern Geometric Logo */}
          <div className="mb-12 animate-scale-in">
            <div className="flex items-center justify-center mb-6">
              <div className="relative group">
                {/* Animated Logo Icon */}
                <div className="w-32 h-32 md:w-40 md:h-40 relative animate-glow-pulse">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
                  <div className="absolute inset-2 bg-gradient-accent rounded-xl -rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-4 bg-background rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-tech rounded-lg flex items-center justify-center">
                      <div className="text-primary-foreground font-bold text-2xl md:text-3xl">N</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-tech bg-clip-text text-transparent tracking-tight animate-slide-up">
              NEXUSNODE
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground mt-3 tracking-widest animate-fade-in" style={{ animationDelay: '0.3s' }}>
              DATA ANALYTICS & INSIGHTS
            </div>
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
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
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
    </section>
  );
};

export default Hero;