import React from 'react';
import { motion } from 'framer-motion';

const AtmosphereLayer = ({ scene }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <motion.div 
        animate={{ 
          background: `radial-gradient(circle at center, ${scene.backgroundGradient[1]}, ${scene.backgroundGradient[0]})`
        }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      />

      {/* Dynamic Glow Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full blur-[120px]"
        style={{ background: scene.glowColor }}
      />

      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
          x: [20, -20, 20],
          y: [20, -20, 20]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full blur-[100px]"
        style={{ background: scene.ambientColor }}
      />

      {/* Screen Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default AtmosphereLayer;
