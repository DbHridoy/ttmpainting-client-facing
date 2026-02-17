import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-exterior-painting.jpg";
import blueHouseBefore from "@/assets/blue-house-before.jpg";
import blueHouseAfter from "@/assets/blue-house-after.jpg";
import beigeHouseBefore from "@/assets/beige-house-before.jpg";
import beigeHouseAfter from "@/assets/beige-house-after.jpg";
import grayRanchBefore from "@/assets/gray-ranch-before.jpg";
import grayRanchAfter from "@/assets/gray-ranch-after.jpg";
import greenGarageBefore from "@/assets/green-garage-before.jpg";
import greenGarageAfter from "@/assets/green-garage-after.jpg";
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  Home as HomeIcon,
  Building,
  Brush,
  Fence,
  Sparkles,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with quality paints and finishes.",
    href: "/exterior-painting"
  },
  {
    icon: HomeIcon,
    title: "Interior Painting",
    description: "Transform your living spaces with professional interior painting services.",
    href: "/interior-painting"
  },
  {
    icon: Fence,
    title: "Deck & Fence Staining",
    description: "Preserve and enhance your outdoor wood surfaces with quality stains.",
    href: "/deck-fence-staining"
  },
  {
    icon: Brush,
    title: "Power Washing",
    description: "Professional surface prep included with painting projects for lasting results.",
    href: "/power-washing"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Free Estimate",
    description: "We provide detailed, transparent estimates with no hidden costs."
  },
  {
    number: "02",
    title: "Design Consultation",
    description: "We come to your home and apply color samples directly on your surfaces to help you choose the perfect color."
  },
  {
    number: "03",
    title: "Professional Prep",
    description: "Thorough surface preparation ensures a lasting, beautiful finish."
  },
  {
    number: "04",
    title: "Quality Paint Job",
    description: "Expert application using premium Sherwin-Williams paints for lasting results."
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "We ensure your complete satisfaction before considering the job complete."
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center text-primary-foreground overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16, 85, 170, 0.92), rgba(20, 60, 120, 0.88)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 mt-4 animate-fade-in">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 backdrop-blur-sm border-white/30 text-white">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Licensed • Bonded • Insured in Illinois
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
              Elevating <span className="text-white">Craftsmanship</span> & Integrity
              <span className="block text-2xl md:text-3xl font-medium mt-6 text-white/90">
                One Home at a Time
              </span>
            </h1>
            <div className="mt-12 mb-12 aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/gRL__aRxjW4?rel=0"
                title="Company Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto animate-fade-in stagger-1">
              Professional painting services in the Chicago suburbs — built on consistency,
              quality materials, and a 1-3 year workmanship warranty you can trust.
            </p>
            <div className="flex flex-col sm:flex-row mb-4 gap-4 justify-center animate-fade-in stagger-2">
              <Button size="lg" className="group text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-lg font-semibold" asChild>
                <Link to="/get-estimate">
                  Get Your Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline-light" asChild className="text-lg px-8 py-6 font-semibold">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
            



          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="gradient-trust py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center group cursor-default">
              <div className="p-3 rounded-full bg-primary/10 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Licensed & Insured</div>
                <div className="text-sm text-muted-foreground">Full coverage for your peace of mind</div>
              </div>
            </div>
            <div className="flex items-center justify-center group cursor-default">
              <div className="p-3 rounded-full bg-primary/10 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">1-3 Year Warranty</div>
                <div className="text-sm text-muted-foreground">Guaranteed workmanship quality</div>
              </div>
            </div>
            <div className="flex items-center justify-center group cursor-default">
              <div className="p-3 rounded-full bg-primary/10 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">50+ Homes Painted</div>
                <div className="text-sm text-muted-foreground">Throughout Chicago suburbs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Painting Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From exterior transformations to interior perfection, we deliver exceptional results for every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift bg-card border border-border shadow-soft hover:shadow-strong overflow-hidden transition-all duration-300">
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary group/btn">
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-xl text-muted-foreground">
              See the amazing transformations we've completed for homeowners throughout the Chicago suburbs and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-background rounded-xl shadow-medium overflow-hidden group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={blueHouseBefore}
                    alt="House exterior before painting transformation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-muted/90 backdrop-blur-sm text-muted-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={blueHouseAfter}
                    alt="Beautiful blue house exterior after painting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-success/90 backdrop-blur-sm text-success-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Complete Exterior Transformation</h3>
                <p className="text-muted-foreground">Full exterior painting with premium Sherwin-Williams paint, transforming this home with a beautiful blue color scheme.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-background rounded-xl shadow-medium overflow-hidden group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={beigeHouseBefore}
                    alt="House exterior before professional painting service"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-muted/90 backdrop-blur-sm text-muted-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={beigeHouseAfter}
                    alt="Modern beige house exterior after professional painting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-success/90 backdrop-blur-sm text-success-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Modern Ranch Style Update</h3>
                <p className="text-muted-foreground">Fresh exterior paint job bringing this ranch home into the modern era with clean lines and contemporary colors.</p>
              </div>
            </div>

            {/* Project 3 - New Gray Ranch */}
            <div className="bg-background rounded-xl shadow-medium overflow-hidden group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={grayRanchBefore}
                    alt="Ranch home before exterior painting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-muted/90 backdrop-blur-sm text-muted-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={grayRanchAfter}
                    alt="Beautiful gray ranch home after painting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-success/90 backdrop-blur-sm text-success-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Modern Gray Ranch Transformation</h3>
                <p className="text-muted-foreground">Complete exterior transformation from faded beige to stunning modern gray with premium Sherwin-Williams paint.</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-background rounded-xl shadow-medium overflow-hidden group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={greenGarageBefore}
                    alt="Weathered garage before painting restoration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-muted/90 backdrop-blur-sm text-muted-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={greenGarageAfter}
                    alt="Freshly painted green garage exterior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-success/90 backdrop-blur-sm text-success-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Garage Restoration Project</h3>
                <p className="text-muted-foreground">Complete restoration of weathered garage with professional surface prep and high-quality exterior paint for long-lasting protection.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="default" asChild>
              <Link to="/get-estimate">Start Your Transformation Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground">
              Every project follows our systematic approach to ensure exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
                )}
                <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center text-xl font-bold text-white mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md relative z-10">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Estimate CTA Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
              <p className="text-xl text-muted-foreground">
                Get your free, detailed estimate today. No pressure, just honest pricing and expert advice.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-2">
              <Button
                size="lg"
                className="group text-lg px-8 py-6 font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link to="/get-estimate">
                  Get Your Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Experience the TTM Painting Difference
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join 50+ satisfied customers throughout the Chicago suburbs and surrounding areas.
          </p>
          <Button size="lg" className="group text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg" asChild>
            <Link to="/get-estimate">
              Start Your Project Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
