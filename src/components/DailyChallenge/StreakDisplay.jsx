import React from 'react';
import { getStreakEmoji, getStreakMessage } from '../../utils/dailyChallenge';

/**
 * Streak Display Component
 * Shows current streak with fire emoji and encouraging message
 */
const StreakDisplay = ({ streak, longestStreak, compact = false }) => {
    const emoji = getStreakEmoji(streak);
    const message = getStreakMessage(streak);

    if (compact) {
        return (
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 px-3 py-2 rounded-lg border border-orange-200">
                <span className="text-2xl">{emoji}</span>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-orange-600">{streak} Day Streak</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-xl p-6 border-2 border-orange-200 shadow-lg">
            <div className="text-center">
                {/* Streak Emoji */}
                <div className="text-6xl mb-3 animate-pulse">
                    {emoji}
                </div>

                {/* Current Streak */}
                <div className="mb-4">
                    <div className="text-4xl font-bold text-orange-600 mb-1">
                        {streak}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                        Day Streak
                    </div>
                </div>

                {/* Encouraging Message */}
                <div className="text-base text-gray-700 font-medium mb-4">
                    {message}
                </div>

                {/* Longest Streak */}
                {longestStreak > 0 && (
                    <div className="pt-4 border-t border-orange-200">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                            Personal Best
                        </div>
                        <div className="text-2xl font-bold text-orange-500">
                            {longestStreak} {longestStreak === 1 ? 'day' : 'days'}
                        </div>
                    </div>
                )}

                {/* Progress to next milestone */}
                {streak > 0 && streak < 100 && (
                    <div className="mt-4 pt-4 border-t border-orange-200">
                        <div className="text-xs text-gray-500 mb-2">
                            Next milestone
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            {getNextMilestone(streak) && (
                                <>
                                    <span className="text-sm font-semibold text-gray-700">
                                        {getNextMilestone(streak).days} days
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        ({getNextMilestone(streak).days - streak} to go)
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Helper function to get next milestone
const getNextMilestone = (currentStreak) => {
    const milestones = [
        { days: 3, name: 'On Fire' },
        { days: 7, name: 'One Week' },
        { days: 14, name: 'Two Weeks' },
        { days: 30, name: 'One Month' },
        { days: 50, name: 'Fifty Days' },
        { days: 100, name: 'Hundred Days' }
    ];

    return milestones.find(m => m.days > currentStreak);
};

export default StreakDisplay;
