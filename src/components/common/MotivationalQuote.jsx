import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { getQuoteOfTheDay, getRandomQuote } from '../../data/quotes';

/**
 * Motivational Quote Component
 * Displays encouraging messages for learners
 */
const MotivationalQuote = ({ variant = 'daily', className = '' }) => {
    const [quote, setQuote] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Load quote based on variant
        if (variant === 'daily') {
            setQuote(getQuoteOfTheDay());
        } else {
            setQuote(getRandomQuote());
        }
    }, [variant]);

    const handleRefresh = () => {
        setIsAnimating(true);
        setQuote(getRandomQuote());

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className={`bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200 shadow-sm ${className}`}>
            <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                </div>

                {/* Quote */}
                <div className="flex-1">
                    <p className={`text-sm sm:text-base text-gray-700 font-medium italic transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                        "{quote}"
                    </p>
                </div>

                {/* Refresh button (only for random variant) */}
                {variant === 'random' && (
                    <button
                        onClick={handleRefresh}
                        className="flex-shrink-0 p-2 hover:bg-purple-100 rounded-lg transition-colors"
                        aria-label="Get new quote"
                    >
                        <RefreshCw className={`w-5 h-5 text-purple-600 ${isAnimating ? 'animate-spin' : ''}`} />
                    </button>
                )}
            </div>

            {/* Quote type label */}
            <div className="mt-2 text-xs text-purple-600 font-semibold uppercase tracking-wide">
                {variant === 'daily' ? '💫 Quote of the Day' : '✨ Motivation'}
            </div>
        </div>
    );
};

export default MotivationalQuote;
