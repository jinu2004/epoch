import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Sun, Moon, Star } from 'lucide-react';

interface DaySchedule {
  day: string;
  title: string;
  icon: React.ReactNode;
  events: string[];
}

// PLACEHOLDER: Update with your actual schedule
const schedule: DaySchedule[] = [
  {
    day: "Day 1",
    title: "The Awakening",
    icon: <Sun className="w-6 h-6" />,
    events: ["Opening Ceremony", "Dance Prelims", "Art Exhibition Opens"],
  },
  {
    day: "Day 2",
    title: "The Trials",
    icon: <Star className="w-6 h-6" />,
    events: ["Music Competition", "Dance Finals", "Pro Show Night"],
  },
  {
    day: "Day 3",
    title: "The Ascension",
    icon: <Moon className="w-6 h-6" />,
    events: ["Grand Finale", "Awards Ceremony", "Closing Pro Show"],
  },
];

const ScheduleCard = ({ item, index }: { item: DaySchedule; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Connection line to timeline */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-8 h-px bg-gold/50 left-0 lg:-left-8" />
      
      <div className="bg-stone-light/30 backdrop-blur-sm border border-gold/20 rounded-sm p-6 transition-all duration-300 hover:border-gold/50 hover:bg-stone-light/50">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold">
            {item.icon}
          </div>
          <div>
            <span className="text-gold font-display text-sm tracking-widest">{item.day}</span>
            <h3 className="font-display text-xl text-foreground">{item.title}</h3>
          </div>
        </div>
        
        {/* Events list */}
        <ul className="space-y-2">
          {item.events.map((event, i) => (
            <li key={i} className="flex items-center gap-3 text-sand/70">
              <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
              <span className="font-body text-sm">{event}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ScheduleSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="py-24 lg:py-32 relative overflow-hidden">
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
            <Compass className="w-6 h-6 text-gold" />
            <span className="text-gold font-elegant text-lg tracking-[0.3em] uppercase">The Journey</span>
            <Compass className="w-6 h-6 text-gold" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-engraved text-gradient-gold mb-4"
          >
            Schedule
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-sand/70 text-lg max-w-2xl mx-auto"
          >
            Chart your course through three legendary days of celebration.
          </motion.p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          
          {/* Schedule cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schedule.map((item, index) => (
              <ScheduleCard key={index} item={item} index={index} />
            ))}
          </div>
          
          {/* Journey markers */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col justify-around pointer-events-none">
            {schedule.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className="w-4 h-4 rotate-45 border-2 border-gold bg-stone"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
