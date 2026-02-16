import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. 
          Let's get you back to finding the perfect painting services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/get-estimate">Get Free Estimate</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
