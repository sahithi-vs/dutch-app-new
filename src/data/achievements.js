export const achievements = {
  // Word Mastery Achievements
  first_word: {
    id: 'first_word',
    title: '🎯 First Steps',
    description: 'Complete your first word',
    icon: '🎯',
    requirement: 1,
    type: 'words_learned',
    points: 10
  },
  word_collector_10: {
    id: 'word_collector_10',
    title: '📚 Word Collector',
    description: 'Learn 10 words',
    icon: '📚',
    requirement: 10,
    type: 'words_learned',
    points: 50
  },
  word_master_50: {
    id: 'word_master_50',
    title: '🌟 Word Master',
    description: 'Learn 50 words',
    icon: '🌟',
    requirement: 50,
    type: 'words_learned',
    points: 100
  },
  word_champion_100: {
    id: 'word_champion_100',
    title: '👑 Word Champion',
    description: 'Learn 100 words',
    icon: '👑',
    requirement: 100,
    type: 'words_learned',
    points: 250
  },
  word_legend_500: {
    id: 'word_legend_500',
    title: '🏆 Dutch Legend',
    description: 'Learn 500 words',
    icon: '🏆',
    requirement: 500,
    type: 'words_learned',
    points: 500
  },
  
  // Streak Achievements
  streak_3: {
    id: 'streak_3',
    title: '🔥 On Fire',
    description: 'Get a 3-answer streak',
    icon: '🔥',
    requirement: 3,
    type: 'streak',
    points: 20
  },
  streak_5: {
    id: 'streak_5',
    title: '⚡ Lightning Fast',
    description: 'Get a 5-answer streak',
    icon: '⚡',
    requirement: 5,
    type: 'streak',
    points: 50
  },
  streak_10: {
    id: 'streak_10',
    title: '🌪️ Unstoppable',
    description: 'Get a 10-answer streak',
    icon: '🌪️',
    requirement: 10,
    type: 'streak',
    points: 100
  },
  
  // Perfect Score Achievements
  perfect_10: {
    id: 'perfect_10',
    title: '💯 Perfect Ten',
    description: 'Score 10/10 in a quiz',
    icon: '💯',
    requirement: 10,
    type: 'perfect_score',
    points: 75
  },
  perfect_20: {
    id: 'perfect_20',
    title: '🎖️ Flawless Victory',
    description: 'Score 20/20 in a quiz',
    icon: '🎖️',
    requirement: 20,
    type: 'perfect_score',
    points: 150
  },
  
  // Category Completion
  category_complete: {
    id: 'category_complete',
    title: '✅ Category Master',
    description: 'Complete a category',
    icon: '✅',
    requirement: 1,
    type: 'categories_completed',
    points: 100
  },
  all_a1_complete: {
    id: 'all_a1_complete',
    title: '🟢 A1 Graduate',
    description: 'Complete all A1 categories',
    icon: '🟢',
    requirement: 1,
    type: 'a1_complete',
    points: 500
  },
  all_a2_complete: {
    id: 'all_a2_complete',
    title: '🔵 A2 Graduate',
    description: 'Complete all A2 categories',
    icon: '🔵',
    requirement: 1,
    type: 'a2_complete',
    points: 750
  },
  
  // Quiz Achievements
  quiz_master_10: {
    id: 'quiz_master_10',
    title: '📝 Quiz Enthusiast',
    description: 'Complete 10 quizzes',
    icon: '📝',
    requirement: 10,
    type: 'quizzes_completed',
    points: 75
  },
  quiz_master_50: {
    id: 'quiz_master_50',
    title: '🎓 Quiz Master',
    description: 'Complete 50 quizzes',
    icon: '🎓',
    requirement: 50,
    type: 'quizzes_completed',
    points: 200
  },
  
  // Special Achievements
  night_owl: {
    id: 'night_owl',
    title: '🦉 Night Owl',
    description: 'Study between midnight and 5 AM',
    icon: '🦉',
    requirement: 1,
    type: 'special',
    points: 50
  },
  early_bird: {
    id: 'early_bird',
    title: '🐦 Early Bird',
    description: 'Study between 5 AM and 7 AM',
    icon: '🐦',
    requirement: 1,
    type: 'special',
    points: 50
  },
  speed_demon: {
    id: 'speed_demon',
    title: '💨 Speed Demon',
    description: 'Complete a 20-question quiz in under 2 minutes',
    icon: '💨',
    requirement: 1,
    type: 'special',
    points: 100
  },
  polyglot: {
    id: 'polyglot',
    title: '🌍 Polyglot',
    description: 'Master all game modes (Multiple Choice, Spelling, Speaking, Fill Blank)',
    icon: '🌍',
    requirement: 4,
    type: 'game_modes_mastered',
    points: 200
  }
};