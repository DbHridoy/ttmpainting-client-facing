import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Shield, 
  CheckCircle,
  CloudRain,
  Sun,
  Droplets,
  Brush,
  Clock
} from "lucide-react";

const surfaces = [
  { name: "Wood Siding", description: "Cedar, pine, and composite materials" },
  { name: "Vinyl Siding", description: "Refresh and protect vinyl surfaces" },
  { name: "Brick & Masonry", description: "Breathable paints for masonry surfaces" },
  { name: "Stucco & Cement", description: "Specialized coatings for textured surfaces" },
  { name: "Trim & Shutters", description: "Detail work that makes a difference" },
  { name: "Doors & Windows", description: "Entry doors and window frames" }
];

const weatherProtection = [
  {
    icon: CloudRain,
    title: "Rain Resistance",
    description: "Advanced water-repelling technology protects against moisture damage."
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "Fade-resistant formulas maintain color vibrancy year after year."
  },
  {
    icon: Shield,
    title: "Weather Durability",
    description: "Withstands Illinois weather extremes from -20°F to 100°F."
  },
  {
    icon: Droplets,
    title: "Pressure Washing Prep",
    description: "Thorough cleaning ensures optimal paint adhesion and longevity."
  }
];

const process = [
  {
    step: "01",
    title: "Inspection & Assessment",
    description: "We examine all surfaces, identify problem areas, and plan the approach."
  },
  {
    step: "02", 
    title: "Light Pressure Wash",
    description: "A light pressure wash to remove dirt and mildew. We hand-whip any very built-up grime to avoid damaging the wood."
  },
  {
    step: "03",
    title: "Scraping & Sanding",
    description: "Hand scraping and sanding ensure smooth surfaces and lasting results."
  },
  {
    step: "04",
    title: "Priming & Painting",
    description: "Quality primer and two coats of premium exterior paint for maximum protection."
  }
];

export default function ExteriorPainting() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Exterior Painting Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Protect & Beautify Your Home's Exterior
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional exterior painting services using weather-resistant materials 
              designed to withstand Illinois weather and protect your investment.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/get-estimate">Get Free Exterior Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Surfaces We Paint */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exterior Surfaces We Paint</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert painting services for all types of exterior materials and surfaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfaces.map((surface, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{surface.name}</h3>
                  <p className="text-muted-foreground">{surface.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Protection */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Illinois Weather</h2>
            <p className="text-xl text-muted-foreground">
              Our exterior painting systems are specifically designed to withstand the challenging Midwest climate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weatherProtection.map((protection, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-4">
                  <protection.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{protection.title}</h3>
                <p className="text-muted-foreground">{protection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Exterior Painting Process</h2>
            <p className="text-xl text-muted-foreground">
              Meticulous preparation and application ensure results that last for years.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl mr-6">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Planning */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Time for Exterior Painting</h2>
              <p className="text-xl text-muted-foreground">
                Planning your exterior painting project for optimal weather conditions in Illinois.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="h-6 w-6 text-accent mr-2" />
                    Ideal Painting Season
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5" />
                      <div>
                        <strong>Late Spring to Early Fall</strong> (May - September)
                        <p className="text-sm text-muted-foreground">Optimal temperature and humidity conditions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5" />
                      <div>
                        <strong>Temperature Range:</strong> 50°F - 85°F
                        <p className="text-sm text-muted-foreground">Perfect for paint curing and adhesion</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 text-accent mr-2" />
                    Project Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5" />
                      <div>
                        <strong>Average Home:</strong> 4-7 days
                        <p className="text-sm text-muted-foreground">Including prep work and two coats</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5" />
                      <div>
                        <strong>Weather Contingency:</strong> Built into schedule
                        <p className="text-sm text-muted-foreground">We don't paint in rain or extreme temperatures</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Home's Value
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Quality exterior painting is an investment in your home's protection and curb appeal.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Get Free Exterior Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}