import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Code, Star, Target } from 'lucide-react';

const teamMembers = [
  {
    name: "Binu Jose",
    role: "Founder & Director",
    description: "ACCA Certified Chartered Accountant with 11 years of professional experience in Ireland & abroad.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    icon: Award,
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Anshu Kumar",
    role: "Product Manager, Software Consultancy",
    description: "Leads the digital innovation arm of Finmount, bridging finance and technology.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    icon: Code,
    color: "from-emerald-600 to-emerald-800"
  },
  {
    name: "Archana",
    role: "Junior Accountant",
    description: "Supports clients with day-to-day financial accuracy and reporting.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    icon: Star,
    color: "from-purple-600 to-purple-800"
  },
  {
    name: "Nimisha",
    role: "Junior Accountant",
    description: "Ensuring accuracy and compliance in all financial processes while providing excellent client service.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    icon: Star,
    color: "from-pink-600 to-pink-800"
  }
];

export default function About() {
  return (
    <div className="bg-white">
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About 
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {' '}Finmount
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet the team driving financial and technological innovation for Irish businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="border-2 border-slate-100 transition-all duration-300 h-full text-center overflow-visible">
                    <div className="relative">
                        <div className={`h-20 rounded-t-lg bg-gradient-to-r ${member.color}`}></div>
                        <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-28 h-28 absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-4 ring-white group-hover:scale-110 group-hover:ring-blue-200 transition-all duration-300"
                        />
                    </div>
                    <CardContent className="pt-20 p-6">
                        <h3 className="text-xl font-bold text-slate-900 mt-4 mb-1">{member.name}</h3>
                        <p className={`font-semibold mb-2 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>{member.role}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {member.description}
                        </p>
                    </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-0 overflow-hidden">
              <CardContent className="p-12 relative text-center">
                <Target className="w-12 h-12 text-blue-400 absolute top-8 left-8 opacity-10" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                  "To empower Irish businesses with smart finance and smarter technology — affordably."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
