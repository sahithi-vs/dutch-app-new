import React, { useState, useEffect } from 'react';
import { Volume2, Check, X, Trophy, RefreshCw, Home, BookOpen, GraduationCap, ChevronRight, ChevronLeft, LogOut, User } from 'lucide-react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import { dutchWordBank } from './data/dutchWordBank';
import { stories } from './data/stories';

const getAllWords = () => {
  const allWords = [];
  Object.entries(dutchWordBank).forEach(([category, words]) => {
    words.forEach(word => allWords.push({ ...word, category }));
  });
  return allWords;
};

const getTotalWordCount = () => getAllWords().length;

export default function DutchLearningGame() {
  const [user, setUser] = useState(null);
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
  const [showStories, setShowStories] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentGameMode, setCurrentGameMode] = useState(null);
  const [gameStartCategory, setGameStartCategory] = useState(null);

// Load user from localStorage on mount
// Load user from localStorage on mount
useEffect(() => {
  const savedUser = localStorage.getItem('dutch_app_user');
  const loginTime = localStorage.getItem('dutch_app_login_time');
  
  if (savedUser && loginTime) {
    try {
      const parsedUser = JSON.parse(savedUser);
      const timeDifference = Date.now() - parseInt(loginTime);
      const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
      
      // Check if session is less than 1 hour old
      if (timeDifference < oneHour) {
        setUser(parsedUser);
      } else {
        // Session expired, clear everything
        console.log('Session expired');
        localStorage.removeItem('dutch_app_user');
        localStorage.removeItem('dutch_app_login_time');
      }
    } catch (error) {
      console.log('Failed to restore user session');
      localStorage.removeItem('dutch_app_user');
      localStorage.removeItem('dutch_app_login_time');
    }
  }
}, []);

// ✅ Run once when reaching results screen
useEffect(() => {
  if (gameMode === 'results' && user && gameStartCategory && currentGameMode) {
    checkAndUpdateProgress(gameStartCategory, currentGameMode, score, numQuestions);
    
    // Auto-return to menu after 2 seconds (optional, smoother UX)
    setTimeout(() => {
      goToMenu();
    }, 2000);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [gameMode]);


// Load user progress when user changes
useEffect(() => {
  loadUserProgress();
}, [user]);

  const loadUserProgress = () => {
    if (!user) return;
    
    try {
      const saved = localStorage.getItem(`progress_${user.sub}`);
      if (saved) {
        setUserProgress(JSON.parse(saved));
      }
    } catch (error) {
      console.log('No existing progress found');
      setUserProgress({});
    }
  };

  const saveUserProgress = (progress) => {
    if (!user) return;
    
    try {
      localStorage.setItem(`progress_${user.sub}`, JSON.stringify(progress));
      setUserProgress(progress);
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };

const handleLoginSuccess = (credentialResponse) => {
  const decoded = jwtDecode(credentialResponse.credential);
  setUser(decoded);
  // Save user and login time to localStorage for persistence
  localStorage.setItem('dutch_app_user', JSON.stringify(decoded));
  localStorage.setItem('dutch_app_login_time', Date.now().toString());
};

const handleLogout = () => {
  googleLogout();
  setUser(null);
  setUserProgress({});
  // Clear user and login time from localStorage
  localStorage.removeItem('dutch_app_user');
  localStorage.removeItem('dutch_app_login_time');
  goToMenu();
};

  const checkAndUpdateProgress = (category, mode, score, totalQuestions) => {
    if (!user || category === 'all') return;

    const percentage = (score / totalQuestions) * 100;
    const passed = percentage >= 80 && totalQuestions >= 40;

    const updatedProgress = { ...userProgress };
    
    if (!updatedProgress[category]) {
      updatedProgress[category] = {
        multipleChoice: { score: 0, wordsAttempted: 0, passed: false },
        spelling: { score: 0, wordsAttempted: 0, passed: false },
        completed: false
      };
    }

    if (mode === 'play') {
      updatedProgress[category].multipleChoice = {
        score: percentage,
        wordsAttempted: totalQuestions,
        passed: passed
      };
    } else if (mode === 'spelling') {
      updatedProgress[category].spelling = {
        score: percentage,
        wordsAttempted: totalQuestions,
        passed: passed
      };
    }

    // Check if both challenges are passed
    updatedProgress[category].completed = 
      updatedProgress[category].multipleChoice.passed && 
      updatedProgress[category].spelling.passed;

    saveUserProgress(updatedProgress);
  };

  const isCategoryCompleted = (category) => {
    if (!user || category === 'all') return false;
    return userProgress[category]?.completed || false;
  };

const getCategoryProgress = (category) => {
  if (!user || category === 'all') return { multipleChoice: false, spelling: false };
  return {
    multipleChoice: userProgress[category]?.multipleChoice?.passed || false,
    spelling: userProgress[category]?.spelling?.passed || false
  };
};

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

  const startLearnMode = () => {
    const words = loadWords(selectedCategory);
    if (words.length === 0) {
      alert('Not enough words in this category.');
      return;
    }
    if (words.length < numQuestions) {
      alert(`Not enough words in this category. Please select a category with at least ${numQuestions} words or reduce the number of questions.`);
      return;
    }
    setLearnWords(words.slice(0, numQuestions));
    setLearnIndex(0);
    setGameMode('learn');
    setShowQuestionSelector(false);
  };

  const startGame = (mode = 'play') => {
    const words = loadWords(selectedCategory);
    
    if (mode === 'play' && words.length < 4) {
      alert('Not enough words in this category.');
      return;
    }
    
    if (mode === 'spelling' && words.length < 1) {
      alert('Not enough words in this category.');
      return;
    }
    
    if (words.length < numQuestions) {
      alert(`Not enough words in this category. Please select a category with at least ${numQuestions} words or reduce the number of questions.`);
      return;
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
    setShowQuestionSelector(false);
    
    if (mode === 'spelling') {
      generateSpellingQuestion(words, []);
    } else {
      generateQuestion(words, []);
    }
  };

  const openQuestionSelector = (mode) => {
    setPendingGameMode(mode);
    setShowQuestionSelector(true);
  };

  const startGameWithQuestions = () => {
    if (numQuestions < 10 || numQuestions > 45) {
      alert('Please select between 10 and 45 questions.');
      return;
    }
    if (pendingGameMode === 'learn') {
      startLearnMode();
    } else {
      startGame(pendingGameMode);
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

  const handleAnswer = (selected) => {
    const isCorrect = selected.english === currentWord.english;
    playSound(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback({ correct: true, message: 'Goed gedaan! (Well done!)' });
      
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
        message: `Niet helemaal! The correct answer is "${currentWord.english}"` 
      });
    }
    
    setQuestionsAnswered(questionsAnswered + 1);
  };

  const handleNext = () => {
    setSpellingAnswer('');
    if (questionsAnswered >= numQuestions) {
      setGameMode('results');
    } else {
      if (gameMode === 'spelling') {
        generateSpellingQuestion();
      } else {
        generateQuestion();
      }
    }
  };

  const handleSpellingSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (!spellingAnswer.trim()) {
      return;
    }
    
    const userAnswer = spellingAnswer.trim().toLowerCase();
    const correctAnswer = currentWord.dutch.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    playSound(isCorrect); 
    setQuestionsAnswered(questionsAnswered + 1);
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback({ correct: true, message: 'Perfect! Goed gedaan! (Well done!)' });
      
      setTimeout(() => {
        if (questionsAnswered + 1  >= numQuestions) {
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
        message: `Not quite! The correct spelling is "${currentWord.dutch}"` 
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
        oscillator.frequency.setValueAtTime(500, audioContext.currentTime + 0.05);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } else {
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.4);
        gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
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
    setShowQuestionSelector(false);
    setPendingGameMode(null);
    setNumQuestions(10);
    setCurrentGameMode(null);
    setGameStartCategory(null);
  };

  // Login screen
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">🇳🇱 Leer Nederlands</h1>
          <p className="text-gray-600 text-lg mb-8">Sign in to track your progress</p>
          
          <div className="bg-orange-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 mb-4">✓ Track your learning progress</p>
            <p className="text-gray-700 mb-4">✓ Unlock categories with 80%+ score</p>
            <p className="text-gray-700">✓ Complete 40+ words per challenge</p>
          </div>

          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => console.log('Login Failed')}
              useOneTap
            />
          </div>
        </div>
      </div>
    );
  }

  // Stories mode
  if (gameMode === 'stories' && !selectedStory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-xl w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-yellow-700">📖 Choose a Story</h2>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-lg transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
          <div className="space-y-4">
            {stories.map(story => (
              <button
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-lg font-bold py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {story.title}
              </button>
            ))}
          </div>
          <button
            onClick={() => { setGameMode('menu'); setShowStories(false); }}
            className="mt-8 w-full bg-gray-200 text-gray-700 text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  if (gameMode === 'stories' && selectedStory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-yellow-700 mb-6 text-center">{selectedStory.title}</h2>
          <div className="prose prose-lg max-w-none text-gray-800 mb-8" style={{ whiteSpace: 'pre-line' }}>
            {selectedStory.text}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedStory(null)}
              className="w-full bg-yellow-400 text-white text-lg font-bold py-3 rounded-xl hover:bg-yellow-500 transition-all flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Stories
            </button>
            <button
              onClick={() => { setGameMode('menu'); setShowStories(false); setSelectedStory(null); }}
              className="w-full bg-gray-200 text-gray-700 text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
          {!showQuestionSelector ? (
            <>
              <div className="text-center mb-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-lg">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700 font-semibold">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-lg transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
                <h1 className="text-5xl font-bold text-orange-600 mb-2">🇳🇱 Leer Nederlands</h1>
                <p className="text-gray-600 text-lg">1000+ Most Common Dutch Words - A1 🟢 & A2 🔵</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-bold">{getTotalWordCount()} Words Available!</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">Choose a Thema category: </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-xl">
                  {categories.map(cat => {
                    const wordCount = cat === 'all' ? getTotalWordCount() : (dutchWordBank[cat]?.length || 0);
                    const hasA1 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A1');
                    const hasA2 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A2');
                    const isCompleted = isCategoryCompleted(cat);
                    const progress = getCategoryProgress(cat);
                    const hasPartialProgress = (progress.multipleChoice || progress.spelling) && !isCompleted;
                    
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`p-3 rounded-xl font-medium transition-all text-xs relative ${
                          // REPLACE THE ENTIRE className LOGIC WITH #3 FROM ABOVE
                          selectedCategory === cat
                            ? (isCompleted 
                                ? 'bg-green-600 text-white shadow-lg scale-105 border-2 border-yellow-400' 
                                : hasPartialProgress
                                ? 'bg-yellow-500 text-white shadow-lg scale-105'
                                : 'bg-orange-500 text-white shadow-lg scale-105')
                            : isCompleted
                            ? 'bg-green-500 text-white hover:bg-green-600 border-2 border-green-600'
                            : hasPartialProgress
                            ? 'bg-yellow-400 text-gray-800 hover:bg-yellow-500 border-2 border-yellow-500'
                            : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                        }`}
                      >
                            {isCompleted && (
                            <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
                              <Trophy className="w-3 h-3 text-white" />
                            </div>
                          )}
                          {!isCompleted && hasPartialProgress && (
                            <div className="absolute -top-1 -right-1 bg-blue-400 rounded-full px-1.5 py-0.5">
                              <span className="text-white text-xs font-bold">
                                {progress.multipleChoice ? '✓' : ''}{progress.spelling ? '✏' : ''}
                              </span>
                            </div>
                          )}
                        <div className="font-bold text-sm">{cat === 'all' ? 'All Lessons' : cat.replace(/_/g, ' ').replace(/lesson /g, 'L').toUpperCase()}</div>
                        <div className="opacity-75 mt-1">
                          {wordCount} words
                          {(hasA1 || hasA2) && (
                            <span className="ml-1">
                              {hasA1 && 'A1 🟢'} {hasA2 && 'A2 🔵'}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openQuestionSelector('learn')}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-6 h-6" />
                  Learn Mode - Study Vocabulary
                </button>
                
                <button
                  onClick={() => openQuestionSelector('play')}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-6 h-6" />
                  Multiple Choice Quiz
                </button>
                
                <button
                  onClick={() => openQuestionSelector('spelling')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  ✏️ Spelling Challenge
                </button>
                <button
                  onClick={() => { setShowStories(true); setGameMode('stories'); }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  📖 Stories
                </button>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-xl">
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="text-center font-bold text-orange-600 mb-2">Official "1000+ Most Common Words in Dutch" Course</p>
                  <p><span className="font-bold">🟢 A1 Level:</span> Basic essential words for beginners</p>
                  <p><span className="font-bold">🔵 A2 Level:</span> Intermediate vocabulary</p>
                  <p className="mt-3 text-center font-semibold">📚 Learn Mode → ✅ Multiple Choice → ✏️ Spelling Challenge</p>
                  <p className="mt-2 text-center italic">Master Dutch vocabulary step by step!</p>
                  <p className="mt-3 text-center font-bold text-green-600">🏆 Complete both quizzes with 80%+ and 40+ words to unlock category!</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-orange-600 mb-2">
                  {pendingGameMode === 'play' ? '📝 Multiple Choice Quiz' : 
                   pendingGameMode === 'spelling' ? '✏️ Spelling Challenge' : 
                   '📚 Learn Mode - Study Vocabulary'}
                </h2>
                <p className="text-gray-600 text-lg">How many words would you like to study?</p>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-4 text-center">
                  Selected Category: <span className="text-orange-600">{selectedCategory === 'all' ? 'All Lessons' : selectedCategory.replace(/_/g, ' ').toUpperCase()}</span>
                </label>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <label className="block text-gray-700 font-semibold mb-3 text-center">
                    Number of Questions/Words
                  </label>
{(() => {
  const availableWords = selectedCategory === 'all' 
    ? getTotalWordCount() 
    : (dutchWordBank[selectedCategory]?.length || 0);
  const maxQuestions = availableWords; // Cap at 45 or available words
  const minQuestions = 10;
  
  // Adjust numQuestions if it exceeds new max
  if (numQuestions > maxQuestions) {
    setNumQuestions(maxQuestions);
  }
  
  return (
    <>
      <input
        type="range"
        min={minQuestions}
        max={maxQuestions}
        value={Math.min(numQuestions, maxQuestions)}
        onChange={(e) => setNumQuestions(parseInt(e.target.value))}
        className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #f97316 0%, #f97316 ${((Math.min(numQuestions, maxQuestions) - minQuestions) / (maxQuestions - minQuestions)) * 100}%, #fed7aa ${((Math.min(numQuestions, maxQuestions) - minQuestions) / (maxQuestions - minQuestions)) * 100}%, #fed7aa 100%)`
        }}
      />
      <div className="text-center mt-4">
        <span className="text-5xl font-bold text-orange-600">{Math.min(numQuestions, maxQuestions)}</span>
        <span className="text-5xl text-gray-600 ml-2">Questions</span>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>Min: {minQuestions}</span>
        <span>Max: {maxQuestions} (of {availableWords} words)</span>
      </div>
    </>
  );
})()}
                  {pendingGameMode !== 'learn' && numQuestions >= 40 && (
                    <div className="mt-4 p-3 bg-green-100 rounded-lg text-center">
                      <p className="text-green-700 font-semibold">✓ Score 80%+ to unlock this category!</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={startGameWithQuestions}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  {pendingGameMode === 'learn' ? 'Start Learning' : 'Start quiz with'} {numQuestions} {pendingGameMode === 'learn' ? 'Words' : 'Questions'}
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => setShowQuestionSelector(false)}
                  className="w-full bg-gray-200 text-gray-700 text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to Category Selection
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

   if (gameMode === 'learn') {
      const currentLearnWord = learnWords[learnIndex];
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={goToMenu}
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-2"
                >
                  <Home className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold">Menu</span>
                </button>
                <div className="text-gray-600 font-semibold">
                  {learnIndex + 1} / {learnWords.length}
                </div>
              </div>
              
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
                  style={{ width: `${((learnIndex + 1) / learnWords.length) * 100}%` }}
                />
              </div>
            </div>
  
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {currentLearnWord && (
                <div className="text-center">
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      currentLearnWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {currentLearnWord.level} Level  
                     &nbsp; {currentLearnWord.category.replace(/_/g, ' ')}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <h2 className="text-6xl font-bold text-indigo-600">{currentLearnWord.dutch}</h2>
                      <button
                        onClick={() => speakDutch(currentLearnWord.dutch)}
                        className="bg-indigo-100 hover:bg-indigo-200 p-4 rounded-full transition-all"
                      >
                        <Volume2 className="w-8 h-8 text-indigo-600" />
                      </button>
                    </div>
                    
                    <div className="text-4xl font-semibold text-gray-700 mb-2">
                      {currentLearnWord.english}
                    </div>
                    
                    <div className="text-lg text-gray-500 capitalize">
                     
  
                    </div>
                    <span>&nbsp; Eg: {currentLearnWord.example}</span>
                  </div>
  
                  <div className="flex gap-4 justify-center mt-8">
                    <button
                      onClick={() => setLearnIndex(Math.max(0, learnIndex - 1))}
                      disabled={learnIndex === 0}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Previous
                    </button>
                    
                    {learnIndex < learnWords.length - 1 ? (
                      <button
                        onClick={() => setLearnIndex(learnIndex + 1)}
                        className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 transition-all flex items-center gap-2"
                      >
                        Next
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          if (confirm('Ready to test yourself?')) {
                            startGame();
                          }
                        }}
                        className="px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all flex items-center gap-2"
                      >
                        Start Test
                        <GraduationCap className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  
    if (gameMode === 'results') {
      const percentage = Math.round((score / numQuestions) * 100);
      // useEffect(() => {
      //   if (gameMode === 'results' && user && gameStartCategory && currentGameMode) {
      //     checkAndUpdateProgress(gameStartCategory, currentGameMode, score, numQuestions);
      //   }
      //   // eslint-disable-next-line react-hooks/exhaustive-deps
      // }, [gameMode]);

          return (
        <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center">
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {percentage >= 80 ? 'Uitstekend! You\'re ready for the exam!' :
                 percentage >= 60 ? 'Goed! Keep practicing!' :
                 'Keep learning! Review the words and try again!'}
              </h2>
            <div className="mb-6">
              <div className="text-6xl font-bold text-orange-600 mb-2">{score}/{numQuestions}</div>
              <div className="text-2xl text-gray-600">{percentage}% Correct</div>
            </div>
            
            {/* <div className="bg-orange-50 rounded-xl p-4 mb-6">
              <p className="text-lg text-gray-700">
                {percentage >= 80 ? 'Uitstekend! You\'re ready for the exam!' :
                 percentage >= 60 ? 'Goed! Keep practicing!' :
                 'Keep learning! Review the words and try again!'}
              </p>
            </div> */}
  
            <div className="space-y-3">
              <button
                onClick={startGame}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Test Again
              </button>
              <button
                onClick={startLearnMode}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Review Words
              </button>
              <button
                onClick={goToMenu}
                className="w-full bg-gray-200 text-gray-700 text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-4 items-center">
                <button
                  onClick={goToMenu}
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-2"
                  title="Back to Menu"
                >
                  <Home className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold">Menu</span>
                </button>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <span className="text-green-700 font-bold">Score: {score}</span>
                </div>
                <div className="bg-blue-100 px-4 py-2 rounded-lg">
                  <span className="text-blue-700 font-bold">Streak: {streak} 🔥</span>
                </div>
              </div>
              <div className="text-gray-600 font-semibold">
                Question {questionsAnswered}/{numQuestions}
              </div>
            </div>
            
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
                style={{ width: `${((questionsAnswered) / numQuestions) * 100}%` }}
              />
            </div>
          </div>
  
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {currentWord && gameMode !== 'spelling' && (
              <>
                <div className="text-center mb-8">
                  <div className="mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {currentWord.level} Level
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">What is the English translation of:</p>
                  <div className="flex items-center justify-center gap-3">
                    <h2 className="text-5xl font-bold text-orange-600">{currentWord.dutch}</h2>
                    <button
                      onClick={() => speakDutch(currentWord.dutch)}
                      className="bg-orange-100 hover:bg-orange-200 p-3 rounded-full transition-all"
                      title="Hear pronunciation"
                    >
                      <Volume2 className="w-6 h-6 text-orange-600" />
                    </button>
                  </div>
                </div>
  
                <div className="grid grid-cols-1 gap-3">
                  {options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      disabled={feedback !== null}
                      className={`p-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-102 ${
                        feedback === null
                          ? 'bg-gray-100 hover:bg-orange-100 text-gray-800 hover:text-orange-600'
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
                  <div className={`mt-6 p-4 rounded-xl ${
                    feedback.correct ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      {feedback.correct ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-red-600" />
                      )}
                      <p className={`font-semibold ${
                        feedback.correct ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {feedback.message}
                      </p>
                    </div>
                    
                    {!feedback.correct && (
                      <button
                        onClick={handleNext}
                        className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        Next Question
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
            
            {currentWord && gameMode === 'spelling' && (
              <>
                <div className="text-center mb-8">
                  <div className="mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {currentWord.level} Level - Spelling Challenge
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">Type the Dutch word for:</p>
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <h2 className="text-5xl font-bold text-purple-600">{currentWord.english}</h2>
                  </div>
                  
                  <button
                    onClick={() => speakDutch(currentWord.dutch)}
                    className="bg-purple-100 hover:bg-purple-200 px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2 mb-6"
                    title="Hear the pronunciation"
                  >
                    <Volume2 className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-600 font-semibold">Hear pronunciation</span>
                  </button>
                </div>
  
                <form onSubmit={handleSpellingSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={spellingAnswer}
                    onChange={(e) => setSpellingAnswer(e.target.value)}
                    disabled={feedback !== null}
                    placeholder="Type the Dutch word here..."
                    className="w-full p-4 text-2xl text-center font-semibold border-4 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
                    autoFocus
                  />
                  
                  {feedback === null && (
                    <button
                      type="submit"
                      disabled={!spellingAnswer.trim()}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Answer
                    </button>
                  )}
                </form>
  
                {feedback && (
                  <div className={`mt-6 p-4 rounded-xl ${
                    feedback.correct ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      {feedback.correct ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-red-600" />
                      )}
                      <p className={`font-semibold ${
                        feedback.correct ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {feedback.message}
                      </p>
                    </div>
                    
                    {!feedback.correct && (
                      <div className="mb-3 p-3 bg-white rounded-lg">
                        <p className="text-gray-600 text-sm mb-1">You wrote:</p>
                        <p className="text-red-600 font-bold text-xl line-through">{spellingAnswer}</p>
                        <p className="text-gray-600 text-sm mt-2 mb-1">Correct answer:</p>
                        <p className="text-green-600 font-bold text-xl">{currentWord.dutch}</p>
                      </div>
                    )}
                    
                    <button
                      onClick={handleNext}
                      className="w-full mt-3 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      Next Question
                      <ChevronRight className="w-5 h-5" />
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