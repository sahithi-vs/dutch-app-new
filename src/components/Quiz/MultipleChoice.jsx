import React from 'react';
import { Home, Check, X, ChevronRight } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';
import { LevelBadge } from '../common/LevelBadge';
import { SpeakButton } from '../common/SpeakButton';

export const MultipleChoice = ({
  currentWord,
  options,
  questionsAnswered,
  numQuestions,
  score,
  streak,
  feedback,
  onAnswer,
  onNext,
  onGoToMenu
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
              <button
                onClick={onGoToMenu}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-2"
                title="Back to Menu"
              >
                <Home className="w-5 h-5 text-gray-700" />
                <span className="font-semibold">Menu</span>
              </button>
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <span className="text-green-700 font-bold">Score: {score}</span>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <span className="text-blue-700 font-bold">Streak: {streak} 🔥</span>
              </div>
            </div>
            <div className="text-gray-600 font-semibold">
              Question {questionsAnswered}/{numQuestions}
            </div>
          </div>
          
          <ProgressBar current={questionsAnswered} total={numQuestions} />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="mb-3">
              <LevelBadge level={currentWord.level} />
            </div>
            <p className="text-gray-600 mb-2">What is the English translation of:</p>
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-5xl font-bold text-orange-600">{currentWord.dutch}</h2>
              <SpeakButton text={currentWord.dutch} colorClass="orange" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onAnswer(option)}
                disabled={feedback !== null}
                className={`p-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-102 ${
                  feedback === null
                    ? 'bg-gray-100 hover:bg-orange-100 text-gray-800 hover:text-orange-600'
                    : feedback.correct && option.english === currentWord.english
                    ? 'bg-green-500 text-white'
                    : !feedback.correct && option.english === currentWord.english
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {option.english}
              </button>
            ))}
          </div>

          {feedback && (
            <div className={`mt-6 p-4 rounded-xl ${
              feedback.correct ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                {feedback.correct ? (
                  <Check className="w-6 h-6 text-green-600" />
                ) : (
                  <X className="w-6 h-6 text-red-600" />
                )}
                <p className={`font-semibold ${
                  feedback.correct ? 'text-green-700' : 'text-red-700'
                }`}>
                  {feedback.message}
                </p>
              </div>
              
              {!feedback.correct && (
                <button
                  onClick={onNext}
                  className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Next Question
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};