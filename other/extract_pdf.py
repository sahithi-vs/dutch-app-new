from pypdf import PdfReader
import sys

try:
    with open('taal-a1.pdf', 'rb') as pdf_file:
        reader = PdfReader(pdf_file)
        print(f"Total pages: {len(reader.pages)}")
        
        text = ''
        for i, page in enumerate(reader.pages):
            page_text = page.extract_text()
            text += page_text
            if i < 3:  # Print first 3 pages as sample
                print(f"\n--- Page {i+1} ---")
                print(page_text[:500])  # First 500 chars
        
        with open('taal-a1.txt', 'w', encoding='utf-8') as output:
            output.write(text)
        
        print(f"\n\nSuccessfully extracted {len(reader.pages)} pages")
        print(f"Total characters: {len(text)}")
        
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
