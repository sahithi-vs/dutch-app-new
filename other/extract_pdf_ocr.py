"""
OCR-based PDF text extraction script
Extracts text from scanned PDF images using Tesseract OCR
"""
import pytesseract
from pdf2image import convert_from_path
from PIL import Image
import os

# Set Tesseract path (adjust if needed)
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Poppler path - points to extracted poppler directory
POPPLER_PATH = r'poppler-24.08.0\Library\bin'

def extract_text_from_pdf(pdf_path, output_path, start_page=1, end_page=None, lang='nld+eng'):
    """
    Extract text from PDF using OCR
    
    Args:
        pdf_path: Path to PDF file
        output_path: Path to save extracted text
        start_page: First page to process (1-indexed)
        end_page: Last page to process (None = all pages)
        lang: Tesseract language (nld=Dutch, eng=English)
    """
    print(f"Converting PDF to images...")
    
    try:
        # Convert PDF pages to images
        if os.path.exists(POPPLER_PATH):
            images = convert_from_path(
                pdf_path,
                first_page=start_page,
                last_page=end_page,
                poppler_path=POPPLER_PATH
            )
        else:
            print(f"WARNING: Poppler path not found: {POPPLER_PATH}")
            print("Trying without poppler path...")
            images = convert_from_path(
                pdf_path,
                first_page=start_page,
                last_page=end_page
            )
        
        print(f"Processing {len(images)} pages with OCR...")
        
        all_text = []
        for i, image in enumerate(images, start=start_page):
            print(f"  Processing page {i}/{start_page + len(images) - 1}...", end='\r')
            
            # Perform OCR on the image
            text = pytesseract.image_to_string(image, lang=lang)
            all_text.append(f"\n\n{'='*50}\nPAGE {i}\n{'='*50}\n\n{text}")
        
        # Save to file
        full_text = '\n'.join(all_text)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(full_text)
        
        print(f"\n\nSuccessfully extracted text from {len(images)} pages")
        print(f"Total characters: {len(full_text)}")
        print(f"Output saved to: {output_path}")
        
        # Show first 500 characters as preview
        print(f"\n--- Preview (first 500 chars) ---")
        print(full_text[:500])
        
        return full_text
        
    except Exception as e:
        print(f"Error: {e}")
        print("\nTroubleshooting:")
        print("1. Make sure Tesseract is installed: C:\\Program Files\\Tesseract-OCR\\tesseract.exe")
        print("2. Install poppler from: https://github.com/oschwartz10612/poppler-windows/releases/")
        print("3. Update POPPLER_PATH in this script to point to poppler's bin folder")
        raise

if __name__ == "__main__":
    # Extract first 10 pages as a test
    print("Starting OCR extraction...")
    print("NOTE: This will take several minutes for 345 pages!")
    print("Processing first 10 pages as a test...\n")
    
    extract_text_from_pdf(
        pdf_path='taal-a1.pdf',
        output_path='taal-a1-ocr.txt',
        start_page=1,
        end_page=10,  # Change to None to process all 345 pages
        lang='nld+eng'  # Dutch + English
    )
    
    print("\n\nTo process ALL pages, change end_page=None in the script")
