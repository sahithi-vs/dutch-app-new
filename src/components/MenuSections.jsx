import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, GraduationCap } from 'lucide-react';

const MenuSections = ({
    openQuestionSelector,
    setShowFlashcards,
    setShowGrammarLessons,
    setShowTipsAndTricks,
    setShowStories,
    setGameMode,
    setSelectedConversation,
    setShowFillBlankStories,
    setShowConjugationOptions,
    showConjugationOptions,
    setShowVerbCategorySelector,
    setPendingGameMode,
    setShowHistory,
    setShowAdaptiveStats,
    getAdaptiveLearningStats,
    selectedCategories,
    getAllFailedWordsFromHistory,
    attemptHistory,
    loadWords,
    setReviewMode,
    setWordBank,
    setUsedWords,
    setCurrentGameMode,
    setGameStartCategory,
    setScore,
    setStreak,
    setQuestionsAnswered,
    setFeedback,
    setWrongAnswers,
    setSpellingAnswer,
    setNumQuestions,
    setShowQuestionSelector,
    setTranscript,
    setIsRecording,
    generateSpellingQuestion,
    getAllWords,
    getSRSPrioritizedWords
}) => {
    const [expandedSections, setExpandedSections] = useState({
        learnPractice: true,
        advancedPractice: false,
        resources: false,
        progressStats: false
    });

    return (
        <div className="space-y-3">
            {/* 📚 LEARN & PRACTICE SECTION */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                    onClick={() => setExpandedSections(prev => ({ ...prev, learnPractice: !prev.learnPractice }))}
                    className="w-full px-4 py-3 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xl">📚</span>
                        <span className="font-bold text-gray-800 text-sm sm:text-base">Learn & Practice</span>
                    </div>
                    {expandedSections.learnPractice ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                </button>
                {expandedSections.learnPractice && (
                    <div className="p-3 space-y-2 bg-gray-50">
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

                        <button
                            onClick={() => setShowFlashcards(true)}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">📇 Flashcards</span>
                        </button>
                    </div>
                )}
            </div>

            {/* 🎮 ADVANCED PRACTICE SECTION */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                    onClick={() => setExpandedSections(prev => ({ ...prev, advancedPractice: !prev.advancedPractice }))}
                    className="w-full px-4 py-3 flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🎮</span>
                        <span className="font-bold text-gray-800 text-sm sm:text-base">Advanced Practice</span>
                    </div>
                    {expandedSections.advancedPractice ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                </button>
                {expandedSections.advancedPractice && (
                    <div className="p-3 space-y-2 bg-gray-50">
                        <button
                            onClick={() => openQuestionSelector('speaking')}
                            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">🎤 Speaking Test</span>
                        </button>

                        <button
                            onClick={() => openQuestionSelector('sentencebuilder')}
                            className="w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">🧩 Sentence Builder</span>
                        </button>

                        <button
                            onClick={() => setShowFillBlankStories(true)}
                            className="w-full bg-gradient-to-r from-emerald-400 to-teal-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">✍️ Fill-in-the-Blank Stories</span>
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
                            onClick={() => setShowConjugationOptions(!showConjugationOptions)}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">🔄 Verbs Practice</span>
                        </button>
                        {showConjugationOptions && (
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => {
                                        setShowVerbCategorySelector(true);
                                        setPendingGameMode('conjugation_learn');
                                    }}
                                    className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm sm:text-base font-bold py-2 sm:py-3 rounded-xl hover:shadow-lg active:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <span>📚 Learn</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setShowVerbCategorySelector(true);
                                        setPendingGameMode('conjugation_test');
                                    }}
                                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm sm:text-base font-bold py-2 sm:py-3 rounded-xl hover:shadow-lg active:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <span>🧪 Test</span>
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* 📖 RESOURCES SECTION */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                    onClick={() => setExpandedSections(prev => ({ ...prev, resources: !prev.resources }))}
                    className="w-full px-4 py-3 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xl">📖</span>
                        <span className="font-bold text-gray-800 text-sm sm:text-base">Resources</span>
                    </div>
                    {expandedSections.resources ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                </button>
                {expandedSections.resources && (
                    <div className="p-3 space-y-2 bg-gray-50">
                        <button
                            onClick={() => setShowGrammarLessons(true)}
                            className="w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">📚 Grammar Lessons</span>
                        </button>

                        <button
                            onClick={() => setShowTipsAndTricks(true)}
                            className="w-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">💡 Tips & Tricks</span>
                        </button>

                        <button
                            onClick={() => { setShowStories(true); setGameMode('stories'); }}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">📖 Reading Test</span>
                        </button>
                    </div>
                )}
            </div>

            {/* 📊 PROGRESS & STATS SECTION */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                    onClick={() => setExpandedSections(prev => ({ ...prev, progressStats: !prev.progressStats }))}
                    className="w-full px-4 py-3 flex items-center justify-between bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 transition-all"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-xl">📊</span>
                        <span className="font-bold text-gray-800 text-sm sm:text-base">Progress & Stats</span>
                    </div>
                    {expandedSections.progressStats ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                </button>
                {expandedSections.progressStats && (
                    <div className="p-3 space-y-2 bg-gray-50">
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
                            onClick={() => {
                                if (selectedCategories.includes('all') || selectedCategories.length === 0) {
                                    alert('⚠️ Please select specific categories (not "All") to review failed words!');
                                    return;
                                }

                                const failedWordsData = getAllFailedWordsFromHistory(selectedCategories, 'spelling');

                                if (failedWordsData.length === 0) {
                                    alert(`✅ No failed words found!\n\nYou haven't taken any spelling tests yet or got everything correct in:\n${selectedCategories.map(c => c.replace(/_/g, ' ').toUpperCase()).join(', ')}`);
                                    return;
                                }

                                const previousAttempts = attemptHistory.filter(
                                    a => selectedCategories.includes(a.category) && a.mode === 'spelling'
                                );

                                let reviewConfirmMsg = `📚 Found ${failedWordsData.length} failed words from your latest spelling test!\n\n`;

                                if (previousAttempts.length > 1) {
                                    const previousCount = previousAttempts[1]?.wrongAnswers?.length || 0;
                                    if (previousCount > failedWordsData.length) {
                                        reviewConfirmMsg += `🎉 Improvement! Previously: ${previousCount} failed words\n\n`;
                                    }
                                }

                                const topFailedWords = failedWordsData.slice(0, 3).map(w => w.dutch).join(', ');
                                reviewConfirmMsg += `Words to practice: ${topFailedWords}${failedWordsData.length > 3 ? '...' : ''}\n\nReady to practice?`;

                                if (!confirm(reviewConfirmMsg)) {
                                    return;
                                }

                                const allCategoryWords = loadWords(selectedCategories);
                                const failedWordObjects = failedWordsData.map(fw => {
                                    const fullWord = allCategoryWords.find(w =>
                                        w.dutch.toLowerCase() === fw.dutch.toLowerCase() &&
                                        w.english.toLowerCase() === fw.english.toLowerCase()
                                    );

                                    if (fullWord) {
                                        return {
                                            ...fullWord,
                                            failCount: fw.failCount
                                        };
                                    }
                                    return null;
                                }).filter(w => w !== null);

                                if (failedWordObjects.length === 0) {
                                    alert('❌ Could not find the failed words in the selected categories. This might be a data issue.');
                                    return;
                                }

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
                                generateSpellingQuestion(failedWordObjects, []);
                            }}
                            className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white text-base sm:text-xl font-bold py-3 sm:py-4 rounded-xl hover:shadow-xl active:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span className="text-sm sm:text-xl">🔄 Practice Failed Words</span>
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
                )}
            </div>
        </div>
    );
};

export default MenuSections;
