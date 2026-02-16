import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About <span className="text-accent">TTM Painting</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Young, passionate, and committed to transforming homes with exceptional quality and service
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Heart className="h-8 w-8 text-accent mr-3" />
                  <h2 className="text-3xl font-bold text-primary">Our Story</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    Hi, I'm <strong className="text-primary">Tate Downs</strong>, and this is the story of how TTM Painting came to life.
                  </p>
                  
                  <p>
                    Since March 2025, I worked for a large corporate painting company where I learned the ins and outs of professional painting. During that time, I had the opportunity to hire two incredible friends who would become my business partners: <strong className="text-primary">Troylee Mager</strong> and <strong className="text-primary">Matthew Buckley</strong>.
                  </p>
                  
                  <p>
                    Together, we spent that summer doing what we love most - transforming homes in our community. Every project was an opportunity to prove ourselves, and we consistently delivered exceptional results that exceeded our clients' expectations. The satisfaction of seeing a homeowner's face light up when they saw their newly painted home was what drove us every single day.
                  </p>
                  
                  <p>
                    By July 2025, we realized we had something special. The trust we'd built with our clients, the quality of our work, and the passion we shared for the craft made it clear that it was time to take the leap. That's when we decided to go out on our own and start TTM Painting.
                  </p>
                  
                  <p>
                    We may be new to running our own business, and yes, we're young - but that's exactly what makes us different. We're hungry to prove ourselves, we're not set in old ways, and we bring fresh energy and modern techniques to every project. Our youth means we're willing to go the extra mile, stay up-to-date with the latest trends and technologies, and treat every job like it's the most important one we've ever done.
                  </p>
                  
                  <p>
                    At TTM Painting, we're not just painting walls - we're building relationships, creating beautiful spaces, and proving that high-quality work comes from passion, dedication, and a genuine care for our community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">What Drives Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Homeowner Focused</h3>
                <p className="text-muted-foreground">
                  Your home is one of your most important investments. We approach every project with the same care and attention we'd want for our own homes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Quality Promise</h3>
                <p className="text-muted-foreground">
                  Every brush stroke is backed by our commitment to excellence and our 1-3 year warranty.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Fresh Energy</h3>
                <p className="text-muted-foreground">
                  Our youth brings enthusiasm, modern techniques, and a willingness to exceed expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us prove ourselves with your next painting project. We're excited to show you what our team can do.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/get-estimate">Get Your Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}