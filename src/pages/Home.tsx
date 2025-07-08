import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";
import { useState, useEffect } from "react";

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [counters, setCounters] = useState({
    assessments: 0,
    experience: 0,
    projects: 0,
    satisfaction: 0,
  });

  const services = [
    {
      title: "Process Safety Management",
      description:
        "Comprehensive PSM support including risk assessments, HAZOP studies, and compliance audits.",
      icon: Shield,
      // for using images from asstes
      // image: "assets/image.jpg"
      image:
        "https://business.libertymutual.com/wp-content/uploads/2021/02/occupational-hazards-in-the-oil-and-gas-industry-5-important-ways-to-reduce-risk.jpg",
    },
    {
      title: "Insurance Studies",
      description:
        "Risk engineering and loss prevention studies for insurance and regulatory compliance.",
      icon: TrendingUp,
      image:
        "https://business.libertymutual.com/wp-content/uploads/2022/05/EnergySupplyChain-768x432.jpg",
    },
  ];

  const stats = [
    { number: "160+", label: "PSM", target: 160 },
    { number: "23+", label: "Years Experience", target: 23 },
    { number: "20+", label: "Major Projects", target: 20 },
    { number: "100%", label: "Client Satisfaction", target: 100 },
  ];

  const industries = [
    "Mining",
    "LNG",
    "Oil & Gas Exploration & Production",
    "Petrochemical/Chemical",
    "Pipelines",
    "Port and Terminals",
    "Power & Energy",
    "Petroleum Refining",
    "Pharamaceutical",
  ];

  const industryImagesRow1 = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQDjrfYRZYKuu8RTiu-juN84jsiuMlr0kTw&s",
      title: "Mining",
      description: "Complex refinery operations",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhVhum_ED64vcnDlehM82K5CmXr52tXVcXQ&s",
      title: "LNG",
      description: "Advanced automation technology",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzk44xkvpvG1LhIubh_2vJfI-mI9sgD6lQRA&s",
      title: "Oil & Gas Exploration & Production",
      description: "Industrial chemical processes",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/TASNEE_001.jpg/1200px-TASNEE_001.jpg",
      title: "Petrochemical/Chemical",
      description: "Liquefied natural gas operations",
    },
    {
      src: "https://5.imimg.com/data5/AA/JY/LW/SELLER-11591577/oil-gas-and-water-pipelines.jpg",
      title: "Pipelines",
      description: "Energy production facilities",
    },
  ];

  const industryImagesRow2 = [
    {
      src: "https://www.searates.com/design/images/import/blog-uploads/img-1728290735-3412.jpg",
      title: "Port and Terminals",
      description: "Complex facility management",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdzTT2tz0SZ51nn4iE8_YpGnMvIul_TFlQA&s",
      title: "Power & Energy",
      description: "Production facility safety",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnHdW44kkfgP3W3DWQzF-5tRNcZlhV5FLUA&s",
      title: "Petroleum Refining",
      description: "Advanced industrial systems",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsm9k1hs1AfUfkymgGZSbqolusCJIgsc-C8g&s",
      title: "Pharamaceutical",
      description: "Operations monitoring centers",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          assessments: Math.floor(600 * progress),
          experience: Math.floor(20 * progress),
          projects: Math.floor(50 * progress),
          satisfaction: Math.floor(100 * progress),
        });

        if (step >= steps) clearInterval(interval);
      }, increment);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <ScrollProgress />
      <ParticleBackground />
      <FloatingCTA />

      <HeroSection
        title="Safety Advisor Hub™ – quick, reliable help"
        subtitle="Process Safety Support 2025"
        description="Leading process safety expert Sunil provides comprehensive risk management solutions for the oil & gas industry worldwide."
        ctaText="Meet Sunil"
        ctaLink="/about"
        backgroundImageNew="https://fpimages.withfloats.com/actual/60e003da8172b4000108ce39.jpg"
      />

      <section className="py-20 bg-gradient-section relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-earth/10"
          style={{ y: y1 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-primary mb-2 relative"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(212, 163, 115, 0.5)",
                        "0 0 30px rgba(212, 163, 115, 0.8)",
                        "0 0 20px rgba(212, 163, 115, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {index === 0 && `${counters.assessments}+`}
                    {index === 1 && `${counters.experience}+`}
                    {index === 2 && `${counters.projects}+`}
                    {index === 3 && `${counters.satisfaction}%`}

                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Star className="h-6 w-6 text-earth fill-current" />
                    </motion.div>
                  </motion.div>

                  <div className="text-gray-600 font-medium group-hover:text-primary transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-sage/20 to-cream/20 rounded-full blur-3xl"
          style={{ y: y2 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  // src="/assets/sunil.png"
                  src="https://www.trainanddevelop.ca/wp-content/uploads/2020/03/oil-worker-e1585261896180.jpg"
                  alt="Sunil - Process Safety Expert"
                  className="w-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="h-6 w-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <motion.div
                  className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-earth rounded-full"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 pl-8">
                  Meet Your Process Safety Expert
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-8 w-8 text-earth" />
                  </motion.span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed pl-8">
                With over 20 years of experience in process safety management
                and risk engineering, Sunil has worked with world-class
                organizations to ensure safety, compliance, and operational
                excellence.
              </p>

              <p className="text-lg text-gray-600 pl-8">
                Certified Professional (CPSA, CFSP) with expertise in HAZOP,
                LOPA, SIL studies, and comprehensive risk assessments across
                various industries.
              </p>

              <motion.div
                className="pl-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-lg"
                  asChild
                >
                  <a href="/about">
                    Learn More About Sunil
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-section relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
              <motion.span
                className="block h-1 w-24 bg-gradient-to-r from-primary to-earth mx-auto mt-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive process safety solutions tailored to your industry
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="perspective-1000"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <motion.div
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="h-8 w-8 text-primary" />
                    </motion.div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <CardHeader>
                    <CardDescription className="text-base text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay compliant, stay protected, stay ahead
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-earth mx-auto mb-12"></div>
          </motion.div>

          <div className="mb-12 overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...industryImagesRow1, ...industryImagesRow1].map(
                (industry, index) => (
                  <motion.div
                    key={index}
                    className="relative group flex-shrink-0 w-80 h-48 rounded-xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={industry.src}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">
                        {industry.title}
                      </h3>
                      <p className="text-sm opacity-80">
                        {industry.description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Shield className="h-6 w-6 text-white/80" />
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>

          <div className="mb-12 overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...industryImagesRow2, ...industryImagesRow2].map(
                (industry, index) => (
                  <motion.div
                    key={index}
                    className="relative group flex-shrink-0 w-80 h-48 rounded-xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={industry.src}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">
                        {industry.title}
                      </h3>
                      <p className="text-sm opacity-80">
                        {industry.description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <TrendingUp className="h-6 w-6 text-white/80" />
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-sage-light to-cream rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-lg group-hover:text-primary transition-colors duration-300">
                      {industry}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Comprehensive safety solutions
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
{/* TESTIMONIALS */}
<section className="py-20 bg-gradient-to-b from-white to-sage-light/20 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-earth rounded-full filter blur-3xl opacity-20"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Client Testimonials
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Hear what our clients say about our services
      </p>
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-primary to-earth mx-auto mt-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="h-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-2xl flex items-center justify-center">
            <Quote className="h-8 w-8 text-primary rotate-180" />
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 mr-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client"
                className="h-14 w-14 rounded-full object-cover border-2 border-primary/30"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Michael Johnson</h4>
              <p className="text-sm text-gray-500">Safety Manager, OilCo</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            "Sunil's expertise in PSM implementation was invaluable for our refinery. 
            His risk assessments identified critical gaps we had missed for years."
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 to-earth/30"></div>
        </div>
      </motion.div>

      {/* Testimonial 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="h-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-2xl flex items-center justify-center">
            <Quote className="h-8 w-8 text-primary rotate-180" />
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 mr-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Client"
                className="h-14 w-14 rounded-full object-cover border-2 border-primary/30"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Sarah Williams</h4>
              <p className="text-sm text-gray-500">Operations Director, PetroChem</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            "The insurance risk engineering study saved us millions in premiums. 
            Process Safety Support delivers exceptional value with their deep industry knowledge."
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 to-earth/30"></div>
        </div>
      </motion.div>

      {/* Testimonial 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="h-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-2xl flex items-center justify-center">
            <Quote className="h-8 w-8 text-primary rotate-180" />
          </div>
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 mr-4">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Client"
                className="h-14 w-14 rounded-full object-cover border-2 border-primary/30"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">David Chen</h4>
              <p className="text-sm text-gray-500">VP Engineering, GasGlobal</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            "We've worked with many consultants, but Sunil's approach to SIL 
            classification was the most thorough we've seen. Regulatory compliance 
            has never been easier."
          </p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 to-earth/30"></div>
        </div>
      </motion.div>
    </div>

 
  </div>
</section>
{/* END TESTIMONIALS */}




      {/* END TESTIMONIALS */}

      {/* add a business card */}
      <div className="m-12 flex justify-center">
        <motion.div
          className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 max-w-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="/assets/business.png" // replace with your actual image path, or external URL
            alt="Our Certifications"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
      {/* business card end */}

      <section className="py-20 bg-gradient-to-r from-primary via-earth to-sage text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(212,163,115,0.8), rgba(204,213,174,0.8))",
              "linear-gradient(135deg, rgba(204,213,174,0.8), rgba(212,163,115,0.8))",
              "linear-gradient(45deg, rgba(212,163,115,0.8), rgba(204,213,174,0.8))",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Enhance Your Process Safety?
            </motion.h2>

            <p className="text-xl mb-8 opacity-90">
              Get expert consultation and comprehensive risk assessment for your
              facility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-primary shadow-lg"
                  asChild
                >
                  <a href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-primary shadow-lg"
                  asChild
                >
                  <a href="/services">View Services</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
