/**
 * Pexels Image Service
 * Fetches and caches images from Pexels API for Dutch words
 */

const PEXELS_API = 'https://api.pexels.com/v1';
const ACCESS_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const CACHE_PREFIX = 'pexels_img_';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Context mapping for better image search results
 * Enhanced search terms to avoid ambiguous or incorrect Pexels results
 */
const CONTEXT_MAP = {
    // Family members
    'aunt': 'woman aunt family',
    'uncle': 'man uncle family',
    'nephew': 'boy nephew child',
    'niece': 'girl niece child',
    'mother': 'woman mother parent',
    'father': 'man father parent',
    'grandmother': 'elderly woman grandma',
    'grandfather': 'elderly man grandpa',
    'parent': 'parent family',
    'brother': 'boy brother sibling',
    'sister': 'girl sister sibling',
    'daughter': 'girl daughter child',
    'son': 'boy son child',
    'grandchild': 'child grandchild',
    'cousin (male)': 'boy male cousin',
    'cousin (female)': 'girl female cousin',
    'sister in law': 'woman sister-in-law',
    'brother in law': 'man brother-in-law',

    // People & Greetings
    'man': 'man person male',
    'woman': 'woman person female',
    'child': 'child kid young',
    'baby': 'baby infant newborn',
    'boy': 'boy male child',
    'girl': 'girl female child',
    'Mr.': 'man gentleman formal',
    'Mrs.': 'woman lady formal',

    // Abstract concepts
    'free': 'free sign zero',
    'expensive': 'expensive luxury price',
    'cheap': 'cheap discount sale',
    'married': 'wedding rings couple',
    'year': 'calendar year',
    'name': 'name tag label',

    // Actions & Verbs
    'come from': 'person arriving',
    'to live in': 'house home',
    'to greet': 'people greeting handshake',
    'to be called': 'name tag',
    'to hear': 'person listening ear',
    'to talk': 'people talking conversation',
    'have': 'person holding hands',
    'want': 'person wanting desire',
    'need': 'person needing help',
    'like': 'thumbs up happy',
    'love': 'love heart couple',
    'think': 'person thinking',
    'speak': 'person speaking talking',
    'read': 'person reading book',
    'write': 'person writing pen',
    'learn': 'person learning studying',
    'eat': 'person eating food',
    'drink': 'person drinking beverage',
    'walk': 'person walking',
    'run': 'person running jogging',

    // Body parts
    'chin': 'person chin face',
    'forehead': 'person forehead face',
    'elbow': 'person elbow arm',
    'knee': 'person knee leg',

    // Emotions & States
    'happy': 'happy person smiling',
    'sad': 'sad person crying',
    'angry': 'angry person mad',
    'good': 'thumbs up good',
    'nice': 'nice pleasant happy',

    // Places
    'Netherlands': 'netherlands windmill',
    'inside': 'inside interior room',

    // Questions
    'question': 'question mark',
    'answer': 'answer solution',
    'yes': 'yes checkmark',
    'no': 'no cross',

    // Size
    'big': 'big large',
    'small': 'small tiny',
};

function getEnhancedQuery(word) {
    const lowerWord = word.toLowerCase().trim();
    return CONTEXT_MAP[lowerWord] || word;
}

export async function searchImage(query) {
    if (!ACCESS_KEY) {
        console.warn('Pexels API key not configured');
        return null;
    }

    try {
        const enhancedQuery = getEnhancedQuery(query);

        const response = await fetch(
            `${PEXELS_API}/search?query=${encodeURIComponent(enhancedQuery)}&per_page=1&orientation=square`,
            {
                headers: {
                    Authorization: ACCESS_KEY
                }
            }
        );

        if (!response.ok) {
            console.error('Pexels API error:', response.status);
            return null;
        }

        const data = await response.json();

        if (data.photos && data.photos.length > 0) {
            return data.photos[0].src.medium;
        }

        return null;
    } catch (error) {
        console.error('Error fetching from Pexels:', error);
        return null;
    }
}

export function getCachedImage(word) {
    try {
        const cacheKey = CACHE_PREFIX + word.toLowerCase();
        const cached = localStorage.getItem(cacheKey);

        if (!cached) return null;

        const { url, timestamp } = JSON.parse(cached);
        const now = Date.now();

        if (now - timestamp > CACHE_DURATION) {
            localStorage.removeItem(cacheKey);
            return null;
        }

        return url;
    } catch (error) {
        console.error('Error reading cache:', error);
        return null;
    }
}

export function cacheImage(word, url) {
    try {
        const cacheKey = CACHE_PREFIX + word.toLowerCase();
        const cacheData = {
            url,
            timestamp: Date.now()
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error caching image:', error);
    }
}

export function clearExpiredCache() {
    try {
        const now = Date.now();
        const keysToRemove = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key && key.startsWith(CACHE_PREFIX)) {
                const cached = localStorage.getItem(key);
                if (cached) {
                    const { timestamp } = JSON.parse(cached);
                    if (now - timestamp > CACHE_DURATION) {
                        keysToRemove.push(key);
                    }
                }
            }
        }

        keysToRemove.forEach(key => localStorage.removeItem(key));

        if (keysToRemove.length > 0) {
            console.log(`Cleared ${keysToRemove.length} expired image cache entries`);
        }
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
}

/**
 * Get image for a word (with caching)
 * Searches using only the English word for accurate results
 */
export async function getWordImage(englishWord) {
    // Check cache first
    const cached = getCachedImage(englishWord);
    if (cached) {
        return cached;
    }

    // Fetch from Pexels using just the English word
    const url = await searchImage(englishWord);

    if (url) {
        cacheImage(englishWord, url);
    }

    return url;
}
