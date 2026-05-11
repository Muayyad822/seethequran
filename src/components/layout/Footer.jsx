import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isExperience = location.pathname.startsWith('/surah/');

  if (isExperience) return null; // Hide footer in experience mode for immersion

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-void/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src="/see_the_quran_logo.svg" alt="See the Quran" className="h-8 w-auto opacity-70" />
          <p className="text-xs text-muted font-serif italic">A journey through the Divine word.</p>
        </div>

        <div className="flex gap-8 text-xs uppercase tracking-widest text-muted">
          <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          <a href="https://github.com/Muayyad822/seethequran" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">GitHub</a>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] text-muted/50">
          © 2026 See The Quran. Built for QF Hackathon.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
