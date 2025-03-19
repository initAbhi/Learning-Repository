"use client"
import { useState } from "react";

export default function PdfChat() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");

  const handleFileUpload = async (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files)
    const formData = new FormData();
    console.log(formData)
    formData.append("pdfFile", e.target.files[0]);
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]); // Logs: "pdfFile", File {...}
      }

    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const data = await res.json();
    setText(data.text);
  };

  const handleAsk = async () => {
    if (!question) return;
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, question }),
    });
    const data = await res.json();
    setMessages([...messages, { user: question, bot: data.answer }]);
    console.log(data.answer)
    setQuestion("");
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileUpload} />
      <div className="chat-box mt-4">
        {messages.map((msg, index) => (
          <div key={index}>
            <p><strong>User:</strong> {msg.user}</p>
            <p><strong>Bot:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask something..." />
      <button onClick={handleAsk}>Ask</button>
    </div>
  );
}
