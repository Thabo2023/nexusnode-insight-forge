import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{
      animationDelay: '1s'
    }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-glow/30 rounded-full animate-float" style={{
      animationDelay: '2s'
    }} />

      {/* Background Video with Fallback */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
          onError={() => console.log("Video failed to load")}
          onLoadStart={() => console.log("Video started loading")}
          onCanPlay={() => console.log("Video can play")}
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback background when video doesn't load */}
        <div className="absolute inset-0 bg-gradient-tech opacity-80"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up text-white">
            Transform Data Into{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Strategic Insights
            </span>
          </h2>
          
          

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Link to="/service-request">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Your Analytics Journey
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              
              
            </div>
            <div className="text-center">
              
              
            </div>
            <div className="text-center">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;