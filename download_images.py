"""
Image Downloader Script for Dutch Learning App
Downloads first 100 word images from Pexels API

Usage: python download_images.py
Requirements: pip install requests
"""

import os
import requests
import time
from pathlib import Path

# Configuration
PEXELS_API_KEY = "85D7PwdsaLNUn4Z9xiaffK2raX13wtW2pYOru57r5je0tYNiVwWlqM0l"  # Replace with your key from .env
OUTPUT_DIR = "public/word-images"
MAX_IMAGES = 100
DELAY_SECONDS = 1  # Delay between requests

# Context mapping for better search results
CONTEXT_MAP = {
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
}

# First 100 most common words
WORDS_TO_DOWNLOAD = [
    'married', 'hello', 'year', 'child', 'come from', 'man', 'name', 'Netherlands',
    'woman', 'to live in', 'bye', 'good afternoon', 'good morning', 'good evening',
    'to greet', 'hi', 'Mr.', 'Mrs.', 'Dutch', 'brother', 'daughter', 'and',
    'family', 'to be called', 'mother', 'grandmother', 'grandfather', 'parent',
    'father', 'son', 'sister', 'I', 'you', 'he', 'she', 'we', 'good',
    'house', 'apartment', 'room', 'kitchen', 'bathroom', 'bedroom',
    'living room', 'garden', 'door', 'window', 'table', 'chair', 'bed', 'sofa',
    'lamp', 'book', 'pen', 'paper', 'computer', 'phone', 'television', 'clock',
    'picture', 'mirror', 'carpet', 'curtain', 'food', 'bread', 'cheese', 'milk',
    'water', 'coffee', 'tea', 'apple', 'banana', 'orange', 'tomato', 'potato',
    'meat', 'fish', 'egg', 'rice', 'pasta', 'soup', 'salad', 'cake', 'cookie',
    'chocolate', 'ice cream', 'breakfast', 'lunch', 'dinner', 'restaurant', 'shop',
    'supermarket', 'market', 'money', 'euro', 'price', 'car', 'bus', 'train',
    'bicycle', 'street', 'city'
]


def get_enhanced_query(word):
    """Add context to search query for better results"""
    lower_word = word.lower().strip()
    return CONTEXT_MAP.get(lower_word, word)


def search_pexels(word, api_key):
    """Search Pexels for an image"""
    enhanced_query = get_enhanced_query(word)
    url = f"https://api.pexels.com/v1/search"
    
    params = {
        'query': enhanced_query,
        'per_page': 1,
        'orientation': 'square'
    }
    
    headers = {
        'Authorization': api_key
    }
    
    try:
        response = requests.get(url, params=params, headers=headers, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        if data.get('photos') and len(data['photos']) > 0:
            return data['photos'][0]['src']['medium']
        return None
    except Exception as e:
        print(f"   Error searching: {e}")
        return None


def download_image(url, filepath):
    """Download image from URL to filepath"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
        return True
    except Exception as e:
        print(f"   Error downloading: {e}")
        return False


def main():
    print("Starting image download...\n")
    
    # Check API key
    if PEXELS_API_KEY == "YOUR_PEXELS_API_KEY_HERE":
        print("ERROR: Please set your Pexels API key in the script!")
        print("   1. Open download_images.py")
        print("   2. Replace 'YOUR_PEXELS_API_KEY_HERE' with your actual key")
        print("   3. Get your key from: https://www.pexels.com/api/\n")
        return
    
    # Create output directory
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(parents=True, exist_ok=True)
    print(f"Output directory: {output_path.absolute()}\n")
    
    downloaded = 0
    failed = 0
    skipped = 0
    
    # Download images
    for i, word in enumerate(WORDS_TO_DOWNLOAD[:MAX_IMAGES], 1):
        # Create filename
        filename = word.lower().replace(' ', '-') + '.jpg'
        filepath = output_path / filename
        
        # Skip if exists
        if filepath.exists():
            print(f"[{i}/{MAX_IMAGES}] SKIPPED: {word} (already exists)")
            skipped += 1
            continue
        
        # Search for image
        print(f"[{i}/{MAX_IMAGES}] Searching: {word}...")
        image_url = search_pexels(word, PEXELS_API_KEY)
        
        if image_url:
            # Download image
            if download_image(image_url, filepath):
                downloaded += 1
                print(f"[{i}/{MAX_IMAGES}] SUCCESS: {word} -> {filename}")
            else:
                failed += 1
                print(f"[{i}/{MAX_IMAGES}] FAILED to download: {word}")
        else:
            failed += 1
            print(f"[{i}/{MAX_IMAGES}] NO IMAGE FOUND: {word}")
        
        # Delay to respect rate limits
        if i < len(WORDS_TO_DOWNLOAD):
            time.sleep(DELAY_SECONDS)
    
    # Summary
    print("\n" + "="*50)
    print("SUMMARY:")
    print(f"Downloaded: {downloaded}")
    print(f"Skipped: {skipped}")
    print(f"Failed: {failed}")
    print(f"Location: {output_path.absolute()}")
    print("="*50)
    print("\nDone! Review the images and delete any unsuitable ones.")


if __name__ == "__main__":
    main()
