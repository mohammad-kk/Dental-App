import { Container, Main, Section } from "@/components/craft";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Sparkles, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ServiceData } from "@/data/services-data";

interface ServiceTemplateProps {
  serviceData: ServiceData;
}

export default function ServiceTemplate({ serviceData }: ServiceTemplateProps) {
  const {
    id,
    title,
    price,
    description,
    isPremium,
    isPopular,
    features,
    idealFor,
    process,
    faq,
    testimonial,
    specialNote,
    results,
    imageSrc,
  } = serviceData;

  return (
    <Main>
      <Section className="py-12">
        <Container>
          {/* Back button with subtle hover effect */}
          <Link 
            href="/#pricing" 
            className="group inline-flex items-center text-sm font-medium mb-10 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Services</span>
          </Link>
          
          {/* Hero section with service title and image */}
          <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/20 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="z-10">
                {/* Service badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {isPopular && (
                    <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>MOST POPULAR</span>
                    </div>
                  )}
                  
                  {isPremium && (
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>PREMIUM</span>
                    </div>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{price}</p>
                <p className="text-lg mb-8 max-w-xl">{description}</p>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors mt-4"
                >
                  <span className="text-white">Get Started</span>
                  <ChevronRight className="text-white ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="relative aspect-video md:aspect-square w-full max-w-md mx-auto md:mx-0">
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src={imageSrc || "/images/service-placeholder.jpg"} 
                    alt={`${title}`} 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          </div>
          
          {/* Main content section */}
          <div className="grid gap-8 md:grid-cols-12 items-start">
            {/* Left column - Main content */}
            <div className="md:col-span-7 lg:col-span-8">
              {/* What's Included */}
              {features && features.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
                  <ul className="space-y-3 pl-0">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start pl-0 before:content-none">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Perfect For */}
              {idealFor && idealFor.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
                  <p>
                    The {title} is ideal for dental practices that:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {idealFor.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Process */}
              {process && process.title && process.steps && (
                <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{process.title}</h2>
                  {process.description && <p className="mb-4">{process.description}</p>}
                  
                  <div className="space-y-4">
                    {process.steps.map((step, index) => (
                      <div key={index} className="relative">
                        {process.type === "numbered" && (
                          <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                            {index + 1}
                          </div>
                        )}
                        <div className={process.type === "numbered" ? "pl-12" : ""}>
                          <div dangerouslySetInnerHTML={{ __html: step }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* CTA */}
              <div className="mt-8 bg-white rounded-xl p-6 border shadow-sm">
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Ready to get started?</h3>
                    <p className="text-muted-foreground mb-4">Contact us today to learn more about our {title} and how we can help your dental practice grow.</p>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-black/90 transition-colors"
                    >
                      <span className="text-white">Contact Us</span>
                      <ExternalLink className="ml-2 h-4 w-4 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Sidebar */}
            <div className="md:col-span-5 lg:col-span-4 space-y-6">
              {/* Results section */}
              {results && results.title && results.items && (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="bg-primary/5 p-4 border-b">
                    <h3 className="text-lg font-semibold">{results.title}</h3>
                  </div>
                  
                  <div className="p-5">
                    {results.layout === "grid" ? (
                      <div className="grid grid-cols-2 gap-4">
                        {results.items.map((item, index) => (
                          <div key={index} className="text-center p-3 bg-primary/5 rounded-lg">
                            <div className="text-2xl font-bold text-primary">{item.value}</div>
                            <div className="text-sm mt-1 text-muted-foreground">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {results.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-muted-foreground">{item.label}</span>
                            <span className="font-semibold text-primary">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Testimonial */}
              {testimonial && (
                <div className="bg-white rounded-xl shadow-sm border p-5">
                  <div className="flex flex-col space-y-3">
                    <div className="text-lg italic text-muted-foreground">"{testimonial.quote}"</div>
                    <div className="font-medium">{testimonial.author}</div>
                  </div>
                </div>
              )}
              
              {/* Special Note */}
              {specialNote && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">{specialNote.title}</h3>
                  <p className="text-amber-700">{specialNote.content}</p>
                </div>
              )}
              
              {/* FAQ section */}
              {faq && faq.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="bg-primary/5 p-4 border-b">
                    <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
                  </div>
                  
                  <div className="divide-y">
                    {faq.map((item, index) => (
                      <details key={index} className="group">
                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium">
                          {item.question}
                          <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="p-4 pt-0 text-muted-foreground">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
