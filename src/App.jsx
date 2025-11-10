import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Check, X, Trophy, RefreshCw, Home, BookOpen, GraduationCap, ChevronRight, ChevronLeft, LogOut, User, Menu } from 'lucide-react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { conversations } from './data/conversations';
import { dutchWordBank } from './data/dutchWordBank';
import { stories } from './data/stories';
import { verbConjugations } from './data/verbConjugations';
import { achievements as achievementsData } from './data/achievements';
// import { ref, set, get, child, onValue } from 'firebase/database';
import { database } from './firebase'; 
import { ref, set, get, child, onValue, update } from 'firebase/database';
import { dutchStories } from './data/dutchStories';
import DutchFillBlanks from './components/DutchFillBlanks';


const getAllWords = () => {
  const allWords = [];
  Object.entries(dutchWordBank).forEach(([category, words]) => {
    words.forEach(word => allWords.push({ ...word, category }));
  });
  return allWords;
};

const getTotalWordCount = () => getAllWords().length;

export default function DutchLearningGame() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [allUserStats, setAllUserStats] = useState([]);

// Admin email - CHANGE THIS TO YOUR GOOGLE EMAIL
  const ADMIN_EMAILS = [
  'naveen.nainika2025@gmail.com',
  'naveennimmala77@gmail.com',
  'naveennimmala50@gmail.com' 
];
  const [showAdaptiveStats, setShowAdaptiveStats] = useState(false);
  const [fillBlankFilter, setFillBlankFilter] = useState('all'); // 'all', 'A1', 'A2', 'theme'
  const [fillBlankThemeFilter, setFillBlankThemeFilter] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState(['all']); // Change from single to array
  const [showMultiSelect, setShowMultiSelect] = useState(false);
  const [selectedStoryKey, setSelectedStoryKey] = useState(null);
  const [showFillBlankStories, setShowFillBlankStories] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [reviewFailedWords, setReviewFailedWords] = useState(false);
  const [achievements, setAchievements] = useState({});
  const [userPoints, setUserPoints] = useState(0);
  const [showAchievementPopup, setShowAchievementPopup] = useState(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const [gameModesCompleted, setGameModesCompleted] = useState(new Set());
  const [conjugationQuestion, setConjugationQuestion] = useState(null);
  const [conjugationAnswer, setConjugationAnswer] = useState('');
  const [attemptHistory, setAttemptHistory] = useState([]);
  const [srsData, setSrsData] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [selectedHistoryCategory, setSelectedHistoryCategory] = useState('all');
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversationQuestions, setConversationQuestions] = useState([]);
  const [currentConversationQuestion, setCurrentConversationQuestion] = useState(0);
  const [conversationScore, setConversationScore] = useState(0);
  const [showConversationQuiz, setShowConversationQuiz] = useState(false);
  const [conversationQuizFeedback, setConversationQuizFeedback] = useState(null);
  const [isPlayingConversation, setIsPlayingConversation] = useState(false);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeWords, setWelcomeWords] = useState([]);
  const [difficulty, setDifficulty] = useState('normal'); // 'normal' or 'spelling'
  const [hasCompletedLearn, setHasCompletedLearn] = useState(false);
  const [conjugationLearnVerbs, setConjugationLearnVerbs] = useState([]);
  const [conjugationLearnIndex, setConjugationLearnIndex] = useState(0);
  const [hasCompletedConjugationLearn, setHasCompletedConjugationLearn] = useState(false);
  const [showConjugationOptions, setShowConjugationOptions] = useState(false);
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [reviewMode, setReviewMode] = useState(null); // 'failed_words' or null

// Add global styles
  if (typeof document !== 'undefined') {
    if (!document.getElementById('mobile-hover-fix')) {
      const style = document.createElement('style');
      style.id = 'mobile-hover-fix';
      style.textContent = `
        * {
          -webkit-tap-highlight-color: transparent !important;
          tap-highlight-color: transparent !important;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
        }
        
        input, textarea {
          -webkit-user-select: text !important;
          user-select: text !important;
        }
        
        body, html, #root {
          -webkit-tap-highlight-color: transparent !important;
          tap-highlight-color: transparent !important;
          overscroll-behavior: none;
          touch-action: pan-y;
        }
        
        button, a, div[role="button"] {
          -webkit-tap-highlight-color: transparent !important;
          tap-highlight-color: transparent !important;
          -webkit-touch-callout: none !important;
          touch-action: manipulation !important;
          outline: none !important;
        }
        
        button:active, a:active {
          -webkit-tap-highlight-color: transparent !important;
          tap-highlight-color: transparent !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

useEffect(() => {
  const savedUser = localStorage.getItem('dutch_app_user');
  const loginTime = localStorage.getItem('dutch_app_login_time');
  
  if (savedUser && loginTime) {
    try {
      const parsedUser = JSON.parse(savedUser);
      const timeDifference = Date.now() - parseInt(loginTime);
      const sevenDays = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
      
      if (timeDifference < sevenDays) {
        setUser(parsedUser);
        // Reset admin state first, then check
        setIsAdmin(false);
        if (ADMIN_EMAILS.includes(parsedUser.email)) {
          setIsAdmin(true);
        }
        
        // Update the login timestamp to extend the session
        localStorage.setItem('dutch_app_login_time', Date.now().toString());
      } else {
        // Session expired - clear everything
        localStorage.removeItem('dutch_app_user');
        localStorage.removeItem('dutch_app_login_time');
        setIsAdmin(false);
      }
    } catch (error) {
      localStorage.removeItem('dutch_app_user');
      localStorage.removeItem('dutch_app_login_time');
      setIsAdmin(false);
    }
  } else {
    setIsAdmin(false);
  }
}, []);

useEffect(() => {
  if (user && gameMode === 'menu' && showWelcome && !showInstructions) {
    // Auto-hide welcome screen after 10 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }
}, [user, gameMode, showWelcome, showInstructions]);


// Load speech synthesis voices
useEffect(() => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    // Load voices
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    
    loadVoices();
    
    // Chrome loads voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }
}, []);

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
  if (user && welcomeWords.length > 0 && !showInstructions) {
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
}, [user, welcomeWords, showInstructions]);

useEffect(() => {
  if (gameMode === 'results' && user && gameStartCategory && currentGameMode) {
    checkAndUpdateProgress(gameStartCategory, currentGameMode, score, numQuestions);
    saveAttemptToHistory(gameStartCategory, currentGameMode, score, numQuestions, wrongAnswers, difficulty);
    
    // Check achievements
    const timeTaken = quizStartTime ? (Date.now() - quizStartTime) / 1000 : 0;
    const isSpeedDemon = numQuestions >= 20 && timeTaken < 120;
    
    // Track completed game modes
    if (score / numQuestions >= 0.8) {
      const newModes = new Set(gameModesCompleted);
      newModes.add(currentGameMode);
      setGameModesCompleted(newModes);
      
      checkAchievements('game_modes_mastered', newModes.size, { modesCompleted: newModes });
    }
    
    checkAchievements('perfect_score', score, { score, total: numQuestions });
    checkAchievements('quizzes_completed', attemptHistory.length + 1);
    checkAchievements('special', 1, { isSpeedDemon, modesCompleted: gameModesCompleted });
  }
}, [gameMode]);

useEffect(() => {
  if (gameMode === 'menu' && user) {
    // Sync stats when returning to menu
    syncUserStatsToFirebase();
  }
}, [gameMode, user, userProgress, attemptHistory, userPoints, unlockedAchievements]);

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
  loadAttemptHistory();
  loadSRSData();
  loadAchievements();
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

  const loadAttemptHistory = () => {
  if (!user) return;
  
  try {
    const saved = localStorage.getItem(`history_${user.sub}`);
    if (saved) {
      setAttemptHistory(JSON.parse(saved));
    }
  } catch (error) {
    setAttemptHistory([]);
  }
};
const saveAttemptToHistory = (categories, mode, score, total, wrongAnswers, difficulty = 'normal') => {
  if (!user) return;
  
  // Convert to array if needed
  const categoryArray = typeof categories === 'string' 
    ? categories.split(',').filter(c => c && c !== 'all')
    : Array.isArray(categories) 
    ? categories.filter(c => c !== 'all')
    : [];
  
  if (categoryArray.length === 0) return;
  
  // Save attempt for each category
  categoryArray.forEach(category => {
    const attempt = {
      id: Date.now() + Math.random(), // Add random to avoid duplicate IDs
      date: new Date().toISOString(),
      category,
      mode,
      difficulty,
      score,
      total,
      percentage: Math.round((score / total) * 100),
      wrongAnswers: wrongAnswers.map(w => ({
        dutch: w.dutch,
        english: w.english,
        userAnswer: w.userAnswer,
        type: w.type,
        example: w.example,
        correctAnswer: w.correctAnswer
      }))
    };
    
    const updatedHistory = [attempt, ...attemptHistory].slice(0, 100);
    
    try {
      localStorage.setItem(`history_${user.sub}`, JSON.stringify(updatedHistory));
      setAttemptHistory(updatedHistory);
    } catch (error) {
      console.error('Failed to save history:', error);
    }
  });
};

// Get failed words for specific categories and mode (supports both single and multi-category)
const getFailedWords = (categories, mode) => {
  if (!user) return [];
  
  // Convert to array if it's a string or single category
  const categoryArray = Array.isArray(categories) ? categories : [categories];
  
  // Get failed words from all selected categories
  const allFailedWords = [];
  const seenWords = new Set(); // To avoid duplicates
  
  categoryArray.forEach(category => {
    const relevantAttempts = attemptHistory.filter(
      a => a.category === category && a.mode === mode && a.wrongAnswers && a.wrongAnswers.length > 0
    );
    
    if (relevantAttempts.length > 0) {
      // Get the most recent attempt for this category
      const latestAttempt = relevantAttempts[0];
      
      latestAttempt.wrongAnswers.forEach(word => {
        const wordKey = `${word.dutch}_${word.english}`;
        if (!seenWords.has(wordKey)) {
          seenWords.add(wordKey);
          allFailedWords.push(word);
        }
      });
    }
  });
  
  return allFailedWords;
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
    // In handleSpeakingResult - add after playSound
  const wordKey = `${currentWord.dutch}_${currentWord.english}`;
  updateSRSData(wordKey, isCorrect);
  if (isCorrect) {
    setScore(score + 1);
    setStreak(streak + 1);
    checkAchievements('streak', streak + 1);
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

const saveUserProgress = async (progress) => {
  if (!user) return;
  
  try {
    localStorage.setItem(`progress_${user.sub}`, JSON.stringify(progress));
    setUserProgress(progress);
    
    // ⭐ Sync to Firebase
    await syncUserStatsToFirebase();
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

const handleLoginSuccess = async (credentialResponse) => {
  const decoded = jwtDecode(credentialResponse.credential);
  setUser(decoded);
  localStorage.setItem('dutch_app_user', JSON.stringify(decoded));
  localStorage.setItem('dutch_app_login_time', Date.now().toString());
  
  // Reset admin state first
  setIsAdmin(false);
  setShowAdminPanel(false);
  
  // Track user login
  await trackUserLogin(decoded);
  
  // Check if admin AFTER reset
 if (ADMIN_EMAILS.includes(decoded.email)) {
    setIsAdmin(true);
  }
};

const trackUserLogin = async (user) => {
  try {
    const userId = user.email.replace(/[^a-zA-Z0-9]/g, '_');
    const userRef = ref(database, `users/${userId}`);
    
    // Get existing data
    const snapshot = await get(userRef);
    const existingData = snapshot.exists() ? snapshot.val() : null;

    const currentTime = new Date().toISOString();

    const userActivity = {
      email: user.email,
      name: user.name,
      picture: user.picture,
      lastLogin: currentTime,
      loginCount: (existingData?.loginCount || 0) + 1,
      firstLogin: existingData?.firstLogin || currentTime,
      // Preserve existing stats
      completedCategories: existingData?.completedCategories || 0,
      totalAttempts: existingData?.totalAttempts || 0,
      avgScore: existingData?.avgScore || 0,
      points: existingData?.points || 0,
      achievements: existingData?.achievements || 0,
      lastUpdated: currentTime
    };

    // Save to Firebase
    await set(userRef, userActivity);
    
    console.log('✅ User login tracked in Firebase:', user.email, 'at', currentTime);
  } catch (error) {
    console.error('❌ Failed to track user login:', error);
  }
};


const loadAllUsers = () => {
  try {
    const usersRef = ref(database, 'users');
    
    // Listen for real-time updates
    onValue(usersRef, (snapshot) => {
      if (!snapshot.exists()) {
        setAllUserStats([]);
        return;
      }

      const usersData = snapshot.val();
      const userStatsArray = Object.values(usersData).map(userActivity => ({
        email: userActivity.email,
        name: userActivity.name,
        picture: userActivity.picture,
        lastLogin: userActivity.lastLogin,
        loginCount: userActivity.loginCount,
        firstLogin: userActivity.firstLogin,
        completedCategories: userActivity.completedCategories || 0,
        totalAttempts: userActivity.totalAttempts || 0,
        avgScore: userActivity.avgScore || 0,
        points: userActivity.points || 0,
        achievements: userActivity.achievements || 0
      }));
      
      // Sort by LATEST login first (descending order)
      userStatsArray.sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));
      
      // Only update state if data actually changed to prevent unnecessary re-renders
      setAllUserStats(prevStats => {
        if (JSON.stringify(prevStats) === JSON.stringify(userStatsArray)) {
          return prevStats;
        }
        return userStatsArray;
      });
    });
  } catch (error) {
    console.error('Failed to load users:', error);
    setAllUserStats([]);
  }
};

const handleLogout = () => {
  googleLogout();
  setUser(null);
  setUserProgress({});
  setAttemptHistory([]);
  setIsAdmin(false); 
  setShowAdminPanel(false);
  localStorage.removeItem('dutch_app_user');
  localStorage.removeItem('dutch_app_login_time');
  goToMenu();
};


// Calculate next review interval based on performance
const calculateNextReview = (currentLevel, isCorrect) => {
  // SM-2 algorithm intervals (in days)
  const intervals = [0.1, 1, 3, 7, 14, 30];
  
  let newLevel = currentLevel;
  if (isCorrect) {
    newLevel = Math.min(5, currentLevel + 1);
  } else {
    newLevel = Math.max(0, currentLevel - 1);
  }
  
  const daysUntilReview = intervals[newLevel] || 30;
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + daysUntilReview);
  
  return { newLevel, nextReviewDate: nextReviewDate.toISOString() };
};


// Generate conjugation question
const generateConjugationQuestion = () => {
  const verbs = Object.keys(verbConjugations);
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const tenses = ['present', 'past'];
  const randomTense = tenses[Math.floor(Math.random() * tenses.length)];
  const pronouns = Object.keys(verbConjugations[randomVerb][randomTense]);
  const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  
  setConjugationQuestion({
    verb: randomVerb,
    tense: randomTense,
    pronoun: randomPronoun,
    correctAnswer: verbConjugations[randomVerb][randomTense][randomPronoun]
  });
  setConjugationAnswer('');
  setFeedback(null);
};

// Handle conjugation submit
const handleConjugationSubmit = (e) => {
  if (e) e.preventDefault();
  
  if (!conjugationAnswer.trim()) return;
  
  const isCorrect = conjugationAnswer.trim().toLowerCase() === conjugationQuestion.correctAnswer.toLowerCase();
  
  playSound(isCorrect);
  setQuestionsAnswered(questionsAnswered + 1);
  
  if (isCorrect) {
    setScore(score + 1);
    setStreak(streak + 1);
    checkAchievements('streak', streak + 1);
    setFeedback({ correct: true, message: 'Perfect! Goed gedaan!' });
    
    setTimeout(() => {
      if (questionsAnswered + 1 >= numQuestions) {
        setGameMode('results');
      } else {
        generateConjugationQuestion();
      }
    }, 1500);
  } else {
    setStreak(0);
    setFeedback({ 
      correct: false, 
      message: `Not quite! The correct answer is "${conjugationQuestion.correctAnswer}"` 
    });
    
    setWrongAnswers(prev => [...prev, {
      dutch: conjugationQuestion.verb,
      english: `${conjugationQuestion.pronoun} (${conjugationQuestion.tense})`,
      userAnswer: conjugationAnswer.trim(),
      correctAnswer: conjugationQuestion.correctAnswer,
      type: 'conjugation'
    }]);
  }
};

// Update SRS data for a word
const updateSRSData = (wordKey, isCorrect) => {
  if (!user) return;
  
  const currentData = srsData[wordKey] || {
    level: 0,
    reviewCount: 0,
    lastReviewed: null,
    nextReview: new Date().toISOString()
  };
  
  const { newLevel, nextReviewDate } = calculateNextReview(currentData.level, isCorrect);
  
  const updatedData = {
    ...srsData,
    [wordKey]: {
      level: newLevel,
      reviewCount: currentData.reviewCount + 1,
      lastReviewed: new Date().toISOString(),
      nextReview: nextReviewDate,
      correctStreak: isCorrect ? (currentData.correctStreak || 0) + 1 : 0,
      totalAttempts: (currentData.totalAttempts || 0) + 1,
      correctAttempts: (currentData.correctAttempts || 0) + (isCorrect ? 1 : 0)
    }
  };
  
  setSrsData(updatedData);
  localStorage.setItem(`srs_${user.sub}`, JSON.stringify(updatedData));
};

// Load SRS data from localStorage
const loadSRSData = () => {
  if (!user) return;
  
  try {
    const saved = localStorage.getItem(`srs_${user.sub}`);
    if (saved) {
      setSrsData(JSON.parse(saved));
    }
  } catch (error) {
    setSrsData({});
  }
};

// Get words prioritized by SRS algorithm
const getSRSPrioritizedWords = (words) => {
  const now = new Date();
  
  return words
    .map(word => {
      const wordKey = `${word.dutch}_${word.english}`;
      const srsInfo = srsData[wordKey] || {
        level: 0,
        nextReview: now.toISOString(),
        reviewCount: 0
      };
      
      const nextReview = new Date(srsInfo.nextReview);
      const isDue = nextReview <= now;
      const daysSinceReview = srsInfo.lastReviewed 
        ? (now - new Date(srsInfo.lastReviewed)) / (1000 * 60 * 60 * 24)
        : 999;
      
      // Priority score (higher = more important to review)
      let priority = 0;
      
      if (isDue) priority += 100; // Due words get highest priority
      if (srsInfo.level === 0) priority += 50; // New/difficult words
      if (srsInfo.level <= 2) priority += 30; // Learning words
      if (srsInfo.reviewCount === 0) priority += 40; // Never reviewed
      priority += (5 - srsInfo.level) * 10; // Lower level = higher priority
      priority += Math.min(daysSinceReview, 30); // Add days since last review
      
      return {
        ...word,
        srsInfo,
        priority,
        isDue
      };
    })
    .sort((a, b) => b.priority - a.priority);
};

const checkAndUpdateProgress = (categories, mode, score, totalQuestions) => {
  if (!user) return;

  // Convert categories to array if it's a string (backward compatibility)
  const categoryArray = typeof categories === 'string' 
    ? categories.split(',').filter(c => c && c !== 'all')
    : Array.isArray(categories) 
    ? categories.filter(c => c !== 'all')
    : [];

  if (categoryArray.length === 0) return;

  // Only track progress for 'play' (multiple choice) and 'spelling' modes
  if (mode !== 'play' && mode !== 'spelling') return;

  const percentage = (score / totalQuestions) * 100;

  // Create a copy of current progress
  const updatedProgress = { ...userProgress };

  // Update progress for each selected category
  categoryArray.forEach(category => {
    const availableWords = dutchWordBank[category]?.length || 0;
    const requiredQuestions = Math.ceil(availableWords * 0.8);
     const passed = percentage >= 80 && totalQuestions >= requiredQuestions;

    // Initialize category progress if it doesn't exist
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
        const existing = updatedProgress[category].spellingDifficulty;
        if (totalQuestions >= requiredQuestions || !existing.passed || percentage > existing.score) {
          const newPassed = totalQuestions >= requiredQuestions ? passed : (existing.passed || passed);
          updatedProgress[category].spellingDifficulty = {
            score: percentage,
            wordsAttempted: totalQuestions,
            passed: newPassed
          };
        }
      } else {
        const existing = updatedProgress[category].multipleChoice;
        if (totalQuestions >= requiredQuestions || !existing.passed || percentage > existing.score) {
          const newPassed = totalQuestions >= requiredQuestions ? passed : (existing.passed || passed);
          updatedProgress[category].multipleChoice = {
            score: percentage,
            wordsAttempted: totalQuestions,
            passed: newPassed
          };
        }
      }
    } else if (mode === 'spelling') {
      const existing = updatedProgress[category].spelling;
      if (totalQuestions >= requiredQuestions || !existing.passed || percentage > existing.score) {
        const newPassed = totalQuestions >= requiredQuestions ? passed : (existing.passed || passed);
        updatedProgress[category].spelling = {
          score: percentage,
          wordsAttempted: totalQuestions,
          passed: newPassed
        };
      }
    }

    // Category is completed when BOTH normal multiple choice AND spelling mode are passed
    updatedProgress[category].completed = 
      updatedProgress[category].multipleChoice.passed && 
      updatedProgress[category].spelling.passed;
  });

  // Save the updated progress for ALL categories at once
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

  // ADD THIS - Admin function to mark category as completed
const adminCompleteCategory = (category) => {
  if (!isAdmin || !user) return;
  
  if (confirm(`Mark "${category.replace(/_/g, ' ').toUpperCase()}" as completed?\n\nThis will mark both Multiple Choice and Spelling as passed with 100%.`)) {
    const updatedProgress = { ...userProgress };
    
    if (!updatedProgress[category]) {
      updatedProgress[category] = {
        multipleChoice: { score: 0, wordsAttempted: 0, passed: false },
        spelling: { score: 0, wordsAttempted: 0, passed: false },
        spellingDifficulty: { score: 0, wordsAttempted: 0, passed: false },
        completed: false
      };
    }
    
    // Mark both modes as completed with 100%
    const wordCount = dutchWordBank[category]?.length || 0;
    updatedProgress[category].multipleChoice = {
      score: 100,
      wordsAttempted: wordCount,
      passed: true
    };
    updatedProgress[category].spelling = {
      score: 100,
      wordsAttempted: wordCount,
      passed: true
    };
    updatedProgress[category].completed = true;
    
    saveUserProgress(updatedProgress);
    alert(`✅ "${category.replace(/_/g, ' ').toUpperCase()}" marked as completed!`);
  }
};

// ADD THIS - Admin function to reset category progress
const adminResetCategory = (category) => {
  if (!isAdmin || !user) return;
  
  if (confirm(`Reset progress for "${category.replace(/_/g, ' ').toUpperCase()}"?\n\nThis will remove all progress for this category.`)) {
    const updatedProgress = { ...userProgress };
    delete updatedProgress[category];
    
    saveUserProgress(updatedProgress);
    alert(`🔄 "${category.replace(/_/g, ' ').toUpperCase()}" progress reset!`);
  }
};
// Check if all A1 categories have both Multiple Choice and Spelling passed
const areAllA1CategoriesCompleted = () => {
  if (!user) return false;
  
  const a1Categories = Object.keys(dutchWordBank).filter(cat => {
    const words = dutchWordBank[cat];
    return words && words.length > 0 && words.some(w => w.level === 'A1');
  });
  
  return a1Categories.every(cat => {
    const prog = userProgress[cat];
    return (prog?.multipleChoice?.passed && prog?.spelling?.passed) || false;
  });
};

// Check if all A2-only categories have both Multiple Choice and Spelling passed
const areAllA2CategoriesCompleted = () => {
  if (!user) return false;
  const a2Categories = Object.keys(dutchWordBank).filter(cat => {
    const words = dutchWordBank[cat];
    if (!words || words.length === 0) return false;
    const hasA1 = words.some(w => w.level === 'A1');
    const hasA2 = words.some(w => w.level === 'A2');
    // Treat categories that include A2 (with or without A1) as A2 categories for completion gate
    return hasA2;
  });
  if (a2Categories.length === 0) return false;
  return a2Categories.every(cat => {
    const prog = userProgress[cat];
    return (prog?.multipleChoice?.passed && prog?.spelling?.passed) || false;
  });
};

// Check if a category is locked (A2 locked until all A1 done; B1/B2 until all A1 & A2 done)
const isCategoryLocked = (category) => {
  if (isAdmin) return false;

  if (!user || category === 'all') return false;
  
  const words = dutchWordBank[category];
  if (!words || words.length === 0) return false;
  
  // Determine levels present
  const hasA1 = words.some(w => w.level === 'A1');
  const hasA2 = words.some(w => w.level === 'A2');
  const hasB1 = words.some(w => w.level === 'B1');
  const hasB2 = words.some(w => w.level === 'B2');
  
  // Any category that contains B1/B2 requires all A1 and A2 completed
  if (hasB1 || hasB2) {
    return !(areAllA1CategoriesCompleted() && areAllA2CategoriesCompleted());
  }
  
  // If it contains A2 (and no A1), require all A1 completed
  if (hasA2 && !hasA1) {
    return !areAllA1CategoriesCompleted();
  }
  
  return false;
};

  const categories = ['all', ...Object.keys(dutchWordBank)];

const loadWords = (categories) => {
  let words = [];
  
  // If categories is a string (backward compatibility), convert to array
  const categoryArray = Array.isArray(categories) ? categories : [categories];
  
  if (categoryArray.includes('all') || categoryArray.length === 0) {
    words = getAllWords();
  } else {
    // Load words from multiple selected categories
    categoryArray.forEach(category => {
      const categoryWords = (dutchWordBank[category] || []).map(w => ({ ...w, category }));
      words = [...words, ...categoryWords];
    });
  }
  
  // Remove duplicates based on dutch + english combination
  const uniqueWords = words.filter((word, index, self) =>
    index === self.findIndex((w) => w.dutch === word.dutch && w.english === word.english)
  );
  
  // Apply SRS prioritization
  const prioritizedWords = getSRSPrioritizedWords(uniqueWords);
  
  return prioritizedWords;
};

const startLearnMode = () => {
  const words = loadWords(selectedCategories); // Now accepts array
  if (words.length === 0) {
    alert('Not enough words in the selected categories.');
    return;
  }
  if (words.length < numQuestions) {
    alert(`Not enough words in the selected categories. Please select categories with at least ${numQuestions} words or reduce the number of questions.`);
    return;
  }
  setLearnWords(words.slice(0, numQuestions));
  setLearnIndex(0);
  setGameMode('learn');
  setShowQuestionSelector(false);
};

const startGame = (mode = 'play') => {
  setQuizStartTime(Date.now());
  
  // Check if we should review failed words
  let words;
  if (reviewFailedWords) {
    // Get failed words from selected categories
    const failedWords = getFailedWords(selectedCategories, mode);
    
    if (failedWords.length === 0) {
      alert('No failed words found to review! You haven\'t taken any spelling tests yet or got all correct.');
      setReviewFailedWords(false);
      return;
    }
    
    // Load all words from selected categories
    const allCategoryWords = loadWords(selectedCategories);
    
    // Map failed words to full word objects
    words = failedWords.map(fw => {
      return allCategoryWords.find(w => w.dutch === fw.dutch && w.english === fw.english);
    }).filter(w => w !== undefined);
    
    if (words.length === 0) {
      alert('No failed words found to review!');
      setReviewFailedWords(false);
      return;
    }
    
    setNumQuestions(words.length);
  } else {
    words = loadWords(selectedCategories);
  }
  
  // Rest of validation logic remains the same...
  if (mode === 'play' && words.length < 4) {
    alert('Not enough words in the selected categories.');
    return;
  }
  
  if ((mode === 'spelling' || mode === 'fillblank' || mode === 'speaking') && words.length < 1) {
    alert('Not enough words in the selected categories.');
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
      alert(`Not enough words with suitable examples for Fill in the Blank mode. Only ${wordsWithValidExamples.length} words available. Please reduce the number of questions or choose different categories.`);
      return;
    }
  }
  
  if (words.length < numQuestions) {
    alert(`Not enough words in the selected categories. Please select categories with at least ${numQuestions} words or reduce the number of questions.`);
    return;
  }
  
  const actualMode = mode || currentGameMode || 'play';
  
  setWordBank(words);
  setUsedWords([]);
  setGameMode(actualMode);
  setCurrentGameMode(actualMode);
  setGameStartCategory(selectedCategories);
  setGameStartCategory(selectedCategories.join(',')); // Store multiple categories
  setScore(0);
  setStreak(0);
  setQuestionsAnswered(0);
  setFeedback(null);
  setWrongAnswers([]);
  setSpellingAnswer('');
  setFillBlankAnswer('');
  setShowQuestionSelector(false);
  setTranscript('');
  setIsRecording(false);
  
  if (actualMode === 'spelling') {
    generateSpellingQuestion(words, []);
  } else if (actualMode === 'fillblank') {
    generateFillBlankQuestion(words, []);
  } else if (actualMode === 'speaking') {
    generateSpeakingQuestion(words, []);
  } else {
    generateQuestion(words, []);
  }
};

// NEW FUNCTION - Get ALL failed words from history (not just latest attempt)
const getAllFailedWordsFromHistory = (categories, mode = 'spelling') => {
  if (!user) return [];
  
  // Convert to array if needed
  const categoryArray = Array.isArray(categories) ? categories : [categories];
  
  // Collect ALL failed words from ALL attempts in history
  const allFailedWords = new Map(); // Use Map to track unique words with their fail count
  
  categoryArray.forEach(category => {
    const relevantAttempts = attemptHistory.filter(
      a => a.category === category && 
           a.mode === mode && 
           a.wrongAnswers && 
           a.wrongAnswers.length > 0
    );
    
    relevantAttempts.forEach(attempt => {
      attempt.wrongAnswers.forEach(word => {
        const wordKey = `${word.dutch}_${word.english}`;
        
        if (allFailedWords.has(wordKey)) {
          // Increment fail count if word already exists
          const existing = allFailedWords.get(wordKey);
          allFailedWords.set(wordKey, {
            ...existing,
            failCount: existing.failCount + 1
          });
        } else {
          // Add new failed word
          allFailedWords.set(wordKey, {
            ...word,
            failCount: 1
          });
        }
      });
    });
  });
  
  // Convert Map to array and sort by fail count (most failed first)
  return Array.from(allFailedWords.values()).sort((a, b) => b.failCount - a.failCount);
};

  const openQuestionSelector = (mode) => {
    setPendingGameMode(mode);
    setShowQuestionSelector(true);
  };

const startGameWithQuestions = () => {
    if (reviewFailedWords) {
    // For failed words review, use the failed words count
      const failedWords = getFailedWords(selectedCategory, pendingGameMode);
      if (failedWords.length > 0) {
        setNumQuestions(failedWords.length);
      }
    }
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

const startConjugationLearn = () => {
  const verbs = Object.keys(verbConjugations);
  if (verbs.length === 0) {
    alert('No verb conjugations available.');
    return;
  }
  const count = Math.min(numQuestions || 10, verbs.length);
  setConjugationLearnVerbs(verbs.slice(0, count));
  setConjugationLearnIndex(0);
  setGameMode('conjugation_learn');
  setShowQuestionSelector(false);
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

  // UPDATE SRS DATA - ADD THIS
  const wordKey = `${currentWord.dutch}_${currentWord.english}`;
  updateSRSData(wordKey, isCorrect);

  if (isCorrect) {
    setScore(score + 1);
    setStreak(streak + 1);
    checkAchievements('streak', streak + 1);
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
    
        // In handleSpellingSubmit - add after playSound
    const wordKey = `${currentWord.dutch}_${currentWord.english}`;
    updateSRSData(wordKey, isCorrect);

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      checkAchievements('streak', streak + 1);
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
    
    // In handleFillBlankSubmit - add after playSound
    const wordKey = `${currentWord.dutch}_${currentWord.english}`;
    updateSRSData(wordKey, isCorrect);

    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      checkAchievements('streak', streak + 1);
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

const speakConversationDialogue = (dialogueArray, startIndex = 0) => {
  if (startIndex >= dialogueArray.length) {
    setIsPlayingConversation(false);
    setCurrentDialogueIndex(0);
    return;
  }
  
  setIsPlayingConversation(true);
  setCurrentDialogueIndex(startIndex);
  
  const utterance = new SpeechSynthesisUtterance(dialogueArray[startIndex].text);
  utterance.lang = 'nl-NL';
  
  // Get available voices
  const voices = window.speechSynthesis.getVoices();
  const dutchVoices = voices.filter(voice => voice.lang.startsWith('nl'));
  
  // Determine which speaker (alternating pattern or use speaker property)
  const speakerIndex = startIndex % 2; // 0 or 1 for two speakers
  
  if (dutchVoices.length > 0) {
    // Try to use different Dutch voices if available
    if (dutchVoices.length > 1) {
      utterance.voice = dutchVoices[speakerIndex % dutchVoices.length];
    } else {
      utterance.voice = dutchVoices[0];
    }
    
    // Create variation between two female speakers
    if (speakerIndex === 0) {
      // First speaker: Slightly higher, faster
      utterance.pitch = 1.2;
      utterance.rate = 0.85;
    } else {
      // Second speaker: Slightly lower, slower
      utterance.pitch = 0.7;
      utterance.rate = 0.85;
    }
  } else {
    // Fallback if no Dutch voices
    if (speakerIndex === 0) {
      utterance.pitch = 1.15;
      utterance.rate = 0.85;
    } else {
      utterance.pitch = 0.95;
      utterance.rate = 0.75;
    }
  }
  
  utterance.onend = () => {
    setTimeout(() => {
      speakConversationDialogue(dialogueArray, startIndex + 1);
    }, 600);
  };
  
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};

const stopConversation = () => {
  window.speechSynthesis.cancel();
  setIsPlayingConversation(false);
  setCurrentDialogueIndex(0);
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
    setSelectedConversation(null);
    setShowConversationQuiz(false);
    setCurrentConversationQuestion(0);
    setConversationScore(0);
    setConversationQuizFeedback(null);
    stopConversation();
    setConjugationQuestion(null);
    setConjugationAnswer('');
    setReviewFailedWords(false);
    setShowMultiSelect(false); // ADD THIS
    setSelectedCategories(['all']); // ADD THIS
    setReviewMode(null); //
    setShowAdaptiveStats(false);
    stopConversation();

  };


  // ADD THESE FUNCTIONS AFTER YOUR EXISTING HELPER FUNCTIONS (around line 800)

// Get user's weakest words based on all history
const getWeakestWords = () => {
  if (!user || attemptHistory.length === 0) return [];
  
  // Track all wrong answers across all attempts
  const wordFailures = new Map();
  const wordAttempts = new Map();
  
  attemptHistory.forEach(attempt => {
    if (attempt.wrongAnswers) {
      attempt.wrongAnswers.forEach(wrong => {
        const key = `${wrong.dutch}_${wrong.english}`;
        wordFailures.set(key, (wordFailures.get(key) || 0) + 1);
        wordAttempts.set(key, (wordAttempts.get(key) || 0) + 1);
      });
    }
    
    // Also count correct answers
    const correctCount = attempt.score;
    // This is approximate - we don't have exact correct words, but we can estimate
  });
  
  // Convert to array with failure rate
  const weakWords = Array.from(wordFailures.entries()).map(([key, failures]) => {
    const [dutch, english] = key.split('_');
    const attempts = wordAttempts.get(key) || failures;
    const failureRate = (failures / attempts) * 100;
    
    return {
      dutch,
      english,
      failures,
      attempts,
      failureRate
    };
  });
  
  // Sort by failure rate, then by total failures
  return weakWords.sort((a, b) => {
    if (b.failureRate === a.failureRate) {
      return b.failures - a.failures;
    }
    return b.failureRate - a.failureRate;
  });
};

// Get words that need more practice based on SRS and history
const getWordsThatNeedPractice = () => {
  const allWords = getAllWords();
  const weakestWords = getWeakestWords();
  const weakWordKeys = new Set(weakestWords.map(w => `${w.dutch}_${w.english}`));
  
  // Combine weak words with SRS due words
  const prioritized = getSRSPrioritizedWords(allWords);
  
  // Score each word based on multiple factors
  const scoredWords = allWords.map(word => {
    const wordKey = `${word.dutch}_${word.english}`;
    const srsInfo = srsData[wordKey];
    const weakWord = weakestWords.find(w => `${w.dutch}_${w.english}` === wordKey);
    
    let score = 0;
    
    // Factor 1: Historical failures (highest priority)
    if (weakWord) {
      score += weakWord.failureRate * 2; // 0-200 points
      score += weakWord.failures * 10; // 10 points per failure
    }
    
    // Factor 2: SRS level (lower = needs more practice)
    if (srsInfo) {
      score += (5 - srsInfo.level) * 15; // 0-75 points
      
      // Factor 3: Recent performance
      const accuracy = srsInfo.totalAttempts > 0 
        ? (srsInfo.correctAttempts / srsInfo.totalAttempts) * 100 
        : 0;
      score += (100 - accuracy) * 0.5; // 0-50 points for poor accuracy
    } else {
      // Never practiced = high priority
      score += 50;
    }
    
    return {
      ...word,
      practiceScore: score,
      srsInfo,
      weakWordInfo: weakWord
    };
  });
  
  // Sort by practice score (highest = needs most practice)
  return scoredWords.sort((a, b) => b.practiceScore - a.practiceScore);
};

// Get adaptive learning stats for display
const getAdaptiveLearningStats = () => {
  if (!user) return null;
  
  const weakestWords = getWeakestWords();
  const top5Weakest = weakestWords.slice(0, 5);
  
  const totalWordsAttempted = new Set(
    attemptHistory.flatMap(a => 
      (a.wrongAnswers || []).map(w => `${w.dutch}_${w.english}`)
    )
  ).size;
  
  const wordsThatNeedWork = getWordsThatNeedPractice()
    .filter(w => w.practiceScore > 30)
    .length;
  
  const dueForReview = getSRSPrioritizedWords(getAllWords())
    .filter(w => w.isDue)
    .length;
  
  return {
    top5Weakest,
    totalWordsAttempted,
    wordsThatNeedWork,
    dueForReview,
    totalAttempts: attemptHistory.length,
    avgScore: attemptHistory.length > 0
      ? Math.round(attemptHistory.reduce((sum, a) => sum + a.percentage, 0) / attemptHistory.length)
      : 0
  };
};

// Start adaptive practice mode
const startAdaptivePractice = (mode = 'spelling', numQuestions = 20) => {
  const wordsToPractice = getWordsThatNeedPractice();
  
  if (wordsToPractice.length === 0) {
    alert('🎉 Amazing! You have no weak words to practice!\n\nKeep up the great work!');
    return;
  }
  
  // Take top N words that need practice
  const practiceWords = wordsToPractice.slice(0, Math.min(numQuestions, wordsToPractice.length));
  
  if (practiceWords.length < 5) {
    alert(`Only ${practiceWords.length} words need practice. Let's focus on those!`);
  }
  
  // Set up the game
  setWordBank(practiceWords);
  setUsedWords([]);
  setGameMode(mode);
  setCurrentGameMode(mode);
  setGameStartCategory('adaptive_practice');
  setScore(0);
  setStreak(0);
  setQuestionsAnswered(0);
  setFeedback(null);
  setWrongAnswers([]);
  setSpellingAnswer('');
  setFillBlankAnswer('');
  setNumQuestions(practiceWords.length);
  setShowQuestionSelector(false);
  setTranscript('');
  setIsRecording(false);
  setReviewMode('adaptive');
  
  // Generate first question
  if (mode === 'spelling') {
    generateSpellingQuestion(practiceWords, []);
  } else if (mode === 'fillblank') {
    generateFillBlankQuestion(practiceWords, []);
  } else if (mode === 'speaking') {
    generateSpeakingQuestion(practiceWords, []);
  } else {
    generateQuestion(practiceWords, []);
  }
};
// Replace your handleSearch function with this fixed version:



const handleSearch = (query) => {
  setSearchQuery(query);
  
  if (query.trim().length < 2) {
    setSearchResults([]);
    setShowSearchResults(false);
    return;
  }
  
  const allWords = getAllWords();
  const queryLower = query.toLowerCase();
  
  console.log('Searching for:', queryLower);
  console.log('Total words available:', allWords.length);
  console.log('Sample word:', allWords[0]); // Debug: see word structure
  
  const results = allWords.filter(word => {
    if (!word) return false;
    
    const dutchMatch = word.dutch?.toLowerCase().includes(queryLower);
    const englishMatch = word.english?.toLowerCase().includes(queryLower);
    const exampleMatch = word.example?.toLowerCase().includes(queryLower);
    
    return dutchMatch || englishMatch || exampleMatch;
  });
  
  console.log('Found results:', results.length);
  
  const sortedResults = results.sort((a, b) => {
    const aDutch = a.dutch?.toLowerCase() || '';
    const bDutch = b.dutch?.toLowerCase() || '';
    const aEnglish = a.english?.toLowerCase() || '';
    const bEnglish = b.english?.toLowerCase() || '';
    
    // Exact match
    if (aDutch === queryLower) return -1;
    if (bDutch === queryLower) return 1;
    if (aEnglish === queryLower) return -1;
    if (bEnglish === queryLower) return 1;
    
    // Starts with
    const aStartsDutch = aDutch.startsWith(queryLower);
    const bStartsDutch = bDutch.startsWith(queryLower);
    if (aStartsDutch && !bStartsDutch) return -1;
    if (!aStartsDutch && bStartsDutch) return 1;
    
    const aStartsEnglish = aEnglish.startsWith(queryLower);
    const bStartsEnglish = bEnglish.startsWith(queryLower);
    if (aStartsEnglish && !bStartsEnglish) return -1;
    if (!aStartsEnglish && bStartsEnglish) return 1;
    
    // Contains
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

  // Load achievements from localStorage
const loadAchievements = () => {
  if (!user) return;
  
  try {
    const saved = localStorage.getItem(`achievements_${user.sub}`);
    if (saved) {
      const data = JSON.parse(saved);
      setAchievements(data.achievements || {});
      setUserPoints(data.points || 0);
      setUnlockedAchievements(data.unlocked || []);
      setGameModesCompleted(new Set(data.modesCompleted || []));
    }
  } catch (error) {
    console.error('Failed to load achievements:', error);
  }
};

const saveAchievements = async (newAchievements, newPoints, newUnlocked, newModes) => {
  if (!user) return;
  
  try {
    const data = {
      achievements: newAchievements,
      points: newPoints,
      unlocked: newUnlocked,
      modesCompleted: Array.from(newModes)
    };
    localStorage.setItem(`achievements_${user.sub}`, JSON.stringify(data));
    
    // ⭐ Sync to Firebase
    await syncUserStatsToFirebase();
  } catch (error) {
    console.error('Failed to save achievements:', error);
  }
};


const syncUserStatsToFirebase = async () => {
  if (!user) return;
  
  try {
    const userId = user.email.replace(/[^a-zA-Z0-9]/g, '_');
    const userRef = ref(database, `users/${userId}`);
    
    // Get existing data (to preserve login info)
    const snapshot = await get(userRef);
    if (!snapshot.exists()) {
      console.log('⚠️ No existing user data to sync stats to');
      return; // Don't create new user data in sync, only update existing
    }
    
    const existingData = snapshot.val();
    
    // Calculate stats from current state
    const completedCategories = Object.values(userProgress).filter(p => p.completed).length;
    const totalAttempts = attemptHistory.length;
    const avgScore = totalAttempts > 0 
      ? Math.round(attemptHistory.reduce((sum, a) => sum + a.percentage, 0) / totalAttempts)
      : 0;
    
    // ✅ CRITICAL FIX: Use Firebase update() instead of set() to only update specific fields
    const { update } = await import('firebase/database');
    
    const statsUpdate = {
      completedCategories,
      totalAttempts,
      avgScore,
      points: userPoints,
      achievements: unlockedAchievements.length,
      lastUpdated: new Date().toISOString()
      // ✅ DON'T touch lastLogin, loginCount, firstLogin at all!
    };
    
    await update(userRef, statsUpdate);
    console.log('✅ User stats synced to Firebase (login data preserved)');
    
  } catch (error) {
    console.error('❌ Failed to sync stats to Firebase:', error);
  }
};

// Check and unlock achievements
const checkAchievements = (type, value, context = {}) => {
  if (!user) return;
  
  const newUnlocked = [];
  const updatedAchievements = { ...achievements };
  let pointsEarned = 0;
  
  Object.values(achievementsData).forEach(achievement => {
    // Skip if already unlocked
    if (unlockedAchievements.includes(achievement.id)) return;
    
    let shouldUnlock = false;
    
    switch (achievement.type) {
      case 'words_learned':
        const masteredCount = Object.values(srsData).filter(
          data => data.level >= 4
        ).length;
        shouldUnlock = masteredCount >= achievement.requirement;
        break;
        
      case 'streak':
        shouldUnlock = value >= achievement.requirement;
        break;
        
      case 'perfect_score':
        shouldUnlock = context.score === context.total && 
                      context.total >= achievement.requirement;
        break;
        
      case 'categories_completed':
        const completedCount = Object.values(userProgress).filter(
          p => p.completed
        ).length;
        shouldUnlock = completedCount >= achievement.requirement;
        break;
        
      case 'a1_complete':
        shouldUnlock = areAllA1CategoriesCompleted();
        break;
        
      case 'a2_complete':
        shouldUnlock = areAllA2CategoriesCompleted();
        break;
        
      case 'quizzes_completed':
        shouldUnlock = attemptHistory.length >= achievement.requirement;
        break;
        
      case 'special':
        if (achievement.id === 'night_owl') {
          const hour = new Date().getHours();
          shouldUnlock = hour >= 0 && hour < 5;
        } else if (achievement.id === 'early_bird') {
          const hour = new Date().getHours();
          shouldUnlock = hour >= 5 && hour < 7;
        } else if (achievement.id === 'speed_demon') {
          shouldUnlock = context.isSpeedDemon;
        } else if (achievement.id === 'polyglot') {
          shouldUnlock = context.modesCompleted && context.modesCompleted.size >= 4;
        }
        break;
        
      case 'game_modes_mastered':
        shouldUnlock = gameModesCompleted.size >= achievement.requirement;
        break;
    }
    
    if (shouldUnlock) {
      updatedAchievements[achievement.id] = {
        ...achievement,
        unlockedAt: new Date().toISOString()
      };
      newUnlocked.push(achievement.id);
      pointsEarned += achievement.points;
    }
  });
  
  if (newUnlocked.length > 0) {
    const allUnlocked = [...unlockedAchievements, ...newUnlocked];
    const newPoints = userPoints + pointsEarned;
    const newModes = new Set(gameModesCompleted);
    
    setAchievements(updatedAchievements);
    setUserPoints(newPoints);
    setUnlockedAchievements(allUnlocked);
    saveAchievements(updatedAchievements, newPoints, allUnlocked, newModes);
    
    // Show popup for first achievement
    if (newUnlocked.length > 0) {
      setShowAchievementPopup(updatedAchievements[newUnlocked[0]]);
      setTimeout(() => setShowAchievementPopup(null), 5000);
    }
  }
};

// Get user level based on points
const getUserLevel = (points) => {
  if (points < 100) return { level: 1, title: '🌱 Beginner', nextLevel: 100 };
  if (points < 300) return { level: 2, title: '🌿 Learner', nextLevel: 300 };
  if (points < 600) return { level: 3, title: '🌳 Student', nextLevel: 600 };
  if (points < 1000) return { level: 4, title: '🎓 Scholar', nextLevel: 1000 };
  if (points < 1500) return { level: 5, title: '👨‍🎓 Graduate', nextLevel: 1500 };
  if (points < 2500) return { level: 6, title: '🏅 Expert', nextLevel: 2500 };
  if (points < 5000) return { level: 7, title: '🌟 Master', nextLevel: 5000 };
  return { level: 8, title: '👑 Legend', nextLevel: null };
};



// Admin Panel Component
const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-6xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">👑 Admin Dashboard</h2>
          <button
            onClick={() => setShowAdminPanel(false)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Back to Menu
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white">
            <div className="text-3xl font-bold">{allUserStats.length}</div>
            <div className="text-sm opacity-90">Total Users</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white">
            <div className="text-3xl font-bold">
              {allUserStats.reduce((sum, u) => sum + u.totalAttempts, 0)}
            </div>
            <div className="text-sm opacity-90">Total Attempts</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-xl text-white">
            <div className="text-3xl font-bold">
              {allUserStats.reduce((sum, u) => sum + u.completedCategories, 0)}
            </div>
            <div className="text-sm opacity-90">Categories Done</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl text-white">
            <div className="text-3xl font-bold">
              {allUserStats.length > 0 
                ? Math.round(allUserStats.reduce((sum, u) => sum + u.avgScore, 0) / allUserStats.length)
                : 0}%
            </div>
            <div className="text-sm opacity-90">Avg Score</div>
          </div>
        </div>

        {/* Users List */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">User Activities</h3>
          {allUserStats.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>No users yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {allUserStats.map((userStat, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200 hover:border-purple-300 transition-all">
                  <div className="flex items-start gap-4">
                    <img 
                      src={userStat.picture} 
                      alt={userStat.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-800">{userStat.name}</h4>
                          <p className="text-sm text-gray-600">{userStat.email}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold">
                            {userStat.loginCount} logins
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="bg-white p-2 rounded-lg">
                          <div className="text-gray-500">Last Login</div>
                          <div className="font-semibold text-gray-800 text-xs">
                            {(() => {
                              try {
                                if (!userStat.lastLogin) return 'Never';
                                const date = new Date(userStat.lastLogin);
                                if (isNaN(date.getTime())) return 'Invalid Date';
                                return date.toLocaleString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: true
                                });
                              } catch (error) {
                                return 'Error';
                              }
                            })()}
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded-lg">
                          <div className="text-gray-500">Attempts</div>
                          <div className="font-semibold text-blue-600">{userStat.totalAttempts}</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg">
                          <div className="text-gray-500">Avg Score</div>
                          <div className="font-semibold text-green-600">{userStat.avgScore}%</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg">
                          <div className="text-gray-500">Completed</div>
                          <div className="font-semibold text-purple-600">{userStat.completedCategories} cats</div>
                        </div>
                      </div>
                      
                      <div className="mt-2 flex gap-2">
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                          🏆 {userStat.points} pts
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          🎖️ {userStat.achievements} achievements
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// Instructions Component
const InstructionsScreen = () => {
  const scrollRef = useRef(null);
  const savedScrollTopRef = useRef(0);

  useEffect(() => {
    // Prevent body scroll when instructions are open
    document.body.style.overflow = 'hidden';
    // Disable browser scroll restoration that can jump the overlay
    const prevRestore = (typeof window !== 'undefined' && 'scrollRestoration' in history) ? history.scrollRestoration : undefined;
    if (prevRestore !== undefined) history.scrollRestoration = 'manual';
    return () => {
      document.body.style.overflow = 'unset';
      if (prevRestore !== undefined) history.scrollRestoration = prevRestore;
    };
  }, []);

  // Track and preserve scroll position across re-renders; actively guard against sudden jumps up
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let lastUserScrollAt = Date.now();

    const onScroll = () => {
      savedScrollTopRef.current = el.scrollTop;
      lastUserScrollAt = Date.now();
    };
    el.addEventListener('scroll', onScroll, { passive: true });

    let rafId;
    const guard = () => {
      // If within 6s of user's last scroll and the container jumped upward, restore it
      if (Date.now() - lastUserScrollAt < 6000) {
        if (el.scrollTop + 5 < savedScrollTopRef.current) {
          el.scrollTop = savedScrollTopRef.current;
        }
      }
      rafId = requestAnimationFrame(guard);
    };
    rafId = requestAnimationFrame(guard);

    return () => {
      el.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 z-50 overflow-hidden">
      <div className="h-full flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
          {/* Fixed Header */}
          <div className="flex justify-between items-center p-6 sm:p-8 border-b-2 border-gray-200 flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">📚 How to Use This App</h2>
            <button
              onClick={() => setShowInstructions(false)}
              className="bg-gray-200 hover:bg-gray-300 active:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-all"
            >
              ✕ Close
            </button>
          </div>

          {/* Scrollable Content */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 sm:p-8 overscroll-contain" style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div className="space-y-6">
              {/* Overview */}
              <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
                <h3 className="text-xl font-bold text-orange-700 mb-3">🎯 Course Overview</h3>
                <p className="text-gray-700 mb-2">This is the official <strong>2000+ Most Common Dutch Words</strong> learning course covering A1 🟢 and A2 🔵 and B1, B2 levels.</p>
                <div className="mt-3 space-y-2">
                  <p><strong>🟢 A1 Level:</strong> Basic everyday words and phrases</p>
                  <p><strong>🔵 A2 Level:</strong> Intermediate vocabulary (unlocked after completing all A1)</p>
                </div>
              </div>

              {/* Learning Path */}
              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-3">📖 Recommended Learning Path</h3>
                {/* NEW: Explicit instruction to select Thema first */}
                <div className="mb-3 p-3 rounded-lg bg-blue-100 border border-blue-300">
                  <p className="text-sm text-blue-800 font-semibold">🗂️ Before you start: Select a Thema (category) on the menu, then choose a Learning Mode.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">1️⃣</span>
                    <div>
                      <p className="font-bold text-blue-700">Choose a Thema 🗂️</p>
                      <p className="text-sm text-gray-600">Pick a category (e.g., Thema lessons) from the grid. This sets which words you’ll study.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">2️⃣</span>
                    <div>
                      <p className="font-bold text-blue-700">Learn Mode 📚</p>
                      <p className="text-sm text-gray-600">Study words with examples and pronunciation. Take your time!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">3️⃣</span>
                    <div>
                      <p className="font-bold text-orange-700">Multiple Choice Quiz 🎯</p>
                      <p className="text-sm text-gray-600">Test your knowledge. Need 80%+ on 80% of words to pass!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">4️⃣</span>
                    <div>
                      <p className="font-bold text-purple-700">Spelling Mode ✏️</p>
                      <p className="text-sm text-gray-600">Master the spelling. Need 80%+ on 80% of words to complete!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="font-bold text-green-700">Category Completed! 🎉</p>
                      <p className="text-sm text-gray-600">Both Multiple Choice + Spelling passed = Trophy 🏆</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Modes */}
              <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-purple-700 mb-3">🎮 Game Modes Explained</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold text-blue-600">📚 Learn Mode</p>
                    <p className="text-gray-600">Browse words with English translation, pronunciation, and example sentences. No pressure!</p>
                  </div>
                  <div>
                    <p className="font-bold text-orange-600">🎯 Multiple Choice</p>
                    <p className="text-gray-600">See Dutch word, pick English translation. Has Normal and Spelling Difficulty modes.</p>
                  </div>
                  <div>
                    <p className="font-bold text-purple-600">✏️ Spelling Mode</p>
                    <p className="text-gray-600">Type the complete Dutch word from English hint + audio. Most challenging!</p>
                  </div>
                  <div>
                    <p className="font-bold text-rose-600">🎤 Speaking Test</p>
                    <p className="text-gray-600">Pronounce Dutch words. Needs microphone permission.</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-600">🔄 Practice Failed Words</p>
                    <p className="text-gray-600">Review only the words you got wrong in your last spelling test!</p>
                  </div>
                  <div>
                    <p className="font-bold text-teal-600">📝 Fill in the Blank</p>
                    <p className="text-gray-600">Complete sentences with the correct Dutch word.</p>
                  </div>
                  <div>
                    <p className="font-bold text-cyan-600">🔄 Verb Conjugation</p>
                    <p className="text-gray-600">Learn and test verb forms in present and past tense.</p>
                  </div>
                  <div>
                    <p className="font-bold text-purple-600">🎧 Listening Practice</p>
                    <p className="text-gray-600">Listen to conversations and answer comprehension questions.</p>
                  </div>
                  <div>
                    <p className="font-bold text-yellow-600">📖 Stories</p>
                    <p className="text-gray-600">Read Dutch stories and test your understanding.</p>
                  </div>
                </div>
              </div>

              {/* Progress & Points */}
              <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-700 mb-3">🏆 Progress & Points System</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>✅ Category Progress:</strong> Complete BOTH Multiple Choice + Spelling with 80%+ to unlock trophy</p>
                  <p><strong>💡 Partial Progress:</strong> Blue indicator shows one mode passed (either Multiple Choice OR Spelling)</p>
                  <p><strong>🔒 Locked Categories:</strong> Complete all A1 categories to unlock A2</p>
                  <p><strong>🎯 Points:</strong> Earn points by completing quizzes and unlocking achievements</p>
                  <p><strong>📊 Level Up:</strong> Gain levels as you earn more points</p>
                  <p><strong>🧠 SRS System:</strong> Smart review system tracks which words need more practice</p>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-3">💡 Pro Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Use Learn Mode first - don't skip it!</li>
                  <li>✓ Listen to pronunciation multiple times</li>
                  <li>✓ Complete 80% of words (not less) for best results</li>
                  <li>✓ Review failed words using "Practice Failed Words" button</li>
                  <li>✓ Check "My History" to see your progress</li>
                  <li>✓ Use the search bar to quickly find specific words</li>
                  <li>✓ Spelling Difficulty in Multiple Choice is optional practice</li>
                  <li>✓ Enable microphone for Speaking Test</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fixed Footer Button */}
          <div className="p-6 sm:p-8 border-t-2 border-gray-200 flex-shrink-0">
            <button
              onClick={() => setShowInstructions(false)}
              className="w-full bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 text-white text-lg font-bold py-3 rounded-xl transition-all"
            >
              Got it! Let's Learn 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Achievement Popup Component
const AchievementPopup = ({ achievement }) => {
  if (!achievement) return null;
  
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fadeIn">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl shadow-2xl p-6 max-w-sm border-4 border-yellow-300">
        <div className="text-center">
          <div className="text-6xl mb-3 animate-bounce">{achievement.icon}</div>
          <div className="text-2xl font-bold mb-2">Achievement Unlocked!</div>
          <div className="text-xl font-semibold mb-1">{achievement.title}</div>
          <div className="text-sm opacity-90 mb-3">{achievement.description}</div>
          <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
            <span className="font-bold">+{achievement.points} points!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mobileHoverFix = (
  <style>{`
    * {
      -webkit-tap-highlight-color: transparent !important;
      tap-highlight-color: transparent !important;
    }
    
    button, a, div[role="button"] {
      -webkit-tap-highlight-color: transparent !important;
      tap-highlight-color: transparent !important;
      -webkit-touch-callout: none !important;
      touch-action: manipulation !important;
    }
    
    @media (hover: none) and (pointer: coarse) {
      button:hover:not(:active) {
        background-color: inherit !important;
        color: inherit !important;
        transform: none !important;
        scale: none !important;
      }
      
      .bg-orange-500:not(:active) {
        background-color: rgb(249 115 22) !important;
      }
      
      .bg-indigo-500:not(:active) {
        background-color: rgb(99 102 241) !important;
      }
      
      .bg-green-500:not(:active) {
        background-color: rgb(34 197 94) !important;
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

// Admin Panel
if (showAdminPanel && isAdmin) {
  return <AdminPanel />;
}

// Instructions Screen - ADD THIS
if (showInstructions) {
  return <InstructionsScreen />;
}
  
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

  // Conversations mode - MOBILE OPTIMIZED
if (gameMode === 'conversations' && !selectedConversation) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-400 to-purple-600 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">🎧 Listening Practice</h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 active:bg-red-200 text-red-600 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
        <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
          Listen to Dutch conversations and test your comprehension!
        </p>
        <div className="space-y-3 sm:space-y-4">
          {conversations.map(conversation => (
            <button
              key={conversation.id}
              onClick={() => {
                setSelectedConversation(conversation);
                setShowConversationQuiz(false);
                setCurrentConversationQuestion(0);
                setConversationScore(0);
                setConversationQuizFeedback(null);
                setCurrentDialogueIndex(0);
              }}
              className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white p-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all text-left"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base sm:text-lg font-bold">{conversation.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  conversation.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {conversation.level}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-purple-100">
                <span>⏱️ {conversation.duration}</span>
                <span>•</span>
                <span>🎯 {conversation.questions.length} questions</span>
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={() => { 
            setGameMode('menu'); 
            setSelectedConversation(null);
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

if (gameMode === 'conversations' && selectedConversation) {
  // Conversation quiz results
  if (showConversationQuiz && currentConversationQuestion >= selectedConversation.questions.length) {
    const percentage = Math.round((conversationScore / selectedConversation.questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-400 to-purple-600 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg w-full text-center">
          <Trophy className="w-16 h-16 sm:w-24 sm:h-24 text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
            {percentage >= 80 ? 'Uitstekend! Perfect comprehension!' :
             percentage >= 60 ? 'Goed gedaan! You understood well!' :
             'Listen again and try once more!'}
          </h2>
          <div className="mb-6">
            <div className="text-4xl sm:text-6xl font-bold text-purple-600 mb-2">{conversationScore}/{selectedConversation.questions.length}</div>
            <div className="text-xl sm:text-2xl text-gray-600">{percentage}% Correct</div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => {
                setShowConversationQuiz(false);
                setCurrentConversationQuestion(0);
                setConversationScore(0);
                setConversationQuizFeedback(null);
              }}
              className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Listen Again
            </button>
            <button
              onClick={() => {
                setSelectedConversation(null);
                setShowConversationQuiz(false);
                setCurrentConversationQuestion(0);
                setConversationScore(0);
                setConversationQuizFeedback(null);
              }}
              className="w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Conversations
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // Conversation quiz questions
  if (showConversationQuiz) {
    const question = selectedConversation.questions[currentConversationQuestion];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-400 to-purple-600 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 max-w-2xl w-full">
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap justify-between items-center mb-3 sm:mb-4 gap-2">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    if (confirm('Return to menu? Progress will be lost.')) {
                      stopConversation();
                      setShowConversationQuiz(false);
                      setCurrentConversationQuestion(0);
                      setConversationScore(0);
                      setConversationQuizFeedback(null);
                      setGameMode('menu');
                      setSelectedConversation(null);
                    }
                  }}
                  className="bg-gray-100 hover:bg-gray-200 active:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-1 sm:gap-2"
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  <span className="font-semibold text-xs sm:text-sm">Menu</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm('Back to conversation?')) {
                      stopConversation();
                      setShowConversationQuiz(false);
                      setCurrentConversationQuestion(0);
                      setConversationScore(0);
                      setConversationQuizFeedback(null);
                    }
                  }}
                  className="bg-purple-100 hover:bg-purple-200 active:bg-purple-200 p-2 rounded-lg transition-all flex items-center gap-1 sm:gap-2"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700" />
                  <span className="font-semibold text-xs sm:text-sm hidden sm:inline">Back</span>
                </button>
              </div>
              <div className="flex gap-2 sm:gap-3 items-center">
                <div className="bg-purple-100 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                  <span className="text-purple-700 font-bold text-xs sm:text-base">Score: {conversationScore}/{selectedConversation.questions.length}</span>
                </div>
                <div className="text-gray-600 font-semibold text-xs sm:text-base">
                  {currentConversationQuestion + 1}/{selectedConversation.questions.length}
                </div>
              </div>
            </div>
            
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300"
                style={{ width: `${((currentConversationQuestion) / selectedConversation.questions.length) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="mb-4 p-3 sm:p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
            <p className="text-xs sm:text-sm text-purple-600 mb-1">Question in English:</p>
            <p className="text-sm text-gray-600 italic">{question.translation}</p>
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
                    setConversationScore(conversationScore + 1);
                    setConversationQuizFeedback({ correct: true, message: 'Goed gedaan! (Well done!)' });
                  } else {
                    setConversationQuizFeedback({ 
                      correct: false, 
                      message: `Niet helemaal! Het juiste antwoord is "${question.correct}"` 
                    });
                  }
                  
                  setTimeout(() => {
                    setConversationQuizFeedback(null);
                    setCurrentConversationQuestion(currentConversationQuestion + 1);
                  }, 2000);
                }}
                disabled={conversationQuizFeedback !== null}
                className={`p-3 sm:p-4 text-sm sm:text-lg font-semibold rounded-xl transition-all transform ${
                  conversationQuizFeedback === null
                    ? `bg-gray-100 text-gray-800 ${!isTouchDevice ? 'hover:bg-purple-100 hover:text-purple-600' : 'active:bg-purple-100'}`
                    : conversationQuizFeedback.correct && option === question.correct
                    ? 'bg-green-500 text-white'
                    : !conversationQuizFeedback.correct && option === question.correct
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          
          {conversationQuizFeedback && (
            <div className={`p-3 sm:p-4 rounded-xl ${
              conversationQuizFeedback.correct ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <div className="flex items-center gap-2 sm:gap-3">
                {conversationQuizFeedback.correct ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                )}
                <p className={`font-semibold text-sm sm:text-base ${
                  conversationQuizFeedback.correct ? 'text-green-700' : 'text-red-700'
                }`}>
                  {conversationQuizFeedback.message}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
// Show conversation player
return (
  <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-400 to-purple-600 flex items-center justify-center p-3 sm:p-4">
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-2">{selectedConversation.title}</h2>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
              selectedConversation.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {selectedConversation.level}
            </span>
            <span>⏱️ {selectedConversation.duration}</span>
            <span>🎧 {selectedConversation.dialogue.length} speakers</span>
          </div>
        </div>
      </div>
      
      {/* Listening area - show visual feedback while playing */}
      <div className="mb-6 bg-gradient-to-br from-purple-50 to-purple-100 p-8 sm:p-12 rounded-xl min-h-[300px] flex flex-col items-center justify-center">
        {!isPlayingConversation ? (
          <div className="text-center">
            <div className="text-6xl sm:text-8xl mb-4">🎧</div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-3">
              Ready to Listen?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Listen carefully to the Dutch conversation
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              {selectedConversation.dialogue.length} dialogue turns • {selectedConversation.duration}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="relative mb-6">
              <div className="text-6xl sm:text-8xl animate-pulse">
                {/* {currentDialogueIndex % 2 === 0 ? '👨' : '👩'} */}
                {currentDialogueIndex % 2 === 0 ? '👧' : '👩'}

              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-3">
              {selectedConversation.dialogue[currentDialogueIndex]?.speaker} is speaking...
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Turn {currentDialogueIndex + 1} of {selectedConversation.dialogue.length}
            </p>
            
            {/* Progress bar */}
            <div className="mt-6 w-full max-w-md mx-auto">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300"
                  style={{ width: `${((currentDialogueIndex + 1) / selectedConversation.dialogue.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Show script button - only visible when NOT playing */}
      {!isPlayingConversation && (
        <div className="mb-4">
          <button
            onClick={() => {
              const scriptElement = document.getElementById('conversation-script');
              if (scriptElement) {
                scriptElement.classList.toggle('hidden');
              }
            }}
            className="w-full bg-blue-100 hover:bg-blue-200 active:bg-blue-200 text-blue-700 text-sm sm:text-base font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Show/Hide Script (for reference)
          </button>
          
          {/* Hidden script - togglable */}
          <div id="conversation-script" className="hidden mt-4 max-h-64 overflow-y-auto space-y-2 bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
            {selectedConversation.dialogue.map((line, idx) => (
              <div key={idx} className="p-2 bg-white rounded-lg">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 min-w-[60px] text-sm">{line.speaker}:</span>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium text-sm mb-1">{line.text}</p>
                    <p className="text-xs text-gray-500 italic">{line.translation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex flex-col gap-3 mb-6">
        {!isPlayingConversation ? (
          <>
            <button
              onClick={() => speakConversationDialogue(selectedConversation.dialogue, 0)}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white text-base sm:text-xl font-bold py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <span className="text-3xl">▶️</span>
              <span>Start Listening</span>
            </button>
            
            <p className="text-center text-xs sm:text-sm text-gray-600 italic">
              💡 Tip: Listen 2-3 times before taking the quiz!
            </p>
          </>
        ) : (
          <button
            onClick={stopConversation}
            className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white text-base sm:text-xl font-bold py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-3"
          >
            <span className="text-3xl">⏹️</span>
            <span>Stop Listening</span>
          </button>
        )}
        
        {!isPlayingConversation && selectedConversation.questions && selectedConversation.questions.length > 0 && (
          <button
            onClick={() => {
              stopConversation();
              setShowConversationQuiz(true);
              setCurrentConversationQuestion(0);
              setConversationScore(0);
              setConversationQuizFeedback(null);
            }}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-5 h-5" />
            Take Comprehension Quiz ({selectedConversation.questions.length} questions)
          </button>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => {
            stopConversation();
            setSelectedConversation(null);
            setGameMode('conversations');
          }}
          className="w-full bg-purple-400 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-purple-500 active:bg-purple-500 transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Conversations
        </button>
        <button
          onClick={() => { 
            stopConversation();
            setGameMode('menu'); 
            setSelectedConversation(null);
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

// HISTORY SCREEN - MOBILE OPTIMIZED
if (showHistory) {
  const filteredHistory = selectedHistoryCategory === 'all' 
    ? attemptHistory 
    : attemptHistory.filter(h => h.category === selectedHistoryCategory);
  
  const categoryStats = {};
  attemptHistory.forEach(attempt => {
    if (!categoryStats[attempt.category]) {
      categoryStats[attempt.category] = {
        totalAttempts: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        bestScore: 0,
        modes: {}
      };
    }
    
    const stats = categoryStats[attempt.category];
    stats.totalAttempts++;
    stats.totalQuestions += attempt.total;
    stats.totalCorrect += attempt.score;
    stats.bestScore = Math.max(stats.bestScore, attempt.percentage);
    
    if (!stats.modes[attempt.mode]) {
      stats.modes[attempt.mode] = { attempts: 0, avgScore: 0 };
    }
    stats.modes[attempt.mode].attempts++;
  });
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-500 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">📊 My Learning History</h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 active:bg-red-200 text-red-600 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-3 text-sm sm:text-base">Filter by Category:</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 bg-gray-50 rounded-xl">
            {['all', ...Object.keys(dutchWordBank)].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedHistoryCategory(cat)}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation',
                  backgroundColor: selectedHistoryCategory === cat ? '#6366f1' : '#ffffff',
                  color: selectedHistoryCategory === cat ? '#ffffff' : '#374151',
                  border: selectedHistoryCategory === cat ? '2px solid #4f46e5' : '1px solid #e5e7eb',
                  transform: selectedHistoryCategory === cat ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
                className="p-2 sm:p-3 rounded-xl font-medium text-xs"
              >
                {cat === 'all' ? 'All Categories' : cat.replace(/_/g, ' ').toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Summary */}
        {selectedHistoryCategory !== 'all' && categoryStats[selectedHistoryCategory] && (
          <div className="mb-6 p-4 bg-indigo-50 rounded-xl">
            <h3 className="text-lg font-bold text-indigo-700 mb-3">
              {selectedHistoryCategory.replace(/_/g, ' ').toUpperCase()} Statistics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {categoryStats[selectedHistoryCategory].totalAttempts}
                </div>
                <div className="text-xs text-gray-600">Total Attempts</div>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">
                  {categoryStats[selectedHistoryCategory].bestScore}%
                </div>
                <div className="text-xs text-gray-600">Best Score</div>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round((categoryStats[selectedHistoryCategory].totalCorrect / categoryStats[selectedHistoryCategory].totalQuestions) * 100)}%
                </div>
                <div className="text-xs text-gray-600">Avg Score</div>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {categoryStats[selectedHistoryCategory].totalQuestions}
                </div>
                <div className="text-xs text-gray-600">Total Questions</div>
              </div>
            </div>
          </div>
        )}

        {/* History List */}
        <div className="max-h-96 overflow-y-auto space-y-3">
          {filteredHistory.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-gray-600 text-lg">No history yet for this category</p>
              <p className="text-gray-500 text-sm mt-2">Start practicing to see your progress!</p>
            </div>
          ) : (
            filteredHistory.map((attempt, idx) => (
              <div key={attempt.id} className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                      {attempt.category.replace(/_/g, ' ').toUpperCase()}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {new Date(attempt.date).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${
                      attempt.percentage >= 80 ? 'text-green-600' :
                      attempt.percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {attempt.percentage}%
                    </div>
                    <div className="text-xs text-gray-600">{attempt.score}/{attempt.total}</div>
                  </div>
                </div>

                <div className="flex gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    attempt.mode === 'play' ? 'bg-orange-100 text-orange-700' :
                    attempt.mode === 'spelling' ? 'bg-purple-100 text-purple-700' :
                    attempt.mode === 'speaking' ? 'bg-rose-100 text-rose-700' :
                    'bg-teal-100 text-teal-700'
                  }`}>
                    {attempt.mode === 'play' ? '🎯 Multiple Choice' :
                     attempt.mode === 'spelling' ? '✏️ Spelling' :
                     attempt.mode === 'speaking' ? '🎤 Speaking' :
                     '📝 Fill Blank'}
                  </span>
                  {attempt.difficulty && attempt.mode === 'play' && (
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                      {attempt.difficulty === 'spelling' ? '🔤 Spelling Mode' : '📖 Normal'}
                    </span>
                  )}
                </div>

                {/* Wrong Answers */}
                {attempt.wrongAnswers && attempt.wrongAnswers.length > 0 && (
                  <details className="mt-3">
                    <summary className="cursor-pointer text-sm font-semibold text-gray-700 hover:text-indigo-600">
                      ❌ {attempt.wrongAnswers.length} Wrong Answer{attempt.wrongAnswers.length > 1 ? 's' : ''} (click to view)
                    </summary>
                    <div className="mt-2 space-y-2 pl-4">
                      {attempt.wrongAnswers.map((wrong, wIdx) => (
                        <div key={wIdx} className="bg-red-50 p-2 rounded-lg text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-red-600">{wrong.dutch}</span>
                            <button
                              onClick={() => speakDutch(wrong.dutch)}
                              className="bg-red-100 hover:bg-red-200 p-1 rounded-full"
                            >
                              <Volume2 className="w-3 h-3 text-red-600" />
                            </button>
                          </div>
                          <p className="text-gray-700">{wrong.english}</p>
                          <div className="mt-1 text-gray-600">
                            <span className="text-red-600">Your: {wrong.userAnswer}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))
          )}
        </div>

        <button
          onClick={() => {
            setShowHistory(false);
            setSelectedHistoryCategory('all');
          }}
          className="mt-6 w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Menu
        </button>
      </div>
    </div>
  );
}

// In the stories list screen, add this BEFORE the stories grid:
if (showFillBlankStories && !selectedStoryKey) {
  // Get unique themes
  const themes = [...new Set(Object.values(dutchStories).map(s => s.theme))];
  const levels = [...new Set(Object.values(dutchStories).map(s => s.level))];
  
  // Filter stories
  const filteredStories = Object.entries(dutchStories).filter(([key, story]) => {
    const levelMatch = fillBlankFilter === 'all' || story.level === fillBlankFilter;
    const themeMatch = fillBlankThemeFilter === 'all' || story.theme === fillBlankThemeFilter;
    return levelMatch && themeMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700">✏️ Fill-in-the-Blank Stories</h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 active:bg-red-200 text-red-600 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* ADD FILTERS HERE */}
        <div className="mb-6 space-y-3">
          {/* Level Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Level:</label>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFillBlankFilter('all')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  fillBlankFilter === 'all'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Levels ({Object.keys(dutchStories).length})
              </button>
              {levels.map(level => {
                const count = Object.values(dutchStories).filter(s => s.level === level).length;
                return (
                  <button
                    key={level}
                    onClick={() => setFillBlankFilter(level)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      fillBlankFilter === level
                        ? level === 'A1' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <div className="text-center text-sm text-gray-600 bg-gray-50 rounded-lg py-2">
            Showing {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}
          </div>
        </div>

        {/* Stories list - now using filteredStories */}
        <div className="space-y-3 sm:space-y-4 max-h-96 overflow-y-auto">
          {filteredStories.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No stories found</p>
              <p className="text-sm mt-2">Try a different filter combination</p>
            </div>
          ) : (
            filteredStories.map(([key, story]) => (
              <button
                key={key}
                onClick={() => setSelectedStoryKey(key)}
                className="w-full bg-gradient-to-r from-emerald-400 to-teal-600 text-white p-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all text-left"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-bold">{story.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    story.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {story.level}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-emerald-100">
                  <span>📚 {story.theme}</span>
                  <span>•</span>
                  <span>🎯 {story.sentences.length} questions</span>
                </div>
              </button>
            ))
          )}
        </div>

        <button
          onClick={() => {
            setShowFillBlankStories(false);
            setSelectedStoryKey(null);
            setFillBlankFilter('all');
            setFillBlankThemeFilter('all');
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

// FILL-IN-THE-BLANK STORY PLAYER
if (showFillBlankStories && selectedStoryKey) {
  const story = dutchStories[selectedStoryKey];
  
  return (
    <DutchFillBlanks 
      story={story} 
      onBack={() => setSelectedStoryKey(null)}
      onMenu={() => {
        setShowFillBlankStories(false);
        setSelectedStoryKey(null);
        goToMenu();
      }}
      speakDutch={speakDutch}
    />
  );
}

// ADD THIS COMPONENT BEFORE YOUR MENU SCREEN (around line 2500)

// ADAPTIVE LEARNING STATS SCREEN
if (showAdaptiveStats) {
  const stats = getAdaptiveLearningStats();
  
  if (!stats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full text-center">
          <p className="text-gray-600 text-lg">No learning data available yet.</p>
          <p className="text-gray-500 text-sm mt-2">Complete some quizzes to see your adaptive learning insights!</p>
          <button
            onClick={() => setShowAdaptiveStats(false)}
            className="mt-6 w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">🧠 Adaptive Learning</h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 active:bg-red-200 text-red-600 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white text-center">
            <div className="text-3xl font-bold">{stats.totalAttempts}</div>
            <div className="text-xs opacity-90">Total Quizzes</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white text-center">
            <div className="text-3xl font-bold">{stats.avgScore}%</div>
            <div className="text-xs opacity-90">Avg Score</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-xl text-white text-center">
            <div className="text-3xl font-bold">{stats.wordsThatNeedWork}</div>
            <div className="text-xs opacity-90">Need Practice</div>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-xl text-white text-center">
            <div className="text-3xl font-bold">{stats.dueForReview}</div>
            <div className="text-xs opacity-90">Due Today</div>
          </div>
        </div>

        {/* Top 5 Weakest Words */}
        {stats.top5Weakest.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📉</span>
              Your Most Challenging Words
            </h3>
            <div className="space-y-3">
              {stats.top5Weakest.map((word, idx) => (
                <div key={idx} className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-red-600">#{idx + 1}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-800">{word.dutch}</span>
                            <button
                              onClick={() => speakDutch(word.dutch)}
                              className="bg-red-100 hover:bg-red-200 active:bg-red-200 p-1 rounded-full transition-all"
                            >
                              <Volume2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                          <p className="text-gray-700 font-semibold">{word.english}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                          ❌ {word.failures} {word.failures === 1 ? 'mistake' : 'mistakes'}
                        </span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                          📊 {Math.round(word.failureRate)}% error rate
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                          🎯 {word.attempts} {word.attempts === 1 ? 'attempt' : 'attempts'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practice Buttons */}
        <div className="space-y-3 mb-6">
          <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
            <h3 className="text-lg font-bold text-purple-700 mb-2 flex items-center gap-2">
              <span>🎯</span>
              Smart Practice
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              AI-powered quiz focusing on your weakest words and those due for review
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setShowAdaptiveStats(false);
                  startAdaptivePractice('play', 20);
                }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-base font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Multiple Choice
              </button>
              
              <button
                onClick={() => {
                  setShowAdaptiveStats(false);
                  startAdaptivePractice('spelling', 20);
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                ✏️ Spelling Mode
              </button>
              
              <button
                onClick={() => {
                  setShowAdaptiveStats(false);
                  startAdaptivePractice('speaking', 15);
                }}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-base font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                🎤 Speaking Test
              </button>
              
              <button
                onClick={() => {
                  setShowAdaptiveStats(false);
                  startAdaptivePractice('fillblank', 15);
                }}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-base font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                📝 Fill Blanks
              </button>
            </div>
          </div>

          {/* Quick Practice Top 5 */}
          {stats.top5Weakest.length > 0 && (
            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
              <h3 className="text-lg font-bold text-red-700 mb-2">⚡ Quick Practice Top 5</h3>
              <p className="text-gray-600 text-sm mb-3">
                Focus on your 5 most challenging words
              </p>
              <button
                onClick={() => {
                  const top5Words = getWordsThatNeedPractice().slice(0, 5);
                  setShowAdaptiveStats(false);
                  
                  // Start spelling mode with top 5
                  setWordBank(top5Words);
                  setUsedWords([]);
                  setGameMode('spelling');
                  setCurrentGameMode('spelling');
                  setGameStartCategory('adaptive_top5');
                  setScore(0);
                  setStreak(0);
                  setQuestionsAnswered(0);
                  setFeedback(null);
                  setWrongAnswers([]);
                  setSpellingAnswer('');
                  setNumQuestions(5);
                  setReviewMode('adaptive_top5');
                  
                  generateSpellingQuestion(top5Words, []);
                }}
                className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white text-base font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                🔥 Practice Top 5 Now
              </button>
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200 mb-4">
          <h3 className="text-sm font-bold text-blue-700 mb-2 flex items-center gap-2">
            <span>💡</span>
            How It Works
          </h3>
          <ul className="text-xs text-gray-700 space-y-1">
            <li>• Our AI analyzes your mistake patterns</li>
            <li>• Words are prioritized by error rate and frequency</li>
            <li>• SRS (Spaced Repetition) ensures optimal review timing</li>
            <li>• Practice builds on your actual weak points</li>
          </ul>
        </div>

        {/* Back Button */}
        <button
          onClick={() => setShowAdaptiveStats(false)}
          className="w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Menu
        </button>
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
                  {isAdmin && (
                      <button
                        onClick={() => {
                          loadAllUsers();
                          setShowAdminPanel(true);
                        }}
                        className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 active:bg-purple-200 text-purple-600 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm"
                      >
                        <User className="w-4 h-4" />
                        Admin Panel
                      </button>
                    )}
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-orange-600 mb-2">🇳🇱 Leer Nederlands</h1>
                <p className="text-gray-600 text-sm sm:text-lg">2000+ Most Common Dutch Words - A1 🟢 & A2 🔵</p>
                <div className="mt-3 sm:mt-4 flex gap-3 justify-center flex-wrap">
                  <div className="inline-flex items-center gap-2 bg-green-100 px-3 sm:px-4 py-2 rounded-full">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span className="text-green-700 font-bold text-xs sm:text-base">{getTotalWordCount()} Words!</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-yellow-100 px-3 sm:px-4 py-2 rounded-full">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                    <span className="text-yellow-700 font-bold text-xs sm:text-base">
                      {userPoints} pts • {getUserLevel(userPoints).title}
                    </span>
                  </div>
                </div>
                
                {/* After the welcome words section */}
                <button
                  onClick={() => setShowInstructions(true)}
                  className="mt-4 w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-base sm:text-lg font-bold py-3 rounded-xl hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>📚 How to Use This App</span>
                </button>

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
                
            {user && Object.keys(srsData).length > 0 && (
              <div className="mt-4 bg-indigo-50 rounded-xl p-4 sm:p-6 border-2 border-indigo-200">
                <h3 className="text-center font-bold text-indigo-700 mb-3 text-sm sm:text-base">
                  🧠 Your Learning Progress (SRS)
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {(() => {
                    const allWords = getAllWords();
                    const prioritized = getSRSPrioritizedWords(allWords);
                    // Count mastered words only after completing both quiz (play) and spelling for a category
                    const passedCategories = Object.entries(userProgress)
                      .filter(([cat, prog]) => prog?.multipleChoice?.passed && prog?.spelling?.passed)
                      .map(([cat]) => cat);
                    const mastered = prioritized.filter(w => passedCategories.includes(w.category)).length;
                    const learning = prioritized.filter(w => !passedCategories.includes(w.category) && (w.srsInfo.level > 0 && w.srsInfo.level < 4)).length;
                    const dueToday = prioritized.filter(w => w.isDue).length;
                    
                    return (
                      <>
                        <div className="bg-white p-2 sm:p-3 rounded-lg text-center">
                          <div className="text-xl sm:text-2xl font-bold text-green-600">{mastered}</div>
                          <div className="text-xs text-gray-600">Mastered</div>
                        </div>
                        <div className="bg-white p-2 sm:p-3 rounded-lg text-center">
                          <div className="text-xl sm:text-2xl font-bold text-blue-600">{learning}</div>
                          <div className="text-xs text-gray-600">Learning</div>
                        </div>
                        <div className="bg-white p-2 sm:p-3 rounded-lg text-center">
                          <div className="text-xl sm:text-2xl font-bold text-orange-600">{dueToday}</div>
                          <div className="text-xs text-gray-600">Due Today</div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            )}
              </div>
              
{/* Category Selection - MOBILE OPTIMIZED WITH MULTI-SELECT & ADMIN CONTROLS */}
<div className="mb-4 sm:mb-6">
  <div className="flex justify-between items-center mb-3">
    <label className="block text-gray-700 font-semibold text-sm sm:text-base">
      Choose Thema category:
    </label>
    <div className="flex gap-2">
      {isAdmin && (
        <span className="px-2 py-1 rounded-lg text-xs font-bold bg-purple-100 text-purple-700">
          👑 ADMIN MODE
        </span>
      )}
      <button
        onClick={() => setShowMultiSelect(!showMultiSelect)}
        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
          showMultiSelect 
            ? 'bg-purple-500 text-white' 
            : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
        }`}
      >
        {showMultiSelect ? '✓ Multi-Select ON' : 'Multi-Select OFF'}
      </button>
    </div>
  </div>
  
  {/* Selected Categories Display */}
  <div className="mb-2 sm:mb-3">
    <div className="flex flex-wrap gap-2 items-center min-h-[40px] p-2 bg-orange-50 rounded-lg border-2 border-orange-200">
      <span className="text-xs sm:text-sm text-gray-600 font-semibold">Selected:</span>
      {selectedCategories.map(cat => (
        <div key={cat} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-500 text-white text-xs font-bold">
          <span>{cat === 'all' ? 'All Lessons' : cat.replace(/_/g, ' ').toUpperCase()}</span>
          {showMultiSelect && selectedCategories.length > 1 && (
            <button
              onClick={() => {
                setSelectedCategories(prev => prev.filter(c => c !== cat));
              }}
              className="ml-1 hover:bg-orange-600 rounded-full p-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      ))}
      {showMultiSelect && selectedCategories.length > 1 && (
        <button
          onClick={() => setSelectedCategories(['all'])}
          className="text-xs text-red-600 hover:text-red-700 font-semibold ml-2"
        >
          Clear All
        </button>
      )}
    </div>
  </div>

  {/* 🆕 NEW: Admin Controls */}
  {isAdmin && selectedCategories.length === 1 && !selectedCategories.includes('all') && (
    <div className="mb-3 p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => adminCompleteCategory(selectedCategories[0])}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-2"
        >
          <Trophy className="w-4 h-4" />
          Mark as Completed
        </button>
        <button
          onClick={() => adminResetCategory(selectedCategories[0])}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Reset Progress
        </button>
      </div>
      <p className="text-center text-purple-700 text-xs mt-2">
        👑 Admin: Quick complete or reset this category
      </p>
    </div>
  )}

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 sm:max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-xl">
    {categories.map(cat => {
      const wordCount = cat === 'all' ? getTotalWordCount() : (dutchWordBank[cat]?.length || 0);
      const hasA1 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A1');
      const hasA2 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A2');

      const isCompleted = isCategoryCompleted(cat);
      const progress = getCategoryProgress(cat);
      const hasPartialProgress = ((progress.multipleChoice || progress.spelling) && !isCompleted);

      const isLocked = isCategoryLocked(cat);
      const isSelected = selectedCategories.includes(cat);
      
      return (
        <button
          key={cat}
          onClick={() => {
            if (isLocked) {
              const words = dutchWordBank[cat] || [];
              const hasA2 = words.some(w => w.level === 'A2');
              const hasB = words.some(w => w.level === 'B1' || w.level === 'B2');
              const reason = hasB
                ? '🔒 Complete ALL A1 and A2 categories (Multiple Choice AND Spelling, 80%+) to unlock B1/B2.'
                : '🔒 Complete ALL A1 categories (Multiple Choice AND Spelling, 80%+) to unlock A2.';
              alert(reason);
              return;
            }
            
            if (showMultiSelect) {
              if (cat === 'all') {
                setSelectedCategories(['all']);
              } else {
                setSelectedCategories(prev => {
                  const withoutAll = prev.filter(c => c !== 'all');
                  
                  if (prev.includes(cat)) {
                    const updated = withoutAll.filter(c => c !== cat);
                    return updated.length === 0 ? ['all'] : updated;
                  } else {
                    return [...withoutAll, cat];
                  }
                });
              }
            } else {
              setSelectedCategories([cat]);
            }
          }}
          disabled={isLocked}
          style={{
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
            backgroundColor: isLocked
              ? '#d1d5db'
              : isSelected
              ? (isCompleted ? '#16a34a' : hasPartialProgress ? '#eab308' : '#f97316')
              : (isCompleted ? '#22c55e' : hasPartialProgress ? '#facc15' : '#ffffff'),
            color: isLocked
              ? '#6b7280'
              : (isSelected || isCompleted || hasPartialProgress)
              ? '#ffffff'
              : '#374151',
            border: isLocked
              ? 'none'
              : isSelected
              ? (isCompleted ? '2px solid #fbbf24' : '3px solid #dc2626')
              : isCompleted
              ? '2px solid #16a34a'
              : hasPartialProgress
              ? '2px solid #eab308'
              : '1px solid #e5e7eb',
            transform: isSelected ? 'scale(1.05)' : 'scale(1)',
            boxShadow: isSelected ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.2s ease',
            opacity: isLocked ? 0.6 : 1,
            cursor: isLocked ? 'not-allowed' : 'pointer'
          }}
          className="p-2 sm:p-3 rounded-xl font-medium text-xs relative"
        >
          {isSelected && (
            <div className="absolute -top-1 -left-1 bg-red-500 rounded-full px-1.5 py-0.5 shadow z-10">
              <span className="text-white text-[10px] font-bold">✓</span>
            </div>
          )}
          {isLocked && !isAdmin && (
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
              <span className="text-white text-xs">🔒</span>
            </div>
          )}
          {/* 🆕 NEW: Show crown for locked categories if admin */}
          {isAdmin && isLocked && (
            <div className="absolute -top-1 -right-1 bg-purple-500 rounded-full p-1">
              <span className="text-white text-xs">👑</span>
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
  
  {showMultiSelect && selectedCategories.length > 1 && !selectedCategories.includes('all') && (
    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
      <p className="text-blue-700 text-xs sm:text-sm text-center font-semibold">
        📚 Testing {selectedCategories.length} categories: {
          (() => {
            const totalWords = selectedCategories.reduce((sum, cat) => {
              return sum + (dutchWordBank[cat]?.length || 0);
            }, 0);
            return `${totalWords} total words available`;
          })()
        }
      </p>
    </div>
  )}
  
  {/* 🆕 NEW: Admin info message */}
  {isAdmin && (
    <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
      <p className="text-purple-700 text-xs sm:text-sm text-center font-semibold">
        👑 Admin Mode: All categories unlocked. Select a single category to see quick complete/reset buttons.
      </p>
    </div>
  )}
</div>

            {/* A1 Progress Indicator */}
            {!areAllA1CategoriesCompleted() && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-700 text-xs sm:text-sm text-center font-semibold">
                  💡 Complete all A1 categories (Multiple Choice Normal + Spelling Mode with 80%+) to unlock A2 lessons!
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
                {/* ADD THIS NEW BUTTON */}
{/* NEW PRACTICE FAILED WORDS 2 - WORKING VERSION */}
<button
  onClick={() => {
    // Check if specific categories are selected
    if (selectedCategories.includes('all') || selectedCategories.length === 0) {
      alert('⚠️ Please select specific categories (not "All") to review failed words!');
      return;
    }
    
    // Get ALL failed words from history
    const failedWordsData = getAllFailedWordsFromHistory(selectedCategories, 'spelling');
    
    if (failedWordsData.length === 0) {
      alert(`✅ No failed words found!\n\nYou haven't taken any spelling tests yet or got everything correct in:\n${selectedCategories.map(c => c.replace(/_/g, ' ').toUpperCase()).join(', ')}`);
      return;
    }
    
    // Load all words from selected categories
    const allCategoryWords = loadWords(selectedCategories);
    
    // Map failed words data to full word objects
    const failedWordObjects = failedWordsData.map(fw => {
      const fullWord = allCategoryWords.find(w => 
        w.dutch.toLowerCase() === fw.dutch.toLowerCase() && 
        w.english.toLowerCase() === fw.english.toLowerCase()
      );
      
      if (fullWord) {
        return {
          ...fullWord,
          failCount: fw.failCount // Add fail count for tracking
        };
      }
      return null;
    }).filter(w => w !== null);
    
    if (failedWordObjects.length === 0) {
      alert('❌ Could not find the failed words in the selected categories. This might be a data issue.');
      return;
    }
    
    // Show confirmation with details
    const mostFailed = failedWordObjects.slice(0, 3).map(w => `${w.dutch} (${w.failCount}x)`).join(', ');
    const confirmMsg = `📚 Found ${failedWordObjects.length} failed words!\n\nMost failed: ${mostFailed}\n\nReady to practice?`;
    
    if (!confirm(confirmMsg)) {
      return;
    }
    
    // Set up the review mode
    setReviewMode('failed_words');
    setWordBank(failedWordObjects);
    setUsedWords([]);
    setGameMode('spelling');
    setCurrentGameMode('spelling');
    setGameStartCategory(selectedCategories.join(','));
    setScore(0);
    setStreak(0);
    setQuestionsAnswered(0);
    setFeedback(null);
    setWrongAnswers([]);
    setSpellingAnswer('');
    setNumQuestions(failedWordObjects.length);
    setShowQuestionSelector(false);
    setTranscript('');
    setIsRecording(false);
    
    // Generate first question
    generateSpellingQuestion(failedWordObjects, []);
  }}
  className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
>
  <span className="text-sm sm:text-xl">🔄 Practice Failed Words</span>
</button>

                <button
                  onClick={() => openQuestionSelector('speaking')}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">🎤 Speaking Test</span>
                </button>
                <button
                  onClick={() => { 
                    setGameMode('conversations'); 
                    setSelectedConversation(null);
                  }}
                  className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">🎧 Listening Practice</span>
                </button>
                 <button
                  onClick={() => setShowFillBlankStories(true)}
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">✍️ Fill-in-the-Blank Stories</span>
                </button>

                


                <button
                  onClick={() => { setShowStories(true); setGameMode('stories'); }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">📖 Stories</span>
                </button>
                                {/* ADD THIS CONJUGATION BUTTON RIGHT HERE */}
                <button
                  onClick={() => setShowConjugationOptions(!showConjugationOptions)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">🔄 Verb Conjugation</span>
                </button>
                {showConjugationOptions && (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        startConjugationLearn();
                      }}
                      className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm sm:text-base font-bold py-2 sm:py-3 rounded-xl hover:shadow-lg active:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>📚 Learn</span>
                    </button>
                    <button
                      onClick={() => {
                        if (!hasCompletedConjugationLearn) {
                          alert('📚 Please complete Verb Conjugation Learn first before attempting the Conjugation Test.');
                          startConjugationLearn();
                          return;
                        }
                        setGameMode('conjugation');
                        setNumQuestions(10);
                        setScore(0);
                        setStreak(0);
                        setQuestionsAnswered(0);
                        setWrongAnswers([]);
                        setCurrentGameMode('conjugation');
                        setGameStartCategory('verbs');
                        generateConjugationQuestion();
                      }}
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm sm:text-base font-bold py-2 sm:py-3 rounded-xl hover:shadow-lg active:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>🧪 Test</span>
                    </button>
                  </div>
                )}
                {/* ADD THIS BUTTON IN THE MENU SCREEN - after SRS Review button */}
                <button
                  onClick={() => {
                    const stats = getAdaptiveLearningStats();
                    if (!stats || stats.totalAttempts === 0) {
                      alert('📚 Take some quizzes first!\n\nComplete a few quizzes so we can analyze your learning patterns and suggest personalized practice.');
                      return;
                    }
                    setShowAdaptiveStats(true);
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">🧠 Smart Practice (AI)</span>
                </button>
                
                <button
                  onClick={() => setShowHistory(true)}
                  className="w-full bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">📊 My History</span>
                </button>
                <button
                  onClick={() => setGameMode('achievements')}
                  className="w-full bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">🏆 Achievements & Points</span>
                </button>
                <button
                  onClick={() => {
                    const allWords = getAllWords();
                    const prioritized = getSRSPrioritizedWords(allWords);
                    const dueWords = prioritized.filter(w => w.isDue);
                    
                    if (dueWords.length === 0) {
                      alert('🎉 No words due for review! Great job!');
                      return;
                    }
                    
                    setNumQuestions(Math.min(dueWords.length, 20));
                    setPendingGameMode('play');
                    setShowQuestionSelector(true);
                  }}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="text-sm sm:text-xl">🧠 SRS Review ({
                    getSRSPrioritizedWords(getAllWords()).filter(w => w.isDue).length
                  } due)</span>
                </button>
              </div>

              {/* Info Box - MOBILE OPTIMIZED */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-50 rounded-xl">
                <div className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                  <p className="text-center font-bold text-orange-600 mb-2 text-sm sm:text-base">Official "2000+ Dutch Words" Course</p>
                  <p><span className="font-bold">🟢 A1:</span> Basic words</p>
                  <p><span className="font-bold">🔵 A2:</span> Intermediate</p>
                  <p className="mt-2 sm:mt-3 text-center font-semibold text-xs sm:text-sm">📚 Learn → ✅ Quiz (Normal) → ✏️ Spelling Mode</p>
                  <p className="mt-2 text-center font-bold text-green-600 text-xs sm:text-sm">🏆 Pass both Quiz + Spelling to complete! (80% on 80% of words)</p>
                  <p className="text-xs text-gray-500 mt-1 text-center">💡 Spelling Difficulty in Quiz is optional practice</p>
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
                Selected: <span className="text-orange-600">
                  {selectedCategories.includes('all') 
                    ? 'All Lessons' 
                    : selectedCategories.length === 1
                    ? selectedCategories[0].replace(/_/g, ' ').toUpperCase()
                    : `${selectedCategories.length} Categories (${
                        selectedCategories.reduce((sum, cat) => 
                          sum + (dutchWordBank[cat]?.length || 0), 0
                        )} words)`
                  }
                </span>
              </label>
                
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <label className="block text-gray-700 font-semibold mb-3 text-center text-sm sm:text-base">
                    Number of Questions/Words
                  </label>
                  {(() => {
                    let availableWords;
                      
                      if (selectedCategories.includes('all')) {
                        availableWords = getTotalWordCount();
                      } else {
                        // Calculate total words from selected categories
                        availableWords = selectedCategories.reduce((sum, cat) => {
                          return sum + (dutchWordBank[cat]?.length || 0);
                        }, 0);
                      }
                      
                      if (pendingGameMode === 'fillblank') {
                        const words = loadWords(selectedCategories);
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
                      // Calculate available words based on selected categories (same logic as slider above)
                      let availableWords;
                      
                      if (selectedCategories.includes('all')) {
                        availableWords = getTotalWordCount();
                      } else {
                        // Calculate total words from selected categories
                        availableWords = selectedCategories.reduce((sum, cat) => {
                          return sum + (dutchWordBank[cat]?.length || 0);
                        }, 0);
                      }
                      
                      if (pendingGameMode === 'fillblank') {
                        const words = loadWords(selectedCategories);
                        const wordsWithValidExamples = words.filter(w => {
                          if (!w.example) return false;
                          const exampleLower = w.example.toLowerCase();
                          const dutchLower = w.dutch.toLowerCase();
                          return exampleLower.includes(dutchLower);
                        });
                        availableWords = wordsWithValidExamples.length;
                      }
                      
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

                    </div>
                  </div>
                  
                  <div className="text-2xl sm:text-4xl font-semibold text-gray-700 mb-2">
                    {currentLearnWord.english}
                  </div>
                  
                  <div className="text-sm sm:text-lg text-gray-500 mt-4">
                    <div className="flex flex-col items-center mb-3">
                    {/* <span className="font-semibold">Example:</span> */}
                      <button
                        onClick={() => {
                          const dutchSentence = currentLearnWord.example.replace(/\s*\([^)]+\)\s*/g, '').trim();
                          speakDutch(dutchSentence);
                        }}
                        className="bg-blue-100 hover:bg-blue-200 active:bg-blue-200 px-4 py-2 sm:px-5 sm:py-3 rounded-xl transition-all flex items-center gap-2"
                      >
                        <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        <span className="text-xs sm:text-sm font-semibold text-blue-600">Example</span>
                      </button>
                    <p className="mt-2">{currentLearnWord.example}</p>
                  </div>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 justify-center mt-8">
  <button
    onClick={() => setLearnIndex(Math.max(0, learnIndex - 1))}
    disabled={learnIndex === 0}
    className="px-4 sm:px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 active:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm sm:text-base"
    style={{
      WebkitTapHighlightColor: 'transparent',
      touchAction: 'manipulation'
    }}
  >
    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
    Prev
  </button>
  
  {learnIndex < learnWords.length - 1 ? (
    <button
      onClick={() => setLearnIndex(learnIndex + 1)}
      className="px-4 sm:px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 active:bg-indigo-600 transition-all flex items-center gap-2 text-sm sm:text-base"
      style={{
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        backgroundColor: '#6366f1'
      }}
    >
      Next
      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  ) : (
    <button
      onClick={() => {
        if (confirm('Ready to test yourself?')) {
          setHasCompletedLearn(true);
          startGame();
        }
      }}
      className="px-4 sm:px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 active:bg-green-600 transition-all flex items-center gap-2 text-sm sm:text-base"
      style={{
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
        backgroundColor: '#22c55e'
      }}
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

  // ACHIEVEMENTS SCREEN
if (gameMode === 'achievements') {
  const userLevel = getUserLevel(userPoints);
  const progressToNextLevel = userLevel.nextLevel 
    ? ((userPoints / userLevel.nextLevel) * 100) 
    : 100;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700">🏆 Achievements</h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 active:bg-red-200 text-red-600 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* User Level Card */}
        <div className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-4xl font-bold mb-1">{userLevel.title}</div>
              <div className="text-xl opacity-90">Level {userLevel.level}</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{userPoints}</div>
              <div className="text-sm opacity-90">Total Points</div>
            </div>
          </div>
          {userLevel.nextLevel && (
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to Level {userLevel.level + 1}</span>
                <span>{userPoints} / {userLevel.nextLevel}</span>
              </div>
              <div className="h-3 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${progressToNextLevel}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Achievements Grid */}
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">
            Unlocked: {unlockedAchievements.length} / {Object.keys(achievementsData).length}
          </h3>
        </div>

        <div className="max-h-96 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.values(achievementsData).map(achievement => {
            const isUnlocked = unlockedAchievements.includes(achievement.id);
            
            return (
              <div
                key={achievement.id}
                className={`rounded-xl p-4 border-2 transition-all ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-md'
                    : 'bg-gray-100 border-gray-300 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`text-4xl ${isUnlocked ? '' : 'grayscale'}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800 mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {achievement.description}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-bold">
                        +{achievement.points} pts
                      </span>
                      {isUnlocked && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">
                          ✓ Unlocked
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setGameMode('menu')}
          className="mt-6 w-full bg-gray-200 text-gray-700 text-base sm:text-lg font-bold py-3 rounded-xl hover:bg-gray-300 active:bg-gray-300 transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Menu
        </button>
      </div>
    </div>
  );
}
  // CONJUGATION LEARN MODE
  if (gameMode === 'conjugation_learn') {
    const currentVerb = conjugationLearnVerbs[conjugationLearnIndex];
    const forms = currentVerb ? verbConjugations[currentVerb] : null;
    const present = forms?.present || {};
    const past = forms?.past || {};

    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-3 sm:p-4">
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
                {conjugationLearnIndex + 1} / {conjugationLearnVerbs.length}
              </div>
            </div>

            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${((conjugationLearnIndex + 1) / conjugationLearnVerbs.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
            {currentVerb && (
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-3xl sm:text-5xl font-bold text-indigo-600">{currentVerb}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border-2 border-cyan-200 bg-cyan-50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-cyan-700">Present (Tegenwoordige tijd)</h3>
                    </div>
                    <div className="space-y-2">
                      {Object.entries(present).map(([pronoun, form]) => (
                        <div key={pronoun} className="flex items-center justify-between bg-white rounded-lg p-2">
                          <div className="font-semibold text-gray-700 text-sm sm:text-base">{pronoun}</div>
                          <div className="flex items-center gap-2">
                            <div className="text-gray-900 font-bold text-sm sm:text-base">{form}</div>
                            <button
                              onClick={() => speakDutch(form)}
                              className="bg-cyan-100 hover:bg-cyan-200 active:bg-cyan-200 p-2 rounded-lg"
                              title="Pronounce"
                            >
                              <Volume2 className="w-4 h-4 text-cyan-700" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border-2 border-indigo-200 bg-indigo-50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-indigo-700">Past (Verleden tijd)</h3>
                    </div>
                    <div className="space-y-2">
                      {Object.entries(past).map(([pronoun, form]) => (
                        <div key={pronoun} className="flex items-center justify-between bg-white rounded-lg p-2">
                          <div className="font-semibold text-gray-700 text-sm sm:text-base">{pronoun}</div>
                          <div className="flex items-center gap-2">
                            <div className="text-gray-900 font-bold text-sm sm:text-base">{form}</div>
                            <button
                              onClick={() => speakDutch(form)}
                              className="bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200 p-2 rounded-lg"
                              title="Pronounce"
                            >
                              <Volume2 className="w-4 h-4 text-indigo-700" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 justify-center mt-8">
                  <button
                    onClick={() => setConjugationLearnIndex(Math.max(0, conjugationLearnIndex - 1))}
                    disabled={conjugationLearnIndex === 0}
                    className="px-4 sm:px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 active:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm sm:text-base"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Prev
                  </button>

                  {conjugationLearnIndex < conjugationLearnVerbs.length - 1 ? (
                    <button
                      onClick={() => setConjugationLearnIndex(conjugationLearnIndex + 1)}
                      className="px-4 sm:px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 active:bg-indigo-600 transition-all flex items-center gap-2 text-sm sm:text-base"
                      style={{ backgroundColor: '#6366f1' }}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (confirm('Ready to take the Verb Conjugation Test?')) {
                          setHasCompletedConjugationLearn(true);
                          setGameMode('conjugation');
                          setNumQuestions(10);
                          setScore(0);
                          setStreak(0);
                          setQuestionsAnswered(0);
                          setWrongAnswers([]);
                          setCurrentGameMode('conjugation');
                          setGameStartCategory('verbs');
                          generateConjugationQuestion();
                        }
                      }}
                      className="px-4 sm:px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 active:bg-green-600 transition-all flex items-center gap-2 text-sm sm:text-base"
                      style={{ backgroundColor: '#22c55e' }}
                    >
                      Start Conjugation Test
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
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
          {reviewMode === 'failed_words' && (
            <div className="mb-4 p-3 sm:p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <p className="text-blue-700 font-bold text-sm sm:text-base text-center">
                📚 Failed Words Review Mode - You practiced {numQuestions} previously failed word{numQuestions > 1 ? 's' : ''}!
              </p>
            </div>
          )}
          {/* ADD THIS in results screen after reviewMode check */}
            {(reviewMode === 'adaptive' || reviewMode === 'adaptive_top5') && (
              <div className="mb-4 p-3 sm:p-4 bg-purple-50 border-2 border-purple-200 rounded-xl">
                <p className="text-purple-700 font-bold text-sm sm:text-base text-center">
                  {reviewMode === 'adaptive_top5' 
                    ? '🔥 Top 5 Weakest Words Practice'
                    : '🧠 Adaptive Learning Mode - Focused on your weak areas!'}
                </p>
                {percentage >= 80 && (
                  <p className="text-green-600 font-semibold text-xs sm:text-sm text-center mt-2">
                    🎉 Great improvement! Keep practicing to master these words!
                  </p>
                )}
              </div>
            )}
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
          onClick={() => startGame(currentGameMode)}
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
{/* CONJUGATION MODE */}
{conjugationQuestion && gameMode === 'conjugation' && (
  <>
    <div className="text-center mb-6 sm:mb-8">
      <div className="mb-3">
        <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-cyan-100 text-cyan-700">
          Verb Conjugation - {conjugationQuestion.tense === 'present' ? 'Present' : 'Past'} Tense
        </span>
      </div>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">Conjugate this verb:</p>
      
      <div className="bg-cyan-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
        <p className="text-2xl sm:text-3xl font-bold text-cyan-700 mb-3">
          {conjugationQuestion.verb}
        </p>
        <p className="text-lg sm:text-xl text-gray-700">
          {conjugationQuestion.pronoun} → ____
        </p>
      </div>
    </div>

    <form onSubmit={handleConjugationSubmit} className="space-y-4">
      <input
        type="text"
        value={conjugationAnswer}
        onChange={(e) => setConjugationAnswer(e.target.value)}
        disabled={feedback !== null}
        placeholder="Type conjugated form..."
        className="w-full p-3 sm:p-4 text-xl sm:text-2xl text-center font-semibold border-4 border-cyan-300 rounded-xl focus:border-cyan-500 focus:outline-none disabled:bg-gray-100"
        autoFocus
      />
      
      {feedback === null && (
        <button
          type="submit"
          disabled={!conjugationAnswer.trim()}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all disabled:opacity-50"
        >
          Submit Answer
        </button>
      )}
    </form>

    {feedback && (
      <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl ${feedback.correct ? 'bg-green-100' : 'bg-red-100'}`}>
        <div className="flex items-center gap-2 sm:gap-3 mb-3">
          {feedback.correct ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-600" />}
          <p className={`font-semibold ${feedback.correct ? 'text-green-700' : 'text-red-700'}`}>
            {feedback.message}
          </p>
        </div>
        
        {!feedback.correct && (
          <div className="mb-3 p-3 bg-white rounded-lg">
            <p className="text-gray-600 text-xs mb-1">You wrote:</p>
            <p className="text-red-600 font-bold text-lg line-through">{conjugationAnswer}</p>
            <p className="text-gray-600 text-xs mt-2 mb-1">Correct:</p>
            <p className="text-green-600 font-bold text-lg">{conjugationQuestion.correctAnswer}</p>
          </div>
        )}
        
        <button
          onClick={() => {
            setConjugationAnswer('');
            if (questionsAnswered >= numQuestions) {
              setGameMode('results');
            } else {
              generateConjugationQuestion();
            }
          }}
          className="w-full mt-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
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