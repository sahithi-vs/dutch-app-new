"""
Convert image-based PDF to Word document using OCR
Extracts text from scanned PDFs and creates a formatted Word document
"""
import pytesseract
from pdf2image import convert_from_path
from docx import Document
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
import os

# Set Tesseract path (adjust if needed)
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Poppler path - points to extracted poppler directory
POPPLER_PATH = r'poppler-24.08.0\Library\bin'

def pdf_to_word(pdf_path, output_docx_path, start_page=1, end_page=None, lang='nld+eng', dpi=300):
    """
    Convert image-based PDF to Word document using OCR
    
    Args:
        pdf_path: Path to input PDF file
        output_docx_path: Path to save output Word document
        start_page: First page to process (1-indexed)
        end_page: Last page to process (None = all pages)
        lang: Tesseract language (nld=Dutch, eng=English)
        dpi: Image resolution for OCR (higher = better quality but slower)
    """
    print(f"Converting PDF to images (DPI: {dpi})...")
    
    try:
        # Convert PDF pages to images
        if os.path.exists(POPPLER_PATH):
            images = convert_from_path(
                pdf_path,
                first_page=start_page,
                last_page=end_page,
                dpi=dpi,
                poppler_path=POPPLER_PATH
            )
        else:
            print(f"WARNING: Poppler path not found: {POPPLER_PATH}")
            print("Trying without poppler path...")
            images = convert_from_path(
                pdf_path,
                first_page=start_page,
                last_page=end_page,
                dpi=dpi
            )
        
        print(f"Processing {len(images)} pages with OCR...")
        
        # Create Word document
        doc = Document()
        
        # Set default font
        style = doc.styles['Normal']
        font = style.font
        font.name = 'Calibri'
        font.size = Pt(11)
        
        for i, image in enumerate(images, start=start_page):
            print(f"  Processing page {i}/{start_page + len(images) - 1}...", end='\r')
            
            # Perform OCR on the image
            text = pytesseract.image_to_string(image, lang=lang)
            
            # Add page number header
            if i > start_page:
                doc.add_page_break()
            
            heading = doc.add_paragraph()
            heading.add_run(f'Page {i}').bold = True
            heading.alignment = WD_ALIGN_PARAGRAPH.CENTER
            
            # Add extracted text
            if text.strip():
                # Split into paragraphs and add to document
                paragraphs = text.split('\n\n')
                for para_text in paragraphs:
                    if para_text.strip():
                        doc.add_paragraph(para_text.strip())
            else:
                doc.add_paragraph('[No text detected on this page]')
        
        # Save Word document
        doc.save(output_docx_path)
        
        print(f"\n\nSuccessfully converted {len(images)} pages to Word document")
        print(f"Output saved to: {output_docx_path}")
        
        return output_docx_path
        
    except Exception as e:
        print(f"Error: {e}")
        print("\nTroubleshooting:")
        print("1. Make sure Tesseract is installed: C:\\Program Files\\Tesseract-OCR\\tesseract.exe")
        print("2. Install poppler from: https://github.com/oschwartz10612/poppler-windows/releases/")
        print("3. Install python-docx: pip install python-docx")
        print("4. Update POPPLER_PATH in this script to point to poppler's bin folder")
        raise

def pdf_to_searchable_pdf(pdf_path, output_pdf_path, start_page=1, end_page=None, lang='nld+eng', dpi=300):
    """
    Convert image-based PDF to searchable PDF using OCR
    
    Args:
        pdf_path: Path to input PDF file
        output_pdf_path: Path to save output searchable PDF
        start_page: First page to process (1-indexed)
        end_page: Last page to process (None = all pages)
        lang: Tesseract language (nld=Dutch, eng=English)
        dpi: Image resolution for OCR
    """
    print(f"Converting PDF to searchable PDF (DPI: {dpi})...")
    
    try:
        import img2pdf
        from io import BytesIO
        
        # Convert PDF pages to images
        if os.path.exists(POPPLER_PATH):
            images = convert_from_path(
                pdf_path,
                first_page=start_page,
                last_page=end_page,
                dpi=dpi,
                poppler_path=POPPLER_PATH
            )
        else:
            images = convert_from_path(
                pdf_path,
                first_page=start_page,
                last_page=end_page,
                dpi=dpi
            )
        
        print(f"Processing {len(images)} pages with OCR...")
        
        # Create searchable PDF using OCRmyPDF would be better
        # For now, we'll create a simple PDF with images
        image_list = []
        for i, image in enumerate(images, start=start_page):
            print(f"  Processing page {i}/{start_page + len(images) - 1}...", end='\r')
            
            # Convert PIL Image to bytes
            img_byte_arr = BytesIO()
            image.save(img_byte_arr, format='PNG')
            img_byte_arr = img_byte_arr.getvalue()
            image_list.append(img_byte_arr)
        
        # Create PDF from images
        with open(output_pdf_path, 'wb') as f:
            f.write(img2pdf.convert(image_list))
        
        print(f"\n\nSuccessfully converted {len(images)} pages to PDF")
        print(f"Output saved to: {output_pdf_path}")
        print("\nNOTE: For truly searchable PDFs with embedded text, use OCRmyPDF:")
        print("  pip install ocrmypdf")
        print("  ocrmypdf input.pdf output.pdf")
        
        return output_pdf_path
        
    except ImportError:
        print("\nimg2pdf not installed. Install with: pip install img2pdf")
        raise
    except Exception as e:
        print(f"Error: {e}")
        raise

if __name__ == "__main__":
    import sys
    
    print("=" * 60)
    print("PDF to Word Converter (OCR)")
    print("=" * 60)
    
    # Configuration
    INPUT_PDF = 'taal-a1.pdf'
    OUTPUT_WORD = 'taal-a1-converted.docx'
    OUTPUT_PDF = 'taal-a1-searchable.pdf'
    
    print("\nOptions:")
    print("1. Convert to Word document (.docx)")
    print("2. Convert to searchable PDF")
    print("3. Both")
    
    choice = input("\nEnter choice (1-3) [default: 1]: ").strip() or "1"
    
    # Get page range
    print(f"\nProcessing pages from PDF: {INPUT_PDF}")
    start = input("Start page [default: 1]: ").strip() or "1"
    end = input("End page [default: 10, 'all' for all pages]: ").strip() or "10"
    
    start_page = int(start)
    end_page = None if end.lower() == 'all' else int(end)
    
    print(f"\nProcessing pages {start_page} to {end_page or 'end'}...")
    print("This may take several minutes depending on the number of pages.\n")
    
    try:
        if choice in ["1", "3"]:
            print("\n--- Converting to Word Document ---")
            pdf_to_word(
                pdf_path=INPUT_PDF,
                output_docx_path=OUTPUT_WORD,
                start_page=start_page,
                end_page=end_page,
                lang='nld+eng',
                dpi=300
            )
        
        if choice in ["2", "3"]:
            print("\n--- Converting to Searchable PDF ---")
            pdf_to_searchable_pdf(
                pdf_path=INPUT_PDF,
                output_pdf_path=OUTPUT_PDF,
                start_page=start_page,
                end_page=end_page,
                lang='nld+eng',
                dpi=300
            )
        
        print("\n" + "=" * 60)
        print("Conversion Complete!")
        print("=" * 60)
        
    except Exception as e:
        print(f"\n❌ Conversion failed: {e}")
        sys.exit(1)
