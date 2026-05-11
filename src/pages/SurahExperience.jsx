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
