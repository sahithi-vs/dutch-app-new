// Question generation and game logic
export const generateQuestion = (words, usedWords) => {
  if (words.length < 4) return null;
  
  const availableWords = words.filter(w => 
    !usedWords.some(u => u.dutch === w.dutch && u.english === w.english)
  );
  
  if (availableWords.length < 4) {
    return generateQuestion(words, []);
  }
  
  const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
  const wrongOptions = availableWords
    .filter(w => w.english !== correct.english)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  const allOptions = [correct, ...wrongOptions].sort(() => Math.random() - 0.5);
  
  return {
    currentWord: correct,
    options: allOptions,
    usedWords: [...usedWords, correct]
  };
};

export const generateSpellingQuestion = (words, usedWords) => {
  if (words.length === 0) return null;
  
  const availableWords = words.filter(w => 
    !usedWords.some(u => u.dutch === w.dutch && u.english === w.english)
  );
  
  if (availableWords.length === 0) {
    return generateSpellingQuestion(words, []);
  }
  
  const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
  
  return {
    currentWord: correct,
    usedWords: [...usedWords, correct]
  };
};