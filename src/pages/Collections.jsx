import React from 'react';
import { motion } from 'framer-motion';

const Collections = () => {
  return (
    <div className="pt-32 px-6 min-h-screen flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-display font-bold mb-4">Collections</h1>
        <p className="text-muted italic">Organize your reflections into meaningful themes.</p>
      </motion.div>

      <div className="glass-dark p-12 rounded-[2rem] max-w-2xl w-full text-center">
        <div className="text-4xl mb-4">📚</div>
        <p className="text-muted">No collections found.</p>
        <p className="text-sm text-muted/60 mt-2">Create collections to group verses by theme, mood, or study goal.</p>
      </div>
    </div>
  );
};

export default Collections;
