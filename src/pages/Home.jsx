import React from 'react';
import { motion } from 'framer-motion';
import { supportedSurahs } from '../data/surahMeta';
import SurahCard from '../components/home/SurahCard';
import { useUser } from '../context/UserContext';

const Home = () => {
  const { user } = useUser();

  return (
    <div className="pt-24 pb-12 px-6 min-h-screen flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-2xl flex flex-col items-center"
      >
        <img src="/see_the_quran_logo.svg" alt="See the Quran" className="w-44 h-auto" />
        <p className="text-xl text-muted font-display italic">
          Experience the Quran, not just read it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {supportedSurahs.map((surah, index) => (
          <SurahCard key={surah.id} surah={surah} index={index} />
        ))}
      </div>

      {user && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 glass py-3 px-6 rounded-full flex items-center gap-3"
        >
          <span className="text-lg">🔥</span>
          <span className="text-gold font-medium">3-day streak</span>
          <span className="text-muted text-sm border-l border-white/10 pl-3 ml-2">Keep reflecting</span>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
