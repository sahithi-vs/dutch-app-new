import React from 'react';
import { Home, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';
import { LevelBadge } from '../common/LevelBadge';
import { SpeakButton } from '../common/SpeakButton';

export const LearnMode = ({
  currentWord,
  index,
  total,
  onPrevious,
  onNext,
  onStartTest,
  onGoToMenu
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
          <div className="flex justify-between items-center">
            <button
              onClick={onGoToMenu}
              className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all flex items-center gap-2"
            >
              <Home className="w-5 h-5 text-gray-700" />
              <span className="font-semibold">Menu</span>
            </button>
            <div className="text-gray-600 font-semibold">
              {index + 1} / {total}
            </div>
          </div>
          
          <div className="mt-4">
            <ProgressBar 
              current={index + 1} 
              total={total} 
              colorClass="from-blue-500 to-indigo-500" 
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentWord && (
            <div className="text-center">
              <div className="mb-4">
                <LevelBadge level={currentWord.level} />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h2 className="text-6xl font-bold text-indigo-600">{currentWord.dutch}</h2>
                  <SpeakButton text={currentWord.dutch} colorClass="indigo" />
                </div>
                
                <div className="text-4xl font-semibold text-gray-700 mb-2">
                  {currentWord.english}
                </div>
                
                <div className="text-lg text-gray-500 capitalize">
                  {currentWord.category.replace(/_/g, ' ')}
                </div>
              </div>

              <div className="flex gap-4 justify-center mt-8">
                <button
                  onClick={onPrevious}
                  disabled={index === 0}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                
                {index < total - 1 ? (
                  <button
                    onClick={onNext}
                    className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 transition-all flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={onStartTest}
                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all flex items-center gap-2"
                  >
                    Start Test
                    <GraduationCap className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};