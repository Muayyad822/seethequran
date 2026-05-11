import React, { createContext, useContext, useReducer } from 'react';

const ExperienceContext = createContext();

const initialState = {
  currentSurah: null,
  currentVerseIndex: 0,
  isPlaying: false,
  showTafsir: false,
  showReflection: false,
  sceneData: null,
  verseData: [],
  audioData: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SURAH':
      return { ...initialState, currentSurah: action.payload };
    case 'SET_SCENE_DATA':
      return { ...state, sceneData: action.payload };
    case 'SET_VERSE_DATA':
      return { ...state, verseData: action.payload };
    case 'SET_AUDIO_DATA':
      return { ...state, audioData: action.payload };
    case 'SET_VERSE_INDEX':
      return { ...state, currentVerseIndex: action.payload, showReflection: false };
    case 'TOGGLE_PLAYING':
      return { ...state, isPlaying: action.payload ?? !state.isPlaying };
    case 'SET_TAFSIR_VISIBLE':
      return { ...state, showTafsir: action.payload };
    case 'SET_REFLECTION_VISIBLE':
      return { ...state, showReflection: action.payload };
    case 'NEXT_VERSE':
      if (state.currentVerseIndex < state.verseData.length - 1) {
        return { ...state, currentVerseIndex: state.currentVerseIndex + 1, showReflection: false };
      }
      return state;
    case 'PREV_VERSE':
      if (state.currentVerseIndex > 0) {
        return { ...state, currentVerseIndex: state.currentVerseIndex - 1, showReflection: false };
      }
      return state;
    default:
      return state;
  }
}

export const ExperienceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExperienceContext.Provider value={{ state, dispatch }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperience = () => useContext(ExperienceContext);
