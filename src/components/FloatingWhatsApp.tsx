import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = '+918410532027'; // Replace with your WhatsApp number
  const message = 'Hello, I have a question about your services'; // Optional pre-filled message

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
    </motion.div>
  );
};

export default FloatingWhatsApp;