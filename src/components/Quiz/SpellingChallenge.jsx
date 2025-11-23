import React from 'react';
import { Volume2, Check, X } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';
import { LevelBadge } from '../common/LevelBadge';

export const SpellingChallenge = ({
  currentWord,
  index,
  total,
  userAnswer,
  feedback,
  onInputChange,
  onSubmit,
  speakDutch
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-rose-500 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 font-semibold">
              Question {index + 1} / {total}
            </div>
          </div>

          <ProgressBar
            current={index + 1}
            total={total}
            colorClass="from-purple-500 to-pink-500"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="mb-3">
              <LevelBadge level={currentWord.level} />
              <span className="ml-2">- Spelling Challenge</span>
            </div>
            <p className="text-gray-600 mb-2">Type the Dutch word for:</p>

            {currentWord.emoji && (
              <div className="text-8xl mb-4" role="img" aria-label={currentWord.english}>
                {currentWord.emoji}
              </div>
            )}

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
              value={userAnswer}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="Type your answer..."
              className="w-full p-4 text-2xl border-2 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none text-center"
              disabled={feedback !== null}
              autoFocus
            />

            {!feedback && (
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-4 rounded-xl font-bold text-xl hover:bg-purple-600 transition-all"
              >
                Check Answer
              </button>
            )}
          </form>

          {feedback && (
            <div className={`mt-6 p-6 rounded-xl ${feedback.correct ? 'bg-green-100' : 'bg-red-100'
              }`}>
              <div className="flex items-center justify-center gap-3 mb-3">
                {feedback.correct ? (
                  <Check className="w-8 h-8 text-green-600" />
                ) : (
                  <X className="w-8 h-8 text-red-600" />
                )}
                <p className={`font-bold text-xl ${feedback.correct ? 'text-green-800' : 'text-red-800'
                  }`}>
                  {feedback.message}
                </p>
              </div>

              {!feedback.correct && (
                <div className="text-center mt-4">
                  <p className="text-gray-600 mb-2">The correct answer is:</p>
                  <p className="text-green-600 font-bold text-xl">{currentWord.dutch}</p>
                  <button
                    onClick={() => speakDutch(currentWord.dutch)}
                    className="mt-2 bg-green-100 hover:bg-green-200 px-4 py-2 rounded-lg transition-all inline-flex items-center gap-2"
                  >
                    <Volume2 className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-semibold">Hear it</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};