import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SandParticles from './SandParticles';
import heroBackground from '../../public/background.jpeg';
import { useRef } from 'react';

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    // Parallax transforms
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const scrollToEvents = () => {
        document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToNext = () => {
        document.getElementById('pro-shows')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image with parallax */}
            <motion.div
                className="absolute inset-0 w-full h-[120%]"
                style={{ y: backgroundY }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat md:scale-100"
                    style={{ backgroundImage: `url(${heroBackground})` }}
                />
            </motion.div>

            {/* Gradient overlays for depth and readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
            <div className="absolute inset-0 gradient-vignette" />

            {/* Ember/spark overlay effect */}
            <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />

            {/* Sand particles */}
            <SandParticles />

            {/* Content with parallax */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                style={{ y: textY, opacity: opacityText }}
            >
                {/* Decorative top element */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-32 h-[1px] mx-auto mb-6 gold-shimmer"
                />

                {/* Pre-title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-elegant text-xl md:text-xl font-bold text-sand-light tracking-[0.5em] uppercase mb-4"
                >
                    The Gates Await
                </motion.p>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-display text-6xl md:text-[10rem] lg:text-[14rem] font-bold tracking-[0.15em] text-gold mb-4 leading-none"
                    style={{
                        textShadow: '0 0 80px rgba(212, 175, 55, 0.4), 0 4px 20px rgba(0,0,0,0.8)',
                    }}
                >
                    EPOCH
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="font-elegant font-bold text-xl md:text-2xl lg:text-3xl text-sand-light tracking-[0.4em] uppercase mb-10"
                >
                    Uncover the Legend
                </motion.p>

                {/* Decorative divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex items-center justify-center gap-4 mb-10"
                >
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/70" />
                    <div className="w-2 h-2 rotate-45 border border-gold/70 bg-gold/20" />
                    <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/70" />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        size="lg"
                        className="bg-gold hover:bg-gold-light text-stone-dark font-display text-base px-10 py-6 tracking-wider transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] border border-gold-light/30"
                    >
                        <a href="https://forms.gle/PYWQkBXcGdRCeW7W8"> Enter the Realm</a>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={scrollToEvents}
                        className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold font-display text-base px-10 py-6 tracking-wider transition-all duration-300 backdrop-blur-sm"
                    >
                        Explore Events
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-sand/60 text-xs font-body tracking-[0.3em] uppercase">Discover</span>
                    <ChevronDown className="w-5 h-5 text-gold/60" />
                </motion.div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </section>
    );
};

export default HeroSection;
