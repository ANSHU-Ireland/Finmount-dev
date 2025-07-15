import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Calculator, Code, TrendingUp, BookOpen, Shield, Briefcase, FileText, Zap, Cloud, ArrowRight } from 'lucide-react';

const toSlug = (text) => text.toLowerCase().replace(/ & /g, '-and-').replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const accountingServices = [
  { title: "Chartered Accounting", icon: Calculator },
  { title: "VAT Returns & Compliance", icon: Shield },
  { title: "Payroll Management", icon: BookOpen },
  { title: "Financial Forecasting", icon: TrendingUp },
  { title: "Bookkeeping", icon: BookOpen },
  { title: "Company Formation", icon: Briefcase },
  { title: "Revenue Audits Support", icon: FileText },
  { title: "Business Strategy & Advisory", icon: Briefcase }
];

const softwareServices = [
  { title: "Business Automation", icon: Zap },
  { title: "Accounting Software Customization", icon: Calculator },
  { title: "Custom Web Applications", icon: Code },
  { title: "API Integrations", icon: Code },
  { title: "Mobile App Development", icon: Code },
  { title: "Cloud Solutions", icon: Cloud }
];

export default function Services() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              {' '}Comprehensive Services
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Integrated solutions designed to streamline your finances and accelerate your growth. Click any service to learn more.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <ServiceColumn title="Accounting Services" icon={Calculator} services={accountingServices} color="blue" />
          <ServiceColumn title="Software Consultancy & Development" icon={Code} services={softwareServices} color="emerald" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-0 p-6 rounded-xl">
              <h3 className="text-2xl font-bold">Best rates for Irish SMEs, guaranteed.</h3>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

const ServiceColumn = ({ title, icon: Icon, services, color }) => (
  <motion.div
    initial={{ opacity: 0, x: color === 'blue' ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="space-y-6"
  >
    <div className="flex items-center space-x-4 mb-8">
      <div className={`w-12 h-12 rounded-xl bg-${color}-500 flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
    </div>

    <div className="space-y-4">
      {services.map((service, index) => (
        <Link to={createPageUrl(`ServiceDetail?name=${toSlug(service.title)}`)} key={service.title}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            className="group"
          >
            <Card className={`border-l-4 border-${color}-500 transition-shadow`}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <service.icon className={`w-6 h-6 mr-4 text-${color}-500`} />
                  <p className="font-semibold text-slate-800">{service.title}</p>
                </div>
                <ArrowRight className={`w-5 h-5 text-slate-400 group-hover:text-${color}-500 transition-colors`} />
              </CardContent>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  </motion.div>
);
