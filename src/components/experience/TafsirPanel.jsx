import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useExperience } from '../../context/ExperienceContext';

const TafsirPanel = ({ scene, verse }) => {
  const { dispatch } = useExperience();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed bottom-0 left-0 w-full z-50 glass-dark rounded-t-[3rem] p-8 md:p-12 pb-32"
    >
      <div className="max-w-3xl mx-auto relative">
        <button 
          onClick={() => dispatch({ type: 'SET_TAFSIR_VISIBLE', payload: false })}
          className="absolute -top-4 -right-4 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6 text-muted" />
        </button>

        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold mb-2 block">Insight & Tafsir</span>
          <h3 className="text-3xl font-display font-bold italic">{scene.verseKey}</h3>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-ivory/90 font-light">
          <p className="border-l-2 border-gold/30 pl-6 py-2 italic text-gold/80">
            {scene.tafsirHighlight}
          </p>
          
          <div className="pt-4 text-muted text-base leading-relaxed">
            {/* Full tafsir text from API could be truncated here */}
            {verse.tafsirs?.[0]?.text?.replace(/<[^>]*>?/gm, '').split('. ').slice(0, 3).join('. ') || "No additional tafsir available for this verse."}.
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => dispatch({ type: 'SET_TAFSIR_VISIBLE', payload: false })}
            className="btn-secondary py-2 px-8"
          >
            Continue Journey
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TafsirPanel;
