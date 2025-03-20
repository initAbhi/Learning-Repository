import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Define upload directory
    const uploadDir = path.join(process.cwd(), "public/uploads");

    // Ensure the directory exists
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Define file path
    const filePath = path.join(uploadDir, file.name);

    // Save file
    await writeFile(filePath, buffer);

    return NextResponse.json({ message: "File uploaded successfully", filePath });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
