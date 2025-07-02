const Partners = () => {
  const partners = [
    { name: "TechCorp Solutions", industry: "Technology" },
    { name: "RetailMax", industry: "Retail" },
    { name: "FinanceFirst", industry: "Financial Services" },
    { name: "HealthcarePlus", industry: "Healthcare" },
    { name: "ManufactureCore", industry: "Manufacturing" },
    { name: "EduTech Institute", industry: "Education" }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted <span className="bg-gradient-accent bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've partnered with industry leaders across various sectors to deliver 
            exceptional data-driven solutions and insights.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="group text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-subtle rounded-lg flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-tech">
                <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  {partner.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {partner.industry}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold">Strategic Collaboration</h3>
            <p className="text-muted-foreground">
              Deep partnerships that go beyond traditional vendor relationships.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-semibold">Innovation Focus</h3>
            <p className="text-muted-foreground">
              Collaborative innovation to solve complex business challenges.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold">Mutual Growth</h3>
            <p className="text-muted-foreground">
              Partnerships that drive growth and success for all stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;