import React from 'react';
import { motion } from 'framer-motion';

const VerseDisplay = ({ verse, scene }) => {
  const words = verse.text_uthmani.split(' ');

  return (
    <div className="flex flex-col items-center text-center max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        dir="rtl"
        className="font-amiri text-4xl md:text-6xl lg:text-7xl leading-[1.8] mb-12 text-ivory drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="inline-block mx-2 hover:text-gold transition-colors duration-500 cursor-default"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="space-y-4 px-4"
      >
        <p className="text-xl md:text-2xl font-display italic text-gold-dim leading-relaxed">
          {verse.translations[0].text.replace(/<[^>]*>?/gm, '')}
        </p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 2, duration: 1 }}
          className="h-px bg-gold/30 mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default VerseDisplay;
