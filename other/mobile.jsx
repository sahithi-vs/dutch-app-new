import React, { useState, useEffect } from 'react';
import { Volume2, Check, X, Trophy, RefreshCw, Home, BookOpen, GraduationCap, ChevronRight, ChevronLeft, LogOut, User, Menu as MenuIcon, Search } from 'lucide-react';

// Mock data for demo
const dutchWordBank = {
  lesson_1: [
    { dutch: "hallo", english: "hello", example: "Hallo, hoe gaat het? (Hello, how are you?)", level: "A1" },
    { dutch: "dag", english: "day", example: "Goede dag! (Good day!)", level: "A1" },
    { dutch: "dank", english: "thanks", example: "Dank je wel (Thank you)", level: "A1" },
    { dutch: "ja", english: "yes", example: "Ja, dat klopt (Yes, that's correct)", level: "A1" },
    { dutch: "nee", english: "no", example: "Nee, bedankt (No, thank you)", level: "A1" }
  ],
  lesson_2: [
    { dutch: "water", english: "water", example: "Mag ik wat water? (May I have some water?)", level: "A1" },
    { dutch: "eten", english: "food", example: "Het eten is lekker (The food is tasty)", level: "A1" },
    { dutch: "huis", english: "house", example: "Mijn huis is groot (My house is big)", level: "A1" }
  ]
};

const stories = [
  {
    id: 1,
    title: "De Kat en de Hond",
    text: "Er was eens een kat. De kat was klein. Er was ook een hond. De hond was groot. De kat en de hond waren vrienden.",
    questions: [
      { question: "Was de kat groot?", options: ["Ja", "Nee", "Misschien"], correct: "Nee" },
      { question: "Waren ze vrienden?", options: ["Ja", "Nee", "Soms"], correct: "Ja" }
    ]
  }
];

const getAllWords = () => {
  const allWords = [];
  Object.entries(dutchWordBank).forEach(([category, words]) => {
    words.forEach(word => allWords.push({ ...word, category }));
  });
  return allWords;
};

const getTotalWordCount = () => getAllWords().length;

export default function DutchLearningGame() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [user, setUser] = useState({ name: "Demo User", sub: "demo123" }); // Mock user
  const [userProgress, setUserProgress] = useState({});
  const [gameMode, setGameMode] = useState('menu');
  const [currentWord, setCurrentWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wordBank, setWordBank] = useState([]);
  const [usedWords, setUsedWords] = useState([]);
  const [learnIndex, setLearnIndex] = useState(0);
  const [learnWords, setLearnWords] = useState([]);
  const [spellingAnswer, setSpellingAnswer] = useState('');
  const [numQuestions, setNumQuestions] = useState(10);
  const [showQuestionSelector, setShowQuestionSelector] = useState(false);
  const [pendingGameMode, setPendingGameMode] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentGameMode, setCurrentGameMode] = useState(null);
  const [gameStartCategory, setGameStartCategory] = useState(null);
  const [fillBlankAnswer, setFillBlankAnswer] = useState('');
  const [fillBlankSentence, setFillBlankSentence] = useState('');
  const [showStoryQuiz, setShowStoryQuiz] = useState(false);
  const [currentStoryQuestion, setCurrentStoryQuestion] = useState(0);
  const [storyScore, setStoryScore] = useState(0);
  const [storyQuizFeedback, setStoryQuizFeedback] = useState(null);

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const categories = ['all', ...Object.keys(dutchWordBank)];

  const loadWords = (category) => {
    let words = [];
    if (category === 'all') {
      words = getAllWords();
    } else {
      words = (dutchWordBank[category] || []).map(w => ({ ...w, category }));
    }
    return words.sort(() => Math.random() - 0.5);
  };

  const startGame = (mode = 'play') => {
    const words = loadWords(selectedCategory);
    
    if (mode === 'play' && words.length < 4) {
      alert('Not enough words in this category.');
      return;
    }
    
    if (words.length < numQuestions) {
      alert(`Not enough words. Using ${words.length} questions.`);
      setNumQuestions(words.length);
    }
    
    setWordBank(words);
    setUsedWords([]);
    setGameMode(mode);
    setCurrentGameMode(mode);
    setGameStartCategory(selectedCategory);
    setScore(0);
    setStreak(0);
    setQuestionsAnswered(0);
    setFeedback(null);
    setSpellingAnswer('');
    setFillBlankAnswer('');
    setShowQuestionSelector(false);
    setShowMobileMenu(false);
    
    if (mode === 'spelling') {
      generateSpellingQuestion(words, []);
    } else if (mode === 'fillblank') {
      generateFillBlankQuestion(words, []);
    } else {
      generateQuestion(words, []);
    }
  };

  const generateQuestion = (words = wordBank, used = usedWords) => {
    if (words.length < 4) return;
    
    const availableWords = words.filter(w => 
      !used.some(u => u.dutch === w.dutch && u.english === w.english)
    );
    
    if (availableWords.length < 4) {
      setUsedWords([]);
      generateQuestion(words, []);
      return;
    }
    
    const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
    const wrongOptions = availableWords
      .filter(w => w.english !== correct.english)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const allOptions = [correct, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    setCurrentWord(correct);
    setOptions(allOptions);
    setFeedback(null);
    setUsedWords([...used, correct]);
  };

  const generateSpellingQuestion = (words = wordBank, used = usedWords) => {
    if (words.length === 0) return;
    
    const availableWords = words.filter(w => 
      !used.some(u => u.dutch === w.dutch && u.english === w.english)
    );
    
    if (availableWords.length === 0) {
      setUsedWords([]);
      generateSpellingQuestion(words, []);
      return;
    }
    
    const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
    
    setCurrentWord(correct);
    setSpellingAnswer('');
    setFeedback(null);
    setUsedWords([...used, correct]);
  };

  const generateFillBlankQuestion = (words = wordBank, used = usedWords) => {
    if (words.length === 0) return;
    
    const availableWords = words.filter(w => {
      if (!w.example || !used.every(u => u.dutch !== w.dutch || u.english !== w.english)) {
        return false;
      }
      const exampleLower = w.example.toLowerCase();
      const dutchLower = w.dutch.toLowerCase();
      return exampleLower.includes(dutchLower);
    });
    
    if (availableWords.length === 0) {
      setUsedWords([]);
      generateFillBlankQuestion(words, []);
      return;
    }
    
    const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
    const regex = new RegExp(`\\b${correct.dutch}\\b`, 'gi');
    let sentence = correct.example.replace(/\s*\([^)]+\)\s*/g, '').trim();
    let blankCreated = false;

    sentence = sentence.replace(regex, (match) => {
      if (!blankCreated) {
        blankCreated = true;
        return '____';
      }
      return match;
    });
    
    if (!blankCreated) {
      return generateFillBlankQuestion(words, [...used, correct]);
    }
    
    setCurrentWord(correct);
    setFillBlankSentence(sentence);
    setFillBlankAnswer('');
    setFeedback(null);
    setUsedWords([...used, correct]);
  };

  const handleAnswer = (selected) => {
    const isCorrect = selected.english === currentWord.english;
    playSound(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback({ correct: true, message: 'Goed gedaan!' });
      
      setTimeout(() => {
        if (questionsAnswered + 1 >= numQuestions) {
          setGameMode('results');
        } else {
          generateQuestion();
        }
      }, 1500);
    } else {
      setStreak(0);
      setFeedback({ 
        correct: false, 
        message: `Correct answer: "${currentWord.english}"` 
      });
    }
    
    setQuestionsAnswered(questionsAnswered + 1);
  };

  const handleNext = () => {
    setSpellingAnswer('');
    setFillBlankAnswer('');
    if (questionsAnswered >= numQuestions) {
      setGameMode('results');
    } else {
      if (gameMode === 'spelling') {
        generateSpellingQuestion();
      } else if (gameMode === 'fillblank') {
        generateFillBlankQuestion();
      } else {
        generateQuestion();
      }
    }
  };

  const handleSpellingSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (!spellingAnswer.trim()) return;
    
    const userAnswer = spellingAnswer.trim().toLowerCase();
    const correctAnswer = currentWord.dutch.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    playSound(isCorrect); 
    setQuestionsAnswered(questionsAnswered + 1);
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback({ correct: true, message: 'Perfect! Goed gedaan!' });
      
      setTimeout(() => {
        if (questionsAnswered + 1 >= numQuestions) {
          setGameMode('results');
        } else {
          setSpellingAnswer('');
          generateSpellingQuestion();
        }
      }, 1500);
    } else {
      setStreak(0);
      setFeedback({ 
        correct: false, 
        message: `Correct spelling: "${currentWord.dutch}"` 
      });
    }
  };

  const handleFillBlankSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (!fillBlankAnswer.trim()) return;
    
    const userAnswer = fillBlankAnswer.trim().toLowerCase();
    const correctAnswer = currentWord.dutch.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    playSound(isCorrect); 
    setQuestionsAnswered(questionsAnswered + 1);
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback({ correct: true, message: 'Perfect!' });
      
      setTimeout(() => {
        if (questionsAnswered + 1 >= numQuestions) {
          setGameMode('results');
        } else {
          setFillBlankAnswer('');
          generateFillBlankQuestion();
        }
      }, 1500);
    } else {
      setStreak(0);
      setFeedback({ 
        correct: false, 
        message: `Correct word: "${currentWord.dutch}"` 
      });
    }
  };

  const playSound = (isCorrect) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (isCorrect) {
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } else {
      oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.4);
    }
  };

  const speakDutch = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    utterance.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const goToMenu = () => {
    setGameMode('menu');
    setScore(0);
    setStreak(0);
    setQuestionsAnswered(0);
    setFeedback(null);
    setUsedWords([]);
    setLearnIndex(0);
    setLearnWords([]);
    setCurrentWord(null);
    setOptions([]);
    setWordBank([]);
    setSpellingAnswer('');
    setFillBlankAnswer('');
    setFillBlankSentence('');
    setShowQuestionSelector(false);
    setPendingGameMode(null);
    setNumQuestions(10);
    setCurrentGameMode(null);
    setGameStartCategory(null);
    setShowMobileMenu(false);
  };

  const openQuestionSelector = (mode) => {
    setPendingGameMode(mode);
    setShowQuestionSelector(true);
  };

  const startGameWithQuestions = () => {
    const availableWords = selectedCategory === 'all' 
      ? getTotalWordCount() 
      : (dutchWordBank[selectedCategory]?.length || 0);
    
    if (numQuestions < 5 || numQuestions > availableWords) {
      alert(`Please select between 5 and ${availableWords} questions.`);
      return;
    }
    startGame(pendingGameMode);
  };

  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-2 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-w-4xl mx-auto">
          {!showQuestionSelector ? (
            <>
              {/* Header - Mobile Optimized */}
              <div className="mb-4 sm:mb-8">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 bg-blue-100 px-2 py-1 sm:px-4 sm:py-2 rounded-lg">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <span className="text-xs sm:text-sm text-blue-700 font-semibold truncate max-w-[120px] sm:max-w-none">{user.name}</span>
                  </div>
                  <button
                    onClick={() => alert('Logout clicked')}
                    className="flex items-center gap-1 sm:gap-2 bg-red-100 hover:bg-red-200 text-red-600 px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition-all text-xs sm:text-sm"
                  >
                    <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
                
                <h1 className="text-3xl sm:text-5xl font-bold text-orange-600 mb-1 sm:mb-2 text-center">🇳🇱 Leer Nederlands</h1>
                <p className="text-sm sm:text-lg text-gray-600 text-center">1000+ Dutch Words - A1 🟢 & A2 🔵</p>
                
                {/* Search Bar - Mobile Optimized */}
                <div className="mt-4 sm:mt-6">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="🔍 Search words..."
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div className="mt-3 sm:mt-4 flex justify-center">
                  <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span className="text-xs sm:text-sm text-green-700 font-bold">{getTotalWordCount()} Words!</span>
                  </div>
                </div>
              </div>
              
              {/* Category Selection - Mobile Grid */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 sm:mb-3">Choose Category:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 sm:max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-xl">
                  {categories.map(cat => {
                    const wordCount = cat === 'all' ? getTotalWordCount() : (dutchWordBank[cat]?.length || 0);
                    
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`p-2 sm:p-3 rounded-xl font-medium transition-all text-xs relative ${
                          selectedCategory === cat
                            ? 'bg-orange-500 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm truncate">
                          {cat === 'all' ? 'All' : cat.replace(/_/g, ' ').replace(/lesson /g, 'L').toUpperCase()}
                        </div>
                        <div className="opacity-75 text-xs mt-1">{wordCount} words</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Game Mode Buttons - Mobile Stacked */}
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={() => openQuestionSelector('play')}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-xl">Multiple Choice</span>
                </button>
                
                <button
                  onClick={() => openQuestionSelector('spelling')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-lg sm:text-xl">✏️</span>
                  <span className="text-sm sm:text-xl">Spelling</span>
                </button>
                
                <button
                  onClick={() => openQuestionSelector('fillblank')}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-lg sm:text-xl">📝</span>
                  <span className="text-sm sm:text-xl">Fill in Blank</span>
                </button>
              </div>

              {/* Info Box - Mobile Optimized */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-50 rounded-xl">
                <div className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                  <p className="text-center font-bold text-orange-600 mb-2">1000+ Common Dutch Words</p>
                  <p><span className="font-bold">🟢 A1:</span> Beginner basics</p>
                  <p><span className="font-bold">🔵 A2:</span> Intermediate vocab</p>
                  <p className="mt-2 sm:mt-3 text-center font-semibold text-xs sm:text-sm">Master Dutch step by step!</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Question Selector - Mobile Optimized */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-orange-600 mb-2">
                  {pendingGameMode === 'play' ? '🎯 Quiz' : 
                  pendingGameMode === 'spelling' ? '✏️ Spelling' : 
                  '📝 Fill Blank'}
                </h2>
                <p className="text-sm sm:text-lg text-gray-600">How many questions?</p>
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-3 sm:mb-4 text-center">
                  Category: <span className="text-orange-600">{selectedCategory === 'all' ? 'All' : selectedCategory.replace(/_/g, ' ').toUpperCase()}</span>
                </label>
                
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-3 text-center">
                    Number of Questions
                  </label>
                  
                  <input
                    type="range"
                    min="5"
                    max={selectedCategory === 'all' ? getTotalWordCount() : (dutchWordBank[selectedCategory]?.length || 10)}
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                    className="w-full h-2 sm:h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                  />
                  
                  <div className="text-center mt-3 sm:mt-4">
                    <span className="text-4xl sm:text-5xl font-bold text-orange-600">{numQuestions}</span>
                    <span className="text-2xl sm:text-4xl text-gray-600 ml-2">Q's</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={startGameWithQuestions}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Start with {numQuestions} Questions
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <button
                  onClick={() => setShowQuestionSelector(false)}
                  className="w-full bg-gray-200 text-gray-700 text-sm sm:text-lg font-bold py-2 sm:py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  if (gameMode === 'results') {
    const percentage = Math.round((score / numQuestions) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg w-full text-center">
          <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
            {percentage >= 80 ? 'Uitstekend!' : percentage >= 60 ? 'Goed gedaan!' : 'Keep practicing!'}
          </h2>
          <div className="mb-6">
            <div className="text-5xl sm:text-6xl font-bold text-orange-600 mb-2">{score}/{numQuestions}</div>
            <div className="text-xl sm:text-2xl text-gray-600">{percentage}% Correct</div>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <button
              onClick={() => startGame(currentGameMode)}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
              Try Again
            </button>
            <button
              onClick={goToMenu}
              className="w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Game screens with mobile optimization
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-2 sm:p-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Header - Mobile Optimized */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-6 mb-3 sm:mb-4">
          <div className="flex justify-between items-center mb-3 sm:mb-4 flex-wrap gap-2">
            <div className="flex gap-2 sm:gap-4 items-center flex-wrap">
              <button
                onClick={goToMenu}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-1"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                <span className="font-semibold text-xs sm:text-sm">Menu</span>
              </button>
              <div className="bg-green-100 px-2 py-1 sm:px-4 sm:py-2 rounded-lg">
                <span className="text-green-700 font-bold text-xs sm:text-sm">Score: {score}</span>
              </div>
              <div className="bg-blue-100 px-2 py-1 sm:px-4 sm:py-2 rounded-lg">
                <span className="text-blue-700 font-bold text-xs sm:text-sm">🔥 {streak}</span>
              </div>
            </div>
            <div className="text-gray-600 font-semibold text-xs sm:text-sm">
              {questionsAnswered}/{numQuestions}
            </div>
          </div>
          
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
              style={{ width: `${((questionsAnswered) / numQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card - Mobile Optimized */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8">
          {currentWord && gameMode === 'play' && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="mb-2 sm:mb-3">
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold ${
                    currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentWord.level}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">Translate to English:</p>
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <h2 className="text-3xl sm:text-5xl font-bold text-orange-600 break-words">{currentWord.dutch}</h2>
                  <button
                    onClick={() => speakDutch(currentWord.dutch)}
                    className="bg-orange-100 hover:bg-orange-200 p-2 sm:p-3 rounded-full transition-all flex-shrink-0"
                    title="Hear pronunciation"
                  >
                    <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    disabled={feedback !== null}
                    className={`p-3 sm:p-4 text-base sm:text-lg font-semibold rounded-xl transition-all ${
                      feedback === null
                        ? 'bg-gray-100 text-gray-800 active:bg-orange-100 active:text-orange-600'
                        : feedback.correct && option.english === currentWord.english
                        ? 'bg-green-500 text-white'
                        : !feedback.correct && option.english === currentWord.english
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {option.english}
                  </button>
                ))}
              </div>

              {feedback && (
                <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${
                  feedback.correct ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    {feedback.correct ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    )}
                    <p className={`font-semibold text-sm sm:text-base ${
                      feedback.correct ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {feedback.message}
                    </p>
                  </div>
                  
                  {!feedback.correct && (
                    <button
                      onClick={handleNext}
                      className="w-full mt-2 sm:mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
          
          {currentWord && gameMode === 'spelling' && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="mb-2 sm:mb-3">
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold ${
                    currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentWord.level} - Spelling
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">Type in Dutch:</p>
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <h2 className="text-3xl sm:text-5xl font-bold text-purple-600 break-words">{currentWord.english}</h2>
                </div>
                
                <button
                  onClick={() => speakDutch(currentWord.dutch)}
                  className="bg-purple-100 hover:bg-purple-200 px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="text-purple-600 font-semibold">Hear it</span>
                </button>
              </div>

              <form onSubmit={handleSpellingSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  value={spellingAnswer}
                  onChange={(e) => setSpellingAnswer(e.target.value)}
                  disabled={feedback !== null}
                  placeholder="Type here..."
                  className="w-full p-3 sm:p-4 text-xl sm:text-2xl text-center font-semibold border-4 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
                  autoFocus
                />
                
                {feedback === null && (
                  <button
                    type="submit"
                    disabled={!spellingAnswer.trim()}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    Submit
                  </button>
                )}
              </form>

              {feedback && (
                <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${
                  feedback.correct ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    {feedback.correct ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    )}
                    <p className={`font-semibold text-sm sm:text-base ${
                      feedback.correct ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {feedback.message}
                    </p>
                  </div>
                  
                  {!feedback.correct && (
                    <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-white rounded-lg">
                      <p className="text-gray-600 text-xs sm:text-sm mb-1">You wrote:</p>
                      <p className="text-red-600 font-bold text-base sm:text-xl line-through">{spellingAnswer}</p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2 mb-1">Correct:</p>
                      <p className="text-green-600 font-bold text-base sm:text-xl">{currentWord.dutch}</p>
                    </div>
                  )}
                  
                  <button
                    onClick={handleNext}
                    className="w-full mt-2 sm:mt-3 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </>
          )}

          {currentWord && gameMode === 'fillblank' && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="mb-2 sm:mb-3">
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold ${
                    currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentWord.level} - Fill Blank
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Complete the sentence:</p>
                
                <div className="bg-teal-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
                  <p className="text-lg sm:text-2xl font-semibold text-gray-800 leading-relaxed break-words">
                    {fillBlankSentence}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
                  <button
                    onClick={() => {
                      const hintBox = document.getElementById('hint-box');
                      if (hintBox) hintBox.classList.toggle('hidden');
                    }}
                    className="bg-blue-100 hover:bg-blue-200 px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    💡 <span className="text-blue-600 font-semibold">Hint</span>
                  </button>
                  
                  <button
                    onClick={() => speakDutch(currentWord.dutch)}
                    className="bg-teal-100 hover:bg-teal-200 px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    <span className="text-teal-600 font-semibold">Hear it</span>
                  </button>
                </div>
                
                <div id="hint-box" className="hidden bg-blue-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 animate-fadeIn">
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">English:</p>
                  <p className="text-blue-600 font-bold text-base sm:text-xl mb-2 sm:mb-3">{currentWord.english}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">Sentence:</p>
                  <p className="text-blue-700 font-medium text-sm sm:text-lg break-words">
                    {currentWord.example.match(/\(([^)]+)\)/)?.[1] || currentWord.example}
                  </p>
                </div>
              </div>

              <form onSubmit={handleFillBlankSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  value={fillBlankAnswer}
                  onChange={(e) => setFillBlankAnswer(e.target.value)}
                  disabled={feedback !== null}
                  placeholder="Type here..."
                  className="w-full p-3 sm:p-4 text-xl sm:text-2xl text-center font-semibold border-4 border-teal-300 rounded-xl focus:border-teal-500 focus:outline-none disabled:bg-gray-100"
                  autoFocus
                />
                
                {feedback === null && (
                  <button
                    type="submit"
                    disabled={!fillBlankAnswer.trim()}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    Submit
                  </button>
                )}
              </form>

              {feedback && (
                <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${
                  feedback.correct ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    {feedback.correct ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    )}
                    <p className={`font-semibold text-sm sm:text-base ${
                      feedback.correct ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {feedback.message}
                    </p>
                  </div>
                  
                  {!feedback.correct && (
                    <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-white rounded-lg">
                      <p className="text-gray-600 text-xs sm:text-sm mb-1">You wrote:</p>
                      <p className="text-red-600 font-bold text-base sm:text-xl line-through break-words">{fillBlankAnswer}</p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2 mb-1">Correct:</p>
                      <p className="text-green-600 font-bold text-base sm:text-xl break-words">{currentWord.dutch}</p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3 mb-1">Full sentence:</p>
                      <p className="text-gray-800 font-medium text-sm sm:text-lg break-words">{currentWord.example}</p>
                    </div>
                  )}
                  
                  <button
                    onClick={() => {
                      const hintBox = document.getElementById('hint-box');
                      if (hintBox) hintBox.classList.add('hidden');
                      handleNext();
                    }}
                    className="w-full mt-2 sm:mt-3 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}