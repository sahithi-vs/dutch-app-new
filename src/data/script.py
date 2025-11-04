import re

def extract_words_from_js(content):
    """Extract word objects from JavaScript file content"""
    # Find all objects with dutch, english, level, example pattern
    pattern = r'\{\s*dutch:\s*["\']([^"\']+)["\']'
    matches = re.findall(pattern, content)
    return set(matches)

# Read the files
with open('dutchWordBank.js', 'r', encoding='utf-8') as f:
    a_content = f.read()
    
with open('dutchWordBankA2.js', 'r', encoding='utf-8') as f:
    b_content = f.read()
    
with open('dutchWordBankB1.js', 'r', encoding='utf-8') as f:
    c_content = f.read()

# Extract Dutch words from A and B
dutch_words_ab = extract_words_from_js(a_content) | extract_words_from_js(b_content)

print(f"Found {len(dutch_words_ab)} unique Dutch words in files A and B")

# Find and remove duplicates from C
lines = c_content.split('\n')
output_lines = []
removed_count = 0

for line in lines:
    # Check if this line contains a Dutch word definition
    match = re.search(r'\{\s*dutch:\s*["\']([^"\']+)["\']', line)
    if match:
        dutch_word = match.group(1)
        if dutch_word in dutch_words_ab:
            removed_count += 1
            continue  # Skip this line (it's a duplicate)
    
    output_lines.append(line)

# Write the cleaned content
with open('dutchWordBankB1_cleaned.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print(f"Removed {removed_count} duplicate words")
print(f"Cleaned file saved as: dutchWordBankB1_cleaned.js")