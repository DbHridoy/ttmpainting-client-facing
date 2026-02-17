import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import ttmLogo from "@/assets/ttm-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Residential", href: "/residential-painting" },
  { name: "Commercial", href: "/commercial" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/get-estimate" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+1 (872) 666 8770" className="flex items-center hover:text-accent transition-smooth">
                <Phone className="h-4 w-4 mr-1" />
                +1 (872) 666 8770
              </a>
              <a href="mailto:info@ttmpainting.com" className="flex items-center hover:text-accent transition-smooth">
                <Mail className="h-4 w-4 mr-1" />
                info@ttmpainting.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-xs">Licensed • Bonded • Insured</span>
              <Button variant="accent" size="sm" asChild>
                <Link to="/get-estimate">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={ttmLogo}
                alt="TTM Painting Logo"
                className="h-12 w-12 mr-3"
              />
              <div className="text-2xl font-bold text-primary">
                TTM <span className="text-accent">Painting</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-smooth hover:text-accent ${location.pathname === item.href ? "text-accent" : "text-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`text-lg font-medium transition-smooth hover:text-accent ${location.pathname === item.href ? "text-accent" : "text-foreground"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="pt-4 border-t">
                      <Button variant="accent" size="lg" asChild className="w-full">
                        <Link to="/get-estimate" onClick={() => setIsOpen(false)}>
                          Get Free Estimate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
