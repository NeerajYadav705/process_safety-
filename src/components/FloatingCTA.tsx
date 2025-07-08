
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 3, type: "spring" }}
    >
      <motion.div
        className="relative"
        animate={isOpen ? { scale: 1 } : { scale: 1 }}
      >
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl p-4 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h3 className="font-bold text-gray-900 mb-3">Get in Touch</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href="mailto:enquiry@processsafetysupport.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href="/contact">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Form
                </a>
              </Button>
            </div>
          </motion.div>
        )}
        
        <motion.button
          className="bg-primary hover:bg-primary/90 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCTA;
