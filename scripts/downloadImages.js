/**
 * Image Downloader Script
 * Downloads first 100 word images from Pexels for review
 * 
 * Usage: node scripts/downloadImages.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PEXELS_API_KEY = process.env.VITE_PEXELS_API_KEY || 'YOUR_PEXELS_API_KEY';
const OUTPUT_DIR = path.join(__dirname, '../public/word-images');
const MAX_IMAGES = 100;
const DELAY_MS = 1000; // 1 second delay between requests to respect rate limits

// Context mapping (same as in unsplashService.js)
const CONTEXT_MAP = {
    'free': 'free coffee sign price',
    'expensive': 'expensive price tag luxury',
    'cheap': 'cheap price discount sale',
    'chin': 'person chin face',
    'forehead': 'person forehead face',
    'elbow': 'person elbow arm',
    'knee': 'person knee leg',
    'have': 'person holding hands',
    'want': 'person wanting desire',
    'need': 'person needing help',
    'like': 'person happy enjoying',
    'love': 'love heart couple',
    'think': 'person thinking contemplating',
    'speak': 'person speaking talking',
    'read': 'person reading book',
    'write': 'person writing pen',
    'learn': 'person learning studying',
    'eat': 'person eating food',
    'drink': 'person drinking beverage',
    'walk': 'person walking street',
    'run': 'person running jogging',
    'happy': 'happy person smiling',
    'sad': 'sad person crying',
    'angry': 'angry person mad',
};

// First 100 most common words (extracted from your word bank)
const WORDS_TO_DOWNLOAD = [
    'married', 'hello', 'year', 'child', 'come from', 'man', 'name', 'Netherlands',
    'woman', 'to live in', 'bye', 'good afternoon', 'good morning', 'good evening',
    'to greet', 'hi', 'Mr.', 'Mrs.', 'Dutch', 'brother', 'daughter', 'and',
    'family', 'to be called', 'mother', 'grandmother', 'grandfather', 'parent',
    'father', 'son', 'sister', 'I', 'you', 'he', 'she', 'we', 'good',
    'How are you?', 'house', 'apartment', 'room', 'kitchen', 'bathroom', 'bedroom',
    'living room', 'garden', 'door', 'window', 'table', 'chair', 'bed', 'sofa',
    'lamp', 'book', 'pen', 'paper', 'computer', 'phone', 'television', 'clock',
    'picture', 'mirror', 'carpet', 'curtain', 'food', 'bread', 'cheese', 'milk',
    'water', 'coffee', 'tea', 'apple', 'banana', 'orange', 'tomato', 'potato',
    'meat', 'fish', 'egg', 'rice', 'pasta', 'soup', 'salad', 'cake', 'cookie',
    'chocolate', 'ice cream', 'breakfast', 'lunch', 'dinner', 'restaurant', 'shop',
    'supermarket', 'market', 'money', 'euro', 'price'
];

function getEnhancedQuery(word) {
    const lowerWord = word.toLowerCase().trim();
    return CONTEXT_MAP[lowerWord] || word;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function searchPexels(query) {
    const enhancedQuery = getEnhancedQuery(query);
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(enhancedQuery)}&per_page=1&orientation=square`;

    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'Authorization': PEXELS_API_KEY
            }
        };

        https.get(url, options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.photos && json.photos.length > 0) {
                        resolve(json.photos[0].src.medium);
                    } else {
                        resolve(null);
                    }
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', reject);
    });
}

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            response.pipe(file);

            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
}

async function main() {
    console.log('🚀 Starting image download...\n');
    console.log(`📁 Output directory: ${OUTPUT_DIR}\n`);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        console.log('✅ Created output directory\n');
    }

    let downloaded = 0;
    let failed = 0;
    let skipped = 0;

    for (let i = 0; i < Math.min(WORDS_TO_DOWNLOAD.length, MAX_IMAGES); i++) {
        const word = WORDS_TO_DOWNLOAD[i];
        const fileName = word.toLowerCase().replace(/\s+/g, '-') + '.jpg';
        const filePath = path.join(OUTPUT_DIR, fileName);

        // Skip if file already exists
        if (fs.existsSync(filePath)) {
            console.log(`⏭️  [${i + 1}/${MAX_IMAGES}] Skipped: ${word} (already exists)`);
            skipped++;
            continue;
        }

        try {
            console.log(`🔍 [${i + 1}/${MAX_IMAGES}] Searching: ${word}...`);

            const imageUrl = await searchPexels(word);

            if (imageUrl) {
                await downloadImage(imageUrl, filePath);
                downloaded++;
                console.log(`✅ [${i + 1}/${MAX_IMAGES}] Downloaded: ${word} → ${fileName}`);
            } else {
                failed++;
                console.log(`❌ [${i + 1}/${MAX_IMAGES}] No image found: ${word}`);
            }

            // Delay to respect rate limits
            if (i < WORDS_TO_DOWNLOAD.length - 1) {
                await delay(DELAY_MS);
            }
        } catch (error) {
            failed++;
            console.error(`❌ [${i + 1}/${MAX_IMAGES}] Error downloading ${word}:`, error.message);
        }
    }

    console.log('\n📊 Summary:');
    console.log(`✅ Downloaded: ${downloaded}`);
    console.log(`⏭️  Skipped: ${skipped}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📁 Location: ${OUTPUT_DIR}`);
    console.log('\n🎉 Done! Review the images and delete any that are not suitable.');
}

main().catch(console.error);
