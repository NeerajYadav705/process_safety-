
import { motion } from 'framer-motion';
import { Award, Users, Globe, BookOpen, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';

const About = () => {
  const certifications = [
    {
      title: "Certified Process Safety Auditor (CPSA)",
      organization: "CCPS",
      icon: Award
    },
    {
      title: "Certified Functional Safety Professional (CFSP)",
      organization: "TÜV SÜD",
      icon: Shield
    },
    {
      title: "Professional Engineer (PE)",
      organization: "State Board",
      icon: BookOpen
    },
    {
      title: "HAZOP Leader Certification",
      organization: "IChemE",
      icon: Users
    }
  ];

  const companies = [
    "Shell", "ExxonMobil", "BP", "Chevron", "Total", "Saudi Aramco",
    "Petrobras", "Sinopec", "ADNOC", "PDVSA", "Gazprom", "Rosneft"
  ];

  const expertise = [
    "Process Hazard Analysis (PHA)",
    "HAZOP & LOPA Studies",
    "Safety Instrumented Systems (SIS)",
    "Quantitative Risk Assessment (QRA)",
    "Fire & Gas Detection Systems",
    "Emergency Response Planning",
    "Process Safety Management (PSM)",
    "Insurance Risk Engineering",
    "Regulatory Compliance Audits",
    "Training & Competency Development"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Meet Sunil – Your Process Safety Expert"
        description="Over 23 years of excellence in process safety management and risk engineering"
        backgroundImageNew="/assets/about.jpg"
      />

      {/* Personal Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="assets/sunil.png"
                  alt="Sunil - Process Safety Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">23+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Process Safety Partner
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Sunil is a highly experienced process safety professional with over 20 years of expertise 
                  in risk management, process safety management (PSM), and insurance risk engineering. 
                  He has worked with world-class organizations across the globe, delivering comprehensive 
                  safety solutions that protect lives, assets, and the environment.
                </p>
                
                <p>
                  With certifications including CPSA (Certified Process Safety Auditor) and CFSP 
                  (Certified Functional Safety Professional), Sunil brings deep technical knowledge 
                  and practical experience to every project. His expertise spans HAZOP studies, 
                  LOPA analysis, SIL verification, and comprehensive risk assessments.
                </p>
                
                <p>
                  Sunil's approach combines rigorous technical analysis with practical, implementable 
                  solutions. He has successfully completed over 600 risk assessments and has been 
                  instrumental in helping organizations achieve regulatory compliance while maintaining 
                  operational efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Memberships
            </h2>
            <p className="text-xl text-gray-600">
              Professionally certified and recognized by leading industry bodies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <cert.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.organization}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience with World-Class Organizations
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading companies in the oil & gas industry
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="text-sm py-2 px-4 bg-sage-light text-gray-800">
                  {company}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive process safety solutions across multiple disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
