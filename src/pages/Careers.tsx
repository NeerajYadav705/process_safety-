import { motion } from 'framer-motion';
import { Lightbulb, Users, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';

const Careers = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Innovative Projects",
      description: "Work on cutting-edge process safety projects with industry leaders worldwide"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a team of passionate professionals dedicated to safety excellence"
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Opportunities to work with international clients and diverse industries"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning and professional development opportunities"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Innovation starts with passion"
        description="Join our team of process safety experts and help protect lives, assets, and the environment worldwide"
        backgroundImageNew="https://img.freepik.com/free-photo/engineering-team-stands-beside-working-oil-pumps-with-sky_1150-19223.jpg?semt=ais_hybrid&w=740"
      />

      {/* Why Join Us */}
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
              Why Process Safety Support?
            </h2>
            <p className="text-xl text-gray-600">
              Build your career with industry leaders in process safety excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture of Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Process Safety Support, we believe that exceptional results come from 
                  exceptional people. Our team culture is built on collaboration, continuous 
                  learning, and a shared commitment to safety excellence.
                </p>
                <p>
                  We provide our team members with the tools, training, and opportunities 
                  they need to grow professionally while making a meaningful impact on 
                  industrial safety worldwide.
                </p>
                <p>
                  Join us and be part of a team that's setting new standards in process 
                  safety consulting and making the world a safer place.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Countries Served</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore exciting opportunities to advance your career in process safety
            </p>
            <p className="text-2xl text-gray-500">No current openings</p>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8">
              Join our team and help create safer industrial environments worldwide
            </p>
            <Button size="lg" variant="secondary" className="text-primary" asChild>
              <a href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
