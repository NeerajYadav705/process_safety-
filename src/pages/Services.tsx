import { motion } from 'framer-motion';
import { Map, LayoutGrid, Shield, Flame, AlertTriangle, CheckCircle, ArrowRight, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      title: "Facility Siting & Layout Studies",
      description: "Comprehensive safety and design evaluations to optimize industrial facility layouts while minimizing risks",
      icon: Map,
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "API RP 752/753 Compliance",
        "Quantitative Risk Assessment",
        "Hazard Impact Zone Mapping",
        "Emergency Response Integration"
      ],
      details: {
        purpose: [
          "Reduce risk to personnel and assets from fire, explosion, and toxic release",
          "Ensure compliance with safety regulations (OSHA, NFPA, API)",
          "Support efficient operations and emergency response",
          "Optimize space utilization and future expansion"
        ],
        elements: [
          {
            title: "Siting Analysis",
            icon: Map,
            items: [
              "Evaluation of nearby communities and environmental factors",
              "Assessment of natural hazards (flood zones, seismic activity)",
              "Impact zone analysis for explosions and toxic releases",
              "QRA-based safe distance definitions"
            ]
          },
          {
            title: "Layout Planning",
            icon: LayoutGrid,
            items: [
              "Optimal arrangement of process units and storage tanks",
              "Control room location analysis",
              "Utility systems placement",
              "Emergency facility positioning"
            ]
          },
          {
            title: "Hazard Impact Zones",
            icon: Flame,
            items: [
              "Thermal radiation mapping (fire scenarios)",
              "Overpressure analysis (explosion scenarios)",
              "Toxic gas dispersion modeling",
              "Critical building protection analysis"
            ]
          },
          {
            title: "Emergency Planning",
            icon: AlertTriangle,
            items: [
              "Escape route design",
              "Muster area placement",
              "Rescue access planning",
              "EERA (Escape, Evacuation, and Rescue Analysis)"
            ]
          }
        ],
        deliverables: [
          "2D/3D facility layout drawings with hazard zones",
          "Impact zone maps from QRA modeling",
          "Comprehensive risk assessment report",
          "Layout optimization recommendations",
          "Regulatory compliance documentation"
        ]
      }
    }
  ];

  const additionalServices = [
    {
      question: "Quantitative Risk Assessment (QRA)",
      answer: "Advanced QRA studies incorporating fire, explosion, and toxic release scenarios using industry-standard software (PHAST, FLACS, etc.) to quantify risks and recommend mitigation measures."
    },
    {
      question: "Process Hazard Analysis (PHA/HAZOP)",
      answer: "Systematic examination of process systems to identify and evaluate potential hazards, with comprehensive documentation of safeguards and recommendations."
    },
    {
      question: "Safety Integrity Level (SIL) Assessment",
      answer: "Determination of required Safety Integrity Levels for safety instrumented functions, including verification of existing SIS systems."
    },
    {
      question: "Fire Protection System Design",
      answer: "Optimized design of firewater systems, deluge systems, and fireproofing requirements based on hazard analysis and spacing considerations."
    },
    {
      question: "Occupied Building Risk Assessment",
      answer: "Evaluation of permanent and temporary occupied buildings against explosion, fire, and toxic release hazards per API RP 752/753 standards."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Facility Siting & Safety Services"
        description="Expert evaluations to optimize your facility layout while ensuring maximum safety and regulatory compliance"
        backgroundImageNew="https://new.abb.com/images/librariesprovider87/drives-global/drives-frontpage-segment-oilgas.jpg?sfvrsn=82109a0a_0"
      />

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg text-white/90 mb-4 max-w-lg">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((highlight, i) => (
                          <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Purpose Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      Study Purpose
                    </h3>
                    <ul className="space-y-3">
                      {service.details.purpose.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Elements */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Elements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.details.elements.map((element, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                              <element.icon className="h-5 w-5 text-primary" />
                              <CardTitle className="text-lg">{element.title}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              {element.items.map((item, j) => (
                                <li key={j} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <ClipboardList className="h-8 w-8 text-primary mr-3" />
              Study Deliverables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation to support your safety and design decisions
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {mainServices[0].details.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complementary Services
            </h2>
            <p className="text-xl text-gray-600">
              Integrated solutions to address all your process safety needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {additionalServices.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-6 hover:border-primary transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary py-4">
                    {service.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Optimize Your Facility Safety
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get expert facility siting analysis and layout recommendations tailored to your specific operational needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary" asChild>
                <Link to="/contact">
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary" asChild>
                <Link to="/case-studies">
                  View Case Studies
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