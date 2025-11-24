// Daily Challenge utility functions
// Manages daily challenges, streaks, and challenge generation

/**
 * Generate a daily challenge from user's learned words
 * @param {Array} learnedWords - Array of words the user has learned
 * @param {number} count - Number of words for the challenge (default: 10)
 * @returns {Object} Challenge object with words and metadata
 */
export const generateDailyChallenge = (learnedWords, count = 10) => {
    if (!learnedWords || learnedWords.length === 0) {
        return null;
    }

    // If user has fewer words than requested, use all of them
    const challengeCount = Math.min(count, learnedWords.length);

    // Shuffle and select random words
    const shuffled = [...learnedWords].sort(() => Math.random() - 0.5);
    const selectedWords = shuffled.slice(0, challengeCount);

    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    return {
        id: `challenge_${today}`,
        date: today,
        words: selectedWords,
        totalQuestions: challengeCount,
        completed: false,
        score: 0,
        startedAt: null,
        completedAt: null
    };
};

/**
 * Get today's date in YYYY-MM-DD format
 */
export const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
};

/**
 * Check if a challenge is for today
 */
export const isChallengeToday = (challengeDate) => {
    return challengeDate === getTodayDate();
};

/**
 * Calculate streak from challenge history
 * @param {Object} challenges - Object with date keys and challenge data
 * @returns {Object} Streak information
 */
export const calculateStreak = (challenges) => {
    if (!challenges || Object.keys(challenges).length === 0) {
        return {
            currentStreak: 0,
            longestStreak: 0,
            lastCompletedDate: null
        };
    }

    // Get all completed challenge dates, sorted descending
    const completedDates = Object.keys(challenges)
        .filter(date => challenges[date].completed)
        .sort((a, b) => new Date(b) - new Date(a));

    if (completedDates.length === 0) {
        return {
            currentStreak: 0,
            longestStreak: 0,
            lastCompletedDate: null
        };
    }

    // Calculate current streak
    let currentStreak = 0;
    const today = getTodayDate();
    let checkDate = new Date(today);

    for (let i = 0; i < completedDates.length; i++) {
        const completedDate = completedDates[i];
        const expectedDate = checkDate.toISOString().split('T')[0];

        if (completedDate === expectedDate) {
            currentStreak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }

    // Calculate longest streak
    let longestStreak = 0;
    let tempStreak = 1;

    const sortedDates = completedDates.sort((a, b) => new Date(a) - new Date(b));

    for (let i = 1; i < sortedDates.length; i++) {
        const prevDate = new Date(sortedDates[i - 1]);
        const currDate = new Date(sortedDates[i]);
        const dayDiff = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24));

        if (dayDiff === 1) {
            tempStreak++;
            longestStreak = Math.max(longestStreak, tempStreak);
        } else {
            tempStreak = 1;
        }
    }

    longestStreak = Math.max(longestStreak, tempStreak);

    return {
        currentStreak,
        longestStreak,
        lastCompletedDate: completedDates[0]
    };
};

/**
 * Check if user can use a streak freeze
 * @param {Object} streakData - User's streak data
 * @returns {boolean}
 */
export const canUseStreakFreeze = (streakData) => {
    return streakData && streakData.streakFreezes > 0;
};

/**
 * Use a streak freeze
 * @param {Object} streakData - User's streak data
 * @returns {Object} Updated streak data
 */
export const useStreakFreeze = (streakData) => {
    if (!canUseStreakFreeze(streakData)) {
        return streakData;
    }

    return {
        ...streakData,
        streakFreezes: streakData.streakFreezes - 1,
        lastFreezeUsed: getTodayDate()
    };
};

/**
 * Award streak freeze for milestone
 * @param {number} streak - Current streak count
 * @returns {boolean} Whether to award a freeze
 */
export const shouldAwardStreakFreeze = (streak) => {
    // Award freeze every 7 days
    return streak > 0 && streak % 7 === 0;
};

/**
 * Get streak emoji based on count
 */
export const getStreakEmoji = (streak) => {
    if (streak === 0) return '⚪';
    if (streak < 3) return '🔥';
    if (streak < 7) return '🔥🔥';
    if (streak < 14) return '🔥🔥🔥';
    if (streak < 30) return '🔥🔥🔥🔥';
    return '🔥🔥🔥🔥🔥';
};

/**
 * Get encouraging message based on streak
 */
export const getStreakMessage = (streak) => {
    if (streak === 0) return "Start your streak today!";
    if (streak === 1) return "Great start! Keep it going!";
    if (streak === 3) return "3 days strong! 🔥";
    if (streak === 7) return "One week streak! Amazing! 🎉";
    if (streak === 14) return "Two weeks! You're on fire! 🔥";
    if (streak === 30) return "30 days! Incredible dedication! 🏆";
    if (streak === 100) return "100 DAYS! You're a legend! 👑";
    if (streak < 7) return `${streak} day streak! Keep going!`;
    if (streak < 30) return `${streak} days! You're unstoppable!`;
    return `${streak} days! Absolutely legendary! 🌟`;
};

/**
 * Check if user missed yesterday's challenge
 */
export const missedYesterday = (lastCompletedDate) => {
    if (!lastCompletedDate) return false;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const today = getTodayDate();

    return lastCompletedDate !== yesterdayStr && lastCompletedDate !== today;
};

/**
 * Get days until next streak freeze
 */
export const daysUntilNextFreeze = (streak) => {
    if (streak === 0) return 7;
    return 7 - (streak % 7);
};

/**
 * Save daily challenge data to localStorage
 */
export const saveDailyChallengeData = (data) => {
    try {
        localStorage.setItem('dailyChallengeData', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving daily challenge data:', error);
    }
};

/**
 * Load daily challenge data from localStorage
 */
export const loadDailyChallengeData = () => {
    try {
        const data = localStorage.getItem('dailyChallengeData');
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading daily challenge data:', error);
        return null;
    }
};

/**
 * Initialize daily challenge data structure
 */
export const initializeDailyChallengeData = () => {
    return {
        currentStreak: 0,
        longestStreak: 0,
        lastCompletedDate: null,
        streakFreezes: 0,
        totalChallengesCompleted: 0,
        challenges: {}
    };
};
