import React, { useState, useEffect } from 'react';
import { getWordImage } from '../services/unsplashService';

/**
 * WordImage Component
 * Displays emoji (priority) or Unsplash image for a Dutch word
 * 
 * @param {Object} word - Word object with dutch, english, and optional emoji
 * @param {string} size - Size variant: 'small', 'medium', 'large'
 * @param {boolean} showLoading - Whether to show loading state
 */
export default function WordImage({ word, size = 'large', showLoading = true, isAdmin = false }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        // If emoji exists, use it (no API call needed)
        if (word?.emoji) {
            setImageUrl(null);
            setLoading(false);
            return;
        }

        // Only fetch images for admin users
        if (!isAdmin) {
            setError(true);
            return;
        }

        // If no English translation, can't search
        if (!word?.english) {
            setError(true);
            return;
        }

        // Fetch image from Pexels (with caching) - ADMIN ONLY
        setLoading(true);
        setError(false);

        // Pass both english word and example for better context
        getWordImage(word.english, word.example)
            .then(url => {
                if (url) {
                    setImageUrl(url);
                } else {
                    setError(true);
                }
            })
            .catch(err => {
                console.error('Error loading image:', err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [word?.english, word?.emoji, word?.example, isAdmin]);

    // Size configurations
    const sizeClasses = {
        small: {
            emoji: 'text-4xl sm:text-5xl',
            image: 'w-24 h-24 sm:w-32 sm:h-32',
            loading: 'w-24 h-24 sm:w-32 sm:h-32'
        },
        medium: {
            emoji: 'text-5xl sm:text-6xl',
            image: 'w-32 h-32 sm:w-40 sm:h-40',
            loading: 'w-32 h-32 sm:w-40 sm:h-40'
        },
        large: {
            emoji: 'text-6xl sm:text-7xl',
            image: 'w-40 h-40 sm:w-48 sm:h-48',
            loading: 'w-40 h-40 sm:w-48 sm:h-48'
        }
    };

    const currentSize = sizeClasses[size] || sizeClasses.large;

    // Priority 1: Show emoji if available
    if (word?.emoji) {
        return (
            <div
                className={`${currentSize.emoji} mb-4`}
                role="img"
                aria-label={word.english}
            >
                {word.emoji}
            </div>
        );
    }

    // Priority 2: Show loading state
    if (loading && showLoading) {
        return (
            <div className={`${currentSize.loading} mb-4 flex items-center justify-center`}>
                <div className="animate-pulse bg-gray-200 rounded-xl w-full h-full flex items-center justify-center">
                    <svg
                        className="w-8 h-8 text-gray-400 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </div>
            </div>
        );
    }

    // Priority 3: Show Unsplash image
    if (imageUrl && !error) {
        return (
            <div className={`${currentSize.image} mb-4 mx-auto`}>
                <img
                    src={imageUrl}
                    alt={word.english}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                    onError={() => setError(true)}
                />
            </div>
        );
    }

    // Priority 4: No image available (graceful degradation)
    return null;
}
