"use client";

import { Container, Main, Section } from "@/components/craft";
import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, CheckCircle, Send } from "lucide-react";

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
    <Main className="pt-24"> 
      {/* Hero Section */}
      {/* Remove mt-16/mt-32 from here if you added it previously */}
      <div className="bg-gradient-to-r from-primary to-purple-600 text-white relative"> 
        <Container className="py-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl text-white md:text-4xl font-bold mb-3">Contact Us</h1>
            <p className="text-lg text-white/90">
              Let's discuss how we can help grow your dental practice
            </p>
          </div>
        </Container>
      </div>

      <Section className="py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-purple-700 rounded-lg shadow p-5 text-white mb-6">
                <h2 className="text-xl text-white font-bold mb-4">Get In Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-white/80 mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">707-400-3575</p>
                      <p className="text-sm text-white/70">Mon-Fri, 9am-5pm PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-white/80 mt-1 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium">kabirkhan@berkeley.edu</p>
                      <p className="text-sm text-white/70">We respond within 24hrs</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h3 className=" text-white font-medium mb-2">Our Services</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3.5 w-3.5 mr-2 text-white/80" />
                      <span>Website Development</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3.5 w-3.5 mr-2 text-white/80" />
                      <span>Growth Marketing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3.5 w-3.5 mr-2 text-white/80" />
                      <span>Elite Automation</span>
                    </li>
                    <li className="flex items-center">
                      {/* <CheckCircle className="h-3.5 w-3.5 mr-2 text-white/80" /> */}
                      {/* <span>Social Media Management</span> */}
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* FAQ Mini Section */}
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Quick FAQs</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-800">How soon can you start?</p>
                    <p className="text-xs text-gray-600">We typically begin within 1-2 weeks of agreement.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Do you work with practices outside the US?</p>
                    <p className="text-xs text-gray-600">No, at this time we only service dental practices in United.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Your message has been sent successfully. We'll get back to you shortly to discuss how we can help your dental practice grow.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Send Us a Message</h2>
                    <span className="text-xs text-gray-500">* Required fields</span>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-sm"
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
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-sm"
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
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-sm"
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
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-sm"
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
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                        placeholder="Tell us about your practice and what you're looking for..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-2 px-4 rounded font-medium hover:bg-primary-dark transition-colors disabled:opacity-70 flex items-center justify-center"
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
                    
                    <p className="text-xs text-gray-500 text-center">
                      {/* By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a>. */}
                    </p>
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
