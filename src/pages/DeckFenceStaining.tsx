import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trees, 
  Shield, 
  Droplets, 
  CheckCircle,
  Clock,
  Brush,
  Palette,
  Sun
} from "lucide-react";

const services = [
  {
    title: "Deck Staining",
    description: "Protect and beautify your outdoor deck with premium stains",
    features: ["Weather protection", "UV resistance", "Anti-slip coatings", "Color enhancement"]
  },
  {
    title: "Fence Staining",
    description: "Extend the life of your fence with professional staining",
    features: ["Wood preservation", "Weather sealing", "Color matching", "Long-lasting finish"]
  },
  {
    title: "Gazebo & Pergola",
    description: "Complete outdoor structure staining and protection",
    features: ["Custom color options", "Premium stains", "Detail work", "Multi-year warranty"]
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Weather Protection",
    description: "Protect your wood from rain, snow, and UV damage with high-quality stains."
  },
  {
    icon: Droplets,
    title: "Water Resistance",
    description: "Our stains create a barrier that prevents water penetration and rot."
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "Prevent fading and sun damage with UV-resistant stain formulations."
  },
  {
    icon: Clock,
    title: "Long-Lasting",
    description: "Quality stains that maintain their beauty for years with proper maintenance."
  }
];

export default function DeckFenceStaining() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Deck & Fence Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Professional Deck & Fence Staining
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Protect and enhance your outdoor wood structures with our premium staining services. 
              Expert application with quality materials for lasting beauty and protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/get-estimate">Get Free Staining Estimate</Link>
              </Button>
              <Button size="lg" variant="outline-light" asChild>
                <a href="tel:6302779414">Call +1 (872) 666 8770</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Staining Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive wood staining solutions for all your outdoor structures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Professional Staining?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect your investment and maintain the beauty of your outdoor wood structures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Staining Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional preparation and application for superior results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Inspection & Prep</h3>
              <p className="text-muted-foreground text-sm">Clean and prepare surfaces, check for damage</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Surface Cleaning</h3>
              <p className="text-muted-foreground text-sm">Power wash and allow proper drying time</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Stain Application</h3>
              <p className="text-muted-foreground text-sm">Professional application with premium materials</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Final Inspection</h3>
              <p className="text-muted-foreground text-sm">Quality check and maintenance recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Deck & Fence?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get professional staining services that extend the life and beauty of your outdoor structures.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Get Free Staining Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}