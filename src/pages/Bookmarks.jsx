import React from 'react';
import { motion } from 'framer-motion';

const Bookmarks = () => {
  return (
    <div className="pt-32 px-6 min-h-screen flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-display font-bold mb-4">Saved Verses</h1>
        <p className="text-muted italic">Your personal collection of moments that moved you.</p>
      </motion.div>

      <div className="glass-dark p-12 rounded-[2rem] max-w-2xl w-full text-center">
        <div className="text-4xl mb-4">✨</div>
        <p className="text-muted">You haven't bookmarked any verses yet.</p>
        <p className="text-sm text-muted/60 mt-2">Verses you bookmark during your journey will appear here.</p>
      </div>
    </div>
  );
};

export default Bookmarks;
