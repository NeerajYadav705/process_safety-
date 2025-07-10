import { motion } from 'framer-motion';
import { Award, Users, Globe, BookOpen, Shield, Mail, Phone, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';

const About = () => {
  const certifications = [
    {
      title: "Certified Process Safety Auditor (CPSA)",
      organization: "Institute of Internal Auditors",
      icon: Award
    },
    {
      title: "Certified Functional Safety Professional (CFSP)",
      organization: "EXIDA",
      icon: Shield
    },
    {
      title: "Lead Auditor (ISO 9001, ISO 14001, OHSAS 18001)",
      organization: "DNV",
      icon: BookOpen
    },
    {
      title: "Member (Process Safety)",
      organization: "IChemE",
      icon: Users
    }
  ];

  const companies = [
    "ADNOC", "British Petroleum", "Technip FMC", "Kuwait Oil Company", "SPETCO", 
    "Future Generali", "Bajaj Allianz", "Acutech Consulting", "Det Norske Veritas (DNV)"
  ];

  const expertise = [
    "Process Safety Engineering",
    "Quantitative Risk Assessment (QRA)",
    "HAZID & HAZOP Studies",
    "Functional Safety (LOPA & SIL)",
    "Process Safety Management Systems",
    "Bow Tie Analysis",
    "Fire & Explosion Risk Assessment (FERA)",
    "Emergency Response Planning",
    "Facility Siting & Layout Design",
    "Technical Authority & Leadership",
    "Dispersion Analysis / Blast / Radiation Assessment",
    "Hazardous Area Classification Studies",
    "Emergency Escape & Rescue Analysis (EERA)",
    "Management of Change (MOC)",
    "Contractor & Vendor Management",
    "Root Cause Analysis (RCA)",
    "Process Safety Auditing",
    "ESD Philosophies",
    "HSE Critical Equipment Management"
  ];

  const trainings = [
    "Quantitative Risk Assessment (QRA)",
    "LOPA Studies & SIL Assessment",
    "Bow Tie Analysis",
    "Consequence Modeling (Shell Fred 6.1)",
    "Management of Change (MOC)",
    "SIMOPS Management",
    "Process Hazard Analysis (PHA)",
    "Pre-Startup Safety Reviews (PSSR)"
  ];

  const careerHistory = [
    {
      employer: "ADNOC Group",
      position: "Team Leader, Process Safety",
      period: "Mar 2022 – Feb 2023",
      responsibilities: [
        "Led a team of Process Safety Engineers providing influential leadership",
        "Conducted risk assessments and Process Hazard Analyses (PHA)",
        "Prepared Process Safety Scope of Work and managed tender processes",
        "Provided expert advice on Hazard and Effects Management Process (HEMP)",
        "Developed process safety objectives and strategies to mitigate risks",
        "Analyzed process safety incidents and implemented corrective actions",
        "Served as Technical Authority for engineering reviews (PHA, MOC, PSSR)",
        "Managed site PHA schedule and recommendation implementation",
        "Led Root Cause Analysis (RCA) investigations",
        "Developed & Implemented ADNOC PSM standard",
        "Led HSEIA Process completion and conducted internal audits",
        "Member of ADNOC DSS PSM Implementation Project Team"
      ]
    },
    {
      employer: "British Petroleum-ROO (WOOD PLC, Dubai & KBR)",
      position: "Lead Process Safety Engineer",
      period: "Sept 2018 – Mar 2022",
      responsibilities: [
        "Facilitated HAZID, WHATIF, HAZOP & SIL studies for projects",
        "Conducted Process Safety reviews for Management of Change",
        "Developed bow ties for existing facilities",
        "Implemented PSM and SIMOPS management",
        "Developed statements of requirements for Process Safety issues",
        "Conducted incident investigations and root cause analysis",
        "Reviewed and approved facility siting and layout designs",
        "Reviewed operations procedures and work packs for MOC implementation",
        "Conducted Process Safety audits for sites",
        "Responded to Technical Queries from Operations & maintenance"
      ]
    },
    {
      employer: "Technip FMC, Kuwait (Kuwait Oil Company Major Projects)",
      position: "Lead Design Engineer Process Safety",
      period: "Apr 2015 – Jun 2018",
      responsibilities: [
        "Served as Technical Authority for Process Safety for KOC projects",
        "Developed process safety studies for multimillion-dollar projects",
        "Worked on FEED and EPC projects of KOC",
        "Prepared ITB documents and evaluated technical bids",
        "Reviewed contractor work philosophies against KOC standards",
        "Participated in P&ID design reviews and safety studies (HAZID, HAZOP, SIL, QRA)",
        "Reviewed and closed action items from safety studies",
        "Developed and reviewed KOC standards for process safety"
      ]
    },
    {
      employer: "Acutech Consulting, Kuwait",
      position: "Senior Consultant (Process Safety)",
      period: "Jun 2014 – Jan 2015",
      responsibilities: [
        "Provided Process Safety consulting for Oil, Gas, and Petrochemical clients",
        "Participated in HAZOP and HAZID studies",
        "Advised on facility siting and layout based on consequence modelling",
        "Conducted LOPA, PHA, SIL, FMEA, Fault Tree and Event Tree Analysis",
        "Performed PSM Auditing"
      ]
    },
    {
      employer: "Earlier Career Highlights",
      position: "",
      period: "2002-2014",
      responsibilities: [
        "Senior HSE Engineer, EPF-50, SPETCO, Kuwait (2012-2014)",
        "QHSE Consultant Engineer: MTCPCO – Kuwait (2011-2012)",
        "Lead Auditor: Det Norske Veritas (DNV) – India (2010-2011)",
        "Deputy Manager – Risk Management: Future Generali GIC– India (2008-2010)",
        "Senior Risk Engineer: Bajaj Allianz GIC – India (2006-2008)",
        "Loss Adjuster: Cunningham Lindsey International – India (2005-2006)",
        "Trainee Engineer: Goodyear – India (2004-2005)",
        "Assistant Chemist: Hans Herbal Overseas – India (2002-2004)"
      ]
    }
  ];

  const references = [
    {
      name: "Siva Kannan",
      position: "Advisor GHSE",
      company: "ADNOC, Abu Dhabi, UAE",
      email: "skkannan@adnoc.ae",
      phone: "+971-567265294"
    },
    {
      name: "Tasaduq Hussain",
      position: "Retired Process Technical Authority",
      company: "British Petroleum, UK",
      email: "Thussain2012@outlook.com",
      phone: "+44(0)75355918"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Sunil Sori – Professional Process Safety Engineer"
        description="Over two decades of expertise in Process Safety, Risk Engineering & Technical Leadership"
        backgroundImageNew="/assets/about.jpg"
      />

      {/* Personal Bio */}
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
                  src="/assets/sunil.png"
                  alt="Sunil Sori - Process Safety Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">20+ yrs</div>
                <div className="text-sm">Process Safety Expertise</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Experienced & Globally Certified Process Safety Expert
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Sunil Sori holds an <strong>MSc. in Process Safety & Loss Prevention</strong> from the University of Sheffield (UK) and a <strong>BE in Chemical Engineering</strong>. With over 20 years of experience, he has delivered process safety assurance to major oil, gas, and insurance companies, leading multi-million-dollar projects worldwide.
                </p>
                <p>
                  As a <strong>Certified Process Safety Auditor (CPSA)</strong> and <strong>Certified Functional Safety Professional (CFSP)</strong>, Sunil brings deep expertise in QRA, HAZID, HAZOP, SIL studies, facility siting, and PSM implementation. His experience spans engineering design, operations, auditing, consulting, and risk engineering.
                </p>
                <p>
                  Sunil has worked with industry leaders including <strong>ADNOC, BP, Technip FMC, KOC</strong> and more. He is a recognized speaker at global conferences, known for combining technical rigor with practical, risk-based solutions.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <span>sorisunil@yahoo.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <span>+971-544398786</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span>1206, The Wave, Al-Reem Island, Abu Dhabi, UAE</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <span>Date of Birth: 21 January 1980</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href="https://www.linkedin.com/in/sunilsori/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary underline"
                  >
                    View LinkedIn Profile <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Memberships</h2>
            <p className="text-xl text-gray-600">Globally recognized professional credentials</p>
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

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-600">Comprehensive process safety solutions and leadership</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((skill, index) => (
              <motion.div key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}>
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career History */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">Two decades of process safety leadership across global organizations</p>
          </motion.div>

          <div className="space-y-12">
            {careerHistory.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="md:flex md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.employer}</h3>
                      {job.position && <p className="text-lg text-primary mt-1">{job.position}</p>}
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="secondary" className="text-sm py-2 px-4 bg-sage-light text-gray-800">
                        {job.period}
                      </Badge>
                    </div>
                  </div>
                  
                  <ul className="mt-6 space-y-3">
                    {job.responsibilities.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Trainings</h2>
            <p className="text-xl text-gray-600">Specialized training from industry leaders</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((training, index) => (
              <motion.div key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}>
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{training}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Worked With */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Organizations Worked With</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders across the globe</p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            {companies.map((company, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}>
                <Badge variant="secondary" className="text-sm py-2 px-4 bg-sage-light text-gray-800">
                  {company}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Conferences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Conference Participation</h2>
            <p className="text-xl text-gray-600">Recognized speaker at international forums</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Global Process Safety Conference</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Year:</strong> 2022</p>
                  <p><strong>Location:</strong> Dubai, UAE</p>
                  <p>Presented on advanced process safety methodologies and case studies from major oil and gas projects in the Middle East.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">2nd Annual Asset Integrity and Process Safety Oil & Gas Conference</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Year:</strong> 2022</p>
                  <p><strong>Location:</strong> Abu Dhabi, UAE</p>
                  <p>Shared insights on implementing effective Process Safety Management systems in large-scale energy facilities.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional References</h2>
            <p className="text-xl text-gray-600">Available upon request</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{ref.name}</h3>
                  <p className="text-primary mb-1">{ref.position}</p>
                  <p className="text-gray-600 mb-4">{ref.company}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-500 mr-2" />
                      <a href={`mailto:${ref.email}`} className="text-gray-700 hover:text-primary">{ref.email}</a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">{ref.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;