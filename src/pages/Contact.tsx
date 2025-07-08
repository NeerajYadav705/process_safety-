
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Facebook, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "enquiry@processsafetysupport.com",
      link: "mailto:enquiry@processsafetysupport.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Houston, TX, USA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "#",
      color: "hover:text-pink-600"
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "#",
      color: "hover:text-blue-800"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        description="Ready to enhance your process safety? Contact us for expert consultation and customized solutions"
        backgroundImageNew="https://techehs.com/wp-content/uploads/2025/05/Adapting-BBS-banner.png"
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let's Start the Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you need process safety consultation, risk assessment, or training services, 
                we're here to help. Contact us today to discuss your specific requirements and 
                learn how we can support your safety objectives.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-primary/10 rounded-full">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{info.title}</h3>
                            <a 
                              href={info.link}
                              className="text-gray-600 hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className={`p-3 bg-gray-100 rounded-full text-gray-600 ${social.color} transition-all duration-300 hover:shadow-md`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" type="text" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" type="text" placeholder="Doe" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" type="text" placeholder="Your Company Name" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <select 
                        id="service" 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="psm">Process Safety Management</option>
                        <option value="insurance">Insurance Risk Engineering</option>
                        <option value="training">Training Programs</option>
                        <option value="qra">Quantitative Risk Assessment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project requirements or questions..." 
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600">
              Centrally located in Houston's Energy Corridor
            </p>
          </motion.div>

         <motion.div
  className="bg-white rounded-lg shadow-xl overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="aspect-video">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8356132.6105760215!2d80.92063598097847!3d25.382089643501924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14b1bd30ba5%3A0x860e5d531eccb20c!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1751809877792!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help improve your process safety management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary" asChild>
                <a href="mailto:enquiry@processsafetysupport.com">
                  Email Us Directly
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="/services">
                  View Our Services
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
