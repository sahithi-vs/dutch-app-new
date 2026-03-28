import React from 'react';
import { Volume2, Check, X } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';
import { LevelBadge } from '../common/LevelBadge';
import { SpeakButton } from '../common/SpeakButton';

export const MultipleChoice = ({
  currentWord,
  options,
  index,
  total,
  feedback,
  onAnswer
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 p-4">
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
            colorClass="from-orange-500 to-red-500"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="mb-3">
              <LevelBadge level={currentWord.level} />
            </div>
            <p className="text-gray-600 mb-2">What is the English translation of:</p>

            {currentWord.emoji && (
              <div className="text-7xl mb-4" role="img" aria-label={currentWord.english}>
                {currentWord.emoji}
              </div>
            )}

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
                className={`p-4 rounded-xl font-bold text-lg transition-all ${feedback
                    ? feedback.correct && option.english === currentWord.english
                      ? 'bg-green-500 text-white'
                      : !feedback.correct && option.english === currentWord.english
                        ? 'bg-green-500 text-white'
                        : feedback.selectedOption?.english === option.english
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-400'
                    : 'bg-orange-100 text-orange-900 hover:bg-orange-200'
                  } ${feedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option.english}</span>
                  {feedback && option.english === currentWord.english && (
                    <Check className="w-6 h-6" />
                  )}
                  {feedback && !feedback.correct && feedback.selectedOption?.english === option.english && (
                    <X className="w-6 h-6" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {feedback && (
            <div className={`mt-6 p-4 rounded-xl ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
              <p className="font-bold text-center">{feedback.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};