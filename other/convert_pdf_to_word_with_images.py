"""
Convert image-based PDF to Word document with IMAGES preserved
Extracts text using OCR AND embeds the original images from the PDF
Usage: python convert_pdf_to_word_with_images.py [input.pdf] [output.docx] [start_page] [end_page]
"""
import pytesseract
from pdf2image import convert_from_path
from docx import Document
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
import os
import sys
from io import BytesIO

# Set Tesseract path
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
POPPLER_PATH = r'poppler-24.08.0\Library\bin'

def pdf_to_word_with_images(pdf_path, output_docx, start_page=1, end_page=None, 
                            lang='nld+eng', dpi=300, include_ocr_text=True, 
                            max_image_width=6.0):
    """
    Convert image-based PDF to Word document with images preserved
    
    Args:
        pdf_path: Path to input PDF file
        output_docx: Path to save output Word document
        start_page: First page to process (1-indexed)
        end_page: Last page to process (None = all pages)
        lang: Tesseract language for OCR (nld=Dutch, eng=English)
        dpi: Image resolution (higher = better quality but larger file)
        include_ocr_text: If True, include OCR text below images
        max_image_width: Maximum image width in inches (default 6.0)
    """
    
    print(f"\n>> Converting: {pdf_path}")
    print(f">> Output: {output_docx}")
    print(f">> Pages: {start_page} to {end_page or 'end'}")
    print(f">> DPI: {dpi}")
    print(f">> Include OCR text: {include_ocr_text}\n")
    
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
    
    # Set margins to maximize space
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.5)
        section.bottom_margin = Inches(0.5)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)
    
    # Process each page
    for i, image in enumerate(images, start=start_page):
        progress = f"[{i-start_page+1}/{len(images)}]"
        print(f"{progress} Processing page {i}...", end='\r')
        
        # Add page break (except for first page)
        if i > start_page:
            doc.add_page_break()
        
        # Add page number header
        heading = doc.add_paragraph()
        heading.add_run(f'Page {i}').bold = True
        heading.alignment = WD_ALIGN_PARAGRAPH.CENTER
        
        # Convert PIL Image to bytes for embedding
        img_byte_arr = BytesIO()
        image.save(img_byte_arr, format='PNG')
        img_byte_arr.seek(0)
        
        # Add image to document
        try:
            # Calculate image dimensions to fit page width
            img_width, img_height = image.size
            aspect_ratio = img_height / img_width
            
            # Set width (max 6 inches to fit standard page)
            width_inches = min(max_image_width, 6.0)
            height_inches = width_inches * aspect_ratio
            
            # Add the image
            doc.add_picture(img_byte_arr, width=Inches(width_inches))
            
            # Center the image
            last_paragraph = doc.paragraphs[-1]
            last_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
            
        except Exception as e:
            doc.add_paragraph(f"[Error embedding image: {e}]")
        
        # Optionally add OCR text below the image
        if include_ocr_text:
            doc.add_paragraph()  # Add spacing
            
            # Perform OCR
            text = pytesseract.image_to_string(image, lang=lang)
            
            if text.strip():
                # Add a separator
                separator = doc.add_paragraph()
                separator.add_run("--- OCR Text ---").italic = True
                separator.alignment = WD_ALIGN_PARAGRAPH.CENTER
                
                # Add extracted text
                for para_text in text.split('\n\n'):
                    if para_text.strip():
                        p = doc.add_paragraph(para_text.strip())
                        # Make OCR text smaller and gray
                        for run in p.runs:
                            run.font.size = Pt(9)
                            run.font.color.rgb = None  # Default color
    
    # Save Word document
    doc.save(output_docx)
    
    print(f"\n\n[SUCCESS] Converted {len(images)} pages with images")
    print(f"[SAVED] {output_docx}")
    
    # Get file size
    file_size_mb = os.path.getsize(output_docx) / (1024 * 1024)
    print(f"[SIZE] {file_size_mb:.2f} MB")
    
    return output_docx

if __name__ == "__main__":
    # Default values
    input_pdf = 'taal-a1.pdf'
    output_docx = 'taal-a1-with-images.docx'
    start = 1
    end = 5  # Default to 5 pages for testing
    
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
    print("PDF to Word Converter (WITH IMAGES)")
    print("=" * 60)
    
    try:
        pdf_to_word_with_images(
            pdf_path=input_pdf,
            output_docx=output_docx,
            start_page=start,
            end_page=end,
            lang='nld+eng',
            dpi=200,  # Lower DPI for reasonable file size
            include_ocr_text=True,  # Set to False if you only want images
            max_image_width=6.0
        )
        
        print("\n" + "=" * 60)
        print("Conversion Complete!")
        print("=" * 60)
        print("\nOptions:")
        print("  - To exclude OCR text: Set include_ocr_text=False in script")
        print("  - To adjust quality: Change dpi (100-300)")
        print("  - To resize images: Change max_image_width")
        
    except FileNotFoundError as e:
        print(f"\n[ERROR] File not found - {e}")
        print("\nUsage: python convert_pdf_to_word_with_images.py [input.pdf] [output.docx] [start] [end]")
        sys.exit(1)
    except Exception as e:
        print(f"\n[ERROR] {e}")
        print("\nTroubleshooting:")
        print("  - Tesseract: C:\\Program Files\\Tesseract-OCR\\tesseract.exe")
        print("  - Poppler: Download from github.com/oschwartz10612/poppler-windows")
        print("  - Packages: pip install python-docx pdf2image pytesseract Pillow")
        import traceback
        traceback.print_exc()
        sys.exit(1)
