import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const exteriorFAQs = [
  {
    question: "How often should I paint the exterior of my home?",
    answer: "Most homes need exterior painting every 7-10 years, but this depends on factors like climate, siding material, and paint quality. Wood siding may need painting every 5-7 years, while vinyl and fiber cement can last 10-15 years. We use exclusively Sherwin Williams paints, which provide superior durability and longevity."
  },
  {
    question: "What's the best time of year for exterior painting in Illinois?",
    answer: "Late spring through early fall (May through September) is ideal for exterior painting in Illinois. We need temperatures above 50°F and low humidity for optimal paint application and curing. We monitor weather conditions closely and will reschedule if conditions aren't perfect for your project."
  },
  {
    question: "Why do you exclusively use Sherwin Williams paint?",
    answer: "Sherwin Williams offers superior quality, durability, and color retention compared to other brands. Their paints are specifically formulated to withstand harsh Midwest weather conditions. We've tested many brands over the years, and Sherwin Williams consistently delivers the best long-term results for our clients."
  },
  {
    question: "Do you provide pressure washing before painting?",
    answer: "Yes! A light pressure wash is included in our exterior painting prep process. Clean surfaces are essential for proper paint adhesion and longevity. We hand-whip any built-up grime to avoid damaging wood surfaces."
  },
  {
    question: "How long does exterior painting take?",
    answer: "Most exterior house painting projects take 3-7 days, depending on home size and weather conditions. We work efficiently while maintaining high quality standards. Larger homes or those requiring extensive prep work may take longer."
  },
  {
    question: "What type of warranty do you offer?",
    answer: "We provide a 1-3 year warranty on our exterior painting work, depending on the specific project and materials used. This covers both labor and materials, giving you peace of mind in your investment."
  }
];

const generalFAQs = [
  {
    question: "Are you licensed, bonded, and insured?",
    answer: "Yes, TTM Painting is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation to protect both our team and your property during all projects."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Absolutely! We provide detailed, free estimates for all painting and related services. Our estimates include a breakdown of materials, labor, and timeline so you know exactly what to expect."
  },
  {
    question: "How do you protect my landscaping and property?",
    answer: "We take great care to protect your property. We use drop cloths, plastic sheeting, and painter's tape to protect plants, walkways, and outdoor furniture. Our team is trained in proper cleanup procedures and will leave your property spotless."
  },
  {
    question: "Can you match existing paint colors?",
    answer: "Yes, we can match virtually any existing color using Sherwin Williams' advanced color matching technology. We can also provide color consultation services to help you choose the perfect colors for your project."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Greater Chicago Area and surrounding areas throughout Illinois. We're happy to travel for quality projects throughout the region."
  },
  {
    question: "How many homes have you painted?",
    answer: "We've successfully completed over 50 homes and continue to grow our satisfied customer base. Each project receives the same attention to detail and commitment to quality that has built our reputation in the area."
  }
];

const interiorFAQs = [
  {
    question: "How long does interior painting take?",
    answer: "Interior painting typically takes 2-4 days for an average-sized room, or 1-2 weeks for a whole house, depending on the scope of work. We work efficiently while ensuring proper drying time between coats."
  },
  {
    question: "Do you move furniture?",
    answer: "We can help move light furniture and will work with you to prepare the space. For valuable or heavy items, we recommend arranging professional movers or handling these items yourself to prevent any damage."
  },
  {
    question: "What type of paint do you use for interior projects?",
    answer: "For interior projects, we also use Sherwin Williams paints, selecting the appropriate finish (flat, eggshell, satin, semi-gloss) based on the room's function and your preferences. We can also provide low-VOC options for better indoor air quality."
  },
  {
    question: "How do you handle prep work?",
    answer: "Proper preparation is crucial for a quality paint job. We fill holes, sand rough surfaces, clean walls, and apply primer when needed. This ensures your new paint will look great and last longer."
  }
];

export default function FAQ() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Common Painting
              <span className="text-accent"> Questions</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get answers to the most common questions about our painting services,
              specializing in exterior painting with exclusive Sherwin Williams products.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Exterior Painting FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Exterior Painting Questions</h2>
              <p className="text-muted-foreground text-center mb-8">
                Our specialty! Get answers about exterior painting, our preferred service area.
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                {exteriorFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`exterior-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* General FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">General Questions</h2>
              <p className="text-muted-foreground text-center mb-8">
                Learn about our business, service areas, and what makes TTM Painting different.
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                {generalFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Interior Painting FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Interior Painting Questions</h2>
              <p className="text-muted-foreground text-center mb-8">
                Common questions about interior painting projects and our process.
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                {interiorFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`interior-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            We're here to help! Contact us for personalized answers about your specific painting project.
          </p>
          <Button size="lg" variant="accent" asChild>
            <Link to="/get-estimate">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}