import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Home,
  Car,
  CheckCircle,
  Clock,
  Phone
} from "lucide-react";

const mainAreas = [
  {
    region: "Northwestern Illinois",
    cities: ["Rock Island", "Moline", "East Moline", "Silvis", "Coal Valley"],
    description: "Quad Cities area and surrounding communities"
  },
  {
    region: "Greater Chicago Area",
    cities: ["Naperville", "Aurora", "Joliet", "Schaumburg", "Palatine"],
    description: "Our primary service area"
  },
  {
    region: "Northern Illinois",
    cities: ["Galena", "Freeport", "Rockford", "DeKalb", "Sycamore"],
    description: "Historic towns and growing communities"
  },
  {
    region: "Wisconsin Border",
    cities: ["Kenosha", "Racine", "Lake Geneva", "Burlington", "Delavan"],
    description: "Southern Wisconsin communities near the Illinois border"
  },
  {
    region: "Central Illinois",
    cities: ["Ottawa", "LaSalle", "Peru", "Mendota", "Princeton"],
    description: "Illinois Valley and surrounding areas"
  },
  {
    region: "East Central Illinois",
    cities: ["Champaign", "Urbana", "Danville", "Rantoul", "Monticello"],
    description: "University communities and eastern reach"
  }
];

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description: "Complete home painting services including exterior and interior projects"
  },
  {
    icon: Car,
    title: "Commercial Projects",
    description: "Business and commercial property painting with flexible scheduling"
  },
  {
    icon: MapPin,
    title: "Power Washing & Staining",
    description: "Deck staining, fence staining, and power washing services"
  }
];

export default function ServiceAreas() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Service Areas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Serving Illinois
              <span className="text-accent"> Statewide</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Based in the Greater Chicago Area, we provide professional painting services throughout the greater Chicago area and surrounding Illinois communities.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/get-estimate">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Extensive coverage area throughout the Greater Chicago Area and surrounding Illinois communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainAreas.map((area, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MapPin className="h-5 w-5 text-accent mr-2" />
                    {area.region}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {area.cities.map((city, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-success mr-2 flex-shrink-0" />
                        {city}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Available in All Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete painting and related services available throughout our service area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Location Works for You</h2>
              <p className="text-xl text-muted-foreground">
                Our Greater Chicago Area location allows us to efficiently serve communities throughout the area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Strategic Location Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Greater Chicago Area Base:</span> Convenient location provides efficient service to all areas
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">No Travel Charges:</span> Our service area pricing includes travel to your location
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Reliable Service:</span> Easy access means consistent scheduling and prompt service
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Local Knowledge:</span> Familiar with Illinois weather patterns and community needs
                    </div>
                  </li>
                </ul>
              </div>
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-center">Service Area Coverage</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold">West to East</div>
                      <div className="text-muted-foreground">Rock Island → Greater Chicago Area</div>
                    </div>
                    <div>
                      <div className="font-semibold">North to South</div>
                      <div className="text-muted-foreground">Galena → Champaign</div>
                    </div>
                    <div className="bg-accent/5 p-4 rounded-lg mt-6">
                      <div className="font-semibold text-accent">Service Area</div>
                      <div className="text-muted-foreground">Greater Chicago Area, Illinois</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Don't See Your City */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your City?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always expanding our service area for quality projects. If you're in Illinois and need professional painting services, give us a call - we may be able to help!
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/get-estimate">Ask About Your Area</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started in Your Area?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Professional painting services available throughout our extensive Illinois service area.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Get Free Local Estimate</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}