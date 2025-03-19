import formidable from "formidable";
import fs from "fs";
import pdfParse from "pdf-parse";
import { NextResponse } from "next/server";

export const config = { api: { bodyParser: false } };

export async function POST(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  console.log(req.body);

    const form = new formidable.IncomingForm();
  //   console.log(form)
  //   form.parse(req, async (err, fields, files) => {
  // console.log(files)
  // if (!files.pdfFile) {
  //     return res.status(400).json({ error: "No file uploaded" });
  //   }

  // if (err) return res.status(500).send("Error processing file");

  // const pdfBuffer = fs.readFileSync(files.pdfFile.filepath);
  // const data = await pdfParse(pdfBuffer);

  // res.status(200).json({ text: data.text });
  //   });
  return NextResponse.json({ message: "Hello from upload API!" });
}
