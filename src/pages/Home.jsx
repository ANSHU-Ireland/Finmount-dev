import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  Code, 
  TrendingUp, 
  Shield, 
  BookOpen, 
  Briefcase,
  ArrowRight
} from 'lucide-react';

import AnimatedHero from '../components/home/AnimatedHero';

const highlights = [
  { icon: Calculator, text: "ACCA Certified Accounting" },
  { icon: Shield, text: "Tax & Compliance" },
  { icon: BookOpen, text: "Bookkeeping & Payroll" },
  { icon: Briefcase, text: "Business Advisory" },
  { icon: Code, text: "Custom Software Development" },
  { icon: TrendingUp, text: "Software Consultancy" }
];

export default function Home() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedHero />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Expert Accounting.
              <br/>
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Intelligent Software.
              </span>
              <br/>
              One Trusted Partner.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ireland's most comprehensive firm blending 11 years of accounting excellence with powerful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Services')}>
                <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <p className="font-semibold text-slate-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
