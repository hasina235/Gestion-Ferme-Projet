import React from 'react'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';



const RappoortJournalier = ({data}) => {

    const rapportJournalier = async () => {
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
        drawText('Rapport de Production Journalière', 200, 370, titleFont, 12);
    
        // Add Chapter Title
        drawText('Produits Récolté', 10, 340, titleFont, 12);
    
        // Add Chapter Body
        let bodyText = '';
        data.forEach(product => {
          bodyText += `Produit: ${product.nom}, Quantité: ${product.quantite}, Date de Récolte: ${product.date_recolte}\n`;
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
      
    </div>
  )
}

export default RappoortJournalier
