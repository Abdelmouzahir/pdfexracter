// pages/api/parse-pdf.js
import fs from 'fs';
import pdfParse from 'pdf-parse';



export const config = {
    api: {
      bodyParser: false, // Disable the default bodyParser to handle file streams
    },
  };

  export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const chunks = [];
        req.on('data', chunk => {
          chunks.push(chunk);
        });
  
        req.on('end', async () => {
          const buffer = Buffer.concat(chunks);
          const data = await pdfParse(buffer);
  
          // Extract text from the PDF
          const text = data.text;
  
          res.status(200).json({ text });
        });
      } catch (error) {
        res.status(500).json({ error: 'Failed to parse PDF' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }