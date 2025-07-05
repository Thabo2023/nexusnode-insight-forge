import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [];

  const benefits = [
    {
      icon: "💼",
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision coverage"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous learning opportunities and conference attendance"
    },
    {
      icon: "🏖️",
      title: "Flexible Time Off",
      description: "Generous vacation policy and flexible working arrangements"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear career progression paths and mentorship programs"
    },
    {
      icon: "💻",
      title: "Tech & Tools",
      description: "Latest technology and professional development tools"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="bg-gradient-tech bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your career with Nexusnode and be part of a team that's shaping 
            the future of data analytics and market research.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Open Positions</h3>
          <div className="text-center py-16">
            <div className="bg-muted/30 rounded-2xl p-12 border border-border/50 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-muted-foreground">No Open Positions</h4>
              <p className="text-muted-foreground">
                We currently have no open positions available. Please check back later for future opportunities.
              </p>
            </div>
          </div>
        </div>


        {/* Contact for opportunities */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Don't See the Right Position?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always interested in connecting with talented individuals. 
              Send us your resume and let's discuss future opportunities.
            </p>
            <Button variant="outline" size="lg">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;