import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useExperience } from '../../context/ExperienceContext';

const ReflectionPrompt = ({ scene }) => {
  const { dispatch } = useExperience();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-void/60 backdrop-blur-sm"
    >
      <div className="glass-dark max-w-lg w-full rounded-[2rem] p-8 md:p-10 text-center relative overflow-hidden">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl -mr-16 -mt-16" />
        
        <span className="text-xs uppercase tracking-[0.4em] text-gold mb-6 block">Deep Reflection</span>
        
        <h3 className="text-2xl md:text-3xl font-display italic mb-8 leading-snug">
          "{scene.reflectionPrompt}"
        </h3>

        <div className="relative mb-8">
          <textarea 
            placeholder="Type your reflection..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 min-h-[120px] text-ivory placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors resize-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <button 
            className="btn-primary w-full py-4 flex items-center justify-center gap-2 group"
            onClick={() => dispatch({ type: 'SET_REFLECTION_VISIBLE', payload: false })}
          >
            Save Reflection
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => dispatch({ type: 'SET_REFLECTION_VISIBLE', payload: false })}
            className="text-muted text-sm hover:text-ivory transition-colors py-2"
          >
            Maybe later
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ReflectionPrompt;
