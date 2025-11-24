// Leitner Spaced Repetition System for Flashcards

// Leitner box intervals (in days)
export const LEITNER_INTERVALS = {
    1: 0.1,  // Review daily (2.4 hours)
    2: 2,    // Every 2 days
    3: 4,    // Every 4 days
    4: 7,    // Every week
    5: 14    // Every 2 weeks
};

/**
 * Initialize a new flashcard with default Leitner data
 */
export const initializeCard = (wordId) => ({
    wordId,
    box: 1,
    lastReview: null,
    nextReview: new Date().toISOString(),
    reviewCount: 0,
    correctCount: 0,
    createdAt: new Date().toISOString()
});

/**
 * Update card progress based on user response
 * @param {Object} cardData - Current card data
 * @param {boolean} wasCorrect - Whether user answered correctly
 * @returns {Object} Updated card data
 */
export const updateCardProgress = (cardData, wasCorrect) => {
    const newBox = wasCorrect
        ? Math.min(5, cardData.box + 1)  // Move up one box (max 5)
        : 1;  // Reset to box 1 if incorrect

    const daysUntilReview = LEITNER_INTERVALS[newBox];
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + daysUntilReview);

    return {
        ...cardData,
        box: newBox,
        lastReview: new Date().toISOString(),
        nextReview: nextReview.toISOString(),
        reviewCount: cardData.reviewCount + 1,
        correctCount: wasCorrect ? cardData.correctCount + 1 : cardData.correctCount
    };
};

/**
 * Get all cards that are due for review
 * @param {Object} flashcardData - All flashcard data
 * @returns {Array} Array of word IDs due for review
 */
export const getCardsDueForReview = (flashcardData) => {
    const now = new Date();
    return Object.entries(flashcardData)
        .filter(([_, card]) => new Date(card.nextReview) <= now)
        .map(([wordId, _]) => wordId);
};

/**
 * Get cards by category
 * @param {Object} flashcardData - All flashcard data
 * @param {Array} words - Array of word objects
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered word objects
 */
export const getCardsByCategory = (flashcardData, words, category) => {
    if (category === 'all') {
        return words;
    }
    return words.filter(word => word.category === category);
};

/**
 * Get statistics for a deck
 * @param {Object} flashcardData - All flashcard data
 * @param {Array} wordIds - Array of word IDs in the deck
 * @returns {Object} Deck statistics
 */
export const getDeckStats = (flashcardData, wordIds) => {
    const now = new Date();
    let dueCount = 0;
    let masteredCount = 0; // Box 5
    let learningCount = 0; // Box 2-4
    let newCount = 0; // Box 1 or not started

    wordIds.forEach(wordId => {
        const card = flashcardData[wordId];

        if (!card) {
            newCount++;
            return;
        }

        if (new Date(card.nextReview) <= now) {
            dueCount++;
        }

        if (card.box === 5) {
            masteredCount++;
        } else if (card.box >= 2) {
            learningCount++;
        } else {
            newCount++;
        }
    });

    return {
        total: wordIds.length,
        dueCount,
        masteredCount,
        learningCount,
        newCount
    };
};

/**
 * Get next review date for a card
 * @param {Object} cardData - Card data
 * @returns {string} Formatted next review date
 */
export const getNextReviewDate = (cardData) => {
    if (!cardData || !cardData.nextReview) {
        return 'Now';
    }

    const nextReview = new Date(cardData.nextReview);
    const now = new Date();
    const diffMs = nextReview - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) return 'Now';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `In ${diffDays} days`;
    if (diffDays < 14) return 'In 1 week';
    return `In ${Math.ceil(diffDays / 7)} weeks`;
};

/**
 * Calculate success rate for a card
 * @param {Object} cardData - Card data
 * @returns {number} Success rate percentage (0-100)
 */
export const getSuccessRate = (cardData) => {
    if (!cardData || cardData.reviewCount === 0) return 0;
    return Math.round((cardData.correctCount / cardData.reviewCount) * 100);
};
