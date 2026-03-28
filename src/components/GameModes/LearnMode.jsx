import React, { useState } from 'react';
import { Home, Volume2, ChevronLeft, ChevronRight, GraduationCap, Check } from 'lucide-react';
import WordImage from '../WordImage';

const LearnMode = ({
    words,
    currentIndex,
    onNext,
    onPrev,
    onComplete,
    speakDutch,
    isAdmin,
    onExit
}) => {
    const [showPracticeBox, setShowPracticeBox] = useState(false);
    const [practiceInput, setPracticeInput] = useState('');

    const currentLearnWord = words[currentIndex];

    // Reset practice box when word changes
    React.useEffect(() => {
        setShowPracticeBox(false);
        setPracticeInput('');
    }, [currentIndex]);

    if (!currentLearnWord) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-3 sm:p-4 pb-24">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={onExit}
                            className="bg-gray-100 hover:bg-gray-200 active:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-2"
                        >
                            <Home className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                            <span className="font-semibold text-sm sm:text-base">Menu</span>
                        </button>
                        <div className="text-gray-600 font-semibold text-sm sm:text-base">
                            {currentIndex + 1} / {words.length}
                        </div>
                    </div>

                    <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300"
                            style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
                    <div className="text-center">
                        <div className="mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${currentLearnWord.level === 'A1' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                }`}>
                                {currentLearnWord.level} • {currentLearnWord.category.replace(/_/g, ' ')}
                            </span>
                        </div>
                        <WordImage word={currentLearnWord} size="large" isAdmin={isAdmin} />
                        <div className="mb-6">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <h2 className="text-4xl sm:text-6xl font-bold text-indigo-600">{currentLearnWord.dutch}</h2>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => speakDutch(currentLearnWord.dutch)}
                                        className="bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-200 p-3 sm:p-4 rounded-full transition-all"
                                        title="Pronounce word"
                                    >
                                        <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="text-2xl sm:text-4xl font-semibold text-gray-700 mb-2">
                                {currentLearnWord.english}
                            </div>

                            <div className="text-sm sm:text-lg text-gray-500 mt-4">
                                <div className="flex flex-col items-center mb-3">
                                    <button
                                        onClick={() => {
                                            const dutchSentence = currentLearnWord.example.replace(/\s*\([^)]+\)\s*/g, '').trim();
                                            speakDutch(dutchSentence);
                                        }}
                                        className="bg-blue-100 hover:bg-blue-200 active:bg-blue-200 px-4 py-2 sm:px-5 sm:py-3 rounded-xl transition-all flex items-center gap-2"
                                    >
                                        <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                        <span className="text-xs sm:text-sm font-semibold text-blue-600">Example</span>
                                    </button>
                                    <p className="mt-2">{currentLearnWord.example}</p>
                                </div>
                            </div>
                        </div>

                        {/* PRACTICE TYPING BOX */}
                        <div className="mb-6">
                            <button
                                onClick={() => {
                                    setShowPracticeBox(!showPracticeBox);
                                    setPracticeInput('');
                                }}
                                className="bg-purple-100 hover:bg-purple-200 active:bg-purple-200 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-purple-700"
                            >
                                ✏️ {showPracticeBox ? 'Hide' : 'Practice Typing'}
                            </button>

                            {showPracticeBox && (
                                <div className="mt-4 p-4 sm:p-6 bg-purple-50 rounded-xl border-2 border-purple-200 animate-fadeIn">
                                    <p className="text-gray-600 mb-3 text-sm sm:text-base">
                                        💡 Practice spelling: <span className="font-bold text-purple-700">{currentLearnWord.english}</span>
                                    </p>
                                    <input
                                        type="text"
                                        value={practiceInput}
                                        onChange={(e) => setPracticeInput(e.target.value)}
                                        placeholder="Type the Dutch word here..."
                                        className="w-full p-3 sm:p-4 text-lg sm:text-xl text-center font-semibold border-2 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none"
                                    />

                                    {practiceInput.trim() && (
                                        <div className="mt-3">
                                            {practiceInput.toLowerCase().trim() === currentLearnWord.dutch.toLowerCase() ? (
                                                <div className="bg-green-100 p-3 rounded-lg">
                                                    <p className="text-green-700 font-bold flex items-center justify-center gap-2">
                                                        <Check className="w-5 h-5" />
                                                        Perfect! You got it right!
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="bg-yellow-50 p-3 rounded-lg">
                                                    <p className="text-gray-600 text-sm mb-1">Keep practicing!</p>
                                                    <p className="text-xs text-gray-500">
                                                        {practiceInput.length > 0 &&
                                                            `You wrote: ${practiceInput.length} letter${practiceInput.length > 1 ? 's' : ''} • 
                            Correct: ${currentLearnWord.dutch.length} letter${currentLearnWord.dutch.length > 1 ? 's' : ''}`
                                                        }
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <p className="text-xs text-gray-500 mt-3 text-center italic">
                                        ℹ️ This is just for practice - no scoring, take your time!
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-3 sm:gap-4 justify-center mt-8 mb-20">
                            <button
                                onClick={onPrev}
                                disabled={currentIndex === 0}
                                className="px-4 sm:px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 active:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm sm:text-base"
                                style={{
                                    WebkitTapHighlightColor: 'transparent',
                                    touchAction: 'manipulation'
                                }}
                            >
                                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                Prev
                            </button>

                            {currentIndex < words.length - 1 ? (
                                <button
                                    onClick={onNext}
                                    className="px-4 sm:px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 active:bg-indigo-600 transition-all flex items-center gap-2 text-sm sm:text-base"
                                    style={{
                                        WebkitTapHighlightColor: 'transparent',
                                        touchAction: 'manipulation',
                                        backgroundColor: '#6366f1'
                                    }}
                                >
                                    Next
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={onComplete}
                                    className="px-4 sm:px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 active:bg-green-600 transition-all flex items-center gap-2 text-sm sm:text-base"
                                    style={{
                                        WebkitTapHighlightColor: 'transparent',
                                        touchAction: 'manipulation',
                                        backgroundColor: '#22c55e'
                                    }}
                                >
                                    Start Test
                                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-3 shadow-lg z-50">
                <div className="max-w-2xl mx-auto">
                    <button
                        onClick={onExit}
                        className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-200 px-4 py-3 rounded-xl transition-all"
                    >
                        <Home className="w-5 h-5 text-gray-700" />
                        <span className="font-semibold">Back to Menu</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LearnMode;
