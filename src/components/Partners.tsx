import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Partners = () => {
  const partners = [{
    name: "TechCorp Solutions",
    industry: "Technology",
    logo: "TC",
    color: "bg-gradient-primary"
  }, {
    name: "RetailMax",
    industry: "Retail",
    logo: "RM",
    color: "bg-gradient-accent"
  }, {
    name: "FinanceFirst",
    industry: "Financial Services",
    logo: "FF",
    color: "bg-gradient-tech"
  }, {
    name: "HealthcarePlus",
    industry: "Healthcare",
    logo: "HP",
    color: "bg-gradient-primary"
  }, {
    name: "ManufactureCore",
    industry: "Manufacturing",
    logo: "MC",
    color: "bg-gradient-accent"
  }, {
    name: "EduTech Institute",
    industry: "Education",
    logo: "EI",
    color: "bg-gradient-tech"
  }, {
    name: "DataFlow Systems",
    industry: "Technology",
    logo: "DS",
    color: "bg-gradient-primary"
  }, {
    name: "Analytics Pro",
    industry: "Consulting",
    logo: "AP",
    color: "bg-gradient-accent"
  }];
  return <section id="partners" className="py-20 bg-background">
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

        <Carousel className="w-full max-w-6xl mx-auto" opts={{
        align: "start",
        loop: true
      }}>
          <CarouselContent className="-ml-4">
            {partners.map((partner, index) => <CarouselItem key={partner.name} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="group text-center space-y-4 animate-fade-in p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-tech hover:scale-105">
                  <div className="aspect-square bg-gradient-subtle rounded-xl flex items-center justify-center border border-border/30 group-hover:border-primary/40 transition-all duration-300">
                    <div className={`w-16 h-16 ${partner.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <span className="text-primary-foreground font-bold text-xl">
                        {partner.logo}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {partner.industry}
                    </p>
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

      </div>
    </section>;
};
export default Partners;