"use client";

import { use } from "react";
import Link from "next/link";
import { programmingTools } from "../tools";

export default function ToolDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const tool: any = programmingTools.find((t: any) => t.id === id);

  if (!tool) {
    return (
      <main style={{ minHeight: "100vh", backgroundColor: "#030712", color: "white", padding: "50px", textAlign: "center" }}>
        <h2>Tool Not Found</h2>
        <Link href="/programming" style={{ color: "#34d399" }}>Back to Hub</Link>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#030712", color: "white", padding: "50px 20px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "600px", width: "100%", background: "#1e293b", padding: "30px", borderRadius: "20px", border: "1px solid #334155" }}>
        <Link href="/programming" style={{ color: "#34d399", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>← Back</Link>
        <div style={{ fontSize: "40px", margin: "20px 0 10px 0" }}>{tool.icon}</div>
        <h1 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "10px" }}>{tool.name}</h1>
        <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>{tool.longDescription}</p>
        <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", background: "#059669", color: "white", padding: "12px", borderRadius: "10px", textDecoration: "none", fontWeight: "700" }}>
          Open Website →
        </a>
      </div>
    </main>
  );
}