"use client";

import { Container, Main, Section } from "@/components/craft";
import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, CheckCircle, Send } from "lucide-react";
import Link from "next/link";
import { Calendar } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    // Add pt-24 to the Main component to account for the navbar height
    <Main> 
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white relative"> 
        <Container className="py-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl text-white md:text-5xl font-bold mb-1">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90">
              Let's discuss how we can help grow your dental practice
            </p>
          </div>
        </Container>
      </div>

      <Section className="py-6">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1 flex flex-col h-full">
              <div className="bg-gradient-to-br from-primary to-purple-700 rounded-lg shadow p-4 text-white mb-4">
                <h2 className="text-2xl text-white font-bold mb-2">Get In Touch</h2>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-white/80 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium text-lg">707-400-3575</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium text-lg">kabirkhan@berkeley.edu</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Mini Section */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Quick FAQs</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium text-gray-800">How soon can you start?</p>
                    <p className="text-sm text-gray-600">We typically begin within 1-2 weeks of agreement.</p>
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-800">Do you work with practices outside the US?</p>
                    <p className="text-sm text-gray-600">No, at this time we only service dental practices in United.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="bg-green-100 text-green-700 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-gray-600 text-lg max-w-md mx-auto">
                    Your message has been sent successfully. We'll get back to you shortly to discuss how we can help your dental practice grow.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                    <span className="text-xs text-gray-500">* Required fields</span>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-base"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-base"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-base"
                        placeholder="Tell us about your practice and what you're looking for..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-2.5 px-4 rounded font-medium hover:bg-primary-dark transition-colors disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    
                    <div className="relative flex items-center my-1">
                      <div className="flex-grow border-t border-gray-200"></div>
                      <span className="flex-shrink mx-3 text-gray-400 text-sm">or</span>
                      <div className="flex-grow border-t border-gray-200"></div>
                    </div>
                    
                    <Link 
                      href="https://cal.com/kabir-khan/30min" 
                      className="w-full bg-white border-2 border-primary text-primary py-2.5 px-4 rounded font-medium hover:bg-primary/5 transition-colors flex items-center justify-center"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Free Discovery Call
                    </Link>
                  </form>
                </>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
