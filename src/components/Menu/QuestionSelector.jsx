import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const QuestionSelector = ({
  pendingGameMode,
  selectedCategory,
  numQuestions,
  setNumQuestions,
  startGameWithQuestions,
  setShowQuestionSelector
}) => {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-orange-600 mb-2">
          {pendingGameMode === 'play' ? '📝 Multiple Choice Quiz' : 
           pendingGameMode === 'spelling' ? '✍️ Spelling Challenge' : 
           '📚 Learn Mode - Study Vocabulary'}
        </h2>
        <p className="text-gray-600 text-lg">How many words would you like to study?</p>
      </div>

      <div className="mb-8">
        <label className="block text-gray-700 font-semibold mb-4 text-center">
          Selected Category: <span className="text-orange-600">
            {selectedCategory === 'all' ? 'All Lessons' : selectedCategory.replace(/_/g, ' ').toUpperCase()}
          </span>
        </label>
        
        <div className="bg-gray-50 p-6 rounded-xl">
          <label className="block text-gray-700 font-semibold mb-3 text-center">
            Number of Questions (10-45):
          </label>
          <input
            type="range"
            min="10"
            max="45"
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #f97316 0%, #f97316 ${((numQuestions - 10) / 35) * 100}%, #fed7aa ${((numQuestions - 10) / 35) * 100}%, #fed7aa 100%)`
            }}
          />
          <div className="text-center mt-4">
            <span className="text-5xl font-bold text-orange-600">{numQuestions}</span>
            <span className="text-2xl text-gray-600 ml-2">questions</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Min: 10</span>
            <span>Max: 45</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={startGameWithQuestions}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          {pendingGameMode === 'learn' ? 'Start Learning' : 'Start quiz with'} {numQuestions} {pendingGameMode === 'learn' ? 'Words' : 'Questions'}
          <ChevronRight className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => setShowQuestionSelector(false)}
          className="w-full bg-gray-200 text-gray-700 text-lg font-bold py-3 rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Category Selection
        </button>
      </div>
    </>
  );
};