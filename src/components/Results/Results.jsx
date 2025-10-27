import React from 'react';
import { Trophy, RefreshCw, BookOpen, Home } from 'lucide-react';

export const Results = ({
  score,
  numQuestions,
  onRestartQuiz,
  onReviewWords,
  onGoToMenu
}) => {
  const percentage = Math.round((score / numQuestions) * 100);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center">
        <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {percentage >= 80 ? 'Uitstekend! You\'re ready for the exam!' :
           percentage >= 60 ? 'Goed! Keep practicing!' :
           'Keep learning! Review the words and try again!'}
        </h2>
        <div className="mb-6">
          <div className="text-6xl font-bold text-orange-600 mb-2">{score}/{numQuestions}</div>
          <div className="text-2xl text-gray-600">{percentage}% Correct</div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onRestartQuiz}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Test Again
          </button>
          <button
            onClick={onReviewWords}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Review Words
          </button>
          <button
            onClick={onGoToMenu}
            className="w-full bg-gray-200 text-gray-700 text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};