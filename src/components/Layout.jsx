import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: createPageUrl('Home') },
  { name: 'About Us', path: createPageUrl('About') },
  { name: 'Services', path: createPageUrl('Services') },
  { name: 'Software', path: createPageUrl('Software') },
  { name: 'Contact', path: createPageUrl('Contact') },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation */}
      <motion.nav 
        className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl('Home')}>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Finmount
                </span>
              </motion.div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path}>
                  <motion.div
                    className={`relative text-slate-700 hover:text-blue-600 transition-colors font-medium`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div 
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600"
                        layoutId="underline"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-5 py-2 rounded-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
            {/* Mobile menu could be added here */}
          </div>
        </div>
      </motion.nav>

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold">Finmount</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Expert Accounting. Intelligent Software. One Trusted Partner.
                <br/>
                Proudly Serving Irish SMEs Since 2013.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@finmount.ie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Dublin, Ireland</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white"><Linkedin /></a>
                <a href="#" className="text-slate-400 hover:text-white"><Twitter /></a>
              </div>
              <div className="mt-4">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/ACCA_logo.svg/200px-ACCA_logo.svg.png" alt="ACCA Certified" className="h-8 bg-white p-1 rounded"/>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Finmount. All rights reserved. | <Link to="#" className="hover:text-white">Privacy & GDPR</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
