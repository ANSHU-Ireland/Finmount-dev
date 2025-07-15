import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SendEmail } from '@/integrations/Core';
import { Send, CheckCircle, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      handleInputChange('service', service);
    }
  }, [location]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const emailBody = `
        New Contact Form Submission from Finmount Website
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service Interest: ${formData.service}
        Message:
        ${formData.message}
      `;
      await SendEmail({
        to: 'info@finmount.ie',
        subject: `New Finmount Contact Form Submission - ${formData.name}`,
        body: emailBody,
        from_name: 'Finmount Website'
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again.');
    }
    setIsSubmitting(false);
  };

  const services = ["Accounting", "Software Development", "Consulting", "Software Audit", "Other"];

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
            Get In 
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              {' '}Touch
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help. Reach out to us for a free consultation and discover how we can elevate your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <InfoCard icon={Mail} title="Email" content="info@finmount.ie" />
            <InfoCard icon={Phone} title="Phone & WhatsApp" content="Available on Request" />
            <InfoCard icon={MapPin} title="Address" content="Dublin, Ireland" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152478.1637775591!2d-6.385789419999999!3d53.3244431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1672886494747!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
             <Card className="border-2 border-slate-100 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for your inquiry. We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><Label htmlFor="name">Full Name *</Label><Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required /></div>
                      <div><Label htmlFor="email">Email *</Label><Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} /></div>
                      <div>
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                          <SelectContent>{services.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}</SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div><Label htmlFor="message">Message *</Label><Textarea id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} required rows={5} /></div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
                      {isSubmitting ? 'Sending...' : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                    </Button>
                  </form>
                )}
              </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoCard = ({ icon: Icon, title, content }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 flex items-center">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{title}</h4>
          <p className="text-slate-600">{content}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);
