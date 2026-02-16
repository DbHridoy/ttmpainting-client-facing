import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Palette, 
  Shield, 
  CheckCircle,
  Clock,
  Sparkles,
  Brush,
  Droplets
} from "lucide-react";

const rooms = [
  { name: "Living Rooms", description: "Create welcoming spaces for family and friends" },
  { name: "Bedrooms", description: "Peaceful retreats with perfect color harmony" },
  { name: "Kitchens", description: "Durable finishes that withstand daily use" },
  { name: "Bathrooms", description: "Moisture-resistant paints for lasting beauty" },
  { name: "Dining Rooms", description: "Elegant spaces for memorable meals" },
  { name: "Home Offices", description: "Inspiring environments for productivity" }
];

const surfaces = [
  { name: "Walls", icon: Home },
  { name: "Ceilings", icon: Sparkles },
  { name: "Trim & Molding", icon: Brush },
  { name: "Doors & Windows", icon: Shield }
];

const features = [
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert advice on color selection and room coordination."
  },
  {
    icon: Droplets,
    title: "Low-VOC Paints",
    description: "Environmentally friendly options safe for your family."
  },
  {
    icon: Shield,
    title: "Surface Preparation",
    description: "Thorough prep work ensures smooth, lasting results."
  },
  {
    icon: CheckCircle,
    title: "Clean Work Practices",
    description: "We protect your furniture and clean up daily."
  }
];

export default function InteriorPainting() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Interior Painting Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Interior Spaces
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional interior painting services that bring your vision to life with 
              premium materials, expert craftsmanship, and attention to every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/get-estimate">Get Free Room Estimate</Link>
              </Button>
              <Button size="lg" variant="outline-light" asChild>
                <Link to="/get-estimate">Free Color Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms We Paint */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rooms We Paint</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From cozy bedrooms to busy kitchens, we bring professional quality to every room in your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-muted-foreground">{room.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Surfaces & Features */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Surfaces */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Surfaces We Paint</h2>
              <div className="grid grid-cols-2 gap-6">
                {surfaces.map((surface, index) => (
                  <div key={index} className="flex items-center p-4 bg-background rounded-lg shadow-soft">
                    <surface.icon className="h-8 w-8 text-accent mr-3" />
                    <span className="font-semibold">{surface.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8">What Sets Us Apart</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <feature.icon className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose TTM for Interior Painting?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Quality craftsmanship with Sherwin Williams paints, backed by our 1-3 year warranty.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Color Consultation</h3>
                <p className="text-muted-foreground text-sm">Professional guidance to choose the perfect colors for your space</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Materials</h3>
                <p className="text-muted-foreground text-sm">Exclusively Sherwin Williams paints for superior coverage and durability</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1-3 Year Warranty</h3>
                <p className="text-muted-foreground text-sm">Guaranteed quality and peace of mind with comprehensive warranty coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Beautiful Interior Spaces?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's transform your home's interior with professional painting that lasts.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Get Free Interior Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}