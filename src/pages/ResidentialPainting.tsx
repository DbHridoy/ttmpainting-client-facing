import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Brush, 
  Palette, 
  Shield, 
  CheckCircle,
  Clock,
  Sparkles,
  Heart
} from "lucide-react";

const services = [
  {
    icon: Brush,
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with weather-resistant finishes.",
    features: ["Siding, trim & doors", "Pressure washing prep", "Weather protection", "Warranty included"],
    href: "/exterior-painting"
  },
  {
    icon: Home,
    title: "Interior Painting",
    description: "Transform your living spaces with premium paints and expert color consultation.",
    features: ["All rooms and surfaces", "Low-VOC paint options", "Color matching", "Trim & ceiling work"],
    href: "/interior-painting"
  },
  {
    icon: Palette,
    title: "Deck & Fence Staining",
    description: "Protect and beautify your outdoor wood structures with premium stains.",
    features: ["Weather protection", "UV resistance", "Water sealing", "Long-lasting finish"],
    href: "/deck-fence-staining"
  },
  {
    icon: Sparkles,
    title: "Power Washing",
    description: "Professional cleaning to prepare surfaces for painting or restore their original beauty.",
    features: ["House washing", "Driveway cleaning", "Deck preparation", "Pre-paint cleaning"],
    href: "/power-washing"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Clean Job Sites",
    description: "We protect your furniture and floors, and clean up daily throughout the project."
  },
  {
    icon: CheckCircle,
    title: "Quality Materials",
    description: "We exclusively use premium Sherwin-Williams paints for lasting results."
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect your schedule and complete projects on time, every time."
  },
  {
    icon: Heart,
    title: "Family-Friendly",
    description: "Safe, low-VOC paints and considerate work practices for homes with children and pets."
  }
];

export default function ResidentialPainting() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Residential Painting Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Home with Professional Painting
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              From single rooms to whole-home makeovers, we bring your vision to life with 
              exceptional craftsmanship and attention to detail.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/get-estimate">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Residential Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive painting solutions for every part of your home, inside and out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" asChild>
                    <Link to={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Homeowners Choose TTM Painting</h2>
            <p className="text-xl text-muted-foreground">
              We understand that your home is your sanctuary. That's why we go above and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Residential Painting Process</h2>
              <p className="text-xl text-muted-foreground">
                From consultation to completion, we ensure every step meets our high standards.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free In-Home Consultation</h3>
                  <p className="text-muted-foreground">
                    We visit your home to assess the project scope, discuss your vision, and provide color recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Preparation</h3>
                  <p className="text-muted-foreground">
                    We protect your belongings, patch holes, sand surfaces, and prime as needed for optimal paint adhesion.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Paint Application</h3>
                  <p className="text-muted-foreground">
                    Using premium brushes, rollers, and spray equipment, we apply your chosen paint with precision and care.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Inspection & Cleanup</h3>
                  <p className="text-muted-foreground">
                    We conduct a thorough walkthrough with you, touch up any areas, and leave your home spotless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Love Your Home Even More?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss your residential painting project and create a space you'll love coming home to.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Get Free Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}