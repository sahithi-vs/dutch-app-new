import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, X, RotateCcw, Trophy, Home } from 'lucide-react';
import FlashcardCard from './FlashcardCard';
import { updateCardProgress, getSuccessRate } from '../../utils/flashcards';

/**
 * Main flashcard review interface
 * Handles card navigation, swipe gestures, and progress tracking
 */
const FlashcardMode = ({
    words,
    flashcardData,
    onUpdateCard,
    onComplete,
    onBack,
    category
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [swipeDirection, setSwipeDirection] = useState(null);

    const currentWord = words[currentIndex];
    const progress = ((currentIndex + 1) / words.length) * 100;
    const isLastCard = currentIndex === words.length - 1;

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    // Handle touch start
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    // Handle touch move
    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    // Handle touch end
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleAnswer(false); // Don't know (swipe left)
        } else if (isRightSwipe) {
            handleAnswer(true); // Know it (swipe right)
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                setIsFlipped(!isFlipped);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                handleAnswer(false);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                handleAnswer(true);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isFlipped, currentIndex]);

    // Handle card flip
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // Handle answer (know it / don't know)
    const handleAnswer = (wasCorrect) => {
        const wordKey = `${currentWord.dutch}_${currentWord.english}`;
        const currentCardData = flashcardData[wordKey] || {
            box: 1,
            lastReview: null,
            nextReview: new Date().toISOString(),
            reviewCount: 0,
            correctCount: 0
        };

        // Update card progress
        const updatedCard = updateCardProgress(currentCardData, wasCorrect);
        onUpdateCard(wordKey, updatedCard);

        // Update session stats
        setSessionStats(prev => ({
            correct: prev.correct + (wasCorrect ? 1 : 0),
            incorrect: prev.incorrect + (wasCorrect ? 0 : 1)
        }));

        // Show swipe animation
        setSwipeDirection(wasCorrect ? 'right' : 'left');

        setTimeout(() => {
            setSwipeDirection(null);

            if (isLastCard) {
                onComplete(sessionStats);
            } else {
                setCurrentIndex(currentIndex + 1);
                setIsFlipped(false);
            }
        }, 300);
    };

    // Speak Dutch word
    const speakDutch = (text) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'nl-NL';
            utterance.rate = 0.8;
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 pb-24"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg active:shadow-lg transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="font-semibold">Back</span>
                    </button>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            {category === 'all' ? 'All Categories' : category.replace(/_/g, ' ').toUpperCase()}
                        </p>
                        <p className="text-lg font-bold text-gray-800">
                            {currentIndex + 1} / {words.length}
                        </p>
                    </div>

                    <div className="w-20" /> {/* Spacer */}
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Flashcard */}
                <div className={`transition-transform duration-300 ${swipeDirection === 'left' ? '-translate-x-full opacity-0' :
                    swipeDirection === 'right' ? 'translate-x-full opacity-0' : ''
                    }`}>
                    <FlashcardCard
                        word={currentWord}
                        isFlipped={isFlipped}
                        onFlip={handleFlip}
                        onSpeak={speakDutch}
                    />
                </div>

                {/* Action buttons */}
                {isFlipped && (
                    <div className="mt-8 flex gap-4 justify-center">
                        <button
                            onClick={() => handleAnswer(false)}
                            className="flex-1 max-w-xs bg-red-500 hover:bg-red-600 active:bg-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <X className="w-6 h-6" />
                            <span>Don't Know</span>
                        </button>

                        <button
                            onClick={() => handleAnswer(true)}
                            className="flex-1 max-w-xs bg-green-500 hover:bg-green-600 active:bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl active:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            <Check className="w-6 h-6" />
                            <span>Know It</span>
                        </button>
                    </div>
                )}

                {/* Keyboard shortcuts hint */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>💡 Keyboard: Space to flip • ← Don't know • → Know it</p>
                    <p className="mt-1">📱 Mobile: Swipe left (don't know) • Swipe right (know it)</p>
                </div>

                {/* Session stats */}
                <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Session Progress</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-red-600">{sessionStats.incorrect}</div>
                            <div className="text-sm text-gray-600">Incorrect</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">{sessionStats.correct}</div>
                            <div className="text-sm text-gray-600">Correct</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashcardMode;
