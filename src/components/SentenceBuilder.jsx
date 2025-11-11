import React, { useState, useEffect } from 'react';
import { Volume2, Check, X, RefreshCw, Home, ChevronRight, Trophy } from 'lucide-react';

const SentenceBuilder = ({ 
  sentences, 
  onBack, 
  onMenu, 
  speakDutch,
  numQuestions = 10
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [draggedWord, setDraggedWord] = useState(null);
  const [userSentence, setUserSentence] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [isQuestionSetup, setIsQuestionSetup] = useState(false);
  const [currentDutchSentence, setCurrentDutchSentence] = useState('');
  const [currentEnglishTranslation, setCurrentEnglishTranslation] = useState('');

  useEffect(() => {
    if (sentences && sentences.length > 0 && currentIndex < sentences.length && currentIndex < numQuestions) {
      setupQuestion();
    } else if (currentIndex >= numQuestions || (sentences && currentIndex >= sentences.length)) {
      setShowResults(true);
    }
  }, [currentIndex, sentences, numQuestions]);

  const setupQuestion = () => {
    if (!sentences || !sentences[currentIndex]) return;
    
    // Only setup if we haven't set up this question yet
    if (isQuestionSetup) return;
    
    const sentence = sentences[currentIndex];
    // Extract the Dutch sentence from example (before the parentheses)
    const dutchSentence = sentence.example.split('(')[0].trim();
    const englishTranslation = sentence.example.match(/\(([^)]+)\)/)?.[1] || sentence.english;
    const words = dutchSentence.split(/\s+/);
    
    // Store the current sentence and translation in state
    setCurrentDutchSentence(dutchSentence);
    setCurrentEnglishTranslation(englishTranslation);
    
    // Store correct order for checking
    setCorrectOrder(words);
    
    // Shuffle words for available pool
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    
    setAvailableWords(shuffled.map((word, idx) => ({ id: `word-${idx}`, text: word, originalIndex: words.indexOf(word) })));
    setUserSentence([]);
    setFeedback(null);
    setIsQuestionSetup(true);
  };

  const handleDragStart = (e, word, fromUser = false) => {
    setDraggedWord({ ...word, fromUser });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDropToSentence = (e, index = null) => {
    e.preventDefault();
    if (!draggedWord) return;

    if (draggedWord.fromUser) {
      // Moving within user sentence - reorder
      const newSentence = [...userSentence];
      const oldIndex = newSentence.findIndex(w => w.id === draggedWord.id);
      newSentence.splice(oldIndex, 1);
      
      if (index !== null) {
        newSentence.splice(index, 0, draggedWord);
      } else {
        newSentence.push(draggedWord);
      }
      
      setUserSentence(newSentence);
    } else {
      // Adding from available words
      const newAvailable = availableWords.filter(w => w.id !== draggedWord.id);
      setAvailableWords(newAvailable);
      
      const newSentence = [...userSentence];
      if (index !== null) {
        newSentence.splice(index, 0, draggedWord);
      } else {
        newSentence.push(draggedWord);
      }
      setUserSentence(newSentence);
    }
    
    setDraggedWord(null);
  };

  const handleDropToAvailable = (e) => {
    e.preventDefault();
    if (!draggedWord || !draggedWord.fromUser) return;

    const newSentence = userSentence.filter(w => w.id !== draggedWord.id);
    setUserSentence(newSentence);
    setAvailableWords([...availableWords, draggedWord]);
    setDraggedWord(null);
  };

  const handleTouchWord = (word, fromUser) => {
    if (!draggedWord) {
      // Select word
      setDraggedWord({ ...word, fromUser });
    } else {
      // Place word
      if (!draggedWord.fromUser && fromUser) {
        // Can't place available word on sentence word
        return;
      }
      
      if (!draggedWord.fromUser && !fromUser) {
        // Moving from available to available - just swap selection
        setDraggedWord({ ...word, fromUser: false });
      } else if (draggedWord.fromUser && fromUser) {
        // Reorder within sentence
        const newSentence = [...userSentence];
        const draggedIndex = newSentence.findIndex(w => w.id === draggedWord.id);
        const targetIndex = newSentence.findIndex(w => w.id === word.id);
        
        newSentence.splice(draggedIndex, 1);
        newSentence.splice(targetIndex, 0, draggedWord);
        setUserSentence(newSentence);
        setDraggedWord(null);
      } else if (draggedWord.fromUser && !fromUser) {
        // Return word to available
        const newSentence = userSentence.filter(w => w.id !== draggedWord.id);
        setUserSentence(newSentence);
        setAvailableWords([...availableWords, draggedWord]);
        setDraggedWord(null);
      }
    }
  };

  const addWordToSentence = (word) => {
    const newAvailable = availableWords.filter(w => w.id !== word.id);
    setAvailableWords(newAvailable);
    setUserSentence([...userSentence, word]);
    setDraggedWord(null);
  };

  const removeWordFromSentence = (word) => {
    const newSentence = userSentence.filter(w => w.id !== word.id);
    setUserSentence(newSentence);
    setAvailableWords([...availableWords, word]);
    setDraggedWord(null);
  };

  const checkAnswer = () => {
    const userWords = userSentence.map(w => w.text);
    
    // Compare with correct order
    const isCorrect = JSON.stringify(correctOrder) === JSON.stringify(userWords);
    
    if (isCorrect) {
      setScore(score + 1);
      setFeedback({ correct: true, message: 'Perfect! Goed gedaan!' });
    } else {
      setFeedback({ 
        correct: false, 
        message: 'Not quite! Check the correct answer below.'
      });
      
      setWrongAnswers([...wrongAnswers, {
        dutch: currentDutchSentence,
        english: currentEnglishTranslation,
        userSentence: userWords.join(' '),
        correctSentence: currentDutchSentence
      }]);
    }
  };

  const handleNext = () => {
    setIsQuestionSetup(false);
    setCurrentIndex(currentIndex + 1);
  };

  if (showResults) {
    const percentage = Math.round((score / numQuestions) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full text-center">
          <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
            {percentage >= 80 ? 'Uitstekend! Great job!' :
             percentage >= 60 ? 'Goed gedaan! Keep practicing!' :
             'Keep learning!'}
          </h2>
          <div className="mb-6">
            <div className="text-4xl sm:text-6xl font-bold text-indigo-600 mb-2">{score}/{numQuestions}</div>
            <div className="text-xl sm:text-2xl text-gray-600">{percentage}% Correct</div>
          </div>

          {wrongAnswers.length > 0 && (
            <div className="mb-6 max-h-64 overflow-y-auto text-left">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Review Mistakes:</h3>
              <div className="space-y-3">
                {wrongAnswers.map((wrong, idx) => (
                  <div key={idx} className="bg-red-50 border-2 border-red-200 rounded-xl p-3">
                    <p className="text-sm text-gray-600 mb-1">English:</p>
                    <p className="text-gray-700 font-semibold mb-2">{wrong.english}</p>
                    <p className="text-sm text-gray-600 mb-1">Your answer:</p>
                    <p className="text-red-600 font-semibold mb-2">{wrong.userSentence || '(empty)'}</p>
                    <p className="text-sm text-gray-600 mb-1">Correct answer:</p>
                    <p className="text-green-600 font-semibold">{wrong.correctSentence}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="space-y-3">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setScore(0);
                setWrongAnswers([]);
                setShowResults(false);
                setIsQuestionSetup(false);
              }}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <button
              onClick={onBack}
              className="w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
            >
              Back to Selection
            </button>
            <button
              onClick={onMenu}
              className="w-full bg-gray-100 text-gray-600 text-base font-bold py-3 rounded-xl hover:bg-gray-200 active:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Main Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentSentence = sentences[currentIndex];
  
  // Safety check - if no current sentence, don't render
  if (!currentSentence) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 p-3 sm:p-4 pb-24">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4">
          <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
            <div className="flex gap-2 items-center">
              <button
                onClick={onMenu}
                className="bg-gray-100 hover:bg-gray-200 active:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-1"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                <span className="font-semibold text-xs sm:text-sm">Menu</span>
              </button>
              <div className="bg-green-100 px-2 sm:px-4 py-1 rounded-lg">
                <span className="text-green-700 font-bold text-xs sm:text-base">Score: {score}</span>
              </div>
            </div>
            <div className="text-gray-600 font-semibold text-xs sm:text-base">
              {currentIndex + 1}/{numQuestions}
            </div>
          </div>
          
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((currentIndex) / numQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-indigo-100 text-indigo-700">
              🧩 Sentence Builder
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-4 mb-3">
              Build this sentence in Dutch:
            </h2>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
              <p className="text-lg sm:text-xl font-bold text-blue-700">{currentEnglishTranslation}</p>
            </div>
            <button
              onClick={() => speakDutch(currentDutchSentence)}
              className="bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200 px-4 py-2 rounded-lg transition-all inline-flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-600 font-semibold text-sm">Hear Correct Sentence</span>
            </button>
          </div>

          {/* User's Sentence Area (Drop Zone) */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Drag words here in correct order:</p>
            <div 
              className="min-h-32 bg-gradient-to-br from-indigo-50 to-purple-50 border-4 border-dashed border-indigo-300 rounded-xl p-4 flex flex-wrap gap-2 items-start"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDropToSentence(e)}
            >
              {userSentence.length === 0 ? (
                <p className="text-gray-400 italic text-center w-full mt-4">Drag words here or tap words below to build your sentence...</p>
              ) : (
                userSentence.map((word, index) => (
                  <div key={word.id} className="relative group">
                    <div
                      draggable
                      onDragStart={(e) => handleDragStart(e, word, true)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDropToSentence(e, index)}
                      onClick={() => draggedWord ? (draggedWord.fromUser ? handleTouchWord(word, true) : addWordToSentence(draggedWord)) : setDraggedWord({ ...word, fromUser: true })}
                      className={`px-4 py-3 rounded-lg font-semibold text-base cursor-move transition-all ${
                        draggedWord?.id === word.id 
                          ? 'bg-purple-500 text-white scale-110 shadow-lg' 
                          : 'bg-white text-indigo-700 border-2 border-indigo-400 hover:bg-indigo-50 shadow-md'
                      }`}
                    >
                      {word.text}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeWordFromSentence(word);
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-all shadow-md opacity-0 group-hover:opacity-100"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Available Words Pool */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Available words (tap to add):</p>
            <div 
              className="min-h-24 bg-gray-50 border-2 border-gray-300 rounded-xl p-4 flex flex-wrap gap-2 justify-center"
              onDragOver={handleDragOver}
              onDrop={handleDropToAvailable}
            >
              {availableWords.length === 0 ? (
                <p className="text-gray-400 italic">All words used! ✓</p>
              ) : (
                availableWords.map(word => (
                  <div
                    key={word.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, word, false)}
                    onClick={() => draggedWord?.id === word.id ? setDraggedWord(null) : addWordToSentence(word)}
                    className={`px-4 py-3 rounded-lg font-semibold text-base cursor-pointer transition-all ${
                      draggedWord?.id === word.id 
                        ? 'bg-indigo-500 text-white scale-110 shadow-lg ring-4 ring-indigo-300' 
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-indigo-50 hover:border-indigo-300 shadow'
                    }`}
                  >
                    {word.text}
                  </div>
                ))
              )}
            </div>
            {draggedWord && !draggedWord.fromUser && (
              <p className="text-sm text-indigo-600 text-center mt-2 animate-pulse">
                ✨ Tap the sentence area above to place "{draggedWord.text}"
              </p>
            )}
          </div>

          {/* Hints */}
          <div className="mb-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-3">
            <p className="text-xs sm:text-sm text-yellow-800 text-center">
              💡 <strong>Tip:</strong> All words needed are above. Arrange them to match the English meaning!
            </p>
            <p className="text-xs text-yellow-700 text-center mt-1">
              Total words needed: <strong>{correctOrder.length}</strong> | Currently placed: <strong>{userSentence.length}</strong>
            </p>
          </div>

          {/* Submit Button */}
          {!feedback && (
            <button
              onClick={checkAnswer}
              disabled={userSentence.length !== correctOrder.length}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {userSentence.length === 0 ? 'Add words to check' : 
               userSentence.length < correctOrder.length ? `Add ${correctOrder.length - userSentence.length} more word${correctOrder.length - userSentence.length > 1 ? 's' : ''}` :
               'Check Answer'}
            </button>
          )}

          {/* Feedback */}
          {feedback && (
            <div className={`p-4 rounded-xl ${feedback.correct ? 'bg-green-100' : 'bg-red-100'}`}>
              <div className="flex items-start gap-3 mb-3">
                {feedback.correct ? (
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                ) : (
                  <X className="w-6 h-6 text-red-600 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className={`font-semibold text-base mb-2 ${feedback.correct ? 'text-green-700' : 'text-red-700'}`}>
                    {feedback.message}
                  </p>
                  {!feedback.correct && (
                    <div className="bg-white rounded-lg p-3 mt-2">
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-1">English:</p>
                        <p className="text-gray-800 font-semibold text-base mb-2">{currentEnglishTranslation}</p>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-1">Correct Dutch sentence:</p>
                        <p className="text-green-600 font-bold text-lg mb-2">{currentDutchSentence}</p>
                      </div>
                      <button
                        onClick={() => speakDutch(currentDutchSentence)}
                        className="bg-green-100 hover:bg-green-200 px-3 py-1 rounded-lg text-sm flex items-center gap-2"
                      >
                        <Volume2 className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 font-semibold">Hear correct</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={handleNext}
                className="w-full mt-3 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Next Sentence
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SentenceBuilder;