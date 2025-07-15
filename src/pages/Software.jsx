import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Zap, GitMerge, Code, Cloud, ArrowRight, Smartphone } from 'lucide-react';

const features = [
  { title: "Business Automation", description: "Streamline repetitive tasks and improve efficiency.", icon: Zap },
  { title: "Accounting Software Integration", description: "Seamlessly connect your tools for a single source of truth.", icon: GitMerge },
  { title: "Custom Web & Mobile Apps", description: "Bespoke applications built to solve your unique business challenges.", icon: Smartphone },
  { title: "Cloud Solutions & Migration", description: "Leverage the power of the cloud for scalability and security.", icon: Cloud }
];

export default function Software() {
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
            Intelligent
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {' '}Software Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Harnessing technology to automate processes, enhance decision-making, and drive growth for your business.
          </p>
        </motion.div>

        {/* Animated Flowchart */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <FlowCard text="Your Business Data" />
            <Arrow />
            <FlowCard text="Finmount Software Integration" primary />
            <Arrow />
            <FlowCard text="Streamlined Accounting" />
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-0 text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Success?</h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                Let's discuss how our software solutions can integrate with your accounting processes to save you time and money.
              </p>
              <Link to={createPageUrl('Contact?service=Software+Audit')}>
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
                  Schedule a Free Software Audit
                  <ArrowRight className="ml-2"/>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

const FlowCard = ({ text, primary = false }) => (
  <motion.div 
    className={`rounded-lg p-6 text-center shadow-lg ${primary ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-800'}`}
    whileHover={{ scale: 1.05 }}
  >
    <p className="font-semibold">{text}</p>
  </motion.div>
);

const Arrow = () => (
  <motion.div 
    className="text-slate-400"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <ArrowRight className="w-8 h-8" />
  </motion.div>
);
