import { Metadata } from "next";
import { servicesData } from "@/data/services-data";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Star } from "lucide-react";
import { Section, Container } from "@/components/craft";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Services | Dental Marketing Solutions",
  description: "Explore our dental marketing services designed to grow your practice and attract more patients.",
};

// Sample images for the carousel
const photos = [
  {
    src: "/images/dentistoperating.jpg",
  },
  {
    src: "/images/Dentures.jpg",
  },
  {
    src: "/images/doctorputtingupxrays.jpg",
  },
  {
    src: "/images/denistoperating2.jpg",
  },
  {
    src: "/images/blackwhiteteethmold.jpg",
  },
  {
    src: "/images/dentalutensils.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Tailored marketing solutions to help your dental practice thrive in the digital age.
          Choose the package that best fits your practice's goals and budget.
        </p>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {Object.values(servicesData).map((service) => (
          <div 
            key={service.id}
            className={`rounded-xl overflow-hidden shadow-lg border transition-all duration-300 hover:shadow-xl flex flex-col h-full
              ${service.isPremium ? 'border-primary/50 bg-primary/5' : 'border-gray-200'}
              ${service.isPopular ? 'border-amber-400/50 bg-amber-50/50' : ''}
            `}
          >
            {/* Service Header */}
            <div className="relative">
              {service.isPopular && (
                <div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3" /> Popular
                </div>
              )}
              {service.isPremium && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Premium
                </div>
              )}
              <div className="h-40 bg-gray-100 relative">
                <Image 
                  src={service.imageSrc} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service Content */}
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
                {service.features.length > 4 && (
                  <p className="text-sm text-gray-500 mt-2">+ {service.features.length - 4} more features</p>
                )}
              </div>

              <div className="mt-auto">
                <Link 
                  href={`/services/${service.id}`}
                  className={`inline-flex items-center justify-center w-full py-2 px-4 rounded-lg font-medium transition-colors
                    ${service.isPremium ? 'bg-primary text-white hover:bg-primary/90' : 
                      service.isPopular ? 'bg-amber-400 text-white hover:bg-amber-500' : 
                      'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Image Carousel */}
      <Section className="mb-16">
        <Container>
          <Carousel className="w-full">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl aspect-video relative">
                      <Image
                        src={photo.src}
                        alt={`Dental service image ${index + 1}`}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </Container>
      </Section>
      {/* Why Choose Us Section */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Marketing Services?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize exclusively in dental marketing with proven results and a deep understanding of what works in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Dental-Specific Expertise</h3>
            <p className="text-gray-600">
              We focus exclusively on dental marketing, understanding the unique challenges and opportunities in the industry.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Proven Results</h3>
            <p className="text-gray-600">
              Our strategies have helped dental practices increase new patient acquisition by an average of 32% within 90 days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
            <p className="text-gray-600">
              Every client gets a dedicated account manager who understands your practice goals and provides regular updates.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Practice?</h2>
        <p className="max-w-3xl mx-auto mb-8">
          Schedule a free consultation to discuss how our marketing services can help you attract more patients and grow your practice.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center py-2 px-6 rounded-lg font-medium bg-white text-primary hover:bg-gray-100 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}