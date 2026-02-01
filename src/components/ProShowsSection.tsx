import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import heroBackground from "../../background pattern.jpeg";
import LetterGlitch from './LetterGlitch';
import CurvedText from "@/components/ui/CurvedText.tsx";

interface Artist {
  date: string;
  image: string;
}

// PLACEHOLDER: Replace with your actual artist data
const artists: Artist[] = [
  {
    date: "Day 1",
    image: "day1pro.jpeg",
  },
  {
    date: "Day 2",
    image: "day2.png",
  },
  {
    date: "Day 3",
    image: "day3.jpeg",
  },
];

const ArtistCard = ({ artist, index }: { artist: Artist; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative overflow-hidden gold-frame rounded-sm transition-all duration-300">
        {/* Image */}
        <img src={artist.image} alt={artist.date} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-19">
          {/* Decorative line */}
          <motion.div
            className="w-12 h-[2px] bg-gold mb-4"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          />

        </div>
        
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/50 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-gold" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/50 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-gold" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/50 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-gold" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/50 transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:border-gold" />
      </div>
    </motion.div>
  );
};

const ProShowsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="pro-shows" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute isolate inset-0 bg-cover bg-center bg-no-repeat transform items-center">
        <CurvedText curveAmount={500} marqueeText="DJ JITTZ  ⚡ ZERO PAUSE ⚡ " className="transform origin-center rotate-6 font-egyptian text-8xl sm:text-9xl opacity-20"/>
      </div>

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
            <span className="text-gold font-elegant text-lg tracking-[0.3em] uppercase">Royal Showcase</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-alhabasy text-4xl md:text-5xl lg:text-6xl text-engraved text-gold mb-4"
          >
            Pro Shows
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-sand/70 text-lg max-w-2xl mx-auto"
          >
            Witness legendary performances from acclaimed artists as they grace the sacred stage of Epoch.
          </motion.p>
        </div>
        
        {/* Artist cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProShowsSection;
