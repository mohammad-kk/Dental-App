// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";
import { Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <Section className="px-4 py-8">
      <Container className="flex bg-primary flex-col items-center gap-6 rounded-2xl border p-8 text-center max-w-5xl mx-auto shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Dental Practice?</h2>
        <p className="text-white/90 text-lg max-w-3xl mx-auto">
          <Balancer>
            Book a free discovery call to learn how our AI-powered marketing can help grow your practice. 
            No commitments, just a conversation about your goals.
          </Balancer>
        </p>
        <Button 
          className="w-fit bg-white hover:bg-white/90 text-primary font-medium px-8 py-4 text-base no-underline transition-all duration-300 hover:shadow-md"
          asChild
        >
          <Link href="https://cal.com/kabir-khan/30min" className="inline-flex items-center gap-3 no-underline">
            <Calendar className="w-5 h-5" />
            Book Your Free Discovery Call
          </Link>
        </Button>
      </Container>
    </Section>
  );
};

export default CTA;

