'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, Container } from "@/components/craft";
import { Star } from 'lucide-react';
import Balancer from "react-wrap-balancer";

const testimonials = [
  {
    id: 1,
    name: "Dr. Alex Smith",
    role: "Dental Practice Owner",
    image: "/images/dentist10.png",
    content: "ByteDental transformed our online presence. The AI-driven marketing has brought in a steady stream of new patients with minimal effort on our part. Our ROI has been exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    role: "Orthodontist",
    image: "/images/dentist5.png",
    content: "The automated marketing tools save us hours each week. Our social media presence has never been stronger, and we're seeing more qualified leads than ever before.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Mike Brown",
    role: "Dental Surgeon",
    image: "/images/dentist3.png",
    content: "Exceptional service! The website design and marketing automation have helped us grow our practice significantly. The team is responsive and truly understands the dental industry.",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <Section className="py-16" id="testimonials">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Balancer>
              What Our Clients Say
            </Balancer>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <Balancer>
              Hear from dental practices that have transformed their marketing with ByteDental
            </Balancer>
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials; 