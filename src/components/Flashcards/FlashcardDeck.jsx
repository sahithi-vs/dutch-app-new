import React from 'react';
import { BookOpen, Trophy, Clock, ChevronRight } from 'lucide-react';
import { getDeckStats, getCardsDueForReview } from '../../utils/flashcards';

/**
 * Deck selection screen
 * Shows available decks by category with statistics
 */
const FlashcardDeck = ({
    categories,
    allWords,
    flashcardData,
    onSelectDeck,
    onBack
}) => {
    // Get unique categories from word bank
    const categoryList = categories.includes('all')
        ? ['all', ...categories.filter(c => c !== 'all')]
        : categories;

    // Calculate stats for each category
    const getDeckInfo = (category) => {
        const words = category === 'all'
            ? allWords
            : allWords.filter(w => w.category === category);

        const wordIds = words.map(w => `${w.dutch}_${w.english}`);
        const stats = getDeckStats(flashcardData, wordIds);

        return {
            category,
            words,
            ...stats
        };
    };

    const decks = categoryList.map(getDeckInfo);

    // Get category display name
    const getCategoryName = (category) => {
        if (category === 'all') return 'All Words';
        return category.split('_').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    // Get category emoji
    const getCategoryEmoji = (category) => {
        const emojiMap = {
            'all': '📚',
            'greetings': '👋',
            'numbers': '🔢',
            'colors': '🎨',
            'food': '🍽️',
            'family': '👨‍👩‍👧‍👦',
            'time': '⏰',
            'weather': '🌤️',
            'animals': '🐾',
            'body': '🧍',
            'clothing': '👕',
            'house': '🏠',
            'transport': '🚗',
            'work': '💼',
            'hobbies': '🎯',
            'emotions': '😊',
            'nature': '🌳',
            'city': '🏙️',
            'shopping': '🛍️',
            'health': '🏥'
        };
        return emojiMap[category] || '📖';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={onBack}
                        className="mb-4 flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg active:shadow-lg transition-all"
                    >
                        <ChevronRight className="w-5 h-5 rotate-180" />
                        <span className="font-semibold">Back to Menu</span>
                    </button>

                    <h1 className="text-4xl font-bold text-gray-800 mb-2">📇 Flashcards</h1>
                    <p className="text-gray-600">Choose a deck to start reviewing</p>
                </div>

                {/* Info cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-4 text-center">
                        <div className="text-3xl font-bold text-indigo-600">
                            {decks.reduce((sum, d) => sum + d.dueCount, 0)}
                        </div>
                        <div className="text-sm text-gray-600">Cards Due</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 text-center">
                        <div className="text-3xl font-bold text-green-600">
                            {decks.reduce((sum, d) => sum + d.masteredCount, 0)}
                        </div>
                        <div className="text-sm text-gray-600">Mastered</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 text-center">
                        <div className="text-3xl font-bold text-blue-600">
                            {decks.reduce((sum, d) => sum + d.learningCount, 0)}
                        </div>
                        <div className="text-sm text-gray-600">Learning</div>
                    </div>
                </div>

                {/* Deck list */}
                <div className="space-y-4">
                    {decks.map((deck) => (
                        <button
                            key={deck.category}
                            onClick={() => onSelectDeck(deck.category, deck.words)}
                            className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl active:shadow-xl transition-all p-6 text-left"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="text-5xl">{getCategoryEmoji(deck.category)}</div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                                            {getCategoryName(deck.category)}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {deck.total} cards total
                                        </p>

                                        {/* Progress bars */}
                                        <div className="space-y-2">
                                            {deck.dueCount > 0 && (
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-orange-500" />
                                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-orange-500"
                                                            style={{ width: `${(deck.dueCount / deck.total) * 100}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs text-gray-600 w-12 text-right">
                                                        {deck.dueCount} due
                                                    </span>
                                                </div>
                                            )}

                                            {deck.masteredCount > 0 && (
                                                <div className="flex items-center gap-2">
                                                    <Trophy className="w-4 h-4 text-green-500" />
                                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-green-500"
                                                            style={{ width: `${(deck.masteredCount / deck.total) * 100}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs text-gray-600 w-12 text-right">
                                                        {deck.masteredCount}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <ChevronRight className="w-6 h-6 text-gray-400" />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Help text */}
                <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                    <h3 className="font-bold text-blue-900 mb-2">💡 How Flashcards Work</h3>
                    <ul className="text-sm text-blue-800 space-y-2">
                        <li>• Cards you know well appear less frequently</li>
                        <li>• Cards you struggle with appear more often</li>
                        <li>• Swipe right (or press →) if you know the word</li>
                        <li>• Swipe left (or press ←) if you don't know it</li>
                        <li>• Master all 5 levels to complete a card!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FlashcardDeck;
