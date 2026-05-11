import React from 'react';
import { motion } from 'framer-motion';

const LoadingScene = () => {
  return (
    <div className="fixed inset-0 bg-void flex flex-col items-center justify-center z-[100]">
      <motion.div
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mb-8"
      >
        <img src="/see_the_quran_app_icon.svg" alt="Loading" className="w-20 h-20" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gold/60 font-display tracking-[0.3em] uppercase text-[10px]"
      >
        Preparing the Journey...
      </motion.div>
    </div>
  );
};

export default LoadingScene;
