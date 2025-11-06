import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, RotateCcw, Check, X, Home, Lightbulb, Volume2 } from 'lucide-react';

const DutchFillBlanks = ({ story, onBack, onMenu, speakDutch }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showHint, setShowHint] = useState({});

  // Add safety check
  if (!story || !story.sentences || story.sentences.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <p className="text-xl text-gray-700 mb-4">Story not found!</p>
          <button
            onClick={onMenu}
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const currentSentence = story.sentences[currentIndex];
  const isLastSentence = currentIndex === story.sentences.length - 1;
  const isFirstSentence = currentIndex === 0;

  const handleSelectAnswer = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: option
    });
    setShowHint({ ...showHint, [currentIndex]: false });
  };

  const handleNext = () => {
    if (!isLastSentence) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (!isFirstSentence) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowHint({});
  };

  const toggleHint = () => {
    setShowHint({
      ...showHint,
      [currentIndex]: !showHint[currentIndex]
    });
  };

  const calculateScore = () => {
    let correct = 0;
    story.sentences.forEach((sentence, idx) => {
      if (selectedAnswers[idx] === sentence.answer) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / story.sentences.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-emerald-700">Results</h2>
          
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-2" style={{color: percentage >= 70 ? '#10b981' : '#ef4444'}}>
              {percentage}%
            </div>
            <p className="text-xl text-gray-600">
              {score} out of {story.sentences.length} correct
            </p>
          </div>

          <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
            {story.sentences.map((sentence, idx) => {
              const userAnswer = selectedAnswers[idx];
              const isCorrect = userAnswer === sentence.answer;
              
              return (
                <div key={idx} className="border rounded-lg p-4">
                  <p className="mb-2 text-gray-700">
                    {sentence.text.replace('____', `[${userAnswer || '___'}]`)}
                  </p>
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <Check className="text-green-500" size={20} />
                    ) : (
                      <X className="text-red-500" size={20} />
                    )}
                    <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {isCorrect ? 'Correct!' : `Correct answer: ${sentence.answer}`}
                    </span>
                    {speakDutch && (
                      <button
                        onClick={() => speakDutch(sentence.answer)}
                        className="ml-auto bg-emerald-100 hover:bg-emerald-200 active:bg-emerald-200 p-2 rounded-full transition-all"
                      >
                        <Volume2 className="w-4 h-4 text-emerald-600" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 active:bg-emerald-600 transition-all"
            >
              <RotateCcw size={20} />
              Try Again
            </button>
            <button
              onClick={onBack}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 active:bg-gray-600 transition-all"
            >
              <ChevronLeft size={20} />
              Back
            </button>
            <button
              onClick={onMenu}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 active:bg-gray-300 transition-all"
            >
              <Home size={20} />
              Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
              {story.level}
            </span>
            <span className="text-gray-500">
              {currentIndex + 1} / {story.sentences.length}
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-1">{story.title}</h1>
          <p className="text-gray-600">{story.theme}</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / story.sentences.length) * 100}%` }}
          />
        </div>

        {/* Sentence */}
        <div className="mb-8">
          <p className="text-xl mb-4 leading-relaxed">
            {currentSentence.text.split('____').map((part, idx) => (
              <React.Fragment key={idx}>
                {part}
                {idx < currentSentence.text.split('____').length - 1 && (
                  <span className="inline-block mx-2 px-4 py-1 bg-yellow-100 border-2 border-yellow-400 rounded font-semibold">
                    {selectedAnswers[currentIndex] || '____'}
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>

          {/* Hint Button */}
          <button
            onClick={toggleHint}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 mb-4"
          >
            <Lightbulb size={16} />
            {showHint[currentIndex] ? 'Hide hint' : 'Show hint'}
          </button>

          {/* Hint */}
          {showHint[currentIndex] && (
            <div className="mb-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded">
              💡 {currentSentence.hint}
            </div>
          )}
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {currentSentence.options.map((option, idx) => {
            const isSelected = selectedAnswers[currentIndex] === option;
            
            return (
              <button
                key={idx}
                onClick={() => handleSelectAnswer(option)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50 shadow-md'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">{option}</span>
                  {speakDutch && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakDutch(option);
                      }}
                      className="bg-emerald-100 hover:bg-emerald-200 active:bg-emerald-200 p-2 rounded-full transition-all"
                    >
                      <Volume2 className="w-4 h-4 text-emerald-600" />
                    </button>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={isFirstSentence}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
              isFirstSentence
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-600'
            }`}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedAnswers[currentIndex]}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg ${
              !selectedAnswers[currentIndex]
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-600'
            }`}
          >
            {isLastSentence ? 'Finish' : 'Next'}
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Home Button */}
        <button
          onClick={onMenu}
          className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 active:bg-gray-200"
        >
          <Home size={20} />
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default DutchFillBlanks;