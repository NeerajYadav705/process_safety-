
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Star } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImageNew?: string;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImageNew = "https://fpimages.withfloats.com/actual/60e003da8172b4000108ce39.jpg",
  className = ""
}: HeroSectionProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <motion.div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImageNew})`,
            scale: 1.1,
            x: mousePosition.x * 20 - 10,
            y: mousePosition.y * 20 - 10
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </motion.div>

      {/* Animated Overlay Patterns */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 border border-white/20 rounded-full"
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1] 
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <Shield className="h-6 w-6 text-white/30" />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Content */}
      <motion.div 
        className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {subtitle && (
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star className="h-6 w-6 text-cream mr-3" />
              </motion.div>
              
              <p className="text-xl md:text-2xl text-cream font-light tracking-wide">
                {subtitle}
              </p>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star className="h-6 w-6 text-cream ml-3" />
              </motion.div>
            </motion.div>
          )}
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.span
              className="inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(212, 163, 115, 0.8)",
                  "0 0 40px rgba(212, 163, 115, 1)",
                  "0 0 20px rgba(212, 163, 115, 0.8)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {title}
            </motion.span>
          </motion.h1>

          {description && (
            <motion.p
              className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {description}
            </motion.p>
          )}

          {ctaText && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-earth hover:from-primary/90 hover:to-earth/90 text-white px-10 py-4 text-lg shadow-2xl"
                  asChild
                >
                  <a href={ctaLink || '#'}>
                    {ctaText}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button> */}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center relative">
          <motion.div 
            className="w-1.5 h-4 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </div>
        {/* <p className="text-white text-sm mt-2 font-light">Scroll Down</p> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
