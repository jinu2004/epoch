import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section ref={ref} className="py-24 lg:py-40 relative overflow-hidden">
      {/* Papyrus background */}
      <div className="absolute inset-0 papyrus-bg" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <filter id="paper">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="#d4af37" surfaceScale="2">
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
          </filter>
          <rect width="100" height="100" filter="url(#paper)" opacity="0.3" />
        </svg>
      </div>
      
      {/* Decorative hieroglyphic borders */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-dark to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-stone-dark to-transparent" />
      
      {/* Left border decoration */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-dark/50 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold-dark/50 to-transparent hidden lg:block" />
      
      <motion.div 
        style={{ opacity, y }}
        className="container relative z-10 max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-dark" />
          <div className="w-4 h-4 rotate-45 border-2 border-gold-dark" />
          <span className="text-stone-dark font-display text-lg font-bold uppercase px-4">The Legend</span>
          <div className="w-4 h-4 rotate-45 border-2 border-gold-dark" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-dark" />
        </motion.div>
        
        {/* Story content */}
        <div className="space-y-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-alhabasy text-2xl md:text-3xl lg:text-4xl text-stone-dark leading-relaxed italic"
          >
            "In the shadow of the eternal pyramids, where the sands whisper secrets of ancient glory..."
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-stone-dark/80 leading-relaxed"
          >
            A gathering unlike any other awakens. EPOCH rises from the sands of time, 
            calling forth the bold, the creative, and the fearless. Here, talent becomes legend, 
            and legends become eternal.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-stone-dark/80 leading-relaxed"
          >
            For three days and nights, the ancient arena shall witness trials of artistry, 
            rhythm, and imagination. Champions will emerge, their names carved forever 
            in the annals of this sacred celebration.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-elegant text-2xl md:text-3xl text-gold-dark font-semibold"
          >
            Will you answer the call?
          </motion.p>
        </div>
        
        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          <div className="w-2 h-2 rotate-45 bg-gold-dark" />
          <div className="w-24 h-[2px] bg-gold-dark" />
          <div className="w-3 h-3 rotate-45 border-2 border-gold-dark" />
          <div className="w-24 h-[2px] bg-gold-dark" />
          <div className="w-2 h-2 rotate-45 bg-gold-dark" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StorySection;
