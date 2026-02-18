import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Store,
  Warehouse,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Calendar
} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Retail & Restaurant",
    description: "Professional painting for storefronts, dining areas, and customer spaces",
    features: ["Storefront painting", "Interior dining areas", "Kitchen areas", "After-hours scheduling"]
  },
  {
    icon: Building,
    title: "Office Buildings",
    description: "Complete office painting services with minimal business disruption",
    features: ["Office spaces", "Conference rooms", "Lobbies & common areas", "Weekend availability"]
  },
  {
    icon: Warehouse,
    title: "Industrial & Warehouse",
    description: "Large-scale commercial painting for industrial facilities",
    features: ["Warehouse interiors", "Loading docks", "Industrial equipment", "Safety compliance"]
  },
  {
    icon: Users,
    title: "Multi-Unit Properties",
    description: "Apartment complexes, condos, and multi-family housing",
    features: ["Apartment interiors", "Common areas", "Exterior building painting", "Tenant coordination"]
  }
];

const advantages = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your business hours - evenings, weekends, and holidays available to minimize disruption."
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive commercial insurance coverage protects your business and property during all projects."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our crew has extensive experience with commercial projects and understands business needs."
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "Professional results with our 1-3 year warranty and commitment to customer satisfaction."
  }
];

export default function Commercial() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Commercial Painting Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Professional Commercial Painting
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Reliable commercial painting services for businesses throughout Illinois.
              From retail spaces to office buildings, we deliver quality results with minimal disruption to your operations.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/get-estimate">Get Commercial Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive painting solutions for every type of commercial property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-accent mr-3" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
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

      {/* Why Choose Us for Commercial */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Choose TTM</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand that your business can't afford delays or disruptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Service Area</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving businesses throughout a large region of Illinois with reliable, professional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Northern Illinois</h3>
                <p className="text-muted-foreground text-sm">Rock Island to Greater Chicago Area</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft border-accent">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Serving Greater Chicago Area</h3>
                <p className="text-muted-foreground text-sm">Convenient location for efficient service</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Southern Reach</h3>
                <p className="text-muted-foreground text-sm">From Galena down to Champaign</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commercial Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamlined approach designed to minimize business disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Site Assessment</h3>
              <p className="text-muted-foreground text-sm">Detailed evaluation of your space and scheduling needs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Quote</h3>
              <p className="text-muted-foreground text-sm">Detailed proposal with timeline and materials</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Execution</h3>
              <p className="text-muted-foreground text-sm">Work around your business hours and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Final Walkthrough</h3>
              <p className="text-muted-foreground text-sm">Quality inspection and client approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Enhance Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Professional commercial painting that enhances your business image without disrupting operations.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Request Commercial Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}