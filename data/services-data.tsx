import { ReactNode } from "react";
import { Zap } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface SpecialNote {
  title: string;
  content: string;
}

export interface ResultItem {
  label: string;
  value?: string;
  description?: string;
}

export interface Results {
  title: string;
  layout: "list" | "grid";
  items: ResultItem[];
}

export interface Process {
  title: string;
  description?: string;
  type: "numbered" | "bullet";
  steps: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Benefits {
  title: string;
  description?: string;
  items: BenefitItem[];
}

export interface ServiceData {
  id: string;
  title: string;
  price: string;
  description: string;
  isPremium?: boolean;
  isPopular?: boolean;
  features: string[];
  idealFor: string[];
  process?: Process;
  benefits?: Benefits;
  faq?: FAQ[];
  testimonial?: Testimonial;
  specialNote?: SpecialNote;
  results?: Results;
  imageSrc: string;
}

export const servicesData: Record<string, ServiceData> = {
  "custom-website": {
    id: "custom-website",
    title: "Custom Website Package",
    price: "$2000 (One-Time Payment)",
    description: "A clean, custom-designed website that you fully own. Includes basic SEO, 1-year hosting, and full control over your domain.",
    features: [
      "Professional custom design tailored to your dental practice",
      "Mobile-responsive layout that works on all devices",
      "Basic SEO setup to help patients find you online",
      "1-year hosting included (renewable annually)",
      "Content management system for easy updates",
      "Contact forms and appointment scheduling integration"
    ],
    idealFor: [
      "New dental practices establishing their online presence",
      "Established practices looking to refresh their outdated website",
      "Dentists who want full ownership of their web assets",
      "Practices focused on long-term growth and patient acquisition"
    ],
    process: {
      title: "Process",
      type: "numbered",
      steps: [
        "<strong>Discovery:</strong> We learn about your practice, services, and goals",
        "<strong>Design:</strong> We create mockups for your approval",
        "<strong>Development:</strong> We build your custom website",
        "<strong>Review:</strong> You provide feedback and we make adjustments",
        "<strong>Launch:</strong> Your new website goes live"
      ]
    },
    testimonial: {
      quote: "The website exceeded our expectations. We've received numerous compliments from patients, and our online appointment bookings have increased by 40%.",
      author: "Dr. Emily Rodriguez"
    },
    results: {
      title: "Expected Results",
      layout: "list",
      items: [
        {
          label: "Increase in online appointments",
          value: "30-50%"
        },
        {
          label: "Improved Google ranking",
          value: "Top 10"
        },
        {
          label: "Mobile traffic conversion",
          value: "25% higher"
        }
      ]
    },
    imageSrc: "/images/custom-website-preview.jpg"
  },
  
  "basic-marketing": {
    id: "basic-marketing",
    title: "Basic Marketing Plan",
    price: "$500/month",
    isPopular: true,
    description: "Essential marketing services to establish your online presence and start attracting new patients consistently.",
    features: [
      "<strong>Local SEO:</strong> Optimize your Google Business Profile",
      "<strong>Social Media:</strong> 2 posts per week on 2 platforms",
      "<strong>Google Ads:</strong> Basic campaign with $500 ad spend management",
      "<strong>Monthly Reporting:</strong> Track your results and ROI",
      "<strong>Website Updates:</strong> Basic content updates as needed",
      "<strong>Review Management:</strong> Monitor and respond to patient reviews"
    ],
    idealFor: [
      "New practices just getting started with marketing",
      "Dentists on a limited marketing budget",
      "Practices in less competitive markets",
      "Dentists looking for essential marketing without the complexity"
    ],
    process: {
      title: "How It Works",
      type: "numbered",
      steps: [
        "<strong>Strategy Session:</strong> We identify your target patients and goals",
        "<strong>Account Setup:</strong> We optimize your online profiles",
        "<strong>Campaign Launch:</strong> We create and launch your marketing campaigns",
        "<strong>Monthly Optimization:</strong> We refine your campaigns based on performance",
        "<strong>Reporting:</strong> We provide clear insights on your results"
      ]
    },
    results: {
      title: "Typical Results",
      layout: "list",
      items: [
        {
          label: "Increase in Google visibility",
          value: "65%"
        },
        {
          label: "New patient inquiries per month",
          value: "10-15"
        },
        {
          label: "Growth in online reviews",
          value: "8-12 per month"
        }
      ]
    },
    testimonial: {
      quote: "The Basic Marketing Plan was perfect for our new practice. We started getting calls within weeks, and it's been growing steadily ever since.",
      author: "Dr. James Wilson"
    },
    imageSrc: "/images/basic-marketing-preview.jpg"
  },
  
  "growth-marketing": {
    id: "growth-marketing",
    title: "Growth Marketing Plan",
    price: "$1000/month",
    description: "Comprehensive marketing with content creation, advanced SEO, and multi-channel campaigns. Designed for practices ready to scale.",
    features: [
      "<strong>Everything in Basic Plan</strong> plus premium features",
      "<strong>Advanced SEO:</strong> Comprehensive on-page and technical SEO",
      "<strong>Content Marketing:</strong> 2 blog posts per month",
      "<strong>Email Marketing:</strong> Monthly newsletter and patient reactivation campaigns",
      "<strong>Enhanced Social Media:</strong> 4 posts per week across 3 platforms",
      "<strong>Expanded Google Ads:</strong> Multiple campaigns with $1000 ad spend management"
    ],
    idealFor: [
      "Established practices looking to accelerate growth",
      "Dentists in competitive markets needing an edge",
      "Practices focusing on high-value procedures",
      "Dentists wanting comprehensive marketing without hiring in-house"
    ],
    process: {
      title: "Growth Process",
      type: "numbered",
      steps: [
        "<strong>Comprehensive Audit:</strong> We analyze your current marketing and identify opportunities",
        "<strong>Strategy Development:</strong> We create a custom growth plan for your practice",
        "<strong>Multi-Channel Launch:</strong> We implement campaigns across all platforms",
        "<strong>Content Creation:</strong> We develop blogs, emails, and social content",
        "<strong>Continuous Optimization:</strong> We refine strategies based on performance data"
      ]
    },
    results: {
      title: "Growth Results",
      layout: "grid",
      items: [
        {
          label: "Average increase in new patients",
          value: "32%"
        },
        {
          label: "Increase in high-value procedures",
          value: "47%"
        },
        {
          label: "Typical ROI",
          value: "4.2x"
        },
        {
          label: "Website conversion improvement",
          value: "38%"
        }
      ]
    },
    testimonial: {
      quote: "The Growth Marketing Plan transformed our practice. We're now booked solid with high-value patients and have expanded to a second location.",
      author: "Dr. Sarah Johnson"
    },
    specialNote: {
      title: "Satisfaction Guarantee",
      content: "If you don't see measurable results within 90 days, we'll work for free until you do."
    },
    imageSrc: "/images/growth-marketing-preview.jpg"
  },
  
  "elite-automation": {
    id: "elite-automation",
    title: "Elite Automation Plan",
    price: "$1500/month",
    isPremium: true,
    description: "All-inclusive AI-driven marketing automation and content creation. Run ads, emails, and social media automatically—24/7.",
    features: [
      "<strong>Everything in Growth Plan</strong> plus premium automation features",
      "<strong>AI-Powered Content Creation:</strong> Automated blog posts, social media, and email content",
      "<strong>24/7 Ad Management:</strong> AI-optimized campaigns with real-time adjustments",
      "<strong>Automated Patient Journey:</strong> Personalized email sequences based on patient behavior",
      "<strong>Predictive Analytics:</strong> AI forecasting for marketing performance",
      "<strong>VIP Strategy Team:</strong> Dedicated strategist, designer, and content creator"
    ],
    idealFor: [
      "Want a \"set it and forget it\" marketing solution",
      "Are focused on rapid growth and market domination",
      "Have multiple locations or a large practice",
      "Want to leverage cutting-edge AI technology",
      "Need comprehensive marketing without the management burden"
    ],
    results: {
      title: "Elite Results",
      layout: "grid",
      items: [
        {
          label: "Reduction in marketing management time",
          value: "85%"
        },
        {
          label: "More content produced monthly",
          value: "3.2x"
        },
        {
          label: "Higher conversion rates",
          value: "42%"
        },
        {
          label: "Average ROI",
          value: "7.8x"
        }
      ]
    },
    testimonial: {
      quote: "The Elite Automation Plan has transformed our practice. Our marketing runs itself while we focus on patients. We've seen a 215% increase in high-value procedures in just 6 months.",
      author: "Dr. Michael Chen"
    },
    specialNote: {
      title: "Limited Availability",
      content: "We only accept 5 new Elite Automation clients per month to ensure premium service quality."
    },
    imageSrc: "/images/elite-automation-preview.jpg"
  }
};
