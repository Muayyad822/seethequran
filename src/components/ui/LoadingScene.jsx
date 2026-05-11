import React from 'react';
import { motion } from 'framer-motion';

const LoadingScene = () => {
  return (
    <div className="fixed inset-0 bg-void flex flex-col items-center justify-center z-[100]">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 rounded-full border-t-2 border-gold mb-8 blur-sm"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gold font-display tracking-[0.3em] uppercase text-sm"
      >
        Preparing the Journey...
      </motion.div>
    </div>
  );
};

export default LoadingScene;
