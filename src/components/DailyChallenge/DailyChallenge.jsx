import React, { useState, useEffect } from 'react';
import { Calendar, Trophy, Flame, Gift, Lock } from 'lucide-react';
import {
    getTodayDate,
    generateDailyChallenge,
    calculateStreak,
    isChallengeToday,
    saveDailyChallengeData,
    loadDailyChallengeData,
    initializeDailyChallengeData,
    shouldAwardStreakFreeze,
    daysUntilNextFreeze
} from '../../utils/dailyChallenge';
import { playStreakSound, playAchievementSound } from '../../utils/sounds';
import StreakDisplay from './StreakDisplay';

/**
 * Daily Challenge Component
 * Main component for daily challenges with streak tracking
 */
const DailyChallenge = ({ learnedWords, onStartChallenge, onClose }) => {
    const [challengeData, setChallengeData] = useState(null);
    const [todayChallenge, setTodayChallenge] = useState(null);
    const [streakInfo, setStreakInfo] = useState({
        currentStreak: 0,
        longestStreak: 0,
        lastCompletedDate: null
    });
    const [loading, setLoading] = useState(true);

    // Load challenge data on mount
    useEffect(() => {
        loadChallengeData();
    }, []);

    const loadChallengeData = () => {
        setLoading(true);

        // Load from localStorage
        let data = loadDailyChallengeData();

        // Initialize if no data exists
        if (!data) {
            data = initializeDailyChallengeData();
            saveDailyChallengeData(data);
        }

        setChallengeData(data);

        // Calculate streak
        const streak = calculateStreak(data.challenges);
        setStreakInfo(streak);

        // Check if today's challenge exists
        const today = getTodayDate();
        const existingChallenge = data.challenges[today];

        if (existingChallenge && isChallengeToday(existingChallenge.date)) {
            setTodayChallenge(existingChallenge);
        } else {
            // Generate new challenge for today
            const newChallenge = generateDailyChallenge(learnedWords, 10);
            if (newChallenge) {
                setTodayChallenge(newChallenge);
            }
        }

        setLoading(false);
    };

    const handleStartChallenge = () => {
        if (!todayChallenge) return;

        // Mark challenge as started
        const updatedChallenge = {
            ...todayChallenge,
            startedAt: new Date().toISOString()
        };

        // Save to data
        const updatedData = {
            ...challengeData,
            challenges: {
                ...challengeData.challenges,
                [getTodayDate()]: updatedChallenge
            }
        };

        setChallengeData(updatedData);
        saveDailyChallengeData(updatedData);

        // Start the challenge (pass to parent component)
        if (onStartChallenge) {
            onStartChallenge(updatedChallenge);
        }
    };

    const handleChallengeComplete = (score, totalQuestions) => {
        if (!todayChallenge) return;

        const completedChallenge = {
            ...todayChallenge,
            completed: true,
            score,
            totalQuestions,
            completedAt: new Date().toISOString()
        };

        const updatedData = {
            ...challengeData,
            challenges: {
                ...challengeData.challenges,
                [getTodayDate()]: completedChallenge
            },
            totalChallengesCompleted: (challengeData.totalChallengesCompleted || 0) + 1
        };

        // Recalculate streak
        const newStreak = calculateStreak(updatedData.challenges);

        // Award streak freeze if milestone reached
        if (shouldAwardStreakFreeze(newStreak.currentStreak)) {
            updatedData.streakFreezes = (updatedData.streakFreezes || 0) + 1;
            playAchievementSound();
        } else {
            playStreakSound();
        }

        setChallengeData(updatedData);
        setStreakInfo(newStreak);
        setTodayChallenge(completedChallenge);
        saveDailyChallengeData(updatedData);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!learnedWords || learnedWords.length < 5) {
        return (
            <div className="max-w-2xl mx-auto p-6">
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
                    <Lock className="w-16 h-16 mx-auto mb-4 text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Daily Challenge Locked
                    </h3>
                    <p className="text-gray-600">
                        Learn at least 5 words to unlock daily challenges!
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Current progress: {learnedWords?.length || 0}/5 words
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Daily Challenge
                    </h2>
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    >
                        ×
                    </button>
                )}
            </div>

            {/* Streak Display */}
            <div className="mb-6">
                <StreakDisplay
                    streak={streakInfo.currentStreak}
                    longestStreak={streakInfo.longestStreak}
                />
            </div>

            {/* Streak Freezes */}
            {challengeData && challengeData.streakFreezes > 0 && (
                <div className="mb-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                        <Gift className="w-6 h-6 text-blue-600" />
                        <div>
                            <div className="font-semibold text-blue-900">
                                Streak Freezes: {challengeData.streakFreezes}
                            </div>
                            <div className="text-sm text-blue-700">
                                Miss a day without breaking your streak!
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Today's Challenge */}
            {todayChallenge && (
                <div className="bg-white rounded-xl shadow-lg border-2 border-indigo-200 p-6 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Trophy className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-xl font-bold text-gray-800">
                            Today's Challenge
                        </h3>
                    </div>

                    {todayChallenge.completed ? (
                        // Challenge completed
                        <div className="text-center py-8">
                            <div className="text-6xl mb-4">🎉</div>
                            <h4 className="text-2xl font-bold text-green-600 mb-2">
                                Challenge Complete!
                            </h4>
                            <div className="text-3xl font-bold text-gray-800 mb-2">
                                {todayChallenge.score}/{todayChallenge.totalQuestions}
                            </div>
                            <p className="text-gray-600 mb-4">
                                Great job! Come back tomorrow for a new challenge!
                            </p>
                            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                                <Flame className="w-5 h-5 text-orange-500" />
                                <span className="font-semibold text-green-700">
                                    Streak maintained!
                                </span>
                            </div>
                        </div>
                    ) : (
                        // Challenge not started or in progress
                        <div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-indigo-600">
                                        {todayChallenge.totalQuestions}
                                    </div>
                                    <div className="text-sm text-gray-600">Questions</div>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-purple-600">
                                        +50
                                    </div>
                                    <div className="text-sm text-gray-600">Points</div>
                                </div>
                            </div>

                            <button
                                onClick={handleStartChallenge}
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                            >
                                Start Today's Challenge
                            </button>

                            <p className="text-sm text-gray-500 text-center mt-3">
                                Complete daily challenges to build your streak!
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-indigo-600">
                        {challengeData?.totalChallengesCompleted || 0}
                    </div>
                    <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-orange-600">
                        {streakInfo.currentStreak}
                    </div>
                    <div className="text-sm text-gray-600">Current Streak</div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border border-gray-200 col-span-2 sm:col-span-1">
                    <div className="text-2xl font-bold text-purple-600">
                        {daysUntilNextFreeze(streakInfo.currentStreak)}
                    </div>
                    <div className="text-sm text-gray-600">Days to Freeze</div>
                </div>
            </div>
        </div>
    );
};

export default DailyChallenge;
