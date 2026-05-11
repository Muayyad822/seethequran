import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, BookOpen, MessageSquare, Bookmark } from 'lucide-react';
import { useExperience } from '../../context/ExperienceContext';

const AudioPlayer = ({ verse }) => {
  const { state, dispatch } = useExperience();
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Audio URL Pattern: https://verses.quran.com/Alafasy_128kbps/{surah_padded}/{verse_padded}.mp3
  const surahPadded = state.currentSurah.padStart(3, '0');
  const versePadded = (state.currentVerseIndex + 1).toString().padStart(3, '0');
  const audioUrl = `https://verses.quran.com/Alafasy_128kbps/${surahPadded}/${versePadded}.mp3`;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (state.isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed:", e));
      }
    }
  }, [audioUrl]);

  const togglePlay = () => {
    if (state.isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    dispatch({ type: 'TOGGLE_PLAYING' });
  };

  const onTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);

    // TODO: Word highlighting logic based on state.audioData
  };

  const onEnded = () => {
    setTimeout(() => {
      if (state.currentVerseIndex < state.verseData.length - 1) {
        dispatch({ type: 'NEXT_VERSE' });
      } else {
        dispatch({ type: 'SET_REFLECTION_VISIBLE', payload: true });
        dispatch({ type: 'TOGGLE_PLAYING', payload: false });
      }
    }, 1500);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 px-6 pb-8">
      <div className="max-w-4xl mx-auto glass-dark rounded-2xl p-4 flex flex-col gap-4">
        {/* Progress Bar */}
        <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => dispatch({ type: 'SET_TAFSIR_VISIBLE', payload: !state.showTafsir })}
              className={`p-2 rounded-full transition-colors ${state.showTafsir ? 'bg-gold text-void' : 'hover:bg-white/10 text-muted'}`}
            >
              <BookOpen className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 text-muted">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => dispatch({ type: 'PREV_VERSE' })}
              className="p-2 text-muted hover:text-ivory transition-colors"
            >
              <SkipBack className="w-6 h-6" />
            </button>
            
            <button 
              onClick={togglePlay}
              className="w-12 h-12 bg-gold text-void rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
            >
              {state.isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>

            <button 
              onClick={() => dispatch({ type: 'NEXT_VERSE' })}
              className="p-2 text-muted hover:text-ivory transition-colors"
            >
              <SkipForward className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/10 text-muted">
              <Bookmark className="w-5 h-5" />
            </button>
            <div className="text-xs font-medium text-muted uppercase tracking-widest tabular-nums">
              {state.currentVerseIndex + 1} / {state.verseData.length}
            </div>
          </div>
        </div>
      </div>

      <audio 
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
    </div>
  );
};

export default AudioPlayer;
