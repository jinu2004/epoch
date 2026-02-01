import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Calendar, Music, Award } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

// PLACEHOLDER: Update with your actual stats
const stats: Stat[] = [
  { icon: <Users className="w-8 h-8" />, value: 1000, suffix: "+", label: "Attendees" },
  { icon: <Calendar className="w-8 h-8" />, value: 3, suffix: "", label: "Epic Days" },
  { icon: <Music className="w-8 h-8" />, value: 20, suffix: "+", label: "Events" },
  { icon: <Award className="w-8 h-8" />, value: 15, suffix: "+", label: "Pro Artists" },
];

// PLACEHOLDER: Replace with your actual images
const galleryImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-gradient-gold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const HighlightsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold font-elegant text-lg tracking-[0.3em] uppercase">Legacy</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-alhabasy text-4xl md:text-5xl lg:text-6xl text-engraved text-gold mb-4"
          >
            Past Highlights
          </motion.h2>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-gold/60 mb-3 flex justify-center">{stat.icon}</div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-sand/60 font-body text-sm mt-2 tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Image gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group relative aspect-[3/2] overflow-hidden gold-frame rounded-sm"
            >
              <img
                src={image}
                alt={`Highlight ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
