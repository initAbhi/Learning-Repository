import * as use from "@tensorflow-models/universal-sentence-encoder";
import { InMemoryVectorStore } from "llamaindex";

let store = new InMemoryVectorStore();
let embedder;

async function loadEmbedder() {
  if (!embedder) embedder = await use.load();
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  await loadEmbedder();
  const { text, question } = req.body;

  // Convert text into chunks
  const chunks = text.match(/.{1,300}/g); // Split into 300-char chunks
  const vectors = await embedder.embed(chunks);
  chunks.forEach((chunk, index) => store.add(chunk, vectors[index]));

  // Get answer
  const qVector = await embedder.embed([question]);
  const bestMatch = store.search(qVector[0], 1); // Find closest match

  res.status(200).json({ answer: bestMatch ? bestMatch.text : "I couldn't find an answer." });
}
