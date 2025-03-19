import formidable from "formidable";
import fs from "fs";
import pdfParse from "pdf-parse";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).send("Error processing file");

    const pdfBuffer = fs.readFileSync(files.pdfFile.filepath);
    const data = await pdfParse(pdfBuffer);
    
    res.status(200).json({ text: data.text });
  });
}
