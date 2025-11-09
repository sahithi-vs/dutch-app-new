import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { getTotalWordCount } from '../../utils/wordBank';

export const Menu = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  openQuestionSelector,
  dutchWordBank 
}) => {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-orange-600 mb-2">🇳🇱 Leer Nederlands</h1>
        <p className="text-gray-600 text-lg">1000 Most Common Dutch Words - Lessons 1-20</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
          <GraduationCap className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-bold">{getTotalWordCount()} Words Available!</span>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-3">Choose a lesson category:</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-2 bg-gray-50 rounded-xl">
          {categories.map(cat => {
            const wordCount = cat === 'all' ? getTotalWordCount() : (dutchWordBank[cat]?.length || 0);
            const hasA1 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A1');
            const hasA2 = cat !== 'all' && dutchWordBank[cat]?.some(w => w.level === 'A2');
            
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`p-3 rounded-xl font-medium transition-all text-xs ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                }`}
              >
                <div className="font-bold text-sm">
                  {cat === 'all' ? 'All Lessons' : cat.replace(/_/g, ' ').replace(/lesson /g, 'L').toUpperCase()}
                </div>
                <div className="opacity-75 mt-1">
                  {wordCount} words
                  {(hasA1 || hasA2) && (
                    <span className="ml-1">
                      {hasA1 && '🟢'} {hasA2 && '🔵'}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => openQuestionSelector('learn')}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <BookOpen className="w-6 h-6" />
          Learn Mode - Study Vocabulary
        </button>
        
        <button
          onClick={() => openQuestionSelector('play')}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <GraduationCap className="w-6 h-6" />
          Multiple Choice Quiz
        </button>
        
        <button
          onClick={() => openQuestionSelector('spelling')}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          ✍️ Spelling Challenge
        </button>
      </div>

      <div className="mt-6 p-4 bg-orange-50 rounded-xl">
        <div className="text-sm text-gray-600 space-y-2">
          <p className="text-center font-bold text-orange-600 mb-2">Official "1000 Most Common Words in Dutch" Course</p>
          <p><span className="font-bold">🟢 A1 Level:</span> Basic essential words for beginners</p>
          <p><span className="font-bold">🔵 A2 Level:</span> Intermediate vocabulary</p>
          <p className="mt-3 text-center font-semibold">📚 Learn Mode → ✅ Multiple Choice → ✍️ Spelling Challenge</p>
          <p className="mt-2 text-center italic">Master Dutch vocabulary step by step!</p>
        </div>
      </div>
    </>
  );
};