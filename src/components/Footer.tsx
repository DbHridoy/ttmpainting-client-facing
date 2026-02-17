import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield, Award, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              TTM <span className="text-accent">Painting</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Chicago Suburbs & Surrounding Areas
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+1 (872) 666 8770" className="hover:text-accent transition-smooth">
                  +1 (872) 666 8770
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@ttmpainting.com" className="hover:text-accent transition-smooth">
                  info@ttmpainting.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/interior-painting" className="hover:text-accent transition-smooth">Interior Painting</Link></li>
              <li><Link to="/exterior-painting" className="hover:text-accent transition-smooth">Exterior Painting</Link></li>
              <li><Link to="/deck-fence-staining" className="hover:text-accent transition-smooth">Deck & Fence Staining</Link></li>
              <li><Link to="/commercial" className="hover:text-accent transition-smooth">Commercial Painting</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-smooth">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-smooth">Portfolio</Link></li>

              <li><Link to="/service-areas" className="hover:text-accent transition-smooth">Service Areas</Link></li>
              <li><Link to="/faqs" className="hover:text-accent transition-smooth">FAQs</Link></li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="font-semibold mb-4">Trust & Quality</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 mr-2 text-success" />
                Licensed & Insured
              </div>
              <div className="flex items-center text-sm">
                <Award className="h-4 w-4 mr-2 text-success" />
                1-3 Year Workmanship Warranty
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-success" />
                50+ Happy Customers
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div>
              © 2024 TTM Painting. All rights reserved. Licensed, Bonded & Insured in Illinois.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-accent transition-smooth">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-smooth">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}