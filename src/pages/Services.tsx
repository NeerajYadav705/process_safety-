
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      title: "Process Safety Management (PSM) Support",
      description: "Comprehensive PSM implementation and compliance support",
      icon: Shield,
      image: "https://cdn.prod.website-files.com/5f960395a15dd4622d1d9613/5febea9f74e5a8d02651c5ef_PSM-Body.jpg",
      details: [
        "PSM Program Development & Implementation",
        "Process Hazard Analysis (PHA) & HAZOP Studies",
        "Layer of Protection Analysis (LOPA)",
        "Safety Instrumented Systems (SIS) Design",
        "Management of Change (MOC) Procedures",
        "Incident Investigation & Root Cause Analysis",
        "PSM Audits & Compliance Reviews",
        "Pre-Startup Safety Reviews (PSSR)"
      ]
    },
    {
      title: "Insurance Risk Engineering & Loss Prevention",
      description: "Specialized risk assessment and loss prevention studies for insurance purposes",
      icon: TrendingUp,
      image: "https://www.uniqa-sustainable.com/wp-content/uploads/2024/06/Nachhaltigkeitsloesungen.webp",
      details: [
        "Property Risk Assessments",
        "Business Interruption Analysis",
        "Natural Catastrophe Risk Evaluation",
        "Fire & Explosion Risk Analysis",
        "Maximum Probable Loss (MPL) Studies",
        "Risk Improvement Recommendations",
        "Insurance Technical Due Diligence",
        "Regulatory Compliance Reviews"
      ]
    }
  ];

  const additionalServices = [
    {
      question: "Quantitative Risk Assessment (QRA)",
      answer: "Comprehensive QRA studies including fire, explosion, and toxic release scenarios. We use advanced modeling software to quantify risks and provide recommendations for risk reduction measures."
    },
    {
      question: "Safety Instrumented Systems (SIS) Design & Verification",
      answer: "Complete SIS lifecycle support from conceptual design to verification and testing. We ensure your safety systems meet the required Safety Integrity Level (SIL) requirements."
    },
    {
      question: "Emergency Response Planning",
      answer: "Development of comprehensive emergency response plans, evacuation procedures, and crisis management protocols. Includes training and drill coordination."
    },
    {
      question: "Regulatory Compliance Audits",
      answer: "Thorough audits to ensure compliance with OSHA PSM, EPA RMP, and other relevant safety regulations. We provide detailed compliance reports and improvement recommendations."
    },
    {
      question: "Fire & Gas Detection System Design",
      answer: "Design and optimization of fire and gas detection systems using advanced modeling techniques. Includes detector placement studies and system integration recommendations."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        description="Comprehensive process safety solutions tailored to protect your people, assets, and operations"
        backgroundImageNew="https://www.si.endress.com/__image/a/9355623/k/5f49de274d1005548118661bd7be1fd26dbd4b9c/ar/16-9/w/771/t/jpg/b/ffffff/fn/20140924_8W6A6630.jpg"
      />

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-2xl w-full"
                    />
                    <div className="absolute top-6 left-6 p-3 bg-primary rounded-full">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Know More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for your unique process safety challenges
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {additionalServices.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                    {service.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                    {service.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Process Safety?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for a comprehensive consultation and customized solution
            </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button size="lg" variant="secondary" className="text-primary" asChild>
    <Link to="/contact">
      Get Consultation
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  </Button>
  <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary" asChild>
    <Link to="/training">
      View Training Programs
    </Link>
  </Button>
</div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
