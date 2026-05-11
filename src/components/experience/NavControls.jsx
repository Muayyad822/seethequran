import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useExperience } from '../../context/ExperienceContext';
import { motion } from 'framer-motion';

const NavControls = () => {
  const { state, dispatch } = useExperience();

  return (
    <>
      <div className="fixed inset-y-0 left-0 w-24 flex items-center justify-center z-30 pointer-events-none">
        {state.currentVerseIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: 5 }}
            onClick={() => dispatch({ type: 'PREV_VERSE' })}
            className="p-4 text-white/20 hover:text-gold transition-colors pointer-events-auto"
          >
            <ChevronLeft className="w-12 h-12" />
          </motion.button>
        )}
      </div>

      <div className="fixed inset-y-0 right-0 w-24 flex items-center justify-center z-30 pointer-events-none">
        {state.currentVerseIndex < state.verseData.length - 1 && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: -5 }}
            onClick={() => dispatch({ type: 'NEXT_VERSE' })}
            className="p-4 text-white/20 hover:text-gold transition-colors pointer-events-auto"
          >
            <ChevronRight className="w-12 h-12" />
          </motion.button>
        )}
      </div>
    </>
  );
};

export default NavControls;
