import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      title: "Nexusnode Launches Advanced Predictive Analytics Platform",
      summary: "Our new AI-powered platform helps businesses forecast market trends with 95% accuracy.",
      date: "December 15, 2024",
      category: "Product Launch",
      readTime: "3 min read"
    },
    {
      title: "Partnership with Leading Tech Companies Expands Our Reach",
      summary: "Strategic partnerships enable us to serve more clients across diverse industries.",
      date: "November 28, 2024",
      category: "Partnership",
      readTime: "2 min read"
    },
    {
      title: "Data Privacy and Security: Our Commitment to Client Protection",
      summary: "Learn about our comprehensive approach to ensuring data security and privacy compliance.",
      date: "November 10, 2024",
      category: "Security",
      readTime: "4 min read"
    },
    {
      title: "Nexusnode Team Grows to Support Increasing Demand",
      summary: "We're expanding our team of data scientists and analysts to better serve our clients.",
      date: "October 22, 2024",
      category: "Company Growth",
      readTime: "2 min read"
    }
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="bg-gradient-accent bg-clip-text text-transparent">News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments, partnerships, and insights 
            from Nexusnode as we continue to innovate in the data analytics space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.title}
              className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground">
                    {item.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to receive the latest news, insights, 
              and updates from Nexusnode directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;