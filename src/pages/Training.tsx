import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const Training = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with decades of experience"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Materials",
      description: "Detailed course materials, case studies, and reference guides"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive official completion certificates for professional development"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "On-site, virtual, or customized training options available"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Professional Training Programs"
        description="Comprehensive process safety training to develop your team's expertise and ensure operational excellence"
        backgroundImageNew="https://techehs.com/wp-content/uploads/2025/05/Adapting-BBS-banner.png"
      />

      {/* Features Section */}
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
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600">
              World-class training programs designed for practical application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive curriculum covering all aspects of process safety
            </p>
            <p className="text-2xl text-gray-500">Coming Soon...</p>
          </motion.div>
        </div>
      </section>

      {/* Custom Training Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Custom Training?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We can develop customized training programs tailored to your specific 
              industry needs, processes, and organizational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
    <Link to="/contact">
      Request Custom Training
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  </Button>
  <Button size="lg" variant="outline" asChild>
    <Link to="/services">
      View All Services
    </Link>
  </Button>
</div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
