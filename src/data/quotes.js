// Motivational quotes for Dutch learners
export const motivationalQuotes = [
    "Every word learned is a step closer to fluency! 🌟",
    "Consistency beats perfection. Keep going! 💪",
    "You're doing amazing! Keep up the momentum! 🚀",
    "Small progress is still progress. Well done! 👏",
    "Learning a language is a journey, not a race. 🛤️",
    "Your future self will thank you for studying today! ⭐",
    "Mistakes are proof that you're trying. Keep it up! 💡",
    "Every expert was once a beginner. You've got this! 🎯",
    "The best time to learn was yesterday. The next best time is now! ⏰",
    "You're one word smarter than you were yesterday! 📚",
    "Believe in yourself - you're making great progress! 🌈",
    "Practice makes progress. You're on the right track! 🎵",
    "Learning Dutch? You're braver than you think! 🦁",
    "Keep pushing forward - fluency is within reach! 🏆",
    "Your dedication is inspiring. Don't stop now! ✨",
    "Every session counts. You're building something amazing! 🏗️",
    "The Dutch language is lucky to have such a dedicated learner! 🇳🇱",
    "You're not just learning words, you're opening doors! 🚪",
    "Celebrate every small victory. You deserve it! 🎉",
    "Your brain is getting stronger with every word! 🧠",
    "Persistence is the key to mastery. You're doing it! 🔑",
    "Don't compare your chapter 1 to someone's chapter 20! 📖",
    "You showed up today. That's already a win! 🏅",
    "Learning is a gift you give yourself. Keep unwrapping! 🎁",
    "Your effort today shapes your fluency tomorrow! 🌅"
];

// Get a random motivational quote
export const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
};

// Get quote of the day (same quote for the whole day)
export const getQuoteOfTheDay = () => {
    const today = new Date().toDateString();
    const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = seed % motivationalQuotes.length;
    return motivationalQuotes[index];
};
