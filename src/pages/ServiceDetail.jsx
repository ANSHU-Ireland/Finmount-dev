import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { CheckCircle, ArrowRight, HelpCircle, Lightbulb } from 'lucide-react';

const serviceData = {
  'chartered-accounting': {
    title: 'Chartered Accounting',
    headline: 'Expert Chartered Accounting Services for Irish SMEs',
    description: 'Finmount provides ACCA-certified chartered accounting services tailored for Small and Medium-sized Enterprises (SMEs) across Ireland. We ensure your financial statements are accurate, compliant, and insightful, empowering you to make informed business decisions.',
    whyChooseUs: [
      { title: 'ACCA Certified', description: 'Our team, led by an 11-year experienced chartered accountant, guarantees the highest standards of professionalism and expertise.' },
      { title: 'SME Focused', description: 'We understand the unique challenges and opportunities for SMEs in the Irish market, providing tailored advice and support.' },
      { title: 'Affordable Rates', description: 'Access top-tier accounting services at the most competitive rates in Ireland, without compromising on quality.' },
    ],
    whatWeOffer: [
      'Annual financial statement preparation (FRS 102 & FRS 105)',
      'Management accounts and performance analysis',
      'Corporate tax returns (CT1) and iXBRL filing',
      'Independent audit and assurance services',
      'Liaison with financial institutions and investors',
    ],
    process: [
      { step: 1, title: 'Initial Consultation', description: 'We start with a deep dive into your business to understand your financial structure and goals.' },
      { step: 2, title: 'Data Management', description: 'We set up secure, cloud-based systems for efficient data collection and bookkeeping.' },
      { step: 3, title: 'Reporting & Analysis', description: 'Receive timely, accurate financial reports with expert analysis and actionable insights.' },
      { step: 4, title: 'Strategic Review', description: 'Regular meetings to review performance and provide strategic financial advice for future growth.' },
    ],
    faqs: [
      { q: 'What is a chartered accountant?', a: 'A chartered accountant is a globally recognized professional who has completed rigorous training and examinations in accounting, finance, and business, and is a member of a professional body like ACCA.' },
      { q: 'Why do I need a chartered accountant for my SME?', a: 'They provide credibility to your financial statements, ensure you are compliant with all Irish regulations, offer strategic tax advice, and can significantly help in securing funding or investment.' },
    ],
    color: 'blue'
  },
  'vat-returns-and-compliance': {
    title: 'VAT Returns & Compliance',
    headline: 'Stress-Free VAT Compliance for Your Business in Ireland',
    description: 'Navigating the complexities of Value Added Tax (VAT) in Ireland can be challenging. Finmount offers comprehensive VAT services, from registration and filing to compliance checks and advisory, ensuring you meet all your obligations to Revenue accurately and on time.',
    whyChooseUs: [
        { title: 'Revenue Compliance', description: 'We ensure your VAT returns are fully compliant with the latest Irish and EU regulations, minimizing the risk of audits and penalties.' },
        { title: 'Time-Saving', description: 'Outsource your VAT management to us and free up valuable time to focus on running your core business.' },
        { title: 'Cash Flow Optimization', description: 'We provide strategic advice on VAT schemes (e.g., cash receipts basis) to help optimize your business cash flow.' },
    ],
    whatWeOffer: [
        'VAT registration and de-registration services',
        'Preparation and submission of bi-monthly/annual VAT returns',
        'VAT on property transactions advice',
        'Cross-border VAT compliance (EU and international)',
        'Assistance with Revenue VAT audits and inquiries',
    ],
    process: [
        { step: 1, title: 'VAT Assessment', description: 'We review your business activities to determine your VAT obligations and the most suitable scheme.' },
        { step: 2, title: 'System Setup', description: 'We help configure your accounting software for correct VAT tracking and reporting.' },
        { step: 3, title: 'Return Preparation', description: 'Our team meticulously prepares your VAT return, ensuring all applicable reliefs are claimed.' },
        { step: 4, title: 'Filing & Confirmation', description: 'We file the return with Revenue via ROS and provide you with confirmation and liability details.' },
    ],
    faqs: [
        { q: 'What are the current VAT rates in Ireland?', a: 'Ireland has several VAT rates, including the standard rate of 23%, a reduced rate of 13.5%, a second reduced rate of 9%, and a zero rate for certain goods and services.' },
        { q: 'What is the registration threshold for VAT in Ireland?', a: 'The main thresholds are €75,000 for the supply of goods and €37,500 for the supply of services in a 12-month period. We can advise on your specific situation.' },
    ],
    color: 'blue'
  },
  'custom-web-applications': {
    title: 'Custom Web Applications',
    headline: 'Bespoke Web Applications to Drive Your Business Forward',
    description: 'Move beyond off-the-shelf software with custom web applications built by Finmount. Our solutions are designed to solve your unique business challenges, streamline workflows, and provide a seamless experience for your team and customers.',
    whyChooseUs: [
        { title: 'Finance-Integrated', description: 'As an accounting firm, we uniquely understand how to build applications that integrate deeply with your financial processes.' },
        { title: 'Scalable Architecture', description: 'We use modern technologies like React and Node.js to build scalable, secure, and maintainable applications that grow with your business.' },
        { title: 'Affordable for SMEs', description: 'Leverage our competitive Irish rates to get a custom solution for a price comparable to complex subscription software.' },
    ],
    whatWeOffer: [
        'Custom CRM and ERP systems',
        'Client portals and dashboards',
        'E-commerce platforms with payment gateway integration',
        'Internal process automation tools',
        'API development and integration services',
    ],
    process: [
        { step: 1, title: 'Discovery & Strategy', description: 'We collaborate with you to define project goals, user stories, and a detailed technical specification.' },
        { step: 2, title: 'UI/UX Design', description: 'Our design phase focuses on creating an intuitive, user-friendly interface that maximizes productivity.' },
        { step: 3, title: 'Agile Development', description: 'We build your application in sprints, with regular demos and feedback sessions to ensure alignment.' },
        { step: 4, title: 'Deployment & Support', description: 'We handle the deployment to secure cloud infrastructure and provide ongoing support and maintenance.' },
    ],
    faqs: [
        { q: 'How long does it take to build a custom web app?', a: 'The timeline varies based on complexity. A simple Minimum Viable Product (MVP) can take 4-8 weeks, while more complex systems can take 3-6 months or longer.' },
        { q: 'Do I own the source code?', a: 'Yes, absolutely. Upon final payment, you receive full ownership of the intellectual property and source code for your custom application.' },
    ],
    color: 'emerald'
  },
};

const getFallbackData = (slug) => {
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
        title,
        headline: `Expert ${title} Services in Ireland`,
        description: `Finmount offers comprehensive ${title} services tailored for Irish businesses. Our expert team provides affordable, high-quality solutions to help you succeed. Contact us today to learn more about how we can help your SME thrive.`,
        whyChooseUs: [
            { title: 'Expert Team', description: 'Our professionals have extensive experience in their fields.' },
            { title: 'Affordable Rates', description: 'We offer the most competitive pricing for SMEs in Ireland.' },
            { title: 'Client-Focused', description: 'Your business goals are our top priority.' },
        ],
        whatWeOffer: ['Tailored Solutions', 'Strategic Advice', 'Compliance and Reporting', 'Dedicated Support'],
        process: [
            { step: 1, title: 'Consultation', description: 'We discuss your needs to create a tailored plan.' },
            { step: 2, title: 'Implementation', description: 'Our team gets to work, providing expert service.' },
            { step: 3, title: 'Review', description: 'We review the results with you to ensure satisfaction.' },
        ],
        faqs: [{ q: `Why choose Finmount for ${title}?`, a: `We combine deep industry expertise with a commitment to affordability and client success, making us the ideal partner for Irish SMEs.` }],
        color: title.toLowerCase().includes('software') || title.toLowerCase().includes('web') || title.toLowerCase().includes('automation') || title.toLowerCase().includes('cloud') || title.toLowerCase().includes('api') || title.toLowerCase().includes('mobile') ? 'emerald' : 'blue'
    }
};

export default function ServiceDetail() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const serviceSlug = params.get('name');

    if (!serviceSlug) {
        return <div className="text-center py-24">Invalid service specified.</div>;
    }

    const service = serviceData[serviceSlug] || getFallbackData(serviceSlug);
    const { title, headline, description, whyChooseUs, whatWeOffer, process, faqs, color } = service;

    return (
        <div className="bg-white">
            <div className={`py-24 bg-gradient-to-br from-${color}-50 to-white`}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Badge className={`bg-${color}-100 text-${color}-700 border-${color}-200 mb-4`}>Our Services</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{headline}</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">{description}</p>
                    </motion.div>
                </div>
            </div>

            <div className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">What Our {title} Service Includes</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {whatWeOffer.map((item, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className={`w-6 h-6 text-${color}-500 mt-1 flex-shrink-0`} />
                                    <p className="text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Streamlined Process</h2>
                        <div className="relative border-l-2 border-dashed border-slate-300">
                            {process.map((item, index) => (
                                <div key={index} className="mb-8 ml-8">
                                    <div className={`absolute -left-4 mt-1 w-8 h-8 bg-${color}-500 rounded-full text-white flex items-center justify-center font-bold`}>{item.step}</div>
                                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                     <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Card key={index} className="border-slate-200">
                                    <CardHeader className="p-4"><div className="flex items-start space-x-4"><HelpCircle className="w-6 h-6 text-slate-500 mt-1"/><h4 className="font-semibold text-slate-800">{faq.q}</h4></div></CardHeader>
                                    <CardContent className="p-4 pt-0 pl-14"><p className="text-slate-600">{faq.a}</p></CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <aside className="space-y-8">
                     <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <Card className={`bg-gradient-to-br from-${color}-500 to-${color}-600 text-white`}>
                             <CardHeader><CardTitle className="text-2xl flex items-center gap-2"><Lightbulb /> Why Choose Finmount?</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index}><h4 className="font-bold">{item.title}</h4><p className={`text-${color}-100`}>{item.description}</p></div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <Card className="text-center p-6 bg-slate-50">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Get Started?</h3>
                            <p className="text-slate-600 mb-4">Let's discuss how we can help your business.</p>
                            <Link to={createPageUrl(`Contact?service=${title}`)}>
                                <Button className={`w-full bg-${color}-600 hover:bg-${color}-700 text-white`}>Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4"/></Button>
                            </Link>
                        </Card>
                    </motion.div>
                </aside>
            </div>
        </div>
    );
}
