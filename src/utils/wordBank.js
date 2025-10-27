import { dutchWordBank } from '../data/dutchWordBank';

// Word loading and filtering logic
export const getAllWords = () => {
  const allWords = [];
  Object.entries(dutchWordBank).forEach(([category, words]) => {
    allWords.push(...words.map(w => ({ ...w, category })));
  });
  return allWords;
};

export const getTotalWordCount = () => getAllWords().length;

export const loadWords = (category) => {
  let words = [];
  if (category === 'all') {
    words = getAllWords();
  } else {
    words = (dutchWordBank[category] || []).map(w => ({ ...w, category }));
  }
  return words.sort(() => Math.random() - 0.5);
};