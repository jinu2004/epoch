import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden bg-stone-dark">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-alhabasy text-2xl text-gradient-gold tracking-widest mb-2">EPOCH</h3>
            <p className="text-sand/50 text-sm">Uncover the Legend</p>
          </div>
          
          {/* Social links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sand/50 hover:text-gold transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-sand/50 hover:text-gold transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-sand/50 hover:text-gold transition-colors duration-300">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-sand/50 hover:text-gold transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sand/40 text-sm">
              © 2024 Epoch. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
