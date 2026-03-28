/**
 * Clear Image Cache Script
 * Clears cached images from localStorage for specific words
 * Now supports both old (Pexels) and new (Pixabay) cache formats
 * 
 * Usage: 
 * 1. Open your app in the browser
 * 2. Open browser console (F12)
 * 3. Run this script by copying and pasting it into the console
 * 
 * Or run specific commands:
 * - Clear single word: clearWordCache('date')
 * - Clear all images: clearAllImageCache()
 */

// Clear cache for a specific word (clears both old and new cache)
function clearWordCache(word) {
    const oldCacheKey = 'pexels_img_' + word.toLowerCase();
    const newCacheKey = 'pixabay_img_' + word.toLowerCase();

    localStorage.removeItem(oldCacheKey);
    localStorage.removeItem(newCacheKey);
    console.log(`✅ Cleared cache for: ${word}`);
}

// Clear all image caches (both old Pexels and new Pixabay)
function clearAllImageCache() {
    const keysToRemove = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('pexels_img_') || key.startsWith('pixabay_img_'))) {
            keysToRemove.push(key);
        }
    }

    keysToRemove.forEach(key => localStorage.removeItem(key));
    console.log(`✅ Cleared ${keysToRemove.length} cached images (both old and new)`);
}

// Example: Clear cache for problematic words
function clearProblematicWords() {
    const words = ['date', 'bank', 'spring', 'fall', 'light', 'right', 'left', 'watch'];
    words.forEach(word => clearWordCache(word));
    console.log(`✅ Cleared cache for ${words.length} potentially problematic words`);
}

// Instructions
console.log('📝 Image Cache Clearing Script Loaded!');
console.log('');
console.log('Available commands:');
console.log('  clearWordCache("date")        - Clear cache for a specific word');
console.log('  clearAllImageCache()          - Clear ALL cached images');
console.log('  clearProblematicWords()       - Clear cache for common problematic words');
console.log('');
console.log('Example: clearWordCache("date")');
