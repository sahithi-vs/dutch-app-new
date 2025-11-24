import React from 'react';
import { Volume2 } from 'lucide-react';

/**
 * Individual flashcard component with flip animation
 * Shows Dutch word on front, English + example on back
 */
const FlashcardCard = ({ word, isFlipped, onFlip, onSpeak }) => {
    return (
        <div
            className="flashcard-container w-full max-w-md mx-auto"
            style={{ perspective: '1000px' }}
        >
            <div
                className={`flashcard-inner relative w-full h-96 transition-transform duration-600 cursor-pointer ${isFlipped ? 'rotate-y-180' : ''
                    }`}
                onClick={onFlip}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Front of card - Dutch word */}
                <div
                    className="flashcard-face flashcard-front absolute w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                >
                    <div className="text-center">
                        <p className="text-white text-sm mb-4 opacity-80">Dutch Word</p>
                        <h1 className="text-white text-5xl sm:text-6xl font-bold mb-6">
                            {word.dutch}
                        </h1>

                        {/* Pronunciation button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onSpeak(word.dutch);
                            }}
                            className="bg-white/20 hover:bg-white/30 active:bg-white/30 p-4 rounded-full transition-all backdrop-blur-sm"
                        >
                            <Volume2 className="w-8 h-8 text-white" />
                        </button>

                        <p className="text-white/60 text-sm mt-8">Tap to flip</p>
                    </div>
                </div>

                {/* Back of card - English translation + example */}
                <div
                    className="flashcard-face flashcard-back absolute w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="text-center w-full">
                        <p className="text-white text-sm mb-2 opacity-80">English Translation</p>
                        <h2 className="text-white text-4xl sm:text-5xl font-bold mb-8">
                            {word.english}
                        </h2>

                        {word.example && (
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                                <p className="text-white/70 text-xs mb-2">Example:</p>
                                <p className="text-white text-lg italic mb-2">{word.example}</p>
                                {word.exampleTranslation && (
                                    <p className="text-white/60 text-sm">{word.exampleTranslation}</p>
                                )}
                            </div>
                        )}

                        {word.type && (
                            <div className="inline-block bg-white/20 px-4 py-2 rounded-full">
                                <p className="text-white text-sm">{word.type}</p>
                            </div>
                        )}

                        <p className="text-white/60 text-sm mt-6">Tap to flip back</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashcardCard;
