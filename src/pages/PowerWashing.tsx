import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Droplets, 
  Home, 
  Building, 
  Fence,
  AlertTriangle,
  Sparkles,
  PaintBucket
} from "lucide-react";

const surfaces = [
  {
    icon: Home,
    title: "Home Exteriors",
    description: "Remove dirt, mildew, and grime from siding before painting"
  },
  {
    icon: Fence,
    title: "Decks & Fences",
    description: "Prep wood surfaces for staining by removing old finishes and debris"
  },
  {
    icon: Building,
    title: "Driveways & Walkways",
    description: "Clean concrete and pavers as part of your exterior painting project"
  },
  {
    icon: Droplets,
    title: "Gutters & Trim",
    description: "Remove buildup and prepare surfaces for fresh paint application"
  }
];

const benefits = [
  {
    icon: Sparkles,
    title: "Better Paint Adhesion",
    description: "Clean surfaces allow paint to bond properly for a longer-lasting finish"
  },
  {
    icon: PaintBucket,
    title: "Professional Results",
    description: "Proper prep work is the foundation of every quality paint job"
  },
  {
    icon: CheckCircle,
    title: "Included With Painting",
    description: "Power washing is included as part of our exterior painting services"
  }
];

export default function PowerWashing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Add-On Service with Painting Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Power Washing Services
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional power washing included with our painting services to ensure 
              optimal surface preparation and long-lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/get-estimate">Get Your Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/exterior-painting">View Exterior Painting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Power Washing with Painting Services Only</h3>
                    <p className="text-muted-foreground">
                      We offer power washing as part of our comprehensive painting preparation process. 
                      This service is available when combined with exterior painting, deck staining, or 
                      fence staining projects. We do not offer standalone power washing services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Surfaces We Clean */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Surfaces We Power Wash</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              As part of your painting project, we'll thoroughly clean these surfaces to ensure the best possible results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {surfaces.map((surface, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth text-center">
                <CardContent className="p-6">
                  <surface.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{surface.title}</h3>
                  <p className="text-muted-foreground text-sm">{surface.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Power Washing Matters */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Power Washing Matters</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proper surface preparation is the key to a long-lasting, beautiful paint job.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-xl text-muted-foreground">
                When you book an exterior painting or staining project with us, power washing is part of the package.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Full Surface Cleaning</h4>
                  <p className="text-muted-foreground text-sm">Complete cleaning of all surfaces to be painted</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Mold & Mildew Removal</h4>
                  <p className="text-muted-foreground text-sm">Treatment for biological growth that affects paint adhesion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Proper Dry Time</h4>
                  <p className="text-muted-foreground text-sm">We allow adequate drying before paint application</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Adjusted Pressure Settings</h4>
                  <p className="text-muted-foreground text-sm">Different surfaces require different pressure levels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Eco-Friendly Solutions</h4>
                  <p className="text-muted-foreground text-sm">Safe cleaning agents that won't harm your landscaping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Request your free estimate for exterior painting or staining – power washing prep is included!
              </p>
              <Button size="lg" variant="accent" asChild>
                <Link to="/get-estimate">Get Your Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
