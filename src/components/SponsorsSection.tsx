import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Sponsor {
  name: string;
  tier: 'title' | 'gold' | 'silver';
}

// PLACEHOLDER: Replace with your actual sponsor logos and names
const sponsors: Sponsor[] = [
  { name: "Title Sponsor", tier: "title" },
  { name: "Gold Sponsor 1", tier: "gold" },
  { name: "Gold Sponsor 2", tier: "gold" },
  { name: "Silver Sponsor 1", tier: "silver" },
  { name: "Silver Sponsor 2", tier: "silver" },
  { name: "Silver Sponsor 3", tier: "silver" },
];

const SponsorPlaque = ({ sponsor, index }: { sponsor: Sponsor; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const sizeClasses = {
    title: "col-span-2 md:col-span-4 h-32",
    gold: "col-span-1 md:col-span-2 h-24",
    silver: "col-span-1 h-20",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${sizeClasses[sponsor.tier]}`}
    >
      <div className="w-full h-full bg-stone-light/40 border border-gold/20 rounded-sm flex items-center justify-center transition-all duration-300 hover:border-gold/50 hover:bg-stone-light/60 stone-texture">
        <span className="font-display text-sand/40 tracking-widest text-sm">
          {sponsor.name}
        </span>
      </div>
    </motion.div>
  );
};

const SponsorsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const titleSponsors = sponsors.filter(s => s.tier === 'title');
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-stone" />
      <div className="absolute inset-0 stone-texture" />
      
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
            <span className="text-gold font-elegant text-lg tracking-[0.3em] uppercase">Patrons</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-alhabasy text-4xl md:text-5xl lg:text-6xl text-engraved text-gold mb-4"
          >
            Our Sponsors
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-sand/70 text-lg max-w-2xl mx-auto"
          >
            The noble houses that make this grand celebration possible.
          </motion.p>
        </div>
        
        {/* Sponsors grid - Pyramid layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Title sponsors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {titleSponsors.map((sponsor, index) => (
              <SponsorPlaque key={index} sponsor={sponsor} index={index} />
            ))}
          </div>
          
          {/* Gold sponsors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {goldSponsors.map((sponsor, index) => (
              <SponsorPlaque key={index} sponsor={sponsor} index={index + titleSponsors.length} />
            ))}
          </div>
          
          {/* Silver sponsors */}
          <div className="grid grid-cols-3 gap-4">
            {silverSponsors.map((sponsor, index) => (
              <SponsorPlaque key={index} sponsor={sponsor} index={index + titleSponsors.length + goldSponsors.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
