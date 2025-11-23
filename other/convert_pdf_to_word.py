"""
Simple PDF to Word converter - Run directly without prompts
Usage: python convert_pdf_to_word.py [input.pdf] [output.docx] [start_page] [end_page]
Example: python convert_pdf_to_word.py taal-a1.pdf output.docx 1 10
"""
import pytesseract
from pdf2image import convert_from_path
from docx import Document
from docx.shared import Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH
import os
import sys

# Set Tesseract path
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
POPPLER_PATH = r'poppler-24.08.0\Library\bin'

def pdf_to_word(pdf_path, output_docx, start_page=1, end_page=None, lang='nld+eng', dpi=300):
    """Convert image-based PDF to Word document using OCR"""
    
    print(f"\n>> Converting: {pdf_path}")
    print(f">> Output: {output_docx}")
    print(f">> Pages: {start_page} to {end_page or 'end'}")
    print(f">> DPI: {dpi}\n")
    
    # Convert PDF to images
    print("Converting PDF to images...")
    if os.path.exists(POPPLER_PATH):
        images = convert_from_path(pdf_path, first_page=start_page, last_page=end_page, 
                                   dpi=dpi, poppler_path=POPPLER_PATH)
    else:
        images = convert_from_path(pdf_path, first_page=start_page, last_page=end_page, dpi=dpi)
    
    print(f"[OK] Loaded {len(images)} pages\n")
    
    # Create Word document
    doc = Document()
    style = doc.styles['Normal']
    style.font.name = 'Calibri'
    style.font.size = Pt(11)
    
    # Process each page
    for i, image in enumerate(images, start=start_page):
        progress = f"[{i-start_page+1}/{len(images)}]"
        print(f"{progress} Processing page {i}...", end='\r')
        
        # OCR
        text = pytesseract.image_to_string(image, lang=lang)
        
        # Add to document
        if i > start_page:
            doc.add_page_break()
        
        # Page header
        heading = doc.add_paragraph()
        heading.add_run(f'Page {i}').bold = True
        heading.alignment = WD_ALIGN_PARAGRAPH.CENTER
        
        # Content
        if text.strip():
            for para in text.split('\n\n'):
                if para.strip():
                    doc.add_paragraph(para.strip())
        else:
            doc.add_paragraph('[No text detected]')
    
    # Save
    doc.save(output_docx)
    print(f"\n\n[SUCCESS] Converted {len(images)} pages")
    print(f"[SAVED] {output_docx}")
    
    return output_docx

if __name__ == "__main__":
    # Default values
    input_pdf = 'taal-a1.pdf'
    output_docx = 'taal-a1-converted.docx'
    start = 1
    end = 10
    
    # Parse command line arguments
    if len(sys.argv) > 1:
        input_pdf = sys.argv[1]
    if len(sys.argv) > 2:
        output_docx = sys.argv[2]
    if len(sys.argv) > 3:
        start = int(sys.argv[3])
    if len(sys.argv) > 4:
        end = int(sys.argv[4]) if sys.argv[4].lower() != 'all' else None
    
    print("=" * 60)
    print("PDF to Word Converter (OCR)")
    print("=" * 60)
    
    try:
        pdf_to_word(input_pdf, output_docx, start, end)
        print("\n" + "=" * 60)
        print("Conversion Complete!")
        print("=" * 60)
    except FileNotFoundError as e:
        print(f"\n[ERROR] File not found - {e}")
        print("\nUsage: python convert_pdf_to_word.py [input.pdf] [output.docx] [start] [end]")
        sys.exit(1)
    except Exception as e:
        print(f"\n[ERROR] {e}")
        print("\nTroubleshooting:")
        print("  - Tesseract: C:\\Program Files\\Tesseract-OCR\\tesseract.exe")
        print("  - Poppler: Download from github.com/oschwartz10612/poppler-windows")
        print("  - Packages: pip install python-docx pdf2image pytesseract")
        sys.exit(1)
