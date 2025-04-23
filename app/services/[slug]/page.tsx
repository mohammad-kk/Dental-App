import { notFound } from "next/navigation";
import { servicesData } from "@/data/services-data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ChevronRight, Star } from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData[params.slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  
  return {
    title: `${service.title} | Dental Marketing Solutions`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData[params.slug];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/services" className="hover:text-primary">Services</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 font-medium">{service.title}</span>
      </div>

      {/* Service Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="flex items-center mb-4">
            {service.isPopular && (
              <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 mr-3">
                <Star className="h-3 w-3" /> Popular Choice
              </span>
            )}
            {service.isPremium && (
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                Premium
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-3xl font-bold text-primary mb-6">{service.price}</p>
          <p className="text-lg text-gray-600 mb-8">{service.description}</p>
          
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center py-2 px-6 rounded-lg font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image 
            src={service.imageSrc} 
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Features and Ideal For Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* What's Included Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4">What's Included:</h3>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
        </div>
        
        {/* Ideal For Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Ideal For:</h3>
          <ul className="space-y-3">
            {service.idealFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Process Section */}
      {service.process && (
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-6">{service.process.title}</h2>
          {service.process.description && (
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.process.description}</p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <p dangerouslySetInnerHTML={{ __html: step }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Section */}
      {service.results && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{service.results.title}</h2>
          
          <div className={`grid ${service.results.layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
            {service.results.items.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-base font-medium text-gray-600 mb-1">{item.label}</h3>
                {item.value && (
                  <p className="text-4xl font-bold text-primary my-2">{item.value}</p>
                )}
                {item.description && (
                  <p className="text-gray-600 mt-2">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonial Section */}
      {service.testimonial && (
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 mb-16 relative">
          <svg className="absolute text-primary opacity-10 h-24 w-24 top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <div className="relative">
            <p className="text-xl md:text-2xl italic mb-6 max-w-3xl">"{service.testimonial.quote}"</p>
            <p className="font-bold">{service.testimonial.author}</p>
          </div>
        </div>
      )}

      {/* Special Note Section */}
      {service.specialNote && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-xl font-bold mb-4">{service.specialNote.title}</h3>
          <p className="text-lg">{service.specialNote.content}</p>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Dental Practice?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Schedule a free consultation to discuss how our {service.title} can help you attract more patients and grow your practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center py-2 px-6 rounded-lg font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/services"
            className="inline-flex items-center justify-center py-2 px-6 rounded-lg font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
