import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Data Scientist",
      department: "Analytics",
      location: "Nigel, Gauteng",
      type: "Full-time",
      description: "Lead advanced analytics projects and mentor junior team members in machine learning and statistical modeling.",
      requirements: [
        "PhD or Master's in Data Science, Statistics, or related field",
        "5+ years experience in data science",
        "Strong Python/R programming skills",
        "Experience with ML frameworks"
      ]
    },
    {
      title: "Market Research Analyst",
      department: "Research",
      location: "Nigel, Gauteng",
      type: "Full-time",
      description: "Conduct comprehensive market research and provide strategic insights to help clients understand market dynamics.",
      requirements: [
        "Bachelor's degree in Marketing, Economics, or Business",
        "3+ years market research experience",
        "Strong analytical and presentation skills",
        "Experience with survey design and analysis"
      ]
    },
    {
      title: "Business Intelligence Developer",
      department: "Technology",
      location: "Nigel, Gauteng",
      type: "Full-time",
      description: "Design and develop BI solutions, dashboards, and reporting systems to deliver actionable insights.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Experience with BI tools (Power BI, Tableau)",
        "SQL and database management skills",
        "Knowledge of data warehousing concepts"
      ]
    }
  ];

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
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card 
                key={position.title}
                className="group hover:shadow-glow transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{position.location}</span>
                        <span>{position.department}</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button variant="hero" className="lg:w-auto w-full">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Why Work With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center space-y-4 p-6 rounded-lg bg-card/50 border border-border/50 hover:shadow-tech transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
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