import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SurahCard = ({ surah, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => navigate(`/surah/${surah.number}`)}
      className="group cursor-pointer relative aspect-[4/5] rounded-3xl overflow-hidden glass transition-all"
    >
      {/* Background Tint */}
      <div 
        className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40"
        style={{ background: `linear-gradient(to bottom, transparent, ${surah.palette[1]})` }}
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <span className="text-4xl font-display font-bold text-white/10 group-hover:text-gold/20 transition-colors">
            {surah.number.padStart(3, '0')}
          </span>
          <div className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-white/5 border border-white/10 text-gold">
            {surah.mood}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-amiri mb-2 group-hover:text-gold transition-colors">{surah.arabicName}</h2>
          <h3 className="text-2xl font-display font-semibold mb-1">{surah.name}</h3>
          <p className="text-sm text-muted">{surah.englishName}</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-xs text-muted/60 uppercase tracking-widest">{surah.duration} experience</span>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
            <span className="text-gold font-medium uppercase tracking-tighter text-sm">Begin Journey</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute -inset-1 bg-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.div>
  );
};

export default SurahCard;
