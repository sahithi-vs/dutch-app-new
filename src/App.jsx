import React, { useState, useEffect } from 'react';
import { Volume2, Check, X, Trophy, RefreshCw, Home, BookOpen, GraduationCap, ChevronRight, ChevronLeft, LogOut, User, Menu } from 'lucide-react';
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
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeWords, setWelcomeWords] = useState([]);
  const [difficulty, setDifficulty] = useState('normal'); // 'normal' or 'spelling'
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [storyQuestions, setStoryQuestions] = useState([]);
  const [currentStoryQuestion, setCurrentStoryQuestion] = useState(0);
  const [storyScore, setStoryScore] = useState(0);
  const [showStoryQuiz, setShowStoryQuiz] = useState(false);
  const [storyQuizFeedback, setStoryQuizFeedback] = useState(null);
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
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
  const [fillBlankAnswer, setFillBlankAnswer] = useState('');
  const [fillBlankSentence, setFillBlankSentence] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState('');
  // Add global styles
// Add global styles
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
      }
      
      input, textarea {
        -webkit-user-select: text;
        user-select: text;
      }
      
      @media (hover: none) {
        *:hover {
          background-color: inherit !important;
          color: inherit !important;
        }
      }
    `;
    if (!document.getElementById('mobile-hover-fix')) {
      style.id = 'mobile-hover-fix';
      document.head.appendChild(style);
    }
  }

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('dutch_app_user');
    const loginTime = localStorage.getItem('dutch_app_login_time');
    
    if (savedUser && loginTime) {
      try {
        const parsedUser = JSON.parse(savedUser);
        const timeDifference = Date.now() - parseInt(loginTime);
        const oneHour = 60 * 60 * 1000;
        
        if (timeDifference < oneHour) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem('dutch_app_user');
          localStorage.removeItem('dutch_app_login_time');
        }
      } catch (error) {
        localStorage.removeItem('dutch_app_user');
        localStorage.removeItem('dutch_app_login_time');
      }
    }
  }, []);

  useEffect(() => {
  if (user && gameMode === 'menu' && showWelcome) {
    // Auto-hide welcome screen after 10 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }
}, [user, gameMode, showWelcome]);

// Initialize welcome words when user logs in
useEffect(() => {
  if (user && welcomeWords.length === 0) {
    const allWords = getAllWords();
    const shuffled = allWords.sort(() => Math.random() - 0.5);
    setWelcomeWords(shuffled.slice(0, 5));
  }
}, [user]);

// Auto-rotate welcome words every 4 seconds and load new batch after completing cycle
useEffect(() => {
  if (user && welcomeWords.length > 0) {
    const interval = setInterval(() => {
      setCurrentWelcomeIndex((prev) => {
        const nextIndex = prev + 1;
        
        // If we've shown all 5 words, load a new batch
        if (nextIndex >= welcomeWords.length) {
          const allWords = getAllWords();
          const shuffled = allWords.sort(() => Math.random() - 0.5);
          setWelcomeWords(shuffled.slice(0, 5));
          return 0; // Start from beginning with new words
        }
        
        return nextIndex;
      });
    }, 4000); // 4 seconds
    
    return () => clearInterval(interval);
  }
}, [user, welcomeWords]);

useEffect(() => {
  if (gameMode === 'results' && user && gameStartCategory && currentGameMode) {
    checkAndUpdateProgress(gameStartCategory, currentGameMode, score, numQuestions);
    // Removed auto-redirect - user can navigate manually
  }
}, [gameMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSearchResults && !event.target.closest('.search-container')) {
        setShowSearchResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearchResults]);

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
      setUserProgress({});
    }
  };

const handleSpeakingResult = (spokenText) => {
  if (!currentWord) return;
  
  // Map of digits to Dutch words
  const digitToDutch = {
    '0': 'nul',
    '1': 'een',
    '2': 'twee',
    '3': 'drie',
    '4': 'vier',
    '5': 'vijf',
    '6': 'zes',
    '7': 'zeven',
    '8': 'acht',
    '9': 'negen',
    '10': 'tien',
    '11': 'elf',
    '12': 'twaalf',
    '13': 'dertien',
    '14': 'veertien',
    '15': 'vijftien',
    '16': 'zestien',
    '17': 'zeventien',
    '18': 'achttien',
    '19': 'negentien',
    '20': 'twintig',
    '21': 'eenentwintig',
    '22': 'tweeëntwintig',
    '23': 'drieëntwintig',
    '24': 'vierentwintig',
    '25': 'vijfentwintig',
    '26': 'zesentwintig',
    '27': 'zevenentwintig',
    '28': 'achtentwintig',
    '29': 'negenentwintig',
    '30': 'dertig',
    '40': 'veertig',
    '50': 'vijftig',
    '60': 'zestig',
    '70': 'zeventig',
    '80': 'tachtig',
    '90': 'negentig',
    '100': 'honderd',
    '1000': 'duizend'
  };
  
  const correctAnswer = currentWord.dutch.toLowerCase().trim();
  let userAnswer = spokenText.toLowerCase().trim();
  
  // Convert digits to Dutch words in the spoken text
  Object.keys(digitToDutch).forEach(digit => {
    const regex = new RegExp(`\\b${digit}\\b`, 'g');
    userAnswer = userAnswer.replace(regex, digitToDutch[digit]);
  });
  
  // Calculate similarity (simple word matching)
  const correctWords = correctAnswer.split(/\s+/);
  const spokenWords = userAnswer.split(/\s+/);
  
  // Check if all correct words are present
  const matchedWords = correctWords.filter(word => 
    spokenWords.some(spoken => 
      spoken.includes(word) || word.includes(spoken)
    )
  );
  
  const accuracy = (matchedWords.length / correctWords.length) * 100;
  const isCorrect = accuracy >= 70; // 70% match threshold
  
  playSound(isCorrect);
  setQuestionsAnswered(questionsAnswered + 1);
  
  if (isCorrect) {
    setScore(score + 1);
    setStreak(streak + 1);
    setFeedback({ 
      correct: true, 
      message: `Perfect! You said: "${spokenText}"`,
      accuracy: Math.round(accuracy)
    });
} else {
  setStreak(0);
  setFeedback({ 
    correct: false, 
    message: `Not quite! Expected: "${currentWord.dutch}"`,
    userSaid: spokenText,
    accuracy: Math.round(accuracy)
  });
  
  // Track wrong answer
  setWrongAnswers(prev => [...prev, {
    dutch: currentWord.dutch,
    english: currentWord.english,
    userAnswer: spokenText,
    correctAnswer: currentWord.dutch,
    example: currentWord.example,
    accuracy: Math.round(accuracy),
    type: 'speaking'
  }]);
}
};

useEffect(() => {
  if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'nl-NL';
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    
    recognitionInstance.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      setTranscript(spokenText);
      // Don't call handleSpeakingResult here - we'll handle it separately
    };
    
    recognitionInstance.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
      if (event.error === 'no-speech') {
        alert('No speech detected. Please try again.');
      } else if (event.error === 'not-allowed') {
        alert('Microphone access denied. Please enable microphone permissions.');
      }
    };
    
    recognitionInstance.onend = () => {
      setIsRecording(false);
    };
    
    setRecognition(recognitionInstance);
  }
}, []);

// Add a new useEffect to handle transcript changes
useEffect(() => {
  if (transcript && gameMode === 'speaking' && currentWord && !feedback) {
    handleSpeakingResult(transcript);
  }
}, [transcript]);


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
    localStorage.setItem('dutch_app_user', JSON.stringify(decoded));
    localStorage.setItem('dutch_app_login_time', Date.now().toString());
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    setUserProgress({});
    localStorage.removeItem('dutch_app_user');
    localStorage.removeItem('dutch_app_login_time');
    goToMenu();
  };

const checkAndUpdateProgress = (category, mode, score, totalQuestions) => {
  if (!user || category === 'all') return;

  // Only track progress for 'play' (multiple choice) and 'spelling' modes
  if (mode !== 'play' && mode !== 'spelling') return;

  const percentage = (score / totalQuestions) * 100;
  const availableWords = dutchWordBank[category]?.length || 0;
  const requiredQuestions = Math.ceil(availableWords * 0.8);
  const passed = percentage >= 80 && totalQuestions >= requiredQuestions;

  const updatedProgress = { ...userProgress };
  
  if (!updatedProgress[category]) {
    updatedProgress[category] = {
      multipleChoice: { score: 0, wordsAttempted: 0, passed: false },
      spelling: { score: 0, wordsAttempted: 0, passed: false },
      spellingDifficulty: { score: 0, wordsAttempted: 0, passed: false },
      completed: false
    };
  }

  if (mode === 'play') {
    if (difficulty === 'spelling') {
      updatedProgress[category].spellingDifficulty = {
        score: percentage,
        wordsAttempted: totalQuestions,
        passed: passed
      };
    } else {
      updatedProgress[category].multipleChoice = {
        score: percentage,
        wordsAttempted: totalQuestions,
        passed: passed
      };
    }
  } else if (mode === 'spelling') {
    updatedProgress[category].spelling = {
      score: percentage,
      wordsAttempted: totalQuestions,
      passed: passed
    };
  }

  updatedProgress[category].completed = 
    updatedProgress[category].multipleChoice.passed && 
    updatedProgress[category].spelling.passed &&
    updatedProgress[category].spellingDifficulty.passed;

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

  // Check if all A1 categories have passed multiple choice
const areAllA1CategoriesCompleted = () => {
  if (!user) return false;
  
  const a1Categories = Object.keys(dutchWordBank).filter(cat => {
    const words = dutchWordBank[cat];
    return words && words.length > 0 && words.some(w => w.level === 'A1');
  });
  
  return a1Categories.every(cat => 
    userProgress[cat]?.multipleChoice?.passed || false
  );
};

// Check if a category is locked (A2 categories locked until all A1 completed)
const isCategoryLocked = (category) => {
  if (!user || category === 'all') return false;
  
  const words = dutchWordBank[category];
  if (!words || words.length === 0) return false;
  
  // Check if this is an A2-only category
  const hasA1 = words.some(w => w.level === 'A1');
  const hasA2 = words.some(w => w.level === 'A2');
  
  // If it has A1 words, it's not locked
  if (hasA1) return false;
  
  // If it's A2-only, check if all A1 categories are completed
  if (hasA2 && !hasA1) {
    return !areAllA1CategoriesCompleted();
  }
  
  return false;
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
    
    if ((mode === 'spelling' || mode === 'fillblank' || mode === 'speaking' ) && words.length < 1) {
      alert('Not enough words in this category.');
      return;
    }
    
    if (mode === 'fillblank') {
      const wordsWithValidExamples = words.filter(w => {
        if (!w.example) return false;
        const exampleLower = w.example.toLowerCase();
        const dutchLower = w.dutch.toLowerCase();
        return exampleLower.includes(dutchLower);
      });
      
      if (wordsWithValidExamples.length < numQuestions) {
        alert(`Not enough words with suitable examples for Fill in the Blank mode. Only ${wordsWithValidExamples.length} words available. Please reduce the number of questions or choose a different category.`);
        return;
      }
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
    setWrongAnswers([]);
    setSpellingAnswer('');
    setFillBlankAnswer('');
    setShowQuestionSelector(false);
    
if (mode === 'spelling') {
      generateSpellingQuestion(words, []);
    } else if (mode === 'fillblank') {
      generateFillBlankQuestion(words, []);
    } else if (mode === 'speaking') {
      generateSpeakingQuestion(words, []);
    } else {
      generateQuestion(words, []);
    }
  };


  const openQuestionSelector = (mode) => {
    setPendingGameMode(mode);
    setShowQuestionSelector(true);
  };

const startGameWithQuestions = () => {
  const availableWords = selectedCategory === 'all' 
    ? getTotalWordCount() 
    : (dutchWordBank[selectedCategory]?.length || 0);
  
  // For fillblank mode, check actual available words with examples
  let maxQuestions = availableWords;
  if (pendingGameMode === 'fillblank') {
    const words = loadWords(selectedCategory);
    const wordsWithValidExamples = words.filter(w => {
      if (!w.example) return false;
      const exampleLower = w.example.toLowerCase();
      const dutchLower = w.dutch.toLowerCase();
      return exampleLower.includes(dutchLower);
    });
    maxQuestions = wordsWithValidExamples.length;
  }
  
  if (numQuestions < 10 || numQuestions > maxQuestions) {
    alert(`Please select between 10 and ${maxQuestions} questions.`);
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
    
    // If we've used all words, end the game
    if (availableWords.length === 0) {
      setGameMode('results');
      return;
    }
    
    // If not enough words left for a proper multiple choice question
    if (availableWords.length < 1) {
      setGameMode('results');
      return;
    }
    
    const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
    
    let allOptions;
    
    if (difficulty === 'spelling') {
      // Generate misspelled versions
      const wrongOptions = generateMisspelledOptions(correct.dutch);
      allOptions = [correct.dutch, ...wrongOptions].sort(() => Math.random() - 0.5);
    } else {
      // Normal mode - Filter wrong options more intelligently
      let wrongOptions = availableWords
        .filter(w => w.english !== correct.english)
        .sort((a, b) => {
          const aScore = (a.category === correct.category ? 100 : 0) + 
                        (a.level === correct.level ? 50 : 0);
          const bScore = (b.category === correct.category ? 100 : 0) + 
                        (b.level === correct.level ? 50 : 0);
          return bScore - aScore + (Math.random() - 0.5) * 30;
        })
        .slice(0, 3);
      
      // If not enough wrong options from current words, get from all words
      if (wrongOptions.length < 3) {
        const allWords = getAllWords();
        const additionalOptions = allWords
          .filter(w => 
            w.english !== correct.english && 
            !wrongOptions.some(wo => wo.english === w.english) &&
            !used.some(u => u.dutch === w.dutch && u.english === w.english)
          )
          .sort(() => Math.random() - 0.5)
          .slice(0, 3 - wrongOptions.length);
        wrongOptions = [...wrongOptions, ...additionalOptions];
      }
      
      // Final fallback: use ANY words if still not enough
      if (wrongOptions.length < 3) {
        const allWords = getAllWords();
        const finalOptions = allWords
          .filter(w => 
            w.english !== correct.english && 
            !wrongOptions.some(wo => wo.english === w.english)
          )
          .sort(() => Math.random() - 0.5)
          .slice(0, 3 - wrongOptions.length);
        wrongOptions = [...wrongOptions, ...finalOptions];
      }
      
      allOptions = [correct, ...wrongOptions].sort(() => Math.random() - 0.5);
    }
    
    setCurrentWord(correct);
    setOptions(difficulty === 'spelling' ? allOptions.map(opt => ({ dutch: opt, english: opt })) : allOptions);
    setFeedback(null);
    setUsedWords([...used, correct]);
  };

// Helper function to generate misspelled versions
const generateMisspelledOptions = (word) => {
  const misspellings = [];
  const wordLower = word.toLowerCase();
  
  // Strategy 1: Swap two adjacent letters
  if (wordLower.length > 2) {
    const pos = Math.floor(Math.random() * (wordLower.length - 1));
    const swapped = wordLower.slice(0, pos) + wordLower[pos + 1] + wordLower[pos] + wordLower.slice(pos + 2);
    misspellings.push(swapped);
  }
  
  // Strategy 2: Replace a vowel with another vowel
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelPositions = [...wordLower].map((char, idx) => vowels.includes(char) ? idx : -1).filter(idx => idx !== -1);
  if (vowelPositions.length > 0) {
    const pos = vowelPositions[Math.floor(Math.random() * vowelPositions.length)];
    const currentVowel = wordLower[pos];
    const newVowel = vowels.filter(v => v !== currentVowel)[Math.floor(Math.random() * 4)];
    const vowelSwap = wordLower.slice(0, pos) + newVowel + wordLower.slice(pos + 1);
    misspellings.push(vowelSwap);
  }
  
  // Strategy 3: Double a consonant or remove a double
  const consonantPos = [...wordLower].findIndex((char, idx) => 
    !'aeiou'.includes(char) && idx < wordLower.length - 1
  );
  if (consonantPos !== -1) {
    if (wordLower[consonantPos] === wordLower[consonantPos + 1]) {
      // Remove double
      const removeDouble = wordLower.slice(0, consonantPos) + wordLower.slice(consonantPos + 1);
      misspellings.push(removeDouble);
    } else {
      // Add double
      const addDouble = wordLower.slice(0, consonantPos + 1) + wordLower[consonantPos] + wordLower.slice(consonantPos + 1);
      misspellings.push(addDouble);
    }
  }
  
  // Fill remaining slots with random variations if needed
  while (misspellings.length < 3) {
    const pos = Math.floor(Math.random() * wordLower.length);
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    const variation = wordLower.slice(0, pos) + randomChar + wordLower.slice(pos + 1);
    if (!misspellings.includes(variation) && variation !== wordLower) {
      misspellings.push(variation);
    }
  }
  
  return misspellings.slice(0, 3);
};

const generateSpellingQuestion = (words = wordBank, used = usedWords) => {
  if (words.length === 0) return;
  
  const availableWords = words.filter(w => 
    !used.some(u => u.dutch === w.dutch && u.english === w.english)
  );
  
  if (availableWords.length === 0) {
    setGameMode('results');
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
    // Check if word hasn't been used
    if (used.some(u => u.dutch === w.dutch && u.english === w.english)) {
      return false;
    }
    // Check if word has valid example
    if (!w.example) return false;
    const exampleLower = w.example.toLowerCase();
    const dutchLower = w.dutch.toLowerCase();
    return exampleLower.includes(dutchLower);
  });
  
  if (availableWords.length === 0) {
    setGameMode('results');
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

  const isNormalModeCompleted = (category) => {
    if (!user || category === 'all') return true; // 'all' is always unlocked
    return userProgress[category]?.multipleChoice?.passed || false;
  };

    const generateSpeakingQuestion = (words = wordBank, used = usedWords) => {
    if (words.length === 0) return;
    
    const availableWords = words.filter(w => 
      !used.some(u => u.dutch === w.dutch && u.english === w.english)
    );
    
    if (availableWords.length === 0) {
      setGameMode('results');
      return;
    }
    
    const correct = availableWords[Math.floor(Math.random() * availableWords.length)];
    
    setCurrentWord(correct);
    setFeedback(null);
    setUsedWords([...used, correct]);
  };

const handleAnswer = (selected) => {
  const isCorrect = difficulty === 'spelling' 
    ? selected.dutch.toLowerCase() === currentWord.dutch.toLowerCase()
    : selected.english === currentWord.english;
  
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
    message: difficulty === 'spelling' 
      ? `Niet helemaal! The correct spelling is "${currentWord.dutch}"` 
      : `Niet helemaal! The correct answer is "${currentWord.english}"`
  });
  
  // Track wrong answer
  setWrongAnswers(prev => [...prev, {
    dutch: currentWord.dutch,
    english: currentWord.english,
    userAnswer: difficulty === 'spelling' ? selected.dutch : selected.english,
    correctAnswer: difficulty === 'spelling' ? currentWord.dutch : currentWord.english,
    example: currentWord.example,
    type: difficulty === 'spelling' ? 'spelling_choice' : 'multiple_choice'
  }]);
}
  
  setQuestionsAnswered(questionsAnswered + 1);
};

const handleNext = () => {
  setSpellingAnswer('');
  setFillBlankAnswer('');
  setTranscript('');
  if (questionsAnswered >= numQuestions) {
    setGameMode('results');
  } else {
    if (gameMode === 'spelling') {
      generateSpellingQuestion();
    } else if (gameMode === 'fillblank') {
      generateFillBlankQuestion();
    } else if (gameMode === 'speaking') {
      generateSpeakingQuestion();
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
  
  // Track wrong answer
  setWrongAnswers(prev => [...prev, {
    dutch: currentWord.dutch,
    english: currentWord.english,
    userAnswer: spellingAnswer.trim(),
    correctAnswer: currentWord.dutch,
    example: currentWord.example,
    type: 'spelling'
  }]);
}
  };

  const handleFillBlankSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (!fillBlankAnswer.trim()) {
      return;
    }
    
    const userAnswer = fillBlankAnswer.trim().toLowerCase();
    const correctAnswer = currentWord.dutch.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    playSound(isCorrect); 
    setQuestionsAnswered(questionsAnswered + 1);
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setFeedback({ correct: true, message: 'Perfect! Goed gedaan! (Well done!)' });
      
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
    message: `Not quite! The correct word is "${currentWord.dutch}"` 
  });
  
  // Track wrong answer
  setWrongAnswers(prev => [...prev, {
    dutch: currentWord.dutch,
    english: currentWord.english,
    userAnswer: fillBlankAnswer.trim(),
    correctAnswer: currentWord.dutch,
    example: currentWord.example,
    sentence: fillBlankSentence,
    type: 'fill_blank'
  }]);
}
  };

  const startRecording = () => {
  if (!recognition) {
    alert('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
    return;
  }
  
  setTranscript('');
  setIsRecording(true);
  try {
    recognition.start();
  } catch (error) {
    console.error('Error starting recognition:', error);
    setIsRecording(false);
  }
};

const stopRecording = () => {
  if (recognition && isRecording) {
    recognition.stop();
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
    setFillBlankAnswer('');
    setFillBlankSentence('');
    setShowQuestionSelector(false);
    setPendingGameMode(null);
    setNumQuestions(10);
    setCurrentGameMode(null);
    setGameStartCategory(null);
    setTranscript('');
    setIsRecording(false);
    setDifficulty('normal');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim().length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }
    
    const allWords = getAllWords();
    const queryLower = query.toLowerCase();
    
    const results = allWords.filter(word => 
      word.dutch.toLowerCase().includes(queryLower) ||
      word.english.toLowerCase().includes(queryLower) ||
      word.example?.toLowerCase().includes(queryLower)
    );
    
    const sortedResults = results.sort((a, b) => {
      const aDutch = a.dutch.toLowerCase();
      const bDutch = b.dutch.toLowerCase();
      const aEnglish = a.english.toLowerCase();
      const bEnglish = b.english.toLowerCase();
      
      if (aDutch === queryLower) return -1;
      if (bDutch === queryLower) return 1;
      if (aEnglish === queryLower) return -1;
      if (bEnglish === queryLower) return 1;
      
      const aStartsDutch = aDutch.startsWith(queryLower);
      const bStartsDutch = bDutch.startsWith(queryLower);
      if (aStartsDutch && !bStartsDutch) return -1;
      if (!aStartsDutch && bStartsDutch) return 1;
      
      const aStartsEnglish = aEnglish.startsWith(queryLower);
      const bStartsEnglish = bEnglish.startsWith(queryLower);
      if (aStartsEnglish && !bStartsEnglish) return -1;
      if (!aStartsEnglish && bStartsEnglish) return 1;
      
      const aContainsDutch = aDutch.includes(queryLower);
      const bContainsDutch = bDutch.includes(queryLower);
      if (aContainsDutch && !bContainsDutch) return -1;
      if (!aContainsDutch && bContainsDutch) return 1;
      
      const aContainsEnglish = aEnglish.includes(queryLower);
      const bContainsEnglish = bEnglish.includes(queryLower);
      if (aContainsEnglish && !bContainsEnglish) return -1;
      if (!aContainsEnglish && bContainsEnglish) return 1;
      
      return aDutch.localeCompare(bDutch);
    });
    
    setSearchResults(sortedResults.slice(0, 20));
    setShowSearchResults(sortedResults.length > 0);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const mobileHoverFix = (
    <style>{`
      @media (hover: none) and (pointer: coarse) {
        button:hover {
          background-color: inherit !important;
          color: inherit !important;
          transform: none !important;
          scale: none !important;
        }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-in;
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  );

  
  // Login screen - MOBILE OPTIMIZED
  if (!user) {
    return (
      <>
        {mobileHoverFix}
        <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-orange-600 mb-3 sm:mb-4">🇳🇱 Leer Nederlands</h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">Sign in to track your progress</p>
            
            <div className="bg-orange-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-sm sm:text-base">
              <p className="text-gray-700 mb-3 sm:mb-4">✓ Track your learning progress</p>
              <p className="text-gray-700 mb-3 sm:mb-4">✓ Unlock categories with 80%+ score</p>
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
      </>
    );
  }

  // Stories mode - MOBILE OPTIMIZED
  if (gameMode === 'stories' && !selectedStory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-xl w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700">📖 Choose a Story</h2>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-100 hover:bg-red-200 active:bg-red-200 text-red-600 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {stories.map(story => (
              <button
                key={story.id}
                onClick={() => {
                  setSelectedStory(story);
                  setShowStoryQuiz(false);
                  setCurrentStoryQuestion(0);
                  setStoryScore(0);
                  setStoryQuizFeedback(null);
                }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-base sm:text-lg font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                {story.title}
              </button>
            ))}
          </div>
          <button
            onClick={() => { 
              setGameMode('menu'); 
              setShowStories(false);
              setSelectedStory(null);
              setScore(0);
              setStreak(0);
              setQuestionsAnswered(0);
              setFeedback(null);
            }}
            className="mt-6 sm:mt-8 w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  if (gameMode === 'stories' && selectedStory) {
    // Story quiz results - MOBILE OPTIMIZED
    if (showStoryQuiz && currentStoryQuestion >= selectedStory.questions.length) {
      const percentage = Math.round((storyScore / selectedStory.questions.length) * 100);
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg w-full text-center">
            <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
              {percentage >= 80 ? 'Uitstekend! Perfect begrip!' :
               percentage >= 60 ? 'Goed gedaan! Je begrijpt het verhaal!' :
               'Lees het verhaal nog een keer!'}
            </h2>
            <div className="mb-6">
              <div className="text-4xl sm:text-6xl font-bold text-yellow-600 mb-2">{storyScore}/{selectedStory.questions.length}</div>
              <div className="text-xl sm:text-2xl text-gray-600">{percentage}% Correct</div>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowStoryQuiz(false);
                  setCurrentStoryQuestion(0);
                  setStoryScore(0);
                  setStoryQuizFeedback(null);
                }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Probeer Opnieuw (Try Again)
              </button>
              <button
                onClick={() => {
                  setSelectedStory(null);
                  setShowStoryQuiz(false);
                  setCurrentStoryQuestion(0);
                  setStoryScore(0);
                  setStoryQuizFeedback(null);
                }}
                className="w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                Terug naar Verhalen (Back to Stories)
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    // Story quiz questions - MOBILE OPTIMIZED
    if (showStoryQuiz) {
      const question = selectedStory.questions[currentStoryQuestion];
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-w-2xl w-full">
            {/* Story Text Section - MOBILE OPTIMIZED */}
            <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-xl sm:text-2xl">📖</span>
                <h3 className="text-base sm:text-xl font-bold text-yellow-700">{selectedStory.title}</h3>
              </div>
              <div className="prose prose-sm max-w-none text-gray-700 max-h-40 sm:max-h-60 overflow-y-auto p-3 sm:p-4 bg-white rounded-lg text-sm sm:text-base" style={{ whiteSpace: 'pre-line' }}>
                {selectedStory.text}
              </div>
            </div>
            
            {/* Quiz controls - MOBILE OPTIMIZED */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-wrap justify-between items-center mb-3 sm:mb-4 gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (confirm('Weet je zeker dat je wilt stoppen? (Are you sure you want to quit?)')) {
                        setShowStoryQuiz(false);
                        setCurrentStoryQuestion(0);
                        setStoryScore(0);
                        setStoryQuizFeedback(null);
                        setGameMode('menu');
                        setSelectedStory(null);
                        setShowStories(false);
                      }
                    }}
                    className="bg-gray-100 hover:bg-gray-200 active:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-1 sm:gap-2"
                    title="Back to Menu"
                  >
                    <Home className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    <span className="font-semibold text-xs sm:text-sm">Menu</span>
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Terug naar het verhaal? (Back to story?)')) {
                        setShowStoryQuiz(false);
                        setCurrentStoryQuestion(0);
                        setStoryScore(0);
                        setStoryQuizFeedback(null);
                      }
                    }}
                    className="bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-200 p-2 rounded-lg transition-all flex items-center gap-1 sm:gap-2"
                    title="Back to Story"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-700" />
                    <span className="font-semibold text-xs sm:text-sm hidden sm:inline">Verhaal</span>
                  </button>
                </div>
                <div className="flex gap-2 sm:gap-3 items-center">
                  <div className="bg-yellow-100 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                    <span className="text-yellow-700 font-bold text-xs sm:text-base">Score: {storyScore}/{selectedStory.questions.length}</span>
                  </div>
                  <div className="text-gray-600 font-semibold text-xs sm:text-base">
                    {currentStoryQuestion + 1}/{selectedStory.questions.length}
                  </div>
                </div>
              </div>
              
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300"
                  style={{ width: `${((currentStoryQuestion) / selectedStory.questions.length) * 100}%` }}
                />
              </div>
            </div>
            
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">{question.question}</h3>
            
            <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const isCorrect = option === question.correct;
                    playSound(isCorrect);
                    
                    if (isCorrect) {
                      setStoryScore(storyScore + 1);
                      setStoryQuizFeedback({ correct: true, message: 'Goed gedaan! (Well done!)' });
                    } else {
                      setStoryQuizFeedback({ 
                        correct: false, 
                        message: `Niet helemaal! Het juiste antwoord is "${question.correct}"` 
                      });
                    }
                    
                    setTimeout(() => {
                      setStoryQuizFeedback(null);
                      setCurrentStoryQuestion(currentStoryQuestion + 1);
                    }, 2000);
                  }}
                  disabled={storyQuizFeedback !== null}
                  className={`p-3 sm:p-4 text-sm sm:text-lg font-semibold rounded-xl transition-all transform ${
                    storyQuizFeedback === null
                      ? `bg-gray-100 text-gray-800 ${!isTouchDevice ? 'hover:bg-yellow-100 hover:text-yellow-600' : 'active:bg-yellow-100'}`
                      : storyQuizFeedback.correct && option === question.correct
                      ? 'bg-green-500 text-white'
                      : !storyQuizFeedback.correct && option === question.correct
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            {storyQuizFeedback && (
              <div className={`p-3 sm:p-4 rounded-xl ${
                storyQuizFeedback.correct ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <div className="flex items-center gap-2 sm:gap-3">
                  {storyQuizFeedback.correct ? (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                  )}
                  <p className={`font-semibold text-sm sm:text-base ${
                    storyQuizFeedback.correct ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {storyQuizFeedback.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // Show story text - MOBILE OPTIMIZED
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-4 sm:mb-6 text-center">{selectedStory.title}</h2>
          <div className="prose prose-sm sm:prose-lg max-w-none text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base" style={{ whiteSpace: 'pre-line' }}>
            {selectedStory.text}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {selectedStory.questions && selectedStory.questions.length > 0 && (
              <button
                onClick={() => {
                  setShowStoryQuiz(true);
                  setCurrentStoryQuestion(0);
                  setStoryScore(0);
                  setStoryQuizFeedback(null);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Start Quiz
              </button>
            )}
            <button
              onClick={() => {
                setSelectedStory(null);
                setGameMode('stories');
                setShowStoryQuiz(false);
                setCurrentStoryQuestion(0);
                setStoryScore(0);
                setStoryQuizFeedback(null);
              }}
              className="w-full bg-yellow-400 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-yellow-500 active:bg-yellow-500 transition-all flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Stories
            </button>
            <button
              onClick={() => { 
                setGameMode('menu'); 
                setShowStories(false); 
                setSelectedStory(null);
                setScore(0);
                setStreak(0);
                setQuestionsAnswered(0);
                setFeedback(null);
              }}
              className="w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Menu
            </button>
          </div>
        </div>
      </div>
    );
  }


  // MENU SCREEN - MOBILE OPTIMIZED
  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-w-4xl w-full">
          {!showQuestionSelector ? (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 bg-blue-100 px-3 sm:px-4 py-2 rounded-lg w-full sm:w-auto">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <span className="text-blue-700 font-semibold text-sm sm:text-base truncate">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-100 hover:bg-red-200 active:bg-red-200 text-red-600 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-orange-600 mb-2">🇳🇱 Leer Nederlands</h1>
                <p className="text-gray-600 text-sm sm:text-lg">1000+ Most Common Dutch Words - A1 🟢 & A2 🔵</p>
                 <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 bg-green-100 px-3 sm:px-4 py-2 rounded-full">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <span className="text-green-700 font-bold text-xs sm:text-base">{getTotalWordCount()} Words!</span>
                </div>
                
                {/* Search Bar - MOBILE OPTIMIZED */}
                <div className="mt-4 sm:mt-6 relative search-container">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder="🔍 Search Dutch/English word..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 pl-10 sm:pl-12 text-sm sm:text-lg border-2 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none"
                    />
                    {searchQuery && (
                      <button
                        onClick={clearSearch}
                        className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 active:text-gray-600"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    )}
                  </div>
                  
                  {/* Search Results Dropdown - MOBILE OPTIMIZED */}
                  {showSearchResults && (
                    <div className="absolute z-10 w-full mt-2 bg-white border-2 border-orange-300 rounded-xl shadow-xl max-h-64 sm:max-h-96 overflow-y-auto">
                      <div className="p-2 sm:p-3 bg-orange-50 border-b border-orange-200 sticky top-0">
                        <p className="text-xs sm:text-sm font-semibold text-orange-700">
                          Found {searchResults.length} word{searchResults.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                      {searchResults.map((word, idx) => (
                        <div
                          key={idx}
                          className="p-3 sm:p-4 hover:bg-orange-50 active:bg-orange-50 border-b border-gray-100 last:border-b-0 transition-all"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-lg sm:text-2xl font-bold text-orange-600">{word.dutch}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    speakDutch(word.dutch);
                                  }}
                                  className="p-1 hover:bg-orange-100 active:bg-orange-100 rounded-full transition-all"
                                >
                                  <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                                </button>
                                <span className={`px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
                                  word.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                }`}>
                                  {word.level}
                                </span>
                              </div>
                              <p className="text-sm sm:text-lg text-gray-700 mb-1">{word.english}</p>
                              {word.example && (
                                <p className="text-xs sm:text-sm text-gray-500 italic line-clamp-2">{word.example}</p>
                              )}
                              <p className="text-xs text-gray-400 mt-1">
                                {word.category.replace(/_/g, ' ').toUpperCase()}
                              </p>
                              
                              {/* Practice buttons - MOBILE OPTIMIZED */}
                              <div className="mt-2 sm:mt-3 flex flex-wrap gap-2">
                                <button
                                  onClick={() => {
                                    setLearnWords([word]);
                                    setLearnIndex(0);
                                    setGameMode('learn');
                                    clearSearch();
                                  }}
                                  className="px-2 sm:px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-lg hover:bg-blue-600 active:bg-blue-600 transition-all"
                                >
                                  📚 Study
                                </button>
                                <button
                                  onClick={() => speakDutch(word.dutch)}
                                  className="px-2 sm:px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-lg hover:bg-orange-600 active:bg-orange-600 transition-all"
                                >
                                  🔊 Hear
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
           
                
                {/* ADD THIS SCROLLING WORDS SECTION */}
                {welcomeWords.length > 0 && (
                  <div className="mt-4 bg-orange-50 rounded-xl p-4 sm:p-6 border-2 border-orange-200">
                    <div key={currentWelcomeIndex} className="animate-fadeIn">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">{welcomeWords[currentWelcomeIndex].dutch}</h2>
                        <button
                          onClick={() => speakDutch(welcomeWords[currentWelcomeIndex].dutch)}
                          className="bg-orange-100 hover:bg-orange-200 active:bg-orange-200 p-2 rounded-full transition-all"
                        >
                          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                        </button>
                      </div>
                      <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-2 text-center">{welcomeWords[currentWelcomeIndex].english}</p>
                      {welcomeWords[currentWelcomeIndex].example && (
                        <p className="text-xs sm:text-sm text-gray-600 italic text-center">{welcomeWords[currentWelcomeIndex].example}</p>
                      )}
                      {/* <div className="mt-2 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          welcomeWords[currentWelcomeIndex].level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {welcomeWords[currentWelcomeIndex].level} • {welcomeWords[currentWelcomeIndex].category.replace(/_/g, ' ')}
                        </span>
                      </div> */}
                      
                      {/* Progress dots */}
                      <div className="flex justify-center gap-2 mt-3">
                        {welcomeWords.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentWelcomeIndex ? 'w-6 bg-orange-600' : 'w-2 bg-orange-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                

              </div>
              
              {/* Category Selection - MOBILE OPTIMIZED */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-700 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Choose a Thema category:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 sm:max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-xl">
                  {categories.map(cat => {
                    const wordCount = cat === 'all' ? getTotalWordCount() : (dutchWordBank[cat]?.length || 0);
                    const hasA1 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A1');
                    const hasA2 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A2');
                    const isCompleted = isCategoryCompleted(cat);
                    const progress = getCategoryProgress(cat);
                    const hasPartialProgress = (progress.multipleChoice || progress.spelling) && !isCompleted;
                    const isLocked = isCategoryLocked(cat);
                    
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          if (isLocked) {
                            alert('🔒 Complete all A1 categories (Multiple Choice with 80%+) first to unlock A2 lessons!');
                          } else {
                            setSelectedCategory(cat);
                          }
                        }}
                        disabled={isLocked}
                        className={`p-2 sm:p-3 rounded-xl font-medium transition-all text-xs relative ${
                          isLocked
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                            : selectedCategory === cat
                            ? (isCompleted 
                                ? 'bg-green-600 text-white shadow-lg scale-105 border-2 border-yellow-400' 
                                : hasPartialProgress
                                ? 'bg-yellow-500 text-white shadow-lg scale-105'
                                : 'bg-orange-500 text-white shadow-lg scale-105')
                            : isCompleted
                            ? `bg-green-500 text-white ${!isTouchDevice ? 'hover:bg-green-600' : 'active:bg-green-600'} border-2 border-green-600`
                            : hasPartialProgress
                            ? `bg-yellow-400 text-gray-800 ${!isTouchDevice ? 'hover:bg-yellow-500' : 'active:bg-yellow-500'} border-2 border-yellow-500`
                            : `bg-white text-gray-700 ${!isTouchDevice ? 'hover:bg-orange-50' : 'active:bg-orange-50'} border border-gray-200`
                        }`}
                      >
                          {isLocked && (
                            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
                              <span className="text-white text-xs">🔒</span>
                            </div>
                            
                          )}
                        {isCompleted && (
                          <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-0.5 sm:p-1">
                            <Trophy className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                          </div>
                        )}
                        {!isCompleted && hasPartialProgress && (
                          <div className="absolute -top-1 -right-1 bg-blue-400 rounded-full px-1 sm:px-1.5 py-0.5">
                            <span className="text-white text-xs font-bold">
                              {progress.multipleChoice ? '✓' : ''}{progress.spelling ? '✓' : ''}
                            </span>
                          </div>
                        )}
                        <div className="font-bold text-xs sm:text-sm">{cat === 'all' ? 'All' : cat.replace(/_/g, ' ').replace(/lesson /g, 'L').toUpperCase()}</div>
                        <div className="opacity-75 mt-1 text-xs">
                          {wordCount} words
                          {(hasA1 || hasA2) && (
                            <span className="block sm:inline sm:ml-1">
                              {hasA1 && 'A1🟢'} {hasA2 && 'A2🔵'}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            {/* A1 Progress Indicator */}
            {!areAllA1CategoriesCompleted() && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-700 text-xs sm:text-sm text-center font-semibold">
                  💡 Complete all A1 categories (Multiple Choice with 80%+) to unlock A2 lessons!
                </p>
              </div>
            )}

            {areAllA1CategoriesCompleted() && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-700 text-xs sm:text-sm text-center font-semibold">
                  🎉 Congratulations! All A2 lessons are now unlocked!
                </p>
              </div>
            )}
              {/* Game Mode Buttons - MOBILE OPTIMIZED */}
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={() => openQuestionSelector('learn')}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-xl">Learn Mode</span>
                </button>
                
                <button
                  onClick={() => openQuestionSelector('play')}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-xl">Multiple Choice</span>
                </button>
                
                <button
                  onClick={() => openQuestionSelector('spelling')}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-base sm:text-xl">✏️ Spelling</span>
                </button>
                <button
                  onClick={() => openQuestionSelector('speaking')}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">🎤 Speaking Test</span>
                </button>
                
                <button
                  onClick={() => openQuestionSelector('fillblank')}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">📝 Fill Blank</span>
                </button>
                
                <button
                  onClick={() => { setShowStories(true); setGameMode('stories'); }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">📖 Stories</span>
                </button>
              </div>

              {/* Info Box - MOBILE OPTIMIZED */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-50 rounded-xl">
                <div className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                  <p className="text-center font-bold text-orange-600 mb-2 text-sm sm:text-base">Official "1000+ Dutch Words" Course</p>
                  <p><span className="font-bold">🟢 A1:</span> Basic words</p>
                  <p><span className="font-bold">🔵 A2:</span> Intermediate</p>
                  <p className="mt-2 sm:mt-3 text-center font-semibold text-xs sm:text-sm">📚 Learn → ✅ Quiz → ✏️ Spell → 📝 Fill</p>
                  <p className="mt-2 text-center font-bold text-green-600 text-xs sm:text-sm">🏆 Get 80% on 80% of words!</p>
                </div>
              </div>
            </>
          ) : (
            // Question Selector - MOBILE OPTIMIZED
            <>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-orange-600 mb-2">
{pendingGameMode === 'play' && (
  <div className="mb-6 sm:mb-8">
    <label className="block text-gray-700 font-semibold mb-3 text-center text-sm sm:text-base">
      Difficulty Mode
    </label>
    <div className="grid grid-cols-2 gap-3">
      <button
        onClick={() => setDifficulty('normal')}
        className={`p-4 rounded-xl font-semibold transition-all text-sm sm:text-base ${
          difficulty === 'normal'
            ? 'bg-orange-500 text-white shadow-lg scale-105'
            : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
        }`}
      >
        <div className="text-lg sm:text-xl mb-1">🎯</div>
        Normal
        <div className="text-xs opacity-75 mt-1">English → Dutch word</div>
      </button>
      <button
        onClick={() => {
          const isUnlocked = isNormalModeCompleted(selectedCategory);
          if (isUnlocked) {
            setDifficulty('spelling');
          } else {
            alert('🔒 Complete Normal mode with 80%+ score on 80% of words to unlock Spelling mode!');
          }
        }}
        disabled={!isNormalModeCompleted(selectedCategory)}
        className={`p-4 rounded-xl font-semibold transition-all text-sm sm:text-base relative ${
          difficulty === 'spelling'
            ? 'bg-purple-500 text-white shadow-lg scale-105'
            : isNormalModeCompleted(selectedCategory)
            ? 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
        }`}
      >
        {!isNormalModeCompleted(selectedCategory) && (
          <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1.5">
            <span className="text-white text-lg">🔒</span>
          </div>
        )}
        <div className="text-lg sm:text-xl mb-1">
          {isNormalModeCompleted(selectedCategory) ? '✍️' : '🔒'}
        </div>
        Spelling
        <div className="text-xs opacity-75 mt-1">
          {isNormalModeCompleted(selectedCategory) 
            ? 'English → Similar spellings' 
            : 'Complete Normal first'}
        </div>
      </button>
    </div>
    {!isNormalModeCompleted(selectedCategory) && (
      <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-yellow-700 text-xs sm:text-sm text-center font-semibold">
          💡 Complete Normal mode quiz first to unlock Spelling difficulty!
        </p>
      </div>
    )}
  </div>
)}
                  {pendingGameMode === 'play' ? '🎯 Multiple Choice' : 
                  pendingGameMode === 'spelling' ? '✏️ Spelling' : 
                 pendingGameMode === 'speaking' ? '🎤 Speaking Test' :
                  '📚 Learn Mode'}
                </h2>
                <p className="text-gray-600 text-sm sm:text-lg">How many words?</p>
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-gray-700 font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">
                  Selected: <span className="text-orange-600">{selectedCategory === 'all' ? 'All Lessons' : selectedCategory.replace(/_/g, ' ').toUpperCase()}</span>
                </label>
                
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <label className="block text-gray-700 font-semibold mb-3 text-center text-sm sm:text-base">
                    Number of Questions/Words
                  </label>
                  {(() => {
                    let availableWords = selectedCategory === 'all' 
                      ? getTotalWordCount() 
                      : (dutchWordBank[selectedCategory]?.length || 0);
                    
                    if (pendingGameMode === 'fillblank') {
                      const words = loadWords(selectedCategory);
                      const wordsWithValidExamples = words.filter(w => {
                        if (!w.example) return false;
                        const exampleLower = w.example.toLowerCase();
                        const dutchLower = w.dutch.toLowerCase();
                        return exampleLower.includes(dutchLower);
                      });
                      availableWords = wordsWithValidExamples.length;
                    }
                    
                    const maxQuestions = availableWords;
                    const minQuestions = 10;
                    
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
                          <span className="text-3xl sm:text-5xl font-bold text-orange-600">{Math.min(numQuestions, maxQuestions)}</span>
                          <span className="text-xl sm:text-3xl text-gray-600 ml-2">Questions</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
                          <span>Min: {minQuestions}</span>
                          <span>Max: {maxQuestions}</span>
                        </div>
                      </>
                    );
                  })()}
                  {(() => {
                    const availableWords = selectedCategory === 'all' 
                      ? getTotalWordCount() 
                      : (dutchWordBank[selectedCategory]?.length || 0);
                    const requiredQuestions = Math.ceil(availableWords * 0.8);
                    
                    return pendingGameMode !== 'learn' && numQuestions >= requiredQuestions && (
                      <div className="mt-4 p-3 bg-green-100 rounded-lg text-center">
                        <p className="text-green-700 font-semibold text-xs sm:text-sm">✓ Score 80%+ to unlock!</p>
                      </div>
                    );
                  })()}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={startGameWithQuestions}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  {pendingGameMode === 'learn' ? 'Start Learning' : 'Start Quiz'} ({numQuestions})
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <button
                  onClick={() => setShowQuestionSelector(false)}
                  className="w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
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

  // LEARN MODE - MOBILE OPTIMIZED
  if (gameMode === 'learn') {
    const currentLearnWord = learnWords[learnIndex];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-3 sm:p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4">
            <div className="flex justify-between items-center">
              <button
                onClick={goToMenu}
                className="bg-gray-100 hover:bg-gray-200 active:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-2"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                <span className="font-semibold text-sm sm:text-base">Menu</span>
              </button>
              <div className="text-gray-600 font-semibold text-sm sm:text-base">
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

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
            {currentLearnWord && (
              <div className="text-center">
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                    currentLearnWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentLearnWord.level} • {currentLearnWord.category.replace(/_/g, ' ')}
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-4xl sm:text-6xl font-bold text-indigo-600">{currentLearnWord.dutch}</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => speakDutch(currentLearnWord.dutch)}
                        className="bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200 p-3 sm:p-4 rounded-full transition-all"
                        title="Pronounce word"
                      >
                        <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                      </button>
                      <button
                        onClick={() => {
                          // Remove English translation in parentheses and speak
                          const dutchSentence = currentLearnWord.example.replace(/\s*\([^)]+\)\s*/g, '').trim();
                          speakDutch(dutchSentence);
                        }}
                        className="bg-purple-100 hover:bg-purple-200 active:bg-purple-200 px-4 py-2 sm:px-5 sm:py-3 rounded-xl transition-all flex items-center gap-2"
                        title="Pronounce example sentence"
                      >
                        <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                        <span className="text-xs sm:text-sm font-semibold text-purple-600">Example</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-2xl sm:text-4xl font-semibold text-gray-700 mb-2">
                    {currentLearnWord.english}
                  </div>
                  
                  <div className="text-sm sm:text-lg text-gray-500 mt-4">
                    <span className="font-semibold">Example:</span>
                    <p className="mt-2">{currentLearnWord.example}</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 justify-center mt-8">
                  <button
                    onClick={() => setLearnIndex(Math.max(0, learnIndex - 1))}
                    disabled={learnIndex === 0}
                    className="px-4 sm:px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 active:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm sm:text-base"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Prev
                  </button>
                  
                  {learnIndex < learnWords.length - 1 ? (
                    <button
                      onClick={() => setLearnIndex(learnIndex + 1)}
                      className="px-4 sm:px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 active:bg-indigo-600 transition-all flex items-center gap-2 text-sm sm:text-base"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (confirm('Ready to test yourself?')) {
                          startGame();
                        }
                      }}
                      className="px-4 sm:px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 active:bg-green-600 transition-all flex items-center gap-2 text-sm sm:text-base"
                    >
                      Start Test
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
          {/* ADD THIS BOTTOM BAR - BEFORE THE CLOSING </div> OF min-h-screen */}
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-3 shadow-lg z-50">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => {
            if (confirm('Return to menu? Progress will be lost.')) {
              goToMenu();
            }
          }}
          className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-200 px-4 py-3 rounded-xl transition-all"
        >
          <Home className="w-5 h-5 text-gray-700" />
          <span className="font-semibold">Back to Menu</span>
        </button>
      </div>
    </div>
      </div>
    );
  }

  // RESULTS SCREEN - MOBILE OPTIMIZED
if (gameMode === 'results') {
  const percentage = Math.round((score / numQuestions) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-4xl w-full">
        <div className="text-center mb-6">
          <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
            {percentage >= 80 ? 'Uitstekend! Exam ready!' :
             percentage >= 60 ? 'Goed! Keep practicing!' :
             'Keep learning!'}
          </h2>
          <div className="mb-6">
            <div className="text-4xl sm:text-6xl font-bold text-orange-600 mb-2">{score}/{numQuestions}</div>
            <div className="text-xl sm:text-2xl text-gray-600">{percentage}% Correct</div>
          </div>
        </div>
        
        {/* Wrong Answers Review Section */}
        {wrongAnswers.length > 0 && (
          <div className="mb-6 max-h-96 overflow-y-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
              📝 Review Your Mistakes ({wrongAnswers.length})
            </h3>
            <div className="space-y-3">
              {wrongAnswers.map((wrong, idx) => (
                <div key={idx} className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-red-600">{wrong.dutch}</span>
                        <button
                          onClick={() => speakDutch(wrong.dutch)}
                          className="bg-red-100 hover:bg-red-200 active:bg-red-200 p-2 rounded-full transition-all"
                        >
                          <Volume2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                      <p className="text-gray-700 font-semibold mb-2">{wrong.english}</p>
                      
                      <div className="bg-white rounded-lg p-3 mb-2">
                        <p className="text-sm text-gray-600 mb-1">❌ Your answer:</p>
                        <p className="text-red-600 font-bold line-through">{wrong.userAnswer}</p>
                        <p className="text-sm text-gray-600 mt-2 mb-1">✅ Correct answer:</p>
                        <p className="text-green-600 font-bold">{wrong.correctAnswer}</p>
                        {wrong.accuracy !== undefined && (
                          <p className="text-xs text-gray-500 mt-2">Accuracy: {wrong.accuracy}%</p>
                        )}
                      </div>
                      
                      {wrong.example && (
                        <div className="bg-blue-50 rounded-lg p-2 mt-2">
                          <p className="text-xs text-blue-600 mb-1">Example:</p>
                          <p className="text-sm text-gray-700 italic">{wrong.example}</p>
                        </div>
                      )}
                      
                      {wrong.sentence && (
                        <div className="bg-purple-50 rounded-lg p-2 mt-2">
                          <p className="text-xs text-purple-600 mb-1">Sentence:</p>
                          <p className="text-sm text-gray-700">{wrong.sentence}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Type: {wrong.type.replace('_', ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {wrongAnswers.length === 0 && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-center">
            <p className="text-green-700 font-bold text-lg">🎉 Perfect! No mistakes!</p>
          </div>
        )}
        
        <div className="space-y-3">
          <button
            onClick={startGame}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Test Again
          </button>
          <button
            onClick={startLearnMode}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Review Words
          </button>
          <button
            onClick={goToMenu}
            className="w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Menu
          </button>
        </div>
      </div>
    </div>
  );
}

  // QUIZ SCREENS - MOBILE OPTIMIZED
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-3 sm:p-4 pb-24">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4">
          <div className="flex flex-wrap justify-between items-center mb-3 sm:mb-4 gap-2">
            <div className="flex gap-2 sm:gap-4 items-center">
              <button
                onClick={goToMenu}
                className="bg-gray-100 hover:bg-gray-200 active:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-1 sm:gap-2"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                <span className="font-semibold text-xs sm:text-sm">Menu</span>
              </button>
              <div className="bg-green-100 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <span className="text-green-700 font-bold text-xs sm:text-base">Score: {score}</span>
              </div>
              <div className="bg-blue-100 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <span className="text-blue-700 font-bold text-xs sm:text-base">Streak: {streak}🔥</span>
              </div>
            </div>
            <div className="text-gray-600 font-semibold text-xs sm:text-base">
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

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
          {/* MULTIPLE CHOICE - MOBILE OPTIMIZED */}
          {currentWord && gameMode === 'play' && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                    currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentWord.level} Level
                  </span>
                </div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">
                        {difficulty === 'spelling' ? 'Which is the correct spelling?' : 'What is the English translation?'}
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <h2 className="text-3xl sm:text-5xl font-bold text-orange-600">
                          {difficulty === 'spelling' ? currentWord.english : currentWord.dutch}
                        </h2>
                        {difficulty === 'normal' && (
                          <button
                            onClick={() => speakDutch(currentWord.dutch)}
                            className="bg-orange-100 hover:bg-orange-200 active:bg-orange-200 p-2 sm:p-3 rounded-full transition-all"
                          >
                            <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                          </button>
                        )}
                      </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {options.map((option, idx) => (
                <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      disabled={feedback !== null}
                      className={`p-3 sm:p-4 text-sm sm:text-lg font-semibold rounded-xl transition-all ${
                        feedback === null
                          ? `bg-gray-100 text-gray-800 ${!isTouchDevice ? 'hover:bg-orange-100 hover:text-orange-600' : 'active:bg-orange-100'}`
                          : feedback.correct && (difficulty === 'spelling' ? option.dutch === currentWord.dutch : option.english === currentWord.english)
                          ? 'bg-green-500 text-white'
                          : !feedback.correct && (difficulty === 'spelling' ? option.dutch === currentWord.dutch : option.english === currentWord.english)
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {difficulty === 'spelling' ? option.dutch : option.english}
                    </button>
                ))}
              </div>

              {feedback && (
                <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${
                  feedback.correct ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    {feedback.correct ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
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
                      className="w-full mt-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      Next Question
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
          
          {/* SPELLING MODE - MOBILE OPTIMIZED */}
          {currentWord && gameMode === 'spelling' && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                    currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentWord.level} - Spelling Challenge
                  </span>
                </div>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">Type the Dutch word for:</p>
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                  <h2 className="text-3xl sm:text-5xl font-bold text-purple-600">{currentWord.english}</h2>
                </div>
                
                <button
                  onClick={() => speakDutch(currentWord.dutch)}
                  className="bg-purple-100 hover:bg-purple-200 active:bg-purple-200 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all inline-flex items-center gap-2 mb-4 sm:mb-6 text-sm sm:text-base"
                >
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="text-purple-600 font-semibold">Hear</span>
                </button>
              </div>

              <form onSubmit={handleSpellingSubmit} className="space-y-4">
                <input
                  type="text"
                  value={spellingAnswer}
                  onChange={(e) => setSpellingAnswer(e.target.value)}
                  disabled={feedback !== null}
                  placeholder="Type Dutch word..."
                  className="w-full p-3 sm:p-4 text-xl sm:text-2xl text-center font-semibold border-4 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
                  autoFocus
                />
                
                {feedback === null && (
                  <button
                    type="submit"
                    disabled={!spellingAnswer.trim()}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Answer
                  </button>
                )}
              </form>

              {feedback && (
                <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${
                  feedback.correct ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    {feedback.correct ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                    )}
                    <p className={`font-semibold text-sm sm:text-base ${
                      feedback.correct ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {feedback.message}
                    </p>
                  </div>
                  
                  {!feedback.correct && (
                    <div className="mb-3 p-3 bg-white rounded-lg">
                      <p className="text-gray-600 text-xs sm:text-sm mb-1">You wrote:</p>
                      <p className="text-red-600 font-bold text-lg sm:text-xl line-through">{spellingAnswer}</p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2 mb-1">Correct:</p>
                      <p className="text-green-600 font-bold text-lg sm:text-xl">{currentWord.dutch}</p>
                    </div>
                  )}
                  
                  <button
                    onClick={handleNext}
                    className="w-full mt-3 bg-purple-500 hover:bg-purple-600 active:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Next Question
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        {/* SPEAKING TEST - MOBILE OPTIMIZED */}
        {currentWord && gameMode === 'speaking' && (
          <>
            <div className="text-center mb-6 sm:mb-8">
              <div className="mb-3">
                <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                  currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {currentWord.level} - Speaking Test
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Pronounce this Dutch word:</p>
              
              <div className="bg-rose-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h2 className="text-3xl sm:text-5xl font-bold text-rose-600">{currentWord.dutch}</h2>
                  <button
                    onClick={() => speakDutch(currentWord.dutch)}
                    className="bg-rose-100 hover:bg-rose-200 active:bg-rose-200 p-2 sm:p-3 rounded-full transition-all"
                    title="Hear pronunciation"
                  >
                    <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                  </button>
                </div>
                <p className="text-lg sm:text-2xl text-gray-700 font-semibold">{currentWord.english}</p>
                      {/* ADD THIS EXAMPLE SECTION */}
        {currentWord.example && (
          <div className="mt-4 pt-4 border-t-2 border-rose-200">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">Example sentence:</p>
            <p className="text-sm sm:text-base text-gray-700 italic mb-2">
              {currentWord.example}
            </p>
            <button
              onClick={() => {
                const dutchSentence = currentWord.example.replace(/\s*\([^)]+\)\s*/g, '').trim();
                speakDutch(dutchSentence);
              }}
              className="bg-rose-100 hover:bg-rose-200 active:bg-rose-200 px-3 py-2 rounded-lg transition-all inline-flex items-center gap-2 text-xs sm:text-sm"
            >
              <Volume2 className="w-4 h-4 text-rose-600" />
              <span className="text-rose-600 font-semibold">Hear Example</span>
            </button>
          </div>
        )}
              </div>
              
              {transcript && (
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-4">
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">You said:</p>
                  <p className="text-blue-700 font-bold text-lg sm:text-xl">"{transcript}"</p>
                </div>
              )}
            </div>

        <div className="space-y-4">
          {feedback === null && (
            <>
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-full text-white text-base sm:text-xl font-bold py-4 sm:py-6 rounded-xl transition-all flex items-center justify-center gap-3 ${
                  isRecording 
                    ? 'bg-red-500 animate-pulse' 
                    : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:shadow-xl active:shadow-xl'
                }`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                  isRecording ? 'bg-white' : 'bg-white/20'
                }`}>
                  {isRecording ? (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded"></div>
                  ) : (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-500 rounded-full"></div>
                  )}
                </div>
                <span>{isRecording ? '🎤 Recording... (Tap to Stop)' : '🎤 Tap to Speak'}</span>
              </button>
              
              <div className="text-center text-xs sm:text-sm text-gray-500">
                {isRecording ? 'Tap the button again to stop recording' : 'Tap the button and speak the Dutch word clearly'}
              </div>
                </>
              )}
            </div>

            {feedback && (
              <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${
                feedback.correct ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  {feedback.correct ? (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className={`font-semibold text-sm sm:text-base ${
                      feedback.correct ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {feedback.message}
                    </p>
                    {feedback.accuracy && (
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Accuracy: {feedback.accuracy}%
                      </p>
                    )}
                  </div>
                </div>
                
                {!feedback.correct && feedback.userSaid && (
                  <div className="mb-3 p-3 bg-white rounded-lg">
                    <p className="text-gray-600 text-xs sm:text-sm mb-1">You said:</p>
                    <p className="text-red-600 font-bold text-base sm:text-lg">"{feedback.userSaid}"</p>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 mb-1">Correct pronunciation:</p>
                    <div className="flex items-center gap-2">
                      <p className="text-green-600 font-bold text-base sm:text-lg">{currentWord.dutch}</p>
                      <button
                        onClick={() => speakDutch(currentWord.dutch)}
                        className="bg-green-100 hover:bg-green-200 p-2 rounded-full transition-all"
                      >
                        <Volume2 className="w-4 h-4 text-green-600" />
                      </button>
                    </div>
                  </div>
                )}
                
              <button
                onClick={() => {
                  setTranscript('');
                  setFeedback(null);
                  handleNext();
                }}
                className="w-full mt-3 bg-rose-500 hover:bg-rose-600 active:bg-rose-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Next Question
                <ChevronRight className="w-5 h-5" />
              </button>
              </div>
            )}
          </>
        )}
          {/* FILL IN THE BLANK - MOBILE OPTIMIZED */}
          {currentWord && gameMode === 'fillblank' && (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                    currentWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {currentWord.level} - Fill in the Blank
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Complete the sentence:</p>
                
                <div className="bg-teal-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
                  <p className="text-lg sm:text-2xl font-semibold text-gray-800 leading-relaxed">
                    {fillBlankSentence}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4 sm:mb-6">
                  <button
                    onClick={() => {
                      const hintBox = document.getElementById('hint-box');
                      if (hintBox) {
                        hintBox.classList.toggle('hidden');
                      }
                    }}
                    className="bg-blue-100 hover:bg-blue-200 active:bg-blue-200 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    💡 <span className="text-blue-600 font-semibold">Show Hint</span>
                  </button>
                  
                  <button
                    onClick={() => speakDutch(currentWord.dutch)}
                    className="bg-teal-100 hover:bg-teal-200 active:bg-teal-200 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    <span className="text-teal-600 font-semibold">Hear</span>
                  </button>
                </div>
                
                <div id="hint-box" className="hidden bg-blue-50 p-3 sm:p-4 rounded-lg mb-4 animate-fadeIn">
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">English word:</p>
                  <p className="text-blue-600 font-bold text-lg sm:text-xl mb-3">{currentWord.english}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1">English sentence:</p>
                  <p className="text-blue-700 font-medium text-sm sm:text-lg">
                    {currentWord.example.match(/\(([^)]+)\)/)?.[1] || currentWord.example}
                  </p>
                </div>
              </div>

              <form onSubmit={handleFillBlankSubmit} className="space-y-4">
                <input
                  type="text"
                  value={fillBlankAnswer}
                  onChange={(e) => setFillBlankAnswer(e.target.value)}
                  disabled={feedback !== null}
                  placeholder="Type Dutch word..."
                  className="w-full p-3 sm:p-4 text-xl sm:text-2xl text-center font-semibold border-4 border-teal-300 rounded-xl focus:border-teal-500 focus:outline-none disabled:bg-gray-100"
                  autoFocus
                />
                
                {feedback === null && (
                  <button
                    type="submit"
                    disabled={!fillBlankAnswer.trim()}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Answer
                  </button>
                )}
              </form>

              {feedback && (
                <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${
                  feedback.correct ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    {feedback.correct ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                    )}
                    <p className={`font-semibold text-sm sm:text-base ${
                      feedback.correct ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {feedback.message}
                    </p>
                  </div>
                  
                  {!feedback.correct && (
                    <div className="mb-3 p-3 bg-white rounded-lg">
                      <p className="text-gray-600 text-xs sm:text-sm mb-1">You wrote:</p>
                      <p className="text-red-600 font-bold text-lg sm:text-xl line-through">{fillBlankAnswer}</p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2 mb-1">Correct:</p>
                      <p className="text-green-600 font-bold text-lg sm:text-xl">{currentWord.dutch}</p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-3 mb-1">Full sentence:</p>
                      <p className="text-gray-800 font-medium text-sm sm:text-lg">{currentWord.example}</p>
                    </div>
                  )}
                  
                  <button
                    onClick={() => {
                      const hintBox = document.getElementById('hint-box');
                      if (hintBox) {
                        hintBox.classList.add('hidden');
                      }
                      handleNext();
                    }}
                    className="w-full mt-3 bg-teal-500 hover:bg-teal-600 active:bg-teal-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
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
          {/* ADD THIS BOTTOM BAR - BEFORE THE CLOSING </div> OF min-h-screen */}
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-3 shadow-lg z-50">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => {
            if (confirm('Return to menu? Progress will be lost.')) {
              goToMenu();
            }
          }}
          className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-200 px-4 py-3 rounded-xl transition-all"
        >
          <Home className="w-5 h-5 text-gray-700" />
          <span className="font-semibold">Back to Menu</span>
        </button>
      </div>
    </div>
    </div>
  );
}