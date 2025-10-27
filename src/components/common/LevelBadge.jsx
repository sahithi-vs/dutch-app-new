import React from 'react';

export const LevelBadge = ({ level }) => {
  const isA1 = level === 'A1';
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
      isA1 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
    }`}>
      {level} Level
    </span>
  );
};