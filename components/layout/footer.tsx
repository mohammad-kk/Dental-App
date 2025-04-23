import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Container } from '@/components/craft';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ByteDental</h3>
            <p className="text-gray-400 mb-4">
              Optimized, automated marketing solutions for dental practices.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                {/* <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link> */}
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="services/custom-website" className="text-gray-400 hover:text-primary transition-colors">
                  Custom Website
                </Link>
              </li>
              <li>
                <Link href="services//growth-marketing" className="text-gray-400 hover:text-primary transition-colors">
                  Growth Marketing
                </Link>
              </li>
              <li>
                <Link href="services//elite-automation" className="text-gray-400 hover:text-primary transition-colors">
                  Elite Automation
                </Link>
              </li>
              {/* <li>
                <Link href="/social-media" className="text-gray-400 hover:text-primary transition-colors">
                  Social Media Management
                </Link>
              </li> */}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">707-400-3575</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">kabirkhan@berkeley.edu</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Berkeley, California</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ByteDental. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;