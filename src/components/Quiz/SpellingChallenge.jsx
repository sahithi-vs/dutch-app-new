import React from 'react';
import { Home, Volume2, Check, X, ChevronRight } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';
import { LevelBadge } from '../common/LevelBadge';
import { SpeakButton } from '../common/SpeakButton';

export const SpellingChallenge = ({
  currentWord,
  questionsAnswered,
  numQuestions,
  score,
  streak,
  feedback,
  spellingAnswer,
  onAnswerChange,
  onSubmit,
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
              <span className="ml-2">- Spelling Challenge</span>
            </div>
            <p className="text-gray-600 mb-2">Type the Dutch word for:</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-5xl font-bold text-purple-600">{currentWord.english}</h2>
            </div>
            
            <button
              onClick={() => speakDutch(currentWord.dutch)}
              className="bg-purple-100 hover:bg-purple-200 px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2 mb-6"
              title="Hear the pronunciation"
            >
              <Volume2 className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">Hear pronunciation</span>
            </button>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              value={spellingAnswer}
              onChange={(e) => onAnswerChange(e.target.value)}
              disabled={feedback !== null}
              placeholder="Type the Dutch word here..."
              className="w-full p-4 text-2xl text-center font-semibold border-4 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none disabled:bg-gray-100"
              autoFocus
            />
            
            {feedback === null && (
              <button
                type="submit"
                disabled={!spellingAnswer.trim()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            )}
          </form>

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
                <div className="mb-3 p-3 bg-white rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">You wrote:</p>
                  <p className="text-red-600 font-bold text-xl line-through">{spellingAnswer}</p>
                  <p className="text-gray-600 text-sm mt-2 mb-1">Correct answer:</p>
                  <p className="text-green-600 font-bold text-xl">{currentWord.dutch}</p>
                </div>
              )}
              
              <button
                onClick={onNext}
                className="w-full mt-3 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Next Question
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};