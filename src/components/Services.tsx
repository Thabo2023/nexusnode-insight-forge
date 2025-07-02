import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with our advanced analytics tools and methodologies. We help you uncover patterns, trends, and opportunities hidden in your data.",
      features: [
        "Statistical Analysis",
        "Data Visualization",
        "Pattern Recognition",
        "Performance Metrics"
      ],
      icon: "analytics"
    },
    {
      title: "Market Research",
      description: "Gain competitive advantage through comprehensive market analysis and consumer behavior insights. Our research methodologies provide deep understanding of market dynamics.",
      features: [
        "Market Sizing",
        "Competitor Analysis",
        "Consumer Insights",
        "Trend Forecasting"
      ],
      icon: "target"
    },
    {
      title: "Predictive Modeling",
      description: "Leverage machine learning and AI to predict future trends and outcomes. Our models help you make proactive decisions and stay ahead of the competition.",
      features: [
        "Forecasting Models",
        "Risk Assessment",
        "Demand Planning",
        "Scenario Analysis"
      ],
      icon: "prediction"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)`
        }}></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-tech bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in turning complex data into clear, actionable insights 
            that drive business growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-8 h-8 bg-primary-foreground rounded opacity-80"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="premium" className="w-full group-hover:shadow-elegant">
                  Explore Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;