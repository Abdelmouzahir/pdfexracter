// pages/api/parse-pdf.js
import fs from 'fs';
import pdfParse from 'pdf-parse';

export default async function handler(req, res) {

  const fs = require('fs');
  
  if (req.method === 'POST') {
    const fileBuffer = req.body;

    try {
      // Parse the PDF using pdf-parse
      const data = await pdfParse(fileBuffer);
      res.status(200).json({ text: data.text });
    } catch (error) {
      res.status(500).json({ error: 'Failed to parse PDF' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
