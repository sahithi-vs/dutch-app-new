import React from 'react';
import { Volume2 } from 'lucide-react';
import { speakDutch } from '../../utils/speech';

export const SpeakButton = ({ text, colorClass = 'orange' }) => {
  return (
    <button
      onClick={() => speakDutch(text)}
      className={`bg-${colorClass}-100 hover:bg-${colorClass}-200 p-3 rounded-full transition-all`}
      title="Hear pronunciation"
    >
      <Volume2 className={`w-6 h-6 text-${colorClass}-600`} />
    </button>
  );
};