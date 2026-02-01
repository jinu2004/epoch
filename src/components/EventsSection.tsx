import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Music, Palette, Footprints, Trophy, Users } from 'lucide-react';

interface Event {
  title: string;
  img: string;
  participants: string;
}

// PLACEHOLDER: Update with your actual events
const events: Event[] = [
  {
    title: "Fiesta-de-bella",
    img:"events/4.png",
    participants: "",
  },
  {
    title: "Mx Epoch",
    img:"events/6.png",
    participants: "Individual",
  },
  {
    title: "Musical Band",
    img:"events/8.png",
    participants: "Individual",
  },{
    title: "Musical Band",
    img:"events/10.png",
    participants: "Individual",
  },
  {
    title: "Musical Band",
    img:"events/12.png",
    participants: "Individual",
  },

  {
    title: "Musical Band",
    img:"events/14.png",
    participants: "Individual",
  },
  {
    title: "Musical Band",
    img:"events/16.png",
    participants: "Individual",
  },
  {
    title: "Musical Band",
    img:"events/18.png",
    participants: "Individual",
  },
  {
    title: "Musical Band",
    img:"events/20.png",
    participants: "Individual",
  },
  {
    title: "Musical Band",
    img:"events/22.png",
    participants: "Individual",
  },
  {
    title: "Musical Band",
    img:"events/24.png",
    participants: "Individual",
  },
  {
    title: "Musical Band",
    img:"events/28.png",
    participants: "Individual",
  },  {
    title: "Musical Band",
    img:"events/30.png",
    participants: "Individual",
  },
];

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -10 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative bg-stone-light/50 backdrop-blur-sm  border-2 border-gold/50 rounded-sm transition-all duration-300 hover:border-gold hover:bg-stone-light/70 stone-texture overflow-hidden">

          <img src={event.img} alt={event.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>



        

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-4 h-4  border-t-2 border-l-2 border-gold/50 group-hover:border-gold transition-colors duration-200" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-gold/50 group-hover:border-gold transition-colors duration-200" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-gold/50 group-hover:border-gold transition-colors duration-200" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gold/50 group-hover:border-gold transition-colors duration-200" />
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
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
            <span className="text-gold font-elegant text-lg tracking-[0.3em] uppercase">Sacred Challenges</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-alhabasy text-4xl md:text-5xl lg:text-6xl text-engraved text-gold mb-4"
          >
            The Trials
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-sand/70 text-lg max-w-2xl mx-auto"
          >
            Prove your worth through ancient trials designed to test the finest talents across realms.
          </motion.p>
        </div>
        
        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
