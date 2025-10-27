import React from 'react';

export const ProgressBar = ({ current, total, colorClass = 'from-orange-500 to-red-500' }) => {
  return (
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r ${colorClass} transition-all duration-300`}
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
};