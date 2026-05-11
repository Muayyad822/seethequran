import React from 'react';
import { motion } from 'framer-motion';
import AtmosphereLayer from './AtmosphereLayer';
import ParticleLayer from './ParticleLayer';
import VerseDisplay from './VerseDisplay';
import AudioPlayer from './AudioPlayer';
import NavControls from './NavControls';
import TafsirPanel from './TafsirPanel';
import ReflectionPrompt from './ReflectionPrompt';
import { useExperience } from '../../context/ExperienceContext';

const SceneRenderer = ({ scene, verse }) => {
  const { state } = useExperience();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 1.2 }}
      className="relative w-full h-full overflow-hidden"
    >
      <AtmosphereLayer scene={scene} />
      <ParticleLayer config={scene.particleConfig} />
      
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
        <VerseDisplay verse={verse} scene={scene} />
      </div>

      <NavControls />
      <AudioPlayer verse={verse} />
      
      {state.showTafsir && <TafsirPanel scene={scene} verse={verse} />}
      {state.showReflection && <ReflectionPrompt scene={scene} />}

      {/* Subtle UI Overlay toggle - implementation could be added here */}
    </motion.div>
  );
};

export default SceneRenderer;
