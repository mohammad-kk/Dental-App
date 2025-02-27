// Layout
/* eslint-disable react/no-unescaped-entities */
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Coins, ArrowRight, Star, TrendingUp } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  price: string; // Pricing
  description: string;
  href?: string;
  cta?: string;
};

// Base Website Package (One-Time Payment)
const baseWebsite: FeatureText[] = [
  {
    icon: <Star className="h-6 w-6" />,
    title: "Custom Website Package",
    price: "$2000 (One-Time Payment)", // One-time payment for website build
    href: "/#pricing",
    description:
      "A clean, custom-designed website that you fully own. Includes basic SEO, 1-year hosting, and full control over your domain.",
    cta: "Get Started",
  },
];

// Add-On Marketing Plans (Monthly)
const featureText: FeatureText[] = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Basic Marketing Plan",
    price: "$500/month", // Monthly for marketing add-on
    href: "/#pricing",
    description:
      "SEO optimization, Google Ads setup, and social media scheduling. Perfect for building visibility with low effort.",
    cta: "Learn More",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Growth Marketing Plan",
    price: "$1000/month", // Monthly pricing
    href: "/#pricing",
    description:
      "Advanced SEO, dynamic Google Ads management, and full social media strategy to grow your patient base.",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Elite Automation Plan",
    price: "$1500/month", // Monthly pricing
    href: "/#pricing",
    description:
      "All-inclusive AI-driven marketing automation and content creation. Run ads, emails, and social media automatically—24/7.",
    cta: "Learn More",
  },
];

const FeatureSet = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Start with a Custom Website, Scale with Marketing Add-Ons
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Choose the right package to fit your practice's goals.
            </Balancer>
          </h4>

          {/* Base Website Package */}
          <div className="mt-6 grid gap-6">
            <Link href="/custom-website" className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2">
              <div className="grid gap-4">
                <Star className="h-6 w-6" />
                <h4 className="text-xl text-primary">Custom Website Package</h4>
                <p className="text-lg font-semibold">$2000 (One-Time Payment)</p>
                <p className="text-base opacity-75">A clean, custom-designed website that you fully own.</p>
              </div>
              <div className="flex h-fit items-center text-sm font-semibold">
                <p>Get Started</p> <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Repeat for other plans */}
            <Link href="/growth-marketing" className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2">
              <div className="grid gap-4">
                <TrendingUp className="h-6 w-6" />
                <h4 className="text-xl text-primary">Growth Marketing Plan</h4>
                <p className="text-lg font-semibold">$1000/month</p>
                <p className="text-base opacity-75">Advanced SEO, dynamic Google Ads management.</p>
              </div>
              <div className="flex h-fit items-center text-sm font-semibold">
                <p>Learn More</p> <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link href="/elite-automation" className="flex flex-col justify-between gap-6 rounded-lg border bg-muted/25 p-6 transition-all hover:-mt-2 hover:mb-2">
              <div className="grid gap-4">
                <Coins className="h-6 w-6" />
                <h4 className="text-xl text-primary">Elite Automation Plan</h4>
                <p className="text-lg font-semibold">$1500/month</p>
                <p className="text-base opacity-75">All-inclusive AI-driven marketing automation.</p>
              </div>
              <div className="flex h-fit items-center text-sm font-semibold">
                <p>Learn More</p> <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureSet;
