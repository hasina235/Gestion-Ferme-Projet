import React from 'react'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';

const GenererPdf = ({data}) => {

    const generatePDF = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);
    
        const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const bodyFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
        const drawText = (text, x, y, font, size) => {
          page.drawText(text, {
            x,
            y,
            size,
            font,
            color: rgb(0, 0, 0),
          });
        };
    
        // Add Header
        drawText('Rapport de Production', 200, 370, titleFont, 12);
    
        // Add Chapter Title
        drawText('Produits Récoltés', 10, 340, titleFont, 12);
    
        // Add Chapter Body
        let bodyText = '';
        data.forEach(product => {
          bodyText += `Produit: ${product.nomProduit}, type: ${product.typeProduit}, Description: ${product.description} Date de Production: ${product.dateProduction}\n`;
        });
    
        const bodyLines = bodyText.split('\n');
        let yPosition = 320;
        bodyLines.forEach(line => {
          drawText(line, 10, yPosition, bodyFont, 12);
          yPosition -= 15;
        });
    
        // Save the PDF
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        saveAs(blob, 'rapport_production.pdf');
      };
  return (
    <div>
      <button onClick={generatePDF} className='btn'>Générer le Rapport PDF</button>
    </div>
  )
}

export default GenererPdf
