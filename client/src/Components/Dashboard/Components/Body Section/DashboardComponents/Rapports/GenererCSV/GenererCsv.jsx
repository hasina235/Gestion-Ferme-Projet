import React, { useState } from 'react'
import { Parser } from 'json2csv';

const GenererCsv = () => {
    const [produits, setProduits] = useState([]);

    const downloadCsv = () => {
        try {
            const json2csvParser = new Parser();
            const csv = json2csvParser.parse(produits);

            const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'data.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('erreur de conversion JSON to CSV', error);
        }
    }
  return (
    <div>
      <button onClick={downloadCsv}>Télécharger CSV</button>
    </div>
  )
}

export default GenererCsv
