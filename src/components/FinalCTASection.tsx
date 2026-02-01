import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-stone-dark" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 gradient-radial-gold opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/30" />
      
      <div className="container relative z-10 text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="w-16 h-16 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 border-2 border-gold rotate-45" />
          <div className="absolute inset-2 border border-gold/50 rotate-45" />
        </motion.div>
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-alhabasy text-4xl md:text-5xl lg:text-7xl text-engraved text-gold mb-6 leading-tight"
        >
          The Sands of Time<br />Are Running
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-elegant text-xl md:text-2xl text-sand/80 max-w-2xl mx-auto mb-12 italic"
        >
          Seize your destiny. Claim your place among legends. 
          The gates of Epoch await those brave enough to enter.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-stone-dark font-display text-xl px-12 py-8 tracking-wider transition-all duration-300 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] animate-pulse-gold group"
          >
            Register Now
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
        
        {/* Bottom decorative text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-sand/40 font-display text-sm tracking-[0.5em] uppercase"
        >
          Become Eternal
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTASection;
