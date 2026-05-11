import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useExperience } from '../context/ExperienceContext';
import { getVerses, getRecitationTimestamps } from '../services/quranApi';
import SceneRenderer from '../components/experience/SceneRenderer';
import LoadingScene from '../components/ui/LoadingScene';

const SurahExperience = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useExperience();

  useEffect(() => {
    const loadSurahData = async () => {
      try {
        dispatch({ type: 'SET_SURAH', payload: id });
        
        // Load static scene config
        const sceneConfig = await import(`../data/scenes/surah_${id}.json`);
        dispatch({ type: 'SET_SCENE_DATA', payload: sceneConfig.default });

        // Load API data
        const [versesRes, timestampsRes] = await Promise.all([
          getVerses(id),
          getRecitationTimestamps(id)
        ]);

        dispatch({ type: 'SET_VERSE_DATA', payload: versesRes.verses });
        dispatch({ type: 'SET_AUDIO_DATA', payload: timestampsRes.verse_timings });

      } catch (error) {
        console.error('Failed to load experience:', error);
        // navigate('/');
      }
    };

    if (id) loadSurahData();
  }, [id, dispatch, navigate]);

  if (!state.sceneData || state.verseData.length === 0) {
    return <LoadingScene />;
  }

  return (
    <div className="fixed inset-0 bg-void overflow-hidden">
      {/* Exit Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 group flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-colors">
          <img src="/see_the_quran_app_icon.svg" alt="Home" className="w-6 h-6" />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-gold transition-colors font-medium">Exit Experience</span>
      </motion.button>

      <AnimatePresence mode="wait">
        <SceneRenderer 
          key={`${state.currentSurah}-${state.currentVerseIndex}`}
          scene={state.sceneData.scenes[state.currentVerseIndex]}
          verse={state.verseData[state.currentVerseIndex]}
        />
      </AnimatePresence>
    </div>
  );
};

export default SurahExperience;
